import { Environment } from './threejs/Environment.js';
import { ThreeHelpers } from './threejs/ThreeHelpers.js';
import { MouseState } from './threejs/MouseState.js';
import { KeyboardState } from './threejs/KeyboardState.js';
import { OrbitControls } from './threejs/OrbitControls.js'
import * as THREE from './threejs/three.module.js';

let canvasContainer = document.getElementById('canvas-container');
let environment = new Environment(canvasContainer);
var raycaster = new THREE.Raycaster();
let mouse = new MouseState();
let keyboard = new KeyboardState();

// allow orbit controls
let controls = new OrbitControls(environment.camera, canvasContainer);
controls.target = new THREE.Vector3(0, 0, 0);
controls.maxDistance = 150;

// used for drag & drop
let helperPlane = new THREE.Mesh(new THREE.PlaneBufferGeometry(500, 500, 8, 8), ThreeHelpers.getRandomMaterial());
let offset = new THREE.Vector3();
let cursorDraggableObjects = [];
let mouseDraggableObjects = [];
let intersects = [];
let selection = null;
let cursorGrabActive = false;
let grabbedObject = false;
let activeCursorSelection = null;

// setup objects
let box = new THREE.Mesh(new THREE.BoxBufferGeometry(0.3, 0.3, 0.3), ThreeHelpers.getRandomMaterial(0xffffff));
let cylinder =  new THREE.Mesh(new THREE.CylinderBufferGeometry(0.2, 0.2, 0.2, 64), ThreeHelpers.getRandomMaterial(0xffffff));
let cone = new THREE.Mesh(new THREE.ConeBufferGeometry(0.2, 0.4, 64), ThreeHelpers.getRandomMaterial(0x00ff00));
let lineGeometry = new THREE.Geometry();
let cursorRay = new THREE.Raycaster();
let rayDirection = new THREE.Vector3();
let rayEnd = new THREE.Vector3();
rayDirection.set(0, 1, 0);
rayEnd.addVectors(cone.position, rayDirection.clone());
cursorRay.set(cone.position, rayDirection);
lineGeometry.vertices.push(new THREE.Vector3(-1, -1, 1), new THREE.Vector3(0, 0, 0));
lineGeometry.vertices[0].copy(cone.position);
lineGeometry.vertices[1].copy(rayEnd);
let pointerLine = new THREE.Line(lineGeometry, new THREE.LineBasicMaterial({ color: 0x00afff }));
cone.add(pointerLine);

// move objects to start point
cylinder.position.x = -0.4;
box.position.x = 0.4;

// more setup
helperPlane.visible = false;
mouseDraggableObjects.push(cone);
cursorDraggableObjects.push(box, cylinder, cone);
environment.addObjects(cone, box, cylinder, helperPlane);
canvasContainer.appendChild(environment.renderer.domElement);


// Register event handlers \\
window.addEventListener('mousedown', event => {
    mouse.updateState(event, true);

    // Get mouse position
    var mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    var mouseY = - ((event.clientY - canvasContainer.offsetTop) / canvasContainer.offsetHeight) * 2 + 1;
    
    // Get 3D vector from 3D mouse position using 'unproject' function
    var vector = new THREE.Vector3(mouseX, mouseY, 1);
    vector.unproject(environment.camera);

    // Set the raycaster position
    raycaster.set(environment.camera.position, vector.sub(environment.camera.position).normalize());

    // Find all intersected objects
    intersects = raycaster.intersectObjects(mouseDraggableObjects);

    if(intersects.length != 0){
        // disable orbital control if object is moved
        controls.enabled = false;

        // Set the selection - first intersected object
        selection = intersects[0].object;

        // Calculate the offset
        intersects = raycaster.intersectObject(helperPlane);
        offset.copy(intersects[0].point).sub(helperPlane.position);
    }  
});

window.addEventListener('keydown', (event) => {
    if(event.code == "Space"){
        cursorGrabActive = !cursorGrabActive;
        if(!cursorGrabActive){
            // handle edge case of unselect while multiple objects are intersected and the previously
            // grabbed object has a larger distance than the other intersected object; update would
            // only occur on mousemove but if mouse is not moved the wrong object would stay highlighted.
            handleIntersections();
        }
}        

    // change color of cone based on active grab
    if(cursorGrabActive)
        cone.material.color.setHex(0xff4500);
    else
        cone.material.color.setHex(0x00ff00);
    
    // update keyboard state (pressed buttons)
    keyboard.update(event);
 });

canvasContainer.addEventListener('mousemove', event => {
    /////////////////// update mouse raycaster ///////////////////
    let mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    let mouseY = - ((event.clientY - canvasContainer.offsetTop) / canvasContainer.offsetHeight) * 2 + 1;
    let rotMultiplier = 2;

    // Get 3D vector from 3D mouse position using 'unproject' function
    let vector = new THREE.Vector3(mouseX, mouseY, 1);
    vector.unproject(environment.camera);

    // Set the raycaster position
    raycaster.set(environment.camera.position, vector.sub(environment.camera.position).normalize());

    if(keyboard.altKeyActive && selection){
        selection.rotation.x -= (mouseY - mouse.position.y) * rotMultiplier;
        selection.rotation.z -= (mouseX - mouse.position.x) * rotMultiplier;
    }
    else if(selection){
        // Check the position where the plane is intersected
        intersects = raycaster.intersectObject(helperPlane);
        // Reposition the object based on the intersection point with the plane
        selection.position.copy(intersects[0].point.sub(offset));
    }
    else {
        // Update position of the plane if needed
        intersects = raycaster.intersectObjects(mouseDraggableObjects);
        if (intersects.length != 0) {
            helperPlane.position.copy(intersects[0].object.position);
            helperPlane.lookAt(environment.camera.position);
        }
    }

    mouse.updatePosition(mouseX, mouseY);

    /////////////////// update cursor raycaster ///////////////////    
    // update ray and apply rotation (apply Euler from cone)
    cursorRay.set(cone.position, new THREE.Vector3(0,1,0).normalize().applyEuler(cone.rotation));
    handleIntersections();
});

function handleIntersections(){
    // handle activeCursorSelection case
    if(activeCursorSelection != null){
        if(cursorGrabActive){
            pointerLine.attach(activeCursorSelection);
            grabbedObject = true;
        }
        // detach object from pointer line
        if(pointerLine.children.length != 0 && !cursorGrabActive){
            // we need to manually update the position of the grabbed object since it's
            // values don't get updated while grabbed
            let newPosition = activeCursorSelection.getWorldPosition(new THREE.Vector3());
            let newRotation = activeCursorSelection.getWorldQuaternion(new THREE.Quaternion());
            activeCursorSelection.position.copy(newPosition);
            activeCursorSelection.setRotationFromQuaternion(newRotation);
            environment.addObjects(activeCursorSelection);
            grabbedObject = false;
        }
    }

    // check selection of cursor
    let cursorIntersects = cursorRay.intersectObjects(cursorDraggableObjects);
    if(cursorIntersects.length != 0 && cursorIntersects[0].distance < 1){
        if(!grabbedObject && pointerLine.children.length == 0){
            // handle intersections with multiple objects
            if(activeCursorSelection != null)
                activeCursorSelection.material.color.setHex(0xffffff);

            activeCursorSelection = cursorIntersects[0].object;
            activeCursorSelection.material.color.setHex(0xff0000);
            pointerLine.material.color.setHex(0xff0000);
        }        
    }
    // reset color if intersections are back to 0
    else if(activeCursorSelection != null && pointerLine.children.length == 0){
            activeCursorSelection.material.color.setHex(0xffffff);
            pointerLine.material.color.setHex(0x00afff);
            activeCursorSelection = null;
    }
}

document.addEventListener('mouseup', event => {
    mouse.updateState(event, false);
    controls.enabled = true;
    selection = null;
});

document.addEventListener('keyup', (event) => {
    keyboard.shiftKeyActive = event.shiftKey;
    keyboard.altKeyActive = event.altKey;
});

function render() {
    raycaster.setFromCamera(mouse.position, environment.camera);
    environment.renderer.render(environment.scene, environment.camera);
}

window.onload = function(){
    environment.renderer.setAnimationLoop(render);
}

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
let draggableObjects = [];
let intersects = [];
let selection = null;

// setup objects
let box = new THREE.Mesh(new THREE.BoxBufferGeometry(0.3, 0.3, 0.3), ThreeHelpers.getRandomMaterial());
let cylinder =  new THREE.Mesh(new THREE.CylinderBufferGeometry(0.2, 0.2, 0.2, 64), ThreeHelpers.getRandomMaterial());
cylinder.position.y = -0.3;

// set background
//let imgPath = "/~romuit02/assets/images/backgroundTexture/";
//environment.addBackground(imgPath + "posx.jpg", imgPath + "negx.jpg", imgPath + "posy.jpg", imgPath + "negy.jpg", imgPath + "posz.jpg", imgPath + "negz.jpg");

helperPlane.visible = false;
draggableObjects.push(box, cylinder);
environment.addObjects(box, cylinder, helperPlane);
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
    intersects = raycaster.intersectObjects(draggableObjects);

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

window.addEventListener('keydown', (event) => { keyboard.update(event); });

canvasContainer.addEventListener('mousemove', event => {
    let mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    let mouseY = - ((event.clientY - canvasContainer.offsetTop) / canvasContainer.offsetHeight) * 2 + 1;
    let rotMultiplier = 2;

    // Get 3D vector from 3D mouse position using 'unproject' function
    let vector = new THREE.Vector3(mouseX, mouseY, 1);
    vector.unproject(environment.camera);

    // Set the raycaster position
    raycaster.set(environment.camera.position, vector.sub(environment.camera.position).normalize());

    if(selection && keyboard.altKeyActive){
        selection.rotation.x += (mouse.position.y - mouseY) * rotMultiplier;
        selection.rotation.z += (mouse.position.x - mouseX) * rotMultiplier;
    }
    else if(selection){
        // Check the position where the plane is intersected
        intersects = raycaster.intersectObject(helperPlane);
        // Reposition the object based on the intersection point with the plane
        selection.position.copy(intersects[0].point.sub(offset));
    }
    else {
        // Update position of the plane if needed
        intersects = raycaster.intersectObjects(draggableObjects);
        if (intersects.length != 0) {
            helperPlane.position.copy(intersects[0].object.position);
            helperPlane.lookAt(environment.camera.position);
        }
    }

    mouse.updatePosition(mouseX, mouseY);
});

document.addEventListener('mouseup', event => {
    mouse.updateState(event, false);
    controls.enabled = true;
    selection = null;
});

document.addEventListener('keyup', (event) => {
    keyboard.shiftKeyActive = event.shiftKey;
    keyboard.altKeyActive = event.altKey;
});
// Register event handlers \\

function render() {
    raycaster.setFromCamera(mouse.position, environment.camera);
    environment.renderer.render(environment.scene, environment.camera);
}

window.onload = function(){
    environment.renderer.setAnimationLoop(render);
}


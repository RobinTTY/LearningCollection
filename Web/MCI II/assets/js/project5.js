import { Environment } from './threejs/Environment.js';
import { ThreeHelpers } from './threejs/ThreeHelpers.js';
import { MouseState } from './threejs/MouseState.js';
import { KeyboardState } from './threejs/KeyboardState.js';
import * as THREE from './threejs/three.module.js';

let canvasContainer = document.getElementById('canvas-container');
let environment = new Environment(canvasContainer);
let mouse = new MouseState();
let keyboard = new KeyboardState();

// setup objects
let box = new THREE.Mesh(new THREE.BoxBufferGeometry(0.3, 0.3, 0.3), ThreeHelpers.getRandomMaterial());
let cylinder =  new THREE.Mesh(new THREE.CylinderBufferGeometry(0.2, 0.2, 0.2, 64), ThreeHelpers.getRandomMaterial());
cylinder.position.y = -0.3;

// set background
//let imgPath = "/~romuit02/assets/images/backgroundTexture/";
//environment.addBackground(imgPath + "posx.jpg", imgPath + "negx.jpg", imgPath + "posy.jpg", imgPath + "negy.jpg", imgPath + "posz.jpg", imgPath + "negz.jpg");

environment.addObjects(box, cylinder);
canvasContainer.appendChild(environment.renderer.domElement);

// Register event handlers \\
document.addEventListener('mousedown', event => {
    if(event.button == 0)
        mouse.leftMouseDown = true;
    if(event.button == 1)
        mouse.middleMouseDown = true;
    if(event.button == 2)
        mouse.rightMouseDown = true;

    mouse.position.updateCoordinates(event.pageX, event.pageY);
});
document.addEventListener('keydown', (event) => {
    keyboard.shiftKeyActive = event.shiftKey;
    keyboard.altKeyActive = event.altKey;
});
document.addEventListener('mousemove', event => {
    let newX = event.pageX;
    let newY = event.pageY;
    let multiplier = 0.002;

    if(mouse.leftMouseDown && keyboard.shiftKeyActive){
        box.position.z += newY * multiplier - mouse.position.y * multiplier;
    }
    else if(mouse.leftMouseDown && keyboard.altKeyActive){
        box.rotation.x += newY * multiplier - mouse.position.y * multiplier;
        box.rotation.z += newX * multiplier - mouse.position.x * multiplier;
    }
    else if(mouse.leftMouseDown){
        box.position.x += newX * multiplier - mouse.position.x * multiplier;
        box.position.y -= newY * multiplier - mouse.position.y * multiplier;
    }

    mouse.position.updateCoordinates(newX, newY);
});
document.addEventListener('mouseup', event => {
    if(event.button == 0)
        mouse.leftMouseDown = false;
    if(event.button == 1)
        mouse.middleMouseDown = false;
    if(event.button == 2)
        mouse.rightMouseDown = false;
})
document.addEventListener('keyup', (event) => {
    keyboard.shiftKeyActive = event.shiftKey;
    keyboard.altKeyActive = event.altKey;
});
// Register event handlers \\

function render() {
    environment.renderer.render(environment.scene, environment.camera);
}

window.onload = function(){
    environment.renderer.setAnimationLoop(render);
}


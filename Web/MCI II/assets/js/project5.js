import { Environment } from './threejs/Environment.js';

let canvasContainer = document.getElementById('canvas-container');
let environment = new Environment(canvasContainer);
let imgPath = "/~romuit02/assets/images/backgroundTexture/";
//environment.addBackground(imgPath + "posx.jpg", imgPath + "negx.jpg", imgPath + "posy.jpg", imgPath + "negy.jpg", imgPath + "posz.jpg", imgPath + "negz.jpg");

// setup object
let box = new THREE.Mesh(new THREE.BoxBufferGeometry(0.2, 0.2, 0.2), getRandomMaterial());

let cylinder =  new THREE.Mesh(new THREE.CylinderBufferGeometry(0.2, 0.2, 0.2, 64), getRandomMaterial());

environment.addDraggableObjects(box, cylinder);
canvasContainer.appendChild(environment.renderer.domElement);

// define render function
function render() {
    //box.rotation.x += 0.01;
    //box.rotation.y += 0.01;
    // box.position.x += 0.001;
    environment.renderer.render(environment.scene, environment.camera);
}

// start render
window.onload = function(){
    environment.renderer.setAnimationLoop(render);    
}

function getRandomMaterial(){
    return new THREE.MeshStandardMaterial({
        color : Math.random() * 0xff3333,
        roughness: 0.7,
        metalness: 0.0,
    });
}
import * as THREE from './threejs/three.module.js';
import { BoxLineGeometry } from './threejs/BoxLineGeometry.js';
import { ControlExperiments, updateSession } from './threejs/utils.js';
import { VRButton } from './threejs/VRButton.js';
import { XRControllerModelFactory } from './threejs/XRControllerModelFactory.js';

let canvasContainer = document.getElementById('canvas-container');
let camera, scene, renderer;
let controller;
let ctrlGrip;

scene = new THREE.Scene();
scene.background = new THREE.Color(0x505050);
let experiments = ControlExperiments(scene);
camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 12);

let room = new THREE.LineSegments(
    new BoxLineGeometry(6, 3, 12, 10, 5, 20),
    new THREE.LineBasicMaterial({ color: 0x808080 })
);
room.geometry.translate(0, 3, 0);
room.position.z = -4;
room.position.y = -1;
scene.add(room);

// add lights
scene.add(new THREE.HemisphereLight(0x606060, 0x404040));
let light = new THREE.DirectionalLight(0xffffff);
light.position.set(1, 1, 1).normalize();
scene.add(light);

// renderer
renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(canvasContainer.offsetWidth, canvasContainer.offsetHeight);
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.xr.enabled = true;
canvasContainer.appendChild(renderer.domElement);

// enable VR
canvasContainer.appendChild(VRButton.createButton(renderer));

// controllers
function onSelectStart() {
    this.userData.isSelecting = true;
}
function onSelectEnd() {
    this.userData.isSelecting = false;
}

// Add controller
controller = renderer.xr.getController(0);
controller.position.set(0, 0, 3);
controller.addEventListener('selectstart', onSelectStart);
controller.addEventListener('selectend', onSelectEnd);
scene.add(controller);

// add controller grip control
let controllerModelFactory = new XRControllerModelFactory();
ctrlGrip = renderer.xr.getControllerGrip(0);
ctrlGrip.add(controllerModelFactory.createControllerModel(ctrlGrip));
scene.add(ctrlGrip);

// handle resize
window.addEventListener('resize', onWindowResize, false);
renderer.setAnimationLoop(render);

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

// camera group to move it
let cameraGroup = new THREE.Group();
//cameraGroup.position.set(0, -1, 0);
scene.add(cameraGroup);
cameraGroup.add(camera);

let oldBtn = false;
function render() {
    let btns = updateSession(renderer.xr.getSession());
    experiments.update(controller, btns);
    renderer.render(scene, camera);
    oldBtn = btns[1];
}

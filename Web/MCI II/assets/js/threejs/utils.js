/**
 * @author Andreas Roessler, HS Esslingen
 */

import * as THREE from "./three.module.js";
import { ThreeHelpers } from './ThreeHelpers.js';


let geometries = [
    new THREE.BoxBufferGeometry(0.25, 0.25, 0.25),
    new THREE.ConeBufferGeometry(0.2, 0.4, 64),
    new THREE.CylinderBufferGeometry(0.2, 0.2, 0.2, 64),
    new THREE.IcosahedronBufferGeometry(0.2, 3),
    new THREE.TorusBufferGeometry(0.2, 0.04, 64, 32)
];


function randomMaterial() {
    return new THREE.MeshStandardMaterial({
        color: Math.random() * 0xff3333,
        roughness: 0.7,
        metalness: 0.0
    });
}


const grabTrigger = 0;
const touchTrigger = 2;
let grabbed = false;
let touched = false;

function updateSession(session) {
    if (session !== null && session.inputSources !== undefined) {
        for (let src of session.inputSources) {
            if (src.gamepad) {
                if (src.gamepad.buttons[grabTrigger].pressed) {
                    if (!grabbed) {
                        grabbed = true;
                    }
                } else {
                    if (grabbed) grabbed = false;
                }
                if (src.gamepad.buttons[touchTrigger].pressed) {
                    if (!touched) {
                        touched = true;
                    }
                } else {
                    if (touched) {
                        touched = false;
                    }
                }
            }
        }
    }
    return [grabbed, touched];
}


function StretchLine(scene) {
    let geometry = new THREE.Geometry();
    geometry.vertices.push(
        new THREE.Vector3(-1, -1, 1),
        new THREE.Vector3(1, 1, 1)
    );
    let line = new THREE.Line(geometry, randomMaterial());
    scene.add(line);
    return line;
}


function ControlExperiments(scene) {
    let world = new THREE.Group();
    scene.add(world);

    let experiments = [];
    function createExperiment() {
        let visibleObjects = [];
        function hide() {
            visibleObjects.forEach(o => o.visible = false)
        }
        function show() {
            visibleObjects.forEach(o => o.visible = true)
        }
        function addGeo(i, parent) {
            let object = new THREE.Mesh(geometries[i], randomMaterial());
            visibleObjects.push(object);
            if (parent === undefined)
                world.add(object);
            else
                parent.add(object);
            return object;
        }
        function addObject(object){
            visibleObjects.push(object);
            world.add(object);
        }
        function addLine(parent) {
            let object = StretchLine(scene);
            visibleObjects.push(object);
            if (parent === undefined)
                world.add(object);
            else
                parent.add(object);
            return object;
        }

        function update() { }
        function once() { }
        let experiment = { show, hide, addGeo, update, once, addLine, addObject };
        experiments.push(experiment);
        return experiment;
    }

    let currentIdx = 0, currentExperiment;
    function next() {
        currentIdx = currentIdx > experiments.length - 2 ? 0 : ++currentIdx;
        runExperiment();
    };

    function prev() {
        currentIdx = currentIdx < 1 ? experiments.length - 1 : --currentIdx;
        runExperiment();
    };

    function runExperiment() {
        experiments.forEach(e => e.hide());
        currentExperiment = experiments[currentIdx];
        currentExperiment.once();
        currentExperiment.show();
    };

    ///////////////////////////////////////////////////////////////////////////
    {
        let experiment = createExperiment();
        let line = experiment.addLine();
        let boxes = [];
        
        // Box spawning
        setInterval(spawnBox, 1000 - Math.round(Math.random()) * 250 + Math.round(Math.random()) * 250);

        function spawnBox(){
            let box = experiment.addGeo(0);
            box.position.x = -.5 + Math.round(Math.random());
            box.position.y = 1 + Math.round(Math.random()) * 0.9;
            box.position.z = -10;
            boxes.push(box);
        }

        // Raycaster
        let raycaster = new THREE.Raycaster();
        let rayEnd = new THREE.Vector3();
        let direction = new THREE.Vector3();
        let lineGeometry = new THREE.Geometry();
        let pointerLine = null;
        let boxSpeed = 0.1;
        let minSpeed = 0.07;
        let maxSpeed = 0.3

        let intersectedObject;

        experiment.update = function (controller, btns) {   
            let intersects = raycaster.intersectObjects(boxes);
            direction.set(0, 0, -1);
            direction.applyQuaternion(controller.quaternion);
            raycaster.set(controller.position, direction);

            if(pointerLine == null){
                rayEnd.addVectors(controller.position, direction.multiplyScalar(2));
                lineGeometry.vertices.push(new THREE.Vector3(-1, -1, 1), new THREE.Vector3(0, 0, 0));
                lineGeometry.vertices[0].copy(controller.position);
                lineGeometry.vertices[1].copy(rayEnd);
                pointerLine = new THREE.Line(lineGeometry, new THREE.LineBasicMaterial({ color: 0x00afff }));
                controller.add(pointerLine);
            }

            if (intersects.length > 0 && intersects[0].distance <= 2) {
                intersectedObject = intersects[0].object;
            } else {
                intersectedObject = undefined;
                rayEnd.addVectors(controller.position, direction.multiplyScalar(2));
                line.geometry.vertices[1].copy(rayEnd);
            }
            line.geometry.vertices[0].copy(controller.position);

            if (intersectedObject !== undefined) {
                boxes.splice(boxes.indexOf(intersectedObject), 1);
                world.remove(intersectedObject)
                if(boxSpeed < maxSpeed)
                    boxSpeed += 0.01;                               // speed up on object destroyed
            }
            line.geometry.verticesNeedUpdate = true;

            // update box
            boxes.forEach(box => {
                if(box.position.z >= 4){
                    boxes.splice(boxes.indexOf(box), 1);
                    world.remove(box);
                    if(boxSpeed > minSpeed)
                        boxSpeed -= 0.03;                         // speed down on object escaped
                }
                else{
                    box.position.z += boxSpeed;
                }
            });
        };
    }
    ///////////////////////////////////////////////////////////////////////////

    runExperiment();
    return {
        update: (c, b) => currentExperiment.update(c, b),
        runExperiment,
        next,
        prev
    };
}



export { ControlExperiments, updateSession };

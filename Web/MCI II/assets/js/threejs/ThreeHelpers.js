import * as THREE from './three.module.js';

export class ThreeHelpers{    
    static getRandomMaterial(){
        return new THREE.MeshStandardMaterial({
            color : Math.random() * 0xff3333,
            roughness: 0.7,
            metalness: 0.0,
        });
    }
}
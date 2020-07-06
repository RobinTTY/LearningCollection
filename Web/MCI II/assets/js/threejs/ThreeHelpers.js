import * as THREE from './three.module.js';

export class ThreeHelpers{    
    static getRandomMaterial(color=Math.random() * 0xff3333){
        return new THREE.MeshStandardMaterial({
            color : color,
            roughness: 0.7,
            metalness: 0.0,
        });
    }
}
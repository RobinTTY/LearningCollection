import * as THREE from './three.module.js';

export class MouseState{
    constructor(){
        this.leftMouseDown = false;
        this.rightMouseDown = false;
        this.middleMouseDown = false;
        this.position = new THREE.Vector2();
    }

    updateState(event, state){
        if(event.button == 0)
            this.leftMouseDown = state;
        if(event.button == 1)
            this.middleMouseDown = state;
        if(event.button == 2)
            this.rightMouseDown = state;
    }

    updatePosition(x, y){
        this.position.x = x;
        this.position.y = y;
    }
}
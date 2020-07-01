import { Coordinates2D } from './Coordinates2D.js';

export class MouseState{
    constructor(){
        this.leftMouseDown = false;
        this.rightMouseDown = false;
        this.middleMouseDown = false;
        this.position = new Coordinates2D();
    }
}
export class KeyboardState{
    constructor(){
        this.shiftKeyActive = false;
        this.altKeyActive = false;
    }

    update(event){
        this.shiftKeyActive = event.shiftKey;
        this.altKeyActive = event.altKey;
    }
}
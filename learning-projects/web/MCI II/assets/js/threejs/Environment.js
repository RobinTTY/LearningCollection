import * as THREE from './three.module.js';

export class Environment{
    constructor(canvasContainer){
        this.canvasContainer = canvasContainer;
        this.scene = new THREE.Scene();
        this.light = new THREE.DirectionalLight(0xffffff);
        this.camera = new THREE.PerspectiveCamera(70, canvasContainer.offsetWidth / canvasContainer.offsetHeight, 0.1, 100);
        this.renderer = new THREE.WebGLRenderer({ antialias: true });

        this.init();        
    }

    init(){
        // setup scene + light
        this.scene.add(new THREE.HemisphereLight(0x808080, 0x606060));
        this.light.position.set(0, 6, 0);
        this.scene.add(this.light);

        // setup camera
        this.camera.position.set(0, 0, 2);
        this.scene.add(this.camera);

        // setup renderer
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(this.canvasContainer.offsetWidth, this.canvasContainer.offsetHeight);
    }

    addBackground(imgPosX, imgNegX, imgPosY, imgNegY, imgPosZ, imgNegZ){
        const loader = new THREE.CubeTextureLoader();
        const texture = loader.load([
            imgPosX, imgNegX, imgPosY, imgNegY, imgPosZ, imgNegZ
        ]);
        this.scene.background = texture;
    }

    addObjects(...objects){
        objects.forEach(obj => this.scene.add(obj));
    }
}
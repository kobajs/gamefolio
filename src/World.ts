import { PerspectiveCamera, Scene, WebGLRenderer } from "three";
import { createCamera } from "./components/camera";
import { createCube } from "./components/cube";
import { createLights } from "./components/light";
import { Player } from "./components/player";
import { createScene } from "./components/scene";
import ResourcesManager from "./systems/ResourcesManager";
import { Loop } from "./systems/Loop";

import { createRenderer } from "./systems/renderer";

export class World {
  private camera: PerspectiveCamera;
  private scene: Scene;
  private renderer: WebGLRenderer;
  private player: Player;
  private loop: Loop;

  constructor(container: HTMLDivElement, resources: ResourcesManager) {
    this.renderer = createRenderer();
    container.append(this.renderer.domElement);

    this.camera = createCamera();
    this.scene = createScene();
    this.loop = new Loop(this.renderer, container);
    this.loop.setScenario(this.scene, this.camera);
    this.player = new Player(this.camera, resources.models.character);
    this.scene.add(this.player.getObject());

    const light = createLights();
    this.scene.add(light);
    const cube = createCube();
    this.scene.add(cube);
  }

  start() {
    this.loop.start();
  }

  stop() {
    this.loop.stop();
  }
}

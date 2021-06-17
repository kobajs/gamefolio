import { PerspectiveCamera, Scene, WebGLRenderer } from "three";
import { createCamera } from "./components/camera";
import { createCube } from "./components/cube";
import { createLights } from "./components/light";
import { Player } from "./components/player";
import { createScene } from "./components/scene";
import { Loop } from "./systems/Loop";

import { createRenderer } from "./systems/renderer";
import { Resizer } from "./systems/Resizer";

export class World {
  private camera: PerspectiveCamera;
  private scene: Scene;
  private renderer: WebGLRenderer;
  private player: Player;
  private loop: Loop;

  constructor(container: HTMLDivElement) {
    this.camera = createCamera();
    this.renderer = createRenderer();
    this.scene = createScene();
    this.loop = new Loop(this.camera, this.scene, this.renderer);
    this.player = new Player(this.scene);
    container.append(this.renderer.domElement);

    const light = createLights();
    this.scene.add(light);
    const cube = createCube();
    this.scene.add(cube);

    const resizer = new Resizer(this.camera, container, this.renderer);
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }

  start() {
    this.loop.start();
  }

  stop() {
    this.loop.stop();
  }
}

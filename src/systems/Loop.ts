import { Clock, PerspectiveCamera, Scene, WebGLRenderer } from "three";
import { Resizer } from "./Resizer";
import { UpdatableObject3D } from "./UpdatableObject3D";

export const clock = new Clock();

export class Loop {
  private container: HTMLDivElement;
  private camera: PerspectiveCamera;
  private scene: Scene;
  private renderer: WebGLRenderer;

  constructor(renderer: WebGLRenderer, container: HTMLDivElement) {
    this.container = container;
    this.renderer = renderer;
  }

  start() {
    this.renderer.setAnimationLoop(() => {
      // Resize the window and camera aspect
      new Resizer(this.camera, this.container, this.renderer);

      // tell every animated object to tick forward one frame
      this.tick();

      // render a frame
      this.renderer.render(this.scene, this.camera);
    });
  }

  stop() {
    this.renderer.setAnimationLoop(null);
  }

  setScenario(scene: Scene, camera: PerspectiveCamera) {
    this.scene = scene;
    this.camera = camera;
  }

  tick() {
    const delta = clock.getDelta();

    this.scene.children.forEach((object: UpdatableObject3D) => {
      if (object.tick) {
        object.tick(delta);
      }
    });
  }
}

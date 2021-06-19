import {
  AnimationClip,
  AnimationMixer,
  PerspectiveCamera,
  Vector2,
  Vector3,
} from "three";
import { SkeletonUtils } from "three/examples/jsm/utils/SkeletonUtils.js";
import { clock } from "../systems/Loop";

import { Model } from "../systems/ResourcesManager";
import { UpdatableObject3D } from "../systems/UpdatableObject3D";

const kForward = new Vector3(0, 0, 1);

export class Player {
  private camera: PerspectiveCamera;
  private object = new UpdatableObject3D();
  private animations: AnimationClip[];
  private mixer: AnimationMixer;

  constructor(camera: PerspectiveCamera, model: Model) {
    const clonedScene = SkeletonUtils.clone(model.gltf.scene);
    this.camera = camera;
    this.object.add(clonedScene);
    this.object.tick = this.tick.bind(this);
    // this.object.rotateY(3.15);
    this.animations = model.gltf.animations;

    this.mixer = new AnimationMixer(this.object);

    this.setupMovement();
    this.setupCamera();
    this.animateRun();
  }

  getObject() {
    return this.object;
  }

  animateRun() {
    const action = this.mixer.clipAction(this.animations[0]);
    action.play();
  }

  stopAnimations() {
    this.mixer.stopAllAction();
  }

  setupCamera() {
    this.camera.lookAt(this.object.position);
  }

  setupMovement() {
    window.addEventListener("keydown", (e) => {
      if (e.key === "w") {
        this.object.translateOnAxis(kForward, 100);
      }
      if (e.key === "s") {
        this.object.translateOnAxis(kForward, -100);
      }
      if (e.key === "a") {
        this.object.rotateY(0.5);
      }
      if (e.key === "d") {
        this.object.rotateY(-0.5);
      }
    });
  }

  tick(delta: number) {
    this.mixer.update(delta);
  }
}

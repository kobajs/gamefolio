import { AnimationMixer, Clock, Group, Scene } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const loader = new GLTFLoader();

export class Player {
  private object: Group;

  constructor(scene: Scene) {
    loader.load("/resources/character/scene.gltf", function (gltf) {
      console.log(gltf.animations);
      scene.add(gltf.scene);
      this.object = gltf.scene;
    });
  }

  animate() {
    const mixer = new AnimationMixer(this.object);
    const clips = this.object.animations;
    const action = mixer.clipAction(clips[0]);
    console.log(action);
    const mixerUpdateDelta = new Clock().getDelta();

    // Update the animation mixer, the stats panel, and render this frame

    mixer.update(mixerUpdateDelta);
    action.play();
  }
}

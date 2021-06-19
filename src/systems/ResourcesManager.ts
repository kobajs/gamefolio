import { AnimationClip, LoadingManager } from "three";
import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export interface Model {
  url: string;
  gltf?: GLTF;
  animations?: AnimationClip;
}

class ResourcesManager {
  models: Record<string, Model> = {
    character: {
      url: "resources/models/character/scene.gltf",
    },
  };

  constructor(onLoad: () => void) {
    this.load(onLoad);
  }

  load(onLoad: () => void) {
    const manager = new LoadingManager();
    manager.onLoad = onLoad;

    const gltfLoader = new GLTFLoader(manager);
    for (const model of Object.values(this.models)) {
      gltfLoader.load(model.url, (gltf) => {
        model.gltf = gltf;
      });
    }
  }

  prepModelsAndAnimations() {
    Object.values(this.models).forEach((model) => {
      const animsByName: any = {};
      model.gltf.animations.forEach((clip) => {
        animsByName[clip.name] = clip;
      });
      model.animations = animsByName;
    });
  }
}

export default ResourcesManager;

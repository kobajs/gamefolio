import ResourcesManager from "./systems/ResourcesManager";
import { World } from "./World";

const resources = new ResourcesManager(main);

function main() {
  const container = document.querySelector<HTMLDivElement>("#scene-container");
  resources.prepModelsAndAnimations();

  const world = new World(container, resources);

  world.start();
}

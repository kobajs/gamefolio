import { World } from "./World";

function main() {
  const container = document.querySelector<HTMLDivElement>("#scene-container");

  const world = new World(container);

  world.start();
}

main();

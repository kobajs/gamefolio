import { WebGLRenderer } from "three";

export function createRenderer(): WebGLRenderer {
  const renderer = new WebGLRenderer();

  renderer.physicallyCorrectLights = true;

  renderer.setSize(window.innerWidth, window.innerHeight);

  return renderer;
}

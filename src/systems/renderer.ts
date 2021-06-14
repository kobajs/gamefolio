import { WebGLRenderer } from "three";

export function createRenderer(): WebGLRenderer {
  const renderer = new WebGLRenderer();

  renderer.physicallyCorrectLights = true;

  return renderer;
}

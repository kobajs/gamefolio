import { PerspectiveCamera } from "three";

export function createCamera(): PerspectiveCamera {
  const camera = new PerspectiveCamera(50, 1, 0.1, 20000);

  // move the camera back so we can view the scene
  camera.position.set(2000, 2000, -1000);

  return camera;
}

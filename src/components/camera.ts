import { PerspectiveCamera } from "three";

export function createCamera(): PerspectiveCamera {
  const camera = new PerspectiveCamera(50, 1, 0.1, 2000);

  // move the camera back so we can view the scene
  camera.position.set(0, 0, 1000);

  return camera;
}

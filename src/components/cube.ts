import { BoxBufferGeometry, Mesh, MeshStandardMaterial } from "three";
import { UpdatableObject3D } from "../systems/UpdatableObject3D";

export function createCube() {
  // create a geometry
  const geometry = new BoxBufferGeometry(50, 50, 50);

  // create a default (white) Basic material
  const material = new MeshStandardMaterial({ color: "purple" });

  // create a Mesh containing the geometry and material
  const cube: UpdatableObject3D = new Mesh(geometry, material);

  cube.rotation.set(-0.5, -0.1, 0.8);
  cube.position.set(0, 300, 0);

  cube.tick = () => {
    cube.rotation.z += 0.05;
    cube.rotation.y += 0.05;
  };

  return cube;
}

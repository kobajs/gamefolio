import { BoxBufferGeometry, Mesh, MeshStandardMaterial } from "three";

export function createCube() {
  // create a geometry
  const geometry = new BoxBufferGeometry(50, 50, 50);

  // create a default (white) Basic material
  const material = new MeshStandardMaterial({ color: "purple" });

  // create a Mesh containing the geometry and material
  const cube = new Mesh(geometry, material);

  cube.rotation.set(-0.5, -0.1, 0.8);
  cube.position.set(0, 300, 0);

  return cube;
}

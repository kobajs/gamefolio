import { Object3D } from "three";

export class UpdatableObject3D extends Object3D {
  tick?: (delta?: number) => void;

  constructor() {
    super();
  }
}

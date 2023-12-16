import {
  Project,
  Sprite
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Beetle from "./Beetle/Beetle.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Beetle: new Beetle({
    x: 140.84017706471838,
    y: -75.45172358388798,
    direction: -154.6183533052199,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 40,
    visible: true,
    layerOrder: 1
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;

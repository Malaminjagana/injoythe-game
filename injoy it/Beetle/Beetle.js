/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Beetle extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("beetle", "./Beetle/costumes/beetle.svg", { x: 43, y: 38 })
    ];

    this.sounds = [new Sound("pop", "./Beetle/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.KEY_PRESSED, { key: "x" }, this.whenKeyXPressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "1" }, this.whenKey1Pressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "0" }, this.whenKey0Pressed),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3)
    ];
  }

  *whenGreenFlagClicked() {
    this.size = 40;
    while (true) {
      this.direction += this.random(-30, 30);
      yield* this.wait(1);
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      this.move(3);
      /* TODO: Implement motion_ifonedgebounce */ null;
      yield;
    }
  }

  *whenKeyXPressed() {
    this.clearPen();
  }

  *whenKey1Pressed() {
    this.penDown = true;
  }

  *whenKey0Pressed() {
    this.penDown = false;
  }

  *whenGreenFlagClicked3() {
    this.penSize = 4;
    while (true) {
      this.penColor.h += 2;
      yield* this.wait(0.2);
      yield;
    }
  }
}

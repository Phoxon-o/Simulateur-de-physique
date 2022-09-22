import Vector2 from "./Vector2.js";
import World from "./World.js";

export default class Body {
    constructor(position) {
        this.position = position;
        this.velocity = Vector2.zero;
        this.acceleration = Vector2.zero;
    }

    update(deltaTime) {
        this.acceleration = World.gravity;
        this.velocity = this.velocity.add(this.acceleration.mulConst(deltaTime));
        this.position = this.position.add(this.velocity.mulConst(deltaTime).add(this.acceleration.mulConst(deltaTime * deltaTime)));
    }
}
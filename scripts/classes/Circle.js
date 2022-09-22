import Body from './Body.js';
import Vector2 from './Vector2.js';

export default class Circle extends Body {
    constructor(position, radius) {
        super(position);

        this.radius = radius;
    }

    update(deltaTime, canvas) {
        if(this.position.y > canvas.height - this.radius) {
            this.velocity = Vector2.zero;

            if (this.acceleration.y > 0) {
                this.acceleration.y = 0;
            }
        }
        
        super.update(deltaTime);
    }
}
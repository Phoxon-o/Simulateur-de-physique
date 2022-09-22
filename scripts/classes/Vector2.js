export default class Vector2 {
    static zero = new Vector2(0, 0);

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    add(vect) {
        return new Vector2(this.x + vect.x, this.y + vect.y);
    }

    mulConst(k) {
        return new Vector2(this.x * k, this.y * k);
    }
}
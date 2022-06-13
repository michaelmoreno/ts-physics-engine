export class Vector {
    protected _x: number;
    protected _y: number;
    protected _magnitude: number;
    protected _angle: number;

    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
        this._magnitude = this.calcMagnitude();
        this._angle = Math.atan2(y, x);
    }

    get x(): number {
        return this._x;
    }
    set x(x: number) {
        this._x = x;
        this._magnitude = this.calcMagnitude();
        this._angle = Math.atan2(this._y, x);
    }
    get y(): number {
        return this._y;
    }
    set y(y: number) {
        this._y = y;
        this._magnitude = this.calcMagnitude();
        this._angle = Math.atan2(y, this._x);
    }
    get magnitude(): number {
        return this._magnitude;
    }
    set magnitude(magnitude: number) {
        this._magnitude = magnitude;
        const ratio = magnitude / this._magnitude;
        this._x *= ratio;
        this._y *= ratio;
    }
    get angle(): number {
        return this._angle;
    }
    set angle(angle: number) {
        this._angle = angle;
        this._x = this._magnitude * Math.cos(angle);
        this._y = this._magnitude * Math.sin(angle);
    }
    calcMagnitude(): number {
        return Math.sqrt(this._x * this._x + this._y * this._y);
    }
    limitMagnitude(max: number): Vector {
        if (this._magnitude > max) {
            this.magnitude = max;
        }
        return this;
    }
    clone(): Vector {
        return new Vector(this._x, this._y);
    }
    add(quantity: Vector|number): Vector {
        this.x += quantity instanceof Vector ? quantity.x : quantity;
        this.y += quantity instanceof Vector ? quantity.y : quantity;
        return this;
    }
    sub(quantity: Vector|number): Vector {
        this.x -= quantity instanceof Vector ? quantity.x : quantity;
        this.y -= quantity instanceof Vector ? quantity.y : quantity;
        return this;
    }
    mul(quantity: Vector|number): Vector {
        this.x *= quantity instanceof Vector ? quantity.x : quantity;
        this.y *= quantity instanceof Vector ? quantity.y : quantity;
        return this;
    }
    div(quantity: Vector|number): Vector {
        this.x /= quantity instanceof Vector ? quantity.x : quantity;
        this.y /= quantity instanceof Vector ? quantity.y : quantity;
        return this;
    }
}

import { Vector } from "./Vector";

class RigidBody {
    position: Vector;
    velocity: Vector;
    acceleration: Vector;
    mass: number;

    constructor(position: Vector, velocity: Vector, acceleration: Vector, mass: number) {
        this.position = position;
        this.velocity = velocity;
        this.acceleration = acceleration;
        this.mass = mass;
    }
    applyForce(force: Vector) {
        this.acceleration.add(force.div(this.mass));
    }
    update() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.mul(0);
    }
}

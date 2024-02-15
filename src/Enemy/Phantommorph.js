import { Enemy } from './Enemy.js';
import { Flying, Phasing, Imploding } from './EnemyState.js';

export class Phantommorph extends Enemy {
    constructor(game) {
        super(game);
        this.image = document.getElementById('phantommorph');
        this.lastFrame = 14;
        this.lives = 1;
        this.maxLives = this.lives;
        this.states = [new Flying(game, this), new Phasing(game, this), new Imploding(game, this)];
        this.currentState;
        this.switchTimer = 0;
        this.switchInterval = Math.random() * 2000 + 1000;
    }

    start() {
        super.start();
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 0.5 + 0.2;
        this.lives = this.maxLives;
        this.setState(
            Math.floor(Math.random() * 2)
        );
    }

    setState(state) {
        this.currentState = this.states[state];
        this.currentState.start();
    }

    handleFrames() {
        if (this.game.spriteUpdate) {
            if (this.frameX < this.maxFrame) {
                this.frameX++
            } else {
                this.frameX = this.minFrame;
            }
        }
    }

    switch() {
        if (this.currentState === this.states[0]) {
            this.setState(1);
        } else {
            this.setState(0);
        }
    }

    hit() {
        super.hit();
        if (!this.isAlive()) {
            this.setState(2);
        }
    }

    update(deltaTime) {
        super.update();
        if (!this.free) {
            this.currentState.update();
            if (this.x <= 0 || this.x >= this.game.width - this.width) {
                this.speedX *= -1;
            }

            if (this.isAlive()) {
                if (this.switchTimer < this.switchInterval) {
                    this.switchTimer += deltaTime;
                } else {
                    this.switchTimer = 0;
                    this.switch();
                }
            }
        }
    }
}
import { Enemy } from './Enemy.js';

export class Phantommorph extends Enemy {
    constructor(game) {
        super(game);
        this.image = document.getElementById('phantommorph');
        // this.frameX = 0;
        // this.frameY = Math.floor(Math.random() * 4);
        // this.maxFrame = 3;
        this.lastFrame = 14;
        this.lives = 1;
        this.maxLives = this.lives;
    }

    start() {
        super.start();
        // this.frameY = Math.floor(Math.random() * 4);
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 0.5 + 0.2;
        this.lives = this.maxLives;
        this.minFrame = 0;
        this.maxFrame = 5;
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

    update() {
        super.update();
        if (!this.free) {
            this.handleFrames();
            if (this.x <= 0 || this.x >= this.game.width - this.width) {
                this.speedX *= -1;
            }
            if (this.isAlive) {
                this.hit();
            }
        }
    }
}
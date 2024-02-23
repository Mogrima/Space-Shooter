import { Enemy } from './Enemy.js';

export class Lobstermorph extends Enemy {
    constructor(game) {
        super(game);
        this.image = document.getElementById('lobstermorph');
        this.frameX = 0;
        this.frameY = Math.floor(Math.random() * 4);
        this.lastFrame = 14;
        this.lives = 3;
        this.maxLives = this.lives;
    }

    start() {
        super.start();
        this.speedX = 0;
        this.speedY = Math.random() * 0.5 + 0.2;
        this.frameY = Math.floor(Math.random() * 4);
        this.lives = this.maxLives;
    }

    update() {
        super.update();
        if (!this.free) {
            if (this.lives >= this.maxLives) {
                this.maxFrame = 0;
            } else if (this.lives === 2) {
                this.maxFrame = 3;
            } else if (this.lives === 1) {
                this.maxFrame = 7;
            }
            if (this.isAlive) {
                this.hit();
                if (this.frameX < this.maxFrame && this.game.spriteUpdate) {
                    this.frameX++;
                }
            }
        }
    }
}
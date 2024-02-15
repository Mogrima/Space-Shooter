import { Enemy } from './Enemy.js';

export class Beetlemorph extends Enemy {
    constructor(game) {
        super(game);
        this.image = document.getElementById('beetlemorph');
        this.frameX = 0;
        this.frameY = Math.floor(Math.random() * 4);
        this.maxFrame = 3;
        this.lives = 2;
        this.maxLives = this.lives;
    }

    start() {
        super.start();
        this.frameY = Math.floor(Math.random() * 4);
        this.speedX = 0;
        this.speedY = Math.random() * 4 + 1;
        this.lives = this.maxLives;
        this.lastFrame = 3;
    }

    update() {
        super.update();
        if (!this.free) {
            if (this.isAlive) {
                this.hit();
            }
        }
    }
}
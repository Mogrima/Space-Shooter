export class Enemy {
    constructor(game) {
        this.game = game;
        this.width = 50;
        this.height = 50;
        this.x = Math.random() * this.game.width;
        this.y = -this.height;
        this.speedX = 0;
        this.speedY = Math.random() * 4 + 1;
        this.free = true;
    }

    start() {
        this.free = false;
        this.x = Math.random() * this.game.width;
        this.y = -this.height;
    }

    reset() {
        this.free = true;
    }

    update() {
        if (!this.free) {
            if (this.y < 0) this.y += 5;
            
            if (this.x > this.game.width - this.width) {
                this.x = this.game.width - this.width
            }

            this.x += this.speedX;
            this.y += this.speedY;

            if (this.y > this.game.height) {
                this.reset();
            }
        }
    }

    draw() {
        if (!this.free) {
            this.game.ctx.fillStyle = 'red';
            this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
}
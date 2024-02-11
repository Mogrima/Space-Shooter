export class Enemy {
    constructor(game) {
        this.game = game;
        this.width = 50;
        this.height = 50;
        this.x;
        this.y;
        this.speedX = 0;
        this.speedY = Math.random() * 4 + 1;
        this.lives;
        this.free = true;
    }

    start() {
        this.free = false;
        this.x = Math.random() * this.game.width;
        this.y = -this.height;
        this.lives = 2;
    }

    reset() {
        this.free = true;
    }

    isAlive() {
        return this.lives >= 1;
    }

    update() {
        if (!this.free) {
            if (this.y < 0) this.y += 5;
            
            if (this.x > this.game.width - this.width) {
                this.x = this.game.width - this.width
            }

            if (this.game.checkCollision(this, this.game.mouse)
                && this.game.mouse.pressed) {
                this.lives--;
            }

            if (!this.isAlive()) this.reset();

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
            this.game.ctx.fillStyle = 'blue';
            this.game.ctx.fillText(this.lives, this.x + this.width * 0.5,
                this.y + this.height * 0.5);
        }
    }
}
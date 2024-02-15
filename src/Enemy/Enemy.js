export class Enemy {
    constructor(game) {
        this.game = game;
        this.spriteWidth = 100;
        this.spriteHeight = 100;
        this.spriteModifier = Math.random() * 0.4 + 0.8;
        this.width = 50 * this.spriteModifier;
        this.height = 50 * this.spriteModifier;
        this.x;
        this.y;
        this.speedX;
        this.speedY;
        this.frameX;
        this.lastFrame;
        this.frameY;
        this.lives;
        this.free = true;
    }

    start() {
        this.free = false;
        this.x = Math.random() * this.game.width;
        this.y = -this.height;
        this.frameX = 0;
        this.frameY = Math.floor(Math.random() * 4);
    }

    reset() {
        this.free = true;
    }

    isAlive() {
        return this.lives >= 1;
    }

    hit() {
        if (this.game.checkCollision(this, this.game.mouse)
        && this.game.mouse.pressed && !this.game.mouse.fired) {
        this.game.mouse.fired = true;
        this.lives--;
        }
    }

    update() {
        if (!this.free) {
            if (this.y < 0) this.y += 5;
            
            if (this.x > this.game.width - this.width) {
                this.x = this.game.width - this.width
            }

            if (!this.isAlive()) {
                if (this.game.spriteUpdate) {
                    this.frameX++;
                    if (this.frameX >= this.lastFrame) {
                        this.reset();
                    }
                    if (!this.game.gameOver) this.game.score++;
                }
            }

            this.x += this.speedX;
            this.y += this.speedY;

            if (this.y > this.game.height) {
                this.reset();
                this.game.lives--;
            }
        }
    }

    draw() {
        if (!this.free) {
            if (this.game.debug) {
                this.game.ctx.strokeRect(this.x, this.y, this.width, this.height);
                this.game.ctx.fillText(this.lives, this.x + this.width * 0.5,
                    this.y + this.height * 0.5);
            }
            
            this.game.ctx.drawImage(this.image,
                this.frameX * this.spriteWidth, this.frameY * this.spriteHeight,
                this.spriteWidth, this.spriteWidth,
                this.x, this.y, this.width, this.height);
        }
    }
}
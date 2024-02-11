import { Enemy } from "./Enemy/Enemy.js";

export class Game {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.start();

        this.enemyPool = [];
        this.numberOfenemies = 50;
        this.createEnemyPool();
        this.enemyTimer = 0;
        this.enemyInterval = 1000;

        this.mouse = {
            x: undefined,
            y: undefined,
            width: 1,
            height: 1,
            pressed: false
        }

        window.addEventListener('resize', e => {
            this.resize(e.target.innerWidth,
                e.target.innerHeight);
        });

        window.addEventListener('mousedown', e => {
            this.mouse.x = e.x;
            this.mouse.y = e.y;
        });
    }

    start() {
        this.resize(window.innerWidth, window.innerHeight);
    }

    render(deltaTime) {
        this.handleEnemies(deltaTime);
        this.enemyPool.forEach(enemy => {
            enemy.draw();
            enemy.update();
        });
    }

    resize(width, height) {
        this.canvas.width = width;
        this.canvas.height = height;
        this.width = width;
        this.height = height;
        this.ctx.fillStyle = 'green';
        this.ctx.font = '50px Bangers';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
    }

    createEnemyPool() {
        for (let i = 0; i < this.numberOfenemies; i++) {
            this.enemyPool.push(new Enemy(this));
        }
    }

    getEnemy() {
        for (let i = 0; i < this.enemyPool.length; i++) {
            if (this.enemyPool[i].free) return this.enemyPool[i];
        }
    }

    handleEnemies(deltaTime) {
        if (this.enemyTimer < this.enemyInterval) {
            this.enemyTimer += deltaTime;
        } else {
            this.enemyTimer = 0;
            const enemy = this.getEnemy();
            if (enemy) enemy.start();

        }
    }

    checkCollision(rect1, rect2) {
        return (
            rect1.x < rect2.x + rect2.width &&
            rect2.x < rect1.x + rect1.width &&
            rect1.y < rect2.y + rect2.height &&
            rect2.y < rect1.y + rect1.height);
    }
}
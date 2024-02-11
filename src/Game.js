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

        window.addEventListener('resize', e => {
            this.resize(e.target.innerWidth,
                e.target.innerHeight);
        });
    }

    start() {
        this.resize(window.innerWidth, window.innerHeight);
    }

    render(deltaTime) {

    }

    resize(width, height) {
        this.canvas.width = width;
        this.canvas.height = height;
        this.width = width;
        this.height = height;
        this.ctx.fillStyle = 'green';
    }

    createEnemyPool() {
        for (let i = 0; i < this.numberOfEnemies; i++) {
            this.enemyPool.push(new Enemy(this));
        }
    }

    getEnemy() {
        for (let i = 0; i < this.enemyPool.length; i++) {
            if (this.enemyPool[i].free) return this.enemyPool[i];
        }
    }
}
export class Game {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.width = this.canvas.width;
        this.height = this.canvas.height;

        window.addEventListener('resize', e => {
            this.resize(e.target.innerWidth,
                e.target.innerHeight);
        });
    }

    render(context) {}

    resize(width, height) {
        this.canvas.width = width;
        this.canvas.height = height;
        this.width = width;
        this.height = height;
        this.ctx.fillStyle = 'green';
    }
}
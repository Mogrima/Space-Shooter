'use strict';

import { Game } from './src/Game.js';

window.addEventListener('load', function() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const game = new Game(canvas);
});
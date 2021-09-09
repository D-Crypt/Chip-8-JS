import Renderer from "./renderer";

const renderer = new Renderer(10);

let fps = 60, loop, fpsInterval, startTime, now, then, elapsed;

function init() {
    fpsInterval = 1000 / fps;
    then = Date.now();
    startTime = then;

    renderer.testRender();
    renderer.render();

    loop = requestAnimationFrame(step);
}

function step() {
    now = Date.now();
    elapsed = now - then;

    if (elapsed > fpsInterval) {
        // Cycle CPU.
    }

    loop = requestAnimationFrame(step);
}
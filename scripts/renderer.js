class Renderer {
    constructor(scale) {
        // Display size for Chip-8 is 64x32 pixels.
        this.cols = 64;
        this.rows = 32;
        this.scale = scale;
        this.canvas = document.querySelector('canvas');
        this.context = this.canvas.getContext('2d');
        this.canvas.width = this.cols * this.scale;
        this.canvas.height = this.rows * this.scale;
        this.display = [(this.cols * this.rows)]; // Represents each pixel out of 2048 of the display.
    }
}

export default Renderer;
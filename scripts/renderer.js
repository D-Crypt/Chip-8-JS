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
        this.display = [(this.cols * this.rows)]; // Represents each pixel (2048 total) of the display.
    }

    setPixel(x, y) {
        // If a pixel is drawn outside of bounds, wrap around to the opposite side (for both axes).
        if (x > this.cols) x -= this.cols;
        else if (x < 0) x += this.cols;

        if (y > this.rows) y -= this.rows;
        else if (y < 0) y += this.rows;

        let pixelLoc = x + (y * this.cols);
        this.display[pixelLoc] ^= 1; // Toggle value at pixelLoc to 0 or 1 using XOR.
        return !this.display[pixelLoc]; // If true, a pixel was erased and vice-versa.
    }

    clear() {
        this.display = new Array(this.cols * this.rows);
    }
}

export default Renderer;
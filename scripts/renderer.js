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
        this.display = new Array(this.cols * this.rows); // Represents each pixel (2048 total) of the display.
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

    render() {
        // This function runs on a cyclical basis,
        // i.e. clears the display every render cycle.
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for (let i = 0; i < this.cols * this.rows; i++) {
            // Grabs the x and y pixel positions based on i.
            let x = (i % this.cols) * this.scale;
            let y = Math.floor(i / this.cols) * this.scale;

            if (this.display[i]) {
                // Set this pixel colour to black, then place a pixel at (x,y) with width and height set to scale.
                this.context.fillStyle = '#000';
                this.context.fillRect(x, y, this.scale, this.scale);
            }
        }
    }

    testRender() {
        this.setPixel(5, 5);
        this.setPixel(5, 2);
    }
}

export default Renderer;
class Tube {
	constructor() {
    this.x = WIDTH;
    this.x1 = 0;
		this.y = 640;
		this.y1 = 0;
	}

	setup() {
		this.tubeUpImg = loadImage("assets/obstacle_bottom.png");
		this.tubeDownImg = loadImage("assets/obstacle_top.png");
	}

	draw() {
		image(this.tubeUpImg, this.x, this.y);
		image(this.tubeDownImg, this.x, this.y1);
    let startPointY1 = -this.tubeUpImg.height + 320
    this.y1 = startPointY1;

		if (this.x <= -WIDTH) {
			this.x = WIDTH;
    }

		this.x -= 5;
///
		image(this.tubeUpImg, this.x1, this.y + 100);
		image(this.tubeDownImg, this.x1, this.y1);
    
    this.y1 = startPointY1 - 100;

		if (this.x1 <= -WIDTH) {
			this.x1 = WIDTH;
		}
		this.x1 -= 5;
  }
  
  
}

// // -this.tubeUpImg.height + 320;

// let randomY = return Math.floor(Math.random() * Math.floor(max) + )

// heightsY1 = [220, 320, 420, 520]
// heightsY[]

// heightsY = [100, 0, 300, 400]
// heightsY1[]
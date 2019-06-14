class Tube {
	constructor() {
		this.x = WIDTH;
		this.y = 640;
		this.y1 = 0;
	}

	setup() {
		this.tubeUpImg = loadImage("assets/obstacle_bottom.png");
		this.tubeDownImg = loadImage("assets/obstavle_top.png");
	}

	draw() {
		image(this.tubeUpImg, this.x, this.y1);
		image(this.tubeDownImg, this.x, this.y);
		this.x -= 1;
		this.y1 = -this.tubeUpImg.height + 320;
	}
}

// -this.tubeUpImg.height + 320;

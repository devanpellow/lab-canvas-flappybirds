class Faby {
	constructor() {
		// this.x = 400;
		this.y = 480;
		// this.gravity = 0;
	}

	setup() {
		this.flappyImg = loadImage("assets/flappy.png");
	}

	draw() {
		image(this.flappyImg, 400, this.y, 70, 50);
		this.y += 5;
	}

	keyPressed() {
		if (keyCode === 32) {
      this.y -= 150;
		}
	}
}

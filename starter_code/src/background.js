class Background {
	constructor() {
		this.x = WIDTH;
		this.x1 = 0;
		this.y = HEIGHT;
	}

	setup() {
		this.bgImg = loadImage("assets/bg.png");
	}

	draw() {
		image(this.bgImg, this.x, 0, WIDTH, HEIGHT);
		image(this.bgImg, this.x1, 0, WIDTH, HEIGHT);
    
    
    if (this.x <= -WIDTH) {
			this.x = WIDTH;
		}
		if (this.x1 <= -WIDTH) {
			this.x1 = WIDTH;
    }
    

		this.x -= 5;
    this.x1 -= 5;
    

    
  }
  
}

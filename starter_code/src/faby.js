class Faby {
	constructor() {
		this.x = 300;
		this.y = 480;
		this.gravity = 0;
	}

	setup() {
    this.flappyImg = loadImage("assets/flappy.png");
    
	}

	draw() {
    image(this.flappyImg, 400, this.y, 70, 50);
    
    this.gravity += 0.1
		this.y += this.gravity;
    
	}
  

  
  jump(){
    this.gravity = 0;
    this.gravity -= 6;
  }
  
	keyPressed() {
    if (keyCode === 32) {
      this.jump();
		}
  
  }
  
 


}

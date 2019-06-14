let bgImg;
let flappyImg;
let tubeUpImg;
let tubeDownImg;

const background1 = new Background();
const faby1 = new Faby();
const tube1 = new Tube();

function setup() {
	let canvas = createCanvas(WIDTH, HEIGHT);
	canvas.parent("game-board");
	background1.setup();
	faby1.setup();
	tube1.setup();
}

function draw() {
	background1.draw();
	faby1.draw();
	tube1.draw();
}

function keyPressed() {
	faby1.keyPressed();
}


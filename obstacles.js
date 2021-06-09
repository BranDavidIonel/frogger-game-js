class Obstacles {
	constructor(x, y, width, height, speed, type) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.speed = speed;
		this.type = type;
		this.frameX=0;
		this.frameY=0;
		this.randomize=Math.floor(Math.random()*30*30);
	}
	draw() {
		if(this.type==='turtle'){
			if(frame % this.randomize === 0){
				if(this.frameX>=1) this.frameX=0;
				else{
					this.frameX++;
				}
			//ctx1.fillRect(this.x, this.y, this.width, this.height);
			ctx1.drawImage(turtle,this.frameX*70,this.frameY*70,70,70,this.x,this.y,this.width,this.height);
			}
		}else if(this.type==='log'){
			ctx1.drawImage(log,this.x,this.y,this.width,this.height);
		}
		//ctx3.fillStyle = 'pink';
		//ctx3.fillRect(this.x, this.y, this.width, this.height);
	}
	update() {
		this.x += this.speed * gameSpeed;
		if (this.speed > 0) {
			if (this.x > canvas.width + this.width) {
				this.x = 0 - this.width;
			}
		}else{
			if(this.x<0-this.width){
				this.x=canvas.width+this.width;
			}
		}

	}
}
function initObstacles() {
	//lane 1
	for (let i = 0; i < 2; i++) {
		let x = i * 350;
		carsArray.push(new Obstacles(x, canvas.height - grid * 2 - 20, grid * 2, grid, 1, 'car'));
	}
	//lane 2
	for (let i = 0; i < 2; i++) {
		let x = i * 300;
		carsArray.push(new Obstacles(x, canvas.height - grid * 3 - 20, grid * 2, grid, -1, 'car'));
	}
	//lane 3
	for (let i = 0; i < 2; i++) {
		let x = i * 400;
		carsArray.push(new Obstacles(x, canvas.height - grid * 4 - 20, grid*2, grid, 1, 'car'));
	}
	//lane 4
	for (let i = 0; i < 2; i++) {
		let x = i * 400;
		carsArray.push(new Obstacles(x, canvas.height - grid * 5 - 20, grid*2, grid, -2, 'log'));
	}
	//lane 5
	for (let i = 0; i < 2; i++) {
		let x = i * 400;
		carsArray.push(new Obstacles(x, canvas.height - grid * 6 - 20, grid, grid, 1, 'turtle'));
	}
}
initObstacles();
function handleObstacles() {
	for (let i = 0; i < carsArray.length; i++) {
		carsArray[i].update();
		carsArray[i].draw();
	}
	for (let i = 0; i < logsArray.length; i++) {
		logsArray[i].update();
		logsArray[i].draw();
	}
	//collision with car
	for (let i = 0; i < carsArray.length; i++) {
		if(collision(frogger,carsArray[i])){
			ctx4.drawImage(collisions,0,100,100,100,frogger.x,frogger.y,50,50);
			resetGame();
		}
	}


}
class Obstacles{
	constructor(x,y,width,height,speed,type){
		this.x=x;
		this.y=y;
		this.width=width;
		this.height=height;
		this.speed=speed;
		this.type=type;
	}
	draw(){
		ctx1.fillRect(this.x,this.y,this.watch,this.height);
	}
	update(){
		this.x+=this.speed*gameSpeed;
		
	}	
}
function initObstacles(){
	//line 1
	for(let i=0;i<2;i++){
		let x=i*350;
		carsArray.push(new Obstacles(x,canvas.height-grid*2-20,grid,grid,1,'car'));
	}
}
initObstacles();
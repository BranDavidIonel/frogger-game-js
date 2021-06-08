function animate(){
	ctx3.clearRect(0,0,canvas.width,canvas.height);
	ctx2.drawImage(background_lvl2,0,0,canvas.width,canvas.height);
	ctx4.drawImage(grass,0,0,canvas.width,canvas.height);
	frogger.draw();
	frogger.update();
	
	handleObstacles();
	requestAnimationFrame(animate);
	
	
}
animate();

//event listeners

window.addEventListener('keydown',function(e){
	key=[];
	keys[e.keyCode]=true;
	if(keys[37]||key[38]||key[39]||key[40]){
		frogger.jump();
	}
	
});
window.addEventListener('keyup',function(e){
	delete keys[e.keyCode];
	frogger.moving=false;
});
function scored(){
	score++;
	gameSpeed+=0.05;
	frogger.x=canvas.width/2-frogger.width/2;
	frogger.y=canvas.height-frogger.height-40;
	
}
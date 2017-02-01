//note to self. Dont need to use transformations. just change the x and y coordinates accordingly to prevent headaches;
var Bedroom = function(x, y, width, length){
	this.x = x || 0;
	this.y = y || 0;
	this.width = width || 300;
	this.length = length || 100;
	this.rotation = 0;
	this.alpha = 175;
}

Bedroom.prototype.show = function(){
	push();
	fill(255, 255, 255, this.alpha);
	rect(this.x, this.y, this.width, this.length);
	stroke(0);
	rect(this.x + (this.width/2) - 20, this.y, 40 , 50);
	rect(this.x + (this.width/2) - 20, this.y, 20 , 15);
	rect(this.x + (this.width/2), this.y, 20 , 15);
	pop();
}

Bedroom.prototype.condition = function(){
	if(this.rotation === 0){
		return mouseX - this.x > 0 && mouseX - this.x < this.width && mouseY - this.y > 0 && mouseY - this.y < this.length;
	}
	else if(this.rotation === 90){
		return mouseX - this.x < 0 && mouseX - this.x > this.width && mouseY - this.y > 0 && mouseY - this.y < this.length;
	}
	else if(this.rotation === 180){
		return mouseX - this.x < 0 && mouseX - this.x > this.width && mouseY - this.y < 0 && mouseY - this.y > this.length;
	}
	else if(this.rotation === 270){
		return mouseX - this.x > 0 && mouseX - this.x < this.width && mouseY - this.y < 0 && mouseY - this.y > this.length;
	}
}

Bedroom.prototype.clicked = function(){
		if(this.condition()){

			if(mouseX - pmouseX > 5){
				this.x +=10;
			}
			if(mouseY - pmouseY > 5){
				this.y +=10;
			}
			if(mouseX - pmouseX < -5){
				this.x -= 10;
			}
			if(mouseY - pmouseY < -5){
				this.y -= 10;
			}


			if(mouseX - pmouseX > 15){
				this.x +=10;
			}
			if(mouseY - pmouseY > 15){
				this.y +=10;
			}
			if(mouseX - pmouseX < -15){
				this.x -= 10;
			}
			if(mouseY - pmouseY < -15){
				this.y -= 10;
			}


			if(mouseX - pmouseX > 25){
				this.x +=10;
			}
			if(mouseY - pmouseY > 25){
				this.y +=10;
			}
			if(mouseX - pmouseX < -25){
				this.x -= 10;
			}
			if(mouseY - pmouseY < -25){
				this.y -= 10;
			}
		}
}

Bedroom.prototype.cursor = function(){
	if(this.condition()){
		cursor(MOVE);
	}
	else{
		cursor(ARROW);
	}
}

Bedroom.prototype.rotate = function(){
	var store = this.width;
	this.width = this.length * -1;
	this.length = store;

	this.rotation += 90;
	if(this.rotation === 360){
		this.rotation = 0;
	}
	console.log(this.x, this.y, this.width, this.length);
}
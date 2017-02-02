//note to self. Dont need to use transformations. just change the x and y coordinates accordingly to prevent headaches;
var Hanger = function(x, y, width, length){
	this.x = x || 0;
	this.y = y || 0;
	this.width = width || 300;
	this.length = length || 100;
	this.rotation = 0;
	this.alpha = 175;
}

Hanger.prototype.show = function(){
	push();
	fill(255, 102, 255, this.alpha);
	rect(this.x, this.y, this.width, this.length);
	pop();
}

Hanger.prototype.condition = function(){
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

Hanger.prototype.clicked = function(){
	if(mouseX - this.x > 0 && mouseX - this.x < this.width && mouseY - this.y > 0 && mouseY - this.y < this.length){
		if(mouseX - pmouseX > 2.5 && this.x + this.width + 5 <= 500){
			this.x +=5;
		}
		if(mouseX - pmouseX > 5 && this.x + this.width + 5 <= 500){
			this.x +=5;
		}
		if(mouseX - pmouseX > 7.5 && this.x + this.width + 5 <= 500){
			this.x +=5;
		}
		if(mouseX - pmouseX > 10 && this.x + this.width + 5 <= 500){
			this.x +=5;
		}
		if(mouseX - pmouseX > 12.5 && this.x + this.width + 5 <= 500){
			this.x +=5;
		}
		if(mouseX - pmouseX > 15 && this.x + this.width + 5 <= 500){
			this.x +=5;
		}

	
		if(mouseY - pmouseY > 2.5 && this.y + this.length + 5 <= 650){
			this.y +=5;
		}
		if(mouseY - pmouseY > 5 && this.y + this.length + 5 <= 650){
			this.y +=5;
		}
		if(mouseY - pmouseY > 7.5 && this.y + this.length + 5 <= 650){
			this.y +=5;
		}	
		if(mouseY - pmouseY > 10 && this.y + this.length + 5 <= 650){
			this.y +=5;
		}	
		if(mouseY - pmouseY > 12.5 && this.y + this.length + 5 <= 650){
			this.y +=5;
		}	
		if(mouseY - pmouseY > 15 && this.y + this.length + 5 <= 650){
			this.y +=5;
		}			
	
		if(mouseX - pmouseX < -2.5 && this.x - 5 >= 0){
			this.x -= 5;
		}
		if(mouseX - pmouseX < -5 && this.x - 5 >= 0){
			this.x -= 5;
		}
		if(mouseX - pmouseX < -7.5 && this.x - 5 >= 0){
			this.x -= 5;
		}
		if(mouseX - pmouseX < -10 && this.x - 5 >= 0){
			this.x -= 5;
		}
		if(mouseX - pmouseX < -12.5 && this.x - 5 >= 0){
			this.x -= 5;
		}
		if(mouseX - pmouseX < -15 && this.x - 5 >= 0){
			this.x -= 5;
		}
	
		if(mouseY - pmouseY < -2.5 && this.y - 5 >= 0){
			this.y -= 5;
		}
		if(mouseY - pmouseY < -5 && this.y - 5 >= 0){
			this.y -= 5;
		}
		if(mouseY - pmouseY < -7.5 && this.y - 5 >= 0){
			this.y -= 5;
		}
		if(mouseY - pmouseY < -10 && this.y - 5 >= 0){
			this.y -= 5;
		}
		if(mouseY - pmouseY < -12.5 && this.y - 5 >= 0){
			this.y -= 5;
		}
		if(mouseY - pmouseY < -15 && this.y - 5 >= 0){
			this.y -= 5;
		}			
	}
}

Hanger.prototype.cursor = function(){
	if(this.condition()){
		cursor(MOVE);
	}
	else{
		cursor(ARROW);
	}
}

Hanger.prototype.rotate = function(){
	if(mouseX - this.x > 0 && mouseX - this.x < this.width && mouseY - this.y > 0 && mouseY - this.y < this.length){
		var store = this.width;
		this.width = this.length * -1;
		this.length = store;
	
		this.rotation += 90;
		if(this.rotation === 360){
			this.rotation = 0;
		}
	}
}
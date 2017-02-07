//note to self. Dont need to use transformations. just change the x and y coordinates accordingly to prevent headaches;
var Livingroom = function(x, y, width, length){
	this.x = x || 0;
	this.y = y || 0;
	this.width = width || 300;
	this.length = length || 100;
	this.rotation = 0;
	this.alpha = 175;
	
	//all for rotation purposes
	this.centerX = this.x + (this.width/2);
	this.centerY = this.y + (this.length/2);
	this.endX = this.x + this.width;
	this.endY = this.y + this.length;
	this.rect1W = 50;
	this.rect1H = 30;
	this.rect2W = 40;
	this.rect2H = 20;
	this.rect3W = 30;
	this.rect3H = 10;
}

Livingroom.prototype.show = function(){
	push();
	fill(255, 255, 255, this.alpha);
	rect(this.x, this.y, this.width, this.length);
	
	if(this.rotation === 0){
		rect(this.centerX - (this.rect1W/2), this.y, this.rect1W, this.rect1H);
		rect(this.centerX - (this.rect2W/2), this.y + this.rect1H - this.rect2H, this.rect2W, this.rect2H);
		rect(this.centerX - (this.rect3W/2), this.endY - this.rect3H, this.rect3W, this.rect3H);
	}
	else if(this.rotation === 90){
		rect(this.endX - this.rect1W, this.centerY - (this.rect1H/2), this.rect1W, this.rect1H);
		rect(this.endX - this.rect1W, this.centerY - (this.rect2H/2), this.rect2W, this.rect2H);
		rect(this.x, this.centerY - (this.rect3H/2), this.rect3W, this.rect3H);
	}
	else if(this.rotation === 180){
		rect(this.centerX - (this.rect1W/2), this.endY - this.rect1H , this.rect1W, this.rect1H);
		rect(this.centerX - (this.rect2W/2), this.endY - this.rect1H, this.rect2W, this.rect2H);
		rect(this.centerX - (this.rect3W/2), this.y, this.rect3W, this.rect3H);
	}
	else if(this.rotation === 270){
		rect(this.x, this.centerY - (this.rect1H/2), this.rect1W, this.rect1H);
		rect(this.x + this.rect1W - this.rect2W, this.centerY - (this.rect2H/2), this.rect2W, this.rect2H);
		rect(this.endX - this.rect3W, this.centerY - (this.rect3H/2), this.rect3W, this.rect3H);
	}	
	
	pop();
}

Livingroom.prototype.clicked = function(){
	if(mouseX - this.x > 0 && mouseX - this.x < this.width && mouseY - this.y > 0 && mouseY - this.y < this.length){
		if(mouseX - pmouseX > 2.5 && this.x + this.width + 5 <= 650){
			this.x +=5;
		}
		if(mouseX - pmouseX > 5 && this.x + this.width + 5 <= 650){
			this.x +=5;
		}
		if(mouseX - pmouseX > 7.5 && this.x + this.width + 5 <= 650){
			this.x +=5;
		}
		if(mouseX - pmouseX > 10 && this.x + this.width + 5 <= 650){
			this.x +=5;
		}
		if(mouseX - pmouseX > 12.5 && this.x + this.width + 5 <= 650){
			this.x +=5;
		}
		if(mouseX - pmouseX > 15 && this.x + this.width + 5 <= 650){
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
	this.centerX = this.x + (this.width/2);
	this.centerY = this.y + (this.length/2);
	this.endX = this.x + this.width;
	this.endY = this.y + this.length;
}

Livingroom.prototype.cursor = function(){
	if(mouseX - this.x > 0 && mouseX - this.x < this.width && mouseY - this.y > 0 && mouseY - this.y < this.length){
		cursor(MOVE);
	}
	else{
		cursor(ARROW);
	}
}

Livingroom.prototype.rotate = function(){
	if(mouseX - this.x > 0 && mouseX - this.x < this.width && mouseY - this.y > 0 && mouseY - this.y < this.length){
		var store1 = this.rect1W;
		this.rect1W = this.rect1H;
		this.rect1H = store1;
		
		var store2 = this.rect2W;
		this.rect2W = this.rect2H;
		this.rect2H = store2;
		
		var store3 = this.rect3W;
		this.rect3W = this.rect3H;
		this.rect3H = store3;
	
		this.rotation += 90;
		if(this.rotation === 360){
			this.rotation = 0;
		}
	}
}
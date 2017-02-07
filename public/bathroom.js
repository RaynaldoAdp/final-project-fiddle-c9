//note to self. Dont need to use transformations. just change the x and y coordinates accordingly to prevent headaches;
var Bathroom = function(x, y, width, length){
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
	this.rectW = 30;
	this.rectH = 10;
	this.arcW = 20;
	this.arcH = 50;
}

Bathroom.prototype.show = function(){
	push();
	fill(255, 255, 255, this.alpha);
	rect(this.x, this.y, this.width, this.length);
	stroke(0);
		
	if(this.rotation === 0){
		arc(this.centerX, this.y + 10, this.arcW, this.arcH, 0, PI);
		rect(this.centerX - this.rectW/2, this.y, this.rectW , this.rectH);
	}
	else if(this.rotation === 90){
		arc(this.endX - this.rectW, this.centerY, this.arcW, this.arcH, PI/2, 3*PI/2);
		rect(this.endX - this.rectW, this.centerY - (this.rectH/2), this.rectW , this.rectH);
	}
	else if(this.rotation === 180){
		arc(this.centerX, this.endY - this.rectH, this.arcW, this.arcH, PI, 2*PI);
		rect(this.centerX - this.rectW/2, this.endY - this.rectH, this.rectW , this.rectH);
	}
	else if(this.rotation === 270){
		arc(this.x + this.rectW, this.centerY, this.arcW, this.arcH, 3*PI/2, PI/2);
		rect(this.x, this.centerY-(this.rectH/2), this.rectW , this.rectH);
	}	
	
	pop();
}

Bathroom.prototype.clicked = function(){
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

Bathroom.prototype.cursor = function(){
	if(mouseX - this.x > 0 && mouseX - this.x < this.width && mouseY - this.y > 0 && mouseY - this.y < this.length){
		cursor(MOVE);
	}
	else{
		cursor(ARROW);
	}
}

Bathroom.prototype.rotate = function(){
	if(mouseX - this.x > 0 && mouseX - this.x < this.width && mouseY - this.y > 0 && mouseY - this.y < this.length){
		var store1 = this.rectW;
		this.rectW = this.rectH;
		this.rectH = store1;
		
		var store2 = this.arcW;
		this.arcW = this.arcH;
		this.arcH = store2;
		
		this.rotation += 90;
		if(this.rotation === 360){
			this.rotation = 0;
		}
	}
}
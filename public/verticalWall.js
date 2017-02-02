var Verticalwall = function(x, y, entity,xRect,yRect,width,length){
	this.x = x || 0;
	this.y = y || 0;
	this.end = this.y + 5;
	this.entity = null || entity;
	//this part is for the condition of dragging
	this.xRect = xRect;
	this.yRect = yRect;
	this.width = width;
	this.length = length;
	this.toDelete = false;
}

Verticalwall.prototype.show = function(){
	push();
	stroke(255,255,0);
	strokeWeight(3);
	line(this.x, this.y, this.x, this.end);
    pop();
}

Verticalwall.prototype.clicked = function(){
	if(mouseX - this.xRect > 0 && mouseX - this.xRect < this.width && mouseY - this.yRect > 0 && mouseY - this.yRect < this.length){
		if(mouseX - pmouseX > 2.5){
			this.x +=5;
			this.xRect += 5;
		}
		if(mouseY - pmouseY > 2.5){
			this.y +=5;
			this.yRect += 5;
		}
		if(mouseX - pmouseX < -2.5){
			this.x -= 5;
			this.xRect -= 5;
		}
		if(mouseY - pmouseY < -2.5){
			this.y -= 5;
			this.yRect -= 5;
		}
		
		if(mouseX - pmouseX > 5){
			this.x +=5;
			this.xRect += 5;
		}
		if(mouseY - pmouseY > 5){
			this.y +=5;
			this.yRect += 5;
		}
		if(mouseX - pmouseX < -5){
			this.x -= 5;
			this.xRect -= 5;
		}
		if(mouseY - pmouseY < -5){
			this.y -= 5;
			this.yRect -= 5;
		}
		
		if(mouseX - pmouseX > 7.5){
			this.x +=5;
			this.xRect += 5;
		}
		if(mouseY - pmouseY > 7.5){
			this.y +=5;
			this.yRect += 5;
		}
		if(mouseX - pmouseX < -7.5){
			this.x -= 5;
			this.xRect -= 5;
		}
		if(mouseY - pmouseY < -7.5){
			this.y -= 5;
			this.yRect -= 5;
		}
		
		if(mouseX - pmouseX > 10){
			this.x +=5;
			this.xRect += 5;
		}
		if(mouseY - pmouseY > 10){
			this.y +=5;
			this.yRect += 5;
		}
		if(mouseX - pmouseX < -10){
			this.x -= 5;
			this.xRect -= 5;
		}
		if(mouseY - pmouseY < -10){
			this.y -= 5;
			this.yRect -= 5;
		}
		
		if(mouseX - pmouseX > 12.5){
			this.x +=5;
			this.xRect += 5;
		}
		if(mouseY - pmouseY > 12.5){
			this.y +=5;
			this.yRect += 5;
		}
		if(mouseX - pmouseX < -12.5){
			this.x -= 5;
			this.xRect -= 5;
		}
		if(mouseY - pmouseY < -12.5){
			this.y -= 5;
			this.yRect -= 5;
		}		
		
		if(mouseX - pmouseX > 15){
			this.x +=5;
			this.xRect += 5;			
		}
		if(mouseY - pmouseY > 15){
			this.y +=5;
			this.yRect +=5;
		}
		if(mouseX - pmouseX < -15){
			this.x -= 5;
			this.xRect -= 5;			
		}
		if(mouseY - pmouseY < -15){
			this.y -= 5;
			this.yRect -= 5;
		}
	}
	this.end = this.y + 5;
}

Verticalwall.prototype.erase = function(){
	if(mouseX - this.x > -2 && mouseX -this.x < 2 && mouseY - this.y > 0 && mouseY - this.y < 5){
		this.toDelete = true;
	}
}

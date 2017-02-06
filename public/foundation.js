var Foundation = function(x,y){
    this.x = x;
    this.y = y;
}

Foundation.prototype.show = function(){
	push();
	fill(255,0,0);
	ellipse(this.x, this.y, 5 , 5);
	pop();
}
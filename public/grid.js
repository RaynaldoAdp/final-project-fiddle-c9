var Grid = function(x, y, width, length){
	this.x = x || 0;
	this.y = y || 0;
    this.width = width || 500;
    this.length = length || 500;
}

Grid.prototype.show = function(){

    //more optimized but problematic due to other rooms fill
/*    for(var i = 0; i < this.width + 1; i += 10){
        line(i, 0 , i ,this.length);
    }
    for(var j = 0; j < this.length+1; j += 10){
        line(0, j , this.width , j);
    }*/


    for(var i = 0; i < this.width; i += 10){
        for(var j = 0; j < this.length; j+= 10){
            rect(i, j, 10, 10);
        }
    }
}

Grid.prototype.show2 = function(){
	push();
	stroke(0);
	strokeWeight(3);
    for(var i = 0; i < this.width; i += 100){
        line(0 , i, 500, i);
    }
    for(var j = 0; j <this.length; j+= 100){
    	line(j, 0, j, 500);
    }
    pop();
}
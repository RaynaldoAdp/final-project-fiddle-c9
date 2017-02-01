//state Components(the final Json object to export)
var state = [];

//input width and length of canvas
var canvasWidth = 50;
var canvasLength = 50;

//2d array to store circumference state
var circumferenceArray = [];
for(var y = 0; y <= canvasWidth + 1; y++){
	circumferenceArray[y] = [];
	for (var z = 0; z <= canvasLength + 1; z++){
		circumferenceArray[y][z] = 0;
	}
}

//decide the state of the menu(bedroom, bathroom, etc..)
var menuState = null;

//state of each room (to calculate area to calculate cost)
var bedroomArea = [];
var bathroomArea = [];
var gardenArea = [];
var kitchenArea = [];
var livingroomArea = [];
var garageArea = [];
var carparkArea = [];
var terraceArea = [];
var hangerArea = [];

//initial grid
var gridArray = [];
gridArray.push(new Grid(0,0,canvasWidth*10,canvasLength*10));

//to store the objects
var objects = {  bedroom: [],
				 bathroom: [],
				 garden: [],
				 kitchen: [],
				 livingroom: [],
				 garage: [],
				 carpark: [],
				 terrace: [],
				 hanger: []
			  };

//walls
var horizontalWalls = [];
var verticalWalls = [];

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var infoTemplate = 	'<form id="dimensionInput">' +
						'<label for="width"> Width </label>' +
						'<input type="text" name="width" id="width" required />' +
						'<label for="length"> length </label>' +
						'<input type="text" name="length" id="length" required />' +
						'<input type= "submit" />' +
					'</form>' +
					'<button id="dimensionRemove">dimensionRemove</button>' +
					'<button id="eraser">eraser</button>';

var menuTemplate = '<button class="room" id="bedroom">Bedroom</button>' +
				   '<button class="room" id="bathroom">Bathroom</button>' +
				   '<button class="room" id="garden">Garden</button>' +
				   '<button class="room" id="kitchen">Kitchen</button>' +
				   '<button class="room" id="livingroom">Living Room</button>' +
				   '<button class="room" id="garage">Garage</button>' + 
				   '<button class="room" id="carpark">Carpark</button>' +
				   '<button class="room" id="terrace">Terrace</button>' +
				   '<button class="room" id="hanger">Hanger</button>';


$(document).ready(function(event){
	$('.menuPanel').append(menuTemplate);

	$('.room').click(function(){
		changeAlpha();
	})
	//toggle mode
	$('#bedroom').click(function(){
		for(var i = 0; i <objects.bedroom.length; i++){
			objects.bedroom[i].alpha = 175;
		}

		menuState = 'bedroom';
		$('.infoPanel').html(infoTemplate);
	})

	$('#bathroom').click(function(){
		for(var i = 0; i <objects.bathroom.length; i++){
			objects.bathroom[i].alpha = 175;
		}

		menuState = 'bathroom';
		$('.infoPanel').html(infoTemplate);
	})

	$('#garden').click(function(){
		for(var i = 0; i <objects.garden.length; i++){
			objects.garden[i].alpha = 175;
		}

		menuState = 'garden';
		$('.infoPanel').html(infoTemplate);
	})

	$('#kitchen').click(function(){
		for(var i = 0; i <objects.kitchen.length; i++){
			objects.kitchen[i].alpha = 175;
		}

		menuState = 'kitchen';
		$('.infoPanel').html(infoTemplate);
	})

	$('#livingroom').click(function(){
		for(var i = 0; i <objects.livingroom.length; i++){
			objects.livingroom[i].alpha = 175;
		}

		menuState = 'livingroom';
		$('.infoPanel').html(infoTemplate);
	})

	$('#garage').click(function(){
		for(var i = 0; i <objects.garage.length; i++){
			objects.garage[i].alpha = 175;
		}

		menuState = 'garage';
		$('.infoPanel').html(infoTemplate);
	})

	$('#carpark').click(function(){
		for(var i = 0; i <objects.carpark.length; i++){
			objects.carpark[i].alpha = 175;
		}

		menuState = 'carpark';
		$('.infoPanel').html(infoTemplate);
	})

	$('#terrace').click(function(){
		for(var i = 0; i <objects.terrace.length; i++){
			objects.terrace[i].alpha = 175;
		}

		menuState = 'terrace';
		$('.infoPanel').html(infoTemplate);
	})

	$('#hanger').click(function(){
		for(var i = 0; i <objects.hanger.length; i++){
			objects.hanger[i].alpha = 175;
		}

		menuState = 'hanger';
		$('.infoPanel').html(infoTemplate);
	})

	$('.room').click(function(){
		dimensionSubmit();
		dimensionRemove();
		eraser();
	})
});

function eraser(){
	$('#eraser').click(function(event){
		cursor(CROSS);
		menuState = "eraser";
	})
};


//to store the area of the rooms
function dimensionSubmit(){
	$('#dimensionInput').submit(function(event){
		event.preventDefault();
		var width = parseInt($('#width').val());
		var length = parseInt($('#length').val());
		var area = width * length;
		console.log(area);
		if(menuState==="bedroom"){
			bedroomArea.push(area);
		}
		else if(menuState === "bathroom"){
			bathroomArea.push(area);
		}
		else if(menuState==="garden"){
			gardenArea.push(area);
		}
		else if(menuState === "kitchen"){
			kitchenArea.push(area);
		}
		else if(menuState==="livingroom"){
			livingroomArea.push(area);
		}
		else if(menuState === "garage"){
			garageArea.push(area);
		}
		else if(menuState==="carpark"){
			carparkArea.push(area);
		}
		else if(menuState === "terrace"){
			terraceArea.push(area);
		}
		else if(menuState==="hanger"){
			hangerArea.push(area);
		}						
		generateRoom(width,length);
	})
};

//to splice the area of the bedroom
function dimensionRemove(){
	$('#dimensionRemove').click(function(event){
		event.preventDefault();
		var width = parseInt($('#width').val());
		var length = parseInt($('#length').val());
		var area = width * length;
		console.log(area);
		if(menuState==="bedroom"){
			bedroomArea = [];
			objects.bedroom = [];
			for(var i = verticalWalls.length -1; i >= 0; i--){
				if(verticalWalls[i].entity === "bedroom"){
					verticalWalls.splice(i,1);
				}
			}
			for(var j = horizontalWalls.length-1; j >= 0; j--){
				if(horizontalWalls[j].entity === "bedroom"){
					horizontalWalls.splice(j,1);
				}
			}
		}
		else if(menuState === "bathroom"){
			bedroomArea = [];
			objects.bathroom = [];
			for(var i = verticalWalls.length -1; i >= 0; i--){
				if(verticalWalls[i].entity === "bathroom"){
					verticalWalls.splice(i,1);
				}
			}
			for(var j = horizontalWalls.length-1; j >= 0; j--){
				if(horizontalWalls[j].entity === "bathroom"){
					horizontalWalls.splice(j,1);
				}
			}			
		}
		else if(menuState==="garden"){
			gardenArea.pop();
			objects.garden.pop();
		}
		else if(menuState === "kitchen"){
			kitchenArea = [];
			objects.kitchen = [];
			for(var i = verticalWalls.length -1; i >= 0; i--){
				if(verticalWalls[i].entity === "kitchen"){
					verticalWalls.splice(i,1);
				}
			}
			for(var j = horizontalWalls.length-1; j >= 0; j--){
				if(horizontalWalls[j].entity === "kitchen"){
					horizontalWalls.splice(j,1);
				}
			}
		}
		else if(menuState==="livingroom"){
			livingroomArea = [];
			objects.livingroom = [];
			for(var i = verticalWalls.length -1; i >= 0; i--){
				if(verticalWalls[i].entity === "livingroom"){
					verticalWalls.splice(i,1);
				}
			}
			for(var j = horizontalWalls.length-1; j >= 0; j--){
				if(horizontalWalls[j].entity === "livingroom"){
					horizontalWalls.splice(j,1);
				}
			}			
		}
		else if(menuState === "garage"){
			garageArea.pop();
			objects.garage.pop();
		}
		else if(menuState==="carpark"){
			carparkArea.pop();
			objects.carpark.pop();
		}
		else if(menuState === "terrace"){
			terraceArea.pop();
			objects.terrace.pop();
		}
		else if(menuState==="hanger"){
			hangerArea.pop();
			objects.hanger.pop();
		}						
	})
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//to get transparent effect during drag and drop
function changeAlpha(){
	for(key in objects){
		for(var i = 0; i < objects[key].length; i++){
			objects[key][i].alpha = 255;
		}
	}
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//setting up the canvas
function setup(){
	var inputWidth = canvasWidth * 10 + 1;
	var inputLength = canvasLength * 10 + 1;
	createCanvas(inputWidth, inputLength);
	background(255);
	frameRate(60);
}

//drawing the objects
function draw(){

	for(var i = 0; i< gridArray.length; i++){
		gridArray[i].show();
		gridArray[i].show2();
	}

	for(var key in objects){
		for(var i=0; i < objects[key].length; i++){
			objects[key][i].show();
			objects[key][i].cursor();
		}
	}

	for(var i = 0; i< horizontalWalls.length; i++){
		if(horizontalWalls[i].toDelete){
			horizontalWalls.splice(i,1);
			break;
		}
		horizontalWalls[i].show();
	}

	for(var i = 0; i< verticalWalls.length; i++){
		if(verticalWalls[i].toDelete){
			verticalWalls.splice(i,1);
			break;
		}
		verticalWalls[i].show();
	}

	if(menuState==="eraser"){
		if(mouseIsPressed){
			for(var i = 0; i < horizontalWalls.length; i++){
				horizontalWalls[i].erase();
			}
			for(var j = 0; j < verticalWalls.length; j++){
				verticalWalls[j].erase();
			}
		}
	}

}

//dragging of mouse to move the object in canvas
function mouseDragged() {
	if(menuState ==='bedroom'){
		for(var i = 0; i< objects.bedroom.length; i++){
			//might be causing error in calculations
			updateCircumferenceMinus(objects.bedroom[i].x, objects.bedroom[i].y, objects.bedroom[i].width, objects.bedroom[i].length);
			objects.bedroom[i].clicked();
			updateCircumferencePlus(objects.bedroom[i].x, objects.bedroom[i].y, objects.bedroom[i].width, objects.bedroom[i].length);
		}
		
		for(var j = 0; j<horizontalWalls.length; j++){
			if(horizontalWalls[j].entity === "bedroom"){
				horizontalWalls[j].clicked();
			}
		}

		for(var k = 0; k<verticalWalls.length; k++){
			if(verticalWalls[k].entity === "bedroom"){
				verticalWalls[k].clicked();
			}
		}
  	}
  	else if(menuState ==='bathroom'){
		for(var i = 0; i< objects.bathroom.length; i++){
			updateCircumferenceMinus(objects.bathroom[i].x, objects.bathroom[i].y, objects.bathroom[i].width, objects.bathroom[i].length);
			objects.bathroom[i].clicked();
			updateCircumferencePlus(objects.bathroom[i].x, objects.bathroom[i].y, objects.bathroom[i].width, objects.bathroom[i].length);
		}
		
		for(var j = 0; j<horizontalWalls.length; j++){
			if(horizontalWalls[j].entity === "bathroom"){
				horizontalWalls[j].clicked();
			}
		}

		for(var k = 0; k<verticalWalls.length; k++){
			if(verticalWalls[k].entity === "bathroom"){
				verticalWalls[k].clicked();
			}
		}

  	}
  	else if(menuState ==='garden'){
		for(var i = 0; i< objects.garden.length; i++){
			updateCircumferenceMinus(objects.garden[i].x, objects.garden[i].y, objects.garden[i].width, objects.garden[i].length);
			objects.garden[i].clicked();
			updateCircumferencePlus(objects.garden[i].x, objects.garden[i].y, objects.garden[i].width, objects.garden[i].length);
		}
  	}
  	else if(menuState ==='kitchen'){
		for(var i = 0; i< objects.kitchen.length; i++){
			updateCircumferenceMinus(objects.kitchen[i].x, objects.kitchen[i].y, objects.kitchen[i].width, objects.kitchen[i].length);
			objects.kitchen[i].clicked();
			updateCircumferencePlus(objects.kitchen[i].x, objects.kitchen[i].y, objects.kitchen[i].width, objects.kitchen[i].length);
		}
		
		for(var j = 0; j<horizontalWalls.length; j++){
			if(horizontalWalls[j].entity === "kitchen"){
				horizontalWalls[j].clicked();
			}
		}

		for(var k = 0; k<verticalWalls.length; k++){
			if(verticalWalls[k].entity === "kitchen"){
				verticalWalls[k].clicked();
			}
		}

  	}
  	else if(menuState ==='livingroom'){
		for(var i = 0; i< objects.livingroom.length; i++){
			updateCircumferenceMinus(objects.livingroom[i].x, objects.livingroom[i].y, objects.livingroom[i].width, objects.livingroom[i].length);
			objects.livingroom[i].clicked();
			updateCircumferencePlus(objects.livingroom[i].x, objects.livingroom[i].y, objects.livingroom[i].width, objects.livingroom[i].length);
		}
		
		for(var j = 0; j<horizontalWalls.length; j++){
			if(horizontalWalls[j].entity === "livingroom"){
				horizontalWalls[j].clicked();
			}
		}

		for(var k = 0; k<verticalWalls.length; k++){
			if(verticalWalls[k].entity === "livingroom"){
				verticalWalls[k].clicked();
			}
		}
  	}
   	else if(menuState ==='garage'){
		for(var i = 0; i< objects.garage.length; i++){
			updateCircumferenceMinus(objects.garage[i].x, objects.garage[i].y, objects.garage[i].width, objects.garage[i].length);
			objects.garage[i].clicked();
			updateCircumferencePlus(objects.garage[i].x, objects.garage[i].y, objects.garage[i].width, objects.garage[i].length);
		}

  	}
  	else if(menuState ==='carpark'){
		for(var i = 0; i< objects.carpark.length; i++){
			updateCircumferenceMinus(objects.carpark[i].x, objects.carpark[i].y, objects.carpark[i].width, objects.carpark[i].length);
			objects.carpark[i].clicked();
			updateCircumferencePlus(objects.carpark[i].x, objects.carpark[i].y, objects.carpark[i].width, objects.carpark[i].length);
		}
  	}
  	else if(menuState ==='terrace'){
		for(var i = 0; i< objects.terrace.length; i++){
			updateCircumferenceMinus(objects.terrace[i].x, objects.terrace[i].y, objects.terrace[i].width, objects.terrace[i].length);
			objects.terrace[i].clicked();
			updateCircumferencePlus(objects.terrace[i].x, objects.terrace[i].y, objects.terrace[i].width, objects.terrace[i].length);
		}
  	}
  	else if(menuState ==='hanger'){
		for(var i = 0; i< objects.hanger.length; i++){
			updateCircumferenceMinus(objects.hanger[i].x, objects.hanger[i].y, objects.hanger[i].width, objects.hanger[i].length);
			objects.hanger[i].clicked();
			updateCircumferencePlus(objects.hanger[i].x, objects.hanger[i].y, objects.hanger[i].width, objects.hanger[i].length);
		}
  	} 	  	
}

function mouseWheel(event) { 
	if(mouseIsPressed){
		if(menuState === "bedroom"){
			for(var i =0; i < objects.bedroom.length; i++){
				objects.bedroom[i].rotate();
			}
		}
		if(menuState === "bathroom"){
			for(var i =0; i < objects.bathroom.length; i++){
				objects.bathroom[i].rotate();
			}
		}
		if(menuState === "livingroom"){
			for(var i =0; i < objects.livingroom.length; i++){
				objects.livingroom[i].rotate();
			}
		}	
		if(menuState === "kitchen"){
			for(var i =0; i < objects.kitchen.length; i++){
				objects.kitchen[i].rotate();
			}
		}
	}
}

//pushing new rooms to object array
function generateRoom(width, length){
	var width = width;
	var length = length;
	if(menuState === 'bedroom'){
		objects.bedroom.push(new Bedroom(0, 0, width, length));
		for(var i = 0; i < width; i+= 10){
			horizontalWalls.push(new Horizontalwall(i, 0, "bedroom", 0, 0, width, length));
			horizontalWalls.push(new Horizontalwall(i, length, "bedroom", 0, 0, width, length));
		}
		for(var i = 0; i < length; i+= 10){
			verticalWalls.push(new Verticalwall(0, i, "bedroom", 0, 0, width, length));
			verticalWalls.push(new Verticalwall(width, i, "bedroom", 0, 0, width, length));
		}
		updateCircumferencePlus(0, 0, width , length);
	}
	else if(menuState === "bathroom"){
		objects.bathroom.push(new Bathroom(0, 0, width, length));
		for(var i = 0; i < width; i+= 10){
			horizontalWalls.push(new Horizontalwall(i, 0, "bathroom", 0, 0, width, length));
			horizontalWalls.push(new Horizontalwall(i, length, "bathroom", 0, 0, width, length));
		}
		for(var i = 0; i < length; i+= 10){
			verticalWalls.push(new Verticalwall(0, i, "bathroom", 0, 0, width, length));
			verticalWalls.push(new Verticalwall(width, i, "bathroom", 0, 0, width, length));
		}
		updateCircumferencePlus(0, 0, width , length);
	}
	else if(menuState === "garden"){
		objects.garden.push(new Garden(0, 0, width, length));
		updateCircumferencePlus(0, 0, width , length);
	}
	else if(menuState === "kitchen"){
		for(var i = 0; i < width; i+= 10){
			horizontalWalls.push(new Horizontalwall(i, 0, "kitchen", 0, 0, width, length));
			horizontalWalls.push(new Horizontalwall(i, length, "kitchen", 0, 0, width, length));
		}
		for(var i = 0; i < length; i+= 10){
			verticalWalls.push(new Verticalwall(0, i, "kitchen", 0, 0, width, length));
			verticalWalls.push(new Verticalwall(width, i, "kitchen", 0, 0, width, length));
		}
		objects.kitchen.push(new Kitchen(0, 0, width, length));
		updateCircumferencePlus(0, 0, width , length);
	}
	else if(menuState === "livingroom"){
		objects.livingroom.push(new Livingroom(0, 0, width, length));
		for(var i = 0; i < width; i+= 10){
			horizontalWalls.push(new Horizontalwall(i, 0, "livingroom", 0, 0, width, length));
			horizontalWalls.push(new Horizontalwall(i, length, "livingroom", 0, 0, width, length));
		}
		for(var i = 0; i < length; i+= 10){
			verticalWalls.push(new Verticalwall(0, i, "livingroom", 0, 0, width, length));
			verticalWalls.push(new Verticalwall(width, i, "livingroom", 0, 0, width, length));
		}
		updateCircumferencePlus(0, 0, width , length);
	}
	else if(menuState === "garage"){
		objects.garage.push(new Garage(0, 0, width, length));
		updateCircumferencePlus(0, 0, width , length);
	}
	else if(menuState === "carpark"){
		objects.carpark.push(new Carpark(0, 0, width, length));
		updateCircumferencePlus(0, 0, width , length);
	}
	else if(menuState === "terrace"){
		objects.terrace.push(new Terrace(0, 0, width, length));
		updateCircumferencePlus(0, 0, width , length);
	}
	else if(menuState === "hanger"){
		objects.hanger.push(new Hanger(0, 0, width, length));
		updateCircumferencePlus(0, 0, width , length);
	}		
}

///////////////////////////////////////////////////////////////////////////////

//to update the array for circumference
function updateCircumferencePlus(x,y,width,length){
	var startX = x/10;
	var startY = y/10;
	var endX = startX + width/10;
	var endY = startY + length/10;
	for(var i = startX; i <= endX - 1; i++ ){
		circumferenceArray[i][startY] += 1;
	}
	for(var i = startX; i <= endX - 1; i++ ){
		circumferenceArray[i][endY] += 1;
	}
	for(var i = startY + 1; i <= endY - 1; i++ ){
		circumferenceArray[startX][i] += 1;
	}
	for(var i = startY; i <= endY; i++ ){
		circumferenceArray[endX][i] += 1;
	}
}

//to update the array for circumference
function updateCircumferenceMinus(x,y,width,length){
	var startX = x/10;
	var startY = y/10;
	var endX = startX + width/10;
	var endY = startY + length/10;
	for(var i = startX; i <= endX - 1; i++ ){
		circumferenceArray[i][startY] -= 1;
	}
	for(var i = startX; i <= endX - 1; i++ ){
		circumferenceArray[i][endY] -= 1;
	}
	for(var i = startY + 1; i <= endY - 1; i++ ){
		circumferenceArray[startX][i] -= 1;
	}
	for(var i = startY; i <= endY; i++ ){
		circumferenceArray[endX][i] -= 1;
	}
}

//to calculate total circumference
function calculateTotalCircumference(array){
	var total = 0;
	for(var i =0; i <= canvasWidth; i++){
		for(var j = 0; j <= canvasLength; j++){
			var target = array[i][j];
			var nextTarget = array[i][j+1];
			if(target > 0 && nextTarget > 0){
				total +=10;
			} 
		}
	}

	for(var i =0; i <= canvasWidth; i++){
		for(var j = 0; j <= canvasLength; j++){
			var target = array[j][i];
			if(target > 0 && array[j+1][i] > 0){
				total +=10;
			} 
		}
	}
	return total;
}


function foundationCircumference(){
	var total = 0;
	total += horizontalWalls.length * 10;
	total += verticalWalls.length * 10;
	var horizontalStorage = {};
	var verticalStorage = {};
	for(var i=0; i < horizontalWalls.length; i++){

		var x = horizontalWalls[i].x.toString();
		var y = horizontalWalls[i].y.toString();
		var coordinate = x +"," + y;

		if(coordinate in horizontalStorage){
			total -= 10;
		}
		else{
			horizontalStorage[coordinate] = null;
		}
	}

	for(var j=0; j < verticalWalls.length; j++){

		var x = verticalWalls[j].x.toString();
		var y = verticalWalls[j].y.toString();
		var coordinate = x +"," + y;

		if(coordinate in verticalStorage){
			total -= 10;
		}
		else{
			verticalStorage[coordinate] = null;
		}
	}
	return total;
}


//////////////////////////////////////////////////////DATABASE////////////////////////////////////////////////////////////////////
function fondasi(){
	//input
	var panjangTotal = 28;
	var jumlahFondasi = 12;
	var lebarPanjangPileCap = 0.5;
	var tebalPileCap = 0.15;
	var height = 0.4;
	var panjangBesi = 12;

	var bowPlank = 0;
	var wood = 0.01 * panjangTotal;
	var nails = 0.02 * panjangTotal;

	var pekerjaanFondasiCakarAyam;
	var volumeFondasiCakarAyam = jumlahFondasi * lebarPanjangPileCap * lebarPanjangPileCap * tebalPileCap;
	var iron = 8*lebarPanjangPileCap/panjangBesi + 4*height*jumlahFondasi;
	var kerikil = 0.82 * volumeFondasiCakarAyam;
	var sand = 0.54 * volumeFondasiCakarAyam;
	var cement = sand * 1000 / 64;

	var result = [iron, kerikil, sand, cement];
	return result;
}
//state Components(the final Json object to export)
var state = [];

//input width and length of canvas
var canvasWidth = 65;
var canvasLength = 65;

//2d array to store circumference state
var circumferenceArray = [];
for(var y = 0; y <= (canvasWidth*2 + 1); y++){
	circumferenceArray[y] = [];
	for (var z = 0; z <= (canvasLength*2 + 1); z++){
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
gridArray.push(new Grid(0,0,canvasWidth*10 + 1,canvasLength*10 + 1));

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
		var widthPixel = width * 50;
		var lengthPixel = length * 50;
		generateRoom(widthPixel, lengthPixel);
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
			objects.garden[i].clicked();
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
			objects.garage[i].clicked();
		}

  	}
  	else if(menuState ==='carpark'){
		for(var i = 0; i< objects.carpark.length; i++){
			objects.carpark[i].clicked();
		}
  	}
  	else if(menuState ==='terrace'){
		for(var i = 0; i< objects.terrace.length; i++){
			objects.terrace[i].clicked();
		}
  	}
  	else if(menuState ==='hanger'){
		for(var i = 0; i< objects.hanger.length; i++){
			objects.hanger[i].clicked();
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
		for(var i = 0; i < width; i+= 5){
			horizontalWalls.push(new Horizontalwall(i, 0, "bedroom", 0, 0, width, length));
			horizontalWalls.push(new Horizontalwall(i, length, "bedroom", 0, 0, width, length));
		}
		for(var i = 0; i < length; i+= 5){
			verticalWalls.push(new Verticalwall(0, i, "bedroom", 0, 0, width, length));
			verticalWalls.push(new Verticalwall(width, i, "bedroom", 0, 0, width, length));
		}
		updateCircumferencePlus(0, 0, width , length);
	}
	
	else if(menuState === "bathroom"){
		objects.bathroom.push(new Bathroom(0, 0, width, length));
		for(var i = 0; i < width; i+= 5){
			horizontalWalls.push(new Horizontalwall(i, 0, "bathroom", 0, 0, width, length));
			horizontalWalls.push(new Horizontalwall(i, length, "bathroom", 0, 0, width, length));
		}
		for(var i = 0; i < length; i+= 5){
			verticalWalls.push(new Verticalwall(0, i, "bathroom", 0, 0, width, length));
			verticalWalls.push(new Verticalwall(width, i, "bathroom", 0, 0, width, length));
		}
		updateCircumferencePlus(0, 0, width , length);
	}
	
	else if(menuState === "garden"){
		objects.garden.push(new Garden(0, 0, width, length));
	}
	
	else if(menuState === "kitchen"){
		for(var i = 0; i < width; i+= 5){
			horizontalWalls.push(new Horizontalwall(i, 0, "kitchen", 0, 0, width, length));
			horizontalWalls.push(new Horizontalwall(i, length, "kitchen", 0, 0, width, length));
		}
		for(var i = 0; i < length; i+= 5){
			verticalWalls.push(new Verticalwall(0, i, "kitchen", 0, 0, width, length));
			verticalWalls.push(new Verticalwall(width, i, "kitchen", 0, 0, width, length));
		}
		objects.kitchen.push(new Kitchen(0, 0, width, length));
		updateCircumferencePlus(0, 0, width , length);
	}
	
	else if(menuState === "livingroom"){
		objects.livingroom.push(new Livingroom(0, 0, width, length));
		for(var i = 0; i < width; i+= 5){
			horizontalWalls.push(new Horizontalwall(i, 0, "livingroom", 0, 0, width, length));
			horizontalWalls.push(new Horizontalwall(i, length, "livingroom", 0, 0, width, length));
		}
		for(var i = 0; i < length; i+= 5){
			verticalWalls.push(new Verticalwall(0, i, "livingroom", 0, 0, width, length));
			verticalWalls.push(new Verticalwall(width, i, "livingroom", 0, 0, width, length));
		}
		updateCircumferencePlus(0, 0, width , length);
	}
	
	else if(menuState === "garage"){
		objects.garage.push(new Garage(0, 0, width, length));
	}
	
	else if(menuState === "carpark"){
		objects.carpark.push(new Carpark(0, 0, width, length));
	}
	
	else if(menuState === "terrace"){
		objects.terrace.push(new Terrace(0, 0, width, length));
	}
	
	else if(menuState === "hanger"){
		objects.hanger.push(new Hanger(0, 0, width, length));
	}		
}

///////////////////////////////////////////////////////////////////////////////

//to update the array for circumference
function updateCircumferencePlus(x,y,width,length){
	var startX = x/5;
	var startY = y/5;
	var endX = startX + width/5;
	var endY = startY + length/5;
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
	var startX = x/5;
	var startY = y/5;
	var endX = startX + width/5;
	var endY = startY + length/5;
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
function calculateTotalCircumference(){
	var total = 0;
	for(var i =0; i <= canvasWidth*2; i++){
		for(var j = 0; j <= canvasLength*2; j++){
			var target = circumferenceArray[i][j];
			var nextTarget = circumferenceArray[i][j+1];
			if(target > 0 && nextTarget > 0){
				total += 0.1;
			} 
		}
	}

	for(var i =0; i <= canvasWidth*2 + 1; i++){
		for(var j = 0; j <= canvasLength*2 + 1; j++){
			var target = circumferenceArray[j][i];
			if(target > 0 && circumferenceArray[j+1][i] > 0){
				total += 0.1;
			} 
		}
	}
	return total;
}

function arrayClone(arr) {

    var i, copy;

    if( Array.isArray( arr ) ) {
        copy = arr.slice( 0 );
        for( i = 0; i < copy.length; i++ ) {
            copy[ i ] = arrayClone( copy[ i ] );
        }
        return copy;
    } else if( typeof arr === 'object' ) {
        throw 'Cannot clone array containing an object!';
    } else {
        return arr;
    }

}

function calculateTotalFoundation(){
	var total = 0;
	var storageArray = arrayClone(circumferenceArray);
	var minusCount = 0;
	var count = 0;
	
	for(var i =0; i <= canvasWidth*2; i++){
		var store1 = 0;
		for(var j = 0; j <= canvasLength*2; j++){
			var target = storageArray[i][j];
			var nextTarget = storageArray[i][j+1];
			
			if(store1 === 0 && target !== 0 && nextTarget !== 0){
				count+=1;
				store1 += 1;
				total += 1;
				minusCount+=1; // to mark that its already counted
			}
			else if(store1 !== 0 && target !== 0){
				if(store1 % 30 === 0 && nextTarget !== 0){
					total += 1;
				}
				store1 += 1;
			}
			else if(store1 !== 0 && nextTarget === 0){
				count+=1;
				store1 = 0;
				total +=1;
				minusCount+=1;
			}
		}
	}
	
	for(var i =0; i <= canvasWidth*2; i++){
		var store2 = 0;
		for(var j = 0; j <= canvasLength*2; j++){
			var target = storageArray[j][i];
			var nextTarget = storageArray[j+1][i];
			
			if(store2 === 0 && target !== 0 && nextTarget !== 0){
				count+=1;
				store2 += 1;
				total += 1;
			}
			else if(store2 !== 0 && target !== 0){
				if(store2 % 30 === 0 && nextTarget !== 0){
					total += 1;
				}
				store2 += 1;
			}
			else if(store2 !== 0 && nextTarget === 0){
				count+=1;
				store2 = 0;
				total +=1;
			}
		}
	}
	return total - minusCount;
}


function foundationCircumference(){
	var total = 0;
	total += horizontalWalls.length * 0.1;
	total += verticalWalls.length * 0.1;
	var horizontalStorage = {};
	var verticalStorage = {};
	for(var i=0; i < horizontalWalls.length; i++){

		var x = horizontalWalls[i].x.toString();
		var y = horizontalWalls[i].y.toString();
		var coordinate = x +"," + y;

		if(coordinate in horizontalStorage){
			total -= 0.1;
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
			total -= 0.1;
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

function rolag(){
	var kelilingRolag = calculateTotalCircumference(circumferenceArray);
	var height = 0.3;
	var area = kelilingRolag * 0.3;
	
	var brick = area * 160; //number
	var cement = area * 0.8; //sack
	var sand = area * 0.1; //m^3
	
	return [brick, cement, sand];
}

function Sloof(){
	var kelilingSloof = calculateTotalCircumference(circumferenceArray);
	var height = 0.2;
	var width = 0.15;
	var volume = kelilingSloof * height * width;
	
	var cement = 299 * volume / 50; //sack
	var sand = 799 * volume / 1600; //m^3 
	var kerikil = 1017 * volume / 1900; //m^3
	var besiSloof = kelilingSloof * 4 / 12;
	var jumlahBegel = kelilingSloof / 0.15;
	var panjang1Begel = 2 * kelilingSloof + 2 * width - 4 * 0.02 + 0.05;
	var totalPanjangBesiBegel = jumlahBegel * panjang1Begel / 12;
	var totalBesiSloof = besiSloof + totalPanjangBesiBegel; // pieces
	
	return [cement, sand, kerikil, totalBesiSloof];
}

function lantaiKerja(){
	var area = 45; //get from the 
	var height = 0.06;
	var volume = area * height;
	var cement = 299 * volume / 50; //sack
	var sand = 799 * volume / 1600; //m^3 
	var kerikil = 1017 * volume / 1900; //m^3
}

function column(){
	var length = 0.25;
	var height = 3;
	var width = 0.2;
	var numberOfColumns = 12;
	var volume = numberOfColumns * length * height * width;
	
	var cement = 299 * volume / 50; //sack
	var sand = 799 * volume / 1600; //m^3 
	var kerikil = 1017 * volume / 1900; //m^3
	
	var besiColumn = 4 * numberOfColumns / 12 * height;
	var jumlahBegel = height / 0.15 * numberOfColumns;
	var panjang1Begel = 2 * length + 2 * width - 4 * 0.02 + 0.05;
	var totalPanjangBesi = jumlahBegel * panjang1Begel / 12;
	var totalBesi = besiColumn + totalPanjangBesi;
}

function dinding(){
	var kelilingDinding = foundationCircumference();
	var height = 3;
	var area = height * kelilingDinding;
	var tinggiTombakLayar = 1.5;
	var totalLuasTombakLayar = 2 * tinggiTombakLayar * 7.5;//should be a variable input;
	
	var brick = 80 * area;
	var cement = 0.4 * area;
	var sand = 0.05 * area;
	
	return [brick, cement, sand]
}

function plaster(){
	var kelilingDinding = foundationCircumference();
	var height = 3;
	var area = height * kelilingDinding;
	
	var cement = 8 * area / 50 ;
	var pasirPasang = 0.036 * area; //m^3
	
	return [cement, pasirPasang];
}

function acian(){
	var kelilingDinding = foundationCircumference();
	var height = 3;
	var area = height * kelilingDinding;
	
	var cement = 2.5 * area /50;
	
	return cement;
}

function ringbalok(){
	var kelilingSloof = calculateTotalCircumference(circumferenceArray);
	var height = 0.2;
	var width = 0.15;
	var volume = kelilingSloof * height * width;
	
	var cement = 299 * volume / 50; //sack
	var sand = 799 * volume / 1600; //m^3 
	var kerikil = 1017 * volume / 1900; //m^3
	var besiSloof = kelilingSloof * 4 / 12;
	var jumlahBegel = kelilingSloof / 0.15;
	var panjang1Begel = 2 * kelilingSloof + 2 * width - 4 * 0.02 + 0.05;
	var totalPanjangBesiBegel = jumlahBegel * panjang1Begel / 12;
	var totalBesiSloof = besiSloof + totalPanjangBesiBegel; // pieces
	
	return [cement, sand, kerikil, totalBesiSloof];
}

function paint(){
	var internalCircumference;
	var externalCircumference;//internal and external different
	var height = 3;
	var internalArea;
	var externalArea;
	
	var internalPaint = internalArea/12;
	var externalPaint = exteranlArea/12;
	
	return[internalPaint, externalPaint];
}



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


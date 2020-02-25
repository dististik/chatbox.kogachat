// Minimum chat color brightnesses
var minColor = {
	white: 'fafafa',
	whiteArray: [250,250,250],
	red: '9a0000',
	redArray: [154,0,0],
	green: '009a00',
	greenArray: [0,154,0],
	blue: '3535d5',
	blueArray: [53,53,213],
	black: '404040',
	blackArray: [64,64,64]
}

// Chat event listener
document.addEventListener('onEventReceived',function(obj){
	// Create an array of three integers based off of chat message sender's display color
	var msgColor = obj.detail.tags.color.substring(1).match(/.{1,2}/g);
	for(i=0;i<3;i++) msgColor[i] = parseInt(msgColor[i],16);
	// Check if the sender's display color is black/grey/white
	if(msgColor[0] === msgColor[1] && msgColor[0] === msgColor[2]){
		// If sender's display color is darker than the minimum black, set it to the minimum
		if(msgColor[0] < minColor.blackArray[0]) msgColor = minColor.blackArray.slice();
		// If the sender's display color is lighter than the maximum white, set it to the maximum
		else if(msgColor[0] > minColor.whiteArray[0]) msgColor = minColor.whiteArray.slice();
	}
	// Find what the primary color of the sender's message was
	var primary = msgColor.indexOf(Math.max(...msgColor));
	// Execute code dependant on primary color
	switch(primary){
		case 0: // Red
			// If the sender's display color is darker than the minimum red, set it to the minimum
			if(msgColor[0] < minColor.redArray[0]) msgColor[0] = minColor.redArray[0];
			break;
		case 1: // Green
			// If the sender's display color is darker than the minimum green, set it to the minimum
			if(msgColor[1] < minColor.greenArray[1]) msgColor[1] = minColor.greenArray[1];
			break;
		case 2: // Blue
			// If the sender's display color is darker than the minimum blue, set it to the minimum
			if(msgColor[0] < minColor.blueArray[0]) msgColor[0] = minColor.blueArray[0];
			if(msgColor[1] < minColor.blueArray[1]) msgColor[1] = minColor.blueArray[1];
			if(msgColor[2] < minColor.blueArray[2]) msgColor[2] = minColor.blueArray[2];
			break;
	}
	// Reconstruct hex color string
	var hexString = "#";
	for(i=0;i<3;i++) hexString += msgColor[i].toString(16);

	console.log(hexString);
});
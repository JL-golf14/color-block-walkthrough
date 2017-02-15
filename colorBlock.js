$(document).ready(function(){
console.log("walkthrough");

var colorArray = ['aliceBlue', 'CornflowerBlue','Cyan', 'BlueViolet','PeachPuff','SlateBlue','PaleVioletRed'];
//loops through the colors at i
for (var i = 0; i < colorArray.length; i++) {


//these four lines add a new block
var newColorBlock = $('<div>');
newColorBlock.css('background-color', colorArray[i]);
newColorBlock.addClass('colorBlock');
$('#colorBlockContainer').append(newColorBlock);


}
var randomNumberSelected = randomNumber(0,colorArray.length-1);
var randomColor = colorArray[randomNumberSelected];
$('#userColorPrompt').text(randomColor);
});

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

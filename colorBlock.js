$(document).ready(function(){
console.log("walkthrough");

var color = ['aliceBlue', 'CornflowerBlue','Cyan', 'BlueViolet','PeachPuff','SlateBlue','PaleVioletRed'];
//loops through the colors at i
for (var i = 0; i < color.length; i++) {


//these four lines add a new block
var newColorBlock = $('<div>');
newColorBlock.css('background-color', color[i]);
newColorBlock.addClass('colorBlock');
$('#colorBlockContainer').append(newColorBlock);


}


});

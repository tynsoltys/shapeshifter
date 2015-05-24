

$.fn.shapeshifter = function(options) {

	var settings = $.extend({
		'shape': 'hexagon',
		'fillImage': 0,
		'fill': "red",
		'multiplier': 1,
		'rotation': 0,
		'rotationOffset': false
	},options);




var multiplier = settings.multiplier;

var fillColour = settings.fill;
console.log(fillColour);

var fillValue = settings.fillImage;
console.log(fillValue);

// // // // // // //
// SHAPE GETTER // /
// // // // // // //

var thisShape = this;

//shape storage 

// CLIP SVGS

var clipHexagonSvg = '<svg width="100" height="100" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg"> <defs> <pattern id="hexagonImage" patternUnits="userSpaceOnUse" width="100%" height="100%"><image preserveAspectratio="none" xlink:href="'+fillValue+'" x="0" y="0" width="100%" height="100%" /></pattern></defs>    <polygon preserveAspectRatio="xMidYMid meet" points="50,0 95,25 95,75 50,100 5,75 5,25" fill="'+fillColour+'"/> </svg>';

var clipStarSvg = '<svg width="100" height="100" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs> <pattern id="starImage" patternUnits="userSpaceOnUse" width="100%" height="100%" fill="'+fillColour+'"><image  preserveAspectratio="none" xlink:href="'+fillValue+'" x="0" y="0" width="100%" height="100%" /></pattern></defs>    <polygon preserveAspectRatio="xMidYMid meet" points="50,0 63,38 100,38 69,59 82,100 50,75 18,100 31,59 0,38 37,38" fill="url(#starImage)"/></svg>';

// var pentagramSvg = '<svg width="100" height="100" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg"><polygon preserveAspectRatio="xMidYMid meet" points="50,0 82,100 0,38 100,38 18,100 50,0" style="stroke:'+fillColour+';stroke-width:5px;fill:transparent;"/></svg>';

var clipEqTriangleSvg = '<svg width="100" height="100" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs> <pattern id="eqTriangleImage" patternUnits="userSpaceOnUse" width="100%" height="100%"><image preserveAspectratio="none" xlink:href="'+fillValue+'" x="0" y="0" width="100%" height="100%" /></pattern></defs>    <polygon preserveAspectRatio="xMidYMid meet" points="50,0 0,100 100,100" fill="url(#eqTriangleImage)"/></svg>';

var clipPentagonSvg = '<svg width="100" height="100" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" ><defs> <pattern id="pentagonImage" patternUnits="userSpaceOnUse" width="100%" height="100%"><image preserveAspectratio="none" xlink:href="'+fillValue+'" x="0" y="0" width="100%" height="100%" /></pattern></defs><polygon preserveAspectRatio="xMidYMid meet" points="50,0 100,38 82,100 18,100 0,38" fill="url(#pentagonImage)"/></svg>';

var clipRectangleSvg = '<svg width="100" height="100" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs> <pattern id="rectangleImage" patternUnits="userSpaceOnUse" width="100%" height="100%"><image preserveAspectratio="none" xlink:href="'+fillValue+'" x="0" y="0" width="100%" height="100%" /></pattern></defs>    <polygon preserveAspectRatio="xMinYMin meet" points="0,0 100,0 100,100 0,100" fill="url(#rectangleImage)"/"></svg>';

var clipRhombusSvg = '<svg width="100" height="100" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" ><defs> <pattern id="rhombusImage" patternUnits="userSpaceOnUse" width="100%" height="100%"><image preserveAspectratio="none" xlink:href="'+fillValue+'" x="0" y="0" width="100%" height="100%" /></pattern></defs><polygon preserveAspectRatio="xMidYMid meet" points="50,0 100,50 50,100 0,50" fill="url(#rhombusImage)"/></svg>';
var clipHeptagonSvg = '<svg width="100" height="100" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" ><defs> <pattern id="heptagonImage" patternUnits="userSpaceOnUse" width="100%" height="100%"><image preserveAspectratio="none" xlink:href="'+fillValue+'" x="0" y="0" width="100%" height="100%" /></pattern></defs><polygon preserveAspectRatio="xMidYMid meet" points="50,0 90,20 100,60 75,100 25,100 0,60 10,20" fill="url(#heptagonImage)"/></svg>';
var clipOctogonSvg = '<svg width="100" height="100" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" ><defs> <pattern id="octogonImage" patternUnits="userSpaceOnUse" width="100%" height="100%"><image preserveAspectratio="none" xlink:href="'+fillValue+'" x="0" y="0" width="100%" height="100%" /></pattern></defs><polygon preserveAspectRatio="xMidYMid meet" points="30,0 70,0 100,30 100,70 70,100 30,100 0,70 0,30" fill="url(#octogonImage)"/></svg>';
var clipNonagonSvg = '<svg width="100" height="100" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" ><defs> <pattern id="nonagonImage" patternUnits="userSpaceOnUse" width="100%" height="100%"><image preserveAspectratio="none" xlink:href="'+fillValue+'" x="0" y="0" width="100%" height="100%" /></pattern></defs><polygon preserveAspectRatio="xMidYMid meet" points="50,0 83,12 100,43 94,78 68,100 32,100 6,78 0,43 17,12" fill="url(#nonagonImage)"/></svg>';
var clipDecagonSvg = '<svg width="100" height="100" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" ><defs> <pattern id="decagonImage" patternUnits="userSpaceOnUse" width="100%" height="100%"><image preserveAspectratio="none" xlink:href="'+fillValue+'" x="0" y="0" width="100%" height="100%" /></pattern></defs><polygon preserveAspectRatio="xMidYMid meet" points="50,0 80,10 100,35 100,70 80,90 50,100 20,90 0,70 0,35 20,10" fill="url(#decagonImage)"/></svg>';
var clipLeftChevronSvg = '<svg width="100" height="100" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" ><defs> <pattern id="leftChevronImage" patternUnits="userSpaceOnUse" width="100%" height="100%"><image preserveAspectratio="none" xlink:href="'+fillValue+'" x="0" y="0" width="100%" height="100%" /></pattern></defs><polygon preserveAspectRatio="xMidYMid meet" points="100,0 75,50 100,100 25,100 0,50 25,0" fill="url(#leftChevronImage)"/></svg>';
var clipRightChevronSvg = '<svg width="100" height="100" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" ><defs> <pattern id="rightChevronImage" patternUnits="userSpaceOnUse" width="100%" height="100%"><image preserveAspectratio="none" xlink:href="'+fillValue+'" x="0" y="0" width="100%" height="100%" /></pattern></defs><polygon preserveAspectRatio="xMidYMid meet" points="75,0 100,50 75,100 0,100 25,50 0,0" fill="url(#rightChevronImage)"/></svg>';
var clipMessageSvg = '<svg width="100" height="100" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" ><defs> <pattern id="messageImage" patternUnits="userSpaceOnUse" width="100%" height="100%"><image preserveAspectratio="none" xlink:href="'+fillValue+'" x="0" y="0" width="100%" height="100%" /></pattern></defs><polygon preserveAspectRatio="xMidYMid meet" points="0,0 100,0 100,75 75,75 75,100 50,75 0,75" fill="url(#messageImage)"/></svg>';
var clipRTriangleLeftSvg = '<svg width="100" height="100" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" ><defs> <pattern id="rTriangleLeftImage" patternUnits="userSpaceOnUse" width="100%" height="100%"><image preserveAspectratio="none" xlink:href="'+fillValue+'" x="0" y="0" width="100%" height="100%" /></pattern></defs><polygon preserveAspectRatio="xMidYMid meet" points="0,0 100,0 0,100" fill="url(#rTriangleLeftImage)"/></svg>';
var clipRTriangleRightSvg = '<svg width="100" height="100" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" ><defs> <pattern id="lTriangleImage" patternUnits="userSpaceOnUse" width="100%" height="100%"><image preserveAspectratio="none" xlink:href="'+fillValue+'" x="0" y="0" width="100%" height="100%" /></pattern></defs><polygon preserveAspectRatio="xMidYMid meet" points="0,0 100,0 100,100" fill="url(#lTriangleImage)"/></svg>';


if (settings.shape == 'hexagon') {
	$(this).append(clipHexagonSvg);
} else if (settings.shape == 'star') {
	$(this).append(clipStarSvg);
} else if (settings.shape == 'pentagon') {
	$(this).append(clipPentagonSvg);
} else if (settings.shape == 'eqTriangle') {
	$(this).append(clipEqTriangleSvg);
} else if (settings.shape == 'rectangle') {
	$(this).append(clipRectangleSvg);
} else if (settings.shape == 'rhombus') {
	$(this).append(clipRhombusSvg);
} else if (settings.shape == 'heptagon') {
	$(this).append(clipHeptagonSvg);
} else if (settings.shape == 'octogon') {
	$(this).append(clipOctogonSvg);
} else if (settings.shape == 'nonagon') {
	$(this).append(clipNonagonSvg);
} else if (settings.shape == 'decagon') {
	$(this).append(clipDecagonSvg);
} else if (settings.shape == 'leftChevron') {
	$(this).append(clipLeftChevronSvg);
} else if (settings.shape == 'rightChevron') {
	$(this).append(clipRightChevronSvg);
} else if (settings.shape == 'message') {
	$(this).append(clipMessageSvg);
} else if (settings.shape == 'rTriangleLeft') {
	$(this).append(clipRTriangleLeftSvg);
} else if (settings.shape == 'rTriangleRight') {
	$(this).append(clipRTriangleRightSvg);
// }	else if (settings.shape == 'pentagram') {
// 	$(this).append(pentagramSvg);
};


// // // // // // //
// / FILL ER UP / //
// // // // // // //

var currentShapeId = $(thisShape).get(0).id;
var currentShapeType = $(thisShape).children('svg').children('defs').children('pattern').get(0).id;
var thisShapeName = currentShapeId + currentShapeType;
console.log(thisShapeName);

// WHETHER TO APPLY FILL OR FILL IMAGE
if(fillValue != 0){
	//if something is entered by the user, take patternId and use it in the polygon fill
	// Each SVG requires a unique id to associate the specific fill URL to, so I've simply concatenated the shape's ID with the shape name! Provided you're using unique IDs to identify your shapes, you should be good! (Or use a class name if you want to apply the same fill to several objects!)
	$(thisShape).children('svg').children('defs').children('pattern').attr('id',thisShapeName);
	$(thisShape).children('svg').children('polygon').attr('fill','url(#'+ thisShapeName +')');
} else {
	//override the image with fill colour value
	$(thisShape).children('svg').children('polygon').attr('fill',fillColour);
};

// Now we apply some CSS to position the SVG within the div

$(thisShape).css({
   'position' : 'relative',
   'display' : 'block',
   'overflow' : 'display'
});

$(thisShape).children('svg').css({
   'position' : 'absolute',
   'top' : 0,
   'left' : 0
});

// Now we retrieve current z-indexes of the div's children

//NOTE: this can be slightly buggy at times and may require you to declare position:relative and specify lower z-indexes to other objects in the area. Generally it is ok, just in random cases, and plan to do some sleuthing as to why.

var $childElements=$(thisShape).children();

console.log($childElements);

var zinds =[];
$.each($childElements, function(i, item){
	console.log(item);
	var zind = $(item).css('z-index');
	zinds.push(zind);
});

//Had to make two arrays to do this. Something to consolidate in future versions

var zindsNew =[];
$.each(zinds, function(i, thing){
	var thingy = thing;
	// if the value is 'auto' we change it to an integer of 1 so we can later find the lowest integer!
	 if(thingy === 'auto'){
	 	thingy = "1";
	 }
	 thingy = parseInt(thingy);
	 zindsNew.push(thingy);
	 console.log(zindsNew);
});

// find the lowest z-index of the kids
var lowestZind = Math.min.apply(Math,zindsNew);

// apply a LOWER z-index to the svg to ensure it stays in the background, but RELATIVE to the contents of the div- subtracted 2 just in case people set a default of 0.

var svgZind = lowestZind - 2;

$(thisShape).children('svg').css("z-index",svgZind);

//Cool, that works!

// // // // // //
/// SVG SIZER ///
// // // // // //


//I have decided to create polygons that all have 100 as the scale value on x and y axes, and also start as 100px x 100px.

//I realize this is largely redundant (with transform-scale and all, but was a fun exercise nonetheless, I learned a lot by doing it, and it works great!

//This here scales the viewbox
//(AND the parent div, something that will be very important in future versions where the SVG viewbox is rotated independently of the div.)

// HEIGHT OF SVG AND DIV ADJUSTMENTS
var svgH = $(thisShape).children('svg').attr('height');
svgH = parseInt(svgH);

var finalSvgH = svgH * multiplier;
$(thisShape).children('svg').attr('height',finalSvgH);
$(thisShape).css('display','block');
$(thisShape).css('height',finalSvgH);

// WIDTH OF SVG AND DIV ADJUSTMENTS
var svgW = $(thisShape).children('svg').attr('width');
svgW = parseInt(svgW);
var finalSvgW = svgW * multiplier;
$(thisShape).children('svg').attr('width',finalSvgW);
$(thisShape).css('width',finalSvgW);

//This is the beginning of scaling the actual points "path"
// Get string of points
var $pointsString = $(thisShape).children('svg').children('polygon').attr('points');

// // split string by spaces and create array
var spaceSplit = $pointsString.split(' ');

var newPointArray = [];

// for each item in the array, pass into function that will multiply the integers (parseInt required)

$.each(spaceSplit, function(i, numbers){
	var pointPair = numbers;

// splits each pair in the middle, by the comma

	var points = pointPair.split(',');
	$.each(points, function(k, number){
		// console.log(number);
		var point = parseInt(number);
		var newPoint = (point * settings.multiplier);
		// console.log(newPoint);

		newPointArray.push(newPoint);

		});


		var newPointString = newPointArray.toString();
		// console.log(newPointString);

		var finalPointString = newPointString.replace(/([0-9]+),([0-9]+),/g, '$1,$2 ');
		// console.log(finalPointString);

		$(thisShape).children('svg').children('polygon').attr('points', finalPointString);



}); //end of SVG sizer


// // // // // // //
// / ROTATE THIS  //
// // // // // // //

// This is the simpler version of rotate, where we rotate the whole div, versus JUST the SVG, which is a thing I'd do in future versions (I tried rotating the SVG within the div at first but viewbox origin transformation was giving me a REALLY hard time. It's possible, just not within this time frame)

// Write some code to rotate the div 

var rotation = settings.rotation;




// Offset contents by the opposite of the rotation!

var rotationOffset = settings.rotationOffset;

if(rotationOffset == "true"){
	$(thisShape).children().css('transform','rotate(0deg)');
	$(thisShape).children('svg').css('transform','rotate('+rotation+'deg)');
} else {
	$(thisShape).css('transform','rotate('+rotation+'deg)');
}

// some fun drop shadow

// <filter id="drop-shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="2.2"/><feOffset dx="12" dy="12" result="offsetblur"/><feFlood flood-color="rgba(0,0,0,0.5)"/><feComposite in2="offsetblur" operator="in"/><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge></filter>
	
	// var rotatorX = 50;
	// var rotatorY = 50;

	// // var rotatorString = $(thisShape).children('svg').children('polygon').attr('transform',("rotate(" + rotation +","+ rotatorX +","+ rotatorY +")"));

	// var rotatorString = $(thisShape).children('svg').children('polygon').attr('transform',"rotate("+rotation+","+rotatorX+","+rotatorY+")");


	// var rotatedWidth = ($(thisShape).children('svg').children('polygon')[0].getBBox().width);
	// 	console.log("The rotatedWidth");
	// 	console.log(rotatedWidth);
	// 	$(thisShape).children('svg').attr("width",rotatedWidth);


	// var rotatedHeight = ($(thisShape).children('svg').children('polygon')[0].getBBox().height);
	// console.log("the rotatedHeight");
	// 	console.log(rotatedHeight);
	// 	$(thisShape).children('svg').attr("height",rotatedHeight);


}; 



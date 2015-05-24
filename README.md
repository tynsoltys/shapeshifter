#SHAPESHIFTER.JS

##A SIMPLE SVG SHAPE MAKER 
### INSTRUCTIONS

Shapeshifter.js is really easy to use!

1. Download shapeshifter.js and place it in your scripts folder.
2. Call jQuery and the shapeshifter.js file on each page you'd like to use it.
3. Assign a unique id to the div you'd like to shapeshift in your HTML.

	* _Divs work best, although other elements can be shifted too._
 	* _Something about classes._
 	
4. In your main.js file (or in script tags), run the function .shapeshift() on the div you'd like to shapeshift, and pass the *options* object into the function. The code below includes all possible options *in this version* ;) 

	    $('#div').shapeshifter({
	    	shape: "hexagon",
	    	fill: "#303F9F",
	    	fillImage: "images/image.gif",
	    	multiplier: 2,
	    	rotation: -30,
	    	rotationOffset: "true"
	    });
5. Re: the children of your shape, 

###Options
#####1. shape:"hexagon" _(required)_
Accepts a string with one of the below shapes:

   - hexagon 
   - star
   - pentagon
   - eqTriangle _(an equilateral triangle)_
   - rectangle _(actually a square, because just in case)_
   - rhombus _(an rotated square)_
   - heptagon _(seven sides)_
   - octogon
   - nonagon
   - decagon
   - leftChevron
   - rightChevron
   - message
   - rTriangleLeft
   - rTriangleRight

#####2. fill:"#303F9F" _(or fillImage required)_
Accepts a string with a hex, rgb, hsl value!

Will be overriden by fillImage if fillImage is used.

#####3. fillImage:"images/image.gif" _(or fill  required)_
Accepts the image path as a string. Set the path relative to the URL of the div you are shapeshifting.

Will override a fill colour.

#####4. rotation: -30 _(not required)_
Accepts the degrees of rotation as a number. You can use negative AND positive rotation values. WHAT!

#####5. rotation _(not required)_
Accepts a string of "true." Resets the contents of the shapeshifted div back to 0 degrees.

That's pretty much it! If you have any questions or suggestions, please email me at [link](mailto:c.n.soltys@gmail.com)

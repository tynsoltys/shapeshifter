#SHAPESHIFTER.JS

##a simple svg shape maker

### STEPS

Shapeshifter.js is really easy to use!

1. Download shapeshifter.js and place it in your 
2. Call jQuery and the shapeshifter.js file on each page you'd like to use it.
2. Assign a unique id to the div you'd like to shapeshift in your HTML.
 - Divs work best, although other elements can be shifted too.
 - Something about classes.
3. In your main.js file (or in script tags), summon the function shapeshift() on the div you'd like to shapeshift.
4. Pass an object into the function - this is where you will list out your options!
5. Shapeshifter requires several parameters to work, and accepts the following parameters:
>>>shape: "nameOfShape"
>>>>- accepts a string of the shape name (see below)
>>>fill:
>>>>- accepts a string with hex, rgb, rgba, or hsl value.
>>>fillImage:
>>>>- accepts a string with the file path RELATIVE to the page on which the div is located.
>>>>- will override the fill value, so don't include it if you just want a fill colour!
>>>rotation: deg
>>>>- accepts an integer in degrees
>>>>- 
>>>rotationOffset
>>>
>


star
50,0,63,38,100,38,69,59,82,100,50,75,18,100,31,59,0,38,37,38

pentagon
50,0 100,38 82,100 18,100 0,38

eqTriangle,
50,0 0,100 100,100

rTriangle
0,0 100,0 0,100

hexagon,
50,0 100,25 100,75 50,100 0,75 0,25

heptagon
50,0 90,20 100,60 75,100 25,100 0,60 10,20

octagon,
30,0 70,0 100,30 100,70 70,100 30,100 0,70 0,30

nonagon
50,0 83,12 100,43 94,78 68,100 32,100 6,78 0,43 17,12

decagon
50,0 80,10 100,35 100,70 80,90 50,100 20,90 0,70 0,35 20,10

left,chevron
100,0 75,50 100,100 25,100 0,50 25,0

right,chevron
75,0 100,50 75,100 0,100 25,50 0,0

message
0,0 100,0 100,75 75,75 75,100 50,75 0,75

rhombus
50,0 100,50 50,100 0,50

var clipRhombusSvg = '<svg width="100" height="100" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" ><defs> <pattern id="rhombusImage" patternUnits="userSpaceOnUse" width="100%" height="100%"><image preserveAspectratio="none" xlink:href="'+fillValue+'" x="0" y="0" width="100%" height="100%" /></pattern></defs><polygon preserveAspectRatio="xMidYMid meet" points="50,0 100,50 50,100 0,50" fill="url(#rhombusImage)"/></svg>';
var clipHeptagonSvg = '<svg width="100" height="100" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" ><defs> <pattern id="heptagonImage" patternUnits="userSpaceOnUse" width="100%" height="100%"><image preserveAspectratio="none" xlink:href="'+fillValue+'" x="0" y="0" width="100%" height="100%" /></pattern></defs><polygon preserveAspectRatio="xMidYMid meet" points="50,0 90,20 100,60 75,100 25,100 0,60 10,20" fill="url(#heptagonImage)"/></svg>';
var clipOctogonSvg = '<svg width="100" height="100" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" ><defs> <pattern id="octogonImage" patternUnits="userSpaceOnUse" width="100%" height="100%"><image preserveAspectratio="none" xlink:href="'+fillValue+'" x="0" y="0" width="100%" height="100%" /></pattern></defs><polygon preserveAspectRatio="xMidYMid meet" points="30,0 70,0 100,30 100,70 70,100 30,100 0,70 0,30" fill="url(#octogonImage)"/></svg>';
var clipNonagonSvg = '<svg width="100" height="100" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" ><defs> <pattern id="nonagonImage" patternUnits="userSpaceOnUse" width="100%" height="100%"><image preserveAspectratio="none" xlink:href="'+fillValue+'" x="0" y="0" width="100%" height="100%" /></pattern></defs><polygon preserveAspectRatio="xMidYMid meet" points="50,0 83,12 100,43 94,78 68,100 32,100 6,78 0,43 17,12" fill="url(#nonagonImage)"/></svg>';
var clipDecagonSvg = '<svg width="100" height="100" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" ><defs> <pattern id="decagonImage" patternUnits="userSpaceOnUse" width="100%" height="100%"><image preserveAspectratio="none" xlink:href="'+fillValue+'" x="0" y="0" width="100%" height="100%" /></pattern></defs><polygon preserveAspectRatio="xMidYMid meet" points="50,0 80,10 100,35 100,70 80,90 50,100 20,90 0,70 0,35 20,10" fill="url(#decagonImage)"/></svg>';
var clipLeftChevronSvg = '<svg width="100" height="100" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" ><defs> <pattern id="leftChevronImage" patternUnits="userSpaceOnUse" width="100%" height="100%"><image preserveAspectratio="none" xlink:href="'+fillValue+'" x="0" y="0" width="100%" height="100%" /></pattern></defs><polygon preserveAspectRatio="xMidYMid meet" points="100,0 75,50 100,100 25,100 0,50 25,0" fill="url(#leftChevronImage)"/></svg>';
var clipRightChevronSvg = '<svg width="100" height="100" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" ><defs> <pattern id="rightChevronImage" patternUnits="userSpaceOnUse" width="100%" height="100%"><image preserveAspectratio="none" xlink:href="'+fillValue+'" x="0" y="0" width="100%" height="100%" /></pattern></defs><polygon preserveAspectRatio="xMidYMid meet" points="75,0 100,50 75,100 0,100 25,50 0,0" fill="url(#rightChevronImage)"/></svg>';
var clipMessageSvg = '<svg width="100" height="100" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" ><defs> <pattern id="messageImage" patternUnits="userSpaceOnUse" width="100%" height="100%"><image preserveAspectratio="none" xlink:href="'+fillValue+'" x="0" y="0" width="100%" height="100%" /></pattern></defs><polygon preserveAspectRatio="xMidYMid meet" points="0,0 100,0 100,75 75,75 75,100 50,75 0,75" fill="url(#messageImage)"/></svg>';
var clipRTriangleLeftSvg = '<svg width="100" height="100" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" ><defs> <pattern id="rTriangleLeftImage" patternUnits="userSpaceOnUse" width="100%" height="100%"><image preserveAspectratio="none" xlink:href="'+fillValue+'" x="0" y="0" width="100%" height="100%" /></pattern></defs><polygon preserveAspectRatio="xMidYMid meet" points="0,0 100,0 0,100" fill="url(#rTriangleLeftImage)"/></svg>';
var clipRTriangleRightSvg = '<svg width="100" height="100" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" ><defs> <pattern id="lTriangleImage" patternUnits="userSpaceOnUse" width="100%" height="100%"><image preserveAspectratio="none" xlink:href="'+fillValue+'" x="0" y="0" width="100%" height="100%" /></pattern></defs><polygon preserveAspectRatio="xMidYMid meet" points="0,0 100,0 0,100" fill="url(#lTriangleImage)"/></svg>';
OLD SVG PATHS

// if (settings.shape == 'hexagon') {
//  $(this).append(hexagonSvg);
// } else if (settings.shape == 'star') {
//  $(this).append(starSvg);
//  console.log("STAR POWER!")
// } else if (settings.shape == 'pentagon') {
//  $(this).append(pentagonSvg);
// } else if (settings.shape == 'eqTriangle') {
//  $(this).append(eqTriangleSvg);
// } else if (settings.shape == 'rectangle') {
//  $(this).append(rectangleSvg);
// };

var hexagonSvg = '<svg width="100" height="100" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet"><polygon preserveAspectRatio="xMinYMin meet" points="40,00 80,20 80,60 40,80 0,60 00,20"/></svg>';

var starSvg = '<svg width="100" height="100" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet"><polygon preserveAspectRatio="xMinYMin meet" points="25.55,0.975 31.727,20.293 50.89699999999999,20.293 35.56099999999999,31.795 41.099,50.113 25.55,39.25 10.001,50.113 15.539,31.795 0.202999999999996,20.293 19.373,20.293"/></svg>';

var pentagonSvg = '<svg width="100" height="100" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet"><polygon style="fill:background: url(https://ununsplash.imgix.net/photo-1415302199888-384f752645d0?q=75&fm=jpg&s=823bdcc1b7ad955f5180efd352561016);" preserveAspectRatio="xMinYMin meet" points="50,12.5 14.5,38.5 28,80.25 72,80.25 85.5,38.5"/></svg>';

var eqTriangleSvg = '<svg width="100" height="100" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet"><polygon preserveAspectRatio="xMinYMin meet" points="39.6,15.15 0.21,83.325 79,83.325"/></svg>';

// var clipPentagonSvg = '<svg width="100" height="100" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" >
//  <defs> 
//  <pattern id="pentagonImage" patternUnits="userSpaceOnUse" width="100" height="100">
//      <image xlink:href="images/nebula.jpg" x="0" y="0" width="100" height="100" />
//  </pattern>
//  </defs>
//  <polygon preserveAspectRatio="xMinYMin meet" points="50,12.5 14.5,38.5 28,80.25 72,80.25 85.5,38.5" fill="url(#pentagonImage)"/>

// </svg>';
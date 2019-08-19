// ResizeMe by Julian Hasse, 2019
// Version 1.0

var UI = require('sketch/ui')
var layer = context.selection.firstObject()


var sizeValue = UI.getInputFromUser(
  "Enter scale value (1 = 100%)",
  {
    initialValue: '1',
  },
  (err, value) => {
    if (err) {
      // most likely the user canceled the input
      return 
    } else {

if(layer) {
    // Preserve layer center point.
    var midX=layer.frame().midX();
    var midY=layer.frame().midY();

    // Scale layer by user's choice
  layer.multiplyBy(Number(value));

    // Translate frame to the original center point.
    layer.frame().midX = midX;
    layer.frame().midY = midY;
       }
     }
   }
)
  

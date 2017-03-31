var centerX = view.center.x;
var centerY = view.center.y;
// var points = 50;

var genInnerRing = function( radius, points, cx, cy, color1, color2 ){

  // Convert angle to radians, not degrees.
  var angle = ( Math.PI*2 ) / points;

  console.log( "Center x: " + cx + " Center y: " + cy );
  // Show the path circles are spawned on

  var trackPath = new Path.Circle({
    center: new Point( cx , cy ),
    radius: radius,
    strokeColor: 'blue'
  });

  for( var i = 1; i <= points; i++ ){

    var radialX = radius * Math.cos( angle * i ) + cx;
    var radialY = radius * Math.sin( angle * i ) + cy;
    // x = cx + r * cos(a)
    // y = cy + r * sin(a)

    var outer = new Path.Circle({
      center: new Point( radialX , radialY ),
      radius: radius / 2,
      strokeColor: i % 2 === 0 ? color1 : color2
    });

    // console.log( "x: " + outer.position.x + ", y: " + outer.position.y );
  }
};

function onResize(event) {
  genInnerRing( 130, 60, centerX, centerY, "rgb(255, 0, 0)", "rgb(255, 150, 0)" );
  genInnerRing( 150, 60, centerX, centerY, "rgb(255, 0, 0)", "rgb(255, 150, 0)" );
  genInnerRing( 110, 60, centerX, centerY, "rgb(255, 0, 0)", "rgb(255, 150, 0)" );
  genInnerRing( 90, 60, centerX, centerY, "rgb(50, 215, 20)", "rgb(50, 204, 155)" );
  genInnerRing( 55, 30, centerX, centerY, "rgb(80, 30, 215)", "rgb(120, 10, 205)" );
}


// for( var i = 1; i <= points; i++ ){
//   // debugger
//   console.log( angle );
//   var x = centerX + radius + Math.cos(2 * Math.PI * i / points );
//   var y = centerY + radius + Math.sin(2 * Math.PI * i / points );
//   var shape = new Shape.Circle({
//     center: new Point( x , y ),
//     radius: radius,
//     strokeColor: 'red'
//   });
//   // debugger
//   console.log( "x: " + path.position.x + ", y: " + path.position.y )
//   angle += ( 360 / points );
// }


// function onResize(event) {
//   // Whenever the window is resized, recenter the path:
//   path.position = view.center;
// }

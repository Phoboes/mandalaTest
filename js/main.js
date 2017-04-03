var centerX = view.center.x;
var centerY = view.center.y;

var ringGen = function( radius, genRadius, points, cx, cy, color1, color2 ){

  // Convert angle to radians, not degrees.
  var angle = ( Math.PI*2 ) / points;

  console.log( "Center x: " + cx + " Center y: " + cy );
  // Show the path circles are spawned on

  var trackPath = new Path.Circle({
    center: new Point( cx , cy ),
    radius: radius,
    strokeColor: 'rgba(0,0,0,0.1)'
  });

  for( var i = 1; i <= points; i++ ){

    var radialX = radius * Math.cos( angle * i ) + cx;
    var radialY = radius * Math.sin( angle * i ) + cy;
    // x = cx + r * cos(a)
    // y = cy + r * sin(a)

    var outer = new Path.Circle({
      center: new Point( radialX , radialY ),
      radius: genRadius,
      strokeColor: ( i % 2 === 0 ? color1 :  color2 )
    });
  }
};


function onResize(event) {
  ringGen( 80, 80, 16, centerX, centerY, "blue" );
  ringGen( 120, 120, 10, centerX, centerY, "rgba( 200, 50, 200, 0.2 )", "rgba( 200, 200, 0, 0.5 )" );
}



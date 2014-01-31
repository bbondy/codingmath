window.onload = function() {
  var size,
    maxDepth = 0;
    angles = [];
    numShapes = 3;
    for (var i = 0; i < numShapes; i++)
      angles.push(Math.random() * Math.PI * 2);
      //angles.push(Math.PI * 2 / numShapes * i);
    size = 0,
    dist = 0,
    scaleFactor = .6;

    colors = [ "#CC0000", "#CC6600", "#CCCC00", "#66CC00", "#00CC00", "#00CC66", "#00CCCC", "#0066CC", "#0000CC" ];


  init();
  function init() {
    chaos.init();
    size = chaos.height / 8;
    dist = [
      size * Math.random() * 3 + 1,
      size * Math.random() * 3 + 1,
      size * Math.random() * 3 + 1
    ];

    draw();

    document.body.addEventListener("keyup", function(event) {
      console.log(event.keyCode);
      switch(event.keyCode) {
        case 32://space
          maxDepth += 1;
          draw();
          break;
        case 80: //p
          chaos.popImage();
          break;
        default:
          break;
      }
    });
  }

  function draw() {
    chaos.clear();
    chaos.context.save();
    chaos.context.translate(chaos.width * 0.5,
                            chaos.height * 0.5);
    iterate(maxDepth);
    chaos.context.restore();
  }

  function iterate(depth) {
    for (var i = 0; i < numShapes; i++) {
      chaos.context.save();
      chaos.context.rotate(angles[i] + Math.random() - .5);
      chaos.context.translate(dist[i] * (Math.random() * .5 + 1), 0);
      chaos.context.scale(scaleFactor, scaleFactor);
      drawShape(depth);
      if (depth > 0) {
        iterate(depth - 1);
      }
      chaos.context.restore();
    }
  }

  function drawShape(depth) {
    chaos.context.fillStyle = "rgba(0, 0, 0, .5)";
    chaos.context.beginPath();
    chaos.context.arc(0, 0, size, 0, Math.PI, false);
    chaos.context.fill();
    chaos.context.beginPath();
    chaos.context.fillStyle = colors[maxDepth - depth];
    chaos.context.arc(0, 0, size/1.5, 0, Math.PI * 2, false);
    chaos.context.fill();
  }
}

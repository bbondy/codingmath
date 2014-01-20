window.onload = function() {
  var size,
    maxDepth = 0;

  init();
  function init() {
    chaos.init();
    size = chaos.height * 0.5;

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
                            chaos.height * 0.6);
    chaos.context.scale(size, size);
    drawTriangle(maxDepth);
    chaos.context.restore();
  }

  function drawTriangle(depth) {
    var angle = -Math.PI / 2;
    if (depth === 0) {
      chaos.context.beginPath();

      // Move to top point of triangle
      chaos.context.moveTo(Math.cos(angle), Math.sin(angle));
      angle += Math.PI * 2 / 3;

      // Draw line ot lower right point
      chaos.context.lineTo(Math.cos(angle), Math.sin(angle));

      //Draw line to final point
      angle += Math.PI * 2 / 3;
      chaos.context.lineTo(Math.cos(angle),
                           Math.sin(angle));

      // Fill will close the shape
      chaos.context.fill();
    } else {

      // Draw the top triangle
      chaos.context.save();
      chaos.context.translate(Math.cos(angle) * 0.5,
                              Math.sin(angle) * 0.5);

      chaos.context.scale(0.5, 0.5);
      drawTriangle(depth -1);
      chaos.context.restore();

      // Draw the lower right triangle
      angle += Math.PI * 2 / 3;
      chaos.context.save();
      chaos.context.translate(Math.cos(angle) * 0.5,
                              Math.sin(angle) * 0.5);
      chaos.context.scale(0.5, 0.5);
      drawTriangle(depth - 1);
      chaos.context.restore();


      // Draw the lower left triangle
      angle += Math.PI * 2 / 3;
      chaos.context.save();
      chaos.context.translate(Math.cos(angle) * 0.5,
                              Math.sin(angle) * 0.5);
      chaos.context.scale(0.5, 0.5);
      drawTriangle(depth - 1);
      chaos.context.restore();
    }
  }
}

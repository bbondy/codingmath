window.onload = function() {
  var maxDepth = 0;

  init();
  function init() {
    chaos.init();

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
    var p0 = {
      x: chaos.width * 0.32,
      y: chaos.height * 0.28
    };

    var p1 = {
      x: chaos.width * 0.68,
      y: chaos.height * 0.28
    };

    var p2 = {
      x: p1.x + Math.cos(Math.PI * 2 / 3) * (p1.x - p0.x),
      y: p1.y + Math.sin(Math.PI * 2 / 3) * (p1.x - p0.x)
    };

    chaos.clear();
    chaos.context.lineWidth = 2;

    koch(p0, p1, maxDepth);
    koch(p1, p2, maxDepth);
    koch(p2, p0, maxDepth);
  }

  function koch(p0, p1, depth) {
    var dx = p1.x - p0.x,
      dy = p1.y - p0.y,
      // the length of the main segment:
      dist = Math.sqrt(dx * dx + dy * dy),
      // The length of each sub-segment
      unit = dist / 3,
      // the angle of the main segment
      angle = Math.atan2(dy, dx),
      pa, pb, pc;
  console.log('dx: ' + dx + ', dy: ' + dy + ', angle: ' + angle);

    pa = {
      x: p0.x + Math.cos(angle) * unit,
      y: p0.y + Math.sin(angle) * unit
    };
    pb = {
      x: pa.x + Math.cos(angle - Math.PI / 3) * unit,
      y: pa.y + Math.sin(angle - Math.PI / 3) * unit
    };
    pc = {
      x: p0.x + Math.cos(angle) * unit * 2,
      y: p0.y + Math.sin(angle) * unit * 2
    };

    if (depth === 0) {
      chaos.context.beginPath();
      chaos.context.moveTo(p0.x, p0.y);
      chaos.context.lineTo(pa.x, pa.y);
      chaos.context.lineTo(pb.x, pb.y);
      chaos.context.lineTo(pc.x, pc.y);
      chaos.context.lineTo(p1.x, p1.y);
      chaos.context.stroke();
    } else {
      koch(p0, pa, depth - 1);
      koch(pa, pb, depth - 1);
      koch(pb, pc, depth - 1);
      koch(pc, p1, depth - 1);
    }
  } 

}

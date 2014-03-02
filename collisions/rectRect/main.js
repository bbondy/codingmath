window.onload = function() {
  var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight,
    centerX = width / 2,
    centerY = height / 2,
    rect0 = {
      x: Math.random() * width,
      y: Math.random() * height,
      width: -200,
      height: -100
    };

    rect1 = {
      x: Math.random() * width,
      y: Math.random() * height,
      width: -100,
      height: -100
    };

  document.body.addEventListener('mousemove', function(event) {
    rect1.x = event.clientX + 50;
    rect1.y = event.clientY + 50;
    if (rectIntersect(rect0, rect1)) {
      context.fillStyle = '#f66';
    } else {
      context.fillStyle = '#999';
    }


    context.clearRect(0, 0, width, height);
    context.fillRect(rect0.x, rect0.y, rect0.width, rect0.height);
    context.fillRect(rect1.x, rect1.y, rect1.width, rect1.height);
  });
};

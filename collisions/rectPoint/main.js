window.onload = function() {
  var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight,
    centerX = width / 2,
    centerY = height / 2,
    rect = {
      x: Math.random() * width,
      y: Math.random() * height,
      width: -200,
      height: -100
    };

  document.body.addEventListener('mousemove', function(event) {
    if (pointInRect(event.clientX, event.clientY, rect)) {
      context.fillStyle = '#f66';
    } else {
      context.fillStyle = '#999';
    }


    context.clearRect(0, 0, width, height);
    context.fillRect(rect.x, rect.y, rect.width, rect.height);
  });
};

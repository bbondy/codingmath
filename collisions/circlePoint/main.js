window.onload = function() {
  var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight,
    centerX = width / 2,
    centerY = height / 2,
    circle0 = {
      x: Math.random() * width,
      y: Math.random() * height,
      radius: 50 + Math.random() * 100
    };

  document.body.addEventListener('mousemove', function(event) {
    if (circlePointCollision(event.clientX, event.clientY, circle0)) {
      context.fillStyle = '#f66';
    } else {
      context.fillStyle = '#999';
    }


    context.clearRect(0, 0, width, height);
    context.beginPath();
    context.arc(circle0.x, circle0.y, circle0.radius, 0, Math.PI * 2, false);
    context.fill();
  });
};

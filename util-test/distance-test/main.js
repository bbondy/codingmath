window.onload = function() {
  var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight,
    centerX = width / 2,
    centerY = height / 2;

  document.body.addEventListener('mousemove', function(event) {
    var radius = 100;
    var dist = distanceXY(centerX, centerY, event.clientX, event.clientY);
    console.log(dist);
    if (dist < radius / 2) {
      context.fillStyle = '#ff0000';
    } else if (dist < radius) {
      context.fillStyle = '#0000ff';
    } else {
      context.fillStyle = '#cccccc';
    }

    console.log(context.fillStyle);
    context.beginPath();
    context.arc(centerX, centerY, radius, 0, Math.PI * 2, false);
    context.fill();
  });
};

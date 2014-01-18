var centerX, centerY, width, height, context;

window.onload = function() {
  var canvas = document.getElementById("canvas");
  context = canvas.getContext("2d");

  var width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight,
    centerY = height * .5,
    centerX = width * .5,
    angle = 0,
    speed = 0.05,
    offset = 200,
    baseRadius = 250,
    baseAlpha = 0.5,
    offsetAlpha = 0.5,
    speed = 0.05;

  function render() {
    context.clearRect(0, 0, width, height);
    
    var alpha = baseAlpha + Math.sin(angle) * offsetAlpha;
    var radius = baseRadius + Math.sin(angle) * offset;
    var y = centerY;
    var x = centerX;

    context.fillStyle = 'rgba(0, 0, 255, ' + alpha, ')';
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2, false);
    context.fill();
    angle += speed;
    requestAnimationFrame(render);
  }
  render();
};

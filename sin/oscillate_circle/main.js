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
    offset = height * .4,
    speed = 0.05;

  function render() {
    context.clearRect(0, 0, width, height);
    var y = centerY + Math.sin(angle) * offset;
    var x = centerX;
    context.beginPath();
    context.arc(x, y, 50, 0, Math.PI * 2, false);
    context.fill();
    angle += speed;
    requestAnimationFrame(render);
  }
  render();
};

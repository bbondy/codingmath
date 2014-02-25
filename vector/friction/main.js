var context;

window.onload = function() {
  var canvas = document.getElementById("canvas"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight,
    centerX = width / 2,
    centerY = height / 2,
    p = new Particle(centerX, centerY, 10, Math.random() * Math.PI * 2);


  
  context = canvas.getContext("2d");
  p.friction = 0.95;
  p.radius = 10;
  draw();

  function draw() {
    context.clearRect(0, 0, width, height);
    p.update();
    p.render();
    requestAnimationFrame(draw);
  }
};

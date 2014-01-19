var centerX, centerY, width, height, context;

function Circle(startingAngle)
{
  this.angleX = startingAngle;
  this.angleY = startingAngle;
  this.speedX = Math.random() * 0.03;
  this.speedY = Math.random() * 0.03;
  this.radiusX = height * .5;
  this.radiusY = height * .5;
}

Circle.prototype = {
  render: function() {
    var x = centerX + Math.cos(this.angleX) * this.radiusX;
    var y = centerY + Math.sin(this.angleY) * this.radiusY;
    var r = 2;
    context.beginPath();
    context.arc(x, y, r, 0, Math.PI * 2, false);
    context.fill();

    this.angleX += this.speedX;
    this.angleY += this.speedY;
  }
};

window.onload = function() {
  var canvas = document.getElementById("canvas");
  context = canvas.getContext("2d");

  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
  centerY = height * .5;
  centerX = width * .5;

  var circles = [];;
  var NUM_CIRCLES = 100;
  for (var i = 0; i < NUM_CIRCLES; i++)  {
    circles.push(new Circle(Math.PI * 2 / NUM_CIRCLES * i));
  }

  function render() {
    context.clearRect(0, 0, width, height);
    circles.forEach(function(c) {
      c.render();
    });
    requestAnimationFrame(render);
  }
  render();
};

var centerX, centerY, width, height, context;

function Circle(startingAngle)
{
  this.angle = startingAngle;
  this.speed = 0.05;
  this.offset = height * .4;
  this.speed = 0.05;
}

Circle.prototype = {
  render: function() {
    var y = centerY + Math.sin(this.angle) * this.offset;
    var x = centerX + Math.cos(this.angle) * this.offset;
    context.beginPath();
    context.arc(x, y, 50, 0, Math.PI * 2, false);
    context.fill();

    this.angle += this.speed;
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
  var NUM_CIRCLES = 10;
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

"use strict";

var centerX, centerY, width, height, context, mouseX, mouseY;

function Circle(startingAngle)
{
  this.posAngleX = startingAngle;
  this.posAngleY = startingAngle;
  this.speedX = Math.random() * 0.02;
  this.speedY = Math.random() * 0.02;
  this.radiusX = height * .5;
  this.radiusY = height * .5;
}

Circle.prototype = {
  render: function() {
    context.save();

    var x = centerX + Math.cos(this.posAngleX) * this.radiusX;
    var y = centerY + Math.sin(this.posAngleY) * this.radiusY;
    var lineHeight = 10;


    context.translate(x, y);
    var pointAngle = Math.atan2(mouseY - y, mouseX - x);
    context.rotate(pointAngle);

    context.beginPath();
    context.moveTo(lineHeight, 0);
    context.lineTo(lineHeight - 20, 0);
    context.moveTo(lineHeight, 0);
    context.lineTo(lineHeight - 10, 10);
    context.moveTo(lineHeight, 0);
    context.lineTo(lineHeight - 10, -10);
    context.stroke();

    this.posAngleX += this.speedX;
    this.posAngleY += this.speedY;

    context.restore();
  }
};

window.onload = function() {
  var canvas = document.getElementById("canvas");
  context = canvas.getContext("2d");

  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
  centerY = height * .5;
  centerX = width * .5;
  mouseX = centerX;
  mouseY = centerY;

  var circles = [];;
  var NUM_OBJECTS = 100;
  for (var i = 0; i < NUM_OBJECTS; i++)  {
    circles.push(new Circle(Math.PI * 2 / NUM_OBJECTS * i));
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

window.onmousemove = function(ev) {
  mouseX = ev.clientX;
  mouseY = ev.clientY;
};

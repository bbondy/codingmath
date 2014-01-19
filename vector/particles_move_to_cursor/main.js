"use strict";

var mouseX, mouseY, width, height, canvas, context;
var NUM_UNITS = 20;

window.onload = function() {
  canvas = document.getElementById("canvas");
  context = canvas.getContext("2d");

  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
  mouseX = width / 2;
  mouseY = height / 2;

  var units = [];
  for (var i = 0; i < NUM_UNITS; i++) {
    units.push(new Particle(Math.random() * width, Math.random() * height));
  }

  function render() {
    context.clearRect(0, 0, width, height);
    units.forEach(function(unit) {
      unit.update();
      unit.render();
    });
    requestAnimationFrame(render);
  }
  render();
};

window.onmousemove = function(ev) {
  mouseX = ev.clientX;
  mouseY = ev.clientY;
};

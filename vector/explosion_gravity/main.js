"use strict";

var width, height, canvas, context;
var NUM_UNITS = 1000;

window.onload = function() {
  canvas = document.getElementById("canvas");
  context = canvas.getContext("2d");

  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
  var centerX = width / 2,
    centerY = height /2;

  var units = [];
  for (var i = 0; i < NUM_UNITS; i++) {
    var particle = new Particle(centerX, centerY, 
                                Math.random() * 10 + 1,
                                Math.random() * 2 * Math.PI,
                                0.15);
    particle.radius = 1;
    units.push(particle);
  }

  function render() {
    context.clearRect(0, 0, width, height);
    units.forEach(function(unit) {
      unit.radius += 0.1;
      unit.update();
      unit.render();
    });
    requestAnimationFrame(render);
  }
  render();
};

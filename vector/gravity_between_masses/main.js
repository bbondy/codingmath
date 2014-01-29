"use strict";

var width, height, canvas, context;
var NUM_UNITS = 1000;

var context;
window.onload = function() {
  var canvas = document.getElementById("canvas"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight,
    sun = new Particle(width / 2, height / 2, 0, 0),
    planet = new Particle(width / 2 + 200, height / 2, 10, -Math.PI / 2);
  context = canvas.getContext("2d");

  sun.mass = 20000;
  sun.radius = 20;
  planet.radius = 5;

  function update() {
    context.clearRect(0, 0, width, height);
    planet.gravitateTo(sun);
    planet.update();
    sun.update();
    sun.render();
    planet.render();

    requestAnimationFrame(update);
  }
  update();
};

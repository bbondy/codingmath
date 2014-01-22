"use strict";

var width, height, canvas, context;
var NUM_UNITS = 1000;

window.onload = function() {
  canvas = document.getElementById("canvas");
  context = canvas.getContext("2d");

  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
  var centerX = width / 2,
    centerY = height /2,
    ship = new Particle(width / 2, height / 2, 0, 0),
    thrust = vector.create(0, 0);


  document.body.addEventListener("keydown", function(event) {
    console.log('keydown: ' + event.keyCode);
    switch(event.keyCode) {
      case 38: // up
        thrust.setY(-0.1);
        break;
      case 40: // down
        thrust.setY(0.1);
        break;
      case 37: // left
        thrust.setX(-0.1);
        break;
      case 39: // right
        thrust.setX(0.1);
        break;
      default:
      break;
    }
  });

  document.body.addEventListener("keyup", function(event) {
    console.log('keyup');
    switch(event.keyCode) {
      case 38: // up
        thrust.setY(0);
        break;
      case 40: // down
        thrust.setY(0);
        break;
      case 37: // left
        thrust.setX(0);
        break;
      case 39: // right
        thrust.setX(0);
        break;
      default:
      break;
    }
  });

  function render() {
    context.clearRect(0, 0, width, height);
    ship.accelerate(thrust);
    ship.update();
    if (ship.position.getX() > width) {
      ship.position.setX(0);
    } else if (ship.position.getX() < 0) {
      ship.position.setX(width);
    }
    if (ship.position.getY() > height) {
      ship.position.setY(0);
    } else if (ship.position.getY() < 0) {
      ship.position.setY(height);
    }
    ship.render();
    requestAnimationFrame(render);
  }
  render();
};

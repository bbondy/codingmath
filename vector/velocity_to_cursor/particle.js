"use strict";

var mouseX, mouseY, width, height, canvas, context;
var NUM_UNITS = 50;

function Particle(x, y, speed, direction, gravity) {
  this.position = vector.create(x, y);
  this.velocity = vector.create(0, 0);
  this.gravity = vector.create(0, gravity);
  this.velocity.setLength(speed);
  this.velocity.setAngle(direction);
  this.color = 'rgb(' + (Math.random() * 255 | 0) + ', ' + (Math.random() * 255 | 0) + ', ' + (Math.random() * 255 | 0) + ')';
};

Particle.prototype = {
  update: function() {
    this.velocity.setAngle(Math.atan2(mouseY - this.position.getY(), mouseX - this.position.getX()));
    this.position = this.position.add(this.velocity);
  },

  accelerate: function(acceleration) {
    this.velocity.addTo(acceleration);
  },

  render: function() {
    context.save();
    context.fillStyle = this.color;
    context.beginPath();
    context.arc(this.position.getX(), this.position.getY(), 10, 0, Math.PI * 2, false);
    context.fill();
    context.restore();
  }

};

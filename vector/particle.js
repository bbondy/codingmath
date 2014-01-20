"use strict";

function Particle(x, y, speed, direction, gravity) {
  this.position = vector.create(x, y);
  this.velocity = vector.create(0, 0);
  this.gravity = vector.create(0, gravity);
  this.velocity.setLength(speed);
  this.velocity.setAngle(direction);
  this.color = 'rgb(' + (Math.random() * 255 | 0) + ', ' + (Math.random() * 255 | 0) + ', ' + (Math.random() * 255 | 0) + ')';
  this.radius = 10;
};

Particle.prototype = {
  update: function() {
    this.accelerate(this.gravity);
    this.position = this.position.add(this.velocity);
  },

  accelerate: function(acceleration) {
    this.velocity.addTo(acceleration);
  },

  render: function() {
    context.save();
    context.fillStyle = this.color;
    context.beginPath();
    context.arc(this.position.getX(), this.position.getY(), this.radius, 0, Math.PI * 2, false);
    context.fill();
    context.restore();
  }

};

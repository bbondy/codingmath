"use strict";

var mouseX, mouseY, width, height, canvas, context;
var NUM_UNITS = 50;

function Particle(x, y) {
  this.position = vector.create(x, y);
  this.velocity = vector.create(0, 0);
  this.velocity.setLength(Math.random() * 10 + 1);
  this.velocity.setAngle(Math.random() * 2 * Math.PI);
  this.color = 'rgb(' + (Math.random() * 255 | 0) + ', ' + (Math.random() * 255 | 0) + ', ' + (Math.random() * 255 | 0) + ')';
  console.log(this.color);
};

Particle.prototype = {
  update: function() {
    this.velocity.setAngle(Math.atan2(mouseY - this.position.getY(), mouseX - this.position.getX()));
    this.position = this.position.add(this.velocity);
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

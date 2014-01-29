"use strict";

function Particle(x, y, speed, direction, gravity) {
  this.position = vector.create(x, y);
  this.velocity = vector.create(0, 0);
  this.gravity = vector.create(0, gravity || 0);
  this.velocity.setLength(speed);
  this.velocity.setAngle(direction);
  this.color = 'rgb(' + (Math.random() * 255 | 0) + ', ' + (Math.random() * 255 | 0) + ', ' + (Math.random() * 255 | 0) + ')';
  this.radius = 10;
  this.mass = 1;
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
  },

  angleTo: function(p2) {
    return Math.atan2(p2.position.getY() - this.position.getY(),
                      p2.position.getX() - this.position.getX());
  },


  distanceTo: function(p2) {
    var dx = p2.position.getX() - this.position.getX(),
      dy = p2.position.getY() - this.position.getY();
    return Math.sqrt(dx * dx + dy * dy);
  },

  gravitateTo: function(p2) {
    var grav = vector.create(0, 0),
      dist = this.distanceTo(p2);
    grav.setLength(p2.mass / (dist * dist));
    grav.setAngle(this.angleTo(p2));
    this.velocity.addTo(grav);
  }


};

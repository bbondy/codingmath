window.onload = function() {
  var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight,
    centerX = width / 2,
    centerY = height / 2,
    gun = {
       x: 100,
       y: height,
       r: 24,
       angle: -Math.PI / 4
    };


  draw();

  document.body.addEventListener('mousedown', function(event) {
    aimGun(event.clientX, event.clientY);
    document.body.addEventListener('mousemove', onMouseMove);
    document.body.addEventListener('mouseup', onMouseUp);
  });


  function aimGun(mouseX, mouseY) {
    gun.angle = clamp(Math.atan2(mouseY - gun.y, mouseX - gun.x), -Math.PI / 2, -0.3);
  }

  function draw() {
    context.clearRect(0, 0, width, height);

    context.beginPath();
    context.arc(gun.x, gun.y, gun.r, 0, Math.PI * 2, false);
    context.fill();

    context.save();
    context.translate(gun.x, gun.y);
    context.rotate(gun.angle);
    context.fillRect(0, 8, 40, 16);
    context.restore();
    requestAnimationFrame(draw);
  }

  function onMouseMove(event) {
    aimGun(event.clientX, event.clientY);
  }

  function onMouseUp(event) {
    document.body.removeEventListener("mousemove", onMouseMove);
    document.body.removeEventListener("mouseup", onMouseUp);
  }
};

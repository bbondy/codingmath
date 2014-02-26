var context;
window.onload = function() {
  var canvas = document.getElementById("canvas"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight,
    centerX = width / 2,
    centerY = height / 2,
    gun = {
       x: 100,
       y: height,
       r: 24,
       angle: -Math.PI / 4
    },
    cannonball = new Particle(gun.x, gun.y, 15, gun.angle, 0.2),
    canShoot = true;
  
  context = canvas.getContext("2d");
  cannonball.radius = 7;
  draw();

  document.body.addEventListener('keyup', function(event) {
    switch(event.keyCode) {
      case 32: //space
        if (canShoot) {
          shoot();
        }
      break;
      default:
      break;
    }
  });

  document.body.addEventListener('mousedown', function(event) {
    aimGun(event.clientX, event.clientY);
    document.body.addEventListener('mousemove', onMouseMove);
    document.body.addEventListener('mouseup', onMouseUp);
  });


  function shoot() {
    cannonball.position.setX(gun.x + Math.cos(gun.angle) * 40);
    cannonball.position.setY(gun.y + Math.sin(gun.angle) * 40);
    cannonball.velocity.setLength(15);
    cannonball.velocity.setAngle(gun.angle);
    canShoot = false;
    update();
  }


  function update() {
    cannonball.update();
    draw();

    if (cannonball.position.getY() > height) {
      canShoot = true;
    } else {
      requestAnimationFrame(update);
    }
  }


  function aimGun(mouseX, mouseY) {
    gun.angle = clamp(Math.atan2(mouseY - gun.y, mouseX - gun.x), -Math.PI / 2, -0.3);
    draw();
  }

  function draw() {
    context.clearRect(0, 0, width, height);

    cannonball.render();

    context.beginPath();
    context.arc(gun.x, gun.y, gun.r, 0, Math.PI * 2, false);
    context.fill();


    context.save();
    context.translate(gun.x, gun.y);
    context.rotate(gun.angle);
    context.fillRect(0, -8, 40, 16);
    context.restore();
  }

  function onMouseMove(event) {
    aimGun(event.clientX, event.clientY);
  }

  function onMouseUp(event) {
    document.body.removeEventListener("mousemove", onMouseMove);
    document.body.removeEventListener("mouseup", onMouseUp);
  }
};

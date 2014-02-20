window.onload = function() {
  var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight,
    rect = {
      x: width / 2 - 200,
      y: height / 2 - 150,
      width: 400,
      height: 300
    };

  document.body.addEventListener('mousemove', function(event) {
    var x = clamp(event.clientX, rect.x, rect.x + rect.width);
    var y = clamp(event.clientY, rect.y, rect.y + rect.height);

    context.clearRect(0, 0, width, height);
    context.fillStyle = '#cccccc';
    context.fillRect(rect.x - 10, rect.y - 10, rect.width + 20, rect.height + 20);

    context.fillStyle = '#000000';
    context.beginPath();
    context.arc(x, y, 10, 0, Math.PI * 2, false);
    context.fill();
  });
};

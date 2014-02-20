window.onload = function() {
  var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;

  document.body.addEventListener('mousemove', function(event) {
    var radius = 100;
    var b = map(event.clientX, 0, width, 0, 255);
    var g = map(event.clientY, 0, height, 0, 255);
    var str = 'rgb(0, ' + (g | 0) + ', ' + (b | 0) + ')';
    context.fillStyle = str;
    console.log(str);
    context.clearRect(0, 0, width, height);
    context.beginPath();
    context.arc(width / 2, height / 2, radius, 0, Math.PI * 2, false);
    context.fill();
  });
};

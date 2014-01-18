window.onload = function() {
  var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d");
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;


  context.translate(0, height / 2);
  context.scale(1, -1);

  for (var i = 0; i < Math.PI * 2; i += 0.001) {
    var x = i * 200,
      y = Math.sin(i) * 200;
    context.fillRect(x, y, 5, 5);
  }
};

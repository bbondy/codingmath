function f(x) {
  return x*x*x + 3*x*x - 3;
}

window.onload = function() {
  var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;

  var values = [];
  for (x = -20; x < 20; x++) {
    values.push(f(x));
  }

  var min = Math.min.apply(null, values),
    max = Math.max.apply(null, values);

  context.beginPath();
  for (var i = 0; i < values.length; i++) {
    var normValue = normalize(values[i], min, max),
      x = width / (values.length + 1) * i,
      y = height - height * normValue;
    if (i == 0) {
      context.moveTo(x, y);
    } else {
      context.lineTo(x, y);
    }

    context.stroke();
  }
};

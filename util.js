function normalize(val, min, max) {
  return (val - min) / (max - min);
}

function lerp(norm, min, max) {
  return (max - min) * norm + min;
}

function map(val, sourceMin, sourceMax, destMin, destMax) {
  return lerp(normalize(val, sourceMin, sourceMax), destMin, destMax);
}

function clamp(val, min, max) {
  return Math.min(Math.max(val, min), max);
}

function distance(p0, p1) {
  var dx = p1.x - p0.x,
    dy = p1.y - p0.y;

  return Math.sqrt(dx * dx + dy * dy);
}


function distanceXY(x0, y0, x1, y1) {
  var dx = x1 - x0,
    dy = y1 - y0;

  return Math.sqrt(dx *dx + dy * dy);
}

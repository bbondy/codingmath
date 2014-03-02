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
  return Math.min(Math.max(val, Math.min(min, max)), Math.max(max, min));
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

function circleCollision(c0, c1) {
  return distance(c0, c1) <= c0.radius + c1.radius;
}

function circlePointCollision(x, y, circle) {
  return distanceXY(x, y, circle.x, circle.y) <= circle.radius;
}

function pointInRect(x, y, rect) {
  return inRange(x, rect.x, rect.x + rect.width) &&
    inRange(y, rect.y, rect.y + rect.height);
}

function inRange(value, min, max) {
  return value >= Math.min(min, max) && value <= Math.max(max, min);
}

function rangeIntersect(min0, max0, min1, max1) {
  return Math.max(min0, max0) >= Math.min(min1, max1) && Math.min(min0, max0) <= Math.max(max1, min1);
}

function rectIntersect(r0, r1) {
  return rangeIntersect(r0.x, r0.x + r0.width, r1.x, r1.x + r1.width) &&
         rangeIntersect(r0.y, r0.y + r0.height, r1.y, r1.y + r1.height);
}

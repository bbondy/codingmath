function normalize(val, min, max) {
  return (val - min) / (max - min);
}

function lerp(norm, min, max) {
  return (max - min) * norm + min;
}

function map(val, sourceMin, sourceMax, destMin, destMax) {
  return lerp(normalize(val, sourceMin, sourceMax), destMin, destMax);
}

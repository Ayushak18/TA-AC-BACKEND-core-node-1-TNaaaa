function square(length) {
  return length * length;
}

function rectangle(len, width) {
  return len * width;
}

function circle(radius) {
  return (22 / 7) * radius * radius;
}

module.exports = {
  square,
  rectangle,
  circle,
};

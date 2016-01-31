var createRange = function(x, y) {
  // Force a specific input type
  if (x.constructor !== Number) {
    x = -15;
    console.log('createRange() input was unexpected so using default');
  }
  if (y.constructor !== Number) {
    y = 30;
    console.log('createRange() input was unexpected so using default');
  }

  var range = [];

  for (var i = x; i <= y; i++) {
    // Exclude 0 for now
    if (i === 0) { continue; }
    range.push(i);
  }
  return range;
};

module.exports = createRange;

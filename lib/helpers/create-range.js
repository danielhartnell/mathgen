// Takes two numbers as input and returns an array with that range
// createRange(1,5) would return:
// [1,2,3,4,5]
// It currently excludes 0 until I can handle that appropriately in an equation

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
    if (i === 0) { continue; }
    range.push(i);
  }
  return range;
};

module.exports = createRange;

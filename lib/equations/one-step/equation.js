// Select random item from input array
function selectRandom(input) {
  // I should verify that the input is an array
  var selection = input[Math.floor(Math.random() * input.length)];
  return selection;
}

function createRange(x, y) {
  // I should verify x and y are integers
  var range = [];

  for (var i = x; i <= y; i++) {
    // Exclude 0 for now
    if (i === 0) { continue; }
    range.push(i);
  }
  return range;
}

module.exports = {
  // Generate new equations
  create: function() {
    var result    = selectRandom(createRange(-10, 30));
    var num1      = selectRandom(createRange(-10, 30));
    var num2      = selectRandom(createRange(-10, 30));

    var operator  = selectRandom(['+', '-', '/', '*']);
    var variable  = selectRandom(['x', 'y', 'p', 'n', 'b', 'a']);
    var style     = selectRandom(['complex', 'simple']);

    if (num1 < 0) { num1 = "(" + num1 + ")"; }
    if (num2 < 0) { num2 = "(" + num2 + ")"; }

    // Return appropriate equation
    if (style === 'complex') {
        return variable + " " + operator + " " + num1 + " = " + result;
    } else {
        return num1 + variable + " = " + result;
    }
  }
};

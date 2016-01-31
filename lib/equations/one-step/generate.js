// Generate a one step equation

var selectRandom = require('../../helpers/select-random.js');
var createRange = require('../../helpers/create-range.js');

function solveEquation(eq) {
  // Ideally I want to solve the equations to provide an answer key
  // It may be better to generate equations based on an answer
  // Not sure
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

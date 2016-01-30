/*
 * I can eliminate a lot of this code if I can just pass an array to a function.
 * Example:
 * var operand = ['+','-','/','*'].randomSelect;
 * operand is now equal to '+'
 */

module.exports = {

// Generate new equations
create: function() {
    // Random number range
    var high = 30;
    var low = -10;

    // Randomly select variable, operator and style
    var operands = ['+', '-', '/', '*'];
    var variables = ['x', 'y', 'n', 'b', 'p', 'v', 'k', 'a'];
    var style = ['complex', 'simple'];

    // Randomly select numbers within range
    var result = Math.floor(Math.random() * (high - low) + low);
    var num1 = Math.floor(Math.random() * (high - low) + low);
    var num2 = Math.floor(Math.random() * (high - low) + low);

    // Store variable operator and style
    var operator = operands[Math.floor(Math.random() * operands.length)];
    var variable = variables[Math.floor(Math.random() * variables.length)];
    var thisStyle = style[Math.floor(Math.random() * style.length)];

    // I felt like difficult numbers came up too often so I implemented this
    if (Math.floor(Math.random() * (4 - 0) + 0) === 0) {
        // Hard mode enabled
        result = Math.floor(Math.random() * (150 - -15) + -15);
        num1 = Math.floor(Math.random() * (150 - -15) + -15);
        num2 = Math.floor(Math.random() * (150 - -15) + -15);
    }

    while (result === 0) {
        result = Math.floor(Math.random() * (150 - -15) + -15);
    }

    while (num1 === 0) {
        num1 = Math.floor(Math.random() * (150 - -15) + -15);
    }

    while (num2 === 0) {
        num2 = Math.floor(Math.random() * (150 - -15) + -15);
    }

    if (num1 < 0) {
        num1 = "(" + num1 + ")";
    }

    if (num2 < 0) {
        num2 = "(" + num2 + ")";
    }

    // Return appropriate equation
    if (thisStyle === 'complex') {
        return variable + " " + operator + " " + num1 + " = " + result;
    } else {
        return num1 + variable + " = " + result;
    }
}
};

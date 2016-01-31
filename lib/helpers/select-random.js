// Select random item from input array
var selectRandom = function(input) {
  if (input.constructor === Array) {
    var selection = input[Math.floor(Math.random() * input.length)];
    return selection;
  } else {
    console.log('Please provide an array to randomly select from');
    // I need to determine what to do here (return an HTTP error and die?)
    // I'd prefer to make an assumption but I don't know what's calling this
  }
};

module.exports = selectRandom;

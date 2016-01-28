/**
 * Created by daffinito on 1/27/16.
 */

var PDFDocument = require('pdfkit');

 // Generate new equations
function wnEquation() {
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

module.exports = {
    // Generate PDF
    genPDF: function (numEq, complexity, answerKey, callback) {
        var pdf = new PDFDocument;

        // Generate PDF based on input
        pdf.fontSize(16).text("One Step Equations");
        pdf.fontSize(12).text("Solve each equation.");
        pdf.text(" ");
        pdf.text(" ");
        pdf.text("Name___________________________________");
        pdf.text("Date________________ Period____");
        pdf.text(" ");
        pdf.text(" ");

        for(var i = 1; i <= numEq; i++) {
            pdf.text(i + ") " + wnEquation());
            pdf.text(" ");
            pdf.text(" ");
            pdf.text(" ");
            pdf.text(" ");
            pdf.text(" ");
        }

        if (typeof callback === 'function')
            callback(pdf);
    }
};
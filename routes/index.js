var express = require('express');
var router = express.Router();

var fs = require('fs');
PDFDocument = require('pdfkit');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET dynamically generated PDF */
router.get('/one-step-pdf', function(req, res) {
  pdf = new PDFDocument;

  // User specified parameters
  numEquations = req.query.numEquations;
  complexity = req.query.complexity;
  answerKey = req.query.answerKey;

  // Response headers
  res.setHeader('Content-disposition', 'attachment; filename=equations.pdf');
  res.setHeader('Content-type', 'application/pdf');

  // Generate new equations
  function wnEquation() {
    // Random number range
    high = 30;
    low = -10;

    // Randomly select variable, operator and style
    operands = ['+','-','/','*'];
    variables = ['x','y','n','b','p','v','k','a'];
    style = ['complex','simple'];

    // Randomly select numbers within range
    result = Math.floor(Math.random() * (high - low) + low);
    num1 = Math.floor(Math.random() * (high - low) + low);
    num2 = Math.floor(Math.random() * (high - low) + low);

    // Store variable operator and style
    operator = operands[Math.floor(Math.random() * operands.length)];
    variable = variables[Math.floor(Math.random() * variables.length)];
    thisStyle = style[Math.floor(Math.random() * style.length)];

    // I felt like difficult numbers came up too often so I implemented this
    if(Math.floor(Math.random() * (4-0) + 0) === 0) {
      // Hard mode enabled
      result = Math.floor(Math.random() * (150 - -15) + -15);
      num1 = Math.floor(Math.random() * (150 - -15) + -15);
      num2 = Math.floor(Math.random() * (150 - -15) + -15);
    }

    while(result === 0) {
      result = Math.floor(Math.random() * (150 - -15) + -15);
    }

    while(num1 === 0) {
      num1 = Math.floor(Math.random() * (150 - -15) + -15);
    }

    while(num2 === 0) {
      num2 = Math.floor(Math.random() * (150 - -15) + -15);
    }

    if(num1 < 0) {
      num1 = "(" + num1 + ")";
    }

    if(num2 < 0) {
      num2 = "(" + num2 + ")";
    }
    
    // Return appropriate equation
    if(thisStyle === 'complex') {
      return variable + " " + operator + " " + num1 + " = " + result;
    } else {
      return num1 + variable + " = " + result;
    };
  };

  // Generate PDF based on input
  pdf.fontSize(16).text("One Step Equations");
  pdf.fontSize(12).text("Solve each equation.");
  pdf.text(" ");
  pdf.text(" ");
  pdf.text("Name___________________________________");
  pdf.text("Date________________ Period____");
  pdf.text(" ");
  pdf.text(" ");

  for(i = 1; i <= numEquations; i++) {
    pdf.text(i + ") " + wnEquation());
    pdf.text(" ");
    pdf.text(" ");
    pdf.text(" ");
    pdf.text(" ");
    pdf.text(" ");
  }

  // Pipe document directly into response
  pdf.pipe(res);
  
  // Response is closed making res.end() redundant
  pdf.end();
});

module.exports = router;

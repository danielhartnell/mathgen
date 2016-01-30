var express = require('express');
var router = express.Router();
var worksheet = require('../lib/pdf/build-pdf.js');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Teacher Toolkit' });
});

router.get('/one-step-pdf', function(req, res) {
  res.setHeader('Content-disposition', 'attachment; filename=equations.pdf');
  res.setHeader('Content-type', 'application/pdf');
  
  // Limit the number of equations
  var numEquations = req.query.numEquations > 50 ? 50 : req.query.numEquations;
  worksheet.build("one-step", numEquations, req.query.complexity, req.query.answerKey, function(pdf) {
    console.log('I got into the worksheet.build function');
    pdf.pipe(res);
    pdf.end();
  });
});

module.exports = router;

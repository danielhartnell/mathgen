var express = require('express');
var router = express.Router();
var genWs = require('../handlers/genws');

var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET dynamically generated PDF */
router.get('/one-step-pdf', function(req, res) {
  // Response headers
  res.setHeader('Content-disposition', 'attachment; filename=equations.pdf');
  res.setHeader('Content-type', 'application/pdf');

  // User specified parameters
  var numEquations = req.query.numEquations > 50 ? 50 : req.query.numEquations;   // keeps it under 50

  genWs.genPDF(numEquations, req.query.complexity, req.query.answerKey, function(pdf) {
    // Pipe document directly into response
    pdf.pipe(res);

    // Response is closed making res.end() redundant
    pdf.end();
  });
});

module.exports = router;

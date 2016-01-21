var express = require('express');
var router = express.Router();

var fs = require('fs');
PDFDocument = require('pdfkit');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Route POST to mkpdf
router.post('/mkpdf', function(req, res, next) {
  var doc = new PDFDocument;
  var enumb = req.query.enumb;

  doc.text("One Step Equation Worksheet");
  doc.text(" ");
  doc.text("Name:______________________");
  doc.text("Date:______________________");
  doc.text("Period:________");
  doc.text(" ");

  for(i = 0; i <= enumb; i++) {
    doc.text("2 + " + enumb + " = X");
  }

  doc.pipe(res);
  doc.end();
});

module.exports = router;

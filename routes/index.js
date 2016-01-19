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
  doc.pipe(fs.createWriteStream("equations.pdf"));
  doc.text('Testing PDF generation.');
  doc.end();
  res.download("equations.pdf");
});

module.exports = router;

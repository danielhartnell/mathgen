/* build-pdf.js
 * 'worksheetType' defines the content of our worksheet
 *  This will change the title and dictate which equation generator is called
 *  We may include 'var twoStepEquation' or 'var multiplication' in the future
 */

var PDFDocument = require('pdfkit');
var oneStepEquation = require('../equations/one-step/equation');

module.exports = {
  // Generate PDF worksheet with default heading
  build: function (worksheetType, numEq, complexity, answerKey, callback) {
    var pdf = new PDFDocument;

    // Generate PDF based on input
    pdf.fontSize(16).text("Type: " + worksheetType);
    pdf.fontSize(12).text("Solve each equation.");
    pdf.text(" ");
    pdf.text(" ");
    pdf.text("Name___________________________________");
    pdf.text("Date________________ Period____");
    pdf.text(" ");
    pdf.text(" ");

    for(var i = 1; i <= numEq; i++) {
      pdf.text(i + ") " + oneStepEquation.create());
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

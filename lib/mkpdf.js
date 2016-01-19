var doc = new PDFDocument();
var stream = doc.pipe(blobStream());

doc.text('1) 2 + X = 17');

doc.end();
stream.on('finish', function() {
  iframe.src = stream.toBlobURL('application/pdf');
});

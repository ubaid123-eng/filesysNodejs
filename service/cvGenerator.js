const fs = require('fs');
const PDFDocument = require('pdfkit');

function generateCV(data) {
  const doc = new PDFDocument({ size: 'A4', margin: 50 });
  let cvText = `
  Curriculum Vitae
  ---------------
  Name: ${data.name}
  Email: ${data.email}
  Qualification: ${data.qualification}
  Description:${data.description}
  `;

  // Add the content to the PDF document
  doc.text(cvText);

  return doc; // Return the PDF document
}

function saveCVToFile(doc , name) {
  const stream = fs.createWriteStream(`$cv_${name}.pdf`);
  doc.pipe(stream);

  // Finalize the PDF and close the stream
  doc.end();
  stream.on('finish', () => {
    console.log('CV has been successfully generated and saved to cv.pdf');
  });
}


module.exports = {
    generateCV , saveCVToFile
  };
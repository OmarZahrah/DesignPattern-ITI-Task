class PDFViewer {
  viewPDF(filename) {
    console.log(`Viewing PDF document: ${filename}`);
  }
}

class WordViewer {
  viewDOCX(filename) {
    console.log(`Viewing Word document: ${filename}`);
  }
}

class DocumentAdapter {
  constructor() {
    this.pdfViewer = new PDFViewer();
    this.wordViewer = new WordViewer();
  }

  view(filename) {
    if (filename.endsWith(".pdf")) {
      this.pdfViewer.viewPDF(filename);
    } else if (filename.endsWith(".docx")) {
      this.wordViewer.viewDOCX(filename);
    } else {
      console.log(`Unsupported file type: ${filename}`);
    }
  }
}

const viewer = new DocumentAdapter();

viewer.view("report.pdf");
viewer.view("resume.docx");
viewer.view("notes.txt");

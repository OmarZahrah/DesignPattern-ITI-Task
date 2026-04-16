class Report {
  constructor(data) {
    this.data = data;
  }

  generateReport() {
    return `Report: ${JSON.stringify(this.data)}`;
  }
}

class PDFExporter {
  export(content) {
    return `PDF Document -> ${content}`;
  }
}

const report = new Report({ title: "Sales", total: 1500 });
const exporter = new PDFExporter();
const generated = report.generateReport();
const pdf = exporter.export(generated);
console.log(generated);
console.log(pdf);

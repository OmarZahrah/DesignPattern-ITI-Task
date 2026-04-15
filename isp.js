class Printable {
  print() {
    throw new Error("print() must be implemented");
  }
}

class Scannable {
  scan() {
    throw new Error("scan() must be implemented");
  }
}

class Faxable {
  fax() {
    throw new Error("fax() must be implemented");
  }
}

class BasicPrinter extends Printable {
  print() {
    return "Printing document";
  }
}

class MultiFunctionPrinter extends Printable {
  print() {
    return "Printing document";
  }

  scan() {
    return "Scanning document";
  }

  fax() {
    return "Faxing document";
  }
}

const basic = new BasicPrinter();
const multi = new MultiFunctionPrinter();
console.log(basic.print());
console.log(multi.print());
console.log(multi.scan());
console.log(multi.fax());

class HTMLBuilder {
  constructor() {
    this.title = "";
    this.image = "";
    this.description = "";
    this.footer = "";
  }

  setTitle(title) {
    this.title = title;
    return this;
  }

  setImage(image) {
    this.image = image;
    return this;
  }

  setDescription(description) {
    this.description = description;
    return this;
  }

  setFooter(footer) {
    this.footer = footer;
    return this;
  }

  build() {
    return `<div class="card"><h2>${this.title}</h2><img src="${this.image}" alt="${this.title}"><p>${this.description}</p><small>${this.footer}</small></div>`;
  }
}

const card = new HTMLBuilder()
  .setTitle("My Card")
  .setImage("url.jpg")
  .setDescription("This is a card.")
  .setFooter("Footer text")
  .build();
console.log(card);

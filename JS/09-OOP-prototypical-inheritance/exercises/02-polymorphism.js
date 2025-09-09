function HtmlElement() {
  this.click = function() {
    console.log('clicked');
  };
}

HtmlElement.prototype.focus = function() {
  console.log('focused');
}

function HtmlSelectElement(items) {
  this.items = items || [];

  this.addItem = function(value) {
    this.items.push(value);
  };

  this.removeItem = function(value) {
    console.log('remove method');
    if (this.items.includes(value)) {
      console.log(`this array has ${value}`);
      this.items.splice(this.items.indexOf(value), 1);
    }
  };

  this.render = function() {
    return `
<select>${this.items.map(item => `
  <option>${item}</option>`).join('')}
</select>`;
}
}


HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

const s = new HtmlSelectElement([1, 2, 3]);

function HtmlImageElement(source) {
  this.source = source;

  this.render = function() {
    return `<img src=${this.source} />`;
  }
}

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;

const i = new HtmlImageElement('http://my-image.com');

const elements = [
  new HtmlSelectElement([1, 2, 3, 4]),
  new HtmlImageElement('http://cat-image.com'),
];

for (let element of elements)
  console.log(element.render());

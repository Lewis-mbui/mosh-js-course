function HtmlElement() {
  this.click = function() {
    console.log('clicked');
  };
}

HtmlElement.prototype.focus = function() {
  console.log('focused');
}

const e = new HtmlElement();

function HtmlSelectElement(items) {
  this.items = items || [];

  this.addItem = function(value) {
    this.items.push(value);
  };

  this.removeItem = function(value) {
    if (this.items.includes(value)) {
      this.items.splice(this.items.indexOf(value), 1);
    }
  };
}

// baseHtmlSelectElement
// the prototype becomes and instance of HtmlElement
// with all members(instance + prototype)
HtmlSelectElement.prototype = new HtmlElement();
// Also reset the constructor (BEST PRACTICE)
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

const s = new HtmlSelectElement();
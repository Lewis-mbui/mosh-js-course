const _arr = new WeakMap();

class Stack {
  constructor() {
    _arr.set(this, []);
  }

  push(value) {
    _arr.get(this).push(value);
  }

  pop() {
    const items = _arr.get(this);

    if(items.length === 0)  
      throw new Error('Stack is empty');

    return items.pop();
  }

  peek() {
    const items = _arr.get(this);

    if(_arr.get(this).length === 0)  
      throw new Error('Stack is empty');

    return items[items.length - 1];
  }

  get count() {
    return _arr.get(this).length;
  }
}

const s = new Stack();
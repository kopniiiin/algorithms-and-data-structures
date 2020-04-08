import Node from './nodes/list-node';

export default class Stack {
  constructor () {
    this._last = null;
    this.size = 0;
  }

  push (value) {
    const node = new Node(value);

    node.prev = this._last;
    this._last = node;

    this.size++;
  }

  pop () {
    if (!this.size) return undefined;

    const removedValue = this._last.value;

    this._last = this._last.prev;

    this.size--;

    return removedValue;
  }
}

import Node from './nodes/list-node';

export default class SinglyLinkedList {
  constructor () {
    this._head = null;
    this._tail = null;
    this.length = 0;
  }

  unshift (value) {
    if (this.length) {
      this._insertNodeBeforeHead(value);
    } else {
      this._insertSingleNode(value);
    }
  }

  shift () {
    switch (this.length) {
      case 0:
        return undefined;
      case 1:
        return this._removeSingleNode();
      default:
        return this._removeHead();
    }
  }

  push (value) {
    if (this.length) {
      this._insertNodeAfterTail(value);
    } else {
      this._insertSingleNode(value);
    }
  }

  pop () {
    switch (this.length) {
      case 0:
        return undefined;
      case 1:
        return this._removeSingleNode();
      default:
        return this._removeTail();
    }
  }

  insert (index, value) {
    if (index < 0 || index > this.length) return false;

    switch (index) {
      case 0:
        this.unshift(value);
        break;
      case this.length:
        this.push(value);
        break;
      default:
        this._insertNodeInside(index, value);
    }

    return true;
  }

  remove (index) {
    if (index < 0 || index >= this.length) return undefined;

    switch (index) {
      case 0:
        return this.shift();
      case this.length - 1:
        return this.pop();
      default:
        return this._removeNodeInside(index);
    }
  }

  set (index, value) {
    const node = this._getNode(index);

    if (node) {
      node.value = value;
      return true;
    }

    return false;
  }

  get (index) {
    const node = this._getNode(index);

    return node ? node.value : undefined;
  }

  reverse () {
    this._reversePointers();
    this._swapHeadAndTail();
  }

  _getNode (index) {
    if (index < 0 || index >= this.length) return null;

    let currentNode = this._head;
    let currentIndex = 0;

    while (currentIndex !== index) {
      currentNode = currentNode.next;
      currentIndex++;
    }

    return currentNode;
  }

  _insertSingleNode (value) {
    const node = new Node(value);

    this._head = node;
    this._tail = node;

    this.length++;
  }

  _insertNodeBeforeHead (value) {
    const node = new Node(value);

    node.next = this._head;
    this._head = node;

    this.length++;
  }

  _insertNodeInside (index, value) {
    const node = new Node(value);
    const prevNode = this._getNode(index - 1);
    const nextNode = prevNode.next;

    prevNode.next = node;
    node.next = nextNode;

    this.length++;
  }

  _insertNodeAfterTail (value) {
    const node = new Node(value);

    this._tail.next = node;
    this._tail = node;

    this.length++;
  }

  _removeSingleNode () {
    const removedValue = this._head.value;

    this._head = null;
    this._tail = null;

    this.length--;

    return removedValue;
  }

  _removeHead () {
    const removedValue = this._head.value;

    this._head = this._head.next;

    this.length--;

    return removedValue;
  }

  _removeNodeInside (index) {
    const prevNode = this._getNode(index - 1);
    const removedNode = prevNode.next;

    prevNode.next = removedNode.next;

    this.length--;

    return removedNode.value;
  }

  _removeTail () {
    const removedValue = this._tail.value;
    const secondToLastNode = this._getNode(this.length - 2);

    secondToLastNode.next = null;
    this._tail = secondToLastNode;

    this.length--;

    return removedValue;
  }

  _reversePointers () {
    let prevNode = null;
    let currentNode = this._head;
    let nextNode;

    while (currentNode) {
      nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }
  }

  _swapHeadAndTail () {
    [this._head, this._tail] = [this._tail, this._head];
  }
}

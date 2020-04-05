export default class ListNode {
  constructor (value) {
    this._value = value;
    this._prev = null;
    this._next = null;
  }

  get value () {
    return this._value;
  }

  set value (newValue) {
    this._value = newValue;
  }

  get prev () {
    return this._prev;
  }

  set prev (newPrev) {
    this._prev = newPrev;
  }

  get next () {
    return this._next;
  }

  set next (newNext) {
    this._next = newNext;
  }
}

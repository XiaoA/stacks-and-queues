/** Node: node for a stack. */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(value): add new value to end of the stack. Returns undefined. */

  push(value) {
    let node = new Node(value);

    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      let tmp = this.first;
      this.first = node;
      this.first.next = tmp;
    }

    this.size++;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (!this.first) throw new Error("Can't pop from an empty stack.");

    let temp = this.first;

    if (this.first == this.last) {
      this.last = null;
    }

    this.first = this.first.next;
    this.size--;
    return temp.value;
  }

  /** peek(): return the value of the last node in the stack. */

  peek() {
    return this.first.value;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
  }
}

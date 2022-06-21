class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) {
      return undefined;
    }
    const popped = this.tail;
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.tail = popped.prev;
      this.tail.next = null;
      popped.prev = null;
    }
    this.length--;
    return popped;
  }
  shift() {
    if (!this.head) {
      return undefined;
    }
    const shifted = this.head;
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.head = this.head.next;
      shifted.next = null;
      this.head.prev = null;
    }
    this.length--;
    return shifted;
  }
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(idx) {
    if (idx >= this.length || idx < 0) {
      return null;
    }
    let count, current;
    if (idx <= this.length / 2) {
      count = 0;
      current = this.head;
      while (idx !== count) {
        count++;
        current = current.next;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (idx !== count) {
        count--;
        current = current.prev;
      }
    }
    return current;
  }
  set(idx, val) {
    let nodeFound = this.get(idx);
    if (nodeFound) {
      nodeFound.val = val;
      return true;
    }
    return false;
  }
}

const Doubly = new DoublyLinkedList();
Doubly.push(1);
Doubly.push(2);
Doubly.push(3);
Doubly.pop();
console.log(Doubly);

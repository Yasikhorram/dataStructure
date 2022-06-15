const { runInThisContext } = require("vm");

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let prev = current;
    while (current.next) {
      prev = current;
      current = current.next;
    }
    this.tail = prev;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      let oldHead = this.head;
      this.head = newNode;
      this.head.next = oldHead;
    }
    this.length++;
    return this;
  }
  shift() {
    if (!this.head) {
      return undefined;
    }
    let shifted = this.head;
    this.head = shifted.next;
    this.length--;
    return shifted;
  }
  get(idx) {
    if (!this.head || idx >= this.length) {
      // >=
      return undefined;
    }
    let counter = 0;
    let current = this.head;

    while (counter !== idx) {
      current = current.next; // we dont need previous variable
      counter++;
    }
    console.log("curren is :", current);
    return current;
  }
  set(idx, val) {
    let foundNode = this.get(idx);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    else if (idx === this.length) {
      return this.push(val);
    } else if (idx === 0) {
      return this.unshift(val);
    } else {
      let newNode = new Node(val);
      let prevNode = this.get(idx - 1);
      let current = prevNode.next;
      prevNode.next = newNode;
      newNode.next = current;
      this.length++;
      return true;
    }
  }
}

let newSing = new SinglyLinkedList();

newSing.push("a");
newSing.push("b");
newSing.push("c");
newSing.push("d");
newSing.insert(1, "test");

console.log(newSing);

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
}

// let firstNode = new Node(1);
// firstNode.next = new Node(2);
// console.log(firstNode);

let newSing = new SinglyLinkedList();

newSing.push("test");
newSing.push("test2");
newSing.push("test3");
newSing.push("test4");
newSing.push("test5");

console.log(newSing);

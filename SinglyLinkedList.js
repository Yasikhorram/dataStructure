class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {}
}

let firstNode = new Node(1);
firstNode.next = new Node(2);
console.log(firstNode);

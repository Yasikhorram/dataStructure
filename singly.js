class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");

a.next = b;
b.next = c;
c.next = d;

function printNodes(head) {
  let current = head;
  while (current) {
    console.log(current.val);
    current = current.next;
  }
}

function recursivePrint(head) {
  if (head === null) return;
  console.log(head.val);
  recursivePrint(head.next);
}

const linkedListVals = (head) => {
  let values = [];
  let current = head;
  while (current) {
    values.push(current.val);
    current = current.next;
  }
  return values;
};

function find(head, target) {
  let current = head;
  while (current) {
    if (current.val === target) {
      return true;
    }
    current = current.next;
  }
  return false;
}

const reverseLinkedList = (head) => {
  let current = head;
  let prev = null;
  let next;
  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};

console.log(reverseLinkedList(a));

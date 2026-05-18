class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Linkedist {
  constructor() {
    this.head = null;
  }
  append(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
}

function reverseLinkedList(head) {
  let prev = null;
  let current = head;

  // Process until 'current' itself becomes null (the end of the list)
  while (current !== null) {
    let next = current.next; // Temporary store next node
    current.next = prev; // Reverse the pointer
    prev = current; // Move prev forward
    current = next; // Move current forward
  }
  // prev now points to the new head (the old last node)
  return prev;
}

function printList(head) {
  let current = head;
  let result = [];
  while (current !== null) {
    result.push(current.value);
    current = current.next;
  }
  console.log(result.join(" -> "));
}

let linkedl = new Linkedist();
linkedl.append(1);
linkedl.append(2);
linkedl.append(3);
linkedl.append(4);
linkedl.append(5);
console.log("Original:");
printList(linkedl.head);
linkedl.head = reverseLinkedList(linkedl.head);
console.log("Reversed:");
printList(linkedl.head);

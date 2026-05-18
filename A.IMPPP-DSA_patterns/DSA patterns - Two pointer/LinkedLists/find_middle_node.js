// Each node stores a value and a reference to the next node
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
// LinkedList class manages the starting node (head)
class Linkedist {
  constructor() {
    this.head = null;
  }
  //method to add data for testing

  append(value) {
    const newNode = new Node(value);
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

function findMiddle(head) {
  let fast = head;
  let slow = head;

  while (fast !== null && fast.next!== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
} //1,2,3,4,5,6

let linkedl = new Linkedist();
linkedl.append(1);
linkedl.append(2);
linkedl.append(3);
linkedl.append(4);
linkedl.append(5);

console.log(findMiddle(linkedl.head))

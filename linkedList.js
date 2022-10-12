class node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class linkedList {
  constructor() {
    this.head = null;
    this.curr = null;
  }

  add(value) {
    const newNode = new node(value);

    if (this.head === null) {
      this.head = newNode;
      this.curr = newNode;
    } else {
      this.curr.next = newNode;
      this.curr = newNode;
    }
  }

  remove(value) {
    let curr, prev;
    curr = this.head;
    prev = this.head;

    while (curr) {
      if (curr.value == value && curr == this.head) {
        this.head = curr.next;
        break;
      } else if (curr.value == value && curr.next == null) {
        this.curr = prev;
        this.curr.next = null;
        curr = null;
      } else if (curr.value === value) {
        prev.next = curr.next;
        break;
      } else {
        prev = curr;
        curr = curr.next;
      }
    }
  }

  printLL() {
    let curr = this.head;
    while(curr){
        console.log(curr.value);
        curr = curr.next;
    }
    console.log(this.head, this.curr);
  }
}

const ll = new linkedList();

ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
ll.add(5);
ll.add(6);

ll.remove(6);
ll.printLL();
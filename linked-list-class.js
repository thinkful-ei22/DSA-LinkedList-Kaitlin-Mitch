class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }
  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
      while(tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }
  insertBefore(item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;

    }
  }
  insertAt(item, position) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      // find node before insertion
      let previousNode = null;
      let currNode = this.head;
      let index = 0;

      while(currNode && index < position) {
        previousNode = currNode;
        currNode = currNode.next;
        index++;
      }

      if (currNode) {
        let child = new _Node(current.item);
        child.next = currNode.next;

        current.item = item;
        current.next = child;
      }
      else {
        previousNode.next = new _Node(item);
      }
    }
    return head;
  }
  
  find(item) {
    // start at the head
    let currNode = this.head;
    // if it's empty
    if (!this.head) {
      return null;
    }
    // check for item value
    while (currNode.value !== item) {
      // return null if end of the list
      // and the item is not on the list
      if (currNode.next === null) {
        return null;
      }
      else {
        // keep looking
        currNode = currNode.next;
      }
    }
    // found it
    return currNode;
  }
  remove(item) {
    // if the list is emoty
    if (!this.head) {
      return null;
    }
    // if the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    // start at the head
    let currNode = this.head;
    // keep track of previous
    let previousNode = this.head;

    while((currNode !== null) && (currNode.value !== item)) {
      // save the previous node
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }
}

// Supplemental Functions - or make another file and import class there

module.exports = LinkedList;
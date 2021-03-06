const LinkedList = require('./linked-list-class');

let SLL = new LinkedList();

// add the following items
SLL.insertFirst({'Apollo': 'Husky'});
SLL.insertLast({'Boomer': 'Boxer'});
SLL.insertLast({'Helo': 'Greyhound'});
SLL.insertLast({'Husker': 'Bloodhound'});
SLL.insertLast({'Starbuck': 'Chocolate Lab'});

// initialize cyclical linked list
let CLL = new LinkedList();

// add the following items
CLL.insertFirst({'Apollo': 'Husky'});
CLL.insertLast({'Boomer': 'Boxer'});
CLL.insertLast({'Helo': 'Greyhound'});
CLL.insertLast({'Husker': 'Bloodhound'});
CLL.insertLast({'Starbuck': 'Chocolate Lab'}, {'Apollo': 'Husky'});

// 1. Analyze the function. What does the program do? What is the runtime?

function WhatDoesThisProgramDo(lst){
  // sets the current node as the head of the list
  let current = lst.head;
  while(current !== null){
    // run through the list until it reaches the end
    // set a newNode variable to the current node
    let newNode = current;
    while (newNode.next !== null) {
      // run through the list until the newNode next is null, it reached the end
        if (newNode.next.value === current.value) {
          // finding the matching values between two nodes, if they match, the program skips over the matching node.
          newNode.next = newNode.next.next;
        }
        else {
          // if else, the new node simply gets added into the list
          newNode = newNode.next;
        }
      }
    current = current.next;
  }
}

// The runtime of this program is O(n^2)

// 2. Reverse a list. Runtime should be O(n).

// 1 -> 2 -> 3 -> 4
// 1 <- 2 <- 3 <- 4

// find the head of the list
// iterate through the list
// reverse the direction of the nexts 


function reverseList(list) {
  let currNode = list.head;
  let prevNode = null;
  let nextNode = list.head;

  while (currNode !== null) {
    nextNode = currNode.next;
    currNode.next = prevNode;
    prevNode = currNode;
    currNode = nextNode;
  }
  list.head = prevNode;
  console.log(JSON.stringify(list));
}

//reverseList(SLL);

// 3. Third from the end. Find the third element. 

// find last, modify to go back 3 indexes

function findThirdFromLast(list){
  // set currNode to head of list
  let currNode = list.head;
  // initialize our output variable
  let thirdNode;
  // set index to 1 instead of zero
  let index = 1;
  // while current node exists
  while (currNode) {
    // if index is 3 then return the head
    if (index === 3) {
      thirdNode = list.head;
      // else if the index minus 3 equals 0 change our output variable to next node
    } else if (index - 3 > 0){
      thirdNode = thirdNode.next;
    }
    // iterate through the while loop and the index for if statement
    index++;
    currNode = currNode.next;
  }
  console.log(JSON.stringify(thirdNode.value));
}

//findThirdFromLast(SLL);

// 4. Middle of a list

// find the middle element of a linked list

function middleOfList(list) {
  // variables to head of list
  let middle = list.head;
  let end = list.head;

  while (end !== null && end.next !== null) {
    middle = middle.next;
    end = end.next.next;
  }

  console.log(JSON.stringify(middle.value));
}

//middleOfList(SLL);

// 5. Cycle in a list

// Find whether a linked list has a cycle

function cycleInList(list) {
  let currNode = list.head;
  let flag = 'anything';

  while(currNode !== null) {
    if (currNode.value === flag) {
      console.log(true);
      return true;
    }
    currNode.value = flag;
    currNode = currNode.next;
  }

  console.log(false);
  return false;
}
cycleInList(CLL);

// Given a sorted linked list, write a function insertInSortedOrder() to insert an item in the sorted linked list preserving the order of the list. You can only take one pass through the list to do this. Don't worry about duplicates.

// come up with a sample input / output

// B -> D -> F -> G  insert E   B -> D -> E -> F -> G

// can i use a node class? ask the interviewer. you can use a built in private node class.
// can i use linked list functions? no. cannot use LL built in functions

// start at the head of the list
// keep track of nodes by a previous and current variable
// iterate through the list until i find an item that is greater than the item i am inserting

function insertInSortedOrder (sll, item) {
  let previous = sll.head;
  let current = sll.head;

  // if the list is empty
  if (sll.head === null) {
    return;
  }

  // if item is the first item 
  if (item < sll.head.value) {
    // insertFirst()
    sll.head = new _Node(item, sll.head); // insertBefore
    return sll;
  }

  // iterate through the list until i find an item that is greater than the item i am inserting
  while (current) {
    if (current.value > item) {
      previous.next = new _Node(item, current);
      return sll;
    }
    previous = current;
    current = current.next;
  }
  // what if it is the last item
  previous.next = new _Node(item, null);
  return sll;
}
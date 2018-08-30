function display(list){
  // displays the linked list
  let currNode = list.head;

  while (currNode !== null) {
    console.log(JSON.stringify(currNode.value));
    currNode = currNode.next;
  }
}

function size(list){
  // returns the size of the linked list
  let currNode = list.head;
  let count = 0;

  while (currNode !== null) {
    count++;
    currNode = currNode.next;
  }
  console.log(`The list is ${count} nodes long.`)
}

function isEmpty(list){
  // finds if the list is empty or not (without using size())
  if (list.head === null) console.log('List is empty!');
  else console.log('List is not empty.');
}

function findPrevious(list, item){
  // finds the node before the item you are looking for
  let currNode = list.head;
  let prevNode = list.head;

  while (currNode !== null && !(item in currNode.value)) {
    prevNode = currNode;
    currNode = currNode.next;

    if (item in currNode.value) {
      console.log('The previous node is', prevNode.value); 
    }
  }
}

function findLast(list){
  // returns the last node in the linked list
  let currNode = list.head;
  let lastNode = list.head;

  while (currNode !== null) {
    lastNode = currNode;
    currNode = currNode.next;
  }
  console.log(lastNode.value);
}

module.exports = {
  display, size, isEmpty, findPrevious, findLast
};
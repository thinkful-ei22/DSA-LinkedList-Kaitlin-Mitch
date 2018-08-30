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

}

function isEmpty(list){
  // finds if the list is empty or not (without using size())

}

function findPrevious(list){
  // finds the node before the item you are looking for

}

function findLast(list){
  // returns the last node in the linked list

}

module.exports = {
  display, size, isEmpty, findPrevious, findLast
};
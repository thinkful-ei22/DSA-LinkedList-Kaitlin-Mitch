const LinkedList = require('./linked-list-class');

// Write a function main. Within the function, using the linked list class above, create a linked list called SLL and add the following items in your linked list: Apollo, Boomer, Helo, Husker, Starbuck.

function main() {
  // create a new linked list
  let SLL = new LinkedList();

  // add the following items
  SLL.insertFirst({'Apollo': 'Husky'});
  SLL.insertLast({'Boomer': 'Boxer'});
  SLL.insertLast({'Helo': 'Greyhound'});
  SLL.insertLast({'Husker': 'Bloodhound'});
  SLL.insertLast({'Starbuck': 'Chocolate Lab'});
  // add Tauhida to the list
  SLL.insertLast({'Tauhida': 'Shih Tzu'});
  SLL.remove('squirrel');

  console.log(JSON.stringify(SLL));
}

main();
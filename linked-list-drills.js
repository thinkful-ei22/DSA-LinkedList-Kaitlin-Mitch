const LinkedList = require('./linked-list-class');
const { display, size, isEmpty, findPrevious, findLast } = require('./supplemental-functions');

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
  // remove squirrel from the list - results in 'Item not found'
  //SLL.remove('squirrel');

  // console.log(JSON.stringify(SLL));

  // insert Athena before Boomer using insertBefore()
  SLL.insertBefore({'Athena': 'Poodle'}, 'Boomer');

  // insert Hotdog after Helo
  SLL.insertAfter({'Hotdog': 'Dinner'}, 'Helo');

  // Using insertAt() insert Kat in the 3rd position of the list
  SLL.insertAt({'Kat': 'Dog'}, 2);

  // remove Tauhida from the list
  SLL.remove('Tauhida');

  //console.log(JSON.stringify(SLL, null, 2));
  display(SLL);

  // display the count of the list
  size(SLL);

  // is it empty?
  isEmpty(SLL);

  // what is the prev node
  findPrevious(SLL, 'Husker');

  // find the last node
  findLast(SLL);

}

main();
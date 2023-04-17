const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

// class ListNode {
//   constructor(x) {
//     this.value = x;
//     this.next = null;
//   }
// }

class Queue {

  // https://www.youtube.com/watch?v=j6w_ZJSYNRU&t=2247s

  constructor () {
    this.head = null
    this.tail = null
    this.next = null
  }

  getUnderlyingList() {
    let cur = this.head
    let out 

    while(cur){
      console.log(cur.value)
      const node = cur
      if (!out) {out = node}      
      cur = cur.next      
    }

    return out

  }

  enqueue(data) {

    const node = new ListNode(data)
    if (this.head) {
      this.tail.next = node
      this.tail = node
    }
    else
    {
      this.head = node
      this.tail = node
    }
    
    this.length++

  }

  dequeue() {

    const cur = this.head
    this.head = this.head.next
    this.length--;

    return cur.value
   
  }
}

module.exports = {
  Queue
};

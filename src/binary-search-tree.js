const { NotImplementedError } = require('../extensions/index.js');

 const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/


// class Node {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }


class BinarySearchTree {
//https://www.youtube.com/watch?v=fnqUD4FTE5Q&list=PLP-a1IHLCS7PqDf08LFIYCiTYY1CtoAkt&index=12

  constructor() {
    this.root777 = null
  }


  root() {
    return this.root777
  }

  add(data) {
    
    this.root777 = addToTree(this.root777, data)

    function addToTree (node,data){
      if(!node){
        return new Node(data)
      }

      if(node.data === data){
        return node
      }

      if(data < node.data){
        node.left = addToTree(node.left, data)
      } else {
        node.right = addToTree(node.right, data)
      }

      return node
    }




  }

  has(data) {
    
    return SearchToTree(this.root777,data)

    function SearchToTree(node, data) {
      if(!node){
        return false;
      }

      if(node.data === data) {
        return true
      }

      return data < node.data ? SearchToTree(node.left, data):SearchToTree(node.right, data); 
    }
  }

  find(data) {

    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    // doLeft(this.root777,has(data))

    // function doLeft(node, cabe) {
    //   if(node){
    //     doLeft(node.left,cabe)
    //     cabe(node.data)
    //     doLeft(node.left,cabe)
    //   }
    // }

    // return this.root777

    return SearchToTree(this.root777,data)

    function SearchToTree(node, data) {
      if(!node){
        return null;
      }

      if(node.data === data) {
        return node
      }

      return data < node.data ? SearchToTree(node.left, data):SearchToTree(node.right, data); 
    }
   
  }

  remove(data) {

    this.root777 = removeNode(this.root777, data)

    function removeNode(node, data) {
      if(!node) {
        return null
      }

      if(data < node.data) {
        node.left = removeNode(node.left, data)
        return node
      } else if (node.data < data) {
        node.right = removeNode(node.right, data)
        return node;
      } else {
        if (!node.left && !node.right) { 
          return null
        }
      }

      if (!node.left) {
        node = node.right
        return node
      }
      
      if (!node.right) {
        node = node.left
        return node
      }

      // route via left side
      let minFromRight = node.right
      while (minFromRight.left) {
        minFromRight = minFromRight.left
      }
      node.data = minFromRight.data

      node.right = removeNode(node.right, minFromRight.data)

      return node
    }


  
  }

  min() {
   if(!this.root777) {
    return
   }

   let node = this.root777
   while (node.left) {
    node = node.left
   }

   return node.data

  }

  max() {

    if(!this.root777) {
      return
     }
  
     let node = this.root777
     while (node.right) {
      node = node.right
     }
  
     return node.data
  }
}

module.exports = {
  BinarySearchTree
};
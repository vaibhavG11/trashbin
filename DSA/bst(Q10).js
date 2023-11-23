/*
Name : Vaibhav Gaikwad
Div : A
ROllNo. : 2301045

*/


class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    insert(data) {
      const newNode = new Node(data);
  
      if (this.root === null) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }
  
    insertNode(node, newNode) {
      if (newNode.data < node.data) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          this.insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          this.insertNode(node.right, newNode);
        }
      }
    }
  
    display() {
      this.displayTree(this.root, 0);
    }
  
    displayTree(node, level) {
      if (node) {
        this.displayTree(node.right, level + 1);
        let spaces = "";
        for (let i = 0; i < level; i++) {
          spaces += "  ";
        }
        console.log(spaces + node.data);
        this.displayTree(node.left, level + 1);
      }
    }
  }
  

  const bst = new BinarySearchTree();
  bst.insert(10);
  bst.insert(5);
  bst.insert(15);
  bst.insert(3);
  bst.insert(7);
  bst.insert(12);
  bst.insert(18);
  
  console.log("Binary Search Tree:");
  bst.display();
  
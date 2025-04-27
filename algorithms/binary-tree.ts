class BinaryNode {
  constructor(public value: number, public left: BinaryNode | null = null, public right: BinaryNode | null = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  root: null | BinaryNode

  constructor() {
    this.root = null;
  }

  public insert(value: number) {
    if (this.root === null) {
      this.root = new BinaryNode(value);
      return;
    }

    let currentNode = this.root;
    while (true) {
      if (value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = new BinaryNode(value)
          return;
        }
        currentNode = currentNode.left
      } else {
        if (currentNode.right === null) {
          currentNode.right = new BinaryNode(value);
          return;
        }
        currentNode = currentNode.right
      }
    }
  }

  public printInOrder(node: BinaryNode | null = this.root) {
    if (node !== null) {
      this.printInOrder(node.left)
      console.log(node.value)
      this.printInOrder(node.right)
    }
  }


}

const tree = new BinaryTree();

tree.insert(50);
tree.insert(33);
tree.insert(25);
tree.insert(77);
tree.insert(81);
tree.insert(3);
tree.insert(14);
tree.insert(105);
tree.insert(78);

tree.printInOrder();

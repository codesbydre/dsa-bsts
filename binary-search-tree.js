class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const newNode = new Node(val);

    //if tree is empty, new node becomes root
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while (true) {
      // if the new value inserted is less than current node's value, go left
      if (val < current.val) {
        //if no left child, insert new node here
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      }

      // if the new value inserted is greater than current node's value, go right
      else if (val > current.val) {
        // if no right child, insert new node here
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
      // return value if it already exists in tree
      else {
        return this;
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, node = this.root) {
    // base case: if the tree is empty, insert the new node as the root
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    // if the value is less than the current node's value
    if (val < node.val) {
      // if there's no left child, insert the new node here
      if (node.left === null) {
        node.left = new Node(val);
      } else {
        // recursively call insert on the left subtree
        this.insertRecursively(val, node.left);
      }
    }
    // if the value is greater than the current node's value
    else if (val > node.val) {
      // if there's no right child, insert the new node here
      if (node.right === null) {
        node.right = new Node(val);
      } else {
        // recursively call insert on the right subtree
        this.insertRecursively(val, node.right);
      }
    }
    // if the value is equal to the current node's value, do nothing (no duplicates)

    // return the tree after insertion
    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    // start search at the root of the tree
    let current = this.root;

    // continue searching until we reach a leaf node (null)
    while (current !== null) {
      // if the current node's value is the target value, return the node
      if (val === current.val) {
        return current;
      }
      // if the target value is less than the current node's value, go left
      else if (val < current.val) {
        current = current.left;
      }
      // if the target value is greater than the current node's value, go right
      else {
        current = current.right;
      }
    }

    // if we exit the loop, the value was not found; return undefined
    return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, node = this.root) {
    // base case: if current node is null, return undefined
    if (node === null) {
      return undefined;
    }

    // if current node's value is the target value, return the node
    if (val === node.val) {
      return node;
    }
    // if target value is less than the current node's value, search in the left subtree
    else if (val < node.val) {
      return this.findRecursively(val, node.left);
    }
    // if target value is greater than the current node's value, search in the right subtree
    else {
      return this.findRecursively(val, node.right);
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  //DFS - Depth-First Search Traversal Methods

  // pre-order traversal visits current node before child nodes
  dfsPreOrder() {
    let visited = [];

    const traverse = (node) => {
      visited.push(node.val); // visit the node
      if (node.left) traverse(node.left); // go left recursively
      if (node.right) traverse(node.right); // go right recursively
    };

    traverse(this.root);
    return visited;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  //in-order traversal visits left subtree, then current node, then right subtree
  dfsInOrder() {
    let visited = [];

    const traverse = (node) => {
      if (node.left) traverse(node.left); // go left recursively
      visited.push(node.val); // visit the node
      if (node.right) traverse(node.right); // go right recursively
    };

    traverse(this.root);
    return visited;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  //post-order traversal visits child nodes before current node
  dfsPostOrder() {
    let visited = [];

    const traverse = (node) => {
      if (node.left) traverse(node.left); // go left recursively
      if (node.right) traverse(node.right); // go right recursively
      visited.push(node.val); // visit the node
    };

    traverse(this.root);
    return visited;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  //BFS = breadth-first search traversal, visits nodes level by level starting from the root
  bfs() {
    let node = this.root, // start from root node
      queue = [], // initialize a queue to manage the order of traversal
      visited = []; //array to keep track of visited nodes

    // if the tree is empty, return an empty array
    if (!node) return visited;

    // add the root node to the queue to start the BFS
    queue.push(node);

    // continue looping as long as there are nodes in the queue
    while (queue.length) {
      // remove the first node from the queue and store it in 'node'
      node = queue.shift();

      // add the value of the current node to the 'visited' array
      visited.push(node.val);

      // if current node has a left child, add it to the queue
      if (node.left) queue.push(node.left);

      // if current node has a right child, add it to the queue
      if (node.right) queue.push(node.right);
    }

    // return array of visited nodes after the BFS is complete
    return visited;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {}

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {}

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {}
}

module.exports = BinarySearchTree;

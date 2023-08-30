/** BinaryTreeNode: node for a general binary tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root) return 0;

    const toVisitQueue = [this.root];
    let minDepth = 1;

    while (toVisitQueue.length) {
      const current = toVisitQueue.shift();

      if (current.left || current.right) {
        minDepth += 1;
      } else {
        return minDepth;
      }

      if (current.left) toVisitQueue.push(current.left);
      if (current.right) toVisitQueue.push(current.right);
      }
    }
  

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) return 0;

    const toVisitQueue = [this.root];
    let maxDepth = 1;

    while (toVisitQueue.length) {
      const current = toVisitQueue.shift();

      if (current.left || current.right) {
        maxDepth += 1;
      }
      if (current.left) toVisitQueue.push(current.left);
      if (current.right) toVisitQueue.push(current.right);
    }
    return maxDepth;
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    if (!this.root) return 0;

    const toVisitQueue = [];
    let maxSum = this.root.val;

    /** 
     * The root is fundamentally different in this problem
     * because it is the only node which can include both
     * of its children in the final solution of maxSum path.
     * 
     * So, the root is handled separately before the loop.
     */

    if (this.root.left) {
      toVisitQueue.push(this.root.left);
      maxSum += this.root.left.val;
    }
    if (this.root.right) {
      toVisitQueue.push(this.root.right);
      maxSum += this.root.right.val;
    }

    while (toVisitQueue.length) {
      const current = toVisitQueue.shift();

      /**
       * At arbitrary node, check children.
       * If one child is greater than the other, add that one.
       * 
       * If children are only negative, ignore.
       */

      if (current.left && current.right) {
        if (current.left.val > current.right.val) {
          maxSum += current.left.val;
          toVisitQueue.push(current.left);
        } else {
          maxSum += current.right.val;
          toVisitQueue.push(current.right);
        }
      } 
    }
    return maxSum;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    let nextLarger = null;
    if (!this.root) return nextLarger;

    const toVisitQueue = [this.root];

    while (toVisitQueue.length) {
      const current = toVisitQueue.shift();

      if (current.val > lowerBound) {
        nextLarger = current.val;
      }

      if (current.left) toVisitQueue.push(current.left);
      if (current.right) toVisitQueue.push(current.right);
    }
    return nextLarger;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };

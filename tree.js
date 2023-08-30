/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) return 0;
    let total = 0;
    const toVisitQueue = [this.root];
    while (toVisitQueue.length) {
      const current = toVisitQueue.shift();
      total += current.val;
      for (let child of current.children) {
        toVisitQueue.push(child);
      }
    }
    return total;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) return 0;
    let countEvens = 0;
    const toVisitQueue = [this.root];
    while (toVisitQueue.length) {
      const current = toVisitQueue.shift();
      if (current.val % 2 === 0) {
        countEvens += 1;
      }
      for (let child of current.children) {
        toVisitQueue.push(child);
      }
    }
    return countEvens;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) return 0;
    let countNumsGreater = 0;
    const toVisitQueue = [this.root];
    while (toVisitQueue.length) {
      const current = toVisitQueue.shift();
      if (current.val > lowerBound) {
        countNumsGreater += 1;
      }
      for (let child of current.children) {
        toVisitQueue.push(child);
      }
    }
    return countNumsGreater;
  }
}

module.exports = { Tree, TreeNode };

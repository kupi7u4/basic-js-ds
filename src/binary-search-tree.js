const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.masterRoot = null
  }

  root() {
    return this.masterRoot
  }

  add(data) {
    this.masterRoot = addWithIn(this.masterRoot, data)

    function addWithIn(node, data) {
      if (!node) {
        return new Node(data)
      }

      if (node.data === data) {
        return node
      }

      if (data < node.data) {
        node.left = addWithIn(node.left, data)
      } else {
        node.right = addWithIn(node.right, data)
      }

      return node
    }

  }

  has(data) {
    return searchWithIn(this.masterRoot, data)

    function searchWithIn(node, data) {
      if (!node) {
        return false
      }

      if (node.data === data) {
        return true
      }

      return data < node.data ?
      searchWithIn(node.left, data) :
      searchWithIn(node.right, data)
    }
  }

  find(data) {
    let current = this.masterRoot
      while(current.data !== data) {      
        data < current.data ? current = current.left : current = current.right

        if (current === null) {
          return null
        }
      }

      return current
  }

  remove(data) {
    this.masterRoot = removeWithIn(this.masterRoot, data)

    function removeWithIn(node, data) {
      if (!node) {
        return null
      }

      if (data < node.data) {
        node.left = removeWithIn(node.left, data)
        return node
      } else if (data > node.data) {
        node.right = removeWithIn(node.right, data)
        return node
      } else {

        if (!node.left && !node.right) {
          return null
        }

        if (!node.left) {
          node = node.right
          return node
        }

        if (!node.right) {
          node = node.left
          return node
        }

        let minFromRight = node.right
        while (minFromRight.left) {
          minFromRight = minFromRight.left
        }
        node.data = minFromRight.data
        node.right = removeWithIn(node.right, minFromRight.data)

        return node
      }
    }
  }

  min() {
    if (!this.masterRoot) {
      return null
    }

    let node = this.masterRoot
    while (node.left) {
      node = node.left
    }

    return node.data

  }

  max() {
    if (!this.masterRoot) {
      return null
    }

    let node = this.masterRoot
    while (node.right) {
      node = node.right
    }

    return node.data

  }
}



// const tree = new BinarySearchTree();

// function addItems() {
//   console.log('1, 10, 3, 8, 15, 2')

//   tree.add(12);
//   tree.add(1);
//   tree.add(10);
//   tree.add(15);
//   tree.add(32);

//   console.log(tree)

//   /*
//           12
//          /   \
//         1     15
//          \      \
//           10     32
            
           
//   */
// }
// function searchItem() {
//   console.log(tree.root().data)
// }
// function removeItem() {
//   console.log(tree.remove(100))
//   console.log(tree)
// }
// function minMax() {
//   console.log('минимальное знаечение ', tree.min())
//   console.log('максимальное значение знаечение ', tree.max())
// }
// function findItem() {
//   console.log('find ', tree.find(320))
// }
// addItems()
// searchItem()
// minMax()
// findItem()


module.exports = {
  BinarySearchTree
};
const isNodeIn = (node, predicate) => {
  if (typeof predicate !== 'function') {
  	throw new Error('isNodeIn second parameter must be a function');
  }
  
  let currentNode = node;
  if (predicate(currentNode)) {
    return true;
  }
  // while (currentNode) {
  //   currentNode = currentNode.parentNode;
  // }

  return false;
};

export default isNodeIn;

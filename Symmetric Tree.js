function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

// Recursive
var isSymmetric = function(root) {
    if (!root) return true;
    
    return isMirror(root.left, root.right);
}

function isMirror(left, right) {
    if (!left && !right) return true;
    if (!left || !right || left.val !== right.val) return false;
    
    return isMirror(left.left, right.right) && isMirror(left.right, right.left);
}

// Iterative
function isSymmetricIterative(root) {
    if (!root) return true;
    
    const queue = [root.left, root.right];
    
    while (queue.length > 0) {
        const left = queue.shift();
        const right = queue.shift();
        
        if (!left && !right) continue;
        if (!left || !right || left.val !== right.val) return false; 

        queue.push(left.left, right.right);
        queue.push(left.right, right.left);
    }
    
    return true;
}

//Example usage:
const root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.right = new TreeNode(2);
root1.left.left = new TreeNode(3);
root1.left.right = new TreeNode(4);
root1.right.left = new TreeNode(4);
root1.right.right = new TreeNode(3);

console.log(isSymmetric(root1));
console.log(isSymmetricIterative(root1));

const root2 = new TreeNode(1);
root2.left = new TreeNode(2);
root2.right = new TreeNode(2);
root2.left.right = new TreeNode(3);
root2.right.right = new TreeNode(3);

console.log(isSymmetric(root2));
console.log(isSymmetricIterative(root2));
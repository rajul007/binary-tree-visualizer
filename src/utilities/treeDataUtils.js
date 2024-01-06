export const generateTreeData = (levelOrderArray) => {
    if (!levelOrderArray || levelOrderArray.length === 0) {
        return null;
    }

    const treeData = {
        name: levelOrderArray[0].toString(),
        children: [],
    };

    const queue = [treeData];
    let index = 1;

    while (index < levelOrderArray.length) {
        const currentNode = queue.shift();

        const leftValue = levelOrderArray[index++];
        if (leftValue !== null && leftValue !== undefined) {
            const leftNode = { name: leftValue.toString(), children: [] };
            currentNode.children.push(leftNode);
            queue.push(leftNode);
        }
        else {
            const leftNode = { name: 'null', children: [] };
            currentNode.children.push(leftNode);
        }

        if (index < levelOrderArray.length) {
            const rightValue = levelOrderArray[index++];
            if (rightValue !== null && rightValue !== undefined) {
                const rightNode = { name: rightValue.toString(), children: [] };
                currentNode.children.push(rightNode);
                queue.push(rightNode);
            }
            else {
                const rightNode = { name: 'null', children: [] };
                currentNode.children.push(rightNode);
            }
        }
    }
    return treeData;
};  
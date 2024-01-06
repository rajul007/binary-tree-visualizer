import React, { useState, useEffect } from 'react';
import Tree from 'react-d3-tree';
import { generateTreeData } from '../utilities/treeDataUtils';
import { useCenteredTree } from '../utilities/treeVisualUtils';

export default function BinaryTreeVisualizer({ levelOrderArray }) {
    const [treeData, setTreeData] = useState(null);
    const [dimensions, translate, containerRef] = useCenteredTree();

    useEffect(() => {
        const treeData = generateTreeData(levelOrderArray);
        if (levelOrderArray === null || levelOrderArray.length === 0) {
            setTreeData(null)
        }
        else setTreeData(treeData);
    }, [levelOrderArray]);

    const straightPathFunc = (linkDatum, orientation) => {
        const { source, target } = linkDatum;
        return orientation === 'horizontal'
            ? `M${source.y},${source.x}L${target.y},${target.x}`
            // : `M${source.x},${source.y / 3.5}L${target.x},${target.y / 3.5}`;
            : `M${source.x},${source.y}L${target.x},${target.y}`;
    };


    const renderCustomNode = (node) => {
        let x = 0;
        let y = node.hierarchyPointNode.y
        return (
            <g onClick={node.toggleNode} visibility={node.nodeDatum.name === 'null' ? 'hidden' : 'visible'}>
                <circle r="15" fill="#3498db" />
                <text
                    textAnchor='middle'
                    dominantBaseline="middle"
                    alignmentBaseline='middle'
                    style={{ fontSize: '12px' }}
                >
                    {node.nodeDatum.name}
                </text>
            </g>
        );
    };

    const getDynamicPathClass = ({ source, target }, orientation) => {
        if (target.data.name === 'null') return 'link__to-null'
        else if (!target.children) {
            // Target node has no children -> this link leads to a leaf node.
            return 'link__to-leaf';
        }
        // Style it as a link connecting two branch nodes by default.
        return 'link__to-branch';
    };

    return (
        <div id='tree-container' ref={containerRef}>
            {treeData && <Tree data={treeData}
                orientation="vertical"
                pathFunc={straightPathFunc}
                dimensions={dimensions}
                translate={translate}
                renderCustomNodeElement={renderCustomNode}
                pathClassFunc={getDynamicPathClass}
                separation={{ siblings: 0.35, nonSiblings: 0.35 }}
                depthFactor={50}
            />}
        </div>
    )
}

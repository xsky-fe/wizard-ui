import * as React from 'react';
import RcTree from 'rc-tree';
import { TreeProps } from '../../interface';
import './style.scss';
import 'rc-tree/assets/index.css';

// function renderTreeNodes(data: TreeData[]) {
//   return data.map(item => {
//     const filterProps = pick(item, ['title', 'disabled', 'key']);
//     if (item.children) {
//       return <TreeNode {...filterProps}>{renderTreeNodes(item.children)}</TreeNode>;
//     } else {
//       return <TreeNode {...filterProps} />;
//     }
//   });
// }

const Tree: React.FC<TreeProps> = props => {
  const { data, checkable = true, prefixCls = 'Tree' } = props;
  return (
    <RcTree
      {...props}
      treeData={data}
      // prefixCls={prefixCls}
      checkable={checkable ? <span className={`${prefixCls}-checkbox-inner`} /> : checkable}
    />
  );
};

export default Tree;

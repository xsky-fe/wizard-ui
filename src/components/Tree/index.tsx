import * as React from 'react';
import * as PropTypes from 'prop-types';
import RcTree, { TreeNode } from 'rc-tree';
import { TreeData, TreeProps } from '../../interface';
import './style.scss';
import pick from 'lodash/pick';

function renderTreeNodes(data: TreeData[]) {
  return data.map(item => {
    const filterProps = pick(item, ['title', 'disabled', 'key']);
    if (item.children) {
      // @ts-ignore
      return <TreeNode {...filterProps}>{renderTreeNodes(item.children)}</TreeNode>;
    } else {
      // @ts-ignore
      return <TreeNode {...filterProps} />;
    }
  });
}

const Tree: React.FC<TreeProps> = props => {
  const { data, checkable, prefixCls } = props;
  return (
    // @ts-ignore
    <RcTree
      {...props}
      checkable={checkable ? <span className={`${prefixCls}-checkbox-inner`} /> : checkable}
    >
      {renderTreeNodes(data)}
    </RcTree>
  );
};

Tree.propTypes = {
  /** tree 数据 */
  data: PropTypes.array.isRequired,
  /** title 部分是否单独可选 */
  selectable: PropTypes.bool,
  /** 是否展示 checkbox 勾选框 */
  checkable: PropTypes.bool,
  /** 样式前缀，只读 */
  prefixCls: PropTypes.string,
  /** 是否展示收缩图标 */
  showIcon: PropTypes.bool,
};
Tree.defaultProps = {
  prefixCls: 'Tree',
  selectable: false,
  checkable: true,
  showIcon: false,
};

export default Tree;

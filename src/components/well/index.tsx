import * as React from "react";
import * as PropTypes from "prop-types";
import { Well as ReactWell } from "react-bootstrap";
import { WellProps } from "../../interface";

const Well: React.SFC<WellProps> = props => {
  const { size = "medium", children } = props;

  return (
    <div>
      <ReactWell bsSize={size}>{children}</ReactWell>
    </div>
  );
};

Well.propTypes = {
  /**
   * 文本的内容，子节点；
   **/
  children: PropTypes.node.isRequired,
  /**
   * 水井大小可选为 sm | small | lg | large
   **/
  size: PropTypes.string
};

export default Well;

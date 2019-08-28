import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Modal as BaseModal, ModalHeader, ModalBody, ModalTitle, ModalFooter, Button } from 'react-bootstrap';
import { ModalProps } from '../../interface';
import Loader from '../Loader';
import './style.scss';

const Modal: React.FC<ModalProps> = props => {
  const { title, onHide, onOk, show, style, children, confirmText, okStyle, loading } = props;
  let { bsSize } = props,
    dialogClassName = '';
  if (bsSize === 'xlarge') {
    dialogClassName = 'modal-xlg';
    bsSize = undefined;
  }

  return (
    <BaseModal
      bsSize={bsSize}
      className="Modal"
      dialogClassName={dialogClassName}
      style={style}
      backdrop="static"
      onHide={onHide}
      show={show}
    >
      <ModalHeader key="header" closeButton>
        <ModalTitle>{title}</ModalTitle>
      </ModalHeader>
      <ModalBody key="body">{children}</ModalBody>
      <ModalFooter key="footer">
        <Button type="submit" disabled={loading} bsStyle={okStyle} onClick={onOk}>
          {loading && <Loader bsSize="xs" />}
          {confirmText}
        </Button>
      </ModalFooter>
    </BaseModal>
  );
};

Modal.propTypes = {
  /** 标题 */
  title: PropTypes.string.isRequired,
  /** 隐藏对话框操作 */
  onHide: PropTypes.func.isRequired,
  /** 确定、提交操作 */
  onOk: PropTypes.func,
  /** 是否展示对话框 */
  show: PropTypes.bool,
  /** 对话框附加行内样式 */
  style: PropTypes.object,
  /** 对话框大小 */
  bsSize: PropTypes.oneOf(['sm', 'medium', 'lg', 'xlarge']),
  /** 确定、提交按钮文案 */
  confirmText: PropTypes.string,
  /** 确定、提交按钮样式 */
  okStyle: PropTypes.string,
  /** 是否展示加载 UI */
  loading: PropTypes.bool,
};

Modal.defaultProps = {
  confirmText: '确定',
  okStyle: 'primary',
};

export default Modal;

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import * as libs from 'wizard-ui';
import AllIcon from '../Icon';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { Button } from 'react-bootstrap';
import PropTable from '../PropTable';
import './style.scss';


export default ({ isShow, children, previewOnly }) => {
  const [show, setShow] = useState(false);
  const toggle = () => {
    setShow(!show);
  }
  return (
    <LiveProvider scope={{ ReactDOM, AllIcon, PropTable, ...libs }} code={children.trim()}>
      { previewOnly ? <LivePreview/> : (
        <div className={`Playground ${(show || isShow) ? 'show' : ''}`}>
          {isShow ? (
            <LiveEditor disabled/>
          ) : (
            <>
              <div className="Playground__Error">
                <LiveError />
              </div>
              <div className="Playground__View">
                <LivePreview />
                <Button bsStyle="link" onClick={toggle}>{show ? '隐藏代码' : '展开代码'}</Button>
              </div>
              {show && <LiveEditor />}
            </>
          )}
        </div>
      )}
    </LiveProvider>
  )
}
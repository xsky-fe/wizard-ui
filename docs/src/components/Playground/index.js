import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import * as libs from 'wizard-ui';
import { Button } from 'wizard-ui';
import examples from '../../examples';
import AllIcon from '../Icon';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import moment from 'moment';
import getMockDatas from '../../utils/getMockDatas';
import './style.scss';


export default ({ isShow, children, previewOnly, noInline }) => {
  const [show, setShow] = useState(false);
  const toggle = () => {
    setShow(!show);
  }
  return (
    <LiveProvider scope={{ moment, getMockDatas, ReactDOM, AllIcon, ...examples, ...libs }} code={children.trim()} noInline={noInline}>
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
                <Button className="toggle-code" bsStyle="link" onClick={toggle}>{show ? '隐藏代码' : '展开代码'}</Button>
              </div>
              {show && <LiveEditor />}
            </>
          )}
        </div>
      )}
    </LiveProvider>
  )
}
import React from 'react';
import ReactDOM from 'react-dom';
import * as libs from 'wizard-ui';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import './style.scss';


export default ({ children, ...props }) => {
  return (
    <LiveProvider scope={{ ReactDOM, ...libs }} code={children}>
      <div className="Playground">
        <div className="Playground__Error">
          <LiveError />
        </div>
        <div className="Playground__View">
          <LivePreview />
        </div>
        <LiveEditor />
      </div>
    </LiveProvider>
  )
}
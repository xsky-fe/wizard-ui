import React from 'react';
import * as Icons from 'wizard-ui-icon';
import './style.scss';
import lodash from 'lodash';

const keys = lodash.keys(Icons);

const Icon = () => (
  <div className="Icon">
    <p>总共有 {keys.length} 个图标</p>
    <div className="Icon__ul">
      {keys.map((key, index) => {
        const Icon = Icons[key];
        const name = lodash.kebabCase(key);
        return (
          <div className="Icon__li" key={index}>
            <Icon />
            <p>{name}</p>
          </div>
        );
      })}
    </div>
  </div>
);

export default Icon;

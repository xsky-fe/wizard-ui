import React from 'react';
import icons from 'wizard-icons';
import './style.scss';
import lodash from 'lodash';

const keys = lodash.keys(icons);

const Icon = () => (
  <div className="Icon">
    <p>总共有 {keys.length} 个图标</p>
    <div className="Icon__ul">
      {keys.map((key, index) => {
        const Icon = icons[key];
        const name = lodash.kebabCase(key);
        return (
          <div className="Icon__li" key={index}>
            <Icon />
            <p>{name}</p>
          </div>
        )
      })}
    </div>
  </div>
)

export default Icon;
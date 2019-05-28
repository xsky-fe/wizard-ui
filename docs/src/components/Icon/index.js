import React from 'react';
import getIcons from '../../utils/get-icon';
import './style.scss';

const icons = getIcons();

const Icon = () => (
  <div className="Icon">
    <p>总共有 {icons.length} 个图标</p>
    <div className="Icon__ul">
      {icons.map((icon, index) => (
          <div className="Icon__li" key={index}>
            <span className={`icon icon-${icon.name}`} />
            <div>{icon.name}</div>
          </div>
        ))}
    </div>
  </div>
)

export default Icon;
import React from 'react';
import getColors from '../../utils/get-colors';
import invertColor from '../../utils/invert-color';
import './style.scss';
import lodash from 'lodash';

const { basicColorMap } = getColors();
const basicColorKeys = lodash.keys(basicColorMap);
const colorMap = {
  red: '红色系',
  purple: '紫色系',
  blue: '蓝色系',
  green: '绿色系',
  goldenrod: '金色系',
  gray: '灰色系',
  yellow: '黄色系',
}

export default () => {
  return (
    <div className="show-color">
      {basicColorKeys.map((key, index) => (
        <div key={index} className="color-ul">
          <div>{colorMap[key]}</div>
          {lodash.keys(basicColorMap[key]).map((text, idx) => (
            <div
              className="color-li"
              key={idx}
              style={{
                backgroundColor: basicColorMap[key][text],
                color: invertColor(basicColorMap[key][text]),
              }}
            >
              <span>{text}</span>
              <span>{basicColorMap[key][text]}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

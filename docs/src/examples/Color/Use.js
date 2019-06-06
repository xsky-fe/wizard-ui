import React from 'react';
import getColors from '../../utils/get-colors';
import invertColor from '../../utils/invert-color';
import './style.scss';
import lodash from 'lodash';

const { useColorMap } = getColors();
const useColorKeys = lodash.keys(useColorMap);

const colorMap = {
  brand: '产品色',
  text: '文本',
  bg: '背景',
}

export default () => {
  return (
    <div className="show-color">
      {useColorKeys.map((key, index) => (
        <div key={index} className="color-ul">
          <div>{colorMap[key]}</div>
          {lodash.keys(useColorMap[key]).map((text, idx) => (
            <div
              className="color-li"
              key={idx}
              style={{
                backgroundColor: useColorMap[key][text],
                color: invertColor(useColorMap[key][text]),
              }}
            >
              <span>{text}</span>
              <span>{useColorMap[key][text]}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}



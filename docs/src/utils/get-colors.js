import lodash from 'lodash';
// eslint-disable-next-line import/no-webpack-loader-syntax
import colorString from '!!raw-loader!../Layout/variables.scss';

export default () => {
  const basicColorMap = {
    purple: {},
    blue: {},
    azure: {},
    green: {},
    olivine: {},
    yellow: {},
    orange: {},
    red: {},
    'deep-red': {},
  };
  const useColorMap = {
    brand: {},
    text: {},
    bg: {},
  };
  const colorArr = colorString
    .split('\n')
    .filter(item => item.includes('$'))
    .map(item =>
      item
        .replace(';', '')
        .split(':')
        .map(k => k.trim())
    );
  const basicColorKeys = lodash.keys(basicColorMap);
  const useColorKey = lodash.keys(useColorMap);
  colorArr.forEach(([text, color]) => {
    basicColorKeys.forEach(key => {
      const matchText = text.match(key);
      if (matchText && matchText.index === 1 && matchText[0] !== 'white') {
        basicColorMap[key][text] = color;
      }
    });
    useColorKey.forEach(key => {
      const matchText = text.match(key);
      if (matchText && matchText.index === 1) {
        const varToColor = colorArr.filter(item => color.includes(item[0]));
        if (varToColor.length) {
          useColorMap[key][`${text}(${varToColor[0][0]})`] = varToColor[0][1];
        } else {
          useColorMap[key][text] = color;
        }
      }
    });
  });
  return {
    basicColorMap,
    useColorMap,
  };
};

// import lodash from 'lodash';
// import * as variables from '!!raw-loader!../../src/style/variables.css';

// export default function getColors () {
//   const variableArr = variables
//     .split ('\n')
//     .filter (item => item.includes ('--'))
//     .map (item => item.replace (';', '').split (':').map (k => k.trim ()));
//   const basicColorMap = {
//     red: {},
//     purple: {},
//     blue: {},
//     green: {},
//     goldenrod: {},
//     white: {},
//     gray: {},
//     yellow: {},
//   };
//   const useColorMap = {
//     brand: {},
//     text: {},
//     bg: {},
//   };
//   const basicColorKeys = lodash.keys (basicColorMap);
//   const useColorKey = lodash.keys (useColorMap);
//   variableArr.forEach (([text, color]) => {
//     basicColorKeys.forEach (key => {
//       const matchText = text.match (key);
//       if (matchText && matchText.index === 2) {
//         basicColorMap[key][text] = color;
//       }
//     });
//     useColorKey.forEach (key => {
//       const matchText = text.match (key);
//       if (matchText && matchText.index === 2) {
//         const varToColor = variableArr.filter (item =>
//           color.includes (item[0])
//         );
//         if (varToColor.length) {
//           useColorMap[key][`${text}(${varToColor[0][0]})`] = varToColor[0][1];
//         } else {
//           useColorMap[key][text] = color;
//         }
//       }
//     });
//   });
//   return {
//     basicColorMap,
//     useColorMap,
//   };
// }

interface OPTIONS {
  splitUnit?: boolean
  withScale?: boolean
}

export const BULK_MAP = {
  zh: [[1, ''], [1e3, 'K'], [1e6, 'M'], [1e9, 'B'], [1e12, 'T']],
  en: [
    [1, ''],
    /* eslint-disable wizard/use-t-function */
    [1e4, '万'],
    [1e8, '亿'],
    [1e12, '兆'],
    [1e16, '京'],
    /* eslint-enable wizard/use-t-function */
  ]
}

/**
 * options 可选属性 ‘splitUnit’ & ‘withScale’；
 * splitUnit 为 true 时，可通过设置 withScale 为 true，将一同返回对应单位的换算比例；
 * 类似 [1, '万'， 1e4]。
 */
export default function bulk(value: number, options: OPTIONS, lang = 'zh') {
  const BULK = BULK_MAP[lang];
  let unit = BULK[0][1];
  if (!value) {
    if (options && options.splitUnit) return [0, unit];
    return `0${unit}`;
  }
  let i = 1;
  while (BULK[i] && value >= BULK[i][0]) {
    i++;
  }
  unit = BULK[i - 1][1];
  let resultValue: number = value / BULK[i - 1][0];
  if (parseInt(String(resultValue), 10) !== resultValue) {
    resultValue = Number(resultValue.toFixed(2));
  }
  if (options && options.splitUnit) {
    if (options.withScale) return [resultValue, unit, BULK[i - 1][0]];
    return [resultValue, unit];
  } else {
    return `${resultValue}${unit}`;
  }
}

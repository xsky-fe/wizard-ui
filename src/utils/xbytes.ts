interface OPTIONS {
  formatType?: string;
  unitSeparator?: boolean;
  decimalPlaces?: number;
  fixedDecimals?: boolean;
  toUnit?: string;
  withoutFloat?: boolean;
  splitUnit?: boolean;
  thousandsSeparator?: string;
}

type Map = {
  [key: string]: number;
}

const formatThousandsRegExp = /\B(?=(\d{3})+(?!\d))/g;
const formatDecimalsRegExp = /(?:\.0*|(\.[^0]+)0+)$/;

const basicMap = {
  b: 1,
  kb: 1 << 10,
  mb: 1 << 20,
  gb: 1 << 30,
  tb: (1 << 30) * 1024,
  pb: (1 << 30) * Math.pow(1024, 2),
  eb: (1 << 30) * Math.pow(1024, 3),
  zb: (1 << 30) * Math.pow(1024, 4),
};

const binaryMap = {
  b: 1,
  kib: 1 << 10,
  mib: 1 << 20,
  gib: 1 << 30,
  tib: (1 << 30) * 1024,
  pib: (1 << 30) * Math.pow(1024, 2),
  eib: (1 << 30) * Math.pow(1024, 3),
  zib: (1 << 30) * Math.pow(1024, 4),
};

const decimal = 1000;
const decimalMap = {
  b: 1,
  kb: Math.pow(decimal, 1),
  mb: Math.pow(decimal, 2),
  gb: Math.pow(decimal, 3),
  tb: Math.pow(decimal, 4),
  pb: Math.pow(decimal, 5),
  eb: Math.pow(decimal, 6),
  zb: Math.pow(decimal, 7),
};

const numberIsFinite = Number.isFinite || (v => typeof v === 'number' && isFinite(v));

// 原正则 https://www.npmjs.com/package/bytes (存在bug：当传入 '1.2345678901234568e+29GB'字符串进行转换时，结果为 1)
// const parseRegExp = /^((-|\+)?(\d+(?:\.\d+)?)) *(kb|mb|gb|tb|pb|eb|zb)$/i;

// 2018-12-19 兼容科学计数法: 1.2345678901234568e+29
const basicParseRegExp = /^((-|\+)?(\d+(?:\.\d*[Ee+-]*\d+)?)) *(kb|mb|gb|tb|pb|eb|zb)$/i;
const decimalParseRegExp = basicParseRegExp;
const binaryParseRegExp = /^((-|\+)?(\d+(?:\.\d*[Ee+-]*\d+)?)) *(kib|mib|gib|tib|pib|eib|zib)$/i;

function format(value: number, options: OPTIONS) {
  if (!numberIsFinite(value)) {
    return null;
  }

  let map: Map = basicMap;
  if (options && options.formatType) {
    if (options.formatType === 'decimal') {
      map = decimalMap;
    }

    if (options.formatType === 'binary') {
      map = binaryMap;
    }
  }

  const mag = Math.abs(value);
  const thousandsSeparator =
    options && options.thousandsSeparator ? options.thousandsSeparator : '';
  const unitSeparator = options && options.unitSeparator !== undefined ? options.unitSeparator : ' ';
  const decimalPlaces = options && options.decimalPlaces !== undefined ? options.decimalPlaces : 2;
  const fixedDecimals = Boolean(options && options.fixedDecimals);
  // The unit could be specify.
  const toUnit = options && options.toUnit;
  // Split number and unit in array.
  const splitUnit = Boolean(options && options.splitUnit);
  // Parse size without float
  const withoutFloat = Boolean(options && options.withoutFloat);
  let unit = 'B';
  const keys = Object.keys(map).reverse();

  if (toUnit) {
    unit = toUnit;
  } else if (withoutFloat) {
    const matchUnit = keys.find(k => (Boolean(map[k]) && mag >= map[k] && Math.round(mag / map[k]) === mag / map[k]));
    if (matchUnit) {
      unit = matchUnit.toUpperCase();
    }
  } else {
    const matchUnit = keys.find(k => (Boolean(map[k]) && mag >= map[k]));
    if (matchUnit) {
      unit = matchUnit.toUpperCase();
    }
  }

  const unitSize = map[unit.toLowerCase()];
  if (!unitSize) return null;

  const val = value / unitSize;
  let str: number | string = val.toFixed(decimalPlaces);

  if (!fixedDecimals) {
    str = str.replace(formatDecimalsRegExp, '$1');
  }

  if (thousandsSeparator) {
    str = str.replace(formatThousandsRegExp, thousandsSeparator);
  }

  if (splitUnit) {
    if (!isNaN(Number(str))) str = Number(str);
    return [str, unit.toUpperCase().replace('I', 'i')];
  }
  return str + unitSeparator + unit.toUpperCase().replace('I', 'i');
}

function parse(val: string, options: OPTIONS) {
  if (typeof val === 'number' && !isNaN(val)) {
    return val;
  }

  if (typeof val !== 'string') {
    return null;
  }

  let parseRegExp = basicParseRegExp;
  let map: Map = basicMap;

  if (options && options.formatType) {
    if (options.formatType === 'decimal') {
      map = decimalMap;
      parseRegExp = decimalParseRegExp;
    }

    if (options.formatType === 'binary') {
      map = binaryMap;
      parseRegExp = binaryParseRegExp;
    }
  }

  const results = parseRegExp.exec(val);
  let floatValue;
  let unit = 'b';

  if (!results) {
    floatValue = parseInt(val, 10);
    unit = 'b';
  } else {
    floatValue = parseFloat(results[1]);
    unit = results[4].toLowerCase();
  }

  return Math.floor(map[unit] * floatValue);
}

export default function xbytes(value: number | string, options: OPTIONS) {
  if (typeof value === 'string') {
    return parse(value, options);
  }

  if (typeof value === 'number') {
    return format(value, options);
  }

  return null;
}

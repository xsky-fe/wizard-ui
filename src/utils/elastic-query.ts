import compact from 'lodash/compact';
import isEmpty from 'lodash/isEmpty';

type ValueType = string | number;
type ArrType = {
  type: string
  value: ValueType
}
/**
 * asdf%20AND%20passive%3Dtrue => [{ type: 'text', value: 'asdf' }, { type: passive, value: 'true' }]
 */
function toArr(str?: string) {
  if (!str) return [];
  // 'a AND b AND type(D OR C) OR t'.split(reg)
  // => ["a", "b", "type(D OR C)", "t"]
  // eslint-disable-next-line
  const reg = / (?:AND|OR) (?![^\(]*\))/;
  const items = str.split(reg)

  return items.filter(item => item.trim()).map(item => {
    if (item.includes(':')) {
      let itemFormat = item;
      if (item.includes('!')) {
        itemFormat = item.replace(/!|\(|\)/g, '').replace(':', ':!');
      }
      const [type, ...rest] = itemFormat.split(':');
      return { type, value: rest.join(':') };
    } else {
      return { type: 'text', value: item };
    }
  });
}

/**
 * [{ type: 'text', value: 'asdf' }, { type: passive, value: 'true' }] => asdf%20AND%20passive%3Dtrue
 */
function toStr(arr: ArrType[]) {
  if (!(arr instanceof Array)) return '';
  const forward: ValueType[] = [];
  const reverse: ValueType[] = [];
  arr.forEach(({ type, value })  => {
    if (type === 'text') {
      forward.push(value);
    } else if (typeof value === 'string' && value.includes('!')) {
      return reverse.push(`(!(${type}:${value.replace(/^!/, '')}))`);
    } else {
      forward.push(`${type}:${value}`);
    }
    // ts config noImplicitReturns true scheck
    return false;
  });
  const items = compact([
    forward.join(' AND '),
    isEmpty(forward) ? reverse.join(' OR ') :
      isEmpty(reverse) ? '' : `(${reverse.join(' OR ')})`
  ])
  return items.join(' AND ');
}

export default {
  toStr,
  toArr,
};

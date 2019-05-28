import { HEADINGS } from '../constants/index';

export default (text) => {
  for (let key in HEADINGS) {
    if (HEADINGS[key] === text) {
      return key;
    }
  }
  return text;
}
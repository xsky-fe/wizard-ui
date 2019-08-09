// link: https://stackoverflow.com/questions/35969656/how-can-i-generate-the-opposite-color-according-to-current-color
function padZero(str, len) {
  len = len || 2;
  const zeros = new Array(len).join('0');
  return (zeros + str).slice(-len);
}
export default function invertColor(hex) {
  if (hex.indexOf('#') === 0) {
    hex = hex.slice(1);
  }

  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  if (hex.length !== 6) {
    throw new Error('Invalid HEX color.');
  }

  const invert = (hex, b, e) =>
    (255 - parseInt(hex.slice(b, e), 16)).toString(16);

  const r = invert(hex, 0, 2);
  const g = invert(hex, 2, 4);
  const b = invert(hex, 4, 6);

  return '#' + padZero(r) + padZero(g) + padZero(b);
}

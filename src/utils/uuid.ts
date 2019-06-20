/**
 * RFC4112 UUID v4
 * @return {String} - uuid string
 * @url http://stackoverflow.com/a/2117523/5383649
 */
export default function uuid(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

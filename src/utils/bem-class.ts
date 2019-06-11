export default function getBemClass(blockOrElement: string, modifiers: string[] = []) {
  if (typeof blockOrElement !== 'string' || blockOrElement === '') {
    return '';
  }
  if (typeof modifiers === 'string') {
    return [blockOrElement, [blockOrElement, modifiers].join('--')].join(' ');
  }
  if (modifiers instanceof Array) {
    const modifierClassNames = modifiers
      .filter(item => typeof item === 'string')
      .map(item => [blockOrElement, item].join('--'));
    return [blockOrElement, ...modifierClassNames].join(' ');
  }
  return blockOrElement;
}

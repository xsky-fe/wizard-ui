import * as iconJson from 'icomoon-icon';

export default function getIconsName () {
  return iconJson.icons.map (icon => ({
    name: icon.properties.name,
    tag: icon.icon.tags[0] || '暂无',
  }));
}
// 
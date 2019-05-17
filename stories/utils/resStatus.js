import { RES_STATUS } from '~/constants';
import lodash from 'lodash';

// 根据状态排序
export default lodash.sortBy(
  lodash.toPairs(RES_STATUS), lodash.property('1.0')
);
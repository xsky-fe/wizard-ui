// eslint-disable-next-line import/no-webpack-loader-syntax
import Badge from '!!raw-loader!../../../src/components/Badge';
import Default from './Default';
// eslint-disable-next-line import/no-webpack-loader-syntax
import DefaultCode from '!!raw-loader!./Default';

export default {
  default: {
    component: Badge,
    example: Default,
    code: DefaultCode,
  },
};

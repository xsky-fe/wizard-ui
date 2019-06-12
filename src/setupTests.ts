/**
 * https://github.com/xsky-fe/create-react-app-wizard/blob/master/packages/react-scripts/scripts/utils/createJestConfig.js#L28
 * https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#testing-components
 **/
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure ({
  adapter: new Adapter(),
})

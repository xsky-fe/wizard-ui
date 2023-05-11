import React from 'react';
import { storiesOf } from '@storybook/react';
import { FormControl, InputGroup, Button, DropdownButton } from '../src';

storiesOf('InputGroup', module)
  .add('default', () => (
    <InputGroup>
      <FormControl type="text" disabled />
      <Button>选择文件</Button>
    </InputGroup>
  ))
  .add('hasAddonText', () => (
    <div>
      <p>
        <div>后缀</div>
        <InputGroup>
          <FormControl type="text" />
          <InputGroup.Text>.com</InputGroup.Text>
        </InputGroup>
      </p>
      <p>
        <div>前缀</div>
        <InputGroup>
          <InputGroup.Text>http://</InputGroup.Text>
          <FormControl type="text" />
        </InputGroup>
      </p>
    </div>
  ))
  .add('hasDropdownButton', () => {
    const Demo = () => {
      const [isHour, setIsHour] = React.useState(true);
      const menu = [
        { eventKey: 'hour', onSelect: handleStepUnitChange, title: '小时' },
        { eventKey: 'minute', onSelect: handleStepUnitChange, title: '分钟' },
      ];
      function handleStepUnitChange(key: string) {
        setIsHour(key === 'hour' ? true : false);
      }
      return (
        <div style={{ width: '300px' }}>
          <InputGroup>
            <FormControl type="number" />
            <DropdownButton
              id="unit-dropdown"
              componentClass={InputGroup}
              title={isHour ? '小时' : '分钟'}
              menu={menu}
            />
          </InputGroup>
        </div>
      );
    };
    return <Demo />;
  });

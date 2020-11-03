import React from 'react';
import { storiesOf } from '@storybook/react';
import { FormControl, InputGroup, Button, DropdownButton } from '../src';

storiesOf('InputGroup', module)
  .add('default', () => (
    <InputGroup>
      <FormControl type="text" disabled />
      <InputGroup.Button>
        <Button>选择文件</Button>
      </InputGroup.Button>
    </InputGroup>
  ))
  .add('hasDropdownButton', () => {
    const Demo = () => {
      const [isHour, setIsHour] = React.useState(true);
      const menu = [
        { eventKey: 'hour', onSelect: handleStepUnitChange, title: '小时' },
        { eventKey: 'minute', onSelect: handleStepUnitChange, title: '分钟' },
      ]
      function handleStepUnitChange(key: string) {
        setIsHour(key === 'hour' ? true : false)
      }
      return (<div style={{ width: '300px' }}>
        <InputGroup>
          <FormControl type="number" />
          <DropdownButton
            id="unit-dropdown"
            componentClass={InputGroup.Button}
            title={isHour ? '小时' : '分钟'}
            menu={menu}
          />
        </InputGroup>
      </div>);
    }
    return <Demo />;
  })

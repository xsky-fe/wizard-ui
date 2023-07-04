import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { FormControl, InputGroup, Button, DropdownButton } from '../src';

const meta: Meta<typeof InputGroup> = {
  title: 'FORM/InputGroup',
  component: InputGroup,
};

export default meta;

type Story = StoryObj<typeof InputGroup>;

export const Basic: Story = {
  render: props => (
    <InputGroup>
      <FormControl type="text" disabled />
      <Button>选择文件</Button>
    </InputGroup>
  ),
};

export const HasAddon: Story = {
  render: props => (
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
  ),
};

export const HasDropdown: Story = {
  render: props => {
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
            as={InputGroup}
            title={isHour ? '小时' : '分钟'}
            menu={menu}

          />
        </InputGroup>
      </div>
    );
  },
};

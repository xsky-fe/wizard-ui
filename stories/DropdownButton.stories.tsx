import React from 'react';
import { storiesOf } from '@storybook/react';
import { DropdownButton } from '../src';
import DropdownButtonDemo from './demos/DropdownButtonDemo';
import { InputGroup } from 'react-bootstrap';

storiesOf('DropdownButton', module)
  .add('size', () => (
    <div>
      <DropdownButtonDemo />
      <DropdownButton id="a1" size="lg" title="lg" menu={['menu1', 'menu2', 'menu3']} />
      <DropdownButton id="a2" title="default" menu={['menu1', 'menu2', 'menu3']} />
      <DropdownButton id="a3" size="sm" title="sm" menu={['menu1', 'menu2', 'menu3']} />
      <DropdownButton id="a4" size="xs" title="xs" menu={['menu1', 'menu2', 'menu3']} />
    </div>
  ))
  .add('style', () => (
    <div>
      <DropdownButton
        id="a1"
        variant="default"
        title="default"
        menu={['menu1', 'menu2', 'menu3']}
      />
      <DropdownButton
        id="a2"
        variant="primary"
        title="primary"
        menu={['menu1', 'menu2', 'menu3']}
      />
      <DropdownButton
        id="a3"
        variant="success"
        title="success"
        menu={['menu1', 'menu2', 'menu3']}
      />
      <DropdownButton id="a4" variant="info" title="info" menu={['menu1', 'menu2', 'menu3']} />
      <DropdownButton
        id="a5"
        variant="warning"
        title="warning"
        menu={['menu1', 'menu2', 'menu3']}
      />
      <DropdownButton id="a6" variant="danger" title="danger" menu={['menu1', 'menu2', 'menu3']} />
    </div>
  ))
  .add('as', () => (
    <div>
      <DropdownButton
        id="a1"
        title="input group"
        as={InputGroup}
        menu={['menu1', 'menu2', 'menu3']}
      />
      <DropdownButton id="a2" title="normal" menu={['menu1', 'menu2', 'menu3']} />
    </div>
  ))
  .add('modifer', () => (
    <div>
      <DropdownButton
        id="a1"
        title="table toolbar"
        modifer="table-toolbar"
        menu={['menu1', 'menu2', 'menu3']}
      />
      <DropdownButton id="a2" title="normal" menu={['menu1', 'menu2', 'menu3']} />
    </div>
  ))
  .add('menu', () => (
    <div>
      <DropdownButton id="a1" title="simple menu" menu={['menu1', 'menu2', 'menu3']} />
      <DropdownButton
        id="a2"
        title="complex menu"
        menu={[
          { title: 'data-action', 'data-action': 'update' },
          { title: 'eventKey', eventKey: 'delete' },
        ]}
      />
      <DropdownButton
        id="a3"
        title="sub menu"
        menu={[
          { key: 'menu1', title: 'menu1' },
          { key: 'menu2', title: 'menu2', children: ['sub menu1', 'sub menu2'] },
          { key: 'menu3', title: 'menu3' },
        ]}
      />
      <DropdownButton id="a4" title="children" children={<div>customized dropdown menu</div>} />
      <DropdownButton
        id="a5"
        title="menu"
        menu={[
          {
            key: 'menu1',
            title: 'menu1',
            disabled: true,
            toolTip: { label: 'menu1', children: 'Not allow to operate' },
          },
          {
            key: 'menu2',
            title: 'menu2',
            disabled: true,
            toolTip: { label: 'menu1', children: 'Not allow to operate', placement: 'top' },
          },
        ]}
      />
    </div>
  ))
  .add('disabled', () => (
    <div>
      <DropdownButton id="a1" title="disabled" disabled menu={['menu1', 'menu2', 'menu3']} />
      <DropdownButton id="a2" title="normal" menu={['menu1', 'menu2', 'menu3']} />
    </div>
  ))
  .add('dropup', () => (
    <div style={{ paddingTop: '160px' }}>
      <DropdownButton id="a1" title="dropup" drop="up" menu={['menu1', 'menu2', 'menu3']} />
      <DropdownButton id="a2" title="normal" menu={['menu1', 'menu2', 'menu3']} />
    </div>
  ))
  .add('noCaret', () => (
    <div>
      <DropdownButton id="a1" title="noCaret" noCaret menu={['menu1', 'menu2', 'menu3']} />
      <DropdownButton id="a2" title="normal" menu={['menu1', 'menu2', 'menu3']} />
    </div>
  ))
  .add('onSelect', () => (
    <div>
      <DropdownButton
        id="a1"
        title="onSelect"
        onSelect={(eventKey: any) => alert(`${eventKey} clicked`)}
        menu={[
          { title: 'menu1', eventKey: 'event1' },
          { title: 'menu2', eventKey: 'event2' },
          { title: 'menu3', eventKey: 'event3' },
        ]}
      />
    </div>
  ))
  .add('show', () => (
    <div>
      <DropdownButton
        id="a1"
        title="show"
        show
        onToggle={() => {}}
        menu={['menu1', 'menu2', 'menu3']}
      />
      <DropdownButton id="a2" title="normal" menu={['menu1', 'menu2', 'menu3']} />
      <DropdownButton
        id="a3"
        title="close"
        show={false}
        onToggle={() => {}}
        menu={['menu1', 'menu2', 'menu3']}
      />
    </div>
  ))
  .add('onToggle', () => {
    const ToggleDropdownButton = () => {
      const [visible, updateVisible] = React.useState(true);
      return (
        <div>
          <DropdownButton
            id="a1"
            title="onToggle"
            show={visible}
            onToggle={() => updateVisible(!visible)}
            menu={['menu1', 'menu2', 'menu3']}
          />
        </div>
      );
    };
    return <ToggleDropdownButton />;
  })
  .add('align', () => (
    <div>
      <DropdownButton id="a2" title="normal" menu={['menu1', 'menu2', 'menu3']} />
      <DropdownButton id="a1" title="align" align="end" menu={['menu1', 'menu2', 'menu3']} />
    </div>
  ))
  .add('title', () => (
    <div>
      <DropdownButton id="a1" title="title1" menu={['menu1', 'menu2', 'menu3']} />
      <DropdownButton id="a2" title="title2" menu={['menu1', 'menu2', 'menu3']} />
    </div>
  ));

import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { NotificationList } from '../src';
import { Button } from 'react-bootstrap';
import { Map as MapType, NotificationItem, NotificationItemStatus } from '../src/interface';

const meta: Meta<typeof NotificationList> = {
  title: 'DATA SHOW/NotificationList',
  component: NotificationList,
};

export default meta;

const STATUS = ['success', 'info', 'process', 'warning', 'danger'];

const NotificationListDefault = (props: { showTitle?: boolean; autoClose?: boolean }) => {
  const [lists, setLists] = React.useState(() => {
    const dns = new Map() as MapType<string, any>;
    const sns = new Map() as MapType<string, any>;
    dns.set('status', sns);
    return dns;
  });
  const setNotification = (s: NotificationItemStatus) => {
    const item: NotificationItem = { id: s, status: s, text: `${s} text message !` };
    if (props.showTitle) {
      item.title = <h3>{s} title</h3>;
    }
    lists.get('status').set(s, item);
    const newLists = new Map(lists);
    setLists(newLists);
  };
  const deleteNotification = (id: NotificationItemStatus) => {
    lists.get('status').delete(id);
    const newLists = new Map(lists);
    setLists(newLists);
  };
  return (
    <div>
      <div>
        {STATUS.map((s: string) => (
          <Button
            key={s}
            style={{ marginRight: '10px' }}
            onClick={() => setNotification(s as NotificationItemStatus)}
            disabled={lists.get('status').has(s)}
          >
            {s}
          </Button>
        ))}
      </div>
      <NotificationList
        notifications={lists}
        onDismiss={deleteNotification}
        autoClose={props.autoClose}
      />
    </div>
  );
};

type Story = StoryObj<typeof NotificationList>;

export const Basic: Story = {
  render: props => <NotificationListDefault/>
};

export const WithTitle: Story = {
  render: props => <NotificationListDefault showTitle />,
};

export const AutoClose: Story = {
  render: props => <NotificationListDefault autoClose />,
};

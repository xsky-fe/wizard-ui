import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Pagination as BsPagination } from '../src';
import { Pagination } from 'react-bootstrap';

const meta: Meta = {
  title: 'COMPONENTS/Pagination',
  component: BsPagination,
  argTypes: {
    maxButtons: {
      table: {
        defaultValue: { summary: 5 },
      },
    },
  },
};

export default meta;

const Demo = ({ size }: { size: 'sm' | 'lg' }) => {
  const items: number[] = Array.from({ length: 10 }, (_, i) => i + 1);
  const firstPage = 1;
  const lastPage = 10;
  const [active, setActive] = React.useState(2);
  const handleChangePage = (page: number) => {
    setActive(page);
  };
  return (
    <Pagination size={size}>
      <Pagination.First
        disabled={active === firstPage}
        onClick={() => handleChangePage(firstPage)}
      />
      <Pagination.Prev
        disabled={active === firstPage}
        onClick={() => handleChangePage(active - 1)}
      />
      {items.map(page => (
        <Pagination.Item key={page} active={page === active} onClick={() => handleChangePage(page)}>
          {page}
        </Pagination.Item>
      ))}
      <Pagination.Next
        disabled={active === lastPage}
        onClick={() => handleChangePage(active + 1)}
      />
      <Pagination.Last disabled={active === lastPage} onClick={() => handleChangePage(lastPage)} />
    </Pagination>
  );
};

export const Basic: Story = {
  render: props => (
    <BsPagination
      prev={false}
      next={true}
      first={false}
      last={false}
      maxButtons={6}
      items={6}
      activePage={1}
      onSelectChange={() => {}}
      size="sm"
      className="Table__pagination-pagination"
    />
  ),
};

type Story = StoryObj<typeof Pagination>;

export const Size: Story = {
  render: props => (
    <>
      <Demo size="sm" />
      <Demo size="lg" />
    </>
  ),
};

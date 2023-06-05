import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Pagination as BsPagination } from '../src';
import { Pagination } from 'react-bootstrap';

storiesOf('COMPONENTS | Pagination', module).add('default', () => {
  const Demo = ({ size }: { size: 'sm' | 'lg' }) => {
    const items: number[] = Array.from({ length: 10 }, (_, i) => i + 1);
    const firstPage = 1;
    const lastPage = 10;
    const [active, setActive] = useState(2);
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
          <Pagination.Item
            key={page}
            active={page === active}
            onClick={() => handleChangePage(page)}
          >
            {page}
          </Pagination.Item>
        ))}
        <Pagination.Next
          disabled={active === lastPage}
          onClick={() => handleChangePage(active + 1)}
        />
        <Pagination.Last
          disabled={active === lastPage}
          onClick={() => handleChangePage(lastPage)}
        />
      </Pagination>
    );
  };
  return (
    <>
      <p>
        <h3>size: sm（default）</h3>
        <Demo size="sm" />
      </p>
      <p>
        <h3>size: lg</h3>
        <Demo size="lg" />
      </p>
      <p>
        <BsPagination
          prev={false}
          next={true}
          first={false}
          last={false}
          maxButtons={5}
          items={2}
          activePage={1}
          onSelectChange={() => {}}
          size="sm"
          className="Table__pagination-pagination"
        />
      </p>
    </>
  );
});

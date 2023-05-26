import React from 'react';
import { Pagination as BSPagination } from 'react-bootstrap';
import { PaginationProps } from '../../interface';

export default class Pagination extends React.Component<PaginationProps> {
  initPageItems = () => {
    const { items, activePage, maxButtons = 5, onSelectChange } = this.props;
    const pageItems: JSX.Element[] = [];
    let startPage;
    let endPage;
    if (maxButtons < items) {
      startPage = Math.max(
        Math.min(activePage - Math.floor(maxButtons / 2), items - maxButtons + 1),
        1,
      );
      endPage = startPage + maxButtons - 1;
    } else {
      startPage = 1;
      endPage = items;
    }
    for (let number = startPage; number <= endPage; number++) {
      pageItems.push(
        <BSPagination.Item
          key={number}
          active={number === activePage}
          onClick={() => onSelectChange(number)}
        >
          {number}
        </BSPagination.Item>,
      );
    }
    return pageItems;
  };

  render() {
    const {
      first,
      prev,
      next,
      last,
      activePage,
      items,
      maxButtons,
      onSelectChange,
      ...restProps
    } = this.props;
    const pageItems = this.initPageItems();

    return (
      <BSPagination {...restProps}>
        {first && <BSPagination.First onClick={() => onSelectChange(1)} />}
        {prev && <BSPagination.Prev onClick={() => onSelectChange(activePage - 1)} />}
        {pageItems}
        {next && <BSPagination.Next onClick={() => onSelectChange(activePage + 1)} />}
        {last && <BSPagination.Last onClick={() => onSelectChange(items)} />}
      </BSPagination>
    );
  }
}

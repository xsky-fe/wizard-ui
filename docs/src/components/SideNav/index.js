import React from 'react';
import { Navbar } from 'react-bootstrap';
import Layout  from './Layout';
import Component from './Component';
import useWindowWidth from '../../utils/hooks/get-window-width';

export default () => {
  const width = useWindowWidth();
  if (width > 768) {
    return (
      <Navbar fluid className="Sidebar">
        <Layout />
        <Component />
      </Navbar>
    )
  }
}

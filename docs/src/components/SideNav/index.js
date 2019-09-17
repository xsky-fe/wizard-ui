import React from 'react';
import { Navbar } from 'react-bootstrap';
import Layout  from './Layout';
import Component from './Component';
import useWindowWidth from '../../utils/hooks/get-window-width';

export default () => useWindowWidth() > 768 ? (
  <Navbar fluid className="Sidebar">
    <Layout/>
    <Component/>
  </Navbar>
) : null;

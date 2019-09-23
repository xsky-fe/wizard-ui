import React from 'react';
import { Navbar } from 'wizard-ui';
import Layout  from './Layout';
import Component from './Component';

export default () => (
  <Navbar fluid className="Sidebar">
    <Layout />
    <Component />
  </Navbar>
)

import React from 'react';
import { Navbar } from 'wizard-ui';
import Layout  from './Layout';
import DesignPrinciple from './DesignPrinciple';
import DesignStyle from './DesignStyle';
import Guide from './Guide';
import Navigation from './Navigation';
import DataEntry from './DataEntry';
import DataDisplay from './DataDisplay';
import Feedback from './Feedback';
import Other from './Other';

export default () => (
  <Navbar fluid className="Sidebar">
    <DesignPrinciple/>
    <Layout />
    <DesignStyle/>
    <Guide/>
    <Navigation/>
    <DataEntry/>
    <DataDisplay/>
    <Feedback />
    <Other/>
  </Navbar>
)

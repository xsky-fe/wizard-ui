import React from 'react';
import Tooltip from '../../src/components/Tooltip';

const StrangeTooltip = () => {

  return (
    <Tooltip
      placement="bottom"
      label={<span>hover 试试</span>}
      children={'hello'}
      width='200px'
      expandHotZone
    />
  );
};

export default StrangeTooltip;

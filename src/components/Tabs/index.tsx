import * as React from 'react';
import PropTypes from 'prop-types';
import { Tabs as BsTabs, Tab, Panel } from 'react-bootstrap';
import { getBemClass } from '../../utils';
import { TabsProps } from '../../interface';
import './style.scss';

const Tabs: React.SFC<TabsProps> = props => {
  const { tabs, size, eventKeyName, direction, ...restProps } = props;
  return (
    <BsTabs className={getBemClass('Tabs', [size, direction])} {...restProps} id="Tabs">
      {tabs.map((tab, idx) => (
        <Tab
          key={eventKeyName ? tab[eventKeyName] : idx}
          eventKey={eventKeyName ? tab[eventKeyName] : idx}
          title={tab.title}
        >
          {tab.children && <Panel className="Tabs__Body">{tab.children}</Panel>}
        </Tab>
      ))}
    </BsTabs>
  );
};

Tabs.propTypes = {
  /**
   * 切换面板回调
   **/
  onSelect: PropTypes.func,
  /**
   * 包含选项卡的title、key、面板内容
   **/
  tabs: PropTypes.array.isRequired,
  /**
   * 大小，提供默认和 small 两种大小
   **/
  size: PropTypes.oneOf(['small']),
  /**
   * tab位置，默认靠左，提供默认和 right 两种位置
   **/
  direction: PropTypes.oneOf(['right']),
  /**
   * key的名称可自定义
   **/
  eventKeyName: PropTypes.string,
};

Tabs.defaultProps = {
  eventKeyName: 'key',
};

export default Tabs;

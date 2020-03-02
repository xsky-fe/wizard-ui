import * as React from 'react';
import PropTypes from 'prop-types';
import { Tab, Panel, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';
import { getBemClass } from '../../utils';
import { TabsProps } from '../../interface';
import './style.scss';

const Tabs: React.FC<TabsProps> = props => {
  const { tabs, size, eventKeyName, direction, limitNum, useAnimation, ...restProps } = props;

  const [tabKey, setKeyValue] = React.useState<string>(tabs[0].key);
  const [keyTitle, setKeyTitleValue] = React.useState<string>('更多');
  const tabsFrontList = tabs.slice(0, Number(limitNum))
  const tabsLastList = tabs.slice(Number(limitNum), tabs.length)
  const showMore = tabsLastList.length == 0 ? false : true;

  React.useEffect(() => {
    tabs.some((v: any, i: number): any => {
      if (v.key == tabKey) {
        let index: number = i;
        if (index < Number(limitNum)) {
          setKeyTitleValue('更多');
        } else {
          setKeyTitleValue(v.title)
        }
      }
    })
  }, [tabKey])

  return (
    <div className={getBemClass('Tabs', [size, direction])} >
      <Tab.Container id="tabs-with-dropdown" onSelect={(activeKey: any) => setKeyValue(activeKey)} defaultActiveKey={tabs[0]['key']}  {...restProps}>
        <div className="clearfix ">
          <Nav bsStyle="tabs" >
            {tabsFrontList.map((tab, idx) => (
              <NavItem key={eventKeyName ? tab[eventKeyName] : idx} eventKey={eventKeyName ? tab[eventKeyName] : idx}  >{tab.title}</NavItem>
            ))}
            {showMore && <NavDropdown title={keyTitle} id="nav-dropdown-within-tab">
              {tabsLastList.map((tab, idx) => (
                <MenuItem key={eventKeyName ? tab[eventKeyName] : idx} eventKey={eventKeyName ? tab[eventKeyName] : idx + Number(limitNum)}  >{tab.title}</MenuItem>
              ))}
            </NavDropdown>}
          </Nav>
          <Tab.Content animation={useAnimation}>
            {tabs.map((tab, idx) => (
              <Tab.Pane key={eventKeyName ? tab[eventKeyName] : idx} eventKey={eventKeyName ? tab[eventKeyName] : idx}>
                {tab.children && <Panel className="Tabs__Body">{tab.children}</Panel>}
              </Tab.Pane>
            ))}
          </Tab.Content>
        </div>
      </Tab.Container>
    </div>
  )


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
  /**
 * 展示一行中可见的tab个数，其他tab数放到下拉栏目中
 **/
  limitNum: PropTypes.number,
  /**
 * 内容框是否使用动画过度效果
 **/
  useAnimation: PropTypes.bool,

};

Tabs.defaultProps = {
  eventKeyName: 'key',
  id: 'Tabs',
  limitNum: 5,
  useAnimation: false,
};

export default Tabs;

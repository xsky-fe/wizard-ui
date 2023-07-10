import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import lodash from 'lodash';
import { Tab, Card, NavDropdown, Dropdown, Nav, NavItem, NavLink } from 'react-bootstrap';
import { getBemClass } from '../../utils';
import { TabsProps } from '../../interface';
import './style.scss';
import lang from '../../locale/language';

const MORE_TITLE = lang().MORE_TITLE;

const Tabs: React.FC<TabsProps> = props => {
  const {
    tabs,
    size,
    type,
    eventKeyName = 'key',
    direction,
    limitNum = 5,
    unmountOnExit,
    transition,
    mountOnEnter,
    className,
    ...restProps
  } = props;

  const [keyTitle, setKeyTitleValue] = React.useState<string>(MORE_TITLE);
  const tabsFrontList = tabs.slice(0, limitNum);
  const tabsLastList = tabs.slice(limitNum, tabs.length);
  const lastActiveKeys = tabsLastList.map((list: any) => list[eventKeyName]);
  const isActiveLastTab = lastActiveKeys.includes(restProps.activeKey);
  const showMore = tabsLastList.length !== 0;

  React.useEffect(() => {
    let activeKey = restProps.activeKey ? restProps.activeKey : '';
    let k = 0;
    let isFind = false;
    while (k < tabs.length && !isFind) {
      let cTab = tabs[k];
      if (cTab[eventKeyName] === activeKey && k >= limitNum) {
        isFind = true;
        setKeyTitleValue(cTab.title);
      }
      k++;
    }
    if (!isFind && keyTitle !== MORE_TITLE) {
      setKeyTitleValue(MORE_TITLE);
    }
  }, [restProps.activeKey ? restProps.activeKey : '']);

  return (
    <div className={classNames(className, getBemClass('Tabs', [size, direction, type]))}>
      <Tab.Container
        id="tabs-with-dropdown"
        defaultActiveKey={lodash.get(tabs, `0.${eventKeyName}`, '')}
        mountOnEnter={mountOnEnter}
        unmountOnExit={unmountOnExit}
        transition={transition}
        {...(restProps as any)}
      >
        <div id="Tabs">
          <Nav variant="tabs" as="ul">
            {tabsFrontList.map((tab, idx) => (
              <NavItem
                title={typeof tab['title'] === 'string' ? tab['title'] : undefined}
                key={eventKeyName ? tab[eventKeyName] : idx}
                as="li"
                // eventKey={eventKeyName ? tab[eventKeyName] : idx}
              >
                <NavLink eventKey={eventKeyName ? tab[eventKeyName] : idx}>{tab.title}</NavLink>
              </NavItem>
            ))}
            {showMore && (
              <NavDropdown
                as="li"
                title={keyTitle}
                id=""
                className={`Tabs-nav-dropdown-within-tab ${isActiveLastTab ? 'active' : ''}`}
              >
                {tabsLastList.map((tab, idx) => (
                  <Dropdown.Item
                    id={
                      eventKeyName ? 'Tabs-tab-' + tab[eventKeyName] : 'Tabs-tab-' + idx + limitNum
                    }
                    key={eventKeyName ? tab[eventKeyName] : idx}
                    eventKey={eventKeyName ? tab[eventKeyName] : idx + limitNum}
                  >
                    {tab.title}
                  </Dropdown.Item>
                ))}
              </NavDropdown>
            )}
          </Nav>
          <Tab.Content>
            {tabs.map((tab, idx) => (
              <Tab.Pane
                key={eventKeyName ? tab[eventKeyName] : idx}
                eventKey={eventKeyName ? tab[eventKeyName] : idx}
              >
                {tab.children && (
                  <Card className="Tabs__Body panel">
                    <Card.Body className="panel-body"> {tab.children}</Card.Body>
                  </Card>
                )}
              </Tab.Pane>
            ))}
          </Tab.Content>
        </div>
      </Tab.Container>
    </div>
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
   * tab类型，提供默认和 二级 两种
   */
  type: PropTypes.oneOf(['secondary']),
  /**
   * key的名称可自定义
   **/
  eventKeyName: PropTypes.string,
  /**
   * 展示一行中可见的tab个数，其他tab数放到下拉栏目中
   **/
  limitNum: PropTypes.number,
  /**
   * 其他没有被选中的tab-pan是否隐藏，默认隐藏，提升渲染性能
   **/
  unmountOnExit: PropTypes.bool,
  /**
   * 切换内容是否使用动画过度效果
   **/
  transition: PropTypes.bool,
};

Tabs.defaultProps = {
  eventKeyName: 'key',
  id: 'Tabs',
  limitNum: 5,
  transition: false,
  mountOnEnter: false,
  unmountOnExit: true,
};

export default Tabs;

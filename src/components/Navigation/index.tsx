import * as React from 'react';
import * as PropTypes from 'prop-types';
import cn from 'classnames';
import { getBemClass, uuid } from '../../utils';
import { Tooltip, OverlayTrigger, Panel } from 'react-bootstrap';
import { NavigationProps, NavigationGroup } from '../../interface';
import { xor, toPairs } from 'lodash';
import './style.scss';

function NavItemText(props: NavigationGroup) {
  const { title, icon, isFirst } = props;

  return (
    <div className={getBemClass('Navigation__item', isFirst && 'first')}>
      <div className="Navigation__link">
        {icon && <span className={`icon icon-${icon}`} />}
        <span className="Navigation__item__title">{title}</span>
      </div>
    </div>
  );
}

function NavItemNoText(props: any) {
  const tooltip = (
    <Tooltip id={`tooltip-${uuid()}`} className="Navigation__tooltip">
      {props.title}
    </Tooltip>
  );
  return (
    <OverlayTrigger placement="right" overlay={tooltip}>
      {/*
        OverlayTrigger需要在children中找到确定的html标签做响应
        JSX形式 写法无法满足要求
        Wrong modal: <NavItemText {...props}/>
      */}
      {NavItemText(props)}
    </OverlayTrigger>
  );
}

export default class Navigation extends React.Component<NavigationProps, any> {
  static propTypes = {
    /**
     * 导航栏渲染数据
     **/
    navGroups: PropTypes.object.isRequired,
    /**
     * 是否折叠
     **/
    toggled: PropTypes.bool,
    /**
     * Logo子元素标签文本
     **/
    logo: PropTypes.element,
  };
  constructor(props: NavigationProps) {
    super(props);
    this.togglePanel = this.togglePanel.bind(this);
    this.state = {
      expanded: [],
    };
  }
  togglePanel(activeKey: any) {
    this.setState({ expanded: xor(this.state.expanded, [activeKey]) });
  }
  renderPanelHeader(title: string, expanded: boolean) {
    const { toggled } = this.props;
    const tooltip = (
      <Tooltip id={`tooltip-${uuid()}`} className="Navigation__tooltip">
        {title}
      </Tooltip>
    );
    const header = (
      <div>
        <span className="panel-title__title">{title}</span>
        <span className={`panel-title__icon icon icon-${expanded ? 'minus' : 'plus'}`} />
      </div>
    );
    return toggled ? (
      <OverlayTrigger placement="right" overlay={tooltip}>
        {header}
      </OverlayTrigger>
    ) : (
      header
    );
  }
  render() {
    const { navGroups, toggled, logo } = this.props;
    const { expanded } = this.state;
    const NavItem = toggled ? NavItemNoText : NavItemText;
    return (
      <nav
        className={cn([
          getBemClass('wizard-bar', ['dark', 'vertical']),
          getBemClass('Navigation', [logo && 'logo', toggled && 'toggled']),
        ])}
      >
        {logo && <div className="Navigation__logo">{logo}</div>}
        <div className="Navigation__list">
          {toPairs(navGroups).map(([key, group]) => {
            if (!group.children) {
              return <NavItem key={key} {...group} />;
            }
            return (
              // @ts-ignore
              <Panel
                key={key}
                collapsible
                header={this.renderPanelHeader(group.title, expanded.includes(key))}
                eventKey={key}
                onSelect={this.togglePanel}
                expanded={expanded.includes(key)}
              >
                {group.children.map((item, index) => (
                  <NavItem key={index} {...item} />
                ))}
              </Panel>
            );
          })}
        </div>
      </nav>
    );
  }
}

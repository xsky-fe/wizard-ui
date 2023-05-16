import * as React from 'react';
import * as PropTypes from 'prop-types';
import cn from 'classnames';
import { getBemClass } from '../../utils';
import Panel from '../Panel';
import { NavigationProps, NavigationGroup } from '../../interface';
import Icon from '../Icon';
import Tooltip from '../Tooltip';
import xor from 'lodash/xor';
import toPairs from 'lodash/toPairs';
import './style.scss';

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
    logo: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    /**
     * 默认展开项
     **/
    expandedKeys: PropTypes.array,
  };
  static defaultProps = {
    expandedKeys: [],
  };
  constructor(props: NavigationProps) {
    super(props);
    this.togglePanel = this.togglePanel.bind(this);
    this.state = {
      expanded: props.expandedKeys || [],
    };
  }
  togglePanel(activeKey: any) {
    this.setState({ expanded: xor(this.state.expanded, [activeKey]) });
  }
  renderPanelHeader(title: React.ReactNode, expanded: boolean) {
    const { toggled } = this.props;
    const header = (
      <div>
        <span className="panel-title__title">{title}</span>
        <Icon type={expanded ? 'minus' : 'plus'} className="panel-title__icon" />
      </div>
    );
    return toggled ? (
      <div>
        <Tooltip
          placement="right"
          className="Navigation__tooltip"
          icon={expanded ? 'minus' : 'plus'}
          iconClass="panel-title__icon"
        >
          {title}
        </Tooltip>
      </div>
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
                // expanded={expanded.includes(key)}
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

function NavItemText(props: NavigationGroup) {
  const { toggled, title, icon, component, isFirst } = props;

  const text = (
    <>
      {icon && <Icon type={icon} />}
      {!toggled && title}
    </>
  );

  return (
    <div className={getBemClass('Navigation__item', isFirst && 'first')}>
      <div className="Navigation__link">
        {component ? (
          React.createElement(component, {
            children: text,
          })
        ) : (
          <div className="Navigation__item__title">{text}</div>
        )}
      </div>
    </div>
  );
}

function NavItemNoText(props: any) {
  return (
    <Tooltip
      placement="right"
      className="Navigation__tooltip"
      label={NavItemText({ ...props, toggled: true })}
    >
      {props.title}
    </Tooltip>
  );
}

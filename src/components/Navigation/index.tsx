import './style.scss';
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Link } from 'react-router';
import cn from 'classnames';
import { getBemClass, uuid } from '../../utils';
import { Tooltip, OverlayTrigger, Panel } from 'react-bootstrap';
import { NavigationProps } from '../../interface';
import lodash from 'lodash';

// interface NavigationState {
//   expanded: string
// }

function NavItemText(props: any) {
  const { path, title, icon, isFirst, onlyActiveOnIndex } = props;
  // 特殊的router path需要单独处理
  // 比如 '/dashboard/event-logs'  ==>  '/dashboard/action-logs'
  // '/dashboard/alert-groups' , 'alert-rules'    ==> '/dashboard/alerts'
  // Link to属性，pathMap存在对应Key，并且path匹配对应key的value，成立
  let linkRes;
  let wLocation;
  if (typeof window !== 'undefined') {
    wLocation = window.location;
    linkRes = wLocation.pathname.split('/')[2];
  }
  const pathname = linkRes

  const pathMap = {
    alertGroups: 'alerts',
    alertRules: 'alerts',
    eventLogs: 'action-logs',
    osGateways: 's3-load-balancer-groups',
    fsSnapshots: 'fs-folders',
    blockSnapshots: 'block-volumes',
    blockVolumeGroupSnapshots: 'block-volume-groups',
    blockVolumeMigrationJobs: 'block-volumes',
    topologies: 'topology-networks',
    dpBlockReplicationPolicies: 'dp-block-snapshot-policies',
    dpBlockBackupPolicies: 'dp-block-snapshot-policies',
    dpFsSnapshotPolicies: 'dp-block-snapshot-policies',
    dpFsSnapshotJobs: 'dp-block-snapshot-jobs',
    dpBlockBackupJobs: 'dp-block-snapshot-jobs',
    fsUserGroups: 'fs-users',
    fsClientGroups: 'fs-clients',
    s3LoadBalancers: 's3-load-balancer-groups',
    fsNfsShares: 'fs-smb-shares',
    fsFtpShares: 'fs-smb-shares',
    osSearchEngines: 'os-objects',
  };

  return (
    <div className={getBemClass('Navigation__item', isFirst && 'first')}>
      <Link
        to={
          pathname && pathMap[pathname] && path.match(pathMap[pathname])
            ? `dashboard/${linkRes}${wLocation && wLocation.search}`
            : path
        }
        className="Navigation__link"
        activeClassName="Navigation__link--active"
        onlyActiveOnIndex={!!onlyActiveOnIndex}
      >
        {icon && <span className={`icon icon-${icon}`} />}
        <span className="Navigation__item__title">{title}</span>
      </Link>
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

/**
 * 获取某个pathname需要展开的Panel编号，
 * 在下面应用的时候的主要目的，是为了保证页面初始化，和切换的时候，
 * pathname对应的导航的分组处于展开状态。
 * 避免用户不知道自己现在在哪里。
 */
const panelKeyPathnamesMap = {
  '1': [
    'block-volumes',
    'block-snapshots',
    'block-volume-migration-jobs',
    'block-volume-backup-rules',
    'client-groups',
    'access-paths',
    'block-volume-groups',
    'block-volume-group-snapshots',
  ],
  '2': [
    'fs-users',
    'fs-user-groups',
    'fs-clients',
    'fs-client-groups',
    'fs-snapshots',
    'fs-folders',
    'fs-smb-shares',
    'fs-nfs-shares',
    'fs-ftp-shares',
    'fs-gateway-groups',
  ],
  '3': [
    'os-users',
    'os-policies',
    'os-buckets',
    'os-gateways',
    'nfs-gateways',
    's3-load-balancers',
    's3-load-balancer-groups',
    'os-zones',
    'os-objects',
    'os-search-engines',
  ],
  '4': [
    'dp-sites',
    'dp-gateways',
    'dp-block-snapshot-policies',
    'dp-block-backup-policies',
    'dp-block-replication-policies',
    'dp-fs-snapshot-policies',
    'dp-block-backup-jobs',
    'dp-block-snapshot-jobs',
    'dp-fs-snapshot-jobs',
    'dp-block-snapshot-recovery-jobs',
  ],
  '5': ['cloud-platforms', 'cloud-instances'],
  '6': ['pools', 'topology', 'topology-networks', 'hosts', 'osds', 'caches'],
  '7': [
    'alerts',
    'alert-groups',
    'alert-rules',
    'action-logs',
    'system-logs',
    'email-groups',
    'users',
  ],
};
function getPanelExpandKey(pathname: string) {
  return lodash.findKey(panelKeyPathnamesMap, arr =>
    arr.some(item => pathname.split('/')[1] === item),
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
    /**
     * 当前location对象，判断初始展开选中状态
     **/
    location: PropTypes.object,
  }
  static defaultProps = {
    location: {
      pathname: '/'
    },
  }
  constructor(props: NavigationProps) {
    super(props);
    this.togglePanel = this.togglePanel.bind(this);
    this.state = {
      expanded: [getPanelExpandKey(lodash.get(props, 'location.pathname'))],
    };
  }
  UNSAFE_componentWillReceiveProps(nextProps: NavigationProps) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      this.setState({
        expanded: lodash.union(this.state.expanded, [
          getPanelExpandKey(nextProps.location.pathname),
        ]),
      });
    }
  }
  togglePanel(activeKey: any) {
    this.setState({ expanded: lodash.xor(this.state.expanded, [activeKey]) });
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
      <OverlayTrigger placement="right" overlay={tooltip} >
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
          <div style={{ borderBottom: '1px solid #242a4a' }}>
            <NavItem path="dashboard" title={'概览'} icon="overview" onlyActiveOnIndex isFirst />
          </div>
          {lodash.toPairs(navGroups).map(([key, group], index) => {
            if (key === 'overview' || key === 'trash') {
              return undefined;
            }
            const panelKey = group.panelKey;
            return (
              // @ts-ignore
              <Panel
                key={index}
                collapsible
                header={this.renderPanelHeader(group.title, expanded.includes(panelKey))}
                eventKey={panelKey}
                onSelect={this.togglePanel}
                expanded={expanded.includes(panelKey)}
              >
                {group.children.map((item, index) => (
                  <NavItem key={index} {...item} />
                ))}
              </Panel>
            )
          })}
        </div>
      </nav>
    );
  }
}

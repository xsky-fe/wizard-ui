import React from 'react';
import PropTypes from 'prop-types';
import { Panel, FormControl, Glyphicon } from 'react-bootstrap';
import { get, debounce, concat, isEmpty } from 'lodash';
import classNames from 'classnames';
import VirtualList from '../VirtualList';
import { elasticQuery } from '../../utils';
import { Query, VirtualRowArgs, VirtualSelectBoxDefaultProps, VirtualSelectBoxProps, VirtualSelectBoxState } from '../../interface';
import Icon from '../Icon';
import './style.scss';

const limit = 30;
const maxHeight = 210;
const defaultProps: VirtualSelectBoxDefaultProps = {
  rowHeight: 30,
  isBtn: true,
  disabled: false,
  placeholder: '请选择',
  query: {},
}

class VirtualSelectBox extends React.Component<VirtualSelectBoxProps, VirtualSelectBoxState> {
  static propTypes = {
    /**
     * 选中资源项
     */
    item: PropTypes.object.isRequired,
    /**
     * 资源名称（驼峰格式）
     */
    resName: PropTypes.string.isRequired,
    /**
     * 	获取异步数据的函数
     */
    fetchData: PropTypes.func.isRequired,
    /**
     * 选择函数
     */
    onSelect: PropTypes.func,
    /**
     * 是否禁用操作
     */
    disabled: PropTypes.bool,
    /**
     * 每项 select 的行高
     */
    rowHeight: PropTypes.number,
    /**
     * 格式化 onSelect 输出数据
     */
    formatOption: PropTypes.func,
    /**
     * 是否使用 button 格式 UI
     */
    isBtn: PropTypes.bool,
    /**
     * 默认展示文案
     */
    placeholder: PropTypes.string,
    /**
     * async query
     */
    query: PropTypes.object,
    /**
     * 格式化 search 时需要特殊处理的值
     */
    formatSearchKeys: PropTypes.func,
    clear: PropTypes.bool,
  };
  static defaultProps = defaultProps;
  debounceFetch: () => Promise<void>;
  isMount: boolean;
  wrapper: React.RefObject<HTMLDivElement>;
  constructor(props: VirtualSelectBoxProps) {
    super(props);
    this.debounceFetch = debounce(this.fetchResource, 200).bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.renderLabel = this.renderLabel.bind(this);
    this.wrapper = React.createRef();
    this.isMount = true;
    this.state = {
      search: '',
      items: [],
      query: {
        ...props.query,
        limit,
        offset: 0,
      },
      isFetching: false,
      totalCount: 0,
      isOpen: false,
      isReloading: false,
    };
  }

  componentDidMount() {
    this.toggleClickOutsideEvent(true);
    this.handleQueryChange(this.state.query);
  }

  componentWillUnmount() {
    this.isMount = false;
    this.toggleClickOutsideEvent(false);
  }

  handleQueryChange = async (query: Query) => {
    this.setState({ isFetching: true });
    const { fetchData, resName, formatSearchKeys } = this.props;
    let extraQuery = {};
    let resNamePlural = `${resName}s`;
    if (formatSearchKeys) {
      const keys = formatSearchKeys(resName);
      extraQuery = keys.query;
      resNamePlural = keys.resNamePlural;
    }
    const actionResult = await fetchData({ ...extraQuery, ...query });
    if (!this.isMount) {
      return;
    }
    if (actionResult.error) {
      this.setState({ error: actionResult.error, isFetching: false });
    } else {
      const newState = {
        query,
        isFetching: false,
        totalCount: get(actionResult, 'response.paging.totalCount'),
      };
      const data: [] = get(actionResult, `response.${resNamePlural}`, []);
      this.setState((prevState: VirtualSelectBoxState) => {
        return {
          ...newState,
          items: prevState.items.concat(data),
        };
      });
    }
  }

  async fetchResource() {
    const { resName, fetchData, formatSearchKeys } = this.props;
    const { search } = this.state;
    this.setState({ isFetching: true, isReloading: true });
    let nameKey = 'name';
    let extraQuery: Query = {};
    let resNamePlural = `${resName}s`;
    if (formatSearchKeys) {
      const keys = formatSearchKeys(resName);
      nameKey = keys.nameKey;
      extraQuery = keys.query;
      resNamePlural = keys.resNamePlural;
    }

    let qArr = elasticQuery.toArr(get(this.props, 'query.q', ''));
    if (search) {
      qArr.push({
        type: nameKey,
        value: search,
      })
    }
    if (!isEmpty(extraQuery)) {
      qArr = concat(qArr, elasticQuery.toArr(extraQuery.q));
    }
    // 查询的时候重置 query
    let query = {
      ...this.props.query,
      ...extraQuery,
      limit,
      offset: 0,
      q: elasticQuery.toStr(qArr),
    };

    if (typeof fetchData !== 'function') return;
    const actionResult = await fetchData(query);
    const items = get(actionResult, `response.${resNamePlural}`, []);
    this.setState({
      query,
      items,
      isFetching: false,
      isReloading: false,
      totalCount: get(actionResult, 'response.paging.totalCount'),
    });
  }

  blockEvent(event: any) {
    event.stopPropagation();
    event.preventDefault();
  }

  toggleMenu(isOpen?: boolean) {
    this.setState(prevState => ({
      isOpen: typeof isOpen === 'boolean' ? isOpen : !prevState.isOpen,
    }));
  }

  toggleClickOutsideEvent(enabled: boolean) {
    if (enabled) {
      if (!window.addEventListener && window['attachEvent']) {
        window['attachEvent']('click', this.handleClickOutside);
      } else {
        window.addEventListener('click', (event) => this.handleClickOutside(event));
      }
    } else {
      if (!window.removeEventListener && window['detachEvent']) {
        window['detachEvent']('click', this.handleClickOutside);
      } else {
        window.removeEventListener('click', (event) => this.handleClickOutside(event));
      }
    }
  }

  handleClickOutside(event: any) {
    // IE when component unmount, element already is null but event still triggered
    if (this.wrapper && this.wrapper.current && !this.wrapper.current.contains(event.target)) {
      this.toggleMenu(false);
    }
  }

  handleSearchChange(event: any) {
    this.setState({ search: event.target.value }, this.debounceFetch);
  }

  handleKeyDown(event: React.KeyboardEvent) {
    switch (event.keyCode) {
      case 27: // escape
        this.toggleMenu(false);
        break;
      default:
        return;
    }
    this.blockEvent(event);
  }
  clear = () => {
    const { onSelect } = this.props;
    if (onSelect) {
      onSelect({});
    }
  }

  renderLabel(item?: object) {
    const { resName, placeholder, formatSearchKeys } = this.props;
    let nameKey = 'name';
    let title = get(item, nameKey) || placeholder;
    if (formatSearchKeys) {
      const keys = formatSearchKeys(resName, item);
      nameKey = keys.nameKey;
      title = keys.title;
    }

    return (
      <span title={title} className="text-truncate">
        {title}
      </span>
    );
  }

  renderItem({ item, style, index }: VirtualRowArgs) {
    if (!item) {
      return;
    }
    const { onSelect, rowHeight, formatOption } = this.props;
    const label = this.renderLabel(item);
    const className = classNames('SelectBox__item text-truncate', {
      active: get(this.props, 'item.id') === item.id
    });
    if (onSelect) {
      const onClick = (event: React.MouseEvent<HTMLDivElement>) => {
        this.blockEvent(event);
        let formatItem = item;
        if (formatOption) {
          formatItem = formatOption(item);
        }
        onSelect(formatItem);
        this.setState({ isOpen: false });
      };
      return (
        <div style={{ ...style, height: rowHeight }} className={className} key={index} onClick={onClick}>
          {label}
        </div>
      );
    }
    return (
      <div style={{ ...style, height: rowHeight }} key={index} className={className}>
        {label}
      </div>
    );
  }

  renderSearch() {
    return (
      <FormControl
        className="SelectBox__search"
        bsSize="sm"
        type="text"
        value={this.state.search}
        placeholder="请输入名称搜索"
        onClick={this.blockEvent}
        onChange={this.handleSearchChange}
      />
    );
  }

  renderList() {
    const { items, query, totalCount, isFetching, isReloading } = this.state;
    const { rowHeight = 30 } = this.props;
    // 30 是 “没有更多信息” 占据的高度, 只有有值的时候设置才有意义
    const extraHeight = items.length > 0 ? 30 : 0;
    let height;
    // 重新获取数据时，只保留 “数据加载中” 占用的高度
    if (!items.length || (isFetching && isReloading)) {
      height = 30;
    } else {
      height = Math.min(maxHeight, rowHeight * items.length + extraHeight);
    }

    return (
      <VirtualList
        rowHeight={rowHeight}
        rowRenderer={this.renderItem}
        height={height}
        data={items}
        query={query}
        onQueryChange={this.handleQueryChange}
        totalCount={totalCount}
        isFetching={isFetching}
        isReloading={isReloading}
        noMore={this.state.items.length === totalCount}
        isEstimate
      />
    );
  }

  renderOuter() {
    return (
      <div className="SelectBox__outer">
        {/*
        // react-bootstrap 跟 @types/react-bootstrap 不兼容
        // @ts-ignore */}
        <Panel header={this.renderSearch()}>
          {this.renderList()}
        </Panel>
      </div>
    );
  }

  render() {
    const { item, disabled, className, isBtn, clear } = this.props;
    const { isOpen } = this.state;
    const btnClassName = classNames('SelectBox__btn text-truncate', {
      'is-open': isOpen,
      'btn btn-sm btn-default': isBtn,
    });
    const selectBoxClass = classNames('SelectBox', {
      disabled: disabled,
      [`${className || ''}`]: true,
    })
    return (
      <span className={selectBoxClass} onKeyDown={this.handleKeyDown} onClick={() => this.toggleMenu()} ref={this.wrapper}>
        <span className={btnClassName}>
          {this.renderLabel(item)} {isBtn && <Glyphicon glyph="triangle-bottom" />}
          {clear && !isEmpty(item) && <Icon type="close" onClick={this.clear} />}
        </span>
        {isOpen && this.renderOuter()}
      </span>
    );
  }
}

export default VirtualSelectBox;

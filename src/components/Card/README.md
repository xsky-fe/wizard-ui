# panel

目前 wizard 所使用的 react-bootstrap 版本为 0.31.1 而官方文档对于改版本并没有详细介绍，官方版本为0.32.4, 但是对于这个小版本却有着许多改动，比如 panel 组件，
0.32 版本实现了多处重构，故此需看源码来封装实现。

### panel props

从源码中我们可以看到整个 `panel` 所接受的类型如下所示，

```js
var propTypes = {
  collapsible: _propTypes2.default.bool,  //是否可折叠
  onSelect: _propTypes2.default.func,     //选择的回调
  header: _propTypes2.default.node,       //heaer信息
  id: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  footer: _propTypes2.default.node,      //footer信息
  defaultExpanded: _propTypes2.default.bool,   //默认展示形式
  expanded: _propTypes2.default.bool,          //展开形式
  eventKey: _propTypes2.default.any,           //选择等key信息
  headerRole: _propTypes2.default.string,      //role信息
  panelRole: _propTypes2.default.string,       //role信息

  // From Collapse.
  onEnter: _propTypes2.default.func,
  onEntering: _propTypes2.default.func,
  onEntered: _propTypes2.default.func,
  onExit: _propTypes2.default.func,
  onExiting: _propTypes2.default.func,
  onExited: _propTypes2.default.func
};
```

0.31 版本并没有以子组件形式来使用 `panel`, 而是以 `props` 形式导出，比如 0.32 可以直接用 `Card.Header` ，而 0.31 则 只能使用 `<Card header={code}>`， 并且没有 `title` 。

### panel render

```js
  /*
    some const info
  */
  return _react2.default.createElement(
      'div',
      (0, _extends3.default)({}, elementProps, {
        className: (0, _classnames2.default)(className, classes),
        id: collapsible ? null : id
      }),
      header && _react2.default.createElement(
        'div',
        { className: (0, _bootstrapUtils.prefix)(bsProps, 'heading') },
        this.renderHeader(collapsible, header, id, headerRole, expanded, bsProps)
      ),
      collapsible ? this.renderCollapsibleBody(id, expanded, panelRole, children, bsProps, { onEnter: onEnter, onEntering: onEntering, onEntered: onEntered, onExit: onExit, onExiting: onExiting, onExited: onExited }) : this.renderBody(children, bsProps),
      footer && _react2.default.createElement(
        'div',
        { className: (0, _bootstrapUtils.prefix)(bsProps, 'footer') },
        footer
      )
    );
```

可以看到 render 主要内容为 `header`, `collapse(body)`, `footer` 即页面上对应的头部，中间内容，底部，其中`collapse(body)`为可选项，当 `collapse` 为 `true`时才会显示折叠信息，故由此可以得出 **`collapse` 属性为是否可以设置折叠属性**。接着分析 `renderHeader` 方法。

### render header

```js
Card.prototype.renderHeader = function renderHeader(collapsible, header, id, role, expanded, bsProps) {
    var titleClassName = (0, _bootstrapUtils.prefix)(bsProps, 'title');
    if (!collapsible) {
      if (!_react2.default.isValidElement(header)) {
        return header;
      }
      return (0, _react.cloneElement)(header, {
        className: (0, _classnames2.default)(header.props.className, titleClassName)
      });
    }
    if (!_react2.default.isValidElement(header)) {
      return _react2.default.createElement(
        'h4',
        { role: 'presentation', className: titleClassName },
        this.renderAnchor(header, id, role, expanded)
      );
    }
    return (0, _react.cloneElement)(header, {
      className: (0, _classnames2.default)(header.props.className, titleClassName),
      children: this.renderAnchor(header.props.children, id, role, expanded)
    });
  };
```

`header` 主要是渲染一个 `header` 组件，当可折叠时候给出个`a`的链接, `footer`与其类型，不过没有 `a`的链接下显示信息。


### renderBody
`renderBody` 与 `renderCollapsibleBody`是主要的内容展示信息，只是一个可以折叠一个不行，其中可以折叠的会带有些动画钩子 `animationHooks` 即 `onEnter`,`onExit` 等进出动画。

### expand 
`expand` 属性主要用在展示属性上，在涉及到 `header` 锚点时候都会用到.
```js
 'aria-expanded': expanded,
 'aria-selected': expanded,
```

### onSelect
`onSelect` 是唯一一个对外暴露的方法，主要用在其内部方法 `handleClickTitle` 上，当点击头部时候回调用这个内部方法，用来确定与 `eventKey` 有关的信息。



[panel issue](https://github.com/react-bootstrap/react-bootstrap/issues/2930)
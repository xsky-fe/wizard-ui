"use strict";(self.webpackChunkwizard_ui=self.webpackChunkwizard_ui||[]).push([[186],{"./stories/Nav.stories.tsx":function(__unused_webpack_module,exports,__webpack_require__){var _a,_b,_c,__assign=this&&this.__assign||function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.Basic=void 0;var react_1=__importDefault(__webpack_require__("./node_modules/react/index.js")),src_1=__webpack_require__("./src/index.ts"),meta={title:"COMPONENTS/Nav",component:src_1.Nav};exports.default=meta;var monitorTabs=[{title:"用户业务",key:"users"},{title:"复制",key:"copy"},{title:"生命周期",key:"flow"}];exports.Basic={render:function(props){return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement(src_1.Nav,{variant:"tabs",defaultActiveKey:"users",onSelect:function(selectedKey){return alert("selected "+selectedKey)}},monitorTabs.map((function(tab){return react_1.default.createElement(src_1.Nav.Item,null,react_1.default.createElement(src_1.Nav.Link,{eventKey:tab.key},tab.title))}))))}},exports.Basic.parameters=__assign(__assign({},exports.Basic.parameters),{docs:__assign(__assign({},null===(_a=exports.Basic.parameters)||void 0===_a?void 0:_a.docs),{source:__assign({originalSource:'{\n  render: props => <>\r\n      <Nav variant="tabs" defaultActiveKey="users" onSelect={selectedKey => alert(`selected ${selectedKey}`)}>\r\n        {monitorTabs.map(tab => {\n        return <Nav.Item>\r\n              <Nav.Link eventKey={tab.key}>{tab.title}</Nav.Link>\r\n            </Nav.Item>;\n      })}\r\n      </Nav>\r\n    </>\n}'},null===(_c=null===(_b=exports.Basic.parameters)||void 0===_b?void 0:_b.docs)||void 0===_c?void 0:_c.source)})})}}]);
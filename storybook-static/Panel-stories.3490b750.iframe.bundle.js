"use strict";(self.webpackChunkwizard_ui=self.webpackChunkwizard_ui||[]).push([[8001],{"./stories/Panel.stories.tsx":function(__unused_webpack_module,exports,__webpack_require__){var _a,_b,_c,_d,_e,_f,_g,_h,_j,_k,_l,_m,__assign=this&&this.__assign||function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.Group=exports.Collapse=exports.Size=exports.Basic=void 0;var react_1=__importDefault(__webpack_require__("./node_modules/react/index.js")),src_1=__webpack_require__("./src/index.ts"),react_bootstrap_1=__webpack_require__("./node_modules/react-bootstrap/esm/index.js"),meta={title:"DATA DISPLAY/Panel",component:src_1.Panel,args:{children:"i am panel",header:"header"},argTypes:{children:{type:{required:!0}}}};exports.default=meta,exports.Basic={},exports.Size={render:function(){return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement("p",null,"内边距 16px 24px, 标题字号 16px",react_1.default.createElement(src_1.Panel,{header:"Head"},"Content")),react_1.default.createElement("p",null,"内边距 8px 16px, 标题字号 14px 加粗",react_1.default.createElement(src_1.Panel,{header:"Head",innerPaddingSize:"sm"},"Content")),react_1.default.createElement("p",null,"内边距 8px 8px, 标题字号 16px",react_1.default.createElement(src_1.Panel,{header:"Head",innerPaddingSize:"xs"},"Content")))}},exports.Collapse={args:{collapsible:!0,expanded:!0}},exports.Group={render:function(){return react_1.default.createElement(react_bootstrap_1.CardGroup,null,react_1.default.createElement(src_1.Panel,{header:"1",collapsible:!0},"content1"),react_1.default.createElement(src_1.Panel,{header:"2",collapsible:!0},"content2"),react_1.default.createElement(src_1.Panel,{header:"3",collapsible:!0},"content3"),react_1.default.createElement(src_1.Panel,{header:"4",collapsible:!0},"content4"))}},exports.Basic.parameters=__assign(__assign({},exports.Basic.parameters),{docs:__assign(__assign({},null===(_a=exports.Basic.parameters)||void 0===_a?void 0:_a.docs),{source:__assign({originalSource:"{}"},null===(_c=null===(_b=exports.Basic.parameters)||void 0===_b?void 0:_b.docs)||void 0===_c?void 0:_c.source)})}),exports.Size.parameters=__assign(__assign({},exports.Size.parameters),{docs:__assign(__assign({},null===(_d=exports.Size.parameters)||void 0===_d?void 0:_d.docs),{source:__assign({originalSource:'{\n  render: () => <>\r\n      <p>\r\n        内边距 16px 24px, 标题字号 16px\r\n        <Panel header="Head">Content</Panel>\r\n      </p>\r\n      <p>\r\n        内边距 8px 16px, 标题字号 14px 加粗\r\n        <Panel header="Head" innerPaddingSize="sm">\r\n          Content\r\n        </Panel>\r\n      </p>\r\n      <p>\r\n        内边距 8px 8px, 标题字号 16px\r\n        <Panel header="Head" innerPaddingSize="xs">\r\n          Content\r\n        </Panel>\r\n      </p>\r\n    </>\n}'},null===(_f=null===(_e=exports.Size.parameters)||void 0===_e?void 0:_e.docs)||void 0===_f?void 0:_f.source)})}),exports.Collapse.parameters=__assign(__assign({},exports.Collapse.parameters),{docs:__assign(__assign({},null===(_g=exports.Collapse.parameters)||void 0===_g?void 0:_g.docs),{source:__assign({originalSource:"{\n  args: {\n    collapsible: true,\n    expanded: true\n  }\n}"},null===(_j=null===(_h=exports.Collapse.parameters)||void 0===_h?void 0:_h.docs)||void 0===_j?void 0:_j.source)})}),exports.Group.parameters=__assign(__assign({},exports.Group.parameters),{docs:__assign(__assign({},null===(_k=exports.Group.parameters)||void 0===_k?void 0:_k.docs),{source:__assign({originalSource:'{\n  render: () => <CardGroup>\r\n      <Panel header="1" collapsible>\r\n        content1\r\n      </Panel>\r\n      <Panel header="2" collapsible>\r\n        content2\r\n      </Panel>\r\n      <Panel header="3" collapsible>\r\n        content3\r\n      </Panel>\r\n      <Panel header="4" collapsible>\r\n        content4\r\n      </Panel>\r\n    </CardGroup>\n}'},null===(_m=null===(_l=exports.Group.parameters)||void 0===_l?void 0:_l.docs)||void 0===_m?void 0:_m.source)})})}}]);
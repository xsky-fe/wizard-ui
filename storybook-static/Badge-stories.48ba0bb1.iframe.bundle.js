"use strict";(self.webpackChunkwizard_ui=self.webpackChunkwizard_ui||[]).push([[4046],{"./stories/Badge.stories.tsx":function(__unused_webpack_module,exports,__webpack_require__){var _a,_b,_c,_d,_e,_f,_g,_h,_j,_k,_l,_m,_o,_p,_q,_r,_s,_t,__assign=this&&this.__assign||function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.MessageShow=exports.MaxCount=exports.Size=exports.NoCount=exports.Dot=exports.Basic=void 0;var react_1=__importDefault(__webpack_require__("./node_modules/react/index.js")),src_1=__webpack_require__("./src/index.ts"),meta={title:"DATA SHOW/Badge",component:src_1.Badge,args:{count:"关闭",status:"default"}};exports.default=meta,exports.Basic={render:function(props){return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement(src_1.Badge,{count:"关闭",status:"default"}),react_1.default.createElement(src_1.Badge,{count:"健康",status:"success"}),react_1.default.createElement(src_1.Badge,{count:"通知",status:"info"}),react_1.default.createElement(src_1.Badge,{count:"紧急",status:"critical"}),react_1.default.createElement(src_1.Badge,{count:"警告",status:"warning"}),react_1.default.createElement(src_1.Badge,{count:"错误",status:"danger"}),react_1.default.createElement(src_1.Badge,{count:"默认"}),react_1.default.createElement(src_1.Badge,{count:"20",status:"success"}))}},exports.Dot={render:function(props){return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement(src_1.Badge,{dot:!0,text:"关闭",status:"default"}),react_1.default.createElement("span",{style:{paddingLeft:"40px"}}),react_1.default.createElement(src_1.Badge,{dot:!0,text:"健康",status:"success"}),react_1.default.createElement("span",{style:{paddingLeft:"40px"}}),react_1.default.createElement(src_1.Badge,{dot:!0,text:"通知",status:"info"}),react_1.default.createElement("span",{style:{paddingLeft:"40px"}}),react_1.default.createElement(src_1.Badge,{dot:!0,text:"紧急",status:"critical"}),react_1.default.createElement("span",{style:{paddingLeft:"40px"}}),react_1.default.createElement(src_1.Badge,{dot:!0,text:"警告",status:"warning"}),react_1.default.createElement("span",{style:{paddingLeft:"40px"}}),react_1.default.createElement(src_1.Badge,{dot:!0,text:"错误",status:"danger"}))}},exports.NoCount={render:function(props){return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement(src_1.Badge,{count:0,showZero:!0}),react_1.default.createElement(src_1.Badge,{count:0}))}},exports.Size={render:function(props){return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement(src_1.Badge,{dot:!0,size:"small",text:"健康",status:"success"}),react_1.default.createElement("span",{style:{paddingLeft:"40px"}}),react_1.default.createElement(src_1.Badge,{dot:!0,size:"middle",text:"健康",status:"success"}),react_1.default.createElement("span",{style:{paddingLeft:"40px"}}),react_1.default.createElement(src_1.Badge,{dot:!0,size:"large",text:"健康",status:"success"}))}},exports.MaxCount={render:function(props){return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement(src_1.Badge,{count:1e4}),react_1.default.createElement(src_1.Badge,{count:1e4,overflowCount:999}),react_1.default.createElement(src_1.Badge,{count:1e4,overflowCount:9999}))}},exports.MessageShow={render:function(props){return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement(src_1.Badge,{count:2e3},"UI"),react_1.default.createElement("span",{style:{paddingLeft:"40px"}}),react_1.default.createElement(src_1.Badge,{dot:!0},"UI"))}},exports.Basic.parameters=__assign(__assign({},exports.Basic.parameters),{docs:__assign(__assign({},null===(_a=exports.Basic.parameters)||void 0===_a?void 0:_a.docs),{source:__assign({originalSource:'{\n  render: props => <>\r\n      <Badge count="关闭" status="default" />\r\n      <Badge count="健康" status="success" />\r\n      <Badge count="通知" status="info" />\r\n      <Badge count="紧急" status="critical" />\r\n      <Badge count="警告" status="warning" />\r\n      <Badge count="错误" status="danger" />\r\n      <Badge count="默认" />\r\n      <Badge count="20" status="success" />\r\n    </>\n}'},null===(_c=null===(_b=exports.Basic.parameters)||void 0===_b?void 0:_b.docs)||void 0===_c?void 0:_c.source)})}),exports.Dot.parameters=__assign(__assign({},exports.Dot.parameters),{docs:__assign(__assign({},null===(_d=exports.Dot.parameters)||void 0===_d?void 0:_d.docs),{source:__assign({originalSource:'{\n  render: props => <>\r\n      <Badge dot text="关闭" status="default" />\r\n      <span style={{\n      paddingLeft: \'40px\'\n    }} />\r\n      <Badge dot text="健康" status="success" />\r\n      <span style={{\n      paddingLeft: \'40px\'\n    }} />\r\n      <Badge dot text="通知" status="info" />\r\n      <span style={{\n      paddingLeft: \'40px\'\n    }} />\r\n      <Badge dot text="紧急" status="critical" />\r\n      <span style={{\n      paddingLeft: \'40px\'\n    }} />\r\n      <Badge dot text="警告" status="warning" />\r\n      <span style={{\n      paddingLeft: \'40px\'\n    }} />\r\n      <Badge dot text="错误" status="danger" />\r\n    </>\n}'},null===(_f=null===(_e=exports.Dot.parameters)||void 0===_e?void 0:_e.docs)||void 0===_f?void 0:_f.source)})}),exports.NoCount.parameters=__assign(__assign({},exports.NoCount.parameters),{docs:__assign(__assign({},null===(_g=exports.NoCount.parameters)||void 0===_g?void 0:_g.docs),{source:__assign({originalSource:"{\n  render: props => <>\r\n      <Badge count={0} showZero />\r\n      <Badge count={0} />\r\n    </>\n}"},null===(_j=null===(_h=exports.NoCount.parameters)||void 0===_h?void 0:_h.docs)||void 0===_j?void 0:_j.source)})}),exports.Size.parameters=__assign(__assign({},exports.Size.parameters),{docs:__assign(__assign({},null===(_k=exports.Size.parameters)||void 0===_k?void 0:_k.docs),{source:__assign({originalSource:'{\n  render: props => <>\r\n      <Badge dot size="small" text="健康" status="success" />\r\n      <span style={{\n      paddingLeft: \'40px\'\n    }} />\r\n      <Badge dot size="middle" text="健康" status="success" />\r\n      <span style={{\n      paddingLeft: \'40px\'\n    }} />\r\n      <Badge dot size="large" text="健康" status="success" />\r\n    </>\n}'},null===(_m=null===(_l=exports.Size.parameters)||void 0===_l?void 0:_l.docs)||void 0===_m?void 0:_m.source)})}),exports.MaxCount.parameters=__assign(__assign({},exports.MaxCount.parameters),{docs:__assign(__assign({},null===(_o=exports.MaxCount.parameters)||void 0===_o?void 0:_o.docs),{source:__assign({originalSource:"{\n  render: props => <>\r\n      <Badge count={10000} />\r\n      <Badge count={10000} overflowCount={999} />\r\n      <Badge count={10000} overflowCount={9999} />\r\n    </>\n}"},null===(_q=null===(_p=exports.MaxCount.parameters)||void 0===_p?void 0:_p.docs)||void 0===_q?void 0:_q.source)})}),exports.MessageShow.parameters=__assign(__assign({},exports.MessageShow.parameters),{docs:__assign(__assign({},null===(_r=exports.MessageShow.parameters)||void 0===_r?void 0:_r.docs),{source:__assign({originalSource:"{\n  render: props => <>\r\n      <Badge count={2000}>UI</Badge>\r\n      <span style={{\n      paddingLeft: '40px'\n    }} />\r\n      <Badge dot>UI</Badge>\r\n    </>\n}"},null===(_t=null===(_s=exports.MessageShow.parameters)||void 0===_s?void 0:_s.docs)||void 0===_t?void 0:_t.source)})})}}]);
"use strict";(self.webpackChunkwizard_ui=self.webpackChunkwizard_ui||[]).push([[392],{"./stories/UsageBar.stories.tsx":function(__unused_webpack_module,exports,__webpack_require__){var _a,_b,_c,_d,_e,_f,_g,_h,_j,_k,_l,_m,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_0,_1,_2,__assign=this&&this.__assign||function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.ExtraInfo=exports.Series=exports.Limit=exports.WaterLine=exports.Status=exports.Inline=exports.Number=exports.Byte=exports.Percent=void 0;var react_1=__importDefault(__webpack_require__("./node_modules/react/index.js")),src_1=__webpack_require__("./src/index.ts"),meta={title:"DATA SHOW/UsageBar",component:src_1.UsageBar};exports.default=meta;var NOW=9e5,MAX=7e6,BYTESSERIES=[{name:"已使用（文案过长时省略文案过长时省略文案过长时省略文案过长时省略文案过长时省略文案过长时省略。。。）",value:1024100},{name:"恢复中",value:1024280,bsStyle:"success"},{name:"错误",value:0,bsStyle:"danger"},{name:"降级",value:1024444,bsStyle:"warning"},{name:"紧急",value:1024444,bsStyle:"critical"},{name:"未使用",value:2048e3,bsStyle:"default"}],BULKSERIES=[{name:"已使用",value:1024100},{name:"恢复中",value:1024,bsStyle:"success"},{name:"错误",value:1024223,bsStyle:"danger"},{name:"降级",value:1024444,bsStyle:"warning"},{name:"紧急",value:1024444,bsStyle:"critical"},{name:"未使用",value:2048e4,bsStyle:"default"}];exports.Percent={render:function(props){return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement(src_1.UsageBar,{now:NOW,max:MAX,unavailableData:5e5,isPercent:!0,withUnavailable:!0}),react_1.default.createElement(src_1.UsageBar,{percent:NOW/MAX}))}},exports.Byte={render:function(props){return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement(src_1.UsageBar,{now:NOW,max:MAX,isByte:!0}),react_1.default.createElement(src_1.UsageBar,{percent:NOW/MAX,max:MAX,isByte:!0}),react_1.default.createElement(src_1.UsageBar,{now:NOW,max:MAX,isByte:!0,withPercent:!0,hideNow:!0}),react_1.default.createElement(src_1.UsageBar,{now:NOW,max:MAX,isByte:!0,withPercent:!0}))}},exports.Number={render:function(props){return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement(src_1.UsageBar,{now:NOW,max:MAX,isBulk:!0}),react_1.default.createElement(src_1.UsageBar,{percent:NOW/MAX,max:MAX,isBulk:!0}),react_1.default.createElement(src_1.UsageBar,{now:NOW,max:MAX,isBulk:!0,withPercent:!0,hideNow:!0}),react_1.default.createElement(src_1.UsageBar,{now:NOW,max:MAX,isBulk:!0,withPercent:!0}))}},exports.Inline={render:function(props){return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement(src_1.UsageBar,{now:NOW,max:MAX,isPercent:!0,inline:!0}),"  ",react_1.default.createElement(src_1.UsageBar,{now:NOW,max:MAX,isByte:!0,inline:!0}),"  ",react_1.default.createElement(src_1.UsageBar,{now:NOW,max:MAX,isBulk:!0,inline:!0}))}},exports.Status={render:function(props){return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement("h4",null,"告警：大于max的75%，小于max的85%"),react_1.default.createElement(src_1.UsageBar,{now:76,max:100}),react_1.default.createElement("h4",null,"危险：大于max的85% "),react_1.default.createElement(src_1.UsageBar,{now:90,max:100}))}},exports.WaterLine={args:{now:9e5,max:7e6,waterLine:.6}},exports.Limit={render:function(props){return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement(src_1.UsageBar,{now:0,isByte:!0}),react_1.default.createElement(src_1.UsageBar,{now:0,isBulk:!0}),react_1.default.createElement(src_1.UsageBar,{percent:0,isByte:!0}),react_1.default.createElement(src_1.UsageBar,{percent:0,isBulk:!0}),react_1.default.createElement(src_1.UsageBar,{percent:0}),react_1.default.createElement(src_1.UsageBar,{now:55,max:0,showZeroMax:!0,isByte:!0}),react_1.default.createElement(src_1.UsageBar,{now:1,max:0,showZeroMax:!0,isBulk:!0}))}},exports.Series={render:function(props){return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement("h4",null,"SERIES 模式 isByte"),react_1.default.createElement(src_1.UsageBar,{series:BYTESSERIES,isByte:!0}),react_1.default.createElement("h4",null,"SERIES 模式，isByte，附带图例"),react_1.default.createElement(src_1.UsageBar,{series:BYTESSERIES,isByte:!0,withLenged:!0}),react_1.default.createElement("h4",null,"SERIES 模式，isBulk，附带图例"),react_1.default.createElement(src_1.UsageBar,{series:BULKSERIES,isBulk:!0,withLenged:!0}),react_1.default.createElement("h4",null,"SERIES 模式，isPercent，附带图例"),react_1.default.createElement(src_1.UsageBar,{series:BYTESSERIES,isPercent:!0,withLenged:!0}))}},exports.ExtraInfo={render:function(props){return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement(src_1.UsageBar,{isByte:!0,now:NOW,max:MAX,extraFooterInfo:"（压缩后 100 GB）"}),react_1.default.createElement(src_1.UsageBar,{isByte:!0,now:NOW,max:MAX,extraFooterInfo:"（压缩后 100 GB）"}),react_1.default.createElement(src_1.UsageBar,{isBulk:!0,now:NOW,max:MAX,extraFooterInfo:"（压缩后 100 GB）"}),react_1.default.createElement(src_1.UsageBar,{isBulk:!0,percent:NOW/MAX,max:MAX,extraFooterInfo:"（压缩后 100 GB）"}),react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement(src_1.UsageBar,{now:NOW,max:MAX,isPercent:!0,inline:!0,extraFooterInfo:"（压缩后 100 GB）"}),"    ",react_1.default.createElement(src_1.UsageBar,{now:NOW,max:MAX,isByte:!0,inline:!0,extraFooterInfo:"（压缩后 100 GB）"}),"    ",react_1.default.createElement(src_1.UsageBar,{now:NOW,max:MAX,isBulk:!0,inline:!0,extraFooterInfo:"（压缩后 100 GB）"})))}},exports.Percent.parameters=__assign(__assign({},exports.Percent.parameters),{docs:__assign(__assign({},null===(_a=exports.Percent.parameters)||void 0===_a?void 0:_a.docs),{source:__assign({originalSource:"{\n  render: props => <>\r\n      <UsageBar now={NOW} max={MAX} unavailableData={UNAVAILABLE_DATA} isPercent withUnavailable />\r\n      <UsageBar percent={NOW / MAX} />\r\n    </>\n}"},null===(_c=null===(_b=exports.Percent.parameters)||void 0===_b?void 0:_b.docs)||void 0===_c?void 0:_c.source)})}),exports.Byte.parameters=__assign(__assign({},exports.Byte.parameters),{docs:__assign(__assign({},null===(_d=exports.Byte.parameters)||void 0===_d?void 0:_d.docs),{source:__assign({originalSource:"{\n  render: props => <>\r\n      <UsageBar now={NOW} max={MAX} isByte />\r\n      <UsageBar percent={NOW / MAX} max={MAX} isByte />\r\n      <UsageBar now={NOW} max={MAX} isByte withPercent hideNow />\r\n      <UsageBar now={NOW} max={MAX} isByte withPercent />\r\n    </>\n}"},null===(_f=null===(_e=exports.Byte.parameters)||void 0===_e?void 0:_e.docs)||void 0===_f?void 0:_f.source)})}),exports.Number.parameters=__assign(__assign({},exports.Number.parameters),{docs:__assign(__assign({},null===(_g=exports.Number.parameters)||void 0===_g?void 0:_g.docs),{source:__assign({originalSource:"{\n  render: props => <>\r\n      <UsageBar now={NOW} max={MAX} isBulk />\r\n      <UsageBar percent={NOW / MAX} max={MAX} isBulk />\r\n      <UsageBar now={NOW} max={MAX} isBulk withPercent hideNow />\r\n      <UsageBar now={NOW} max={MAX} isBulk withPercent />\r\n    </>\n}"},null===(_j=null===(_h=exports.Number.parameters)||void 0===_h?void 0:_h.docs)||void 0===_j?void 0:_j.source)})}),exports.Inline.parameters=__assign(__assign({},exports.Inline.parameters),{docs:__assign(__assign({},null===(_k=exports.Inline.parameters)||void 0===_k?void 0:_k.docs),{source:__assign({originalSource:"{\n  render: props => <>\r\n      <UsageBar now={NOW} max={MAX} isPercent inline />\r\n      &nbsp;&nbsp;\r\n      <UsageBar now={NOW} max={MAX} isByte inline />\r\n      &nbsp;&nbsp;\r\n      <UsageBar now={NOW} max={MAX} isBulk inline />\r\n    </>\n}"},null===(_m=null===(_l=exports.Inline.parameters)||void 0===_l?void 0:_l.docs)||void 0===_m?void 0:_m.source)})}),exports.Status.parameters=__assign(__assign({},exports.Status.parameters),{docs:__assign(__assign({},null===(_o=exports.Status.parameters)||void 0===_o?void 0:_o.docs),{source:__assign({originalSource:"{\n  render: props => <>\r\n      <h4>告警：大于max的75%，小于max的85%</h4>\r\n      <UsageBar now={76} max={100} />\r\n      <h4>危险：大于max的85% </h4>\r\n      <UsageBar now={90} max={100} />\r\n    </>\n}"},null===(_q=null===(_p=exports.Status.parameters)||void 0===_p?void 0:_p.docs)||void 0===_q?void 0:_q.source)})}),exports.WaterLine.parameters=__assign(__assign({},exports.WaterLine.parameters),{docs:__assign(__assign({},null===(_r=exports.WaterLine.parameters)||void 0===_r?void 0:_r.docs),{source:__assign({originalSource:"{\n  args: {\n    now: 900000,\n    max: 7000000,\n    waterLine: 0.6\n  }\n}"},null===(_t=null===(_s=exports.WaterLine.parameters)||void 0===_s?void 0:_s.docs)||void 0===_t?void 0:_t.source)})}),exports.Limit.parameters=__assign(__assign({},exports.Limit.parameters),{docs:__assign(__assign({},null===(_u=exports.Limit.parameters)||void 0===_u?void 0:_u.docs),{source:__assign({originalSource:"{\n  render: props => <>\r\n      <UsageBar now={0} isByte />\r\n      <UsageBar now={0} isBulk />\r\n      <UsageBar percent={0} isByte />\r\n      <UsageBar percent={0} isBulk />\r\n      <UsageBar percent={0} />\r\n      <UsageBar now={55} max={0} showZeroMax isByte />\r\n      <UsageBar now={1} max={0} showZeroMax isBulk />\r\n    </>\n}"},null===(_w=null===(_v=exports.Limit.parameters)||void 0===_v?void 0:_v.docs)||void 0===_w?void 0:_w.source)})}),exports.Series.parameters=__assign(__assign({},exports.Series.parameters),{docs:__assign(__assign({},null===(_x=exports.Series.parameters)||void 0===_x?void 0:_x.docs),{source:__assign({originalSource:"{\n  render: props => <>\r\n      <h4>SERIES 模式 isByte</h4>\r\n      <UsageBar series={BYTESSERIES} isByte />\r\n      <h4>SERIES 模式，isByte，附带图例</h4>\r\n      <UsageBar series={BYTESSERIES} isByte withLenged />\r\n      <h4>SERIES 模式，isBulk，附带图例</h4>\r\n      <UsageBar series={BULKSERIES} isBulk withLenged />\r\n      <h4>SERIES 模式，isPercent，附带图例</h4>\r\n      <UsageBar series={BYTESSERIES} isPercent withLenged />\r\n    </>\n}"},null===(_z=null===(_y=exports.Series.parameters)||void 0===_y?void 0:_y.docs)||void 0===_z?void 0:_z.source)})}),exports.ExtraInfo.parameters=__assign(__assign({},exports.ExtraInfo.parameters),{docs:__assign(__assign({},null===(_0=exports.ExtraInfo.parameters)||void 0===_0?void 0:_0.docs),{source:__assign({originalSource:'{\n  render: props => <>\r\n      <UsageBar isByte now={NOW} max={MAX} extraFooterInfo="（压缩后 100 GB）" />\r\n      <UsageBar isByte now={NOW} max={MAX} extraFooterInfo="（压缩后 100 GB）" />\r\n      <UsageBar isBulk now={NOW} max={MAX} extraFooterInfo="（压缩后 100 GB）" />\r\n      <UsageBar isBulk percent={NOW / MAX} max={MAX} extraFooterInfo="（压缩后 100 GB）" />\r\n      <>\r\n        <UsageBar now={NOW} max={MAX} isPercent inline extraFooterInfo="（压缩后 100 GB）" />\r\n        &nbsp;&nbsp;&nbsp;&nbsp;\r\n        <UsageBar now={NOW} max={MAX} isByte inline extraFooterInfo="（压缩后 100 GB）" />\r\n        &nbsp;&nbsp;&nbsp;&nbsp;\r\n        <UsageBar now={NOW} max={MAX} isBulk inline extraFooterInfo="（压缩后 100 GB）" />\r\n      </>\r\n    </>\n}'},null===(_2=null===(_1=exports.ExtraInfo.parameters)||void 0===_1?void 0:_1.docs)||void 0===_2?void 0:_2.source)})})}}]);
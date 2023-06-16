"use strict";(self.webpackChunkwizard_ui=self.webpackChunkwizard_ui||[]).push([[7900],{"./stories/DropdownButton.stories.tsx":function(__unused_webpack_module,exports,__webpack_require__){var _a,_b,_c,_d,_e,_f,_g,_h,_j,_k,_l,_m,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_0,_1,_2,_3,_4,_5,_6,_7,_8,__assign=this&&this.__assign||function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.Align=exports.Show=exports.NoCaret=exports.DropUp=exports.Disabled=exports.Menu=exports.Modifier=exports.As=exports.Style=exports.Size=exports.Basic=void 0;var react_1=__importDefault(__webpack_require__("./node_modules/react/index.js")),src_1=__webpack_require__("./src/index.ts"),react_bootstrap_1=__webpack_require__("./node_modules/react-bootstrap/esm/index.js"),meta={title:"COMPONENTS/DropdownButton",component:src_1.DropdownButton,decorators:[function(Story){return react_1.default.createElement("div",{style:{marginBottom:"60px"}},react_1.default.createElement(Story,null))}],argTypes:{variant:{description:"样式支持default，primary，success，info，warning，danger，默认为default",table:{type:{summary:"string"},defaultValue:{summary:"default"}}},as:{description:"元素类型",table:{type:{summary:"elementType"}}},disabled:{description:"是否禁用",table:{type:{summary:"boolean"}}},drop:{description:"下拉框弹出方向",table:{type:{summary:"string",detail:"'up' | 'up-centered' | 'start' | 'end' | 'down' | 'down-centered'"}}},onSelect:{description:"下拉菜单选中时回调",table:{type:{summary:"function"}}},show:{table:{type:{summary:"boolean"}},description:"下拉框是否展开;使用组件如未传入show属性，点击任何一级的MenuItem都会默认关闭下拉框;如有传入show属性，下拉框是否展开根据传入的show决定"},align:{description:"下拉框对齐方向",table:{type:{summary:"string",detail:'"start" | "end" | { sm: "start" | "end" } | { md: "start" | "end" } | { lg: "start" | "end" } | { xl: "start" | "end"} | { xxl: "start" | "end"}'}}}}};exports.default=meta,exports.Basic={render:function(props){return react_1.default.createElement(src_1.DropdownButton,{title:"标题",menu:["操作-1",{key:"menu2",title:"操作-2",children:["操作-2-1","操作-2-2"]},"操作-3"]})}},exports.Size={render:function(props){return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement(src_1.DropdownButton,{id:"a1",size:"lg",title:"lg",menu:["menu1","menu2","menu3"]}),react_1.default.createElement(src_1.DropdownButton,{id:"a2",title:"default",menu:["menu1","menu2","menu3"]}),react_1.default.createElement(src_1.DropdownButton,{id:"a3",size:"sm",title:"sm",menu:["menu1","menu2","menu3"]}),react_1.default.createElement(src_1.DropdownButton,{id:"a4",size:"xs",title:"xs",menu:["menu1","menu2","menu3"]}))}},exports.Style={decorators:[function(Story){return react_1.default.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},react_1.default.createElement(Story,null))}],render:function(props){return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement(src_1.DropdownButton,{id:"a1",variant:"default",title:"default",menu:["menu1","menu2","menu3"]}),react_1.default.createElement(src_1.DropdownButton,{id:"a2",variant:"primary",title:"primary",menu:["menu1","menu2","menu3"]}),react_1.default.createElement(src_1.DropdownButton,{id:"a3",variant:"success",title:"success",menu:["menu1","menu2","menu3"]}),react_1.default.createElement(src_1.DropdownButton,{id:"a4",variant:"info",title:"info",menu:["menu1","menu2","menu3"]}),react_1.default.createElement(src_1.DropdownButton,{id:"a5",variant:"warning",title:"warning",menu:["menu1","menu2","menu3"]}),react_1.default.createElement(src_1.DropdownButton,{id:"a6",variant:"danger",title:"danger",menu:["menu1","menu2","menu3"]}))}},exports.As={render:function(props){return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement(src_1.DropdownButton,{id:"a1",title:"input group",as:react_bootstrap_1.InputGroup,menu:["menu1","menu2","menu3"]}),react_1.default.createElement(src_1.DropdownButton,{id:"a2",title:"normal",menu:["menu1","menu2","menu3"]}))}},exports.Modifier={render:function(props){return react_1.default.createElement(src_1.DropdownButton,{id:"a1",title:"table toolbar",modifer:"table-toolbar",menu:["menu1","menu2","menu3"]})}},exports.Menu={render:function(props){return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement(src_1.DropdownButton,{id:"a1",title:"simple menu",menu:["menu1","menu2","menu3"]}),react_1.default.createElement(src_1.DropdownButton,{id:"a2",title:"complex menu",menu:[{title:"data-action","data-action":"update"},{title:"eventKey",eventKey:"delete"}]}),react_1.default.createElement(src_1.DropdownButton,{id:"a3",title:"sub menu",menu:[{key:"menu1",title:"menu1"},{key:"menu2",title:"menu2",children:["sub menu1","sub menu2"]},{key:"menu3",title:"menu3"}]}),react_1.default.createElement(src_1.DropdownButton,{id:"a4",title:"children",children:react_1.default.createElement("div",null,"customized dropdown menu")}),react_1.default.createElement(src_1.DropdownButton,{id:"a5",title:"menu",menu:[{key:"menu1",title:"menu1",disabled:!0,toolTip:{label:"menu1",children:"Not allow to operate"}},{key:"menu2",title:"menu2",disabled:!0,toolTip:{label:"menu1",children:"Not allow to operate",placement:"top"}}]}))}},exports.Disabled={render:function(props){return react_1.default.createElement(src_1.DropdownButton,{id:"a1",title:"disabled",disabled:!0,menu:["menu1","menu2","menu3"]})}},exports.DropUp={decorators:[function(Story){return react_1.default.createElement("div",{style:{margin:"80px 0 0 0"}},react_1.default.createElement(Story,null))}],render:function(props){return react_1.default.createElement(src_1.DropdownButton,{id:"a1",title:"dropup",drop:"up",menu:["menu1","menu2","menu3"]})}},exports.NoCaret={render:function(props){return react_1.default.createElement(src_1.DropdownButton,{id:"a1",title:"noCaret",noCaret:!0,menu:["menu1","menu2","menu3"]})}},exports.Show={render:function(props){return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement(src_1.DropdownButton,{id:"a1",title:"show",show:!0,onToggle:function(){},menu:["menu1","menu2","  menu3"]}),react_1.default.createElement(src_1.DropdownButton,{id:"a2",title:"normal",menu:["menu1","menu2","menu3"]}),react_1.default.createElement(src_1.DropdownButton,{id:"a3",title:"close",show:!1,onToggle:function(){},menu:["menu1","menu2","menu3"]}))}},exports.Align={render:function(props){return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement(src_1.DropdownButton,{id:"a2",title:"normal",menu:["menu1","menu2","menu3"]}),react_1.default.createElement(src_1.DropdownButton,{id:"a1",title:"align",align:"end",menu:["menu1","menu2","menu3"]}))}},exports.Basic.parameters=__assign(__assign({},exports.Basic.parameters),{docs:__assign(__assign({},null===(_a=exports.Basic.parameters)||void 0===_a?void 0:_a.docs),{source:__assign({originalSource:"{\n  render: props => <DropdownButton title=\"标题\" menu={['操作-1', {\n    key: 'menu2',\n    title: '操作-2',\n    children: ['操作-2-1', '操作-2-2']\n  }, '操作-3']} />\n}"},null===(_c=null===(_b=exports.Basic.parameters)||void 0===_b?void 0:_b.docs)||void 0===_c?void 0:_c.source)})}),exports.Size.parameters=__assign(__assign({},exports.Size.parameters),{docs:__assign(__assign({},null===(_d=exports.Size.parameters)||void 0===_d?void 0:_d.docs),{source:__assign({originalSource:"{\n  render: props => <>\r\n      <DropdownButton id=\"a1\" size=\"lg\" title=\"lg\" menu={['menu1', 'menu2', 'menu3']} />\r\n      <DropdownButton id=\"a2\" title=\"default\" menu={['menu1', 'menu2', 'menu3']} />\r\n      <DropdownButton id=\"a3\" size=\"sm\" title=\"sm\" menu={['menu1', 'menu2', 'menu3']} />\r\n      <DropdownButton id=\"a4\" size=\"xs\" title=\"xs\" menu={['menu1', 'menu2', 'menu3']} />\r\n    </>\n}"},null===(_f=null===(_e=exports.Size.parameters)||void 0===_e?void 0:_e.docs)||void 0===_f?void 0:_f.source)})}),exports.Style.parameters=__assign(__assign({},exports.Style.parameters),{docs:__assign(__assign({},null===(_g=exports.Style.parameters)||void 0===_g?void 0:_g.docs),{source:__assign({originalSource:"{\n  decorators: [Story => <div style={{\n    display: 'flex',\n    justifyContent: 'space-between'\n  }}>\r\n        <Story />\r\n      </div>],\n  render: props => <>\r\n      <DropdownButton id=\"a1\" variant=\"default\" title=\"default\" menu={['menu1', 'menu2', 'menu3']} />\r\n      <DropdownButton id=\"a2\" variant=\"primary\" title=\"primary\" menu={['menu1', 'menu2', 'menu3']} />\r\n      <DropdownButton id=\"a3\" variant=\"success\" title=\"success\" menu={['menu1', 'menu2', 'menu3']} />\r\n      <DropdownButton id=\"a4\" variant=\"info\" title=\"info\" menu={['menu1', 'menu2', 'menu3']} />\r\n      <DropdownButton id=\"a5\" variant=\"warning\" title=\"warning\" menu={['menu1', 'menu2', 'menu3']} />\r\n      <DropdownButton id=\"a6\" variant=\"danger\" title=\"danger\" menu={['menu1', 'menu2', 'menu3']} />\r\n    </>\n}"},null===(_j=null===(_h=exports.Style.parameters)||void 0===_h?void 0:_h.docs)||void 0===_j?void 0:_j.source)})}),exports.As.parameters=__assign(__assign({},exports.As.parameters),{docs:__assign(__assign({},null===(_k=exports.As.parameters)||void 0===_k?void 0:_k.docs),{source:__assign({originalSource:"{\n  render: props => <>\r\n      <DropdownButton id=\"a1\" title=\"input group\" as={InputGroup} menu={['menu1', 'menu2', 'menu3']} />\r\n      <DropdownButton id=\"a2\" title=\"normal\" menu={['menu1', 'menu2', 'menu3']} />\r\n    </>\n}"},null===(_m=null===(_l=exports.As.parameters)||void 0===_l?void 0:_l.docs)||void 0===_m?void 0:_m.source)})}),exports.Modifier.parameters=__assign(__assign({},exports.Modifier.parameters),{docs:__assign(__assign({},null===(_o=exports.Modifier.parameters)||void 0===_o?void 0:_o.docs),{source:__assign({originalSource:"{\n  render: props => <DropdownButton id=\"a1\" title=\"table toolbar\" modifer=\"table-toolbar\" menu={['menu1', 'menu2', 'menu3']} />\n}"},null===(_q=null===(_p=exports.Modifier.parameters)||void 0===_p?void 0:_p.docs)||void 0===_q?void 0:_q.source)})}),exports.Menu.parameters=__assign(__assign({},exports.Menu.parameters),{docs:__assign(__assign({},null===(_r=exports.Menu.parameters)||void 0===_r?void 0:_r.docs),{source:__assign({originalSource:"{\n  render: props => <>\r\n      <DropdownButton id=\"a1\" title=\"simple menu\" menu={['menu1', 'menu2', 'menu3']} />\r\n      <DropdownButton id=\"a2\" title=\"complex menu\" menu={[{\n      title: 'data-action',\n      'data-action': 'update'\n    }, {\n      title: 'eventKey',\n      eventKey: 'delete'\n    }]} />\r\n      <DropdownButton id=\"a3\" title=\"sub menu\" menu={[{\n      key: 'menu1',\n      title: 'menu1'\n    }, {\n      key: 'menu2',\n      title: 'menu2',\n      children: ['sub menu1', 'sub menu2']\n    }, {\n      key: 'menu3',\n      title: 'menu3'\n    }]} />\r\n      <DropdownButton id=\"a4\" title=\"children\" children={<div>customized dropdown menu</div>} />\r\n      <DropdownButton id=\"a5\" title=\"menu\" menu={[{\n      key: 'menu1',\n      title: 'menu1',\n      disabled: true,\n      toolTip: {\n        label: 'menu1',\n        children: 'Not allow to operate'\n      }\n    }, {\n      key: 'menu2',\n      title: 'menu2',\n      disabled: true,\n      toolTip: {\n        label: 'menu1',\n        children: 'Not allow to operate',\n        placement: 'top'\n      }\n    }]} />\r\n    </>\n}"},null===(_t=null===(_s=exports.Menu.parameters)||void 0===_s?void 0:_s.docs)||void 0===_t?void 0:_t.source)})}),exports.Disabled.parameters=__assign(__assign({},exports.Disabled.parameters),{docs:__assign(__assign({},null===(_u=exports.Disabled.parameters)||void 0===_u?void 0:_u.docs),{source:__assign({originalSource:"{\n  render: props => <DropdownButton id=\"a1\" title=\"disabled\" disabled menu={['menu1', 'menu2', 'menu3']} />\n}"},null===(_w=null===(_v=exports.Disabled.parameters)||void 0===_v?void 0:_v.docs)||void 0===_w?void 0:_w.source)})}),exports.DropUp.parameters=__assign(__assign({},exports.DropUp.parameters),{docs:__assign(__assign({},null===(_x=exports.DropUp.parameters)||void 0===_x?void 0:_x.docs),{source:__assign({originalSource:"{\n  decorators: [Story => <div style={{\n    margin: '80px 0 0 0'\n  }}>\r\n        <Story />\r\n      </div>],\n  render: props => <DropdownButton id=\"a1\" title=\"dropup\" drop=\"up\" menu={['menu1', 'menu2', 'menu3']} />\n}"},null===(_z=null===(_y=exports.DropUp.parameters)||void 0===_y?void 0:_y.docs)||void 0===_z?void 0:_z.source)})}),exports.NoCaret.parameters=__assign(__assign({},exports.NoCaret.parameters),{docs:__assign(__assign({},null===(_0=exports.NoCaret.parameters)||void 0===_0?void 0:_0.docs),{source:__assign({originalSource:"{\n  render: props => <DropdownButton id=\"a1\" title=\"noCaret\" noCaret menu={['menu1', 'menu2', 'menu3']} />\n}"},null===(_2=null===(_1=exports.NoCaret.parameters)||void 0===_1?void 0:_1.docs)||void 0===_2?void 0:_2.source)})}),exports.Show.parameters=__assign(__assign({},exports.Show.parameters),{docs:__assign(__assign({},null===(_3=exports.Show.parameters)||void 0===_3?void 0:_3.docs),{source:__assign({originalSource:"{\n  render: props => <>\r\n      <DropdownButton id=\"a1\" title=\"show\" show onToggle={() => {}} menu={['menu1', 'menu2', '  menu3']} />\r\n      <DropdownButton id=\"a2\" title=\"normal\" menu={['menu1', 'menu2', 'menu3']} />\r\n      <DropdownButton id=\"a3\" title=\"close\" show={false} onToggle={() => {}} menu={['menu1', 'menu2', 'menu3']} />\r\n    </>\n}"},null===(_5=null===(_4=exports.Show.parameters)||void 0===_4?void 0:_4.docs)||void 0===_5?void 0:_5.source)})}),exports.Align.parameters=__assign(__assign({},exports.Align.parameters),{docs:__assign(__assign({},null===(_6=exports.Align.parameters)||void 0===_6?void 0:_6.docs),{source:__assign({originalSource:"{\n  render: props => <>\r\n      <DropdownButton id=\"a2\" title=\"normal\" menu={['menu1', 'menu2', 'menu3']} />\r\n      <DropdownButton id=\"a1\" title=\"align\" align=\"end\" menu={['menu1', 'menu2', 'menu3']} />\r\n    </>\n}"},null===(_8=null===(_7=exports.Align.parameters)||void 0===_7?void 0:_7.docs)||void 0===_8?void 0:_8.source)})})}}]);
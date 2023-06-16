"use strict";(self.webpackChunkwizard_ui=self.webpackChunkwizard_ui||[]).push([[5014],{"./stories/Tabs.stories.tsx":function(__unused_webpack_module,exports,__webpack_require__){var _a,_b,_c,_d,_e,_f,_g,_h,_j,_k,_l,_m,_o,_p,_q,__assign=this&&this.__assign||function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k),Object.defineProperty(o,k2,{enumerable:!0,get:function(){return m[k]}})}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(o,v){Object.defineProperty(o,"default",{enumerable:!0,value:v})}:function(o,v){o.default=v}),__importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)"default"!==k&&Object.prototype.hasOwnProperty.call(mod,k)&&__createBinding(result,mod,k);return __setModuleDefault(result,mod),result},__read=this&&this.__read||function(o,n){var m="function"==typeof Symbol&&o[Symbol.iterator];if(!m)return o;var r,e,i=m.call(o),ar=[];try{for(;(void 0===n||n-- >0)&&!(r=i.next()).done;)ar.push(r.value)}catch(error){e={error}}finally{try{r&&!r.done&&(m=i.return)&&m.call(i)}finally{if(e)throw e.error}}return ar};Object.defineProperty(exports,"__esModule",{value:!0}),exports.ItemOverLimitNum=exports.Right=exports.Small=exports.Secondary=exports.Basic=void 0;var react_1=__importStar(__webpack_require__("./node_modules/react/index.js")),src_1=__webpack_require__("./src/index.ts"),tabs=[{title:"标题1",key:"key-1",children:react_1.default.createElement("div",null,"第1个tab")},{title:"标题2",key:"key-2",children:react_1.default.createElement("div",null,"第2个tab")},{title:"标题3",key:"key-3",children:react_1.default.createElement("div",null,"第3个tab")},{title:"标题4",key:"key-4",children:react_1.default.createElement("div",null,"第4个tab")}],tabLists=[{title:"标题1",key:"key-1",children:react_1.default.createElement("div",null,"第1个tab")},{title:"标题2",key:"key-2",children:react_1.default.createElement("div",null,"第2个tab")},{title:"标题3",key:"key-3",children:react_1.default.createElement("div",null,"第3个tab")},{title:"标题4",key:"key-4",children:react_1.default.createElement("div",null,"第4个tab")},{title:"标题5",key:"key-5",children:react_1.default.createElement("div",null,"第5个tab")},{title:"标题6",key:"key-6",children:react_1.default.createElement("div",null,"第6个tab")},{title:"标题7",key:"key-7",children:react_1.default.createElement("div",null,"第7个tab")},{title:"标题8",key:"key-8",children:react_1.default.createElement("div",null,"第8个tab")}],Xtab=function(props){var _a=__read(react_1.useState(tabLists[0].key),2),key=_a[0],setKey=_a[1];return react_1.default.createElement(src_1.Tabs,__assign({},props,{tabs:tabLists,activeKey:key,onSelect:function(key){return function(key){return setKey(key)}(key)},limitNum:5}))},meta={title:"DATA DISPLAY/Tabs",component:src_1.Tabs,args:{tabs},argTypes:{}};exports.default=meta,exports.Basic={},exports.Secondary={args:{type:"secondary"}},exports.Small={args:{size:"small"}},exports.Right={args:{direction:"right"}},exports.ItemOverLimitNum={render:function(){return react_1.default.createElement(Xtab,null)}},exports.Basic.parameters=__assign(__assign({},exports.Basic.parameters),{docs:__assign(__assign({},null===(_a=exports.Basic.parameters)||void 0===_a?void 0:_a.docs),{source:__assign({originalSource:"{}"},null===(_c=null===(_b=exports.Basic.parameters)||void 0===_b?void 0:_b.docs)||void 0===_c?void 0:_c.source)})}),exports.Secondary.parameters=__assign(__assign({},exports.Secondary.parameters),{docs:__assign(__assign({},null===(_d=exports.Secondary.parameters)||void 0===_d?void 0:_d.docs),{source:__assign({originalSource:"{\n  args: {\n    type: 'secondary'\n  }\n}"},null===(_f=null===(_e=exports.Secondary.parameters)||void 0===_e?void 0:_e.docs)||void 0===_f?void 0:_f.source)})}),exports.Small.parameters=__assign(__assign({},exports.Small.parameters),{docs:__assign(__assign({},null===(_g=exports.Small.parameters)||void 0===_g?void 0:_g.docs),{source:__assign({originalSource:"{\n  args: {\n    size: 'small'\n  }\n}"},null===(_j=null===(_h=exports.Small.parameters)||void 0===_h?void 0:_h.docs)||void 0===_j?void 0:_j.source)})}),exports.Right.parameters=__assign(__assign({},exports.Right.parameters),{docs:__assign(__assign({},null===(_k=exports.Right.parameters)||void 0===_k?void 0:_k.docs),{source:__assign({originalSource:"{\n  args: {\n    direction: 'right'\n  }\n}"},null===(_m=null===(_l=exports.Right.parameters)||void 0===_l?void 0:_l.docs)||void 0===_m?void 0:_m.source)})}),exports.ItemOverLimitNum.parameters=__assign(__assign({},exports.ItemOverLimitNum.parameters),{docs:__assign(__assign({},null===(_o=exports.ItemOverLimitNum.parameters)||void 0===_o?void 0:_o.docs),{source:__assign({originalSource:"{\n  render: () => <Xtab />\n}"},null===(_q=null===(_p=exports.ItemOverLimitNum.parameters)||void 0===_p?void 0:_p.docs)||void 0===_q?void 0:_q.source)})})}}]);
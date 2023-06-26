"use strict";(self.webpackChunkwizard_ui=self.webpackChunkwizard_ui||[]).push([[913,4046],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./stories/Badge.stories.tsx":function(__unused_webpack_module,exports,__webpack_require__){var _a,_b,_c,_d,_e,_f,_g,_h,_j,_k,_l,_m,_o,_p,_q,_r,_s,_t,_u,_v,_w,__assign=this&&this.__assign||function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.MessageShow=exports.MaxCount=exports.Size=exports.NoCount=exports.Dot=exports.Variant=exports.Basic=void 0;var react_1=__importDefault(__webpack_require__("./node_modules/react/index.js")),src_1=__webpack_require__("./src/index.ts"),meta={title:"DATA SHOW/Badge",component:src_1.Badge,args:{count:"关闭",status:"default"}};exports.default=meta,exports.Basic={},exports.Variant={render:function(props){return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement(src_1.Badge,{count:"关闭",status:"default"}),react_1.default.createElement(src_1.Badge,{count:"健康",status:"success"}),react_1.default.createElement(src_1.Badge,{count:"通知",status:"info"}),react_1.default.createElement(src_1.Badge,{count:"紧急",status:"critical"}),react_1.default.createElement(src_1.Badge,{count:"警告",status:"warning"}),react_1.default.createElement(src_1.Badge,{count:"错误",status:"danger"}),react_1.default.createElement(src_1.Badge,{count:"默认"}),react_1.default.createElement(src_1.Badge,{count:"20",status:"success"}))}},exports.Dot={render:function(props){return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement(src_1.Badge,{dot:!0,text:"关闭",status:"default"}),react_1.default.createElement("span",{style:{paddingLeft:"40px"}}),react_1.default.createElement(src_1.Badge,{dot:!0,text:"健康",status:"success"}),react_1.default.createElement("span",{style:{paddingLeft:"40px"}}),react_1.default.createElement(src_1.Badge,{dot:!0,text:"通知",status:"info"}),react_1.default.createElement("span",{style:{paddingLeft:"40px"}}),react_1.default.createElement(src_1.Badge,{dot:!0,text:"紧急",status:"critical"}),react_1.default.createElement("span",{style:{paddingLeft:"40px"}}),react_1.default.createElement(src_1.Badge,{dot:!0,text:"警告",status:"warning"}),react_1.default.createElement("span",{style:{paddingLeft:"40px"}}),react_1.default.createElement(src_1.Badge,{dot:!0,text:"错误",status:"danger"}))}},exports.NoCount={render:function(props){return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement(src_1.Badge,{count:0,showZero:!0}),react_1.default.createElement(src_1.Badge,{count:0}))}},exports.Size={render:function(props){return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement(src_1.Badge,{dot:!0,size:"small",text:"健康",status:"success"}),react_1.default.createElement("span",{style:{paddingLeft:"40px"}}),react_1.default.createElement(src_1.Badge,{dot:!0,size:"middle",text:"健康",status:"success"}),react_1.default.createElement("span",{style:{paddingLeft:"40px"}}),react_1.default.createElement(src_1.Badge,{dot:!0,size:"large",text:"健康",status:"success"}))}},exports.MaxCount={render:function(props){return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement(src_1.Badge,{count:1e4}),react_1.default.createElement(src_1.Badge,{count:1e4,overflowCount:999}),react_1.default.createElement(src_1.Badge,{count:1e4,overflowCount:9999}))}},exports.MessageShow={render:function(props){return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement(src_1.Badge,{count:2e3},"UI"),react_1.default.createElement("span",{style:{paddingLeft:"40px"}}),react_1.default.createElement(src_1.Badge,{dot:!0},"UI"))}},exports.Basic.parameters=__assign(__assign({},exports.Basic.parameters),{docs:__assign(__assign({},null===(_a=exports.Basic.parameters)||void 0===_a?void 0:_a.docs),{source:__assign({originalSource:"{}"},null===(_c=null===(_b=exports.Basic.parameters)||void 0===_b?void 0:_b.docs)||void 0===_c?void 0:_c.source)})}),exports.Variant.parameters=__assign(__assign({},exports.Variant.parameters),{docs:__assign(__assign({},null===(_d=exports.Variant.parameters)||void 0===_d?void 0:_d.docs),{source:__assign({originalSource:'{\n  render: props => <>\r\n      <Badge count="关闭" status="default" />\r\n      <Badge count="健康" status="success" />\r\n      <Badge count="通知" status="info" />\r\n      <Badge count="紧急" status="critical" />\r\n      <Badge count="警告" status="warning" />\r\n      <Badge count="错误" status="danger" />\r\n      <Badge count="默认" />\r\n      <Badge count="20" status="success" />\r\n    </>\n}'},null===(_f=null===(_e=exports.Variant.parameters)||void 0===_e?void 0:_e.docs)||void 0===_f?void 0:_f.source)})}),exports.Dot.parameters=__assign(__assign({},exports.Dot.parameters),{docs:__assign(__assign({},null===(_g=exports.Dot.parameters)||void 0===_g?void 0:_g.docs),{source:__assign({originalSource:'{\n  render: props => <>\r\n      <Badge dot text="关闭" status="default" />\r\n      <span style={{\n      paddingLeft: \'40px\'\n    }} />\r\n      <Badge dot text="健康" status="success" />\r\n      <span style={{\n      paddingLeft: \'40px\'\n    }} />\r\n      <Badge dot text="通知" status="info" />\r\n      <span style={{\n      paddingLeft: \'40px\'\n    }} />\r\n      <Badge dot text="紧急" status="critical" />\r\n      <span style={{\n      paddingLeft: \'40px\'\n    }} />\r\n      <Badge dot text="警告" status="warning" />\r\n      <span style={{\n      paddingLeft: \'40px\'\n    }} />\r\n      <Badge dot text="错误" status="danger" />\r\n    </>\n}'},null===(_j=null===(_h=exports.Dot.parameters)||void 0===_h?void 0:_h.docs)||void 0===_j?void 0:_j.source)})}),exports.NoCount.parameters=__assign(__assign({},exports.NoCount.parameters),{docs:__assign(__assign({},null===(_k=exports.NoCount.parameters)||void 0===_k?void 0:_k.docs),{source:__assign({originalSource:"{\n  render: props => <>\r\n      <Badge count={0} showZero />\r\n      <Badge count={0} />\r\n    </>\n}"},null===(_m=null===(_l=exports.NoCount.parameters)||void 0===_l?void 0:_l.docs)||void 0===_m?void 0:_m.source)})}),exports.Size.parameters=__assign(__assign({},exports.Size.parameters),{docs:__assign(__assign({},null===(_o=exports.Size.parameters)||void 0===_o?void 0:_o.docs),{source:__assign({originalSource:'{\n  render: props => <>\r\n      <Badge dot size="small" text="健康" status="success" />\r\n      <span style={{\n      paddingLeft: \'40px\'\n    }} />\r\n      <Badge dot size="middle" text="健康" status="success" />\r\n      <span style={{\n      paddingLeft: \'40px\'\n    }} />\r\n      <Badge dot size="large" text="健康" status="success" />\r\n    </>\n}'},null===(_q=null===(_p=exports.Size.parameters)||void 0===_p?void 0:_p.docs)||void 0===_q?void 0:_q.source)})}),exports.MaxCount.parameters=__assign(__assign({},exports.MaxCount.parameters),{docs:__assign(__assign({},null===(_r=exports.MaxCount.parameters)||void 0===_r?void 0:_r.docs),{source:__assign({originalSource:"{\n  render: props => <>\r\n      <Badge count={10000} />\r\n      <Badge count={10000} overflowCount={999} />\r\n      <Badge count={10000} overflowCount={9999} />\r\n    </>\n}"},null===(_t=null===(_s=exports.MaxCount.parameters)||void 0===_s?void 0:_s.docs)||void 0===_t?void 0:_t.source)})}),exports.MessageShow.parameters=__assign(__assign({},exports.MessageShow.parameters),{docs:__assign(__assign({},null===(_u=exports.MessageShow.parameters)||void 0===_u?void 0:_u.docs),{source:__assign({originalSource:"{\n  render: props => <>\r\n      <Badge count={2000}>UI</Badge>\r\n      <span style={{\n      paddingLeft: '40px'\n    }} />\r\n      <Badge dot>UI</Badge>\r\n    </>\n}"},null===(_w=null===(_v=exports.MessageShow.parameters)||void 0===_v?void 0:_v.docs)||void 0===_w?void 0:_w.source)})})},"./stories/docs/Badge.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Badge_stories_tsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./stories/Badge.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",ul:"ul",li:"li",h3:"h3",ol:"ol"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_Badge_stories_tsx__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"badge",children:"Badge"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("em",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong",{children:"(wizard-ui自定义组件)"})}),"\r\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p",{children:["2023-6-12 ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://github.xsky.com/fan-mengwen",target:"_blank",rel:"nofollow noopener noreferrer",children:"fanmengwen"})]}),"\r\n出现在按钮、图标、文字旁的数字或状态标记。"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"使用场景",children:"使用场景"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"与其他元素结合使用，用于显示该元素需要处理的消息条数、状态、新功能、数量等。"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"不与其他元素相关联，独立展示状态时，请使用 tag 标签。"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"展示某元素的补充信息或提示信息时，请使用 tooltip 文字提示。"}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"使用原则",children:"使用原则"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"若用于提醒用户处理信息，使用包裹在元素上的红色徽标，信息处理完后，徽标消失。"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"若用于展示状态，使用独立存在于元素左侧或右侧的徽标，用颜色表示状态，数字为零时也不消失。"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"若只用于展示相关元素的数量信息，无吸引用户视觉的需求时，不使用醒目的样式。"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"展示数字时需设置封顶数字，超过则显示（封顶数字+），默认值为99。"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"不建议在一个元素上同时使用两种及以上的徽标。"}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"代码演示",children:"代码演示"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"资源数据状态",children:"资源/数据状态"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ol,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"状态颜色围绕文本展示"}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Badge_stories_tsx__WEBPACK_IMPORTED_MODULE_2__.Variant}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ol,{start:"2",children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"状态颜色与文本分离展示:"}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Badge_stories_tsx__WEBPACK_IMPORTED_MODULE_2__.Dot}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ol,{start:"3",children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"当 count 为 0 时，默认不展示，可以设置为展示："}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Badge_stories_tsx__WEBPACK_IMPORTED_MODULE_2__.NoCount}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"尺寸大小",children:"尺寸大小"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"可以结合 dot 属性设置展示大小。默认为 small。"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Badge_stories_tsx__WEBPACK_IMPORTED_MODULE_2__.Size}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"封顶数值",children:"封顶数值"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"数字展示可以设定最大的数，默认为 99。"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Badge_stories_tsx__WEBPACK_IMPORTED_MODULE_2__.MaxCount}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"消息展示",children:"消息展示"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Badge_stories_tsx__WEBPACK_IMPORTED_MODULE_2__.MessageShow}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"api",children:"API"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Ed,{of:_Badge_stories_tsx__WEBPACK_IMPORTED_MODULE_2__.Basic})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);
"use strict";(self.webpackChunkwizard_ui=self.webpackChunkwizard_ui||[]).push([[3296,4752],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./stories/Popover.stories.tsx":function(__unused_webpack_module,exports,__webpack_require__){var _a,_b,_c,_d,_e,_f,_g,_h,_j,_k,_l,_m,__assign=this&&this.__assign||function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.ArrowShow=exports.Trigger=exports.Placement=exports.Basic=void 0;var react_1=__importDefault(__webpack_require__("./node_modules/react/index.js")),src_1=__webpack_require__("./src/index.ts"),Button=function(props){return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement(src_1.Button,__assign({},props)),react_1.default.createElement("span",{style:{margin:25}}))},meta={title:"DATA DISPLAY/Popover",component:src_1.Popover,argTypes:{trigger:{control:"check",options:["hover","click","focus"]}}};exports.default=meta,exports.Basic={args:{children:react_1.default.createElement("span",null,"鼠标移入会展示提示或者节点元素。"),content:react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement("h4",null,"你好👋！"),react_1.default.createElement("div",null,"这是一段内容！这是一段内容！这是一段内容！"),react_1.default.createElement("div",null,react_1.default.createElement("a",null,"这是一个链接！")))}},exports.Placement={render:function(props){return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement(src_1.Popover,{placement:"right",content:react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement("h4",null,"你好👋！"),react_1.default.createElement("div",null,"这是一段内容！这是一段内容！这是一段内容！"))},react_1.default.createElement(Button,null,"右 right")),react_1.default.createElement(src_1.Popover,{placement:"top",content:react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement("h4",null,"你好👋！"),react_1.default.createElement("div",null,"这是一段内容！这是一段内容！这是一段内容！"))},react_1.default.createElement(Button,null,"上 top")),react_1.default.createElement(src_1.Popover,{placement:"bottom",content:react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement("h4",null,"你好👋！"),react_1.default.createElement("div",null,"这是一段内容！这是一段内容！这是一段内容！"))},react_1.default.createElement(Button,null,"下 bottom")),react_1.default.createElement(src_1.Popover,{placement:"left",content:react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement("h4",null,"你好👋！"),react_1.default.createElement("div",null,"这是一段内容！这是一段内容！这是一段内容！"))},react_1.default.createElement(Button,null,"左 left")))}},exports.Trigger={render:function(props){return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement(src_1.Popover,{placement:"top",content:react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement("h4",null,"你好👋！"),react_1.default.createElement("div",null,"鼠标移开按钮关闭我！"))},react_1.default.createElement(Button,null,"鼠标移入（默认情况） hover")),react_1.default.createElement(src_1.Popover,{placement:"top",content:react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement("h4",null,"你好👋！"),react_1.default.createElement("div",null,"再次点击按钮关闭我！")),trigger:"click"},react_1.default.createElement(Button,null,"点击 click")),react_1.default.createElement(src_1.Popover,{placement:"top",content:react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement("h4",null,"你好👋！"),react_1.default.createElement("div",null,"再次点击按钮或点空白处关闭我！")),trigger:"click",rootClose:!0},react_1.default.createElement(Button,null,"点击 click")))}},exports.ArrowShow={render:function(props){return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement(src_1.Popover,{placement:"top",content:react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement("h4",null,"你好👋！"),react_1.default.createElement("div",null,"这是默认颜色"))},react_1.default.createElement(Button,null,"默认白色")),react_1.default.createElement(src_1.Popover,{shadow:!0,placement:"top",content:react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement("h4",null,"你好👋！"),react_1.default.createElement("div",null,"这是紫颜色"))},react_1.default.createElement(Button,null,"这是紫颜色")))}},exports.Basic.parameters=__assign(__assign({},exports.Basic.parameters),{docs:__assign(__assign({},null===(_a=exports.Basic.parameters)||void 0===_a?void 0:_a.docs),{source:__assign({originalSource:"{\n  args: {\n    children: <span>鼠标移入会展示提示或者节点元素。</span>,\n    content: <>\r\n        <h4>你好👋！</h4>\r\n        <div>这是一段内容！这是一段内容！这是一段内容！</div>\r\n        <div>\r\n          <a>这是一个链接！</a>\r\n        </div>\r\n      </>\n  }\n}"},null===(_c=null===(_b=exports.Basic.parameters)||void 0===_b?void 0:_b.docs)||void 0===_c?void 0:_c.source)})}),exports.Placement.parameters=__assign(__assign({},exports.Placement.parameters),{docs:__assign(__assign({},null===(_d=exports.Placement.parameters)||void 0===_d?void 0:_d.docs),{source:__assign({originalSource:'{\n  render: props => <>\r\n      <Popover placement="right" content={<>\r\n            <h4>你好👋！</h4>\r\n            <div>这是一段内容！这是一段内容！这是一段内容！</div>\r\n          </>}>\r\n        <Button>右 right</Button>\r\n      </Popover>\r\n      <Popover placement="top" content={<>\r\n            <h4>你好👋！</h4>\r\n            <div>这是一段内容！这是一段内容！这是一段内容！</div>\r\n          </>}>\r\n        <Button>上 top</Button>\r\n      </Popover>\r\n      <Popover placement="bottom" content={<>\r\n            <h4>你好👋！</h4>\r\n            <div>这是一段内容！这是一段内容！这是一段内容！</div>\r\n          </>}>\r\n        <Button>下 bottom</Button>\r\n      </Popover>\r\n      <Popover placement="left" content={<>\r\n            <h4>你好👋！</h4>\r\n            <div>这是一段内容！这是一段内容！这是一段内容！</div>\r\n          </>}>\r\n        <Button>左 left</Button>\r\n      </Popover>\r\n    </>\n}'},null===(_f=null===(_e=exports.Placement.parameters)||void 0===_e?void 0:_e.docs)||void 0===_f?void 0:_f.source)})}),exports.Trigger.parameters=__assign(__assign({},exports.Trigger.parameters),{docs:__assign(__assign({},null===(_g=exports.Trigger.parameters)||void 0===_g?void 0:_g.docs),{source:__assign({originalSource:'{\n  render: props => <>\r\n      <Popover placement="top" content={<>\r\n            <h4>你好👋！</h4>\r\n            <div>鼠标移开按钮关闭我！</div>\r\n          </>}>\r\n        <Button>鼠标移入（默认情况） hover</Button>\r\n      </Popover>\r\n      <Popover placement="top" content={<>\r\n            <h4>你好👋！</h4>\r\n            <div>再次点击按钮关闭我！</div>\r\n          </>} trigger="click">\r\n        <Button>点击 click</Button>\r\n      </Popover>\r\n      <Popover placement="top" content={<>\r\n            <h4>你好👋！</h4>\r\n            <div>再次点击按钮或点空白处关闭我！</div>\r\n          </>} trigger="click" rootClose>\r\n        <Button>点击 click</Button>\r\n      </Popover>\r\n    </>\n}'},null===(_j=null===(_h=exports.Trigger.parameters)||void 0===_h?void 0:_h.docs)||void 0===_j?void 0:_j.source)})}),exports.ArrowShow.parameters=__assign(__assign({},exports.ArrowShow.parameters),{docs:__assign(__assign({},null===(_k=exports.ArrowShow.parameters)||void 0===_k?void 0:_k.docs),{source:__assign({originalSource:'{\n  render: props => <>\r\n      <Popover placement="top" content={<>\r\n            <h4>你好👋！</h4>\r\n            <div>这是默认颜色</div>\r\n          </>}>\r\n        <Button>默认白色</Button>\r\n      </Popover>\r\n      <Popover shadow placement="top" content={<>\r\n            <h4>你好👋！</h4>\r\n            <div>这是紫颜色</div>\r\n          </>}>\r\n        <Button>这是紫颜色</Button>\r\n      </Popover>\r\n    </>\n}'},null===(_m=null===(_l=exports.ArrowShow.parameters)||void 0===_l?void 0:_l.docs)||void 0===_m?void 0:_m.source)})})},"./stories/docs/Popover.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Popover_stories_tsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./stories/Popover.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",h3:"h3",ul:"ul",li:"li",code:"code"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_Popover_stories_tsx__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"popover",children:"Popover"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("em",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong",{children:"(react-bootstrap扩展组件)"})}),"\r\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p",{children:["2023-6-19 ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://github.xsky.com/han-chuyou",target:"_blank",rel:"nofollow noopener noreferrer",children:"hanchuyou"})]}),"\r\n弹出的气泡式卡片浮层。"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"使用场景",children:"使用场景"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"当目标元素有进一步的描述和相关操作时，可以收纳到卡片中，根据用户的操作行为进行展现，建议相关操作控件（不包含文字链）不超过3个。"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"当只需要对相关元素补充文字描述说明时，请使用 tooltip 文字提示；"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"当对相关元素有复杂的进一步操作时（3个以上的操作控件），请使用对话框；"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"基本用法",children:"基本用法"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"文本提示",children:"文本提示"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"浮层内可以是容器、标题、内容文本、各种类型信息、各种链接。"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Popover_stories_tsx__WEBPACK_IMPORTED_MODULE_2__.Basic}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"提示方向",children:"提示方向"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"可以指定提示展示的方向；"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:["如果不指定，默认是朝上 ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"top"})," 展示；"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"不指定方向，根据 Popover 在浏览器中的位置，在初次渲染时会调整展示方向，避免提示信息超出窗口，同时可能方便用户查看提示信息。"}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Popover_stories_tsx__WEBPACK_IMPORTED_MODULE_2__.Placement}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"交互方式",children:"交互方式"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"打开：鼠标移入（hover，默认），点击（click）；"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"关闭：鼠标移出或点击空白处；"}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Popover_stories_tsx__WEBPACK_IMPORTED_MODULE_2__.Trigger}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"箭头颜色",children:"箭头颜色"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"默认是白色"}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Popover_stories_tsx__WEBPACK_IMPORTED_MODULE_2__.ArrowShow}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"api",children:"API"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Ed,{})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);
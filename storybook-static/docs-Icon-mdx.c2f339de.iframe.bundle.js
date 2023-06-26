"use strict";(self.webpackChunkwizard_ui=self.webpackChunkwizard_ui||[]).push([[4701,3674],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./stories/Icon.stories.tsx":function(__unused_webpack_module,exports,__webpack_require__){var _a,_b,_c,_d,_e,_f,_g,_h,_j,_k,_l,_m,_o,_p,_q,__assign=this&&this.__assign||function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k),Object.defineProperty(o,k2,{enumerable:!0,get:function(){return m[k]}})}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(o,v){Object.defineProperty(o,"default",{enumerable:!0,value:v})}:function(o,v){o.default=v}),__importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)"default"!==k&&Object.prototype.hasOwnProperty.call(mod,k)&&__createBinding(result,mod,k);return __setModuleDefault(result,mod),result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.allIcons=exports.Cursor=exports.inheritColorSize=exports.Color=exports.Basic=void 0;var react_1=__importDefault(__webpack_require__("./node_modules/react/index.js")),src_1=__webpack_require__("./src/index.ts"),Icons=__importStar(__webpack_require__("./node_modules/wizard-ui-icon/dist/index.js")),lodash_1=__importDefault(__webpack_require__("./node_modules/lodash/lodash.js")),keys=lodash_1.default.keys(Icons),meta={title:"OTHERS/Icon",component:src_1.Icon,args:{type:"os-search-role-fill"},argTypes:{onClick:{table:{type:{summary:"function"}}}}};exports.default=meta,exports.Basic={},exports.Color={args:{color:"primary"}},exports.inheritColorSize={render:function(props){return react_1.default.createElement("div",{style:{fontSize:"40px",color:"#6b58c4"}},react_1.default.createElement(src_1.Icon,{type:"os-search-role-fill"}))}},exports.Cursor={args:{cursor:!0,color:"primary"}},exports.allIcons={render:function(props){return react_1.default.createElement("div",{className:"Icon"},react_1.default.createElement("p",null,"总共有 ",keys.length," 个图标"),react_1.default.createElement("div",{className:"Icon__ul"},keys.map((function(key,index){var Icon=Icons[key],name=lodash_1.default.kebabCase(key);return react_1.default.createElement("div",{className:"Icon__li",key:index},react_1.default.createElement(Icon,null),react_1.default.createElement("p",null,name))}))))}},exports.Basic.parameters=__assign(__assign({},exports.Basic.parameters),{docs:__assign(__assign({},null===(_a=exports.Basic.parameters)||void 0===_a?void 0:_a.docs),{source:__assign({originalSource:"{}"},null===(_c=null===(_b=exports.Basic.parameters)||void 0===_b?void 0:_b.docs)||void 0===_c?void 0:_c.source)})}),exports.Color.parameters=__assign(__assign({},exports.Color.parameters),{docs:__assign(__assign({},null===(_d=exports.Color.parameters)||void 0===_d?void 0:_d.docs),{source:__assign({originalSource:"{\n  args: {\n    color: 'primary'\n  }\n}"},null===(_f=null===(_e=exports.Color.parameters)||void 0===_e?void 0:_e.docs)||void 0===_f?void 0:_f.source)})}),exports.inheritColorSize.parameters=__assign(__assign({},exports.inheritColorSize.parameters),{docs:__assign(__assign({},null===(_g=exports.inheritColorSize.parameters)||void 0===_g?void 0:_g.docs),{source:__assign({originalSource:"{\n  render: props => <div style={{\n    fontSize: '40px',\n    color: '#6b58c4'\n  }}>\r\n      <Icon type=\"os-search-role-fill\" />\r\n    </div>\n}"},null===(_j=null===(_h=exports.inheritColorSize.parameters)||void 0===_h?void 0:_h.docs)||void 0===_j?void 0:_j.source)})}),exports.Cursor.parameters=__assign(__assign({},exports.Cursor.parameters),{docs:__assign(__assign({},null===(_k=exports.Cursor.parameters)||void 0===_k?void 0:_k.docs),{source:__assign({originalSource:"{\n  args: {\n    cursor: true,\n    color: 'primary'\n  }\n}"},null===(_m=null===(_l=exports.Cursor.parameters)||void 0===_l?void 0:_l.docs)||void 0===_m?void 0:_m.source)})}),exports.allIcons.parameters=__assign(__assign({},exports.allIcons.parameters),{docs:__assign(__assign({},null===(_o=exports.allIcons.parameters)||void 0===_o?void 0:_o.docs),{source:__assign({originalSource:'{\n  render: props => {\n    return <div className="Icon">\r\n        <p>总共有 {keys.length} 个图标</p>\r\n        <div className="Icon__ul">\r\n          {keys.map((key, index) => {\n          const Icon = Icons[key];\n          const name = lodash.kebabCase(key);\n          return <div className="Icon__li" key={index}>\r\n                <Icon />\r\n                <p>{name}</p>\r\n              </div>;\n        })}\r\n        </div>\r\n      </div>;\n  }\n}'},null===(_q=null===(_p=exports.allIcons.parameters)||void 0===_p?void 0:_p.docs)||void 0===_q?void 0:_q.source)})})},"./stories/docs/Icon.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Icon_stories_tsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./stories/Icon.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",h3:"h3"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_Icon_stories_tsx__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"icon",children:"Icon"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("em",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong",{children:"(wizard-ui自定义组件)"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p",{children:["2023-6-19 ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://github.xsky.com/fan-mengwen",target:"_blank",rel:"nofollow noopener noreferrer",children:"fanmengwen"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["wizard-ui 内部维护的 ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://github.xsky.com/front-end/wizard-ui-icon",target:"_blank",rel:"nofollow noopener noreferrer",children:"wizard-ui-icons"})," 图标库, 直观展示某个资源或者某种状态。"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"使用场景",children:"使用场景"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"代码演示",children:"代码演示"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"常规",children:"常规"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Icon_stories_tsx__WEBPACK_IMPORTED_MODULE_2__.Basic}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"颜色",children:"颜色"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"通过color设置"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Icon_stories_tsx__WEBPACK_IMPORTED_MODULE_2__.Color}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"默认继承外部字体大小",children:"默认继承外部字体大小"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"默认继承父级字体大小和颜色。"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Icon_stories_tsx__WEBPACK_IMPORTED_MODULE_2__.inheritColorSize}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"交互",children:"交互"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"添加 cursor 属性，实现鼠标 hover 和 active 交互效果，padding 大小为 6px;"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Icon_stories_tsx__WEBPACK_IMPORTED_MODULE_2__.Cursor}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"所有图标",children:"所有图标"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Icon_stories_tsx__WEBPACK_IMPORTED_MODULE_2__.allIcons}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"api",children:"API"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Ed,{})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);
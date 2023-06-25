"use strict";(self.webpackChunkwizard_ui=self.webpackChunkwizard_ui||[]).push([[9582,8100],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./stories/InputGroup.stories.tsx":function(__unused_webpack_module,exports,__webpack_require__){var _a,_b,_c,_d,_e,_f,_g,_h,_j,__assign=this&&this.__assign||function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__read=this&&this.__read||function(o,n){var m="function"==typeof Symbol&&o[Symbol.iterator];if(!m)return o;var r,e,i=m.call(o),ar=[];try{for(;(void 0===n||n-- >0)&&!(r=i.next()).done;)ar.push(r.value)}catch(error){e={error}}finally{try{r&&!r.done&&(m=i.return)&&m.call(i)}finally{if(e)throw e.error}}return ar},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.HasDropdown=exports.HasAddon=exports.Basic=void 0;var react_1=__importDefault(__webpack_require__("./node_modules/react/index.js")),src_1=__webpack_require__("./src/index.ts"),meta={title:"FORM/InputGroup",component:src_1.InputGroup};exports.default=meta,exports.Basic={render:function(props){return react_1.default.createElement(src_1.InputGroup,null,react_1.default.createElement(src_1.FormControl,{type:"text",disabled:!0}),react_1.default.createElement(src_1.Button,null,"选择文件"))}},exports.HasAddon={render:function(props){return react_1.default.createElement("div",null,react_1.default.createElement("p",null,react_1.default.createElement("div",null,"后缀"),react_1.default.createElement(src_1.InputGroup,null,react_1.default.createElement(src_1.FormControl,{type:"text"}),react_1.default.createElement(src_1.InputGroup.Text,null,".com"))),react_1.default.createElement("p",null,react_1.default.createElement("div",null,"前缀"),react_1.default.createElement(src_1.InputGroup,null,react_1.default.createElement(src_1.InputGroup.Text,null,"http://"),react_1.default.createElement(src_1.FormControl,{type:"text"}))))}},exports.HasDropdown={render:function(props){var _a=__read(react_1.default.useState(!0),2),isHour=_a[0],setIsHour=_a[1],menu=[{eventKey:"hour",onSelect:handleStepUnitChange,title:"小时"},{eventKey:"minute",onSelect:handleStepUnitChange,title:"分钟"}];function handleStepUnitChange(key){setIsHour("hour"===key)}return react_1.default.createElement("div",{style:{width:"300px"}},react_1.default.createElement(src_1.InputGroup,null,react_1.default.createElement(src_1.FormControl,{type:"number"}),react_1.default.createElement(src_1.DropdownButton,{id:"unit-dropdown",as:src_1.InputGroup,title:isHour?"小时":"分钟",menu})))}},exports.Basic.parameters=__assign(__assign({},exports.Basic.parameters),{docs:__assign(__assign({},null===(_a=exports.Basic.parameters)||void 0===_a?void 0:_a.docs),{source:__assign({originalSource:'{\n  render: props => <InputGroup>\r\n      <FormControl type="text" disabled />\r\n      <Button>选择文件</Button>\r\n    </InputGroup>\n}'},null===(_c=null===(_b=exports.Basic.parameters)||void 0===_b?void 0:_b.docs)||void 0===_c?void 0:_c.source)})}),exports.HasAddon.parameters=__assign(__assign({},exports.HasAddon.parameters),{docs:__assign(__assign({},null===(_d=exports.HasAddon.parameters)||void 0===_d?void 0:_d.docs),{source:__assign({originalSource:'{\n  render: props => <div>\r\n      <p>\r\n        <div>后缀</div>\r\n        <InputGroup>\r\n          <FormControl type="text" />\r\n          <InputGroup.Text>.com</InputGroup.Text>\r\n        </InputGroup>\r\n      </p>\r\n      <p>\r\n        <div>前缀</div>\r\n        <InputGroup>\r\n          <InputGroup.Text>http://</InputGroup.Text>\r\n          <FormControl type="text" />\r\n        </InputGroup>\r\n      </p>\r\n    </div>\n}'},null===(_f=null===(_e=exports.HasAddon.parameters)||void 0===_e?void 0:_e.docs)||void 0===_f?void 0:_f.source)})}),exports.HasDropdown.parameters=__assign(__assign({},exports.HasDropdown.parameters),{docs:__assign(__assign({},null===(_g=exports.HasDropdown.parameters)||void 0===_g?void 0:_g.docs),{source:__assign({originalSource:"{\n  render: props => {\n    const [isHour, setIsHour] = React.useState(true);\n    const menu = [{\n      eventKey: 'hour',\n      onSelect: handleStepUnitChange,\n      title: '小时'\n    }, {\n      eventKey: 'minute',\n      onSelect: handleStepUnitChange,\n      title: '分钟'\n    }];\n    function handleStepUnitChange(key: string) {\n      setIsHour(key === 'hour' ? true : false);\n    }\n    return <div style={{\n      width: '300px'\n    }}>\r\n        <InputGroup>\r\n          <FormControl type=\"number\" />\r\n          <DropdownButton id=\"unit-dropdown\" as={InputGroup} title={isHour ? '小时' : '分钟'} menu={menu} />\r\n        </InputGroup>\r\n      </div>;\n  }\n}"},null===(_j=null===(_h=exports.HasDropdown.parameters)||void 0===_h?void 0:_h.docs)||void 0===_j?void 0:_j.source)})})},"./stories/docs/InputGroup.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_InputGroup_stories_tsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./stories/InputGroup.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_InputGroup_stories_tsx__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"inputgroup",children:"InputGroup"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("em",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong",{children:"(react-bootstrap扩展组件)"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p",{children:["2023-6-14 ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://github.xsky.com/peishan",target:"_blank",rel:"nofollow noopener noreferrer",children:"peishan"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_InputGroup_stories_tsx__WEBPACK_IMPORTED_MODULE_2__.Basic}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_InputGroup_stories_tsx__WEBPACK_IMPORTED_MODULE_2__.HasAddon}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_InputGroup_stories_tsx__WEBPACK_IMPORTED_MODULE_2__.HasDropdown}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"api",children:"API"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["详情请见",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a",{href:"https://react-bootstrap.github.io/docs/forms/input-group/#inputgroup",children:"InputGroup"})]})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);
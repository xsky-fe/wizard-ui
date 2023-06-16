"use strict";(self.webpackChunkwizard_ui=self.webpackChunkwizard_ui||[]).push([[7802,9226],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./stories/SplitButton.stories.tsx":function(__unused_webpack_module,exports,__webpack_require__){var _a,_b,_c,__assign=this&&this.__assign||function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.Basic=void 0;var react_1=__importDefault(__webpack_require__("./node_modules/react/index.js")),react_bootstrap_1=__webpack_require__("./node_modules/react-bootstrap/esm/index.js"),meta={title:"COMPONENTS/SplitButton",component:react_bootstrap_1.SplitButton,decorators:[function(Story){return react_1.default.createElement("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"70px"}},react_1.default.createElement(Story,null))}]};exports.default=meta,exports.Basic={render:function(props){return react_1.default.createElement(react_1.default.Fragment,null,["Primary","Secondary","Success","Info","Warning","Danger"].map((function(variant){return react_1.default.createElement(react_bootstrap_1.SplitButton,{key:variant,id:"dropdown-split-variants-"+variant,variant:variant.toLowerCase(),title:variant},react_1.default.createElement(react_bootstrap_1.Dropdown.Item,{eventKey:"1"},"Action"),react_1.default.createElement(react_bootstrap_1.Dropdown.Item,{eventKey:"2"},"Another action"),react_1.default.createElement(react_bootstrap_1.Dropdown.Item,{eventKey:"3",active:!0},"Active Item"),react_1.default.createElement(react_bootstrap_1.Dropdown.Divider,null),react_1.default.createElement(react_bootstrap_1.Dropdown.Item,{eventKey:"4"},"Separated link"))})))}},exports.Basic.parameters=__assign(__assign({},exports.Basic.parameters),{docs:__assign(__assign({},null===(_a=exports.Basic.parameters)||void 0===_a?void 0:_a.docs),{source:__assign({originalSource:"{\n  render: props => <>\r\n      {['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Danger'].map(variant => <SplitButton key={variant} id={`dropdown-split-variants-${variant}`} variant={variant.toLowerCase()} title={variant}>\r\n          <Dropdown.Item eventKey=\"1\">Action</Dropdown.Item>\r\n          <Dropdown.Item eventKey=\"2\">Another action</Dropdown.Item>\r\n          <Dropdown.Item eventKey=\"3\" active>\r\n            Active Item\r\n          </Dropdown.Item>\r\n          <Dropdown.Divider />\r\n          <Dropdown.Item eventKey=\"4\">Separated link</Dropdown.Item>\r\n        </SplitButton>)}\r\n    </>\n}"},null===(_c=null===(_b=exports.Basic.parameters)||void 0===_b?void 0:_b.docs)||void 0===_c?void 0:_c.source)})})},"./stories/SplitButton.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_SplitButton_stories_tsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./stories/SplitButton.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2",p:"p"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_SplitButton_stories_tsx__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"splitbutton",children:"SplitButton"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_SplitButton_stories_tsx__WEBPACK_IMPORTED_MODULE_2__.Basic}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"api",children:"API"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["详情请见",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a",{href:"https://react-bootstrap.github.io/docs/components/dropdowns/#splitbutton",children:"SplitButton"})]})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);
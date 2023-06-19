"use strict";(self.webpackChunkwizard_ui=self.webpackChunkwizard_ui||[]).push([[5414,1249],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./stories/Radio.stories.tsx":function(__unused_webpack_module,exports,__webpack_require__){var _a,_b,_c,_d,_e,_f,__assign=this&&this.__assign||function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.WithHelpText=exports.Basic=void 0;var react_1=__importDefault(__webpack_require__("./node_modules/react/index.js")),react_bootstrap_1=__webpack_require__("./node_modules/react-bootstrap/esm/index.js");exports.default={title:"FORM/Radio"},exports.Basic={render:function(props){return react_1.default.createElement(react_bootstrap_1.Form,null,react_1.default.createElement(react_bootstrap_1.Form.Group,{as:react_bootstrap_1.Row},react_1.default.createElement(react_bootstrap_1.Form.Label,{column:!0,xs:"auto"},"性能优先级:"),react_1.default.createElement(react_bootstrap_1.Col,{xs:"auto",style:{padding:"7px 0"}},react_1.default.createElement(react_bootstrap_1.Form.Check,{inline:!0,name:"name1",type:"radio",id:"default",label:"默认",value:"default"}),react_1.default.createElement(react_bootstrap_1.Form.Check,{inline:!0,name:"name1",type:"radio",id:"priority",label:"优先",value:"priority"}))))}},exports.WithHelpText={render:function(props){return react_1.default.createElement(react_bootstrap_1.Form,null,react_1.default.createElement(react_bootstrap_1.Form.Group,{as:react_bootstrap_1.Row},react_1.default.createElement(react_bootstrap_1.Form.Label,{column:!0,xs:"auto"},"迁移速度级别:"),react_1.default.createElement(react_bootstrap_1.Col,{xs:"auto",style:{padding:"7px 0"}},react_1.default.createElement(react_bootstrap_1.Form.Check,{name:"name1",type:"radio",id:"low",label:"低速",value:"low"}),react_1.default.createElement(react_bootstrap_1.Form.Text,{style:{marginLeft:"1.5em"}},"以较低的速度迁移数据，迁移时间可能较长，但是基本不影响业务。"),react_1.default.createElement(react_bootstrap_1.Form.Check,{name:"name1",type:"radio",id:"middle",label:"中速",value:"middle"}),react_1.default.createElement(react_bootstrap_1.Form.Text,{style:{marginLeft:"1.5em"}},"以中等的速度迁移数据，迁移时间适中，在大部分场景不影响业务，除非业务压力很大。"),react_1.default.createElement(react_bootstrap_1.Form.Check,{name:"name1",type:"radio",id:"hight",label:"高速",value:"hight"}),react_1.default.createElement(react_bootstrap_1.Form.Text,{style:{marginLeft:"1.5em"}},"以较高的速度迁移数据，迁移时间较短，可能会影响业务的 IO 时延。"))))}},exports.Basic.parameters=__assign(__assign({},exports.Basic.parameters),{docs:__assign(__assign({},null===(_a=exports.Basic.parameters)||void 0===_a?void 0:_a.docs),{source:__assign({originalSource:'{\n  render: props => <Form>\r\n      <Form.Group as={Row}>\r\n        <Form.Label column xs="auto">\r\n          性能优先级:\r\n        </Form.Label>\r\n        <Col xs="auto" style={{\n        padding: \'7px 0\'\n      }}>\r\n          <Form.Check inline name="name1" type="radio" id="default" label="默认" value="default" />\r\n          <Form.Check inline name="name1" type="radio" id="priority" label="优先" value="priority" />\r\n        </Col>\r\n      </Form.Group>\r\n    </Form>\n}'},null===(_c=null===(_b=exports.Basic.parameters)||void 0===_b?void 0:_b.docs)||void 0===_c?void 0:_c.source)})}),exports.WithHelpText.parameters=__assign(__assign({},exports.WithHelpText.parameters),{docs:__assign(__assign({},null===(_d=exports.WithHelpText.parameters)||void 0===_d?void 0:_d.docs),{source:__assign({originalSource:'{\n  render: props => <Form>\r\n      <Form.Group as={Row}>\r\n        <Form.Label column xs="auto">\r\n          迁移速度级别:\r\n        </Form.Label>\r\n        <Col xs="auto" style={{\n        padding: \'7px 0\'\n      }}>\r\n          <Form.Check name="name1" type="radio" id="low" label="低速" value="low" />\r\n          <Form.Text style={{\n          marginLeft: \'1.5em\'\n        }}>\r\n            以较低的速度迁移数据，迁移时间可能较长，但是基本不影响业务。\r\n          </Form.Text>\r\n          <Form.Check name="name1" type="radio" id="middle" label="中速" value="middle" />\r\n          <Form.Text style={{\n          marginLeft: \'1.5em\'\n        }}>\r\n            以中等的速度迁移数据，迁移时间适中，在大部分场景不影响业务，除非业务压力很大。\r\n          </Form.Text>\r\n          <Form.Check name="name1" type="radio" id="hight" label="高速" value="hight" />\r\n          <Form.Text style={{\n          marginLeft: \'1.5em\'\n        }}>\r\n            以较高的速度迁移数据，迁移时间较短，可能会影响业务的 IO 时延。\r\n          </Form.Text>\r\n        </Col>\r\n      </Form.Group>\r\n    </Form>\n}'},null===(_f=null===(_e=exports.WithHelpText.parameters)||void 0===_e?void 0:_e.docs)||void 0===_f?void 0:_f.source)})})},"./stories/Radio.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Radio_stories_tsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./stories/Radio.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2",p:"p"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_Radio_stories_tsx__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"radio",children:"Radio"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Radio_stories_tsx__WEBPACK_IMPORTED_MODULE_2__.Basic}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Radio_stories_tsx__WEBPACK_IMPORTED_MODULE_2__.WithHelpText}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"api",children:"API"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["详情请见",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a",{href:"https://react-bootstrap.github.io/docs/forms/checks-radios/#formcheck",children:"FormCheck"})]})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);
"use strict";(self.webpackChunkwizard_ui=self.webpackChunkwizard_ui||[]).push([[1512,32],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./stories/Modal.stories.tsx":function(__unused_webpack_module,exports,__webpack_require__){var _a,_b,_c,_d,_e,_f,_g,_h,_j,_k,_l,_m,__assign=this&&this.__assign||function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__read=this&&this.__read||function(o,n){var m="function"==typeof Symbol&&o[Symbol.iterator];if(!m)return o;var r,e,i=m.call(o),ar=[];try{for(;(void 0===n||n-- >0)&&!(r=i.next()).done;)ar.push(r.value)}catch(error){e={error}}finally{try{r&&!r.done&&(m=i.return)&&m.call(i)}finally{if(e)throw e.error}}return ar},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.HideFooter=exports.Center=exports.Size=exports.Basic=void 0;var react_1=__importDefault(__webpack_require__("./node_modules/react/index.js")),src_1=__webpack_require__("./src/index.ts"),meta={title:"DATA SHOW/Modal",component:src_1.Modal},ModalPicker=function(props){var _a=__read(react_1.default.useState(!1),2),show=_a[0],setShow=_a[1],handleHide=function(){return setShow(!1)};return react_1.default.createElement("div",null,react_1.default.createElement(src_1.Button,{variant:"primary",onClick:function(){return setShow(!0)}},react_1.default.createElement("span",null,"打开对话框")),react_1.default.createElement(src_1.Modal,__assign({title:"弹出框时间选择器",show,onHide:handleHide,onOk:handleHide,preventDragByTitle:!0},props),react_1.default.createElement(src_1.DatePicker,{defaultValue:"2019-08-13 12:02:53"})))};exports.default=meta,exports.Basic={render:function(props){return react_1.default.createElement(ModalPicker,null)}},exports.Size={render:function(props){return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement(ModalPicker,{size:"sm"}),react_1.default.createElement("br",null),react_1.default.createElement(ModalPicker,null),react_1.default.createElement("br",null),react_1.default.createElement(ModalPicker,{size:"lg"}),react_1.default.createElement("br",null),react_1.default.createElement(ModalPicker,{size:"xl"}))}},exports.Center={render:function(props){return react_1.default.createElement(ModalPicker,{centered:!0})}},exports.HideFooter={render:function(props){return react_1.default.createElement(ModalPicker,{hideFooter:!0})}},exports.Basic.parameters=__assign(__assign({},exports.Basic.parameters),{docs:__assign(__assign({},null===(_a=exports.Basic.parameters)||void 0===_a?void 0:_a.docs),{source:__assign({originalSource:"{\n  render: props => <ModalPicker />\n}"},null===(_c=null===(_b=exports.Basic.parameters)||void 0===_b?void 0:_b.docs)||void 0===_c?void 0:_c.source)})}),exports.Size.parameters=__assign(__assign({},exports.Size.parameters),{docs:__assign(__assign({},null===(_d=exports.Size.parameters)||void 0===_d?void 0:_d.docs),{source:__assign({originalSource:'{\n  render: props => <>\r\n      <ModalPicker size="sm" />\r\n      <br />\r\n      <ModalPicker />\r\n      <br />\r\n      <ModalPicker size="lg" />\r\n      <br />\r\n      <ModalPicker size="xl" />\r\n    </>\n}'},null===(_f=null===(_e=exports.Size.parameters)||void 0===_e?void 0:_e.docs)||void 0===_f?void 0:_f.source)})}),exports.Center.parameters=__assign(__assign({},exports.Center.parameters),{docs:__assign(__assign({},null===(_g=exports.Center.parameters)||void 0===_g?void 0:_g.docs),{source:__assign({originalSource:"{\n  render: props => <ModalPicker centered />\n}"},null===(_j=null===(_h=exports.Center.parameters)||void 0===_h?void 0:_h.docs)||void 0===_j?void 0:_j.source)})}),exports.HideFooter.parameters=__assign(__assign({},exports.HideFooter.parameters),{docs:__assign(__assign({},null===(_k=exports.HideFooter.parameters)||void 0===_k?void 0:_k.docs),{source:__assign({originalSource:"{\n  render: props => <ModalPicker hideFooter />\n}"},null===(_m=null===(_l=exports.HideFooter.parameters)||void 0===_l?void 0:_l.docs)||void 0===_m?void 0:_m.source)})})},"./stories/Modal.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Modal_stories_tsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./stories/Modal.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",h3:"h3"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_Modal_stories_tsx__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"modal",children:"Modal"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"对话弹出框。"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"何时使用",children:"何时使用"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["在处理某个事务，不希望跳转到其他页面导致当前工作被打断。可以使用",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"对话框"}),"在当前页面打开一个浮层，承载对应的操作。"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"基本用法",children:"基本用法"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"默认展示",children:"默认展示"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hw,{code:'const ModalPicker = (props?: Partial<ModalProps>) => {\n  const [show, setShow] = React.useState(false);\n  const handleClick = () => setShow(true);\n  const handleHide = () => setShow(false);\n  return (\n    <div>\n      <Button variant="primary" onClick={handleClick}>\n        <span>打开对话框</span>\n      </Button>\n      <Modal\n        title="弹出框时间选择器"\n        show={show}\n        onHide={handleHide}\n        onOk={handleHide}\n        preventDragByTitle\n        {...props}\n      >\n        <DatePicker defaultValue="2019-08-13 12:02:53" />\n      </Modal>\n    </div>\n  );\n};'}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Modal_stories_tsx__WEBPACK_IMPORTED_MODULE_2__.Basic}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"大小",children:"大小"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"对话框可以设置成四种大小：小(sm)、中(默认)、大(lg)、最大(xl)"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Modal_stories_tsx__WEBPACK_IMPORTED_MODULE_2__.Size}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"垂直居中",children:"垂直居中"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Modal_stories_tsx__WEBPACK_IMPORTED_MODULE_2__.Center}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"隐藏-footer",children:"隐藏 footer"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Modal_stories_tsx__WEBPACK_IMPORTED_MODULE_2__.HideFooter}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"api",children:"API"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Ed,{})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);
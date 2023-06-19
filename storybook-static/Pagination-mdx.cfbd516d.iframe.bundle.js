"use strict";(self.webpackChunkwizard_ui=self.webpackChunkwizard_ui||[]).push([[8846,9443],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./stories/Pagination.stories.tsx":function(__unused_webpack_module,exports,__webpack_require__){var _a,_b,_c,_d,_e,_f,__assign=this&&this.__assign||function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__read=this&&this.__read||function(o,n){var m="function"==typeof Symbol&&o[Symbol.iterator];if(!m)return o;var r,e,i=m.call(o),ar=[];try{for(;(void 0===n||n-- >0)&&!(r=i.next()).done;)ar.push(r.value)}catch(error){e={error}}finally{try{r&&!r.done&&(m=i.return)&&m.call(i)}finally{if(e)throw e.error}}return ar},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.Size=exports.Basic=void 0;var react_1=__importDefault(__webpack_require__("./node_modules/react/index.js")),src_1=__webpack_require__("./src/index.ts"),react_bootstrap_1=__webpack_require__("./node_modules/react-bootstrap/esm/index.js"),meta={title:"COMPONENTS/Pagination",component:src_1.Pagination,argTypes:{maxButtons:{table:{defaultValue:{summary:5}}}}};exports.default=meta;var Demo=function(_a){var size=_a.size,items=Array.from({length:10},(function(_,i){return i+1})),_b=__read(react_1.default.useState(2),2),active=_b[0],setActive=_b[1],handleChangePage=function(page){setActive(page)};return react_1.default.createElement(react_bootstrap_1.Pagination,{size},react_1.default.createElement(react_bootstrap_1.Pagination.First,{disabled:1===active,onClick:function(){return handleChangePage(1)}}),react_1.default.createElement(react_bootstrap_1.Pagination.Prev,{disabled:1===active,onClick:function(){return handleChangePage(active-1)}}),items.map((function(page){return react_1.default.createElement(react_bootstrap_1.Pagination.Item,{key:page,active:page===active,onClick:function(){return handleChangePage(page)}},page)})),react_1.default.createElement(react_bootstrap_1.Pagination.Next,{disabled:10===active,onClick:function(){return handleChangePage(active+1)}}),react_1.default.createElement(react_bootstrap_1.Pagination.Last,{disabled:10===active,onClick:function(){return handleChangePage(10)}}))};exports.Basic={render:function(props){return react_1.default.createElement(src_1.Pagination,{prev:!1,next:!0,first:!1,last:!1,maxButtons:6,items:6,activePage:1,onSelectChange:function(){},size:"sm",className:"Table__pagination-pagination"})}},exports.Size={render:function(props){return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement(Demo,{size:"sm"}),react_1.default.createElement(Demo,{size:"lg"}))}},exports.Basic.parameters=__assign(__assign({},exports.Basic.parameters),{docs:__assign(__assign({},null===(_a=exports.Basic.parameters)||void 0===_a?void 0:_a.docs),{source:__assign({originalSource:'{\n  render: props => <BsPagination prev={false} next={true} first={false} last={false} maxButtons={6} items={6} activePage={1} onSelectChange={() => {}} size="sm" className="Table__pagination-pagination" />\n}'},null===(_c=null===(_b=exports.Basic.parameters)||void 0===_b?void 0:_b.docs)||void 0===_c?void 0:_c.source)})}),exports.Size.parameters=__assign(__assign({},exports.Size.parameters),{docs:__assign(__assign({},null===(_d=exports.Size.parameters)||void 0===_d?void 0:_d.docs),{source:__assign({originalSource:'{\n  render: props => <>\r\n      <Demo size="sm" />\r\n      <Demo size="lg" />\r\n    </>\n}'},null===(_f=null===(_e=exports.Size.parameters)||void 0===_e?void 0:_e.docs)||void 0===_f?void 0:_f.source)})})},"./stories/Pagination.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Pagination_stories_tsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./stories/Pagination.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",h3:"h3",code:"code"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_Pagination_stories_tsx__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"pagination",children:"Pagination"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"采用分页的形式分隔长列表，每次只加载一个页面。"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"何时使用",children:"何时使用"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"当加载/渲染所有数据将花费很多时间时；"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"可切换页码浏览数据。"}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"基本用法",children:"基本用法"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"交互",children:"交互"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"<<"})," 首页"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:">>"})," 最后一页"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"<"})," 上一页"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:">"})," 下一页"]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"默认",children:"默认"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Pagination_stories_tsx__WEBPACK_IMPORTED_MODULE_2__.Basic}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"大小",children:"大小"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Pagination_stories_tsx__WEBPACK_IMPORTED_MODULE_2__.Size}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"api",children:"API"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Ed,{of:_Pagination_stories_tsx__WEBPACK_IMPORTED_MODULE_2__.Basic})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);
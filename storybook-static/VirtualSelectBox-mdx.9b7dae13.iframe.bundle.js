"use strict";(self.webpackChunkwizard_ui=self.webpackChunkwizard_ui||[]).push([[3086,7458],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./stories/VirtualSelectBox.stories.tsx":function(__unused_webpack_module,exports,__webpack_require__){var _a,_b,_c,_d,_e,_f,_g,_h,_j,_k,_l,_m,__assign=this&&this.__assign||function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__awaiter=this&&this.__awaiter||function(thisArg,_arguments,P,generator){return new(P||(P=Promise))((function(resolve,reject){function fulfilled(value){try{step(generator.next(value))}catch(e){reject(e)}}function rejected(value){try{step(generator.throw(value))}catch(e){reject(e)}}function step(result){result.done?resolve(result.value):function adopt(value){return value instanceof P?value:new P((function(resolve){resolve(value)}))}(result.value).then(fulfilled,rejected)}step((generator=generator.apply(thisArg,_arguments||[])).next())}))},__generator=this&&this.__generator||function(thisArg,body){var f,y,t,g,_={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return g={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return function step(op){if(f)throw new TypeError("Generator is already executing.");for(;_;)try{if(f=1,y&&(t=2&op[0]?y.return:op[0]?y.throw||((t=y.return)&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;switch(y=0,t&&(op=[2&op[0],t.value]),op[0]){case 0:case 1:t=op;break;case 4:return _.label++,{value:op[1],done:!1};case 5:_.label++,y=op[1],op=[0];continue;case 7:op=_.ops.pop(),_.trys.pop();continue;default:if(!(t=_.trys,(t=t.length>0&&t[t.length-1])||6!==op[0]&&2!==op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1],t=op;break}if(t&&_.label<t[2]){_.label=t[2],_.ops.push(op);break}t[2]&&_.ops.pop(),_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e],y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}([n,v])}}},__read=this&&this.__read||function(o,n){var m="function"==typeof Symbol&&o[Symbol.iterator];if(!m)return o;var r,e,i=m.call(o),ar=[];try{for(;(void 0===n||n-- >0)&&!(r=i.next()).done;)ar.push(r.value)}catch(error){e={error}}finally{try{r&&!r.done&&(m=i.return)&&m.call(i)}finally{if(e)throw e.error}}return ar},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.MultiWithAsyncDatas=exports.AsyncDatasWithClear=exports.AsyncDatas=exports.EmptyData=void 0;var react_1=__importDefault(__webpack_require__("./node_modules/react/index.js")),src_1=__webpack_require__("./src/index.ts"),utils_1=__webpack_require__("./src/utils/index.ts"),lodash_1=__webpack_require__("./node_modules/lodash/lodash.js"),meta={title:"DATA SHOW/VirtualSelectBox",component:src_1.VirtualSelectBox};exports.default=meta;function getEmptyDatas(query){return utils_1.getMockDatas(query,0,"list")}function getDatas(query){return utils_1.getMockDatas(query,180,"list")}var AsyncWithES=function(_a){var clear=_a.clear,multi=_a.multi,_b=__read(react_1.default.useState({id:1,name:"list-1"}),2),item=_b[0],setItem=_b[1],_c=__read(react_1.default.useState([]),2),value=_c[0],setValue=_c[1],onSelect=react_1.default.useCallback((function(i){multi?setValue(i):setItem(i)}),[setItem,setValue]);return react_1.default.createElement(src_1.VirtualSelectBox,{onSelect,item,fetchData:function(isReloading,dQuery,search){return void 0===dQuery&&(dQuery={}),__awaiter(void 0,void 0,void 0,(function(){var extraQuery,resNamePlural,query,qArr,actionResult,items,totalCount,error;return __generator(this,(function(_a){switch(_a.label){case 0:return"name",extraQuery={},resNamePlural="lists",query=dQuery,isReloading?(qArr=utils_1.elasticQuery.toArr(lodash_1.get(dQuery,"q","")),search&&qArr.push({type:"name",value:search}),lodash_1.isEmpty(extraQuery)||(qArr=lodash_1.concat(qArr,utils_1.elasticQuery.toArr(extraQuery.q))),query=__assign(__assign(__assign({},dQuery),extraQuery),{limit:30,offset:0,q:utils_1.elasticQuery.toStr(qArr)})):query=__assign(__assign({},extraQuery),dQuery),[4,getDatas(query)];case 1:return actionResult=_a.sent(),items=lodash_1.get(actionResult,"response."+resNamePlural,[]),totalCount=lodash_1.get(actionResult,"response.paging.totalCount"),error=lodash_1.get(actionResult,"error"),[2,{query,items,totalCount,error}]}}))}))},clear,multi:!!multi,value})};exports.EmptyData={args:{item:{},fetchData:function(isReloading,dQuery){return void 0===dQuery&&(dQuery={}),__awaiter(void 0,void 0,void 0,(function(){var resNamePlural,query,actionResult,items,totalCount;return __generator(this,(function(_a){switch(_a.label){case 0:return resNamePlural="lists",[4,getEmptyDatas(query=__assign(__assign({},dQuery),{limit:30,offset:0}))];case 1:return actionResult=_a.sent(),items=lodash_1.get(actionResult,"response."+resNamePlural,[]),totalCount=lodash_1.get(actionResult,"response.paging.totalCount"),[2,{query,items,totalCount}]}}))}))}}},exports.AsyncDatas={render:function(props){return react_1.default.createElement(AsyncWithES,null)}},exports.AsyncDatasWithClear={render:function(props){return react_1.default.createElement(AsyncWithES,{clear:!0})}},exports.MultiWithAsyncDatas={render:function(props){return react_1.default.createElement(AsyncWithES,{multi:!0})}},exports.EmptyData.parameters=__assign(__assign({},exports.EmptyData.parameters),{docs:__assign(__assign({},null===(_a=exports.EmptyData.parameters)||void 0===_a?void 0:_a.docs),{source:__assign({originalSource:"{\n  args: {\n    item: {},\n    fetchData: fetchEmptyDatas\n  }\n}"},null===(_c=null===(_b=exports.EmptyData.parameters)||void 0===_b?void 0:_b.docs)||void 0===_c?void 0:_c.source)})}),exports.AsyncDatas.parameters=__assign(__assign({},exports.AsyncDatas.parameters),{docs:__assign(__assign({},null===(_d=exports.AsyncDatas.parameters)||void 0===_d?void 0:_d.docs),{source:__assign({originalSource:"{\n  render: props => <AsyncWithES />\n}"},null===(_f=null===(_e=exports.AsyncDatas.parameters)||void 0===_e?void 0:_e.docs)||void 0===_f?void 0:_f.source)})}),exports.AsyncDatasWithClear.parameters=__assign(__assign({},exports.AsyncDatasWithClear.parameters),{docs:__assign(__assign({},null===(_g=exports.AsyncDatasWithClear.parameters)||void 0===_g?void 0:_g.docs),{source:__assign({originalSource:"{\n  render: props => <AsyncWithES clear />\n}"},null===(_j=null===(_h=exports.AsyncDatasWithClear.parameters)||void 0===_h?void 0:_h.docs)||void 0===_j?void 0:_j.source)})}),exports.MultiWithAsyncDatas.parameters=__assign(__assign({},exports.MultiWithAsyncDatas.parameters),{docs:__assign(__assign({},null===(_k=exports.MultiWithAsyncDatas.parameters)||void 0===_k?void 0:_k.docs),{source:__assign({originalSource:"{\n  render: props => <AsyncWithES multi />\n}"},null===(_m=null===(_l=exports.MultiWithAsyncDatas.parameters)||void 0===_l?void 0:_l.docs)||void 0===_m?void 0:_m.source)})})},"./stories/VirtualSelectBox.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_VirtualSelectBox_stories_tsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./stories/VirtualSelectBox.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",ul:"ul",li:"li",h2:"h2",p:"p",code:"code",pre:"pre",h3:"h3"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_VirtualSelectBox_stories_tsx__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"virtualselectbox",children:"VirtualSelectBox"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"在大量异步数据中选择需要的数据，支持滚动加载和搜索；"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"支持单选和多选。"}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"限制条件",children:"限制条件"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["异步 ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"API"})," 支持获取部分数据（分页），query 的格式如下：\n表示从第 20 条数据开始取10 条数据。"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-javascript",children:"{\n  // 取 10 条数据\n  limit: 10,\n  // 从第 20 条数据开始取\n  offset: 20\n}\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"fetchData"})," 异步数据 ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"API"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Promise"})," 返回数据结构没有严格要求，通用模拟结构如下："]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-javascript",children:"const fetchData = () => new Promise((resolve, reject) => {\n  setTimeout(() => {\n    resolve({\n      response: {\n        resNames: [xxx],\n        paging: {\n          totalCount: xxx\n        }\n      }\n    });\n    reject({\n      error: xxx,\n    });\n  }, time);\n});\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"item"})," 选中项，允许为空对象 ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"{}"})," 或者 ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:'""'}),"，具体使用："]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-javascript",children:"<VirtualSelectBox\n  item={item}\n  fetchData={getDatas}\n/>\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"基本用法",children:"基本用法"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"空数据",children:"空数据"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_VirtualSelectBox_stories_tsx__WEBPACK_IMPORTED_MODULE_2__.EmptyData}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"有数据单选",children:"有数据单选"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_VirtualSelectBox_stories_tsx__WEBPACK_IMPORTED_MODULE_2__.AsyncDatas}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"有数据单选带清除",children:"有数据单选(带清除)"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_VirtualSelectBox_stories_tsx__WEBPACK_IMPORTED_MODULE_2__.AsyncDatasWithClear}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"有数据多选",children:"有数据多选"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_VirtualSelectBox_stories_tsx__WEBPACK_IMPORTED_MODULE_2__.MultiWithAsyncDatas}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"api",children:"API"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Ed,{})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);
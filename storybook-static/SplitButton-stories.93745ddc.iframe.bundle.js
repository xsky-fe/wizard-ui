"use strict";(self.webpackChunkwizard_ui=self.webpackChunkwizard_ui||[]).push([[9226],{"./stories/SplitButton.stories.tsx":function(__unused_webpack_module,exports,__webpack_require__){var _a,_b,_c,__assign=this&&this.__assign||function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.Basic=void 0;var react_1=__importDefault(__webpack_require__("./node_modules/react/index.js")),react_bootstrap_1=__webpack_require__("./node_modules/react-bootstrap/esm/index.js"),meta={title:"COMPONENTS/SplitButton",component:react_bootstrap_1.SplitButton,decorators:[function(Story){return react_1.default.createElement("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"70px"}},react_1.default.createElement(Story,null))}]};exports.default=meta,exports.Basic={render:function(props){return react_1.default.createElement(react_1.default.Fragment,null,["Primary","Secondary","Success","Info","Warning","Danger"].map((function(variant){return react_1.default.createElement(react_bootstrap_1.SplitButton,{key:variant,id:"dropdown-split-variants-"+variant,variant:variant.toLowerCase(),title:variant},react_1.default.createElement(react_bootstrap_1.Dropdown.Item,{eventKey:"1"},"Action"),react_1.default.createElement(react_bootstrap_1.Dropdown.Item,{eventKey:"2"},"Another action"),react_1.default.createElement(react_bootstrap_1.Dropdown.Item,{eventKey:"3",active:!0},"Active Item"),react_1.default.createElement(react_bootstrap_1.Dropdown.Divider,null),react_1.default.createElement(react_bootstrap_1.Dropdown.Item,{eventKey:"4"},"Separated link"))})))}},exports.Basic.parameters=__assign(__assign({},exports.Basic.parameters),{docs:__assign(__assign({},null===(_a=exports.Basic.parameters)||void 0===_a?void 0:_a.docs),{source:__assign({originalSource:"{\n  render: props => <>\r\n      {['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Danger'].map(variant => <SplitButton key={variant} id={`dropdown-split-variants-${variant}`} variant={variant.toLowerCase()} title={variant}>\r\n          <Dropdown.Item eventKey=\"1\">Action</Dropdown.Item>\r\n          <Dropdown.Item eventKey=\"2\">Another action</Dropdown.Item>\r\n          <Dropdown.Item eventKey=\"3\" active>\r\n            Active Item\r\n          </Dropdown.Item>\r\n          <Dropdown.Divider />\r\n          <Dropdown.Item eventKey=\"4\">Separated link</Dropdown.Item>\r\n        </SplitButton>)}\r\n    </>\n}"},null===(_c=null===(_b=exports.Basic.parameters)||void 0===_b?void 0:_b.docs)||void 0===_c?void 0:_c.source)})})}}]);
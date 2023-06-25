"use strict";(self.webpackChunkwizard_ui=self.webpackChunkwizard_ui||[]).push([[1249],{"./stories/Radio.stories.tsx":function(__unused_webpack_module,exports,__webpack_require__){var _a,_b,_c,_d,_e,_f,__assign=this&&this.__assign||function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.WithHelpText=exports.Basic=void 0;var react_1=__importDefault(__webpack_require__("./node_modules/react/index.js")),react_bootstrap_1=__webpack_require__("./node_modules/react-bootstrap/esm/index.js");exports.default={title:"FORM/Radio"},exports.Basic={render:function(props){return react_1.default.createElement(react_bootstrap_1.Form,null,react_1.default.createElement(react_bootstrap_1.Form.Group,{as:react_bootstrap_1.Row},react_1.default.createElement(react_bootstrap_1.Form.Label,{column:!0,xs:"auto"},"性能优先级:"),react_1.default.createElement(react_bootstrap_1.Col,{xs:"auto",style:{padding:"7px 0"}},react_1.default.createElement(react_bootstrap_1.Form.Check,{inline:!0,name:"name1",type:"radio",id:"default",label:"默认",value:"default"}),react_1.default.createElement(react_bootstrap_1.Form.Check,{inline:!0,name:"name1",type:"radio",id:"priority",label:"优先",value:"priority"}))))}},exports.WithHelpText={render:function(props){return react_1.default.createElement(react_bootstrap_1.Form,null,react_1.default.createElement(react_bootstrap_1.Form.Group,{as:react_bootstrap_1.Row},react_1.default.createElement(react_bootstrap_1.Form.Label,{column:!0,xs:"auto"},"迁移速度级别:"),react_1.default.createElement(react_bootstrap_1.Col,{xs:"auto",style:{padding:"7px 0"}},react_1.default.createElement(react_bootstrap_1.Form.Check,{name:"name1",type:"radio",id:"low",label:"低速",value:"low"}),react_1.default.createElement(react_bootstrap_1.Form.Text,{style:{marginLeft:"1.5em"}},"以较低的速度迁移数据，迁移时间可能较长，但是基本不影响业务。"),react_1.default.createElement(react_bootstrap_1.Form.Check,{name:"name1",type:"radio",id:"middle",label:"中速",value:"middle"}),react_1.default.createElement(react_bootstrap_1.Form.Text,{style:{marginLeft:"1.5em"}},"以中等的速度迁移数据，迁移时间适中，在大部分场景不影响业务，除非业务压力很大。"),react_1.default.createElement(react_bootstrap_1.Form.Check,{name:"name1",type:"radio",id:"hight",label:"高速",value:"hight"}),react_1.default.createElement(react_bootstrap_1.Form.Text,{style:{marginLeft:"1.5em"}},"以较高的速度迁移数据，迁移时间较短，可能会影响业务的 IO 时延。"))))}},exports.Basic.parameters=__assign(__assign({},exports.Basic.parameters),{docs:__assign(__assign({},null===(_a=exports.Basic.parameters)||void 0===_a?void 0:_a.docs),{source:__assign({originalSource:'{\n  render: props => <Form>\r\n      <Form.Group as={Row}>\r\n        <Form.Label column xs="auto">\r\n          性能优先级:\r\n        </Form.Label>\r\n        <Col xs="auto" style={{\n        padding: \'7px 0\'\n      }}>\r\n          <Form.Check inline name="name1" type="radio" id="default" label="默认" value="default" />\r\n          <Form.Check inline name="name1" type="radio" id="priority" label="优先" value="priority" />\r\n        </Col>\r\n      </Form.Group>\r\n    </Form>\n}'},null===(_c=null===(_b=exports.Basic.parameters)||void 0===_b?void 0:_b.docs)||void 0===_c?void 0:_c.source)})}),exports.WithHelpText.parameters=__assign(__assign({},exports.WithHelpText.parameters),{docs:__assign(__assign({},null===(_d=exports.WithHelpText.parameters)||void 0===_d?void 0:_d.docs),{source:__assign({originalSource:'{\n  render: props => <Form>\r\n      <Form.Group as={Row}>\r\n        <Form.Label column xs="auto">\r\n          迁移速度级别:\r\n        </Form.Label>\r\n        <Col xs="auto" style={{\n        padding: \'7px 0\'\n      }}>\r\n          <Form.Check name="name1" type="radio" id="low" label="低速" value="low" />\r\n          <Form.Text style={{\n          marginLeft: \'1.5em\'\n        }}>\r\n            以较低的速度迁移数据，迁移时间可能较长，但是基本不影响业务。\r\n          </Form.Text>\r\n          <Form.Check name="name1" type="radio" id="middle" label="中速" value="middle" />\r\n          <Form.Text style={{\n          marginLeft: \'1.5em\'\n        }}>\r\n            以中等的速度迁移数据，迁移时间适中，在大部分场景不影响业务，除非业务压力很大。\r\n          </Form.Text>\r\n          <Form.Check name="name1" type="radio" id="hight" label="高速" value="hight" />\r\n          <Form.Text style={{\n          marginLeft: \'1.5em\'\n        }}>\r\n            以较高的速度迁移数据，迁移时间较短，可能会影响业务的 IO 时延。\r\n          </Form.Text>\r\n        </Col>\r\n      </Form.Group>\r\n    </Form>\n}'},null===(_f=null===(_e=exports.WithHelpText.parameters)||void 0===_e?void 0:_e.docs)||void 0===_f?void 0:_f.source)})})}}]);
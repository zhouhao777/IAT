(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{ZpO0:function(e,a,t){"use strict";var l=t("TqRt"),r=t("284h");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,t("IzEo");var n=l(t("bx4M"));t("8R5B");var u=l(t("aJyg"));t("+L6B");var s=l(t("2/Rp"));t("Xi6J");var d=l(t("kl6h")),i=l(t("pVnL"));t("Pwec");var o=l(t("CtXQ")),f=l(t("lwsE")),c=l(t("W8MJ")),m=l(t("a1gu")),p=l(t("Nsbk")),y=l(t("7W2i"));t("7Kak");var h=l(t("9yH6"));t("OaEy");var k=l(t("2fM7"));t("5NDa");var v=l(t("5rEg"));t("y8nQ");var E,g,I,b,V=l(t("Vl3Y")),T=r(t("q1tI")),q=l(t("wd/R")),w=t("MuoO"),j=l(t("zHco")),C=l(t("IN2g")),F=l(t("oQmc")),H=V.default.Item,L=v.default.TextArea,P=k.default.Option,x=(h.default.Group,0),S=0,D=(E=(0,w.connect)(function(e){var a=e.system,t=e.task;return{system:a,task:t}}),g=V.default.create({onValuesChange:function(e,a,t){if(a)for(var l in a)if("project"===l){var r=t.project,n=e.dispatch;n({type:"task/queryProjectCaseList",payload:{id:r}})}}}),E(I=g((b=function(e){function a(){var e,t;(0,f.default)(this,a);for(var l=arguments.length,r=new Array(l),n=0;n<l;n++)r[n]=arguments[n];return t=(0,m.default)(this,(e=(0,p.default)(a)).call.apply(e,[this].concat(r))),t.state={taskId:"",projectList:[],headerKeys:[],paramkeys:[],params:[],headers:[],taskInfo:{}},t.queryTaskInfo=function(e){t.props.dispatch({type:"task/queryTaskInfo",payload:{id:e}}).then(function(){var a=t.props.task,l=[],r=[],n=[],u=[];x=a.taskInfo.headers.length>0&&a.taskInfo.headers.length-1,S=a.taskInfo.params.length>0&&a.taskInfo.params.length-1,a.taskInfo.headers.forEach(function(e,a){l.push(a),n.push(e)}),a.taskInfo.params.forEach(function(e,a){r.push(a),u.push(e)}),t.setState({taskId:e,taskInfo:a.taskInfo,headerKeys:l,paramkeys:r,headers:n,params:u},function(){var e=t.props.dispatch;e({type:"task/queryProjectCaseList",payload:{id:a.taskInfo.project}})})})},t.queryProjectList=function(e){var a=t.props.dispatch;a({type:"system/queryProjectList",payload:{status:"1"}}).then(function(){var a=t.props.system;t.setState({projectList:a.projectList},function(){t.queryTaskInfo(e)})})},t.handleBack=function(){var e=t.props.dispatch;e({type:"task/goListPage"})},t.handleSubmit=function(e){var a=t.props,l=a.dispatch,r=a.form;e.preventDefault(),r.validateFieldsAndScroll(function(e,a){if(!e){var r=(0,q.default)(a.runTime).format("HH:mm");a.runTime=r,l({type:"task/queryUpdateTaskInfo",payload:{info:a,id:t.state.taskId}})}})},t.addHeader=function(){var e=t.props.form,a=e.getFieldValue("headerkeys"),l=a.concat(++x),r=t.state.headers;r.push({id:(new Date).getTime(),key:"",value:""}),t.setState({headers:r}),e.setFieldsValue({headerkeys:l})},t.addParam=function(){var e=t.props.form,a=e.getFieldValue("paramkeys"),l=a.concat(++S),r=t.state.params;r.push({id:(new Date).getTime(),key:"",value:""}),t.setState({params:r}),e.setFieldsValue({paramkeys:l})},t.removeHeader=function(e){var a=t.props.form,l=a.getFieldValue("headerkeys");a.setFieldsValue({headerkeys:l.filter(function(a){return a!==e})})},t.removeParam=function(e){var a=t.props.form,l=a.getFieldValue("paramkeys");a.setFieldsValue({paramkeys:l.filter(function(a){return a!==e})})},t}return(0,y.default)(a,e),(0,c.default)(a,[{key:"componentWillMount",value:function(){var e=this.props.location.search;if(-1!==e.indexOf("?")){var a=e.substr(1);this.queryProjectList(a)}}},{key:"render",value:function(){var e=this,a=this.props,t=a.form,l=t.getFieldDecorator,r=t.getFieldValue,f=a.task,c=this.state,m=c.projectList,p=c.taskInfo,y=c.headerKeys,E=c.headers,g=c.params,I=c.paramkeys,b={labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:12},md:{span:10}}},w={wrapperCol:{xs:{span:24,offset:0},sm:{span:10,offset:7}}};l("headerkeys",{initialValue:y});var x=r("headerkeys"),S=x.map(function(a,t){if(console.log(E[a]),E[a])return T.default.createElement(V.default.Item,(0,i.default)({},0===t?b:w,{label:0===t?"\u8bf7\u6c42\u5934\u53c2\u6570":"",required:!1,key:a}),l("headers[".concat(a,"]"),{validateTrigger:["onChange","onBlur"],initialValue:E[a]})(T.default.createElement(C.default,null)),x.length>0?T.default.createElement(o.default,{className:F.default.dynamic_delete_button,type:"minus-circle-o",onClick:function(){return e.removeHeader(a)}}):null)});l("paramkeys",{initialValue:I});var D=r("paramkeys"),B=D.map(function(a,t){if(g[a])return T.default.createElement(V.default.Item,(0,i.default)({},0===t?b:w,{label:0===t?"\u5168\u5c40\u53c2\u6570":"",required:!1,key:a}),l("params[".concat(a,"]"),{validateTrigger:["onChange","onBlur"],initialValue:g[a]})(T.default.createElement(C.default,null)),I.length>0?T.default.createElement(o.default,{className:F.default.dynamic_delete_button,type:"minus-circle-o",onClick:function(){return e.removeParam(a)}}):null)});return T.default.createElement(j.default,null,T.default.createElement(n.default,{bordered:!1},T.default.createElement(V.default,{onSubmit:this.handleSubmit,hideRequiredMark:!0,style:{marginTop:8}},T.default.createElement(H,(0,i.default)({},b,{label:"\u9879\u76ee\u540d\u79f0"}),l("project",{rules:[{required:!0,message:"\u9879\u76ee\u540d\u79f0\u4e0d\u53ef\u4e3a\u7a7a"}],initialValue:p.project})(T.default.createElement(k.default,{placeholder:"\u8bf7\u5148\u9009\u62e9\u9879\u76ee",style:{width:220}},m&&m.map(function(e){return T.default.createElement(P,{value:e.id,key:e.id,title:e.name},e.name)})))),T.default.createElement(H,(0,i.default)({},b,{label:"\u4efb\u52a1\u540d\u79f0"}),l("name",{rules:[{required:!0,message:"\u4efb\u52a1\u540d\u79f0\u4e0d\u53ef\u4e3a\u7a7a"}],initialValue:p.testname})(T.default.createElement(v.default,{placeholder:"\u8bf7\u8f93\u5165\u4efb\u52a1\u540d\u79f0"}))),T.default.createElement(H,(0,i.default)({},b,{label:"\u4efb\u52a1\u63cf\u8ff0"}),l("taskDesc",{rules:[{required:!1}],initialValue:p.taskDesc})(T.default.createElement(L,{style:{minHeight:32},placeholder:"\u8bf7\u8f93\u5165\u4efb\u52a1\u63cf\u8ff0",rows:4}))),T.default.createElement(H,(0,i.default)({},b,{label:"\u4efb\u52a1\u7c7b\u578b"}),T.default.createElement("div",null,l("taskType",{rules:[{required:!0,message:"\u4efb\u52a1\u7c7b\u578b\u4e0d\u53ef\u4e3a\u7a7a"}],initialValue:p.taskType&&p.taskType.toString()})(T.default.createElement(h.default.Group,null,T.default.createElement(h.default,{value:"1"},"\u5373\u65f6\u4efb\u52a1"),T.default.createElement(h.default,{value:"2"},"\u5b9a\u65f6\u4efb\u52a1"))),T.default.createElement(H,{style:{marginBottom:0}},l("runTime",{initialValue:(0,q.default)(p.runTime,"HH:mm")})(T.default.createElement(d.default,{format:"HH:mm",style:{margin:"8px 0",display:"2"===r("taskType")?"block":"none"}}))))),T.default.createElement(H,(0,i.default)({},b,{label:"\u6d4b\u8bd5\u57df\u540d"}),l("domain",{rules:[{required:!0,message:"\u6d4b\u8bd5\u57df\u540d\u4e0d\u53ef\u4e3a\u7a7a"}],initialValue:p.domain})(T.default.createElement(v.default,{placeholder:"\u8bf7\u8f93\u5165\u6d4b\u8bd5\u57df\u540d .eg: https://app.xxx.com:8080"}))),T.default.createElement(H,(0,i.default)({},b,{label:"\u4ee3\u7406\u8bbe\u7f6e"}),l("proxy",{initialValue:p.proxy})(T.default.createElement(v.default,{placeholder:"\u683c\u5f0f: user:password@server:port"}))),T.default.createElement(V.default.Item,{className:F.default.listForm},S,T.default.createElement(V.default.Item,w,T.default.createElement(s.default,{type:"dashed",onClick:this.addHeader,style:{width:"100%"}},T.default.createElement(o.default,{type:"plus"})," \u8bbe\u7f6e\u8bf7\u6c42\u5934\u53c2\u6570"))),T.default.createElement(V.default.Item,{className:F.default.listForm},B,T.default.createElement(V.default.Item,w,T.default.createElement(s.default,{type:"dashed",onClick:this.addParam,style:{width:"100%"}},T.default.createElement(o.default,{type:"plus"})," \u6dfb\u52a0\u5168\u5c40\u9ed8\u8ba4\u53c2\u6570"))),T.default.createElement(H,(0,i.default)({},b,{label:"\u7528\u4f8b\u8bbe\u7f6e"}),l("case",{rules:[{required:!0,message:"\u4efb\u52a1\u7528\u4f8b\u4e0d\u53ef\u4e3a\u7a7a"}],initialValue:p.caseIds})(T.default.createElement(u.default,{dataSource:f.caseData,titles:["\u9879\u76ee\u7528\u4f8b","\u4efb\u52a1\u7528\u4f8b"],targetKeys:r("case"),render:function(e){return e.name}}))),T.default.createElement(H,(0,i.default)({},w,{style:{marginTop:32}}),T.default.createElement(s.default,{onClick:function(){return e.handleBack()}},"\u53d6\u6d88"),T.default.createElement(s.default,{type:"primary",htmlType:"submit",style:{marginLeft:8}},"\u4fdd\u5b58")))))}}]),a}(T.PureComponent),I=b))||I)||I),B=D;a.default=B}}]);
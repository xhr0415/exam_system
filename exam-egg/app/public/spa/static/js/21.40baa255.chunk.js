(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{651:function(e,t,n){"use strict";n(34),n(659)},652:function(e,t,n){"use strict";var i,a,r,o,s=n(1),d=n(317),c=n(29),u=3,l=1,p="ant-message",y="move-up";var x={open:function(e){var t=void 0!==e.duration?e.duration:u,n={info:"info-circle",success:"check-circle",error:"close-circle",warning:"exclamation-circle",loading:"loading"}[e.type],x=l++,f=new Promise(function(u){var l=function(){return"function"===typeof e.onClose&&e.onClose(),u(!0)};!function(e){a?e(a):d.a.newInstance({prefixCls:p,transitionName:y,style:{top:i},getContainer:r,maxCount:o},function(t){a?e(a):(a=t,e(t))})}(function(i){var a=s.createElement(c.a,{type:n,theme:"loading"===n?"outlined":"filled"});i.notice({key:x,duration:t,style:{},content:s.createElement("div",{className:"".concat(p,"-custom-content").concat(e.type?" ".concat(p,"-").concat(e.type):"")},e.icon?e.icon:n?a:"",s.createElement("span",null,e.content)),onClose:l})})}),v=function(){a&&a.removeNotice(x)};return v.then=function(e,t){return f.then(e,t)},v.promise=f,v},config:function(e){void 0!==e.top&&(i=e.top,a=null),void 0!==e.duration&&(u=e.duration),void 0!==e.prefixCls&&(p=e.prefixCls),void 0!==e.getContainer&&(r=e.getContainer),void 0!==e.transitionName&&(y=e.transitionName,a=null),void 0!==e.maxCount&&(o=e.maxCount,a=null)},destroy:function(){a&&(a.destroy(),a=null)}};["success","info","warning","error","loading"].forEach(function(e){x[e]=function(t,n,i){return"function"===typeof n&&(i=n,n=void 0),x.open({content:t,duration:n,type:e,onClose:i})}}),x.warn=x.warning,t.a=x},659:function(e,t,n){var i=n(660);"string"===typeof i&&(i=[[e.i,i,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(26)(i,a);i.locals&&(e.exports=i.locals)},660:function(e,t,n){(e.exports=n(25)(!1)).push([e.i,"/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.ant-message {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5;\n  list-style: none;\n  font-feature-settings: 'tnum';\n  position: fixed;\n  top: 16px;\n  left: 0;\n  z-index: 1010;\n  width: 100%;\n  pointer-events: none;\n}\n.ant-message-notice {\n  padding: 8px;\n  text-align: center;\n}\n.ant-message-notice:first-child {\n  margin-top: -8px;\n}\n.ant-message-notice-content {\n  display: inline-block;\n  padding: 10px 16px;\n  background: #fff;\n  border-radius: 2px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  pointer-events: all;\n}\n.ant-message-success .anticon {\n  color: #52c41a;\n}\n.ant-message-error .anticon {\n  color: #f5222d;\n}\n.ant-message-warning .anticon {\n  color: #faad14;\n}\n.ant-message-info .anticon,\n.ant-message-loading .anticon {\n  color: #1890ff;\n}\n.ant-message .anticon {\n  position: relative;\n  top: 1px;\n  margin-right: 8px;\n  font-size: 16px;\n}\n.ant-message-notice.move-up-leave.move-up-leave-active {\n  overflow: hidden;\n  animation-name: MessageMoveOut;\n  animation-duration: 0.3s;\n}\n@keyframes MessageMoveOut {\n  0% {\n    max-height: 150px;\n    padding: 8px;\n    opacity: 1;\n  }\n  100% {\n    max-height: 0;\n    padding: 0;\n    opacity: 0;\n  }\n}\n",""])},889:function(e,t,n){"use strict";n.r(t);var i=n(272),a=n.n(i),r=(n(651),n(652)),o=n(316),s=n(10),d=n(315);t.default={namespace:"addUser",state:{viewDatas:[{titleIndex:0,titles:["\u6dfb\u52a0\u7528\u6237","\u66f4\u65b0\u7528\u6237"],writedData:{},resourceName:"user",idKey:"user_id",status:0,views:[{type:"select",placeholder:"\u8bf7\u9009\u62e9\u8eab\u4efdid",titleIndex:[1],resourceName:"user",idKey:"user_id",textKey:"user_name"},{type:"input",placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u540d",titleIndex:[0,1],idKey:"user_name"},{type:"input",placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801",titleIndex:[0,1],idKey:"user_pwd"},{type:"select",placeholder:"\u8bf7\u9009\u62e9\u8eab\u4efdid",titleIndex:[0,1],resourceName:"identity",idKey:"identity_id",textKey:"identity_text"}],btns:["addUser","updateUser"]},{titleIndex:0,titles:["\u6dfb\u52a0\u8eab\u4efd"],writedData:{},resourceName:"identity",idKey:"identity_id",status:0,views:[{type:"input",placeholder:"\u8bf7\u8f93\u5165\u8eab\u4efd\u540d\u79f0",titleIndex:[0,1],idKey:"identity_text"}],btns:["addIdentity"]},{titleIndex:0,titles:["\u6dfb\u52a0api\u63a5\u53e3\u6743\u9650"],writedData:{},resourceName:"api_authority",idKey:"api_authority_id",status:0,views:[{type:"input",placeholder:"\u8bf7\u8f93\u5165api\u63a5\u53e3\u6743\u9650\u540d\u79f0",titleIndex:[0,1],idKey:"api_authority_text"},{type:"input",placeholder:"\u8bf7\u8f93\u5165api\u63a5\u53e3\u6743\u9650url",titleIndex:[0,1],idKey:"api_authority_url"},{type:"input",placeholder:"\u8bf7\u8f93\u5165api\u63a5\u53e3\u6743\u9650\u65b9\u6cd5",titleIndex:[0,1],idKey:"api_authority_method"}],btns:["addAuthorityApi"]},{titleIndex:0,titles:["\u6dfb\u52a0\u89c6\u56fe\u63a5\u53e3\u6743\u9650"],writedData:{},resourceName:"view_authority",idKey:"view_authority_id",status:0,views:[{type:"select",placeholder:"\u8bf7\u9009\u62e9\u5df2\u6709\u89c6\u56fe",titleIndex:[0,1],resourceName:"views",idKey:"view_id",textKey:"view_authority_text"}],btns:["addAuthorityView"]},{titleIndex:0,titles:["\u7ed9\u8eab\u4efd\u8bbe\u7f6eapi\u63a5\u53e3\u6743\u9650"],writedData:{},resourceName:"identity_api_authority_relatioin",idKey:"identity_api_authority_relation_id",status:0,views:[{type:"select",placeholder:"\u8bf7\u9009\u62e9\u8eab\u4efdid",titleIndex:[0,1],resourceName:"identity",idKey:"identity_id",textKey:"identity_text"},{type:"select",placeholder:"\u8bf7\u9009\u62e9api\u63a5\u53e3\u6743\u9650id",titleIndex:[0,1],resourceName:"api_authority",idKey:"api_authority_id",textKey:"api_authority_text"}],btns:["setIdentityApi"]},{titleIndex:0,titles:["\u7ed9\u8eab\u4efd\u8bbe\u7f6e\u89c6\u56fe\u6743\u9650"],writedData:{},resourceName:"identity_view_authority_relatioin",idKey:"identity_view_authority_relation_id",status:0,views:[{type:"select",placeholder:"\u8bf7\u9009\u62e9\u8eab\u4efdid",titleIndex:[0,1],resourceName:"identity",idKey:"identity_id",textKey:"identity_text"},{type:"select",placeholder:"\u8bf7\u9009\u62e9\u89c6\u56fe\u6743\u9650id",titleIndex:[0,1],resourceName:"view_authority",idKey:"view_authority_id",textKey:"view_authority_text"}],btns:["setIdentityView"]}]},reducers:{changeTitleIndex:function(e,t){var n=t.index,i=t.titleIndex;return e.viewDatas[n].titleIndex=i,JSON.parse(JSON.stringify(e))},changeWritedVal:function(e,t){var n=t.index,i=t.key,a=t.value,r=t.resource;if("view_id"===i){var o=r.find(function(e){return e.view_id===a}).view_authority_text;e.viewDatas[n].writedData.view_authority_text=o}return e.viewDatas[n].writedData[i]=a,JSON.parse(JSON.stringify(e))},changeStatus:function(e,t){var n=t.index,i=t.value;return e.viewDatas[n].status=i,JSON.parse(JSON.stringify(e))},resetWritedVal:function(e,t){var n=t.index;return e.viewDatas[n].writedData={},JSON.parse(JSON.stringify(e))}},effects:{postData:a.a.mark(function e(t,n){var i,c,u,l,p,y,x,f,v,h,m,_,g,w,b,I,N,K,O;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.call,c=n.put,u=n.select,e.next=3,u(function(e){return e.showUser});case 3:return l=e.sent,p=l.identity,y=t.postName,x=t.index,f=t.writedData,v=t.resourceName,h=t.resource,m=t.titleIndex,_=t.idKey,e.next=8,c({type:"changeStatus",index:x,value:3});case 8:return e.next=10,i(d[y],f);case 10:if(1!==(g=e.sent).code){e.next=20;break}return e.next=14,c({type:"changeStatus",index:x,value:1});case 14:return 0===m?"user"===v&&f.identity_id?(b=p.find(function(e){return e.identity_id===f.identity_id}),I=b.identity_text,h.push(Object(s.a)({},f,(w={},Object(o.a)(w,_,g[_]),Object(o.a)(w,"identity_text",I),w)))):h.push(Object(s.a)({},f,Object(o.a)({},_,g[_]))):1===m&&(N=h.findIndex(function(e){return e[_]===f[_]}),"user"===v&&f.identity_id?(K=p.find(function(e){return e.identity_id===f.identity_id}),O=K.identity_text,h[N]=Object(s.a)({},h[N],f,{identity_text:O})):h[N]=Object(s.a)({},h[N],f)),e.next=17,c(Object(o.a)({type:"showUser/changeState"},v,h));case 17:r.a.success(g.msg,1),e.next=23;break;case 20:return e.next=22,c({type:"changeStatus",index:x,value:2});case 22:r.a.error(g.msg,1);case 23:case"end":return e.stop()}},e,this)})}}}}]);
//# sourceMappingURL=21.40baa255.chunk.js.map
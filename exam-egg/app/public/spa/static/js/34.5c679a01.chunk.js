(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{138:function(e,t,n){"use strict";var a=n(10),i=n(12),s=n(13),c=n(15),o=n(14),r=n(16),l=(n(90),n(91)),u=n(1),m=n.n(u),p=l.a.Content,b=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(r.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return m.a.createElement(p,{style:Object(a.a)({background:"#fff",padding:24,margin:0,marginBottom:20,borderRadius:10},this.props.style)},m.a.Children.map(this.props.children,function(e){return e}))}}]),t}(u.Component);t.a=b},855:function(e,t,n){e.exports={exam:"style_exam__2OWgj",juan:"style_juan__3nu6q",questionitem:"style_questionitem__3BYam"}},880:function(e,t,n){"use strict";n.r(t);n(852);var a,i=n(858),s=(n(65),n(59)),c=(n(586),n(637)),o=n(10),r=n(12),l=n(13),u=n(15),m=n(14),p=n(16),b=n(1),d=n.n(b),f=n(704),h=n.n(f),j=n(28),v=n(138),E=n(209),O=n(855),x=n.n(O),k=E.a.basePath,y=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).remove=function(){n.props.onRemoveCallback()},n.state={},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.questions_stem,a=e.index;return d.a.createElement("div",{className:x.a.questionitem},d.a.createElement("h4",null,a,"\uff1a",t," ",d.a.createElement("a",{href:"javascript:;",style:{float:"right"},onClick:this.remove},"\u5220\u9664")),d.a.createElement(h.a,{className:"react-markdown",source:n}))}}]),t}(b.Component),C=Object(j.connect)(function(e){return Object(o.a)({},e.addExam,e.main)},function(e){return{initData:function(t){e(Object(o.a)({type:"addExam/requestData"},t))},updateExam:function(t){return e(Object(o.a)({type:"addExam/updateExam"},t))}}})(a=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).onRemoveCallback=function(e){var t=n.state.questions;c.a.confirm({title:"\u786e\u8ba4\u63d0\u793a",content:"\u662f\u5426\u8981\u5220\u9664\u8be5\u9898\u76ee\uff1f",okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",onOk:function(){t.splice(e,1),n.setState({questions:t})}})},n.onClose=function(){n.setState({visible:!1})},n.createExam=function(){n.props.updateExam({id:n.props.examDetail.exam_exam_id,question_ids:JSON.stringify(n.state.questions.map(function(e){return e.questions_id}))}).then(function(){n.props.history.push({pathname:k+"/main/exam/list",state:{parent:"\u8003\u8bd5\u7ba1\u7406",child:"\u8bd5\u5377\u5217\u8868",id:"main-examList"}})})},n.state={questions:n.props.examDetail.questions,visible:!1},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.initData()}},{key:"render",value:function(){var e=this,t=this.props.examDetail,n=this.state.questions;return d.a.createElement(v.a,null,d.a.createElement(s.a,{onClick:function(){return e.setState({visible:!0})}},"\u6dfb\u52a0\u65b0\u9898"),d.a.createElement("div",{className:x.a.exam},d.a.createElement("h2",null,t.title),d.a.createElement("p",null,"\u8003\u8bd5\u65f6\u95f4\uff1a1\u5c0f\u65f630\u5206\u949f  \u76d1\u8003\u4eba\uff1a\u5218\u4e8e       \u5f00\u59cb\u8003\u8bd5\u65f6\u95f4\uff1a2018.9.10  10:00  \u9605\u5377\u4eba\uff1a\u5218\u4e8e"),d.a.createElement("span",{className:x.a.juan}),d.a.createElement("div",null,n.map(function(t,n){return d.a.createElement(y,Object.assign({},t,{index:n+1,key:n,onRemoveCallback:function(){return e.onRemoveCallback(n)}}))})),d.a.createElement(s.a,{type:"primary",onClick:this.createExam},"\u521b\u5efa\u8bd5\u5377")),d.a.createElement(i.a,{title:"\u6240\u6709\u9898\u76ee",placement:"right",closable:!1,width:640,onClose:this.onClose,visible:this.state.visible},d.a.createElement("p",null,"Some contents..."),d.a.createElement("p",null,"Some contents..."),d.a.createElement("p",null,"Some contents...")))}}]),t}(b.Component))||a;t.default=C}}]);
//# sourceMappingURL=34.5c679a01.chunk.js.map
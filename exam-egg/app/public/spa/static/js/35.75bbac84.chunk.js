(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{138:function(t,e,n){"use strict";var a=n(10),r=n(12),c=n(13),i=n(15),o=n(14),u=n(16),l=(n(90),n(91)),s=n(1),p=n.n(s),d=l.a.Content,f=function(t){function e(){return Object(r.a)(this,e),Object(i.a)(this,Object(o.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return p.a.createElement(d,{style:Object(a.a)({background:"#fff",padding:24,margin:0,marginBottom:20,borderRadius:10},this.props.style)},p.a.Children.map(this.props.children,function(t){return t}))}}]),e}(s.Component);e.a=f},649:function(t,e,n){"use strict";function a(t){var e=decodeURIComponent,n=t?t.split("?"):[],a=t?n[n.length-1]:window.location.search.slice(1),r={};if(a)for(var c=(a=a.split("#")[0]).split("&"),i=0;i<c.length;i+=1){var o=c[i].split("="),u=void 0,l=o[0].replace(/\[\d*\]/,function(t){return u=t.slice(1,-1),""}),s="undefined"===typeof o[1]?"":o[1];r[l]?("string"===typeof r[l]&&(r[l]=e([r[l]])),"undefined"===typeof u?r[l].push(e(s)):r[l][u]=e(s)):r[l]=e(s)}return r}function r(t,e){return function(n){t[e]=n}}n.d(e,"a",function(){return a}),n.d(e,"b",function(){return r})},881:function(t,e,n){"use strict";n.r(e);var a,r=n(12),c=n(13),i=n(15),o=n(14),u=n(16),l=n(10),s=n(1),p=n.n(s),d=n(138),f=n(28),m=n(649),b=Object(f.connect)(function(t){return Object(l.a)({},t.addExam,t.main)})(a=function(t){function e(){var t,n;Object(r.a)(this,e);for(var a=arguments.length,c=new Array(a),u=0;u<a;u++)c[u]=arguments[u];return(n=Object(i.a)(this,(t=Object(o.a)(e)).call.apply(t,[this].concat(c)))).state={},n}return Object(u.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){var t=Object(m.a)(window.location.href).id;console.log(t),this.props.dispatch({type:"addExam/getExamDetail",exam_id:t})}},{key:"render",value:function(){return p.a.createElement(p.a.Fragment,null,p.a.createElement(d.a,null,p.a.createElement("p",null,"\u8003\u8bd5\u65f6\u95f4\uff1a1\u5c0f\u65f630\u5206\u949f  \u76d1\u8003\u4eba\uff1a\u5218\u4e8e       \u5f00\u59cb\u8003\u8bd5\u65f6\u95f4\uff1a2018.9.10  10:00  \u9605\u5377\u4eba\uff1a\u5218\u4e8e")),p.a.createElement(d.a,null,p.a.createElement("p",null,"\u8003\u8bd5\u65f6\u95f4\uff1a1\u5c0f\u65f630\u5206\u949f  \u76d1\u8003\u4eba\uff1a\u5218\u4e8e       \u5f00\u59cb\u8003\u8bd5\u65f6\u95f4\uff1a2018.9.10  10:00  \u9605\u5377\u4eba\uff1a\u5218\u4e8e")))}}]),e}(s.Component))||a;e.default=b}}]);
//# sourceMappingURL=35.75bbac84.chunk.js.map
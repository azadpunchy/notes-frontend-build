(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{35:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(28),s=a.n(r),o=(a(35),a(3)),i=a.n(o),l=a(6),u=a(8),d=a(7),j=a.n(d),p=a(12),b=a(11),h="https://uptight-coat-boa.cyclic.app/",O=a(0),m=function(e){var t=e.setIsLogin,a=Object(n.useState)({name:"",email:"",password:""}),c=Object(u.a)(a,2),r=c[0],s=c[1],o=Object(n.useState)(""),d=Object(u.a)(o,2),m=d[0],x=d[1],f=function(e){var t=e.target,a=t.name,n=t.value;s(Object(b.a)(Object(b.a)({},r),{},Object(p.a)({},a,n))),x("")},v=function(){var e=Object(l.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,j.a.post("".concat(h,"users/register"),{uname:r.name,email:r.email,password:r.password});case 4:a=e.sent,s({name:"",email:"",password:""}),x(a.data.msg),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),e.t0.response.data.msg&&x(e.t0.response.data.msg);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(l.a)(i.a.mark((function e(a){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,j.a.post("".concat(h,"users/login"),{email:r.email,password:r.password});case 4:n=e.sent,s({name:"",email:"",password:""}),localStorage.setItem("tokenStore",n.data.token),t(!0),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),e.t0.response?e.t0.response.data.msg&&x(e.t0.response.data.msg):(console.log(e.t0),x(JSON.stringify(e.t0.message)));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),w=Object(n.useState)(!1),k=Object(u.a)(w,2),y=k[0],S=k[1],C={visibility:y?"visible":"hidden",opacity:y?1:0};return Object(O.jsxs)("section",{className:"login-page",children:[Object(O.jsxs)("div",{className:"login create-note",children:[Object(O.jsx)("h2",{children:"Login"}),Object(O.jsxs)("form",{onSubmit:g,children:[Object(O.jsx)("input",{type:"email",name:"email",id:"login-email",value:r.email,autoComplete:"true",placeholder:"Email",onChange:f,required:!0}),Object(O.jsx)("input",{type:"password",name:"password",id:"login-password",value:r.password,autoComplete:"true",placeholder:"Password",onChange:f,required:!0}),Object(O.jsx)("button",{type:"submit",children:"Login"}),Object(O.jsxs)("p",{children:["You don't have an account",Object(O.jsx)("span",{onClick:function(){return S(!0)},children:"Register Now "})]}),Object(O.jsx)("h3",{children:m})]})]}),Object(O.jsxs)("div",{className:"register create-note",style:C,children:[Object(O.jsx)("h2",{children:"Register"}),Object(O.jsxs)("form",{onSubmit:v,children:[Object(O.jsx)("input",{type:"text",name:"name",id:"register-name",value:r.name,autoComplete:"true",placeholder:"User Name",onChange:f,required:!0}),Object(O.jsx)("input",{type:"email",name:"email",id:"register-email",value:r.email,autoComplete:"true",placeholder:"Email",onChange:f,required:!0}),Object(O.jsx)("input",{type:"password",name:"password",id:"register-password",value:r.password,autoComplete:"true",placeholder:"Password",onChange:f,required:!0}),Object(O.jsx)("button",{type:"submit",children:"Register"}),Object(O.jsxs)("p",{children:["You have an account?",Object(O.jsx)("span",{onClick:function(){return S(!1)},children:"Login Now "})]}),Object(O.jsx)("h3",{children:m})]})]})]})},x=a(10),f=function(e){var t=e.setIsLogin;return Object(O.jsxs)("header",{children:[Object(O.jsx)("div",{className:"logo",children:Object(O.jsx)("h1",{children:Object(O.jsx)(x.b,{to:"/",children:"Dev Notes"})})}),Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:Object(O.jsx)(x.b,{to:"/",children:"Home"})}),Object(O.jsx)("li",{children:Object(O.jsx)(x.b,{to:"/create",children:"Create Note"})}),Object(O.jsx)("li",{children:Object(O.jsx)(x.b,{onClick:function(){localStorage.clear(),t(!1)},to:"/",children:"Logout"})})]})]})},v=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(u.a)(r,2),o=s[0],d=s[1],p=function(){var e=Object(l.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("".concat(h,"api/notes/"),{headers:{Authorization:t}});case 2:a=e.sent,c(a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(e){var t,a,n,c,r,s,o;return e.length?/^\d+-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(([-+]\d{2}:\d{2})|Z)$/.test(e)?(n=(a=(t=e.split("T"))[0].split("-"))[2],c=a[1],r=a[0],t=(t=(t=t[1]).split(":")).join(":"),/\+/.test(t)?s="+":/-/.test(t)?s="-":/Z/.test(t)&&(s="Z"),t=t.split(s),o=c+"/"+n+"/"+r):o="<code style='color:red'>invalid input</code>":o="<span class='faded'>Result</span>",o};Object(n.useEffect)((function(){var e=localStorage.getItem("tokenStore");d(e),e&&p(e)}),[]);var m=function(){var e=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!o){e.next=5;break}return e.next=4,j.a.delete("".concat(h,"api/notes/").concat(t),{headers:{Authorization:o}});case 4:p(o);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),window.location.href="/";case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsx)("div",{className:"note-wrapper",children:a.map((function(e){return Object(O.jsxs)("div",{className:"card",children:[Object(O.jsx)("h4",{title:e.title,children:e.title}),Object(O.jsx)("div",{className:"text-wrapper",children:Object(O.jsx)("p",{children:e.content})}),Object(O.jsx)("p",{className:"date",children:b(e.date)}),Object(O.jsxs)("div",{className:"card-footer",children:[e.name,Object(O.jsx)(x.b,{to:"edit/".concat(e._id),children:"Edit"})]}),Object(O.jsx)("button",{className:"close",onClick:function(){!0===window.confirm("Do you really want to delete")&&m(e._id)},children:"X"})]},e._id)}))})},g=a(2),w=function(){var e=Object(g.e)(),t=Object(n.useState)({title:"",content:"",date:""}),a=Object(u.a)(t,2),c=a[0],r=a[1],s=function(e){var t=e.target,a=t.name,n=t.value;r(Object(b.a)(Object(b.a)({},c),{},Object(p.a)({},a,n)))},o=function(){var t=Object(l.a)(i.a.mark((function t(a){var n,s,o,l,u;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),t.prev=1,!(n=localStorage.getItem("tokenStore"))){t.next=9;break}return s=c.title,o=c.content,l=c.date,u={title:s,content:o,date:l},t.next=8,j.a.post("".concat(h,"api/notes"),u,{headers:{Authorization:n}});case 8:return t.abrupt("return",e.push("/"));case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),window.location.href="/";case 14:r({title:"",content:"",date:""});case 15:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"create-note",children:[Object(O.jsx)("h2",{children:"Create Note"}),Object(O.jsxs)("form",{onSubmit:o,autoComplete:"off",children:[Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("label",{htmlFor:"title",children:"Title"}),Object(O.jsx)("input",{type:"text",name:"title",value:c.title,id:"title",onChange:s,required:!0,placeholder:"Your Title"})]}),Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("label",{htmlFor:"content",children:"Content"}),Object(O.jsx)("textarea",{type:"text",rows:"10",name:"content",id:"content",value:c.content,onChange:s,required:!0,placeholder:"Your Content"})]}),Object(O.jsxs)("label",{htmlFor:"date",children:["Date: ",c.date]}),Object(O.jsx)("div",{className:"row",children:Object(O.jsx)("input",{type:"date",id:"date",name:"date",value:c.date,onChange:s,placeholder:"October 08 2021"})}),Object(O.jsx)("button",{type:"submit",children:"Save"})]})]})},k=function(e){var t=e.match,a=Object(g.e)(),c=Object(n.useState)({title:"",content:"",date:"",id:""}),r=Object(u.a)(c,2),s=r[0],o=r[1],d=function(e){var t=e.target,a=t.name,n=t.value;o(Object(b.a)(Object(b.a)({},s),{},Object(p.a)({},a,n)))};Object(n.useEffect)((function(){var e=function(){var e=Object(l.a)(i.a.mark((function e(){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=localStorage.getItem("tokenStore"),!t.params.id){e.next=6;break}return e.next=4,j.a.get("".concat(h,"api/notes/").concat(t.params.id),{headers:{Authorization:a}});case 4:n=e.sent,o({title:n.data.title,content:n.data.content,date:new Date(n.data.date).toLocaleDateString(),id:n.data._id});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t.params.id]);var m=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,c,r,l,u,d;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!(n=localStorage.getItem("tokenStore"))){e.next=9;break}return c=s.title,r=s.content,l=s.date,u=s.id,d={title:c,content:r,date:l},e.next=8,j.a.put("".concat(h,"api/notes/").concat(u),d,{headers:{Authorization:n}});case 8:return e.abrupt("return",a.push("/"));case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),window.location.href="/";case 14:o({title:"",content:"",date:""});case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"create-note",children:[Object(O.jsx)("h2",{children:"Edit Note"}),Object(O.jsxs)("form",{onSubmit:m,autoComplete:"off",children:[Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("label",{htmlFor:"title",children:"Title"}),Object(O.jsx)("input",{type:"text",name:"title",value:s.title,id:"title",onChange:d,required:!0,placeholder:"Your Title"})]}),Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("label",{htmlFor:"content",children:"Content"}),Object(O.jsx)("textarea",{type:"text",rows:"10",name:"content",id:"content",value:s.content,onChange:d,required:!0,placeholder:"Your Content"})]}),Object(O.jsxs)("label",{htmlFor:"date",children:["Date: ",s.date]}),Object(O.jsx)("div",{className:"row",children:Object(O.jsx)("input",{type:"date",id:"date",name:"date",value:s.date,onChange:d,placeholder:"October 08 2021"})}),Object(O.jsx)("button",{type:"submit",children:"Save"})]})]})},y=function(e){var t=e.setIsLogin;return Object(O.jsx)(x.a,{children:Object(O.jsxs)("div",{className:"notes-page",children:[Object(O.jsx)(f,{setIsLogin:t}),Object(O.jsxs)("section",{children:[Object(O.jsx)(g.a,{path:"/",component:v,exact:!0}),Object(O.jsx)(g.a,{path:"/create",component:w,exact:!0}),Object(O.jsx)(g.a,{path:"/edit/:id",component:k,exact:!0})]})]})})},S=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(l.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=localStorage.getItem("tokenStore"))){e.next=11;break}return e.next=4,j.a.get("".concat(h,"users/verify"),{headers:{Authorization:t}});case 4:if(a=e.sent,console.log(a),c(a.data),!1!==a.data){e.next=9;break}return e.abrupt("return",localStorage.clear());case 9:e.next=12;break;case 11:c(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(O.jsx)("div",{className:"App",children:a?Object(O.jsx)(y,{setIsLogin:c}):Object(O.jsx)(m,{setIsLogin:c})})},C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,65)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(S,{})}),document.getElementById("root")),C()}},[[64,1,2]]]);
//# sourceMappingURL=main.1c7dc5b4.chunk.js.map
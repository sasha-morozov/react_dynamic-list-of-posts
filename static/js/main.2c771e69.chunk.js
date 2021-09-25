(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(8),c=n.n(s),a=n(2),r=n.n(a),o=n(4),i=n(3),u=n(1),l=(n(15),n(16),n(17),n(0)),d=function(e){var t=e.posts,n=e.getPostId,s=e.selectedPostId;return Object(l.jsxs)("div",{className:"PostsList",children:[Object(l.jsx)("h2",{children:"Posts:"}),Object(l.jsx)("ul",{className:"PostsList__list",children:t.map((function(e){return Object(l.jsxs)("li",{className:"PostsList__item",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("b",{children:"[User ".concat(e.userId," ]:")}),e.title]}),Object(l.jsx)("button",{type:"button",className:"PostsList__button button",onClick:function(){return t=e.id,void n(s===t?0:t);var t},children:s===e.id?"Close":"Open"})]},e.id)}))})]})},j=n(9),b="https://mate.academy/students-api",m=function(){var e=Object(o.a)(r.a.mark((function e(t){var n,s,c=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>1&&void 0!==c[1]?c[1]:{},e.next=3,fetch("".concat(b).concat(t),n);case 3:if((s=e.sent).ok){e.next=6;break}throw new Error("".concat(s.status," - ").concat(s.statusText));case 6:return e.abrupt("return",s.json());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=(n(19),function(e){var t=e.onAdd,n=e.selectedPostId,s=Object(u.useState)(""),c=Object(i.a)(s,2),a=c[0],r=c[1],o=Object(u.useState)(""),d=Object(i.a)(o,2),j=d[0],b=d[1],m=Object(u.useState)(""),p=Object(i.a)(m,2),f=p[0],O=p[1];return Object(l.jsxs)("form",{className:"NewCommentForm",onSubmit:function(e){e.preventDefault(),t({name:a,body:f,email:j,postId:n}),r(""),b(""),O("")},children:[Object(l.jsx)("div",{className:"form-field",children:Object(l.jsx)("input",{type:"text",name:"name",value:a,onChange:function(e){return r(e.target.value)},placeholder:"Your name",className:"NewCommentForm__input"})}),Object(l.jsx)("div",{className:"form-field",children:Object(l.jsx)("input",{type:"text",name:"email",value:j,onChange:function(e){return b(e.target.value)},placeholder:"Your email",className:"NewCommentForm__input"})}),Object(l.jsx)("div",{className:"form-field",children:Object(l.jsx)("textarea",{name:"body",value:f,onChange:function(e){return O(e.target.value)},placeholder:"Type comment here",className:"NewCommentForm__input"})}),Object(l.jsx)("button",{type:"submit",className:"NewCommentForm__submit-button button",children:"Add a comment"})]})}),f=(n(20),function(e){var t=e.selectedPostId,n=Object(u.useState)(null),s=Object(i.a)(n,2),c=s[0],a=s[1],d=Object(u.useState)([]),b=Object(i.a)(d,2),f=b[0],O=b[1],h=Object(u.useState)(!1),x=Object(i.a)(h,2),v=x[0],_=x[1];Object(u.useEffect)((function(){Object(o.a)(r.a.mark((function e(){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("/posts/".concat(t));case 2:n=e.sent,a(n);case 4:case"end":return e.stop()}}),e)})))(),Object(o.a)(r.a.mark((function e(){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("/comments?postId=".concat(t));case 2:n=e.sent,O(n);case 4:case"end":return e.stop()}}),e)})))()}),[t]);var N=function(){var e=Object(o.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("/comments/".concat(t),{method:"DELETE"});case 2:O((function(e){return e.filter((function(e){return e.id!==t}))}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(o.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s=t,m("/comments",{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(s)});case 2:n=e.sent,O((function(e){return[].concat(Object(j.a)(e),[n])}));case 4:case"end":return e.stop()}var s}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"PostDetails",children:[Object(l.jsx)("h2",{children:"Post details:"}),Object(l.jsx)("section",{className:"PostDetails__post",children:Object(l.jsx)("p",{children:null===c||void 0===c?void 0:c.body})}),Object(l.jsxs)("section",{className:"PostDetails__comments",children:[Object(l.jsx)("button",{type:"button",className:"button",onClick:function(){_((function(e){return!e}))},children:v?"Hide":"Show"}),v&&Object(l.jsx)("ul",{className:"PostDetails__list",children:f.map((function(e){return Object(l.jsxs)("li",{className:"PostDetails__list-item",children:[Object(l.jsx)("button",{onClick:function(){return N(e.id)},type:"button",className:"PostDetails__remove-button button",children:"X"}),Object(l.jsx)("p",{children:e.body})]},e.id)}))})]}),Object(l.jsx)("section",{children:Object(l.jsx)("div",{className:"PostDetails__form-wrapper",children:Object(l.jsx)(p,{onAdd:w,selectedPostId:t})})})]})}),O=function(){var e=Object(u.useState)([]),t=Object(i.a)(e,2),n=t[0],s=t[1],c=Object(u.useState)([]),a=Object(i.a)(c,2),j=a[0],b=a[1],p=Object(u.useState)(0),O=Object(i.a)(p,2),h=O[0],x=O[1],v=Object(u.useState)(0),_=Object(i.a)(v,2),N=_[0],w=_[1],y=function(){var e=Object(o.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("/users");case 2:t=e.sent,b(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(o.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==h){e.next=6;break}return e.next=3,m("/posts");case 3:return t=e.sent,s(t),e.abrupt("return");case 6:return e.next=8,m("/posts?userId=".concat(h));case 8:n=e.sent,s(n);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.useEffect)((function(){P()}),[h]),Object(u.useEffect)((function(){y()}),[]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("header",{className:"App__header",children:Object(l.jsxs)("label",{children:["Select a user: \xa0",Object(l.jsxs)("select",{className:"App__user-selector",name:"selectedUserId",value:h,onChange:function(e){var t=Number(e.target.value);x(t)},children:[Object(l.jsx)("option",{value:"0",children:"All users"}),null===j||void 0===j?void 0:j.map((function(e){return Object(l.jsx)("option",{value:e.id,children:e.name},e.id)}))]})]})}),Object(l.jsxs)("main",{className:"App__main",children:[Object(l.jsx)("div",{className:"App__sidebar",children:n.length>0?Object(l.jsx)(d,{posts:n,selectedPostId:N,getPostId:function(e){w(e)}}):"No posts"}),0!==N&&Object(l.jsx)("div",{className:"App__content",children:Object(l.jsx)(f,{selectedPostId:N})})]})]})};c.a.render(Object(l.jsx)(O,{}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.2c771e69.chunk.js.map
(this["webpackJsonpcrud-react-project"]=this["webpackJsonpcrud-react-project"]||[]).push([[0],{30:function(e,r,s){},31:function(e,r,s){},32:function(e,r,s){},34:function(e,r,s){},35:function(e,r,s){},36:function(e,r,s){},40:function(e,r,s){"use strict";s.r(r);var a=s(0),t=s.n(a),i=s(10),c=s.n(i),n=(s(11),s(30),s(31),s(42)),o=s(43),l=s(22),d=(s(32),s(1)),j=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(n.a,{fluid:!0,children:Object(d.jsx)(o.a,{children:Object(d.jsx)(l.a,{className:"header",children:"CRUD App"})})})})},b=(s(34),function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(n.a,{fluid:!0,children:Object(d.jsx)(o.a,{children:Object(d.jsx)(l.a,{className:"footer"})})})})}),m=s(18),h=s(8),u=(s(35),s(47)),O=s(44),x=s(45),f=s(15),p=s(17),N=s(46),g=(s(36),function(e){var r=e.label,s=e.currentUser,t=e.addUser,i=e.handleClose,c={id:null,firstName:"",lastName:"",email:"",mobile:"",password:""},n={firstName:{isError:!0,errorMessage:"firstName is required"},lastName:{isError:!0,errorMessage:"lastName is required"},email:{isError:!0,errorMessage:"email is required"},mobile:{isError:!0,errorMessage:"mobile is required"},password:{isError:!0,errorMessage:"password is required"}},o=Object(a.useState)(c),l=Object(h.a)(o,2),j=l[0],b=l[1],m=Object(a.useState)({firstName:{isError:!1,errorMessage:""},lastName:{isError:!1,errorMessage:""},email:{isError:!1,errorMessage:""},mobile:{isError:!1,errorMessage:""},password:{isError:!1,errorMessage:""}}),O=Object(h.a)(m,2),x=O[0],g=O[1],E=function(e){var r=e.target,s=r.name,a=r.value;b(Object(p.a)(Object(p.a)({},j),{},Object(f.a)({},s,a)))},w=function(e){var r=new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i),s=new RegExp(/^[0-9\b]+$/);for(var a in e)"id"!==a&&""===e[a]&&(x[a].isError=!0,x[a].errorMessage="".concat(a," is required")),"id"!==a&&""!==e[a]&&(x[a].isError=!1,x[a].errorMessage=""),"email"!==a||""===e.email||r.test(e.email)||(x.email.isError=!0,x.email.errorMessage="Please enter valid email address."),"mobile"!==a||""===e.mobile||s.test(e.mobile)||(x.mobile.isError=!0,x.mobile.errorMessage="Please enter only number."),"mobile"===a&&""!==e.mobile&&10!==e.mobile.length&&(x.mobile.isError=!0,x.mobile.errorMessage="Mobile number not be greater than 10");var t=Object(p.a)({},x);g(t)};return Object(a.useEffect)((function(){b(s)}),[s]),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(N.a,{onSubmit:function(e){var s=[],a=!1;if(e.preventDefault(),!(j.firstName||j.lastName||j.email||j.mobile||j.password))return g(n),void(a=!1);for(var o in w(j),j)"id"!==o&&(!0===x[o].isError&&s.push(x[o].isError),a=!s.length);a&&(t(j,r),b(c),i())},children:[Object(d.jsxs)(N.a.Group,{controlId:"formBasicFname",children:[Object(d.jsx)(N.a.Label,{children:"FirstName"}),Object(d.jsx)(N.a.Control,{type:"text",placeholder:"Enter FirstName",name:"firstName",value:j.firstName,onChange:E,className:"".concat(x.firstName.isError?"shown-border":"")})]}),x.firstName.isError&&Object(d.jsx)("p",{className:"errorMessage",children:x.firstName.errorMessage}),Object(d.jsxs)(N.a.Group,{controlId:"formBasicLname",children:[Object(d.jsx)(N.a.Label,{children:"LastName"}),Object(d.jsx)(N.a.Control,{type:"text",placeholder:"Enter LastName",name:"lastName",value:j.lastName,onChange:E,className:"".concat(x.lastName.isError?"shown-border":"")})]}),x.lastName.isError&&Object(d.jsx)("p",{className:"errorMessage",children:x.lastName.errorMessage}),Object(d.jsxs)(N.a.Group,{controlId:"formBasicEmail",children:[Object(d.jsx)(N.a.Label,{children:"Email address"}),Object(d.jsx)(N.a.Control,{type:"email",placeholder:"Enter email",name:"email",value:j.email,onChange:E,className:"".concat(x.email.isError?"shown-border":"")})]}),x.email.isError&&Object(d.jsx)("p",{className:"errorMessage",children:x.email.errorMessage}),Object(d.jsxs)(N.a.Group,{controlId:"formBasicMobile",children:[Object(d.jsx)(N.a.Label,{children:"Email Mobile"}),Object(d.jsx)(N.a.Control,{type:"text",placeholder:"Enter Mobile",name:"mobile",value:j.mobile,onChange:E,className:"".concat(x.mobile.isError?"shown-border":"")})]}),x.mobile.isError&&Object(d.jsx)("p",{className:"errorMessage",children:x.mobile.errorMessage}),Object(d.jsxs)(N.a.Group,{controlId:"formBasicPassword",children:[Object(d.jsx)(N.a.Label,{children:"Password"}),Object(d.jsx)(N.a.Control,{type:"password",placeholder:"Password",name:"password",value:j.password,onChange:E,className:"".concat(x.password.isError?"shown-border":"")})]}),x.password.isError&&Object(d.jsx)("p",{className:"errorMessage",children:x.password.errorMessage}),"ADD_USER"===r?Object(d.jsx)(u.a,{variant:"primary",type:"submit",children:"Add New User"}):Object(d.jsx)(u.a,{variant:"primary",type:"submit",children:"Update User"})]})})}),E=function(e){var r=e.show,s=e.label,a=e.currentUser,t=e.handleClose,i=e.addUser;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(x.a,{show:r,onHide:t,animation:!1,children:[Object(d.jsx)(x.a.Header,{closeButton:!0,children:Object(d.jsx)(x.a.Title,{children:"ADD_USER"===s?"Add New User":"Edit User"})}),Object(d.jsx)(x.a.Body,{children:Object(d.jsx)(g,{label:s,currentUser:a,addUser:i,handleClose:t})})]})})},w=function(e){var r=e.show,s=e.closeConfirmModal,a=e.deleteUser;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(x.a,{show:r,onHide:s,animation:!1,children:[Object(d.jsx)(x.a.Body,{children:Object(d.jsx)("h3",{children:"Are you sure, you want to delete this user?"})}),Object(d.jsxs)(x.a.Footer,{children:[Object(d.jsx)(u.a,{variant:"secondary",onClick:s,children:"Cancel"}),Object(d.jsx)(u.a,{variant:"danger",onClick:a,children:"Delete"})]})]})})},M=function(){var e={id:null,firstName:"",lastName:"",email:"",mobile:"",password:""},r=Object(a.useState)([{id:1,firstName:"John",lastName:"Doe",email:"joe@gmail.com",mobile:9799445860,password:"123456"},{id:2,firstName:"Ross",lastName:"Taylor",email:"ross@gmail.com",mobile:9799445861,password:"123456"},{id:3,firstName:"Ben",lastName:"sphere",email:"ben@gmail.com",mobile:9799445862,password:"123456"}]),s=Object(h.a)(r,2),t=s[0],i=s[1],c=Object(a.useState)("ADD_USER"),n=Object(h.a)(c,2),o=n[0],l=n[1],j=Object(a.useState)(!1),b=Object(h.a)(j,2),x=b[0],f=b[1],p=Object(a.useState)(!1),N=Object(h.a)(p,2),g=N[0],M=N[1],v=Object(a.useState)(e),C=Object(h.a)(v,2),U=C[0],S=C[1],y=function(r,s){f(!0),l(r),S("EDIT_USER"===r?s:e)};return Object(d.jsxs)("div",{className:"table-container",children:[Object(d.jsxs)("div",{className:"main-table",children:[Object(d.jsx)(u.a,{variant:"primary",onClick:function(){return y("ADD_USER",{})},children:"Add New User"})," ",Object(d.jsxs)(O.a,{striped:!0,bordered:!0,hover:!0,children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"#"}),Object(d.jsx)("th",{children:"First Name"}),Object(d.jsx)("th",{children:"Last Name"}),Object(d.jsx)("th",{children:"Email"}),Object(d.jsx)("th",{children:"Mobile"}),Object(d.jsx)("th",{children:"Password"}),Object(d.jsx)("th",{colSpan:"2",children:"Action"})]})}),Object(d.jsx)("tbody",{children:t.length>0?t.map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.id}),Object(d.jsx)("td",{children:e.firstName}),Object(d.jsx)("td",{children:e.lastName}),Object(d.jsx)("td",{children:e.email}),Object(d.jsx)("td",{children:e.mobile}),Object(d.jsx)("td",{children:e.password}),Object(d.jsx)("td",{className:"edit-btn",onClick:function(){return y("EDIT_USER",e)},children:"Edit"}),Object(d.jsx)("td",{className:"edit-btn",onClick:function(){return function(e){M(!0),S(e)}(e)},children:"Delete"})]},e.id)})):Object(d.jsx)("tr",{children:Object(d.jsx)("td",{colSpan:3,children:"No userList"})})})]})]}),Object(d.jsx)(E,{show:x,label:o,currentUser:U,handleClose:function(){return f(!1)},addUser:function(e,r){"ADD_USER"===r?(e.id=t.length+1,i([].concat(Object(m.a)(t),[e]))):"EDIT_USER"===r&&t.forEach((function(r,s){r.id===e.id?(t[s]=e,i(Object(m.a)(t))):i(Object(m.a)(t))}))}}),Object(d.jsx)(w,{show:g,closeConfirmModal:function(){return M(!1)},deleteUser:function(){M(!1),i(t.filter((function(e){return e.id!==U.id})))}})]})};var v=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(j,{}),Object(d.jsx)(M,{}),Object(d.jsx)(b,{})]})},C=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,48)).then((function(r){var s=r.getCLS,a=r.getFID,t=r.getFCP,i=r.getLCP,c=r.getTTFB;s(e),a(e),t(e),i(e),c(e)}))};c.a.render(Object(d.jsx)(t.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root")),C()}},[[40,1,2]]]);
//# sourceMappingURL=main.cd48aaa9.chunk.js.map
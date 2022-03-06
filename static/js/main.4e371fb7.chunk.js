(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{160:function(e,t,a){},161:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(39),o=a.n(i),l=a(60),c=(a(151),a(61)),s=Object(c.b)({name:"ui",initialState:{cartModalVisible:!1,cartIsVisible:!1,notification:null,loading:!1,category:""},reducers:{toggle:function(e){e.cartIsVisible=!e.cartIsVisible},showNotification:function(e,t){e.notification={status:t.payload.status,title:t.payload.title,message:t.payload.message}},setLoadingTrue:function(e){e.loading=!0},setLoadingFalse:function(e){e.loading=!1},setCategory:function(e,t){e.category=t.payload},toggleCartModal:function(e){e.cartModalVisible=!e.cartModalVisible}}}),u=s.actions,d=s,m=Object(c.b)({name:"employees",initialState:{employees:[]},reducers:{populateEmployeesArray:function(e,t){e.employees=t.payload}}}),f=m.actions,p=m,h=Object(c.a)({reducer:{ui:d.reducer,employees:p.reducer}}),b=a(15),j=a(97),g=a(7),y=a(79),x=a.n(y),O=a(220),v=a(226),w=a(222),N=a(2);var C=function(e){var t=e.setSearchValue;return Object(N.jsx)(v.a,{component:"form",sx:{"& > :not(style)":{ml:4,mt:2,width:"50ch"}},noValidate:!0,autoComplete:"off",children:Object(N.jsx)(w.a,{id:"outlined-basic",label:"Search Employees...",variant:"outlined",onChange:function(e){return t((function(){return e.target.value}))}})})};var M=function(){var e=Object(n.useState)(null),t=Object(g.a)(e,2),a=t[0],i=t[1],o=Object(n.useState)(null),c=Object(g.a)(o,2),s=c[0],u=c[1],d=Object(l.c)((function(e){var t;return null===(t=e.employees.employees.employees)||void 0===t?void 0:t.results})),m=[{field:"id",headerName:"ID",headerAlign:"center",align:"center",flex:1,width:4},{field:"image",headerName:"Image",headerAlign:"center",align:"center",flex:2,renderCell:function(e){return Object(N.jsx)("img",{style:{borderRadius:"5px"},src:e.value,alt:""})}},{field:"firstName",headerName:"First Name",headerAlign:"center",align:"center",flex:4},{field:"lastName",headerName:"Last Name",headerAlign:"center",align:"center",flex:4},{field:"phone",headerName:"Phone",headerAlign:"center",align:"center",flex:4},{field:"email",headerName:"Email",headerAlign:"center",align:"center",flex:4},{field:"dob",headerName:"Date of Birth",headerAlign:"center",align:"center",flex:4},{field:"nationality",headerName:"Nationality",headerAlign:"center",align:"center",flex:2}],f=[];return function(e,t){null===e||void 0===e||e.map((function(e,a){var n=x()(e.dob.date).format("MMMM Do, YYYY");t.push({id:a,image:e.picture.medium,firstName:e.name.first,lastName:e.name.last,name:"".concat(e.name.first," ").concat(e.name.last),phone:e.phone,email:e.email,dob:n,nationality:e.nat})}))}(d,f),r.a.useEffect((function(){!function(e,t,a,n){var r=[];null===e||""===e?r=t:a.filter((function(t){var a=null===e||void 0===e?void 0:e.toLowerCase();return!!(t.name.first.toLowerCase().includes(a)||t.name.last.toLowerCase().includes(a)||t.email.toLowerCase().includes(a)||t.phone.toLowerCase().includes(a)||t.dob.date.toLowerCase().includes(a)||t.nat.toLowerCase().includes(a))})).map((function(e,t){var a=x()(e.dob.date).format("MMMM Do, YYYY");r.push({id:t,image:e.picture.medium,firstName:e.name.first,lastName:e.name.last,name:"".concat(e.name.first," ").concat(e.name.last),phone:e.phone,email:e.email,dob:a,nationality:e.nat})})),n((function(){return r}))}(a,f,d,u)}),[a,d]),Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)("div",{style:{height:800,width:"100%"},children:[Object(N.jsx)(C,{setSearchValue:i}),Object(N.jsx)(O.a,{rowHeight:80,rows:(null===s||void 0===s?void 0:s.length)>0?s:f,columns:m,pageSize:25,rowsPerPageOptions:[5],sx:{boxShadow:2,m:4,mt:2,p:2,border:2,borderColor:"primary.light","& .MuiDataGrid-cell:hover":{color:"primary.main"}}})]})})};a(160);var L=function(){return Object(N.jsx)("div",{className:"jumbotron-fluid text-light jumboTronContainer",children:Object(N.jsxs)(v.a,{sx:{ml:4},children:[Object(N.jsx)("h1",{className:"display-4 text-left",children:"Employee Directory"}),Object(N.jsx)("p",{className:"lead text-left",children:"Search your Employees!"})]})})},E=a(18),A=a.n(E),S=a(29);function V(){var e=Object(l.b)();return Object(n.useEffect)((function(){e(function(){var e=Object(S.a)(A.a.mark((function e(t){var a,n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=function(){var e=Object(S.a)(A.a.mark((function e(){var a,n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(u.setLoadingTrue()),e.next=4,fetch("https://randomuser.me/api/?results=50&nat=us");case 4:if((a=e.sent).ok){e.next=7;break}throw new Error("Could not fetch product data!");case 7:return e.next=9,a.json();case 9:return n=e.sent,t(u.setLoadingFalse()),e.abrupt("return",n);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.prev=1,e.next=4,a();case 4:n=e.sent,t(f.populateEmployeesArray({employees:n||[]})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t(u.showNotification({status:"error",title:"Error!",message:"Fetching employee data failed!"}));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)(j.a,{children:[Object(N.jsx)(L,{}),Object(N.jsxs)(b.d,{children:[Object(N.jsx)(b.b,{path:"/employee-directory",element:Object(N.jsx)(M,{})}),Object(N.jsx)(b.b,{path:"*",element:Object(N.jsx)(b.a,{to:"/employee-directory",replace:!0})})]})]})})}o.a.render(Object(N.jsx)(l.a,{store:h,children:Object(N.jsx)(V,{})}),document.getElementById("root"))}},[[161,1,2]]]);
//# sourceMappingURL=main.4e371fb7.chunk.js.map
(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{21:function(e,t,r){"use strict";r.r(t);var c=r(1),n=r(9),s=r.n(n),a=(r(16),r(2)),l=r(3),i=r(5),o=r(4),h=r(7),j=r.n(h),u=r(10),d=r(11),b=r.n(d),m=(r(8),r(0));var p=function(e){return Object(m.jsx)("form",{children:Object(m.jsxs)("div",{className:"form-group formGroup",children:[Object(m.jsx)("label",{htmlFor:"search"}),Object(m.jsx)("input",{onChange:e.handleInputChange,value:e.search,name:"search",type:"text",className:"form-control searchBox",placeholder:"Search",id:"search"})]})})};var O=function(e){Object(i.a)(r,e);var t=Object(o.a)(r);function r(){var e;Object(a.a)(this,r);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={search:"",results:[]},e}return Object(l.a)(r,[{key:"componentDidMount",value:function(){var e=Object(u.a)(j.a.mark((function e(){var t,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://randomuser.me/api/?results=50&nat=us",e.next=3,fetch("https://randomuser.me/api/?results=50&nat=us");case 3:return t=e.sent,e.next=6,t.json();case 6:r=e.sent,this.setState({results:r.results}),console.log(this.state.results);case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.results.map((function(e){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:Object(m.jsx)("img",{src:e.picture.thumbnail,alt:"employee pic"})}),Object(m.jsx)("td",{children:e.name.first+" "+e.name.last}),Object(m.jsx)("td",{children:e.cell}),Object(m.jsx)("td",{children:e.email}),Object(m.jsx)("td",{children:Object(m.jsx)(b.a,{format:"DD MMMM YYYY",children:e.dob.date})})]})}));return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(p,{search:this.state.search,handleFormSubmit:this.handleFormSubmit,handleInputChange:this.handleInputChange}),Object(m.jsx)("div",{className:"container-fluid",children:Object(m.jsxs)("table",{className:"table",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{scope:"col",children:"Image"}),Object(m.jsx)("th",{scope:"col",children:"Name"}),Object(m.jsx)("th",{scope:"col",children:"Phone"}),Object(m.jsx)("th",{scope:"col",children:"Email"}),Object(m.jsx)("th",{scope:"col",children:"DOB"})]})}),Object(m.jsx)("tbody",{children:e})]})})]})}}]),r}(c.Component);var x=function(){return Object(m.jsx)("div",{className:"jumbotron jumbotron-fluid text-light jumboTron",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("h1",{className:"display-4 text-center",children:"Employee Directory"}),Object(m.jsx)("p",{className:"lead text-center",children:"Click on carrots to filter by heading or use the search box to narrow your results."})]})})},f=function(e){Object(i.a)(r,e);var t=Object(o.a)(r);function r(){return Object(a.a)(this,r),t.apply(this,arguments)}return Object(l.a)(r,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"container-fluid",children:[Object(m.jsx)(x,{}),Object(m.jsx)(O,{})]})}}]),r}(c.Component);s.a.render(Object(m.jsx)(f,{}),document.getElementById("root"))},8:function(e,t,r){}},[[21,1,2]]]);
//# sourceMappingURL=main.ef104d8d.chunk.js.map
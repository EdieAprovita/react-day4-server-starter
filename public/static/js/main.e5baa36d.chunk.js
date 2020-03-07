(this["webpackJsonpproject-management-client"]=this["webpackJsonpproject-management-client"]||[]).push([[0],{32:function(e,t,n){e.exports=n(61)},37:function(e,t,n){},38:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(26),l=n.n(c),o=(n(37),n(2)),i=(n(38),n(11)),u=n(4),s=n.n(u),m=n(1),p=n(7),h=function(e){var t=Object(a.useState)({title:"",description:""}),n=Object(o.a)(t,2),c=n[0],l=n[1],i=function(e){var t=e.target,n=t.name,a=t.value;l(Object.assign({},c,Object(p.a)({},n,a)))};return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),s.a.post("".concat("https://project-management-ih-oct.herokuapp.com/api","/projects"),c,{withCredentials:!0}).then((function(){e.getData(),l({title:"",description:""})})).catch((function(e){return console.log(e)}))}},r.a.createElement("label",null,"Title:"),r.a.createElement("input",{type:"text",name:"title",value:c.title,onChange:function(e){return i(e)}}),r.a.createElement("label",null,"Description:"),r.a.createElement("textarea",{name:"description",value:c.description,onChange:function(e){return i(e)}}),r.a.createElement("input",{type:"submit",value:"Submit"})))},E=function(e){var t=Object(a.useState)([]),n=Object(o.a)(t,2),c=n[0],l=n[1],i=function(){s.a.get("".concat("https://project-management-ih-oct.herokuapp.com/api","/projects"),{withCredentials:!0}).then((function(e){l(e.data)}))};return Object(a.useEffect)((function(){i()}),[]),r.a.createElement("div",null,r.a.createElement("div",{style:{width:"60%",float:"left"}},c.map((function(e){return r.a.createElement("div",{key:e._id},r.a.createElement(m.b,{to:"/projects/".concat(e._id)},r.a.createElement("h3",null,e.title)),r.a.createElement("ul",null,e.tasks.map((function(e,t){return r.a.createElement("li",{key:t},e.title)}))))}))),r.a.createElement("div",{style:{width:"40%",float:"right"}},r.a.createElement(h,{getData:function(){return i()}})," "))},f=n(29),d=function e(){var t=this;Object(f.a)(this,e),this.signup=function(e,n){return t.service.post("/signup",{username:e,password:n}).then((function(e){return e.data}))},this.loggedin=function(){return t.service.get("/loggedin").then((function(e){return e.data}))},this.login=function(e,n){return t.service.post("/login",{username:e,password:n}).then((function(e){return e.data}))},this.logout=function(){return t.service.post("/logout",{}).then((function(e){return e.data}))};var n=s.a.create({baseURL:"https://project-management-ih-oct.herokuapp.com/api",withCredentials:!0});this.service=n},g=function(e){var t=e.userInSession,n=e.getUser,a=new d;return t?r.a.createElement("nav",{className:"nav-style"},r.a.createElement("ul",null,r.a.createElement("li",null,"Welcome, ",t.username),r.a.createElement("li",null,r.a.createElement(m.b,{to:"/projects",style:{textDecoration:"none"}},"Projects")),r.a.createElement("li",null,r.a.createElement(m.b,{to:"/"},r.a.createElement("button",{onClick:function(){a.logout().then((function(){n(null)}))}},"Logout"))))):r.a.createElement("div",null,r.a.createElement("nav",{className:"nav-style"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(m.b,{to:"/signup",style:{textDecoration:"none"}},"Signup")))))},v=function(e){var t=Object(i.g)(),n=Object(a.useState)({title:e.theProject.title,description:e.theProject.description}),c=Object(o.a)(n,2),l=c[0],u=c[1],m=function(e){var t=e.target,n=t.name,a=t.value;u(Object.assign({},l,Object(p.a)({},n,a)))};return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("h3",null,"Edit form"),r.a.createElement("form",{onSubmit:function(n){n.preventDefault(),s.a.put("".concat("https://project-management-ih-oct.herokuapp.com/api","/projects/").concat(e.theProject._id),l,{withCredentials:!0}).then((function(){e.getTheProject(),t.push("/projects")})).catch((function(e){return console.log(e)}))}},r.a.createElement("label",null,"Title:"),r.a.createElement("input",{type:"text",name:"title",value:l.title,onChange:function(e){return m(e)}}),r.a.createElement("label",null,"Description:"),r.a.createElement("textarea",{name:"description",value:l.description,onChange:function(e){return m(e)}}),r.a.createElement("input",{type:"submit",value:"Submit"})))},b=function(e){var t=Object(a.useState)({title:"",description:""}),n=Object(o.a)(t,2),c=n[0],l=n[1],i=Object(a.useState)(!1),u=Object(o.a)(i,2),m=u[0],h=u[1],E=function(t){t.preventDefault();var n=Object.assign({projectID:e.theProject._id},c);s.a.post("".concat("https://project-management-ih-oct.herokuapp.com/api","/tasks"),n).then((function(){e.getTheProject(),l({title:"",description:""})})).catch((function(e){return console.log(e)}))},f=function(e){var t=e.target,n=t.name,a=t.value;l(Object.assign({},c,Object(p.a)({},n,a)))};return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("button",{onClick:function(){h(!m)}}," Add task "),function(){if(m)return r.a.createElement("div",null,r.a.createElement("h3",null,"Add Task"),r.a.createElement("form",{onSubmit:E},r.a.createElement("label",null,"Title:"),r.a.createElement("input",{type:"text",name:"title",value:c.title,onChange:function(e){return f(e)}}),r.a.createElement("label",null,"Description:"),r.a.createElement("textarea",{name:"description",value:c.description,onChange:function(e){return f(e)}}),r.a.createElement("input",{type:"submit",value:"Submit"})))}())},j=function(e){var t=Object(i.g)(),n=Object(i.h)().id;Object(a.useEffect)((function(){h()}),[]);var c=Object(a.useState)({_id:"",title:"",description:"",tasks:[]}),l=Object(o.a)(c,2),u=l[0],p=l[1],h=function(){s.a.get("".concat("https://project-management-ih-oct.herokuapp.com/api","/projects/").concat(n),{withCredentials:!0}).then((function(e){p(e.data)})).catch((function(e){console.log(e)}))},E=function(){if(u.title)return r.a.createElement(b,{theProject:u,getTheProject:h});h()};return r.a.createElement("div",null,r.a.createElement("h1",null,u.title),r.a.createElement("p",null,u.description),r.a.createElement("div",null,function(a){if(console.log(a),console.log(e.loggedInUser),e.loggedInUser&&a.owner==e.loggedInUser._id)return r.a.createElement("div",null,u.tasks&&u.tasks.length>0&&r.a.createElement("h3",null,"Tasks "),u.tasks&&u.tasks.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(m.b,{to:"/projects/".concat(u._id,"/tasks/").concat(e._id)},e.title))})),r.a.createElement("div",null,function(){if(u.title)return r.a.createElement(v,Object.assign({theProject:u,getTheProject:h},e));h()}()," "),r.a.createElement("button",{onClick:function(){return u._id,void s.a.delete("".concat("https://project-management-ih-oct.herokuapp.com/api","/projects/").concat(n),{withCredentials:!0}).then((function(){t.push("/projects")})).catch((function(e){console.log(e)}))}},"Delete project"),r.a.createElement("br",null),r.a.createElement("div",null,E()," "))}(u)),r.a.createElement(m.b,{to:"/projects"},"Back to projects"))},O=function(e){var t=Object(a.useState)({username:"",password:""}),n=Object(o.a)(t,2),c=n[0],l=n[1],i=new d,u=function(e){var t=e.target,n=t.name,a=t.value;l(Object.assign({},c,Object(p.a)({},n,a)))};return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(t){t.preventDefault();var n=c.username,a=c.password;i.signup(n,a).then((function(t){l({username:"",password:""}),e.getUser(t)})).catch((function(e){return console.log(e)}))}},r.a.createElement("label",null,"Username:"),r.a.createElement("input",{type:"text",name:"username",value:c.username,onChange:function(e){return u(e)}}),r.a.createElement("label",null,"Password:"),r.a.createElement("input",{name:"password",type:"password",value:c.password,onChange:function(e){return u(e)}}),r.a.createElement("input",{type:"submit",value:"Signup"})),r.a.createElement("p",null,"Already have account?",r.a.createElement(m.b,{to:"/"}," Login")))},w=function(e){var t=Object(a.useState)({username:"",password:""}),n=Object(o.a)(t,2),c=n[0],l=n[1],i=new d,u=function(e){var t=e.target,n=t.name,a=t.value;l(Object.assign({},c,Object(p.a)({},n,a)))};return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(t){t.preventDefault();var n=c.username,a=c.password;i.login(n,a).then((function(t){l({username:"",password:""}),e.getUser(t)})).catch((function(e){return console.log(e)}))}},r.a.createElement("label",null,"Username:"),r.a.createElement("input",{type:"text",name:"username",value:c.username,onChange:function(e){return u(e)}}),r.a.createElement("label",null,"Password:"),r.a.createElement("input",{type:"password",name:"password",value:c.password,onChange:function(e){return u(e)}}),r.a.createElement("input",{type:"submit",value:"Login"})),r.a.createElement("p",null,"Don't have account?",r.a.createElement(m.b,{to:"/signup"}," Signup")))},k=n(30),y=n(31),S=function(e){var t=e.component,n=e.user,a=Object(y.a)(e,["component","user"]);return console.log(Object(k.a)({component:t,user:n},a)),r.a.createElement(i.b,Object.assign({},a,{render:function(e){return n?r.a.createElement(t,Object.assign({},e,{loggedInUser:n})):r.a.createElement(i.a,{to:{pathname:"/",state:{from:e.location}}})}}))},C=function(e){var t=Object(a.useState)(null),n=Object(o.a)(t,2),c=n[0],l=n[1],u=new d;return null===c&&u.loggedin().then((function(e){l(e)})).catch((function(e){l(null)})),c?r.a.createElement("div",{className:"App"},r.a.createElement(g,{userInSession:c,getUser:l}),r.a.createElement(i.d,null,r.a.createElement(S,{user:c,path:"/projects/:id",component:j}),r.a.createElement(S,{user:c,path:"/projects",component:E}))):r.a.createElement("div",{className:"App"},r.a.createElement(g,{userInSession:c}),r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:"/signup",render:function(){return r.a.createElement(O,{getUser:l})}}),r.a.createElement(i.b,{exact:!0,path:"/",render:function(){return r.a.createElement(w,{getUser:l})}}),r.a.createElement(S,{user:c,path:"/projects/:id",component:j}),r.a.createElement(S,{user:c,path:"/projects",component:E})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(m.a,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.e5baa36d.chunk.js.map
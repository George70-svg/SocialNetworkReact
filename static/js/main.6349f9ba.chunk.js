(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,a){"use strict";a.d(t,"c",(function(){return s})),a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return c}));var n=a(64),r=a.n(n).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"ab8eb545-4faa-49c3-bf44-5dcf07bb362c"}}),s={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12;return r.get("/users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},totalUsers:function(){return r.get("/users").then((function(e){return e.data.totalCount}))},follow:function(e){return r.post("/follow/".concat(e))},unfollow:function(e){return r.delete("/follow/".concat(e))}},i={getProfile:function(e){return r.get("/profile/".concat(e)).then((function(e){return e.data}))},setProfileStatus:function(e){return r.get("/profile/status/".concat(e))},updateProfileStatus:function(e){return r.put("/profile/status",{status:e})}},c={authMe:function(){return r.get("/auth/me").then((function(e){return e.data}))},login:function(e){return r.post("/auth/login",{email:e.email,password:e.password,rememberMe:e.rememberMe})},logout:function(){return r.delete("/auth/login")}}},100:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(35),i=a.n(s),c=(a(73),function(e){e&&e instanceof Function&&a.e(7).then(a.bind(null,120)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),s(e),i(e)}))}),o=a(27),u=a(28),d=a(31),l=a(30),f=a(5),p=a(14),b=a(19),m=a(13),g=(a(78),a(18)),h=a.n(g),j=a(26),x=a.n(j),v=a(39),O=a.n(v),_=a(1),k=function(e){return Object(_.jsxs)("div",{className:O.a.item,children:[Object(_.jsx)("img",{className:O.a.avatar,src:e.avatar,alt:"avatar"}),Object(_.jsx)("p",{className:O.a.name,children:e.name})]})},w=a(48),y=Object(m.b)((function(e){return{totalUsersCount:Object(w.b)(e)}}),{})((function(e){var t=e.friendsList.map((function(e,t){return Object(_.jsx)(k,{avatar:e.avatar,name:e.name},t)}));return Object(_.jsxs)("div",{className:x.a.friendsContainer,children:[Object(_.jsx)("h2",{className:x.a.headerText,children:"Friends"}),Object(_.jsxs)("p",{className:x.a.usersCount,children:["Users: ",e.totalUsersCount]}),Object(_.jsx)("div",{className:x.a.avatar,children:t})]})})),C=function(e){return Object(_.jsxs)("aside",{className:h.a.aside,children:[Object(_.jsx)(p.b,{to:"/profile",activeClassName:h.a.active,children:Object(_.jsx)("div",{children:"Profile"})}),Object(_.jsx)(p.b,{to:"/dialogs",activeClassName:h.a.active,children:Object(_.jsx)("div",{children:"Messages"})}),Object(_.jsx)(p.b,{to:"/films",activeClassName:h.a.active,children:Object(_.jsx)("div",{children:"Films"})}),Object(_.jsx)(p.b,{to:"/users",activeClassName:h.a.active,children:Object(_.jsx)("div",{children:"Users"})}),Object(_.jsx)(p.b,{to:"/news",activeClassName:h.a.active,children:Object(_.jsx)("div",{children:"News"})}),Object(_.jsx)(p.b,{to:"/music",activeClassName:h.a.active,children:Object(_.jsx)("div",{children:"Music"})}),Object(_.jsx)(p.b,{to:"/setting",activeClassName:h.a.active,children:Object(_.jsx)("div",{children:"Setting"})}),Object(_.jsx)("div",{className:h.a.fiendsList,children:Object(_.jsx)(y,{friendsList:e.friendsList})})]})},N=function(e){return e.friends.friendsList},D=Object(m.b)((function(e){return{friendsList:N(e)}}))(C),S=function(e){return Object(_.jsx)("div",{children:"News"})},I=function(e){return Object(_.jsx)("div",{children:"Music"})},T=function(e){return Object(_.jsx)("div",{children:"Setting"})},E=a(34),R=a(2),L=a(40),A=a.n(L),P=a(4),F=a.n(P),M=a(9),U=a(10),z="authReducer/SET_USER_LOGIN",X={userId:null,login:null,email:null,isAuth:!1},Q=function(e,t,a,n){return{type:z,data:{userId:e,login:t,email:a,isAuth:n}}},B=function(e){return function(){var e=Object(M.a)(F.a.mark((function e(t){var a,n,r,s,i;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.a.authMe();case 2:0===(a=e.sent).resultCode&&(n=a.data,r=n.id,s=n.login,i=n.email,t(Q(r,s,i,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Y=function(){return function(){var e=Object(M.a)(F.a.mark((function e(t){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.a.logout();case 2:0===e.sent.data.resultCode&&t(Q(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;return t.type===z?Object(R.a)(Object(R.a)({},e),t.data):e},J={logout:Y},q=Object(m.b)(null,J)((function(e){return Object(_.jsxs)("header",{className:A.a.header,children:[Object(_.jsx)("h1",{children:"IAKE social network"}),Object(_.jsx)("div",{className:A.a.loginContainer,children:e.data.isAuth?Object(_.jsxs)("div",{className:A.a.logout,children:[Object(_.jsx)("p",{children:e.data.login}),Object(_.jsx)("button",{onClick:e.logout,children:"logout"})]}):Object(_.jsx)(p.b,{to:"/login",children:"Login"})})]})})),G=a(29),W=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(_.jsx)(q,Object(R.a)({},this.props))}}]),a}(r.a.Component),Z=Object(m.b)((function(e){return{data:Object(G.b)(e)}}))(W),V=a(46),K=a(65),$=a.n(K),ee=a(7),te=a.n(ee),ae=a(45),ne=function(e){var t,a=Object(ae.a)({initialValues:{email:"",password:"",checkbox:!0},onSubmit:function(t,a){var n={email:t.email,password:t.password,rememberMe:t.checkbox};e.onSubmit(n,a.setStatus),a.resetForm()},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.password||(t.password="Required"),t}});return a.status&&(t=a.status.error.map((function(e,t){return Object(_.jsx)("p",{children:e},t)}))),Object(_.jsxs)("div",{className:te.a.loginContainer,children:[Object(_.jsxs)("form",{onSubmit:a.handleSubmit,className:te.a.formArea,children:[Object(_.jsxs)("div",{className:te.a.inputContainer,children:[Object(_.jsx)("label",{htmlFor:"email",children:"Login"}),Object(_.jsx)("br",{}),Object(_.jsx)("input",{type:"email",id:"email",name:"email",onChange:a.handleChange,onBlur:a.handleBlur,value:a.values.email,className:a.errors.email&&a.touched.email?te.a.text+" "+te.a.error:te.a.text,placeholder:a.errors.email&&a.touched.email?a.errors.email:null})]}),Object(_.jsxs)("div",{className:te.a.inputContainer,children:[Object(_.jsx)("label",{htmlFor:"password",children:"Password"}),Object(_.jsx)("br",{}),Object(_.jsx)("input",{type:"password",id:"password",name:"password",onChange:a.handleChange,onBlur:a.handleBlur,value:a.values.password,className:a.errors.password&&a.touched.password?te.a.text+" "+te.a.error:te.a.text,placeholder:a.errors.password&&a.touched.password?a.errors.password:null})]}),Object(_.jsx)("div",{className:te.a.apiErrors,children:t||null}),Object(_.jsxs)("div",{className:te.a.inputContainer,children:[Object(_.jsx)("label",{htmlFor:"checkbox",children:"Remember me"}),Object(_.jsx)("input",{type:"checkbox",id:"checkbox",name:"checkbox",onChange:a.handleChange,onBlur:a.handleBlur,value:a.values.checkbox})]}),Object(_.jsx)("div",{className:te.a.buttonContainer,children:e.isAuth?Object(_.jsx)("button",{type:"submit",className:te.a.normal,children:"logout"}):Object(_.jsx)("button",{type:"submit",className:te.a.normal,children:"login"})})]}),Object(_.jsxs)("div",{className:te.a.helpInfo,children:[Object(_.jsx)("p",{children:"To use the social network in test mode without registration, use:"}),Object(_.jsxs)("p",{className:te.a.userData,children:["login: ",Object(_.jsx)("span",{children:"free@samuraijs.com"})]}),Object(_.jsxs)("p",{className:te.a.userData,children:["password: ",Object(_.jsx)("span",{children:"free"})]}),Object(_.jsxs)("p",{children:["To register on the social network, you need to register on the ",Object(_.jsx)("a",{href:"https://social-network.samuraijs.com/signUp",children:"API site"})]})]})]})},re={login:function(e,t){return function(){var a=Object(M.a)(F.a.mark((function a(n){var r;return F.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,U.a.login(e);case 2:0===(r=a.sent).data.resultCode?n(B()):t({error:r.data.messages});case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},logout:Y},se=Object(b.c)(Object(m.b)((function(e){return{isAuth:Object(G.a)(e)}}),re))((function(e){var t=Object(n.useState)(e.isAuth),a=Object(V.a)(t,2),r=a[0],s=a[1];if(Object(n.useEffect)((function(){s(e.isAuth)}),[e.isAuth]),r)return Object(_.jsx)(f.a,{to:"/profile"});return Object(_.jsxs)("div",{className:$.a.login,children:[Object(_.jsx)("h2",{children:"Login"}),Object(_.jsx)(ne,{onSubmit:function(t,a){e.isAuth?e.logout():e.isAuth||e.login(t,a)},isAuth:r})]})})),ie="appReducer/INITIALIZATION_SUCCESS",ce={initialized:!1},oe=a(58),ue=a(68),de="friendsReducer/SET_TOTAL_USERS_COUNT",le={totalUsersCount:null,friendsList:[{id:"1",avatar:"https://pbs.twimg.com/media/Dz2w7QfX4AASPzL.jpg",name:"\u042f\u043d\u0430"},{id:"3",avatar:"https://pbs.twimg.com/profile_images/1260892940165165056/DbnIwfQn_400x400.jpg",name:"\u0412\u043e\u0432\u0430"},{id:"4",avatar:"https://img.nickpic.host/3kthMb.md.jpg",name:"\u0420\u043e\u043c\u0430\u043d"},{id:"5",avatar:"https://i.pinimg.com/originals/8b/b1/e6/8bb1e6f277f5325cdf4bb7c24a7414c4.jpg",name:"\u041c\u0430\u0440\u0438\u044f"},{id:"6",avatar:"https://i01.fotocdn.net/s122/e7191cad2f5d6b50/user_l/2796060407.jpg",name:"\u0421\u043e\u0444\u0438"},{id:"7",avatar:"https://media.sketchfab.com/avatars/ef6824b2e26b4f0d935be8635003e864/f769a2a14bda4462b1d3689647b508ea.png",name:"\u041c\u0430\u043a\u0441\u0438\u043c"}]},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;return t.type===de?Object(R.a)(Object(R.a)({},e),{},{totalUsersCount:t.totalCount}):e},pe=a(59),be=a(60),me=a(44),ge=a(61),he=Object(b.b)({profilePage:me.b,dialogsPage:pe.b,filmPage:be.b,usersPage:ge.a,friends:fe,auth:H,app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;return t.type===ie?Object(R.a)(Object(R.a)({},e),{},{initialized:!0}):e}}),je=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||b.c,xe=Object(b.d)(he,je(Object(b.a)(ue.a)));window.__store__=xe;var ve=xe,Oe=function(e){return Object(_.jsx)(r.a.Suspense,{fallback:Object(_.jsx)(E.a,{}),children:e})},_e=r.a.lazy((function(){return a.e(4).then(a.bind(null,122))})),ke=r.a.lazy((function(){return a.e(3).then(a.bind(null,121))})),we=r.a.lazy((function(){return a.e(5).then(a.bind(null,123))})),ye=r.a.lazy((function(){return a.e(6).then(a.bind(null,124))})),Ce=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.props.initialization()}},{key:"render",value:function(){return this.props.initialized?Object(_.jsxs)("div",{className:"app-wrapper",children:[Object(_.jsx)(Z,{}),Object(_.jsx)(D,{}),Object(_.jsxs)("div",{className:"main",children:[Object(_.jsx)(f.b,{path:"/dialogs",render:function(){return Oe(Object(_.jsx)(_e,{}))}}),Object(_.jsx)(f.b,{path:"/profile/:userId?",render:function(){return Oe(Object(_.jsx)(ke,{}))}}),Object(_.jsx)(f.b,{path:"/news",render:function(){return Object(_.jsx)(S,{})}}),Object(_.jsx)(f.b,{path:"/films",render:function(){return Oe(Object(_.jsx)(we,{}))}}),Object(_.jsx)(f.b,{path:"/users",render:function(){return Oe(Object(_.jsx)(ye,{}))}}),Object(_.jsx)(f.b,{path:"/music",render:function(){return Object(_.jsx)(I,{})}}),Object(_.jsx)(f.b,{path:"/setting",render:function(){return Object(_.jsx)(T,{})}}),Object(_.jsx)(f.b,{path:"/login",render:function(){return Object(_.jsx)(se,{})}})]})]}):Object(_.jsx)(E.a,{className:"app-preloader"})}}]),a}(r.a.Component),Ne={initialization:function(){return function(e){var t=e(B());Promise.all([t]).then((function(){e({type:ie})}))}}},De=Object(b.c)(f.f,Object(m.b)((function(e){return{initialized:Object(oe.a)(e)}}),Ne))(Ce),Se=function(e){return Object(_.jsx)(p.a,{children:Object(_.jsx)(m.a,{store:ve,children:Object(_.jsx)(r.a.StrictMode,{children:Object(_.jsx)(De,{})})})})};i.a.render(Object(_.jsx)(Se,{}),document.getElementById("root")),c()},18:function(e,t,a){e.exports={aside:"Aside_aside__1vFU_",active:"Aside_active__3wDKK",fiendsList:"Aside_fiendsList__18k5U"}},26:function(e,t,a){e.exports={friendsContainer:"FriendsList_friendsContainer__16BPm",usersCount:"FriendsList_usersCount__38YRp",headerText:"FriendsList_headerText__2SJYw",avatar:"FriendsList_avatar__3Ubhh"}},29:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r})),a.d(t,"c",(function(){return s}));var n=function(e){return e.auth},r=function(e){return e.auth.isAuth},s=function(e){return e.auth.userId}},34:function(e,t,a){"use strict";var n=a.p+"static/media/preloader.d8c5556a.svg",r=(a(0),a(1));t.a=function(e){return Object(r.jsx)("img",{className:"preloader",src:n,alt:"Preloader"})}},39:function(e,t,a){e.exports={item:"FriendsItem_item__2E9W4",avatar:"FriendsItem_avatar__3y3i8",name:"FriendsItem_name__2B0ho"}},40:function(e,t,a){e.exports={header:"Header_header__39MtU",loginContainer:"Header_loginContainer__1IR-_",logout:"Header_logout__UyM55"}},44:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"c",(function(){return m})),a.d(t,"d",(function(){return h})),a.d(t,"f",(function(){return j})),a.d(t,"e",(function(){return x}));var n=a(4),r=a.n(n),s=a(9),i=a(20),c=a(2),o=a(10),u="profileReducer/ADD-POST",d="profileReducer/DELETE_POST",l="profileReducer/SET_PROFILE",f="profileReducer/SET_STATUS",p={postsData:[{id:1,text:"Hi, how are you?",likesCount:15,avatar:"https://i08.fotocdn.net/s123/1a152e8b84fe2ebe/user_l/2811351276.jpg"},{id:2,text:"it's my first post",likesCount:20,avatar:"https://pbs.twimg.com/media/Dz2w7QfX4AASPzL.jpg"},{id:3,text:"it's awesome",likesCount:2,avatar:"https://uprostim.com/wp-content/uploads/2021/03/image018-95.jpg"}],profile:null,status:"",nextId:3},b=function(e){return{type:u,postText:e}},m=function(e){return{type:d,postId:e}},g=function(e){return{type:f,status:e}},h=function(e){return function(){var t=Object(s.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getProfile(e);case 2:n=t.sent,a({type:l,profileInfo:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},j=function(e){return function(){var t=Object(s.a)(r.a.mark((function t(a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.updateProfileStatus(e);case 2:0===t.sent.data.resultCode&&a(g(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(s.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.setProfileStatus(e);case 2:n=t.sent,a(g(n.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var a=Object(c.a)(Object(c.a)({},e),{},{postsData:Object(i.a)(e.postsData),nextId:e.nextId+1}),n=t.postText;if(""===n||void 0===n||null===n)return e;var r={id:e.nextId+1,text:n,likesCount:0,avatar:"https://tikstar-user-images.oss-cn-hongkong.aliyuncs.com/4f9d_6636722113216577541.jpg"};return a.postsData.unshift(r),a;case d:return Object(c.a)(Object(c.a)({},e),{},{postsData:e.postsData.filter((function(e){return e.id!==t.postId}))});case l:return Object(c.a)(Object(c.a)({},e),{},{profile:t.profileInfo});case f:return Object(c.a)(Object(c.a)({},e),{},{status:t.status});default:return e}}},48:function(e,t,a){"use strict";a.d(t,"f",(function(){return n})),a.d(t,"d",(function(){return r})),a.d(t,"c",(function(){return s})),a.d(t,"b",(function(){return i})),a.d(t,"e",(function(){return c})),a.d(t,"a",(function(){return o}));var n=function(e){return e.usersPage.usersData},r=function(e){return e.usersPage.pageSize},s=function(e){return e.usersPage.pageNumber},i=function(e){return e.usersPage.pageCount},c=function(e){return e.usersPage.toggleIsFetching},o=function(e){return e.usersPage.followingInProgress}},58:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=function(e){return e.app.initialized}},59:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(20),r=a(2),s="dialogsReducer/ADD-MESSAGE",i={dialogsDate:[{id:1,name:"\u041b\u0438\u0433\u0430 \u0432\u044b\u0436\u0438\u0432\u0448\u0438\u0445 \u0434\u0438\u0441\u043d\u0435\u0435\u0432\u0441\u043a\u0438\u0445 \u043f\u0440\u0438\u043d\u0446\u0435\u0441\u0441",avatar:"https://natalyland.ru/wp-content/uploads/b/e/8/be86998f3a51862b04e6e9963e202f90.jpeg"},{id:2,name:"\u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440 \u0411\u0443\u0440\u043e\u0432",avatar:"https://pbs.twimg.com/profile_images/1260892940165165056/DbnIwfQn_400x400.jpg"},{id:3,name:"\u0420\u043e\u043c\u0430\u043d \u041c\u0430\u043a\u0430\u0440\u043e\u0432",avatar:"https://img.nickpic.host/3kthMb.md.jpg"},{id:4,name:"\u041c\u0430\u043a\u0441\u0438\u043c \u041f\u0430\u0432\u043b\u043e\u0432",avatar:"https://media.sketchfab.com/avatars/ef6824b2e26b4f0d935be8635003e864/f769a2a14bda4462b1d3689647b508ea.png"},{id:5,name:"\u041c\u0430\u0440\u0438\u044f \u0421\u0430\u0436\u0438\u043d\u0430",avatar:"https://i.pinimg.com/originals/8b/b1/e6/8bb1e6f277f5325cdf4bb7c24a7414c4.jpg"},{id:6,name:"\u0421\u043e\u0444\u0438 \u041a\u043e\u043b\u0447\u0438\u043d\u0430",avatar:"https://i01.fotocdn.net/s122/e7191cad2f5d6b50/user_l/2796060407.jpg"},{id:7,name:"\u041c\u0430\u0442\u043c\u043e\u0434\u0435\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0425\u0422\u0421",avatar:"https://pstu.ru/_images/enrollee/htf/htf.jpg"}],messagesData:[{id:1,text:"\u042d\u0442\u043e \u0431\u0443\u0434\u0435\u0442 \u0432 \u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435 31 \u043e\u043a\u0442\u044f\u0431\u0440\u044f \u0432 14:00",userName:"\u041c\u0430\u043a\u0441\u0438\u043c \u041f\u0430\u0432\u043b\u043e\u0432",messageDate:"17:43 16.2.2022",avatar:"https://media.sketchfab.com/avatars/ef6824b2e26b4f0d935be8635003e864/f769a2a14bda4462b1d3689647b508ea.png"},{id:2,text:"\u0443 \u043c\u0435\u043d\u044f \u0435\u0441\u0442\u044c QR",userName:"\u041c\u0430\u043a\u0441\u0438\u043c \u041f\u0430\u0432\u043b\u043e\u0432",messageDate:"17:43 16.2.2022",avatar:"https://media.sketchfab.com/avatars/ef6824b2e26b4f0d935be8635003e864/f769a2a14bda4462b1d3689647b508ea.png"},{id:3,text:"\u042f \u043d\u0430 \u0441\u0430\u043c\u043e\u043c \u0434\u0435\u043b\u0435 \u043f\u043e\u0434 \u0432\u043e\u043f\u0440\u043e\u0441\u043e\u043c, \u0442\u0430\u043a \u043a\u0430\u043a \u043c\u043e\u0433\u0443 \u0443\u0435\u0445\u0430\u0442\u044c \u0432 \u0441\u043e\u043b\u0438\u043a\u0430\u043c\u0441\u043a, \u043d\u043e \u0441\u043a\u043e\u0440\u0435\u0435 \u0432\u0441\u0435\u0433\u043e \u043d\u0435 \u0443\u0435\u0434\u0443",userName:"\u041c\u0430\u0440\u0438\u044f \u0421\u0430\u0436\u0438\u043d\u0430",messageDate:"17:45 16.2.2022",avatar:"https://i.pinimg.com/originals/8b/b1/e6/8bb1e6f277f5325cdf4bb7c24a7414c4.jpg"},{id:4,text:"\u043d\u0435 \u0437\u043d\u0430\u044e",userName:"\u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440 \u0411\u0443\u0440\u043e\u0432",messageDate:"17:51 16.2.2022",avatar:"https://pbs.twimg.com/profile_images/1260892940165165056/DbnIwfQn_400x400.jpg"},{id:5,text:"\u0423 \u043c\u0435\u043d\u044f, \u043d\u0430\u0432\u0435\u0440\u043d\u043e\u0435, \u043d\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0441\u044f.",userName:"\u0410\u043d\u0442\u043e\u043d \u0421\u044e\u0440\u0430\u0435\u0432",messageDate:"17:54 16.2.2022",avatar:"https://tikstar-user-images.oss-cn-hongkong.aliyuncs.com/4f9d_6636722113216577541.jpg"}],newMessageText:""},c=function(e){return{type:s,messageText:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;if(t.type===s){var a=Object(r.a)(Object(r.a)({},e),{},{messagesData:Object(n.a)(e.messagesData)}),c=t.messageText,o=new Date,u="".concat(o.getHours(),":").concat(o.getMinutes()," ").concat(o.getDate(),".").concat(o.getMonth()+1,".").concat(o.getFullYear());if(""===c||void 0===c||null===c)return e;var d={id:5,userName:"\u0410\u043d\u0442\u043e\u043d \u0421\u044e\u0440\u0430\u0435\u0432",messageDate:u,text:c,avatar:"https://tikstar-user-images.oss-cn-hongkong.aliyuncs.com/4f9d_6636722113216577541.jpg"};return a.messagesData.push(d),a.newMessageText="",a}return e}},60:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(20),r=a(2),s="filmReducer/ADD-FILM",i={filmsDate:[{id:38,name:"\u0422\u0432\u043e\u0451 \u0438\u043c\u044f",poster:"https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/7bf0a50d-ae10-4c3a-9406-c231cbc69691/1920x",rating:"9"},{id:37,name:"\u0422\u0440\u0435\u043d\u0435\u0440 \u041a\u0430\u0440\u0442\u0435\u0440",poster:"https://avatars.mds.yandex.net/get-kinopoisk-image/1898899/cffd108f-61ec-4acd-8520-aef0375a7d33/1920x",rating:"8"},{id:36,name:"\u041d\u0435 \u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u043d\u0430\u0432\u0435\u0440\u0445",poster:"https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/9c7a6c39-a9fc-4c15-a634-ada778f7b86c/1920x",rating:"9"},{id:35,name:"\u0421\u043b\u0430\u0432\u043d\u044b\u0435 \u043f\u0430\u0440\u043d\u0438",poster:"https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/9f1da2f6-a8e4-46f3-989c-29bca0a05454/1920x",rating:"7"},{id:34,name:"\u0414\u043e\u043d\u043d\u0438 \u0411\u0440\u0430\u0441\u043a\u043e",poster:"https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/ba350980-0135-431d-a938-46c55673ad2e/1920x",rating:"8"},{id:33,name:"\u0422\u0430\u043b\u0430\u043d\u0442\u043b\u0438\u0432\u044b\u0439 \u043c\u0438\u0441\u0442\u0435\u0440 \u0420\u0438\u043f\u043b\u0438",poster:"https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/f998586a-2677-449f-b04b-d4c1f66e8e03/1920x",rating:"7"},{id:32,name:"\u0421\u043e\u0432\u043e\u043a\u0443\u043f\u043d\u043e\u0441\u0442\u044c \u043b\u0436\u0438",poster:"https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/fe2619cc-da00-4e75-9caf-aa8e28a681d8/1920x",rating:"7"},{id:31,name:"\u0422\u0440\u043e\u0439\u043d\u0430\u044f \u0433\u0440\u0430\u043d\u0438\u0446\u0430",poster:"https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/cf3085e0-9eb7-4190-bd2d-b57c38468cd0/1920x",rating:"8"},{id:30,name:"\u041a\u043e\u0434 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u041a\u0435\u0439\u043f\u0442\u0430\u0443\u043d",poster:"https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/a4bf505a-3c02-4422-b301-1ebceb27672f/1920x",rating:"8"},{id:29,name:"\u041e\u0445\u043e\u0442\u043d\u0438\u043a\u0438 \u043d\u0430 \u0433\u0430\u043d\u0433\u0441\u0442\u0435\u0440\u043e\u0432",poster:"https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/3d3bd766-e8c7-4915-8ac0-9288db45e4cc/1920x",rating:"8"},{id:28,name:"\u041a\u0440\u043e\u0432\u0430\u0432\u044b\u0439 \u0430\u043b\u043c\u0430\u0437",poster:"https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/2c405904-13c7-4810-843e-faa79a600dad/1920x",rating:"9"},{id:27,name:"\u0412\u0435\u043d\u043e\u043c 2",poster:"https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/bcb31ec6-ac53-4aed-8bee-69247d271c4c/1920x",rating:"7"},{id:26,name:"\u0425\u0440\u0430\u043d\u0438\u0442\u0435\u043b\u0438",poster:"https://avatars.mds.yandex.net/get-kinopoisk-image/1898899/415260cf-0682-41cc-9be7-f58a7eacbd76/1920x",rating:"8"},{id:25,name:"\u0421\u043d\u0430\u0439\u043f\u0435\u0440",poster:"https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/0237e19e-26c2-409d-8651-f55ccc39d982/1920x",rating:"7"},{id:24,name:"\u0422\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043e\u0447\u043d\u044b\u0439 \u0434\u0435\u043d\u044c",poster:"https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/56a27b42-3a02-4c76-9645-ab8e562de091/1920x",rating:"8"},{id:23,name:"\u041a\u0440\u0451\u0441\u0442\u043d\u044b\u0439 \u043e\u0442\u0435\u0446 3",poster:"https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/10b25c61-5354-4f2f-8da9-1fa2780ecc30/1920x",rating:"9"},{id:22,name:"\u041a\u0440\u0451\u0441\u0442\u043d\u044b\u0439 \u043e\u0442\u0435\u0446 2",poster:"https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/33474b2a-d670-47c8-9cbe-51291847b6d4/1920x",rating:"9"},{id:21,name:"\u041a\u0440\u0451\u0441\u0442\u043d\u044b\u0439 \u043e\u0442\u0435\u0446",poster:"https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/c11652e8-653b-47c1-8e72-1552399a775b/1920x",rating:"9"},{id:20,name:"\u0417\u0430\u0432\u0442\u0440\u0430\u043a \u0443 \u0422\u0438\u0444\u0444\u0430\u043d\u0438",poster:"https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/9f744099-3e33-493c-86b2-bc8829f4264b/1920x",rating:"9"},{id:19,name:"\u041c\u043e\u0440\u043f\u0435\u0445\u0438",poster:"https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/31d4e0de-c0e4-4180-9fa7-9e18e38998e6/1920x",rating:"7"},{id:18,name:"\u0412\u0430\u043c \u043f\u0438\u0441\u044c\u043c\u043e",poster:"https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/7a6983b7-144f-4206-af24-145c2baf3bff/1920x",rating:"8"},{id:17,name:"\u0414\u043e\u0440\u043e\u0433\u0430 \u043f\u0435\u0440\u0435\u043c\u0435\u043d",poster:"https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/1eab91d6-e82d-4170-94b3-ca019f68a6ee/1920x",rating:"9"},{id:16,name:"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u0440\u044b\u0446\u0430\u0440\u044f",poster:"https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/dd301ea4-1871-48fe-83e8-1ef8829e86df/1920x",rating:"8"},{id:15,name:"\u0412\u0438\u043d\u043e\u0432\u043d\u044b\u0439",poster:"https://kinopoisk-ru.clstorage.net/15D2S2r30/33deda7SK/7htRvK7qLcqB7zW47Pf5ERgu4sxJy-F4M37R8H0rzARd-esRa2vgXRtB0HI4A64PJyDcztuXoxmIVhANctqFu98TXfXPlwGX_J5N3dWT0ERcSoO1OZLQWWpupb0IRrC4nVkjtKPzHP2b8FVrBTv3QmZ93Ir-__pt7BpNxNaawXp6CxEMfhagTpHbcKgw1ykRpG_2nH2W_Ug7c03ozQeoeEkFPxhLj-TdV2w1jw32S_ZKUbASRvv2kJjWHYQvjoUC1kf58MqGrL75X3w8ALPFtRxbTiBhonHsa-PRTOEbxIDt5YMYE4f4_RvoyfPp6hc6ki0ATpL37lQwksGIa7Ih6qoTscie5tBG_ft0zOxPUbGYS7qohdJJgJMHyUBVT2DY_eUvAAfnbEWf0MkTYXrX4mah9FpelyLctB7dIBPGYfJyb0HYOhog7tUvxDTMl32FuO-GJEGCRVyvDwE4UaMwzDVN5_QHgzRd3wTZ-zFqV2Ki8UAW4m_-DADqyQif0rXyRqMN5MJG3F6Nv_QYpOcVIYhz8ihJ3kVgt5exyIGrdCBFvffgixfEMVf0PRPJWste4pFwEsbnhqjg3ik8GwZh5uLrSfT6bsg-XTO4tNDn9aU0R7JUeb7F6Df3YTRVg7hc2c2PAL_fwO2rWMn7CUqLZvoR2Koi855UkBohZKeG0R6O7x0MjiqwKqlTZBxYQwUFvG_WMEm-aeBnO6lY0SfgBIWRk2j3cwjJkxDdqwmyw8pmCdSqWnMSKEDisXw3IhHmyl9x_JYCoKJ5w3DQ3Nfdabyf5mT5PuXMK3PpiOE3rOTFZffsU_uweS9IPasFDlf6jhn4ohqzglzQ6r1w9wKV1tbH-VB2tuTKcTMQSGxTjcGUC5KUQaY9KB_7dbhde_jUpTk3FAcDmJlTbOX7cdp3Cup5bEbmlxLkXGKl-L9OgYomf5kIuuIkxgE_2NCkF_mVtEceqH3eDcyHq6HM8T-gwC15G-w3ZxiNo-BRdwk6n65aeSh-fley4GQCeQh78r2S_lfpyPIGgHZVv6isMOsFUcxnHjjZNn1ULxcN5MG_-NBVibscV_dIYTcU2YcZMke6IlWERtqfYiAUFgFc6y4p8q5vEYw6bqSaCR_IQBwTeWHYH2rwtcYR4Ld3uXj1p2Ts5QWD-DcviOEDXN0X3arXDk5ZPOpaw2p8wJaNfIe6qW6---38wua4_vHb4MC81229XC_KxPmCjcy_a4F8SbP4cGXpxxADq5yJk0wpMzGOa2Z66QDeznPmHGTCTZSLhsly7lNlRMIq8M6h73Qo3H_lxQhXkixptpX85x8tCN0HLAwp5X_sOxs8_dcQoVcxTlfO_uFoel7HhiRIAgEQ75Il9u6jRbSCAjBiveuoXAQX9VEUj45QEbqBcI8LxZxFq6gERcmzgJ9bjME7NNmjhepDtk6VuOJad3qclOrVlMOSoda-C3FAhsbk1t3nEDAgI3HVRNsSSJm-WfAHf7kEZfNAzCERz4hTX3QdI9x5L3FyC76OXcQK8svy0NwKxZSzgklWLp81MLaW1N71e_BIDLOVCcjnDuAVQvGgC_u1fJmDlEz12bNkQw9IRTv4cWv5VgeyYvUwolrTHujoXh2wPxbJnsYf-czODsB6jd_YmASrbZlEd96owTadsBNPIdRFM0TIteXPVHN7zElbcNlf3X6TXlLdaB4aY5KI-IqFcMMGoV56X_XIOh6k6pU3HATUq3G9VF_KZDVejcwjh_20eYvUfCVJ__hvw2Rxy-zZC4nuY6ZGAfR6Uh-uIJROFYiX_iG6YtNJYLqGfNqZp6DEAE8hidiHOviJSr1Yt3sNUI0r6HTRPWt8z9vMhSvk3fcVSneKCoEojkpTphTkDhFsr7YFYnrPBWhCRqBaHUugyAz_eQXkf860ZdJxpPPrKWgJt0B0iYkDsAfr5HEv0HlnfT4bMvqJRMbiO2LcmMKFfH9OSer6383cHubszgnLcLzoq3WNzG9uFG02PaRn441UZfPoYAlllwhHe9wJW3hJ84HScz7SXSBWGr-KFOgeHRhPMjGGeiNJ1DICdCKVM9BUyDt9zZT_stC5-oXolxvB_A0rxFSthXusA8fsQSfIqS_lyofKEgFoiuJ7pphYOpVcuzJdujJvbagublzmvatQhEj7TQ0IkxowVRbJvOufXcgZUzRs7bWfcAt7WOUv0C33TXbHenpd9KJy86bMBP5ZWJOSmf5WW2XQuqpkyv0rzByMt9FFZP-CoJme6XQDY0nYfa_IBMEd_zRvQ_hNl8jlD5lSmzp-XYBOcvvyXAAODfznImEa2teJ6IrqXK6dPyiErF9NUTwf-kSRMnXUn3fJcP2LrFwtwaP8O9_oBTtQ8RcZQo--zpWABh7fHuw0-hUYG04hBsJfdXj6CvS24U8cBCBXEcnYj74wkR6FMOsXqcABR7iMLbWLLB__8H0DyFlzEabTPmb9sNoqA_LE_HLxMDsq4SYqFxms_mboEtUvWAyo-4lVaIu-RDmKQXT7GyW0fZ-YDGW9j-Sb14B9F0xhY3XOE672ASQO0keCGESaiZwL0iEqflNtKAYySFaFM1yQNOultRQHQmxJ-nVoIwupcJlDECx9GQfwVwNAZZfkiXdtJgfeAi2w8vpf3lQw6lW0N6pdnu4f6dRqlvxSpTsYkKj7TaUIUx60uQ4JxJePsYwZh_h0KdGjLM9rmEET4EHnEXYTBsZR8FbqHzogXE7xrAu-7ZbCS_X0tjrQYjG3JMiwv-VRvI_6NAWqRcQ382GMOZuQwGVNB6zLn5z1G9zde0Ved9py3bBG9s_SmATmXWQ_CrmW2tf5xPoCqP6N62yEUD9ZEagXCsgRjpU0dzNdvE1D6FzB8ZeUe8vYQS90VfPNNmM-8lE4qsoLamTcOqHgzx6RhuarRfSOaohOFTfowIAj6Q0QG-5g5boRqDsLWUj912BAdWk7hNP7QH1DTLFzZTov2oYdfHZij4L87MK8#DSD",rating:"7"},{id:14,name:"\u0414\u0432\u0430\u0434\u0446\u0430\u0442\u044c \u043e\u0434\u043d\u043e",poster:"https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/d399b9bf-a61c-405b-a48d-51867da1be2e/1920x",rating:"7"},{id:13,name:"#\u0436\u0438\u0432\u043e\u0439",poster:"https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/28eb3cec-b7b9-4ab0-8ce3-bbdbdeb0fdfc/1920x",rating:"7"},{id:12,name:"\u041d\u0435 \u043f\u043e\u0439\u043c\u0430\u043d \u2014 \u043d\u0435 \u0432\u043e\u0440",poster:"https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/b6600325-7666-4da8-8a8d-7db4c55ae1cd/1920x",rating:"8"},{id:11,name:"\u041a\u0440\u0430\u0441\u043d\u043e\u0435 \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0435",poster:"https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/0c0262f1-ce51-446d-9cd8-5468e9e8b833/1920x",rating:"5"},{id:10,name:"\u041d\u0435\u0432\u0435\u0440\u043e\u044f\u0442\u043d\u0430\u044f \u0438\u0441\u0442\u043e\u0440\u0438\u044f \u041e\u0441\u0442\u0440\u043e\u0432\u0430 \u0440\u043e\u0437",poster:"https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/da8f24b6-4dbd-4ab0-89ec-28a9143fac48/1920x",rating:"9"},{id:9,name:"\u041e\u043f\u0435\u0440\u0430\u0446\u0438\u044f \u0444\u0438\u043d\u0430\u043b",poster:"https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/78560127-754c-49d1-82f6-43efcbb223fb/1920x",rating:"9"},{id:8,name:"\u0422\u0435\u043c \u0431\u043e\u043b\u044c\u043d\u0435\u0435 \u043f\u0430\u0434\u0430\u0442\u044c",poster:"https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/e1aad75d-0a8a-4639-9f9d-1d1569003b4f/1920x",rating:"6"},{id:7,name:"\u041c\u0435\u043c\u0443\u0430\u0440\u044b \u0433\u0435\u0439\u0448\u0438",poster:"https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/27ef781a-b05e-4e34-8af6-d04df47f3b93/1920x",rating:"9"},{id:6,name:"\u0410\u0440\u043c\u0438\u044f \u0432\u043e\u0440\u043e\u0432",poster:"https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/34066019-9905-4227-a5ac-e630253effe6/1920x",rating:8},{id:5,name:"\u0412 \u043f\u043e\u0433\u043e\u043d\u0435 \u0437\u0430 \u0411\u043e\u043d\u043d\u0438 \u0438 \u041a\u043b\u0430\u0439\u0434\u043e\u043c",poster:"https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/3a7b26f0-5c6e-4227-932b-46aeeb1bc674/1920x",rating:8},{id:4,name:"\u0410\u0440\u043c\u0438\u044f \u043c\u0435\u0440\u0442\u0432\u0435\u0446\u043e\u0432",poster:"https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/931b0013-5186-4bf4-825f-3418752a65c2/1920x",rating:"6"},{id:3,name:"\u041f\u0442\u0438\u0447\u0438\u0439 \u043a\u043e\u0440\u043e\u0431",poster:"https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/65f50025-a1ee-46da-a607-0a9162281403/1920x",rating:"8"},{id:2,name:"\u041a\u0440\u043e\u0432\u0430\u0432\u043e-\u043a\u0440\u0430\u0441\u043d\u043e\u0435 \u043d\u0435\u0431\u043e",poster:"https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/582e09e7-51ac-4806-8bff-b4d410be46e9/1920x",rating:"5"},{id:1,name:"47 \u0440\u043e\u043d\u0438\u043d\u043e\u0432",poster:"https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/5bc68f1c-768f-4fa2-b5ae-80f3769cbdab/1920x",rating:"8"}],newFilmDate:{name:"",poster:"",rating:""}},c=function(e,t,a){return{type:s,name:e,poster:t,rating:a}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;if(t.type===s){var a=Object(r.a)(Object(r.a)({},e),{},{filmsDate:Object(n.a)(e.filmsDate)});if(""===t.name||void 0===t.name||null===t.name)return e;if("http"!==t.poster.slice(0,4))return e;if(""===t.poster||void 0===t.poster||null===t.poster)return e;if(""===t.rating||void 0===t.rating||null===t.rating)return e;var c={id:5,name:t.name,poster:t.poster,rating:t.rating};return a.filmsDate.unshift(c),a.newFilmDate={id:5,name:"",poster:"",rating:""},a}return e}},61:function(e,t,a){"use strict";a.d(t,"b",(function(){return v})),a.d(t,"c",(function(){return O})),a.d(t,"d",(function(){return _}));var n=a(4),r=a.n(n),s=a(9),i=a(20),c=a(2),o=a(10),u="usersReducer/FOLLOW",d="usersReducer/UNFOLLOW",l="usersReducer/SET_USERS",f="usersReducer/SET_PRELOADER",p="usersReducer/SET_TOTAL_USERS_COUNT",b="usersReducer/FOLLOWING_IN_PROGRESS",m={usersData:[],pageSize:12,pageNumber:1,pageCount:null,toggleIsFetching:!0,followingInProgress:[]},g=function(e){return{type:u,id:e}},h=function(e){return{type:d,id:e}},j=function(e){return{type:f,preloaderState:e}},x=function(e,t){return{type:b,isFetching:e,userId:t}},v=function(e,t){return function(){var a=Object(s.a)(r.a.mark((function a(n){var s;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(j(!0)),a.next=3,o.c.getUsers(e,t);case 3:s=a.sent,n(j(!1)),n((i=s.items,{type:l,usersList:i,pageNumber:e})),n((r=s.totalCount,{type:p,counter:r}));case 7:case"end":return a.stop()}var r,i}),a)})));return function(e){return a.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(s.a)(r.a.mark((function t(a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(x(!0,e)),t.next=3,o.c.follow(e);case 3:a(x(!1,e)),a(g(e));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(s.a)(r.a.mark((function t(a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(x(!0,e)),t.next=3,o.c.unfollow(e);case 3:a(x(!1,e)),a(h(e));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(c.a)(Object(c.a)({},e),{},{usersData:e.usersData.map((function(e){return e.id===t.id?Object(c.a)(Object(c.a)({},e),{},{followed:!0}):e}))});case d:return Object(c.a)(Object(c.a)({},e),{},{usersData:e.usersData.map((function(e){return e.id===t.id?Object(c.a)(Object(c.a)({},e),{},{followed:!1}):e}))});case l:return Object(c.a)(Object(c.a)({},e),{},{usersData:Object(i.a)(t.usersList),pageNumber:t.pageNumber});case f:return Object(c.a)(Object(c.a)({},e),{},{toggleIsFetching:t.preloaderState});case p:return Object(c.a)(Object(c.a)({},e),{},{pageCount:t.counter});case b:return Object(c.a)(Object(c.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(i.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}}},65:function(e,t,a){e.exports={login:"Login_login___lOSD"}},7:function(e,t,a){e.exports={loginContainer:"LoginContainer_loginContainer__3cYs5",formArea:"LoginContainer_formArea__3mNaH",inputContainer:"LoginContainer_inputContainer__3Dsor",text:"LoginContainer_text__1TtOd",error:"LoginContainer_error__3eoar",apiErrors:"LoginContainer_apiErrors__wHoPK",buttonContainer:"LoginContainer_buttonContainer__2jXJo",normal:"LoginContainer_normal__EMec0",helpInfo:"LoginContainer_helpInfo__1eKD0",userData:"LoginContainer_userData__1_1A5"}},73:function(e,t,a){},78:function(e,t,a){}},[[100,1,2]]]);
//# sourceMappingURL=main.6349f9ba.chunk.js.map
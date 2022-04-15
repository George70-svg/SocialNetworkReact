(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{107:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(41),s=a.n(i),c=(a(80),function(e){e&&e instanceof Function&&a.e(8).then(a.bind(null,130)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),i(e),s(e)}))}),o=a(34),u=a(35),d=a(36),l=a(37),p=a(5),f=a(17),b=a(18),m=a(12),h=(a(83),a(23)),g=a.n(h),j=a(33),x=a.n(j),v=a(46),O=a.n(v),_=a(1),k=function(e){return Object(_.jsxs)("div",{className:O.a.item,children:[Object(_.jsx)("img",{className:O.a.avatar,src:e.avatar,alt:"avatar"}),Object(_.jsx)("p",{className:O.a.name,children:e.name})]})},w=a(55),y=Object(m.b)((function(e){return{totalUsersCount:Object(w.b)(e)}}),{})((function(e){var t=e.friendsList.map((function(e,t){return Object(_.jsx)(k,{avatar:e.avatar,name:e.name},t)}));return Object(_.jsxs)("div",{className:x.a.friendsContainer,children:[Object(_.jsx)("h2",{className:x.a.headerText,children:"Friends"}),Object(_.jsxs)("p",{className:x.a.usersCount,children:["Users: ",e.totalUsersCount]}),Object(_.jsx)("div",{className:x.a.avatar,children:t})]})})),C=function(e){return Object(_.jsxs)("aside",{className:g.a.aside,children:[Object(_.jsx)(f.b,{to:"/profile",activeClassName:g.a.active,children:Object(_.jsx)("div",{children:"Profile"})}),Object(_.jsx)(f.b,{to:"/dialogs",activeClassName:g.a.active,children:Object(_.jsx)("div",{children:"Messages"})}),Object(_.jsx)(f.b,{to:"/films",activeClassName:g.a.active,children:Object(_.jsx)("div",{children:"Films"})}),Object(_.jsx)(f.b,{to:"/users",activeClassName:g.a.active,children:Object(_.jsx)("div",{children:"Users"})}),Object(_.jsx)(f.b,{to:"/setting",activeClassName:g.a.active,children:Object(_.jsx)("div",{children:"Setting"})}),Object(_.jsx)("div",{className:g.a.fiendsList,children:Object(_.jsx)(y,{friendsList:e.friendsList})})]})},N=function(e){return e.friends.friendsList},R=Object(m.b)((function(e){return{friendsList:N(e)}}))(C),D=a(38),S=a(2),T=a(47),E=a.n(T),L=a(8),I=a(3),A=a.n(I),F=a(9),U="authReducer/SET_USER_LOGIN",P="authReducer/SET_CAPTCHA_URL_SUCCESS",M={userId:null,login:null,email:null,isAuth:null,captchaUrl:null},z=function(e,t,a,n){return{type:U,data:{userId:e,login:t,email:a,isAuth:n}}},B=function(e){return function(){var e=Object(L.a)(A.a.mark((function e(t){var a,n,r,i,s;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.authMe();case 2:0===(a=e.sent).resultCode&&(n=a.data,r=n.id,i=n.login,s=n.email,n.captcha,t(z(r,i,s,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},X=function(){return function(){var e=Object(L.a)(A.a.mark((function e(t){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.logout();case 2:0===e.sent.data.resultCode&&t(z(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Y=function(){return function(){var e=Object(L.a)(A.a.mark((function e(t){var a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.c.getCaptchaURL();case 2:a=e.sent,t((n=a.url,{type:P,captchaURL:n}));case 4:case"end":return e.stop()}var n}),e)})));return function(t){return e.apply(this,arguments)}}()},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U:return Object(S.a)(Object(S.a)({},e),t.data);case P:return Object(S.a)(Object(S.a)({},e),{},{captchaUrl:t.captchaURL});default:return e}},J={logout:X},Q=Object(m.b)(null,J)((function(e){return Object(_.jsxs)("header",{className:E.a.header,children:[Object(_.jsx)("h1",{children:"IAKE social network"}),Object(_.jsx)("div",{className:E.a.loginContainer,children:e.data.isAuth?Object(_.jsxs)("div",{className:E.a.logout,children:[Object(_.jsx)("p",{children:e.data.login}),Object(_.jsx)("button",{onClick:e.logout,children:"logout"})]}):Object(_.jsx)(f.b,{to:"/login",children:"Login"})})]})})),G=a(29),q=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(_.jsx)(Q,Object(S.a)({},this.props))}}]),a}(r.a.Component),W=Object(m.b)((function(e){return{data:Object(G.b)(e)}}))(q),Z=a(53),V=a(72),K=a.n(V),$=a(6),ee=a.n($),te=a(52),ae=function(e){var t,a=Object(te.a)({initialValues:{email:"",password:"",checkbox:!0,captcha:""},onSubmit:function(t,a){var n={email:t.email,password:t.password,rememberMe:t.checkbox,captcha:t.captcha};e.onSubmit(n,a.setStatus),a.resetForm()},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.password||(t.password="Required"),t}});return a.status&&(t=a.status.error.map((function(e,t){return Object(_.jsx)("p",{children:e},t)}))),Object(_.jsxs)("div",{className:ee.a.loginContainer,children:[Object(_.jsxs)("form",{onSubmit:a.handleSubmit,className:ee.a.formArea,children:[Object(_.jsxs)("div",{className:ee.a.inputContainer,children:[Object(_.jsx)("label",{htmlFor:"email",children:"Login"}),Object(_.jsx)("br",{}),Object(_.jsx)("input",{type:"email",id:"email",name:"email",onChange:a.handleChange,onBlur:a.handleBlur,value:a.values.email,className:a.errors.email&&a.touched.email?ee.a.text+" "+ee.a.error:ee.a.text,placeholder:a.errors.email&&a.touched.email?a.errors.email:null})]}),Object(_.jsxs)("div",{className:ee.a.inputContainer,children:[Object(_.jsx)("label",{htmlFor:"password",children:"Password"}),Object(_.jsx)("br",{}),Object(_.jsx)("input",{type:"password",id:"password",name:"password",onChange:a.handleChange,onBlur:a.handleBlur,value:a.values.password,className:a.errors.password&&a.touched.password?ee.a.text+" "+ee.a.error:ee.a.text,placeholder:a.errors.password&&a.touched.password?a.errors.password:null})]}),Object(_.jsx)("div",{className:ee.a.apiErrors,children:t||null}),Object(_.jsxs)("div",{className:ee.a.inputContainer,children:[Object(_.jsx)("label",{htmlFor:"checkbox",children:"Remember me"}),Object(_.jsx)("input",{type:"checkbox",id:"checkbox",name:"checkbox",onChange:a.handleChange,onBlur:a.handleBlur,value:a.values.checkbox})]}),e.captchaURL&&Object(_.jsxs)("div",{className:ee.a.inputContainer,children:[Object(_.jsx)("label",{htmlFor:"captcha",children:"Captcha"}),Object(_.jsx)("br",{}),Object(_.jsx)("input",{type:"text",id:"captcha",name:"captcha",onChange:a.handleChange,onBlur:a.handleBlur,value:a.values.captcha,className:ee.a.text})]}),e.captchaURL&&Object(_.jsx)("img",{src:e.captchaURL,alt:"captcha"}),Object(_.jsx)("div",{className:ee.a.buttonContainer,children:e.isAuth?Object(_.jsx)("button",{type:"submit",className:ee.a.normal,children:"logout"}):Object(_.jsx)("button",{type:"submit",className:ee.a.normal,children:"login"})})]}),Object(_.jsxs)("div",{className:ee.a.helpInfo,children:[Object(_.jsx)("p",{children:"To use the social network in test mode without registration, use:"}),Object(_.jsxs)("p",{className:ee.a.userData,children:["login: ",Object(_.jsx)("span",{children:"free@samuraijs.com"})]}),Object(_.jsxs)("p",{className:ee.a.userData,children:["password: ",Object(_.jsx)("span",{children:"free"})]}),Object(_.jsxs)("p",{children:["To register on the social network, you need to register on the ",Object(_.jsx)("a",{href:"https://social-network.samuraijs.com/signUp",children:"API site"})]})]})]})},ne={login:function(e,t){return function(){var a=Object(L.a)(A.a.mark((function a(n){var r;return A.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,F.a.login(e);case 2:0===(r=a.sent).data.resultCode?n(B()):10===r.data.resultCode?n(Y()):t({error:r.data.messages});case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},logout:X},re=Object(b.c)(Object(m.b)((function(e){return{isAuth:Object(G.a)(e),captchaUrl:Object(G.d)(e)}}),ne))((function(e){var t=Object(n.useState)(e.isAuth),a=Object(Z.a)(t,2),r=a[0],i=a[1];if(Object(n.useEffect)((function(){i(e.isAuth)}),[e.isAuth]),r)return Object(_.jsx)(p.a,{to:"/profile"});return Object(_.jsxs)("div",{className:K.a.login,children:[Object(_.jsx)("h2",{children:"Login"}),Object(_.jsx)(ae,{onSubmit:function(t,a){e.isAuth?e.logout():e.isAuth||e.login(t,a)},isAuth:r,captchaURL:e.captchaUrl})]})})),ie="appReducer/INITIALIZATION_SUCCESS",se={initialized:!1},ce=a(65),oe=a(75),ue=a(31),de=a(25),le=a(26),pe=a(27),fe=a(32),be=a.p+"static/media/1636441921_10-papik-pro-p-milie-risunki-cheloveka-10.69d6a022.jpg",me="friendsReducer/SET_TOTAL_USERS_COUNT",he={totalUsersCount:null,friendsList:[{id:"1",avatar:be,name:"\u042f\u043d\u0430"},{id:"3",avatar:fe.a,name:"\u0412\u043e\u0432\u0430"},{id:"4",avatar:de.a,name:"\u0420\u043e\u043c\u0430\u043d"},{id:"5",avatar:ue.a,name:"\u041c\u0430\u0440\u0438\u044f"},{id:"6",avatar:le.a,name:"\u0421\u043e\u0444\u0438"},{id:"7",avatar:pe.a,name:"\u041c\u0430\u043a\u0441\u0438\u043c"}]},ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;return t.type===me?Object(S.a)(Object(S.a)({},e),{},{totalUsersCount:t.totalCount}):e},je=a(68),xe=a(66),ve=a(51),Oe=a(67),_e=Object(b.b)({profilePage:ve.b,dialogsPage:je.b,filmPage:xe.b,usersPage:Oe.a,friends:ge,auth:H,app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;return t.type===ie?Object(S.a)(Object(S.a)({},e),{},{initialized:!0}):e}}),ke=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||b.c,we=Object(b.d)(_e,ke(Object(b.a)(oe.a)));window.__store__=we;var ye=we,Ce=function(e){return Object(_.jsx)(r.a.Suspense,{fallback:Object(_.jsx)(D.a,{}),children:e})},Ne=r.a.lazy((function(){return a.e(4).then(a.bind(null,132))})),Re=r.a.lazy((function(){return a.e(3).then(a.bind(null,131))})),De=r.a.lazy((function(){return a.e(5).then(a.bind(null,133))})),Se=r.a.lazy((function(){return a.e(7).then(a.bind(null,134))})),Te=r.a.lazy((function(){return a.e(6).then(a.bind(null,135))})),Ee=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.props.initialization(),window.addEventListener("unhandledrejection",this.catchAllErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllErrors)}},{key:"render",value:function(){return this.props.initialized?Object(_.jsxs)("div",{className:"app-wrapper",children:[Object(_.jsx)(W,{}),Object(_.jsx)(R,{}),Object(_.jsx)("div",{className:"main",children:Object(_.jsxs)(p.d,{children:[Object(_.jsx)(p.b,{exact:!0,path:"/",render:function(){return Object(_.jsx)(p.a,{to:"/profile"})}}),Object(_.jsx)(p.b,{path:"/dialogs",render:function(){return Ce(Object(_.jsx)(Ne,{}))}}),Object(_.jsx)(p.b,{path:"/profile/:userId?",render:function(){return Ce(Object(_.jsx)(Re,{}))}}),Object(_.jsx)(p.b,{path:"/films",render:function(){return Ce(Object(_.jsx)(De,{}))}}),Object(_.jsx)(p.b,{path:"/users",render:function(){return Ce(Object(_.jsx)(Se,{}))}}),Object(_.jsx)(p.b,{path:"/setting",render:function(){return Ce(Object(_.jsx)(Te,{}))}}),Object(_.jsx)(p.b,{path:"/login",render:function(){return Object(_.jsx)(re,{})}}),Object(_.jsx)(p.b,{path:"*",render:function(){return Object(_.jsx)("div",{children:"404 NOT FOUND"})}})]})})]}):Object(_.jsx)(D.a,{className:"app-preloader"})}}]),a}(r.a.Component),Le={initialization:function(){return function(e){var t=e(B());Promise.all([t]).then((function(){e({type:ie})}))}}},Ie=Object(b.c)(p.g,Object(m.b)((function(e){return{initialized:Object(ce.a)(e)}}),Le))(Ee),Ae=function(e){return Object(_.jsx)(f.a,{children:Object(_.jsx)(m.a,{store:ye,children:Object(_.jsx)(r.a.StrictMode,{children:Object(_.jsx)(Ie,{})})})})};s.a.render(Object(_.jsx)(Ae,{}),document.getElementById("root")),c()},23:function(e,t,a){e.exports={aside:"Aside_aside__1vFU_",active:"Aside_active__3wDKK",fiendsList:"Aside_fiendsList__18k5U"}},25:function(e,t,a){"use strict";t.a=a.p+"static/media/3kthMb.md.def98df1.jpg"},26:function(e,t,a){"use strict";t.a=a.p+"static/media/2796060407.30d9e5c8.jpg"},27:function(e,t,a){"use strict";t.a=a.p+"static/media/f769a2a14bda4462b1d3689647b508ea.1eb49681.png"},28:function(e,t,a){"use strict";t.a=a.p+"static/media/4f9d_6636722113216577541.af5e5acf.jpg"},29:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r})),a.d(t,"c",(function(){return i})),a.d(t,"d",(function(){return s}));var n=function(e){return e.auth},r=function(e){return e.auth.isAuth},i=function(e){return e.auth.userId},s=function(e){return e.auth.captchaUrl}},31:function(e,t,a){"use strict";t.a=a.p+"static/media/8bb1e6f277f5325cdf4bb7c24a7414c4.01812254.jpg"},32:function(e,t,a){"use strict";t.a=a.p+"static/media/unnamed.ca9805e1.jpg"},33:function(e,t,a){e.exports={friendsContainer:"FriendsList_friendsContainer__16BPm",usersCount:"FriendsList_usersCount__38YRp",headerText:"FriendsList_headerText__2SJYw",avatar:"FriendsList_avatar__3Ubhh"}},38:function(e,t,a){"use strict";var n=a.p+"static/media/preloader.d8c5556a.svg",r=(a(0),a(1));t.a=function(e){return Object(r.jsx)("img",{className:"preloader",src:n,alt:"Preloader"})}},46:function(e,t,a){e.exports={item:"FriendsItem_item__2E9W4",avatar:"FriendsItem_avatar__3y3i8",name:"FriendsItem_name__2B0ho"}},47:function(e,t,a){e.exports={header:"Header_header__39MtU",loginContainer:"Header_loginContainer__1IR-_",logout:"Header_logout__UyM55"}},51:function(e,t,a){"use strict";a.d(t,"a",(function(){return j})),a.d(t,"c",(function(){return x})),a.d(t,"d",(function(){return O})),a.d(t,"h",(function(){return _})),a.d(t,"g",(function(){return k})),a.d(t,"e",(function(){return w})),a.d(t,"f",(function(){return y}));var n=a(8),r=a(19),i=a(2),s=a(3),c=a.n(s),o=a(9),u=a(28),d=a(25),l=a(26),p="profileReducer/ADD-POST",f="profileReducer/DELETE_POST",b="profileReducer/SET_PROFILE",m="profileReducer/SET_STATUS",h="profileReducer/SET_AVATAR",g={postsData:[{id:1,text:"Hi, how are you?",likesCount:15,avatar:u.a},{id:2,text:"it's my first post",likesCount:20,avatar:d.a},{id:3,text:"it's awesome",likesCount:2,avatar:l.a}],profile:null,status:"",nextId:3,commonAvatar:u.a},j=function(e){return{type:p,postText:e}},x=function(e){return{type:f,postId:e}},v=function(e){return{type:m,status:e}},O=function(e){return function(){var t=Object(n.a)(c.a.mark((function t(a){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getProfile(e);case 2:n=t.sent,a({type:b,profileInfo:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(n.a)(c.a.mark((function t(a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.updateProfileStatus(e);case 2:0===t.sent.data.resultCode&&a(v(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},k=function(e){return function(){var t=Object(n.a)(c.a.mark((function t(a){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.setProfileStatus(e);case 2:n=t.sent,a(v(n.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(n.a)(c.a.mark((function t(a){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.setAvatar(e);case 2:0===(n=t.sent).data.resultCode&&a((r=n.data.data.photos,{type:h,img:r}));case 4:case"end":return t.stop()}var r}),t)})));return function(e){return t.apply(this,arguments)}}()},y=function(e){return function(){var t=Object(n.a)(c.a.mark((function t(a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.setProfileInfo(e);case 2:t.sent;case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:var a=Object(i.a)(Object(i.a)({},e),{},{postsData:Object(r.a)(e.postsData),nextId:e.nextId+1}),n=t.postText;if(""===n||void 0===n||null===n)return e;var s={id:e.nextId+1,text:n,likesCount:0,avatar:e.commonAvatar};return a.postsData.unshift(s),a;case f:return Object(i.a)(Object(i.a)({},e),{},{postsData:e.postsData.filter((function(e){return e.id!==t.postId}))});case b:return Object(i.a)(Object(i.a)({},e),{},{profile:t.profileInfo});case m:return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case h:return Object(i.a)(Object(i.a)({},e),{},{profile:Object(i.a)(Object(i.a)({},e.profile),{},{photos:t.img})});default:return e}}},55:function(e,t,a){"use strict";a.d(t,"f",(function(){return n})),a.d(t,"d",(function(){return r})),a.d(t,"c",(function(){return i})),a.d(t,"b",(function(){return s})),a.d(t,"e",(function(){return c})),a.d(t,"a",(function(){return o}));var n=function(e){return e.usersPage.usersData},r=function(e){return e.usersPage.pageSize},i=function(e){return e.usersPage.pageNumber},s=function(e){return e.usersPage.pageCount},c=function(e){return e.usersPage.toggleIsFetching},o=function(e){return e.usersPage.followingInProgress}},6:function(e,t,a){e.exports={loginContainer:"LoginForm_loginContainer__3fNL6",formArea:"LoginForm_formArea__ihmWr",inputContainer:"LoginForm_inputContainer__160ub",text:"LoginForm_text__1m766",error:"LoginForm_error__jK7Y8",apiErrors:"LoginForm_apiErrors__HrDJ4",buttonContainer:"LoginForm_buttonContainer__pA5Rc",normal:"LoginForm_normal__10k8b",helpInfo:"LoginForm_helpInfo__3Gfmy",userData:"LoginForm_userData__1r2--"}},65:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=function(e){return e.app.initialized}},66:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(19),r=a(2),i="filmReducer/ADD-FILM",s={filmsDate:[{id:38,name:"\u0422\u0432\u043e\u0451 \u0438\u043c\u044f",poster:"https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/7bf0a50d-ae10-4c3a-9406-c231cbc69691/1920x",rating:"9"},{id:37,name:"\u0422\u0440\u0435\u043d\u0435\u0440 \u041a\u0430\u0440\u0442\u0435\u0440",poster:"https://avatars.mds.yandex.net/get-kinopoisk-image/1898899/cffd108f-61ec-4acd-8520-aef0375a7d33/1920x",rating:"8"},{id:36,name:"\u041d\u0435 \u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u043d\u0430\u0432\u0435\u0440\u0445",poster:"https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/9c7a6c39-a9fc-4c15-a634-ada778f7b86c/1920x",rating:"9"},{id:35,name:"\u0421\u043b\u0430\u0432\u043d\u044b\u0435 \u043f\u0430\u0440\u043d\u0438",poster:"https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/9f1da2f6-a8e4-46f3-989c-29bca0a05454/1920x",rating:"7"},{id:34,name:"\u0414\u043e\u043d\u043d\u0438 \u0411\u0440\u0430\u0441\u043a\u043e",poster:"https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/ba350980-0135-431d-a938-46c55673ad2e/1920x",rating:"8"},{id:33,name:"\u0422\u0430\u043b\u0430\u043d\u0442\u043b\u0438\u0432\u044b\u0439 \u043c\u0438\u0441\u0442\u0435\u0440 \u0420\u0438\u043f\u043b\u0438",poster:"https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/f998586a-2677-449f-b04b-d4c1f66e8e03/1920x",rating:"7"},{id:32,name:"\u0421\u043e\u0432\u043e\u043a\u0443\u043f\u043d\u043e\u0441\u0442\u044c \u043b\u0436\u0438",poster:"https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/fe2619cc-da00-4e75-9caf-aa8e28a681d8/1920x",rating:"7"},{id:31,name:"\u0422\u0440\u043e\u0439\u043d\u0430\u044f \u0433\u0440\u0430\u043d\u0438\u0446\u0430",poster:"https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/cf3085e0-9eb7-4190-bd2d-b57c38468cd0/1920x",rating:"8"},{id:30,name:"\u041a\u043e\u0434 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u041a\u0435\u0439\u043f\u0442\u0430\u0443\u043d",poster:"https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/a4bf505a-3c02-4422-b301-1ebceb27672f/1920x",rating:"8"},{id:29,name:"\u041e\u0445\u043e\u0442\u043d\u0438\u043a\u0438 \u043d\u0430 \u0433\u0430\u043d\u0433\u0441\u0442\u0435\u0440\u043e\u0432",poster:"https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/3d3bd766-e8c7-4915-8ac0-9288db45e4cc/1920x",rating:"8"},{id:28,name:"\u041a\u0440\u043e\u0432\u0430\u0432\u044b\u0439 \u0430\u043b\u043c\u0430\u0437",poster:"https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/2c405904-13c7-4810-843e-faa79a600dad/1920x",rating:"9"},{id:27,name:"\u0412\u0435\u043d\u043e\u043c 2",poster:"https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/bcb31ec6-ac53-4aed-8bee-69247d271c4c/1920x",rating:"7"},{id:26,name:"\u0425\u0440\u0430\u043d\u0438\u0442\u0435\u043b\u0438",poster:"https://avatars.mds.yandex.net/get-kinopoisk-image/1898899/415260cf-0682-41cc-9be7-f58a7eacbd76/1920x",rating:"8"},{id:25,name:"\u0421\u043d\u0430\u0439\u043f\u0435\u0440",poster:"https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/0237e19e-26c2-409d-8651-f55ccc39d982/1920x",rating:"7"},{id:24,name:"\u0422\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043e\u0447\u043d\u044b\u0439 \u0434\u0435\u043d\u044c",poster:"https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/56a27b42-3a02-4c76-9645-ab8e562de091/1920x",rating:"8"},{id:23,name:"\u041a\u0440\u0451\u0441\u0442\u043d\u044b\u0439 \u043e\u0442\u0435\u0446 3",poster:"https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/10b25c61-5354-4f2f-8da9-1fa2780ecc30/1920x",rating:"9"},{id:22,name:"\u041a\u0440\u0451\u0441\u0442\u043d\u044b\u0439 \u043e\u0442\u0435\u0446 2",poster:"https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/33474b2a-d670-47c8-9cbe-51291847b6d4/1920x",rating:"9"},{id:21,name:"\u041a\u0440\u0451\u0441\u0442\u043d\u044b\u0439 \u043e\u0442\u0435\u0446",poster:"https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/c11652e8-653b-47c1-8e72-1552399a775b/1920x",rating:"9"},{id:20,name:"\u0417\u0430\u0432\u0442\u0440\u0430\u043a \u0443 \u0422\u0438\u0444\u0444\u0430\u043d\u0438",poster:"https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/9f744099-3e33-493c-86b2-bc8829f4264b/1920x",rating:"9"},{id:19,name:"\u041c\u043e\u0440\u043f\u0435\u0445\u0438",poster:"https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/31d4e0de-c0e4-4180-9fa7-9e18e38998e6/1920x",rating:"7"},{id:18,name:"\u0412\u0430\u043c \u043f\u0438\u0441\u044c\u043c\u043e",poster:"https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/7a6983b7-144f-4206-af24-145c2baf3bff/1920x",rating:"8"},{id:17,name:"\u0414\u043e\u0440\u043e\u0433\u0430 \u043f\u0435\u0440\u0435\u043c\u0435\u043d",poster:"https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/1eab91d6-e82d-4170-94b3-ca019f68a6ee/1920x",rating:"9"},{id:16,name:"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u0440\u044b\u0446\u0430\u0440\u044f",poster:"https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/dd301ea4-1871-48fe-83e8-1ef8829e86df/1920x",rating:"8"},{id:15,name:"\u0412\u0438\u043d\u043e\u0432\u043d\u044b\u0439",poster:"https://kinopoisk-ru.clstorage.net/15D2S2r30/33deda7SK/7htRvK7qLcqB7zW47Pf5ERgu4sxJy-F4M37R8H0rzARd-esRa2vgXRtB0HI4A64PJyDcztuXoxmIVhANctqFu98TXfXPlwGX_J5N3dWT0ERcSoO1OZLQWWpupb0IRrC4nVkjtKPzHP2b8FVrBTv3QmZ93Ir-__pt7BpNxNaawXp6CxEMfhagTpHbcKgw1ykRpG_2nH2W_Ug7c03ozQeoeEkFPxhLj-TdV2w1jw32S_ZKUbASRvv2kJjWHYQvjoUC1kf58MqGrL75X3w8ALPFtRxbTiBhonHsa-PRTOEbxIDt5YMYE4f4_RvoyfPp6hc6ki0ATpL37lQwksGIa7Ih6qoTscie5tBG_ft0zOxPUbGYS7qohdJJgJMHyUBVT2DY_eUvAAfnbEWf0MkTYXrX4mah9FpelyLctB7dIBPGYfJyb0HYOhog7tUvxDTMl32FuO-GJEGCRVyvDwE4UaMwzDVN5_QHgzRd3wTZ-zFqV2Ki8UAW4m_-DADqyQif0rXyRqMN5MJG3F6Nv_QYpOcVIYhz8ihJ3kVgt5exyIGrdCBFvffgixfEMVf0PRPJWste4pFwEsbnhqjg3ik8GwZh5uLrSfT6bsg-XTO4tNDn9aU0R7JUeb7F6Df3YTRVg7hc2c2PAL_fwO2rWMn7CUqLZvoR2Koi855UkBohZKeG0R6O7x0MjiqwKqlTZBxYQwUFvG_WMEm-aeBnO6lY0SfgBIWRk2j3cwjJkxDdqwmyw8pmCdSqWnMSKEDisXw3IhHmyl9x_JYCoKJ5w3DQ3Nfdabyf5mT5PuXMK3PpiOE3rOTFZffsU_uweS9IPasFDlf6jhn4ohqzglzQ6r1w9wKV1tbH-VB2tuTKcTMQSGxTjcGUC5KUQaY9KB_7dbhde_jUpTk3FAcDmJlTbOX7cdp3Cup5bEbmlxLkXGKl-L9OgYomf5kIuuIkxgE_2NCkF_mVtEceqH3eDcyHq6HM8T-gwC15G-w3ZxiNo-BRdwk6n65aeSh-fley4GQCeQh78r2S_lfpyPIGgHZVv6isMOsFUcxnHjjZNn1ULxcN5MG_-NBVibscV_dIYTcU2YcZMke6IlWERtqfYiAUFgFc6y4p8q5vEYw6bqSaCR_IQBwTeWHYH2rwtcYR4Ld3uXj1p2Ts5QWD-DcviOEDXN0X3arXDk5ZPOpaw2p8wJaNfIe6qW6---38wua4_vHb4MC81229XC_KxPmCjcy_a4F8SbP4cGXpxxADq5yJk0wpMzGOa2Z66QDeznPmHGTCTZSLhsly7lNlRMIq8M6h73Qo3H_lxQhXkixptpX85x8tCN0HLAwp5X_sOxs8_dcQoVcxTlfO_uFoel7HhiRIAgEQ75Il9u6jRbSCAjBiveuoXAQX9VEUj45QEbqBcI8LxZxFq6gERcmzgJ9bjME7NNmjhepDtk6VuOJad3qclOrVlMOSoda-C3FAhsbk1t3nEDAgI3HVRNsSSJm-WfAHf7kEZfNAzCERz4hTX3QdI9x5L3FyC76OXcQK8svy0NwKxZSzgklWLp81MLaW1N71e_BIDLOVCcjnDuAVQvGgC_u1fJmDlEz12bNkQw9IRTv4cWv5VgeyYvUwolrTHujoXh2wPxbJnsYf-czODsB6jd_YmASrbZlEd96owTadsBNPIdRFM0TIteXPVHN7zElbcNlf3X6TXlLdaB4aY5KI-IqFcMMGoV56X_XIOh6k6pU3HATUq3G9VF_KZDVejcwjh_20eYvUfCVJ__hvw2Rxy-zZC4nuY6ZGAfR6Uh-uIJROFYiX_iG6YtNJYLqGfNqZp6DEAE8hidiHOviJSr1Yt3sNUI0r6HTRPWt8z9vMhSvk3fcVSneKCoEojkpTphTkDhFsr7YFYnrPBWhCRqBaHUugyAz_eQXkf860ZdJxpPPrKWgJt0B0iYkDsAfr5HEv0HlnfT4bMvqJRMbiO2LcmMKFfH9OSer6383cHubszgnLcLzoq3WNzG9uFG02PaRn441UZfPoYAlllwhHe9wJW3hJ84HScz7SXSBWGr-KFOgeHRhPMjGGeiNJ1DICdCKVM9BUyDt9zZT_stC5-oXolxvB_A0rxFSthXusA8fsQSfIqS_lyofKEgFoiuJ7pphYOpVcuzJdujJvbagublzmvatQhEj7TQ0IkxowVRbJvOufXcgZUzRs7bWfcAt7WOUv0C33TXbHenpd9KJy86bMBP5ZWJOSmf5WW2XQuqpkyv0rzByMt9FFZP-CoJme6XQDY0nYfa_IBMEd_zRvQ_hNl8jlD5lSmzp-XYBOcvvyXAAODfznImEa2teJ6IrqXK6dPyiErF9NUTwf-kSRMnXUn3fJcP2LrFwtwaP8O9_oBTtQ8RcZQo--zpWABh7fHuw0-hUYG04hBsJfdXj6CvS24U8cBCBXEcnYj74wkR6FMOsXqcABR7iMLbWLLB__8H0DyFlzEabTPmb9sNoqA_LE_HLxMDsq4SYqFxms_mboEtUvWAyo-4lVaIu-RDmKQXT7GyW0fZ-YDGW9j-Sb14B9F0xhY3XOE672ASQO0keCGESaiZwL0iEqflNtKAYySFaFM1yQNOultRQHQmxJ-nVoIwupcJlDECx9GQfwVwNAZZfkiXdtJgfeAi2w8vpf3lQw6lW0N6pdnu4f6dRqlvxSpTsYkKj7TaUIUx60uQ4JxJePsYwZh_h0KdGjLM9rmEET4EHnEXYTBsZR8FbqHzogXE7xrAu-7ZbCS_X0tjrQYjG3JMiwv-VRvI_6NAWqRcQ382GMOZuQwGVNB6zLn5z1G9zde0Ved9py3bBG9s_SmATmXWQ_CrmW2tf5xPoCqP6N62yEUD9ZEagXCsgRjpU0dzNdvE1D6FzB8ZeUe8vYQS90VfPNNmM-8lE4qsoLamTcOqHgzx6RhuarRfSOaohOFTfowIAj6Q0QG-5g5boRqDsLWUj912BAdWk7hNP7QH1DTLFzZTov2oYdfHZij4L87MK8#DSD",rating:"7"},{id:14,name:"\u0414\u0432\u0430\u0434\u0446\u0430\u0442\u044c \u043e\u0434\u043d\u043e",poster:"https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/d399b9bf-a61c-405b-a48d-51867da1be2e/1920x",rating:"7"},{id:13,name:"#\u0436\u0438\u0432\u043e\u0439",poster:"https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/28eb3cec-b7b9-4ab0-8ce3-bbdbdeb0fdfc/1920x",rating:"7"},{id:12,name:"\u041d\u0435 \u043f\u043e\u0439\u043c\u0430\u043d \u2014 \u043d\u0435 \u0432\u043e\u0440",poster:"https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/b6600325-7666-4da8-8a8d-7db4c55ae1cd/1920x",rating:"8"},{id:11,name:"\u041a\u0440\u0430\u0441\u043d\u043e\u0435 \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0435",poster:"https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/0c0262f1-ce51-446d-9cd8-5468e9e8b833/1920x",rating:"5"},{id:10,name:"\u041d\u0435\u0432\u0435\u0440\u043e\u044f\u0442\u043d\u0430\u044f \u0438\u0441\u0442\u043e\u0440\u0438\u044f \u041e\u0441\u0442\u0440\u043e\u0432\u0430 \u0440\u043e\u0437",poster:"https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/da8f24b6-4dbd-4ab0-89ec-28a9143fac48/1920x",rating:"9"},{id:9,name:"\u041e\u043f\u0435\u0440\u0430\u0446\u0438\u044f \u0444\u0438\u043d\u0430\u043b",poster:"https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/78560127-754c-49d1-82f6-43efcbb223fb/1920x",rating:"9"},{id:8,name:"\u0422\u0435\u043c \u0431\u043e\u043b\u044c\u043d\u0435\u0435 \u043f\u0430\u0434\u0430\u0442\u044c",poster:"https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/e1aad75d-0a8a-4639-9f9d-1d1569003b4f/1920x",rating:"6"},{id:7,name:"\u041c\u0435\u043c\u0443\u0430\u0440\u044b \u0433\u0435\u0439\u0448\u0438",poster:"https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/27ef781a-b05e-4e34-8af6-d04df47f3b93/1920x",rating:"9"},{id:6,name:"\u0410\u0440\u043c\u0438\u044f \u0432\u043e\u0440\u043e\u0432",poster:"https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/34066019-9905-4227-a5ac-e630253effe6/1920x",rating:8},{id:5,name:"\u0412 \u043f\u043e\u0433\u043e\u043d\u0435 \u0437\u0430 \u0411\u043e\u043d\u043d\u0438 \u0438 \u041a\u043b\u0430\u0439\u0434\u043e\u043c",poster:"https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/3a7b26f0-5c6e-4227-932b-46aeeb1bc674/1920x",rating:8},{id:4,name:"\u0410\u0440\u043c\u0438\u044f \u043c\u0435\u0440\u0442\u0432\u0435\u0446\u043e\u0432",poster:"https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/931b0013-5186-4bf4-825f-3418752a65c2/1920x",rating:"6"},{id:3,name:"\u041f\u0442\u0438\u0447\u0438\u0439 \u043a\u043e\u0440\u043e\u0431",poster:"https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/65f50025-a1ee-46da-a607-0a9162281403/1920x",rating:"8"},{id:2,name:"\u041a\u0440\u043e\u0432\u0430\u0432\u043e-\u043a\u0440\u0430\u0441\u043d\u043e\u0435 \u043d\u0435\u0431\u043e",poster:"https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/582e09e7-51ac-4806-8bff-b4d410be46e9/1920x",rating:"5"},{id:1,name:"47 \u0440\u043e\u043d\u0438\u043d\u043e\u0432",poster:"https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/5bc68f1c-768f-4fa2-b5ae-80f3769cbdab/1920x",rating:"8"}],newFilmDate:{name:"",poster:"",rating:""}},c=function(e,t,a){return{type:i,name:e,poster:t,rating:a}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;if(t.type===i){var a=Object(r.a)(Object(r.a)({},e),{},{filmsDate:Object(n.a)(e.filmsDate)});if(""===t.name||void 0===t.name||null===t.name)return e;if("http"!==t.poster.slice(0,4))return e;if(""===t.poster||void 0===t.poster||null===t.poster)return e;if(""===t.rating||void 0===t.rating||null===t.rating)return e;var c={id:5,name:t.name,poster:t.poster,rating:t.rating};return a.filmsDate.unshift(c),a.newFilmDate={id:5,name:"",poster:"",rating:""},a}return e}},67:function(e,t,a){"use strict";a.d(t,"b",(function(){return v})),a.d(t,"c",(function(){return O})),a.d(t,"d",(function(){return _}));var n=a(8),r=a(19),i=a(2),s=a(3),c=a.n(s),o=a(9),u="usersReducer/FOLLOW",d="usersReducer/UNFOLLOW",l="usersReducer/SET_USERS",p="usersReducer/SET_PRELOADER",f="usersReducer/SET_TOTAL_USERS_COUNT",b="usersReducer/FOLLOWING_IN_PROGRESS",m={usersData:[],pageSize:12,pageNumber:1,pageCount:null,toggleIsFetching:!0,followingInProgress:[]},h=function(e){return{type:u,id:e}},g=function(e){return{type:d,id:e}},j=function(e){return{type:p,preloaderState:e}},x=function(e,t){return{type:b,isFetching:e,userId:t}},v=function(e,t){return function(){var a=Object(n.a)(c.a.mark((function a(n){var r;return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(j(!0)),a.next=3,o.d.getUsers(e,t);case 3:r=a.sent,n(j(!1)),n((s=r.items,{type:l,usersList:s,pageNumber:e})),n((i=r.totalCount,{type:f,counter:i}));case 7:case"end":return a.stop()}var i,s}),a)})));return function(e){return a.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(n.a)(c.a.mark((function t(a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(x(!0,e)),t.next=3,o.d.follow(e);case 3:a(x(!1,e)),a(h(e));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(n.a)(c.a.mark((function t(a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(x(!0,e)),t.next=3,o.d.unfollow(e);case 3:a(x(!1,e)),a(g(e));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(i.a)(Object(i.a)({},e),{},{usersData:e.usersData.map((function(e){return e.id===t.id?Object(i.a)(Object(i.a)({},e),{},{followed:!0}):e}))});case d:return Object(i.a)(Object(i.a)({},e),{},{usersData:e.usersData.map((function(e){return e.id===t.id?Object(i.a)(Object(i.a)({},e),{},{followed:!1}):e}))});case l:return Object(i.a)(Object(i.a)({},e),{},{usersData:Object(r.a)(t.usersList),pageNumber:t.pageNumber});case p:return Object(i.a)(Object(i.a)({},e),{},{toggleIsFetching:t.preloaderState});case f:return Object(i.a)(Object(i.a)({},e),{},{pageCount:t.counter});case b:return Object(i.a)(Object(i.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(r.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}}},68:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(19),r=a(2),i=a(31),s=a(25),c=a(26),o=a.p+"static/media/be86998f3a51862b04e6e9963e202f90.7415401c.jpeg",u=a(27),d=a(32),l=a.p+"static/media/8a21f30ab4b823c23261.cd3c8c1c.png",p=a(28),f="dialogsReducer/ADD-MESSAGE",b={dialogsDate:[{id:1,name:"\u041b\u0438\u0433\u0430 \u0432\u044b\u0436\u0438\u0432\u0448\u0438\u0445 \u0434\u0438\u0441\u043d\u0435\u0435\u0432\u0441\u043a\u0438\u0445 \u043f\u0440\u0438\u043d\u0446\u0435\u0441\u0441",avatar:o},{id:2,name:"\u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440 \u0411\u0443\u0440\u043e\u0432",avatar:d.a},{id:3,name:"\u0420\u043e\u043c\u0430\u043d \u041c\u0430\u043a\u0430\u0440\u043e\u0432",avatar:s.a},{id:4,name:"\u041c\u0430\u043a\u0441\u0438\u043c \u041f\u0430\u0432\u043b\u043e\u0432",avatar:u.a},{id:5,name:"\u041c\u0430\u0440\u0438\u044f \u0421\u0430\u0436\u0438\u043d\u0430",avatar:i.a},{id:6,name:"\u0421\u043e\u0444\u0438 \u041a\u043e\u043b\u0447\u0438\u043d\u0430",avatar:c.a},{id:7,name:"\u041c\u0430\u0442\u043c\u043e\u0434\u0435\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0425\u0422\u0421",avatar:l}],messagesData:[{id:1,text:"\u042d\u0442\u043e \u0431\u0443\u0434\u0435\u0442 \u0432 \u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435 31 \u043e\u043a\u0442\u044f\u0431\u0440\u044f \u0432 14:00",userName:"\u041c\u0430\u043a\u0441\u0438\u043c \u041f\u0430\u0432\u043b\u043e\u0432",messageDate:"17:43 16.2.2022",avatar:u.a},{id:2,text:"\u0443 \u043c\u0435\u043d\u044f \u0435\u0441\u0442\u044c QR",userName:"\u041c\u0430\u043a\u0441\u0438\u043c \u041f\u0430\u0432\u043b\u043e\u0432",messageDate:"17:43 16.2.2022",avatar:u.a},{id:3,text:"\u042f \u043d\u0430 \u0441\u0430\u043c\u043e\u043c \u0434\u0435\u043b\u0435 \u043f\u043e\u0434 \u0432\u043e\u043f\u0440\u043e\u0441\u043e\u043c, \u0442\u0430\u043a \u043a\u0430\u043a \u043c\u043e\u0433\u0443 \u0443\u0435\u0445\u0430\u0442\u044c \u0432 \u0441\u043e\u043b\u0438\u043a\u0430\u043c\u0441\u043a, \u043d\u043e \u0441\u043a\u043e\u0440\u0435\u0435 \u0432\u0441\u0435\u0433\u043e \u043d\u0435 \u0443\u0435\u0434\u0443",userName:"\u041c\u0430\u0440\u0438\u044f \u0421\u0430\u0436\u0438\u043d\u0430",messageDate:"17:45 16.2.2022",avatar:i.a},{id:4,text:"\u043d\u0435 \u0437\u043d\u0430\u044e",userName:"\u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440 \u0411\u0443\u0440\u043e\u0432",messageDate:"17:51 16.2.2022",avatar:d.a},{id:5,text:"\u0423 \u043c\u0435\u043d\u044f, \u043d\u0430\u0432\u0435\u0440\u043d\u043e\u0435, \u043d\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0441\u044f.",userName:"\u0410\u043d\u0442\u043e\u043d \u0421\u044e\u0440\u0430\u0435\u0432",messageDate:"17:54 16.2.2022",avatar:p.a}],newMessageText:""},m=function(e){return{type:f,messageText:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;if(t.type===f){var a,i=Object(r.a)(Object(r.a)({},e),{},{messagesData:Object(n.a)(e.messagesData)}),s=t.messageText,c=new Date;a=c.getMinutes()<10?"0".concat(c.getMinutes()):c.getMinutes();var o="".concat(c.getHours(),":").concat(a," ").concat(c.getDate(),".").concat(c.getMonth()+1,".").concat(c.getFullYear());if(""===s||void 0===s||null===s)return e;var u={id:5,userName:"\u0410\u043d\u0442\u043e\u043d \u0421\u044e\u0440\u0430\u0435\u0432",messageDate:o,text:s,avatar:p.a};return i.messagesData.push(u),i.newMessageText="",i}return e}},72:function(e,t,a){e.exports={login:"Login_login___lOSD"}},80:function(e,t,a){},83:function(e,t,a){},9:function(e,t,a){"use strict";a.d(t,"d",(function(){return i})),a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return c})),a.d(t,"c",(function(){return o}));var n=a(71),r=a.n(n).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"ab8eb545-4faa-49c3-bf44-5dcf07bb362c"}}),i={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12;return r.get("/users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},totalUsers:function(){return r.get("/users").then((function(e){return e.data.totalCount}))},follow:function(e){return r.post("/follow/".concat(e))},unfollow:function(e){return r.delete("/follow/".concat(e))}},s={getProfile:function(e){return r.get("/profile/".concat(e)).then((function(e){return e.data}))},setProfileStatus:function(e){return r.get("/profile/status/".concat(e))},updateProfileStatus:function(e){return r.put("/profile/status",{status:e})},setAvatar:function(e){var t=new FormData;return t.append("image",e),r.put("/profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},setProfileInfo:function(e){return r.put("/profile",e).then((function(e){return console.log(e.data)}))}},c={authMe:function(){return r.get("/auth/me").then((function(e){return e.data}))},login:function(e){return r.post("/auth/login",{email:e.email,password:e.password,rememberMe:e.rememberMe,captcha:e.captcha})},logout:function(){return r.delete("/auth/login")}},o={getCaptchaURL:function(){return r.get("/security/get-captcha-url").then((function(e){return e.data}))}}}},[[107,1,2]]]);
//# sourceMappingURL=main.8fcfe469.chunk.js.map
(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{109:function(t,e,s){"use strict";s.d(e,"b",(function(){return a})),s.d(e,"d",(function(){return r})),s.d(e,"c",(function(){return o})),s.d(e,"a",(function(){return i}));var a=function(t){return t.profilePage.profile},r=function(t){return t.profilePage.status},o=function(t){return t.profilePage},i=function(t){return t.profilePage.commonAvatar}},115:function(t,e,s){t.exports={profileHeader:"Profile_profileHeader__1jByu",foneImage:"Profile_foneImage__FTbnY",userProfile:"Profile_userProfile__1xu_0"}},116:function(t,e,s){t.exports={preloaderProfile:"UserProfile_preloaderProfile__J38by",avatar:"UserProfile_avatar__3aAQe",optionsAvatar:"UserProfile_optionsAvatar__1GT8T",userInfo:"UserProfile_userInfo__3r75a",name:"UserProfile_name__Qtey_",aboutMe:"UserProfile_aboutMe__XmNlx",status:"UserProfile_status__v3RCD",vkontakte:"UserProfile_vkontakte__1pTcQ"}},117:function(t,e,s){t.exports={statusContainer:"ProfileStatus_statusContainer__3K7Dz",statusText:"ProfileStatus_statusText__3VPSX",statusCreator:"ProfileStatus_statusCreator__Bo-4B"}},118:function(t,e,s){t.exports={posts:"MyPosts_posts__2Bgrb"}},119:function(t,e,s){t.exports={post:"Post_post__2-wmH",avatar:"Post_avatar__3MFj7",postInfo:"Post_postInfo__dXgnf",text:"Post_text__28o-6",likes:"Post_likes__1rFI2",deletePost:"Post_deletePost__2MBwY"}},120:function(t,e,s){t.exports={newPost:"NewPost_newPost__3WPmS"}},130:function(t,e,s){"use strict";s.r(e);var a=s(2),r=s(34),o=s(35),i=s(37),n=s(36),c=s(12),l=s(0),u=s.n(l),f=s(18),d=s(5),j=s(115),p=s.n(j),A=s(116),b=s.n(A),m=s(38),O=s(52),P=s(117),x=s.n(P),h=s(1),v=function(t){var e=Object(l.useState)(!1),s=Object(O.a)(e,2),a=s[0],r=s[1],o=Object(l.useState)(t.status),i=Object(O.a)(o,2),n=i[0],c=i[1];Object(l.useEffect)((function(){c(t.status)}),[t.status]);return Object(h.jsxs)("div",{className:x.a.statusContainer,children:[!a&&Object(h.jsx)("div",{onDoubleClick:function(){r(!0)},className:x.a.statusText,children:Object(h.jsxs)("p",{children:["\u0421\u0442\u0430\u0442\u0443\u0441: ",n]})}),a&&Object(h.jsx)("div",{className:x.a.statusCreator,children:Object(h.jsx)("input",{onChange:function(t){c(t.target.value)},onBlur:function(){r(!1),t.updateProfileStatus(n)},autoFocus:!0,type:"text",value:n})})]})},g=function(t){var e=Object.keys(t.contacts).map((function(e){if(t.contacts[e])return Object(h.jsxs)("div",{children:[e,": ",Object(h.jsx)("a",{href:t.contacts[e],children:t.contacts[e]})]},e)}));return Object(h.jsx)("div",{children:e})},N=function(t){var e=t.commonAvatar;return t.profile?Object(h.jsxs)("div",{className:b.a.avatar,children:[t.isOwner?Object(h.jsxs)("div",{className:b.a.optionsAvatar,children:[Object(h.jsx)("label",{htmlFor:"inputFileAvatar",children:Object(h.jsx)("img",{src:"data:image/png;base64,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",alt:"option"})}),Object(h.jsx)("input",{type:"file",id:"inputFileAvatar",onChange:function(e){e.target.files.length&&t.setProfileAvatar(e.target.files[0])}})]}):null,Object(h.jsx)("img",{src:t.profile.photos.large?t.profile.photos.large:e,alt:"avatar"}),Object(h.jsxs)("div",{className:b.a.userInfo,children:[Object(h.jsxs)("div",{className:b.a.name,children:["\u0418\u043c\u044f: ",t.profile.fullName]}),Object(h.jsx)(v,{status:t.status||"*-*-*-*",updateProfileStatus:t.updateProfileStatus}),Object(h.jsxs)("div",{className:b.a.aboutMe,children:["\u041e\u0431\u043e \u043c\u043d\u0435: ",t.profile.aboutMe]}),Object(h.jsx)(g,{contacts:t.profile.contacts}),Object(h.jsxs)("div",{className:b.a.lookingForAJob,children:["\u0418\u0449\u0443 \u0440\u0430\u0431\u043e\u0442\u0443: ",t.profile.lookingForAJob?"\u0414\u0430":"\u041d\u0435\u0442"]}),Object(h.jsxs)("div",{className:b.a.lookingForAJobDescription,children:["\u041c\u043e\u0438 \u043d\u0430\u0432\u044b\u043a\u0438: ",t.profile.lookingForAJobDescription?t.profile.lookingForAJobDescription:"\u041d\u0435\u0442"]})]})]}):Object(h.jsx)("div",{className:b.a.preloaderProfile,children:Object(h.jsx)(m.a,{})})},y=s(118),B=s.n(y),_=s(119),C=s.n(_),I=function(t){return Object(h.jsxs)("div",{className:C.a.post,children:[Object(h.jsx)("img",{className:C.a.avatar,src:t.avatar,alt:"avatar"}),Object(h.jsxs)("div",{className:C.a.postInfo,children:[Object(h.jsx)("div",{className:C.a.text,children:t.message}),Object(h.jsxs)("div",{className:C.a.likes,children:[Object(h.jsx)("img",{src:"https://cdn131.picsart.com/296316240436211.png",alt:"like"}),Object(h.jsx)("p",{children:t.likesCount})]})]}),Object(h.jsx)("div",{className:C.a.deletePost,onClick:function(){t.deletePost(t.id)},children:"\u274c"})]})},J=s(120),z=s.n(J),S=s(51),U=function(t){var e=Object(S.a)({initialValues:{myPost:""},onSubmit:function(e,s){t.addPost(e.myPost),s.resetForm()}});return Object(h.jsx)("div",{className:z.a.newPost,children:Object(h.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(h.jsx)("textarea",{name:"myPost",id:"myPost",placeholder:"Enter your post...",onChange:e.handleChange,value:e.values.myPost}),Object(h.jsx)("button",{type:"submit",children:"Add post"})]})})},D=s(50),F=u.a.memo((function(t){var e=t.profilePage.postsData.map((function(e,s){return Object(h.jsx)(I,{deletePost:t.deletePost,message:e.text,likesCount:e.likesCount,avatar:e.avatar,id:e.id},s)}));return Object(h.jsxs)("div",{className:B.a.posts,children:[Object(h.jsx)(U,{addPost:t.addPost}),e]})})),k=s(109),M={addPost:D.a,deletePost:D.c},E=Object(c.b)((function(t){return{profilePage:Object(k.c)(t)}}),M)(F),Y=function(t){return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:p.a.profileHeader}),Object(h.jsx)("div",{className:p.a.foneImage,children:Object(h.jsx)("img",{src:"https://sun9-43.userapi.com/c855720/v855720525/16237c/NwRbdoz_yr4.jpg",alt:"page fon"})}),Object(h.jsx)(N,{className:p.a.userProfile,profile:t.profile,status:t.status,commonAvatar:t.commonAvatar,isOwner:t.isOwner,updateProfileStatus:t.updateProfileStatus,setProfileAvatar:t.setProfileAvatar}),Object(h.jsx)(E,{})]})},w=s(29),Q=s(64),V=function(t){Object(i.a)(s,t);var e=Object(n.a)(s);function s(){return Object(r.a)(this,s),e.apply(this,arguments)}return Object(o.a)(s,[{key:"refreshProfile",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getProfile(t),this.props.setUserStatus(t)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(t,e,s){this.props.match.params.userId!=t.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(h.jsx)(Y,Object(a.a)(Object(a.a)({},this.props),{},{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,commonAvatar:this.props.commonAvatar,updateProfileStatus:this.props.updateProfileStatus,setProfileAvatar:this.props.setProfileAvatar}))}}]),s}(u.a.Component),K={getProfile:D.d,updateProfileStatus:D.h,setUserStatus:D.g,setProfileAvatar:D.e};e.default=Object(f.c)(d.f,Object(c.b)((function(t){return{profile:Object(k.b)(t),status:Object(k.d)(t),isAuth:Object(w.a)(t),authorizedUserId:Object(w.c)(t),initialized:Object(Q.a)(t),commonAvatar:Object(k.a)(t)}}),K))(V)}}]);
//# sourceMappingURL=3.d2d00757.chunk.js.map
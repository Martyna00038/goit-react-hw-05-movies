"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[392],{392:function(r,t,e){e.r(t),e.d(t,{default:function(){return m}});var n=e(861),c=e(439),a=e(757),s=e.n(a),u=e(791),o=e(689),i=e(390),p="cast_castList__yD6XP",f="cast_castImage__+qEjt",l="cast_castItem__w+cL7",h="cast_castName__Tgu1f",v=e(184);function m(){var r=(0,o.UO)().movieId,t=(0,u.useState)([]),e=(0,c.Z)(t,2),a=e[0],m=e[1];return(0,u.useEffect)((function(){var t=function(){var t=(0,n.Z)(s().mark((function t(){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,i.xc)(r);case 3:e=t.sent,m(e||[]),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error("Error fetching movie credits:",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[r]),(0,v.jsx)("div",{children:(0,v.jsx)("ul",{className:p,children:a.map((function(r){return(0,v.jsxs)("li",{className:l,children:[(0,v.jsx)("img",{src:r.profile_path?"https://image.tmdb.org/t/p/w500".concat(r.profile_path):"placeholder_image_url_here",alt:r.name,className:f}),(0,v.jsx)("p",{className:h,children:r.name})]},r.id)}))})})}},390:function(r,t,e){e.d(t,{Hx:function(){return v},Mc:function(){return p},wr:function(){return u},xc:function(){return l},z1:function(){return i}});var n=e(861),c=e(757),a=e.n(c),s=e(340);function u(){return o.apply(this,arguments)}function o(){return(o=(0,n.Z)(a().mark((function r(){var t;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.Z.get("/trending/movie/day");case 3:return t=r.sent,r.abrupt("return",t.data.results);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error fetching trending movies:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})))).apply(this,arguments)}s.Z.defaults.baseURL="https://api.themoviedb.org/3",s.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTU4MGEwNzMwMWM4Y2Y2MDE1NmMzOGQ5NjViMzFjNyIsInN1YiI6IjY1ZDY0Y2M3MjVjZDg1MDE4NjdlYzI5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IGg87z05r1r2foqoV5oHcdgwaCCNHoQQNLbnMdGV8oE";var i=function(){var r=(0,n.Z)(a().mark((function r(t){var e;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.Z.get("/search/movie",{params:{query:t}});case 3:return e=r.sent,r.abrupt("return",e.data.results);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error during API call:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}();function p(r){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(a().mark((function r(t){var e;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.Z.get("/movie/".concat(t));case 3:return e=r.sent,r.abrupt("return",e.data);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error fetching movie by id:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})))).apply(this,arguments)}function l(r){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)(a().mark((function r(t){var e;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.Z.get("/movie/".concat(t,"/credits"));case 3:return e=r.sent,r.abrupt("return",e.data.cast);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error fetching movie credits:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})))).apply(this,arguments)}function v(r){return m.apply(this,arguments)}function m(){return(m=(0,n.Z)(a().mark((function r(t){var e;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.Z.get("/movie/".concat(t,"/reviews"));case 3:return e=r.sent,r.abrupt("return",e.data.results);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error fetching movie reviews:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=392.a5e92321.chunk.js.map
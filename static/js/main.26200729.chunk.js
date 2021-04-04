(this["webpackJsonprick-and-morty"]=this["webpackJsonprick-and-morty"]||[]).push([[0],{133:function(e,t,c){},138:function(e,t,c){},139:function(e,t,c){},140:function(e,t,c){},141:function(e,t,c){},143:function(e,t,c){},144:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(36),r=c.n(a),i=c(34),s=c(10),l=c(158),o=c(18),j=c(14),u=c(76),d=c.n(u),b=c(82),h=c.n(b),O=c(98),x=function(){var e=Object(O.a)(h.a.mark((function e(t){var c,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://rickandmortyapi.com/api/").concat(t));case 2:return c=e.sent,e.prev=3,c.ok||console.log(c.statusText),e.next=7,c.json();case 7:return n=e.sent,e.abrupt("return",n);case 11:throw e.prev=11,e.t0=e.catch(3),new Error;case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}(),m=(c(133),c(2)),f=Object(j.Route)({list:j.Route.params.enum("characters")},(function(e){var t=e.list;return"/".concat(t)}))((function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){x("character").then((function(e){return a(e.results)}))}),[]),Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"card",children:c.map((function(e){return Object(m.jsxs)(d.a,{flipOnHover:!0,flipDirection:"horizontal",style:{width:"200px",height:"200px"},children:[Object(m.jsx)(u.FrontSide,{style:{backgroundImage:"url(".concat(e.image,")"),backgroundSize:"contain",borderRadius:"20px"},children:Object(m.jsx)("p",{className:"card__title",children:e.name})}),Object(m.jsx)(u.BackSide,{style:{backgroundImage:"url(".concat(e.image,")"),backgroundSize:"contain",borderRadius:"20px"},children:Object(m.jsx)("p",{className:"card__info",children:"Status: ".concat(e.status,", character is: ").concat(e.species)})})]})}))})})})),p=c(160),v=(c(88),Object(j.Route)({list:j.Route.params.enum("episodes")},(function(e){var t=e.list;return"/".concat(t)}))((function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){x("episode").then((function(e){return a(e.results)}))}),[]),Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)(p.a,{celled:!0,inverted:!0,selectable:!0,children:[Object(m.jsx)(p.a.Header,{children:Object(m.jsxs)(p.a.Row,{children:[Object(m.jsx)(p.a.HeaderCell,{children:"Name"}),Object(m.jsx)(p.a.HeaderCell,{children:"Air date"}),Object(m.jsx)(p.a.HeaderCell,{children:"Episode"})]})}),Object(m.jsx)(p.a.Body,{children:c.map((function(e){return Object(m.jsxs)(p.a.Row,{children:[Object(m.jsx)(p.a.Cell,{children:e.name}),Object(m.jsx)(p.a.Cell,{children:e.air_date}),Object(m.jsx)(p.a.Cell,{children:e.episode})]},e.id)}))})]})})}))),w=Object(j.Route)({list:j.Route.params.enum("locations")},(function(e){var t=e.list;return"/".concat(t)}))((function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){x("location").then((function(e){return a(e.results)}))}),[]),Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)(p.a,{celled:!0,inverted:!0,selectable:!0,children:[Object(m.jsx)(p.a.Header,{children:Object(m.jsxs)(p.a.Row,{children:[Object(m.jsx)(p.a.HeaderCell,{children:"Name"}),Object(m.jsx)(p.a.HeaderCell,{children:"Type"}),Object(m.jsx)(p.a.HeaderCell,{children:"Dimension"})]})}),Object(m.jsx)(p.a.Body,{children:c.map((function(e){return Object(m.jsxs)(p.a.Row,{children:[Object(m.jsx)(p.a.Cell,{children:e.name}),Object(m.jsx)(p.a.Cell,{children:e.type}),Object(m.jsx)(p.a.Cell,{children:e.dimension})]},e.id)}))})]})})})),k=c(85),C=c(102),y=c(100),g=c.n(y);var R=c(159),N=function(e){var t=e.onCreate,c=Object(n.useState)(""),a=Object(o.a)(c,2),r=a[0],i=a[1],s=Object(n.useCallback)((function(e){var t=e.target.value;i(t)}),[]),l=Object(n.useCallback)((function(e){"Enter"===e.key&&r&&(t(r),i(""))}),[r]);return Object(m.jsxs)("div",{className:"watch__header",children:[Object(m.jsx)("h1",{className:"watch__title",children:"My Watch List"}),Object(m.jsx)(R.a,{size:"huge",type:"text",placeholder:"What to see next?",value:r,onChange:s,onKeyDown:l})]})},_=c(101),S=c.n(_),H=function(e){var t=e.item,c=e.onRemove,n=e.onComplete;return Object(m.jsx)("li",{className:S()("watch-list__item",{"watch-list__item--completed":t.completed}),children:Object(m.jsxs)("div",{children:[Object(m.jsx)("input",{type:"checkbox",readOnly:!0,className:"watch-list__toggle",checked:t.completed,onClick:function(){return n(t.id)}}),Object(m.jsx)("span",{className:"watch-list__title",children:t.title}),Object(m.jsx)("button",{type:"button",className:"watch-list__destroy",onClick:function(){return c(t.id)}})]})})},I=(c(138),function(e){var t=e.watchData,c=e.onRemove,n=e.onComplete;return Object(m.jsx)("ul",{className:"watch-list",children:t.map((function(e){return Object(m.jsx)(H,{item:e,onComplete:n,onRemove:c},e.id)}))})}),E=(c(93),c(139),Object(j.Route)({list:j.Route.params.enum("watch")},(function(e){var t=e.list;return"/".concat(t)}))((function(){var e=function(e,t){var c=Object(n.useState)((function(){try{var c=window.localStorage.getItem(e);return c?JSON.parse(c):t}catch(n){return console.log(n),t}})),a=Object(o.a)(c,2),r=a[0],i=a[1];return[r,function(t){try{var c=t instanceof Function?t(r):t;i(c),window.localStorage.setItem(e,JSON.stringify(c))}catch(n){console.log(n)}}]}("watchData",[]),t=Object(o.a)(e,2),c=t[0],a=t[1],r=Object(n.useCallback)((function(e){a((function(t){return[].concat(Object(C.a)(t),[{completed:!1,title:e,id:g()()}])}))})),i=Object(n.useCallback)((function(e){var t=c.map((function(t){return t.id===e?Object(k.a)(Object(k.a)({},t),{},{completed:!t.completed}):t}));a(t)}),[c]),s=Object(n.useCallback)((function(e){var t=c.filter((function(t){return t.id!==e}));a(t)}),[c]);return Object(m.jsxs)("section",{className:"watch",children:[Object(m.jsx)(N,{onCreate:r}),Object(m.jsx)(I,{watchData:c,onComplete:i,onRemove:s})]})}))),D=(c(140),function(){return Object(m.jsxs)(l.a,{secondary:!0,inverted:!0,size:"large",children:[Object(m.jsx)(l.a.Item,{link:!0,children:Object(m.jsx)(i.b,{to:f.link({list:"characters"}),children:"Characters"})}),Object(m.jsx)(l.a.Item,{link:!0,children:Object(m.jsx)(i.b,{to:v.link({list:"episodes"}),children:"Episodes"})}),Object(m.jsx)(l.a.Item,{link:!0,children:Object(m.jsx)(i.b,{to:w.link({list:"locations"}),children:"Locations"})}),Object(m.jsx)(l.a.Item,{link:!0,children:Object(m.jsx)(i.b,{to:E.link({list:"watch"}),children:"My watch list"})})]})}),z=Object(j.Route)({list:j.Route.params.enum("home")},(function(e){var t=e.list;return"/".concat(t)}))((function(){return Object(m.jsx)("div",{className:"home",children:Object(m.jsx)("h1",{children:"Hello"})})}));c(141);var B=function(){return console.log("hi"),Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(D,{}),Object(m.jsxs)(s.Switch,{children:[Object(m.jsx)(z,{}),Object(m.jsx)(f,{}),Object(m.jsx)(v,{}),Object(m.jsx)(w,{}),Object(m.jsx)(E,{}),Object(m.jsx)(s.Redirect,{to:z.link({list:"home"})})]})]})};c(142),c(143);r.a.render(Object(m.jsx)(i.a,{children:Object(m.jsx)(B,{})}),document.getElementById("root"))},88:function(e,t,c){},93:function(e,t,c){}},[[144,1,2]]]);
//# sourceMappingURL=main.26200729.chunk.js.map
(this["webpackJsonp3-in-a-row"]=this["webpackJsonp3-in-a-row"]||[]).push([[0],[,,,,,,,,,,,,function(n,e,t){},function(n,e,t){},,function(n,e,t){},function(n,e,t){},function(n,e,t){},function(n,e,t){},function(n,e,t){"use strict";t.r(e);var r=t(1),c=t.n(r),a=t(7),i=t.n(a),o=(t(12),t(5)),u=t(2);function s(n){return JSON.parse(JSON.stringify(n))}function l(n){for(var e=n.length-1;e>0;e--){var t=Math.floor(Math.random()*(e+1)),r=[n[t],n[e]];n[e]=r[0],n[t]=r[1]}}function f(n){return n.reduce((function(n,e){return Math.max(e.variant,n)}),0)+1}function d(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3,e=[],t=0;t<n;t++)for(var r=0;r<3;r++)e.push({open:!1,variant:t});return l(e),e}function h(n,e){return n.filter((function(n){return n.variant===e})).every((function(n){return n.open}))}t(13);var j=t(0);var v=function(n){var e=Object(j.jsx)("div",{className:"stacked-linear-background"});return Object(j.jsx)("div",{className:"card",onClick:function(){return n.onClick(n.cardIndex)},children:n.open?n.children:e})};t(15);var b=function(n){var e={gridTemplateColumns:"repeat(".concat(Math.sqrt(n.children.length).toPrecision(1),", 1fr)")};return Object(j.jsx)("div",{className:"board",style:e,children:n.children})};t(16);var O=function(n){return Object(j.jsxs)("div",{className:"player "+(n.active?"highlightPlayer":""),children:[Object(j.jsx)("input",{type:"text",value:n.name,minLength:"1",maxLength:"10",size:"8",onChange:n.onChange})," : ",n.score]})};t(17);var g=function(n){return Object(j.jsx)("div",{className:"leaders-table",children:n.children})};t(18);function m(n){var e=Object(u.a)(Array(79).keys()).map((function(n){return String.fromCodePoint(128512+n)}));return l(e),e}var p=[];var x=function(){var n=Object(r.useState)(d(4)),e=Object(o.a)(n,2),t=e[0],c=e[1],a=Object(r.useState)(m()),i=Object(o.a)(a,2),l=i[0],x=i[1],y=Object(r.useState)([{name:"Player 1",score:0,hasTurn:!0},{name:"Player 2",score:0,hasTurn:!1}]),S=Object(o.a)(y,2),w=S[0],T=S[1];function N(n){if(!t[n].open){p.push({cards:s(t),players:s(w)});var e=function(n,e){return(n=Object(u.a)(n))[e].open=!0,n}(t,n);c(e),function(n){n=Object(u.a)(n);var e=Array.from({length:f(n)},(function(n,e){return e})).filter((function(e){return!h(n,e)})),t=n.filter((function(n){return n.open&&e.includes(n.variant)}));return!t.every((function(n){return n.variant===t[0].variant}))}(e)&&(T(function(n){var e=(n=Object(u.a)(n)).findIndex((function(n){return n.hasTurn}));return n[e].hasTurn=!1,n[(e+1)%n.length].hasTurn=!0,n}(w)),window.setTimeout((function(){c(function(n){n=Object(u.a)(n);var e=Array.from({length:n.length/2},(function(n,e){return e})).filter((function(e){return!h(n,e)}));return n.forEach((function(n){n.open=!e.includes(n.variant)})),n}(t))}),500)),h(e,e[n].variant)&&T(function(n){return(n=Object(u.a)(n))[function(n){return n.findIndex((function(n){return n.hasTurn}))}(n)].score++,n}(w))}}function C(n,e){T(function(n,e,t){return(n=Object(u.a)(n))[e].name=t,n}(w,e,n.target.value))}Object(r.useEffect)((function(){c(JSON.parse(window.localStorage.getItem("cards"))||d(4)),x(JSON.parse(window.localStorage.getItem("emoji"))||m()),T(JSON.parse(window.localStorage.getItem("players"))||[{name:"Player 1",score:0,hasTurn:!0},{name:"Player 2",score:0,hasTurn:!1}])}),[]),Object(r.useEffect)((function(){window.localStorage.setItem("cards",JSON.stringify(t)),window.localStorage.setItem("emoji",JSON.stringify(l)),window.localStorage.setItem("players",JSON.stringify(w))}),[t,w,l]);var I=w.map((function(n,e){return Object(j.jsx)(O,{active:n.hasTurn,name:n.name,score:n.score,onChange:function(n){return C(n,e)}},e)})),k=t.map((function(n,e){return Object(j.jsx)(v,{cardIndex:e,open:n.open,onClick:N,children:Object(j.jsx)("div",{children:l[n.variant]})},e)}));return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("header",{children:"Turn over 3 cards. Find 3 matches - get a score!"}),Object(j.jsxs)("main",{children:[Object(j.jsxs)("div",{children:[Object(j.jsx)(g,{children:I}),Object(j.jsxs)("div",{className:"button-bar",children:[Object(j.jsx)("button",{onClick:function(){p=[],c(d(4)),x(m()),T(function(n){return(n=Object(u.a)(n)).forEach((function(n){n.score=0,n.hasTurn=!1})),n[0].hasTurn=!0,n}(w))},children:"Reset"}),Object(j.jsx)("button",{onClick:function(){if(p.length>0){var n=p.pop();c(n.cards),T(n.players)}},children:"Undo"})]})]}),Object(j.jsx)("div",{children:Object(j.jsx)(b,{children:k})})]})]})},y=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,20)).then((function(e){var t=e.getCLS,r=e.getFID,c=e.getFCP,a=e.getLCP,i=e.getTTFB;t(n),r(n),c(n),a(n),i(n)}))};i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root")),y()}],[[19,1,2]]]);
//# sourceMappingURL=main.4da85b56.chunk.js.map
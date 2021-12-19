(this["webpackJsonpquiz-game-app"]=this["webpackJsonpquiz-game-app"]||[]).push([[0],[,,,,,,,,,function(e,n,t){e.exports={card:"Card_card__3F8np",answers:"Card_answers__uDw45"}},,function(e,n,t){e.exports={statistics:"GameStatistics_statistics__CM0Le"}},function(e,n,t){e.exports={"button-bar":"ButtonBar_button-bar__2n0ls"}},function(e,n,t){e.exports={answer:"Answer_answer__2YB8b"}},function(e,n,t){e.exports={question:"Question_question__1iSNS"}},function(e,n,t){e.exports={game:"GameLayout_game__IGevX"}},function(e,n,t){e.exports={"quiz-game":"QuizGame_quiz-game__UjBXi"}},function(e,n,t){e.exports={container:"TimeoutBar_container__2Vo58"}},function(e,n,t){e.exports={"app-menu":"App_app-menu__1ySnZ"}},,,,,function(e,n,t){},,,,,function(e,n,t){"use strict";t.r(n);var r=t(2),c=t.n(r),a=t(10),s=t.n(a),i=(t(23),t(3)),o=t(11),u=t.n(o),b=t(0);var l=function(e){var n=e.correct,t=e.incorrect,r=e.unanswered;return Object(b.jsxs)("section",{className:u.a.statistics,children:[n?Object(b.jsxs)("p",{children:["Correct: ",n]}):"",t?Object(b.jsxs)("p",{children:["Incorrect: ",t," "]}):"",r?Object(b.jsxs)("p",{children:["Unanswered: ",r," "]}):""]})},j=t(12),d=t.n(j);var h=function(e){var n=e.revealBonusDisabled,t=e.timeBonusDisabled,r=e.onRevealBonus,c=e.onTimeBonus;return Object(b.jsxs)("section",{className:d.a["button-bar"],children:[Object(b.jsx)("button",{disabled:n,onClick:r,children:"50 / 50"}),Object(b.jsx)("button",{disabled:t,onClick:c,children:"+10 s"}),Object(b.jsx)("button",{onClick:function(){return document.location.reload.bind(window.location)()},children:"Quit"})]})},O=t(13),f=t.n(O);var m=function(e){var n=e.visible,t=e.correct,r=e.onClick,c=e.children;return Object(b.jsx)("button",{disabled:!n,className:f.a.answer,onClick:function(){return r(t)},children:c})},v=t(14),p=t.n(v);var x=function(e){var n=e.children,t={backgroundImage:"url(".concat(n.toString(),")"),backgroundSize:"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat",height:"100%"};return Object(b.jsx)("section",{className:p.a.question,style:n instanceof URL?t:void 0,children:n instanceof URL?"":n})},w=t(9),g=t.n(w);var _=function(e){var n=e.question,t=e.onAnswer;if(!n)return Object(b.jsx)("p",{children:"Oh no! The game is broken. :-( The fix is on it's way!"});var r=null===n||void 0===n?void 0:n.answers.map((function(e,n){return Object(b.jsx)(m,{visible:e.visible,correct:e.correct,onClick:t,children:e.answer},n)}));return Object(b.jsxs)("section",{className:g.a.card,children:[Object(b.jsx)(x,{children:n.question}),Object(b.jsx)("section",{className:g.a.answers,children:r})]})},k=t(15),y=t.n(k);var B=function(e){var n=e.children;return Object(b.jsxs)("div",{className:y.a.game,children:[Object(b.jsx)("div",{children:n[0]})," ",Object(b.jsx)("div",{children:n[1]})," ",Object(b.jsx)("div",{children:n[2]})," ",Object(b.jsx)("div",{children:n[3]})," "]})};function q(e){var n=e.children;return Object(b.jsx)(b.Fragment,{children:n.find((function(e){return e.props.show}))})}function S(e){e.show;var n=e.children;return Object(b.jsx)(b.Fragment,{children:n})}var C=function(e,n){var t=Object(r.useState)(e),c=Object(i.a)(t,2),a=c[0],s=c[1],o=Object(r.useRef)(),u=Object(r.useRef)(!0);return Object(r.useEffect)((function(){u.current&&0===a&&(u.current=!1,n())}),[a,e,n,u]),Object(r.useEffect)((function(){var e=setInterval((function(){u.current&&s((function(e){return e-1}))}),1e3);return o.current=e,function(){return clearInterval(o.current)}}),[]),{timeLeft:a,stopTimer:function(){u.current=!1,clearInterval(o.current)},resetTimer:function(e){s(e),u.current=!0}}};var T=function(e){var n=Object(r.useRef)(e[Symbol.iterator]()),t=Object(r.useState)((function(){return n.current.next().value})),c=Object(i.a)(t,2),a=c[0],s=c[1];return[a,function(){var e=n.current.next();e.done?s(null):s(e.value)}]},G=t(7),R=t(1);function z(e){return{maxQuestions:e.maxQuestions,correct:0,incorrect:0,unanswered:0,hasTimeBonus:!0,hasRevealBonus:!0,isGameOver:!1}}var N=function(e,n){var t;switch(n.type){case"correct":case"incorrect":case"unanswered":return Object(R.a)(Object(R.a)({},e),{},(t={},Object(G.a)(t,n.type,e[n.type]+1),Object(G.a)(t,"isGameOver",function(e){return e.correct+e.incorrect+e.unanswered}(e)+1>=e.maxQuestions),t));case"useTimeBonus":return Object(R.a)(Object(R.a)({},e),{},{hasTimeBonus:!1});case"useRevealBonus":return Object(R.a)(Object(R.a)({},e),{},{hasRevealBonus:!1});case"endGame":return Object(R.a)(Object(R.a)({},e),{},{isGameOver:!0});default:throw new Error("[statReducer] unknown action: ".concat(n.type))}},F=t(16),I=t.n(F),L=t(4),Q=t.n(L),D=t(17),E=t.n(D);var A=function(e){var n=e.max,t=e.value;return Object(b.jsxs)("div",{className:E.a.container,children:[Object(b.jsx)("span",{children:t}),Object(b.jsx)("progress",{max:n,value:t})]})};var U=function(e){var n=e.questions,t=Object(r.useReducer)(N,{maxQuestions:10},z),c=Object(i.a)(t,2),a=c[0],s=c[1],o=T(n),u=Object(i.a)(o,2),j=u[0],d=u[1],O=C(15,(function(){s({type:"unanswered"}),d(),m(15)})),f=O.timeLeft,m=O.resetTimer,v=O.stopTimer;return a.isGameOver&&v(),j||a.isGameOver||s({type:"endGame"}),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:I.a["quiz-game"],children:[Object(b.jsx)("header",{children:"Quiz Time!"}),Object(b.jsxs)(q,{children:[Object(b.jsx)(S,{show:!a.isGameOver,children:Object(b.jsxs)(B,{children:[Object(b.jsx)(_,{question:j,onAnswer:function(e){s(e?{type:"correct"}:{type:"incorrect"}),d(),m(15)}}),Object(b.jsx)(A,{max:15,value:f}),Object(b.jsx)(h,{revealBonusDisabled:!a.hasRevealBonus,timeBonusDisabled:!a.hasTimeBonus,onRevealBonus:function(){s({type:"useRevealBonus"});var e=j.answers.filter((function(e){return!e.correct}));(e=Q.a.shuffle(e))[0].visible=!1,e[1].visible=!1},onTimeBonus:function(){s({type:"useTimeBonus"}),m(f+10)}})]})}),Object(b.jsx)(S,{show:a.isGameOver,children:Object(b.jsx)(l,{correct:a.correct,incorrect:a.incorrect,unanswered:a.unanswered})})]})]})})},P=t(5),J=t.n(P),X=t(6),Y={answer:"",correct:!1,visible:!0};function M(){return(M=Object(X.a)(J.a.mark((function e(){var n,t;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=function(e){var n={question:"".concat(e," + ").concat(e),answers:[Object(R.a)(Object(R.a)({},Y),{},{answer:(2*e).toString(),correct:!0}),Object(R.a)(Object(R.a)({},Y),{},{answer:(1*e).toString()}),Object(R.a)(Object(R.a)({},Y),{},{answer:(3*e).toString()}),Object(R.a)(Object(R.a)({},Y),{},{answer:(4*e).toString()})]};return Object(R.a)(Object(R.a)({},n),{},{answers:Q.a.shuffle(n.answers)})},t=Q.a.range(1,20).map(n),e.abrupt("return",Q.a.shuffle(t));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Z=function(){return M.apply(this,arguments)},K=["basenji","beagle","bluetick","borzoi","bouvier","boxer","brabancon","briard","husky","keeshond","kelpie","komondor","kuvasz","labradoodle","labrador","leonberg","lhasa","malamute","malinois","maltese","rottweiler","saluki","samoyed","schipperke"];K.random=function(){return this[Object(L.random)(this.length-1)]};var V={answer:"",correct:!1,visible:!0};function H(){return(H=Object(X.a)(J.a.mark((function e(){var n,t,r,c,a,s,i;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],t=0;case 2:if(!(t<=15)){e.next=16;break}return e.next=5,fetch("https://dog.ceo/api/breeds/image/random");case 5:return r=e.sent,e.next=8,r.json();case 8:c=e.sent,a=new URL(c.message),s=a.pathname.split("/")[2],i={question:a,answers:[Object(R.a)(Object(R.a)({},V),{},{answer:s,correct:!0}),Object(R.a)(Object(R.a)({},V),{},{answer:K.random()}),Object(R.a)(Object(R.a)({},V),{},{answer:K.random()}),Object(R.a)(Object(R.a)({},V),{},{answer:K.random()})]},n.push(Object(R.a)(Object(R.a)({},i),{},{answers:Q.a.shuffle(i.answers)}));case 13:t++,e.next=2;break;case 16:return e.abrupt("return",n);case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var W,$=function(){return H.apply(this,arguments)},ee="https://quizapi.io/api/v1/questions",ne=null!==(W="wZJYOESyaEiQ6SGPwrY3m45gPEnAG1xXUnzGvI5J")?W:"";function te(e){var n=e.category?"[".concat(e.category,"] "):"",t={question:"".concat(n).concat(e.question),answers:[]};for(var r in e.answers)if(e.answers[r]){var c={answer:e.answers[r],correct:e.correct_answer===r,visible:!0};t.answers.push(c)}return t}function re(){return(re=Object(X.a)(J.a.mark((function e(){var n,t,r;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={"X-Api-Key":ne},e.next=3,fetch(ee,{headers:n}).then((function(e){return e.json()}));case 3:return t=e.sent,r=t.filter((function(e){return"false"===e.multiple_correct_answers})).map(te),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ce=function(){return re.apply(this,arguments)},ae=t(18),se=t.n(ae);console.clear();var ie=function(){var e=Object(r.useState)([]),n=Object(i.a)(e,2),t=n[0],c=n[1],a=Object(r.useState)(!1),s=Object(i.a)(a,2),o=s[0],u=s[1],l=t.length>0;return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(q,{children:[Object(b.jsx)(S,{show:l,children:Object(b.jsx)(U,{questions:t})}),Object(b.jsx)(S,{show:!l,children:Object(b.jsxs)("section",{className:se.a["app-menu"],children:[Object(b.jsx)("header",{children:"Choose a game:"}),Object(b.jsx)("button",{disabled:o,onClick:function(){u(!0),Z().then(c)},children:"Dummy math quiz"}),Object(b.jsx)("button",{disabled:o,onClick:function(){u(!0),$().then(c)},children:"Can you name a dog?"}),Object(b.jsx)("button",{disabled:o,onClick:function(){u(!0),ce().then(c)},children:"Tech quiz"})]})})]})})},oe=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,29)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,a=n.getLCP,s=n.getTTFB;t(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(ie,{})}),document.getElementById("root")),oe()}],[[28,1,2]]]);
//# sourceMappingURL=main.fbf45eeb.chunk.js.map
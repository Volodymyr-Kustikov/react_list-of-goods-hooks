(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{11:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var s=n(5),c=n.n(s),o=n(4),i=n(1),r=(n(10),n(11),n(2)),a=n.n(r),l=n(0),u="alphabet",b="length",h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];var d=function(){var t=Object(i.useState)(""),e=Object(o.a)(t,2),n=e[0],s=e[1],c=Object(i.useState)(!1),r=Object(o.a)(c,2),d=r[0],j=r[1],g=function(t){var e=t.sortField,n=t.isReversed,s=[].concat(h);return e&&s.sort((function(t,n){switch(e){case u:return t.localeCompare(n);case b:return t.length-n.length;default:return 0}})),n?s.reverse():s}({sortField:n,isReversed:d});return Object(l.jsxs)("div",{className:"section content",children:[Object(l.jsxs)("div",{className:"buttons",children:[Object(l.jsx)("button",{type:"button",className:a()("button","is-info",{"is-light":n!==u}),onClick:function(){return s(u)},children:"Sort alphabetically"}),Object(l.jsx)("button",{type:"button",className:a()("button","is-success",{"is-light":n!==b}),onClick:function(){return s(b)},children:"Sort by length"}),Object(l.jsx)("button",{type:"button",className:a()("button","is-warning",{"is-light":!d}),onClick:function(){j((function(t){return!t}))},children:"Reverse"}),(n||d)&&Object(l.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){s(""),j(!1)},children:"Reset"})]}),Object(l.jsx)("ul",{children:g.map((function(t){return Object(l.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};c.a.render(Object(l.jsx)(d,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.a9703f24.chunk.js.map
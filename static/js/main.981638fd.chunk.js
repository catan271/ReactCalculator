(this["webpackJsonpreact-calculator"]=this["webpackJsonpreact-calculator"]||[]).push([[0],{7:function(e,t,c){"use strict";c.r(t);var n=c(6),r=c(1),d=c(2),a=c.n(d),i=(c(9),c(4)),s=c.n(i),l=c(5),u=c.n(l),j=c(0),b=[["number","0","zero",96],["number","1","one",97],["number","2","two",98],["number","3","three",99],["number","4","four",100],["number","5","five",101],["number","6","six",102],["number","7","seven",103],["number","8","eight",104],["number","9","nine",105],["dot",".","decimal",110],["operator","+","add",107],["operator","-","subtract",109],["operator","*","multiply",106],["operator","/","divide",111],["clear","AC","clear",32],["delete","DEL","delete",8],["equals","=","equals",13]],x={calculated:!1,current:"0",dotted:!1,display:"0"},o=function(e,t){switch(t.type){case"number":return e.calculated&&(e=Object(r.a)({},x)),"0"===t.value&&"0"===e.current?e:"0"===e.current?Object(r.a)(Object(r.a)({},e),{},{current:t.value,display:e.display.slice(0,-1)+t.value}):e.current.length<12?Object(r.a)(Object(r.a)({},e),{},{current:e.current+t.value,display:e.display+t.value}):e;case"delete":return e.calculated&&(e=Object(r.a)({},x)),Object(r.a)(Object(r.a)({},e),{},{current:e.current.slice(0,-1),display:e.display.slice(0,-1)});case"dot":return e.calculated&&(e=Object(r.a)({},x)),e.dotted?e:Object(r.a)(Object(r.a)({},e),{},{current:e.current+t.value,display:e.display+t.value,dotted:!0});case"clear":return Object(r.a)({},x);case"operator":return e.calculated&&(e.display=e.current,e.calculated=!1),/\W{2}/.test(e.display.slice(-2))&&(e.display=e.display.slice(0,-2)),"-"!==t.value&&/[+*/-]/.test(e.display.slice(-1))&&(e.display=e.display.slice(0,-1)),Object(r.a)(Object(r.a)({},e),{},{current:"",display:e.display+t.value,dotted:!1});case"equals":var c=s.a.eval(e.display);return c<Math.pow(10,20)&&(c=Number.parseFloat(c.toFixed(10))),Object(r.a)(Object(r.a)({},e),{},{current:""+c,display:e.display+"="+c,calculated:!0});default:return e}},O=a.a.createContext(),p=a.a.createContext();function v(e){var t=e.children,c=Object(d.useReducer)(o,Object(r.a)({},x)),a=Object(n.a)(c,2),i=a[0],s=a[1];return Object(j.jsx)(O.Provider,{value:i,children:Object(j.jsx)(p.Provider,{value:s,children:t})})}function y(e){var t=Object(d.useContext)(p);function c(t){t.keyCode===b[e.index][3]&&n()}function n(){t({type:b[e.index][0],value:b[e.index][1]})}return Object(d.useEffect)((function(){return document.addEventListener("keydown",c),function(){document.removeEventListener("keydown",c)}})),Object(j.jsx)("button",{id:b[e.index][2],onClick:n,children:b[e.index][1]})}function h(){var e=Object(d.useContext)(O);return Object(j.jsxs)("div",{id:"screen",children:[Object(j.jsx)("div",{id:"formula",children:e.display}),Object(j.jsx)("div",{id:"display",children:e.current})]})}function m(){return Object(j.jsxs)("div",{id:"calculator",children:["CATAN'S CALCULATOR WITHOUT REDUX",Object(j.jsxs)(v,{children:[Object(j.jsx)(h,{}),Object(j.jsxs)("div",{id:"buttons",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)(y,{index:15}),Object(j.jsx)(y,{index:16}),Object(j.jsx)(y,{index:17})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)(y,{index:7}),Object(j.jsx)(y,{index:8}),Object(j.jsx)(y,{index:9}),Object(j.jsx)(y,{index:11})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)(y,{index:4}),Object(j.jsx)(y,{index:5}),Object(j.jsx)(y,{index:6}),Object(j.jsx)(y,{index:12})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)(y,{index:1}),Object(j.jsx)(y,{index:2}),Object(j.jsx)(y,{index:3}),Object(j.jsx)(y,{index:13})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)(y,{index:0}),Object(j.jsx)(y,{index:10}),Object(j.jsx)(y,{index:14})]})]})]})]})}u.a.render(Object(j.jsx)(m,{}),document.getElementById("root"))},9:function(e,t,c){}},[[7,1,2]]]);
//# sourceMappingURL=main.981638fd.chunk.js.map
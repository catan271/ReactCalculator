(this["webpackJsonpreact-calculator"]=this["webpackJsonpreact-calculator"]||[]).push([[0],{14:function(e,t,n){"use strict";n.r(t);var c=n(4),s=n(5),i=n(2),r=n(7),a=n(6),d=n(0),l=n.n(d),u=n(3),j=n.n(u),b=(n(19),n(13)),o=n(11),O=n(12),p=n.n(O),x=n(1),h=[["number","0","zero",96],["number","1","one",97],["number","2","two",98],["number","3","three",99],["number","4","four",100],["number","5","five",101],["number","6","six",102],["number","7","seven",103],["number","8","eight",104],["number","9","nine",105],["dot",".","decimal",110],["operator","+","add",107],["operator","-","subtract",109],["operator","*","multiply",106],["operator","/","divide",111],["clear","AC","clear",32],["delete","DEL","delete",8],["equals","=","equals",13]],v={calculated:!1,current:"0",dotted:!1,display:"0"},y=function(e){return{type:h[e][0],value:h[e][1]}},f=Object(b.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object.assign({},v),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"number":return e.calculated&&(e=Object.assign({},v)),"0"==t.value&&"0"==e.current?e:"0"==e.current?Object.assign({},e,{current:t.value,display:e.display.slice(0,-1)+t.value}):e.current.length<12?Object.assign({},e,{current:e.current+t.value,display:e.display+t.value}):e;case"delete":return e.calculated&&(e=Object.assign({},v)),Object.assign({},e,{current:e.current.slice(0,-1),display:e.display.slice(0,-1)});case"dot":return e.calculated&&(e=Object.assign({},v)),e.dotted?e:Object.assign({},e,{current:e.current+t.value,display:e.display+t.value,dotted:!0});case"clear":return Object.assign({},v);case"operator":return e.calculated&&(e.display=e.current,e.calculated=!1),/\W{2}/.test(e.display.slice(-2))&&(e.display=e.display.slice(0,-2)),"-"!=t.value&&/[+*/-]/.test(e.display.slice(-1))&&(e.display=e.display.slice(0,-1)),Object.assign({},e,{current:"",display:e.display+t.value,dotted:!1});case"equals":var n=p.a.eval(e.display);return n<Math.pow(10,20)&&(n=Number.parseFloat(n.toFixed(10))),Object.assign({},e,{current:""+n,display:e.display+"="+n,calculated:!0});default:return e}})),m=function(e){Object(r.a)(n,e);var t=Object(a.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).handleClick=s.handleClick.bind(Object(i.a)(s)),s.handleKeyPress=s.handleKeyPress.bind(Object(i.a)(s)),s}return Object(s.a)(n,[{key:"handleClick",value:function(){f.dispatch(y(this.props.index))}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyPress)}},{key:"handleKeyPress",value:function(e){e.keyCode==h[this.props.index][3]&&this.handleClick()}},{key:"render",value:function(){return Object(x.jsx)("button",{id:h[this.props.index][2],onClick:this.handleClick,children:h[this.props.index][1]})}}]),n}(l.a.Component),g=function(e){Object(r.a)(n,e);var t=Object(a.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("div",{id:"screen",children:[Object(x.jsx)("div",{id:"formula",children:this.props.values.display}),Object(x.jsx)("div",{id:"display",children:this.props.values.current})]})}}]),n}(l.a.Component),k=Object(o.b)((function(e){return{values:Object.assign({},e)}}),(function(e){return{send:function(t){e(y(t))}}}))(g),C=function(e){Object(r.a)(n,e);var t=Object(a.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("div",{id:"calculator",children:["CATAN'S CALCULATOR",Object(x.jsx)(o.a,{store:f,children:Object(x.jsx)(k,{})}),Object(x.jsxs)("div",{id:"buttons",children:[Object(x.jsxs)("div",{children:[Object(x.jsx)(m,{index:15}),Object(x.jsx)(m,{index:16}),Object(x.jsx)(m,{index:17})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)(m,{index:7}),Object(x.jsx)(m,{index:8}),Object(x.jsx)(m,{index:9}),Object(x.jsx)(m,{index:11})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)(m,{index:4}),Object(x.jsx)(m,{index:5}),Object(x.jsx)(m,{index:6}),Object(x.jsx)(m,{index:12})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)(m,{index:1}),Object(x.jsx)(m,{index:2}),Object(x.jsx)(m,{index:3}),Object(x.jsx)(m,{index:13})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)(m,{index:0}),Object(x.jsx)(m,{index:10}),Object(x.jsx)(m,{index:14})]})]})]})}}]),n}(l.a.Component);j.a.render(Object(x.jsx)(C,{}),document.getElementById("root"))},19:function(e,t,n){}},[[14,1,2]]]);
//# sourceMappingURL=main.d6797519.chunk.js.map
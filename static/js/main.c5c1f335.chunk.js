(this["webpackJsonprandom-quote-machine"]=this["webpackJsonprandom-quote-machine"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),o=n(5),u=n.n(o),i=n(2),s=n(4),a=n.n(s),j=n(0),b=r.a.createContext();function d(t){var e=t.children,n=Object(c.useState)(""),r=Object(i.a)(n,2),o=r[0],u=r[1],s=Object(c.useState)(""),d=Object(i.a)(s,2),l=d[0],O=d[1],h=Object(c.useState)(!1),x=Object(i.a)(h,2),f=x[0],m=x[1],p=Object(c.useState)(""),v=Object(i.a)(p,2),q=v[0],C=v[1],y=Object(c.useRef)(),w=Object(c.useRef)(),k=document.querySelector(":root");return Object(c.useEffect)((function(){fetch("https://api.quotable.io/random").then((function(t){return t.json()})).then((function(t){u(t.content),O(t.author),C(a()({luminosity:"dark"})),k.style.setProperty("--primary",q),y.current=o,w.current=l}))}),[f]),Object(j.jsx)(b.Provider,{value:{quote:o,author:l,previousQuote:function(){var t=y.current,e=w.current;u(t),O(e),C(a()({luminosity:"dark"})),k.style.setProperty("--primary",q)},setClick:m},children:e})}n(12);var l=function(){var t=Object(c.useContext)(b).quote,e=Object(c.useContext)(b).author;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("p",{id:"text",children:[Object(j.jsx)("i",{className:"ri-double-quotes-l"}),t]},Math.random()),Object(j.jsxs)("p",{id:"author",children:["- ",e]},Math.random())]})};var O=function(){var t=Object(c.useContext)(b).previousQuote,e=Object(c.useContext)(b).setClick,n=Object(c.useContext)(b).quote,r=Object(c.useContext)(b).author,o="https://twitter.com/intent/tweet?text=".concat(encodeURIComponent('"'.concat(n,'" - ').concat(r)));return Object(j.jsxs)("div",{id:"buttons-bar",children:[Object(j.jsx)("div",{className:"buttons-bar-left",children:Object(j.jsx)("a",{href:o,id:"tweet-quote",children:Object(j.jsx)("i",{className:"ri-twitter-fill"})})}),Object(j.jsxs)("div",{className:"buttons-bar-right",children:[Object(j.jsx)("button",{id:"prev-quote",onClick:function(){return t()},children:"Previous Quote"}),Object(j.jsx)("button",{id:"new-quote",onClick:function(){return e((function(t){return!t}))},children:"New Quote"})]})]})};var h=function(){return Object(j.jsx)("div",{id:"wrapper",children:Object(j.jsxs)("div",{id:"quote-box",children:[Object(j.jsx)(l,{}),Object(j.jsx)(O,{})]})})};u.a.render(Object(j.jsx)(d,{children:Object(j.jsx)(h,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.c5c1f335.chunk.js.map
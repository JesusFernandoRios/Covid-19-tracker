(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{100:function(e,t,c){},102:function(e,t,c){},103:function(e,t,c){},107:function(e,t,c){},108:function(e,t,c){},206:function(e,t,c){"use strict";c.r(t);var n=c(3),a=c(0),r=c.n(a),s=c(10),o=c.n(s),i=(c(100),c(25)),l=c.n(i),u=c(36),d=c(16),j=(c(102),c(238)),f=c(239),h=c(240),b=c(232),v=c(236),O=c(88),p=c(237);c(103);function x(e){var t=e.title,c=e.cases,a=e.active,r=e.total,s=Object(O.a)(e,["title","cases","active","total"]);return Object(n.jsx)(b.a,{onClick:s.onClick,className:"infoBox ".concat(a&&"infoBox--selected"),children:Object(n.jsxs)(v.a,{children:[Object(n.jsx)(p.a,{className:"infobox__title",color:"textSecondary",children:t}),Object(n.jsx)("h2",{className:"infobox__cases",children:c}),Object(n.jsxs)(p.a,{className:"infobox__total",color:"textSecondary",children:[r," Total"]})]})})}c(107);var m=c(243),y=c(244),g=c(87),C=c(18),N=c.n(C),k=c(241),w=c(242),_={cases:{hex:"#CC1034",rgb:"rgb(204, 16, 52)",half_op:"rgba(204, 16, 52, 0.5)",multiplier:300},recovered:{hex:"#7dd71d",rgb:"rgb(125, 215, 29)",half_op:"rgba(125, 215, 29, 0.5)",multiplier:300},deaths:{hex:"#fb4443",rgb:"rgb(251, 68, 67)",half_op:"rgba(251, 68, 67, 0.5)",multiplier:1e3}},S=function(e){var t=Object(g.a)(e);return t.sort((function(e,t){return e.cases>t.cases?-1:1})),t},I=function(e){return e?"+".concat(N()(e).format("0.0a")):"+0"},T=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases";return e.map((function(e){return Object(n.jsx)(k.a,{center:[e.countryInfo.lat,e.countryInfo.long],color:_[t].hex,fillColor:_[t].hex,fillOpacity:.4,radius:Math.sqrt(e[t])*_[t].multiplier,children:Object(n.jsx)(w.a,{children:Object(n.jsxs)("div",{className:"info-container",children:[Object(n.jsx)("div",{className:"info-flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),Object(n.jsx)("div",{className:"info-name",children:e.country}),Object(n.jsxs)("div",{className:"info-confirmed",children:["Cases: ",N()(e.cases).format("0,0")]}),Object(n.jsxs)("div",{className:"info-recovered",children:["Recovered: ",N()(e.recovered).format("0,0")]}),Object(n.jsxs)("div",{className:"info-deaths",children:["Deaths: ",N()(e.deaths).format("0,0")]})]})})})}))};var D=function(e){var t=e.casesType,c=e.countries,a=e.center,r=e.zoom;return Object(n.jsx)("div",{className:"map",children:Object(n.jsxs)(m.a,{center:a,zoom:r,children:[Object(n.jsx)(y.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),T(c,t)]})})};c(108);var M=function(e){var t=e.countries;return Object(n.jsx)("div",{className:"table",children:t.map((function(e){var t=e.country,c=e.cases;return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:t}),Object(n.jsx)("td",{children:Object(n.jsx)("strong",{children:N()(c).format("0,0")})})]})}))})},z=c(86),E={legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return N()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,c){return N()(e).format("0a")}}}]}},R=function(e,t){var c,n=[];for(var a in e.cases){if(c){var r={x:a,y:e[t][a]-c};n.push(r)}c=e[t][a]}return n};var A=function(e){var t=e.casesType,c=Object(a.useState)({}),r=Object(d.a)(c,2),s=r[0],o=r[1];return Object(a.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120").then((function(e){return e.json()})).then((function(e){var c=R(e,t);o(c),console.log(c)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(n.jsx)("div",{children:(null===s||void 0===s?void 0:s.length)>0&&Object(n.jsx)(z.Line,{data:{datasets:[{backgroundColor:"rgba(204, 16, 52, 0.5)",borderColor:"#CC1034",data:s}]},options:E})})};c(205);var B=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),c=t[0],r=t[1],s=Object(a.useState)("worldwide"),o=Object(d.a)(s,2),i=o[0],O=o[1],p=Object(a.useState)({}),m=Object(d.a)(p,2),y=m[0],g=m[1],C=Object(a.useState)([]),N=Object(d.a)(C,2),k=N[0],w=N[1],_=Object(a.useState)({lat:34.80746,lng:-40.4796}),T=Object(d.a)(_,2),z=T[0],E=T[1],R=Object(a.useState)(3),B=Object(d.a)(R,2),L=B[0],J=B[1],W=Object(a.useState)([]),Y=Object(d.a)(W,2),q=Y[0],F=Y[1],G=Object(a.useState)("cases"),H=Object(d.a)(G,2),K=H[0],P=H[1];Object(a.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){return g(e)}))}),[]),Object(a.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}})),c=S(e);w(c),F(e),r(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var Q=function(){var e=Object(u.a)(l.a.mark((function e(t){var c,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.target.value,n="worldwide"===c?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(c),e.next=4,fetch(n).then((function(e){return e.json()})).then((function(e){O(c),g(e),E([e.countryInfo.lat,e.countryInfo.long]),J(5)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"app",children:[Object(n.jsxs)("div",{className:"leftside__app",children:[Object(n.jsxs)("div",{className:"app__header",children:[Object(n.jsx)("h1",{children:"Covid-19 Tracker"}),Object(n.jsx)(j.a,{className:"app__dropdown",children:Object(n.jsxs)(f.a,{variant:"outlined",value:i,onChange:Q,children:[Object(n.jsx)(h.a,{value:"worldwide",children:"Worldwide"}),c.map((function(e){return Object(n.jsx)(h.a,{value:e.value,children:e.name})}))]})})]}),Object(n.jsxs)("div",{className:"stats",children:[Object(n.jsx)(x,{active:"cases"===K,onClick:function(e){return P("cases")},cases:I(y.todayCases),total:I(y.cases),title:"Coronavirus Cases"}),Object(n.jsx)(x,{active:"recovered"===K,onClick:function(e){return P("recovered")},cases:I(y.todayRecovered),total:I(y.recovered),title:"Recovered"}),Object(n.jsx)(x,{active:"deaths"===K,onClick:function(e){return P("deaths")},cases:I(y.todayDeaths),total:I(y.deaths),title:"Deaths"})]}),Object(n.jsx)(D,{casesType:K,countries:q,center:z,zoom:L})]}),Object(n.jsx)("div",{className:"rightside__app",children:Object(n.jsx)(b.a,{children:Object(n.jsxs)(v.a,{children:[Object(n.jsx)("h3",{children:"Live Cases by Country"}),Object(n.jsx)(M,{countries:k}),Object(n.jsxs)("h3",{children:["Worldwide New ",K]}),Object(n.jsx)(A,{casesType:K})]})})})]})};o.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(B,{})}),document.getElementById("root"))}},[[206,1,2]]]);
//# sourceMappingURL=main.a8d18f2d.chunk.js.map
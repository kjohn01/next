(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{O40h:function(n,t,e){"use strict";e.d(t,"a",function(){return u});var r=e("eVuF"),o=e.n(r);function a(n,t,e,r,a,u,c){try{var s=n[u](c),i=s.value}catch(f){return void e(f)}s.done?t(i):o.a.resolve(i).then(r,a)}function u(n){return function(){var t=this,e=arguments;return new o.a(function(r,o){var u=n.apply(t,e);function c(n){a(u,r,o,c,s,"next",n)}function s(n){a(u,r,o,c,s,"throw",n)}c(void 0)})}}},RNiq:function(n,t,e){"use strict";e.r(t);var r=e("ln6h"),o=e.n(r),a=e("O40h"),u=e("q1tI"),c=e.n(u),s=e("3Hq7"),i=e("YFqc"),f=e.n(i),h=e("vcXL"),l=e.n(h),w=c.a.createElement,p=function(n){return w(s.a,null,w("h1",null,"Batman TV Shows"),w("ul",null,n.shows.map(function(n){return w("li",{key:n.id},w(f.a,{href:"/show/[id]",as:"/show/".concat(n.id)},w("a",null,n.name)))})))};p.getInitialProps=Object(a.a)(o.a.mark(function n(){var t,e;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l()("https://api.tvmaze.com/search/shows?q=batman");case 2:return t=n.sent,n.next=5,t.json();case 5:return e=n.sent,console.log("Show data fetched. Count: ".concat(e.length)),n.abrupt("return",{shows:e.map(function(n){return n.show})});case 8:case"end":return n.stop()}},n)})),t.default=p},vcXL:function(n,t,e){"use strict";var r=self.fetch.bind(self);n.exports=r,n.exports.default=n.exports},vlRD:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e("RNiq")}])}},[["vlRD",0,1]]]);
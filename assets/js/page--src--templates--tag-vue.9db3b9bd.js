(window.webpackJsonp=window.webpackJsonp||[]).push([[8,7],{"0qZF":function(t,a,e){},"1aP3":function(t,a,e){"use strict";e("0qZF")},"2qYH":function(t,a,e){"use strict";e.r(a);var i=e("H2xY"),s=e("xtqI"),n=e("Wsvf"),l={components:{PostList:i.a,Article:s.default,Pager:n.a},metaInfo:function(){return{title:"Tag: ".concat(this.$page.tag.title)}}},r=(e("Bfi9"),e("KHd+")),o=null,c=Object(r.a)(l,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("h1",[t._v("Posts tagged: "+t._s(t.$page.tag.title))]),e("hr",{staticClass:"my-5"}),e("ul",{staticClass:"tags flex mt-10 items-center"},[e("span",{staticClass:"mr-4"},[t._v("Tags:")]),e("li",{},[e("g-link",{staticClass:"tag py-4",attrs:{to:"/blog"}},[t._v("\n        All articles\n      ")])],1),t._l(t.$page.tags.edges,(function(a){return e("li",{key:a.node.id},[e("g-link",{staticClass:"tag",attrs:{to:a.node.path}},[t._v("\n        "+t._s(a.node.title)+"\n      ")])],1)}))],2),e("div",{staticClass:"content mt-10"},[e("post-list",{attrs:{posts:t.$page.tag.belongsTo.edges}})],1)])}),[],!1,null,"5853a1fd",null);"function"==typeof o&&o(c);a.default=c.exports},Bfi9:function(t,a,e){"use strict";e("k6nE")},H2xY:function(t,a,e){"use strict";var i={props:{posts:{type:Array,default:null,required:!0}}},s=e("KHd+"),n=Object(s.a)(i,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ul",t._l(t.posts,(function(a){return e("li",{key:a.node.id,staticClass:"mb-20"},[e("article",{},[e("h2",{staticClass:"text-4xl mb-4"},[e("g-link",{staticClass:"underline",attrs:{to:"/blog/articles/"+a.node.id}},[t._v(" "+t._s(a.node.title))])],1),e("p",[t._v(t._s(a.node.summary)+" ..."),e("g-link",{staticClass:"underline",attrs:{to:"/blog/articles/"+a.node.id}},[t._v("read more")])],1),e("div",{staticClass:"mt-4 flex items-center justify-between"},[e("ul",{},[e("li",t._l(a.node.tags,(function(a){return e("g-link",{key:a.id,staticClass:"tag",attrs:{to:a.path}},[t._v("\n              #"+t._s(a.title)+"\n            ")])})),1)]),e("div",{staticClass:"text-sm"},[t._v("\n          Published on\n          "),e("time",{staticClass:" mr-5"},[t._v(" "+t._s(a.node.published))])])])])])})),0)}),[],!1,null,"91c1df1e",null);a.a=n.exports},Wsvf:function(t,a,e){"use strict";e.d(a,"a",(function(){return l}));e("Kw5r");var i=e("DOVJ"),s=(e("Y6W1"),e("ma9I"),e("2B1R"),e("qePV"),e("rB9j"),e("UxlC"),e("VTBJ")),n=e("fVfk"),l={functional:!0,props:{info:{type:Object,required:!0},showLinks:{type:Boolean,default:!0},showNavigation:{type:Boolean,default:!0},firstLabel:{type:String,default:"«"},firstClass:{type:String,default:""},prevLabel:{type:String,default:"‹"},prevClass:{type:String,default:""},nextLabel:{type:String,default:"›"},nextClass:{type:String,default:""},lastLabel:{type:String,default:"»"},lastClass:{type:String,default:""},navClass:{type:String,default:""},linkClass:{type:String,default:""},range:{type:Number,default:5},activeLinkClass:{type:String,default:void 0},exactActiveLinkClass:{type:String,default:void 0},ariaLabel:{type:String,default:"Pagination Navigation"},ariaLinkLabel:{type:String,default:"Go to page %n"},ariaFirstLabel:{type:String,default:"Go to first page"},ariaCurrentLabel:{type:String,default:"Current page. Page %n"},ariaPrevLabel:{type:String,default:"Go to previous page. Page %n"},ariaNextLabel:{type:String,default:"Go to next page. Page %n"},ariaLastLabel:{type:String,default:"Go to last page. Page %n"}},render:function(t,a){var e=a.props,l=a.data,o=a.parent,c=e.info,u=e.showLinks,g=e.showNavigation,d=e.ariaLabel,f=function(t,a){var e=t.currentPage,i=void 0===e?1:e,s=t.totalPages,n=void 0===s?1:s,l=Math.ceil(a/2),r=Math.floor(i-l),o=Math.floor(i+l);n<=a?(r=0,o=n):i<=l?(r=0,o=a):i+l>=n&&(r=n-a,o=n);for(var c=[],u=r+1;u<=o;u++)c.push(u);return{current:i,total:n,start:r,end:o,pages:c}}(c,e.range),p=f.current,v=f.total,b=f.pages,C=f.start,h=f.end,L=Object(n.d)(o.$route),m=function(a){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";a===p&&(l=e.ariaCurrentLabel);var c={to:r(L,a),exact:!0};return e.activeLinkClass&&(c.activeClass=e.activeLinkClass),e.exactActiveLinkClass&&(c.exactActiveClass=e.exactActiveLinkClass),t(i.a,{class:[e.linkClass,o],attrs:Object(s.a)(Object(s.a)({},c),{},{"aria-label":l.replace("%n",a),"aria-current":p===a})},[n])},y=u?b.map((function(t){return m(t,t,e.ariaLinkLabel)})):[];if(g){var _=e.firstLabel,k=e.prevLabel,x=e.nextLabel,S=e.lastLabel,P=e.ariaFirstLabel,w=e.ariaPrevLabel,$=e.ariaNextLabel,j=e.ariaLastLabel,O=e.firstClass,N=e.prevClass,q=e.nextClass,H=e.lastClass,A=e.navClass;p>1&&y.unshift(m(p-1,k,w,[N,A])),C>0&&y.unshift(m(1,_,P,[O,A])),p<v&&y.push(m(p+1,x,$,[q,A])),h<v&&y.push(m(v,S,j,[H,A]))}return y.length<2?null:t("nav",Object(s.a)(Object(s.a)({},l),{},{attrs:{role:"navigation","aria-label":d}}),y)}};function r(t,a){var e=/\/$/.test(t)?"/":"";return a>1?Object(n.g)(t)+"/".concat(a).concat(e):t}e("6NbQ")},k6nE:function(t,a,e){},xtqI:function(t,a,e){"use strict";e.r(a);var i={metaInfo:function(){return{title:this.$page.article.title}}},s=(e("1aP3"),e("KHd+")),n=null,l=Object(s.a)(i,(function(){var t=this.$createElement,a=this._self._c||t;return this.$page.article?a("article",{staticClass:"article"},[a("h1",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:this._s(this.$page.article.title)}}),a("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"markdown-body",domProps:{innerHTML:this._s(this.$page.article.content)}})]):this._e()}),[],!1,null,null,null);"function"==typeof n&&n(l);a.default=l.exports}}]);
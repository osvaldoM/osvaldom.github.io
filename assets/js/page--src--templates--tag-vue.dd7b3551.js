(window.webpackJsonp=window.webpackJsonp||[]).push([[8,7],{"0qZF":function(t,a,e){},"1aP3":function(t,a,e){"use strict";e("0qZF")},"2qYH":function(t,a,e){"use strict";e.r(a);e("ToJy");var n=e("H2xY"),s=e("xtqI"),i=e("Wsvf"),r={components:{PostList:n.a,Article:s.default,Pager:i.a},metaInfo:function(){return{title:"Tag: ".concat(this.$page.tag.title)}},computed:{tags:function(){var t=this.$page.tag;return this.$page.tags.edges.sort((function(a,e){return a.node.id===t.id?-1:e.node.id===t.id?1:0}))}}},l=(e("f4UJ"),e("KHd+")),o=null,u=Object(l.a)(r,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("h1",[t._v("Posts tagged: "+t._s(t.$page.tag.title))]),e("hr",{staticClass:"my-5"}),e("ul",{staticClass:"tags flex mt-10 items-center overflow-x-auto"},[e("span",{staticClass:"mr-4"},[t._v("Tags:")]),e("li",{},[e("g-link",{staticClass:"post-tag py-4",attrs:{to:"/blog"}},[t._v("\n        All articles\n      ")])],1),t._l(t.tags,(function(a){return e("li",{key:a.node.id},[e("g-link",{staticClass:"post-tag",attrs:{to:a.node.path}},[t._v("\n        "+t._s(a.node.title)+"\n      ")])],1)}))],2),e("div",{staticClass:"content mt-10"},[e("post-list",{attrs:{posts:t.$page.tag.belongsTo.edges}})],1)])}),[],!1,null,"1b31ebb2",null);"function"==typeof o&&o(u);a.default=u.exports},H2xY:function(t,a,e){"use strict";var n={props:{posts:{type:Array,default:null,required:!0}}},s=e("KHd+"),i=Object(s.a)(n,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ul",t._l(t.posts,(function(a){return e("li",{key:a.node.id,staticClass:"mb-20"},[e("article",{},[e("h2",{staticClass:"text-4xl mb-4"},[e("g-link",{staticClass:"underline",attrs:{to:"/blog/articles/"+a.node.id}},[t._v(" "+t._s(a.node.title))])],1),e("p",[t._v(t._s(a.node.summary)+" ..."),e("g-link",{staticClass:"underline",attrs:{to:"/blog/articles/"+a.node.id}},[t._v("read more")])],1),e("div",{staticClass:"mt-4 flex items-center justify-between"},[e("ul",{},[e("li",t._l(a.node.tags,(function(a){return e("g-link",{key:a.id,staticClass:"tag",attrs:{to:a.path}},[t._v("\n              #"+t._s(a.title)+"\n            ")])})),1)]),e("div",{staticClass:"text-sm"},[t._v("\n          Published on\n          "),e("time",{staticClass:" mr-5"},[t._v(" "+t._s(a.node.published))])])])])])})),0)}),[],!1,null,"91c1df1e",null);a.a=i.exports},ToJy:function(t,a,e){"use strict";var n=e("I+eb"),s=e("HAuM"),i=e("ewvW"),r=e("0Dky"),l=e("pkCn"),o=[],u=o.sort,c=r((function(){o.sort(void 0)})),d=r((function(){o.sort(null)})),g=l("sort");n({target:"Array",proto:!0,forced:c||!d||!g},{sort:function(t){return void 0===t?u.call(i(this)):u.call(i(this),s(t))}})},Wsvf:function(t,a,e){"use strict";e.d(a,"a",(function(){return r}));e("Kw5r");var n=e("DOVJ"),s=(e("Y6W1"),e("ma9I"),e("2B1R"),e("qePV"),e("rB9j"),e("UxlC"),e("VTBJ")),i=e("fVfk"),r={functional:!0,props:{info:{type:Object,required:!0},showLinks:{type:Boolean,default:!0},showNavigation:{type:Boolean,default:!0},firstLabel:{type:String,default:"«"},firstClass:{type:String,default:""},prevLabel:{type:String,default:"‹"},prevClass:{type:String,default:""},nextLabel:{type:String,default:"›"},nextClass:{type:String,default:""},lastLabel:{type:String,default:"»"},lastClass:{type:String,default:""},navClass:{type:String,default:""},linkClass:{type:String,default:""},range:{type:Number,default:5},activeLinkClass:{type:String,default:void 0},exactActiveLinkClass:{type:String,default:void 0},ariaLabel:{type:String,default:"Pagination Navigation"},ariaLinkLabel:{type:String,default:"Go to page %n"},ariaFirstLabel:{type:String,default:"Go to first page"},ariaCurrentLabel:{type:String,default:"Current page. Page %n"},ariaPrevLabel:{type:String,default:"Go to previous page. Page %n"},ariaNextLabel:{type:String,default:"Go to next page. Page %n"},ariaLastLabel:{type:String,default:"Go to last page. Page %n"}},render:function(t,a){var e=a.props,r=a.data,o=a.parent,u=e.info,c=e.showLinks,d=e.showNavigation,g=e.ariaLabel,f=function(t,a){var e=t.currentPage,n=void 0===e?1:e,s=t.totalPages,i=void 0===s?1:s,r=Math.ceil(a/2),l=Math.floor(n-r),o=Math.floor(n+r);i<=a?(l=0,o=i):n<=r?(l=0,o=a):n+r>=i&&(l=i-a,o=i);for(var u=[],c=l+1;c<=o;c++)u.push(c);return{current:n,total:i,start:l,end:o,pages:u}}(u,e.range),p=f.current,v=f.total,b=f.pages,h=f.start,C=f.end,y=Object(i.d)(o.$route),L=function(a){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";a===p&&(r=e.ariaCurrentLabel);var u={to:l(y,a),exact:!0};return e.activeLinkClass&&(u.activeClass=e.activeLinkClass),e.exactActiveLinkClass&&(u.exactActiveClass=e.exactActiveLinkClass),t(n.a,{class:[e.linkClass,o],attrs:Object(s.a)(Object(s.a)({},u),{},{"aria-label":r.replace("%n",a),"aria-current":p===a})},[i])},m=c?b.map((function(t){return L(t,t,e.ariaLinkLabel)})):[];if(d){var _=e.firstLabel,k=e.prevLabel,x=e.nextLabel,S=e.lastLabel,P=e.ariaFirstLabel,w=e.ariaPrevLabel,$=e.ariaNextLabel,j=e.ariaLastLabel,N=e.firstClass,O=e.prevClass,A=e.nextClass,H=e.lastClass,q=e.navClass;p>1&&m.unshift(L(p-1,k,w,[O,q])),h>0&&m.unshift(L(1,_,P,[N,q])),p<v&&m.push(L(p+1,x,$,[A,q])),C<v&&m.push(L(v,S,j,[H,q]))}return m.length<2?null:t("nav",Object(s.a)(Object(s.a)({},r),{},{attrs:{role:"navigation","aria-label":g}}),m)}};function l(t,a){var e=/\/$/.test(t)?"/":"";return a>1?Object(i.g)(t)+"/".concat(a).concat(e):t}e("6NbQ")},f4UJ:function(t,a,e){"use strict";e("u22N")},u22N:function(t,a,e){},xtqI:function(t,a,e){"use strict";e.r(a);var n={metaInfo:function(){return{title:this.$page.article.title}}},s=(e("1aP3"),e("KHd+")),i=null,r=Object(s.a)(n,(function(){var t=this.$createElement,a=this._self._c||t;return this.$page.article?a("article",{staticClass:"article"},[a("h1",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:this._s(this.$page.article.title)}}),a("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"markdown-body",domProps:{innerHTML:this._s(this.$page.article.content)}})]):this._e()}),[],!1,null,null,null);"function"==typeof i&&i(r);a.default=r.exports}}]);
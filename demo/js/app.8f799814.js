(function(e){function t(t){for(var r,a,s=t[0],c=t[1],l=t[2],u=0,d=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);h&&h(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function s(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"3847eaad"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={about:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"a0377a9c"}[e]+".css",o=c.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===o))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===r||u===o)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],h.parentNode.removeChild(h),n(i)},h.href=o;var g=document.getElementsByTagName("head")[0];g.appendChild(h)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(h);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var h=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="demo/",c.oe=function(e){throw console.error(e),e};var l=this["webpackJsonp"]=this["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var h=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"3d23":function(e,t,n){},5531:function(e,t,n){},"5ae5":function(e,t,n){"use strict";var r=n("3d23"),a=n.n(r);a.a},"7c55":function(e,t,n){"use strict";var r=n("5531"),a=n.n(r);a.a},"7c9a":function(e,t,n){},"866b":function(e,t,n){"use strict";var r=n("7c9a"),a=n.n(r);a.a},cd49:function(e,t,n){"use strict";n.r(t);n("14d8"),n("8864"),n("0851"),n("4c32");var r=n("652e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],i=(n("7c55"),n("7a3f")),s={},c=Object(i["a"])(s,a,o,!1,null,null,null),l=c.exports,u=n("9ab9");r["default"].use(u["a"]);var d=new u["a"]({routes:[{path:"/",name:"root",component:{name:"routerPlaceholder",render:function(e){return e("router-view")}},redirect:"/cytoscape",children:[{path:"/cytoscape",name:"cytoscape",component:function(){return n.e("about").then(n.bind(null,"a9f5"))}},{path:"/vis",name:"vis",component:function(){return n.e("about").then(n.bind(null,"7397"))}},{path:"/g6",name:"g6",component:function(){return n.e("about").then(n.bind(null,"4876"))}}]}]}),h=n("f2e8");r["default"].use(h["a"]);var g=new h["a"].Store({state:{},mutations:{},actions:{}}),f=(n("1df7"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"cytoscape--container"},[n("div",{ref:"cytoscapeBox",staticClass:"cytoscape--container__graph"})])}),p=[],y=(n("e7cb"),n("1b8f")),m=n("fc3f"),v=(n("d85b"),n("910d"),n("c292"),n("ccaa"),n("c5f7"),n("3a03"),n("0ed8"),n("1703")),b=n.n(v),S={_cxttap:function(e){var t=e.target;this.elements().unselect(),t!==this&&this.elements(t).select()},_select:function(e){var t=e.target;if(t!==this){var n=this.elements(":selected"),r=this.collection();r=t.isNode()?n.closedNeighborhood():r.merge(n).merge(n.connectedNodes());var a=this.elements().difference(r);a.removeClass("hover").addClass("unhover"),r.removeClass("unhover").addClass("hover")}},_unselect:function(){this.elements().removeClass("unhover").removeClass("hover")}};function x(e){var t="",n=[];return["select","unselect","cxttap"].forEach((function(r){t?e.on(r,t,S["_".concat(r)]):e.on(r,S["_".concat(r)]),n.push((function(){t?e.off(r,t,S["_".concat(r)]):e.off(r,S["_".concat(r)])}))})),n}var C=x,k=(n("f9e0"),n("3b8e"),n("bed1"),n("9d4a")),$=(n("6689"),function(e){return"[object Object]"===Object.prototype.toString.call(e)}),O=function(e){return"[object Array]"===Object.prototype.toString.call(e)},_=function(e){return"[object Function]"===Object.prototype.toString.call(e)},j=function(e){return void 0===e},T=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"merge",n=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0;if($(n)&&$(r))for(var a in r)$(r[a])?(n[a]=$(n[a])?n[a]:{},n[a]=e(t,n[a],r[a])):O(r[a])?(n[a]=O(n[a])?n[a]:[],n[a]=e(t,n[a],r[a])):j(r[a])||(n[a]=r[a]);else O(n)&&O(r)&&("merge"===t?r.forEach((function(a,o){$(a)?(n[o]=$(n[o])?n[o]:{},n[o]=e(t,n[o],a)):O(a)?(n[o]=O(n[o])?n[o]:[],n[o]=e(t,n[o],a)):j(a)||(n[o]=r[o])})):"concat"===t?n=n.concat(r):"findSelector"===t?r.forEach((function(r){var a=n.find((function(e){return e.selector===r.selector}));a?a=e(t,a,r):n.push(r)})):n=r);return n},w=function e(){var t=Array.from(arguments);if(!(t.length<2))return t[1]=T.apply(void 0,Object(k["a"])(t)),t.splice(2,1),t.length>2?e.apply(void 0,Object(k["a"])(t)):2===t.length?t[1]:null},I=function(){var e=Array.from(arguments);return w.apply(void 0,["merge"].concat(Object(k["a"])(e)))},B=function(){var e=Array.from(arguments);return w.apply(void 0,["concat"].concat(Object(k["a"])(e)))},E=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8;return(e||"")+Number(Math.random().toString().substr(3,t)+Date.now()).toString(36)},N=/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;function M(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=(e||"").toLowerCase();if(n&&N.test(n)){if(4===n.length){for(var r="#",a=1;a<4;a+=1)r+=n.slice(a,a+1).concat(n.slice(a,a+1));n=r}for(var o=[],i=1;i<7;i+=2)o.push(parseInt("0x"+n.slice(i,i+2)));return o.push(t),"RGBA("+o.join(",")+")"}if(/^(rgb|RGB)/.test(e)){var s=e.replace(/(?:\(|\)|rgba|RGBA|rgb|RGB)*/g,"").split(","),c=Object(m["a"])(s,3),l=c[0],u=c[1],d=c[2];return"RGBA(".concat(l,", ").concat(u,", ").concat(d,", ").concat(t,")")}return e}var W={"z-index":2},L={"z-index":1},A=["#c23531","#2f4554","#61a0a8","#d48265","#91c7ae","#749f83","#ca8622","#bda29a","#6e7074","#546570","#c4ccd3"],P={nodes:{key:"category",styles:A.map((function(e){return I({},W,{"background-color":e,"border-color":e})}))},edges:{key:"category",styles:[JSON.parse(JSON.stringify(L))]}},R={style:[{selector:":active",style:{"overlay-opacity":0}},{selector:"node",style:JSON.parse(JSON.stringify(W))},{selector:"edge",style:JSON.parse(JSON.stringify(L))},{selector:".hover",style:{"background-opacity":1,"background-image-opacity":1,"z-index":99}},{selector:"edge.hover",style:{width:2,"z-index":98}},{selector:".unhover",style:{opacity:.3}},{selector:"edge.unhover",style:{width:1,opacity:.3}}]},H={name:"vueCytoscape",props:{options:{type:Object,default:function(){}},category:{type:Object,default:function(){}},data:{type:Array,default:function(){return[]}}},data:function(){return{$cytoscapeInstance:null,events:[],cacheRandomIdMap:{},filters:{},$layout:null,$removeData:null}},computed:{nodesCategorys:function(){var e=this,t=Array.from(new Set(this.data.filter((function(e){return"nodes"===e.group})).map((function(t){return e.dataByCategory(t.data,"nodes")})).filter((function(e){return!!e}))));return t},nodesCategoryBy:function(){if(this.category&&this.category.nodes){if(O(this.category.nodes))return this.category.nodes;if($(this.category.nodes))return this.category.nodes.key}return null},edgesCategorys:function(){var e=this,t=Array.from(new Set(this.data.filter((function(e){return"edges"===e.group})).map((function(t){return e.dataByCategory(t.data,"edges")})).filter((function(e){return!!e}))));return t},edgesCategoryBy:function(){if(this.category&&this.category.edges){if(O(this.category.edges))return this.category.edges;if($(this.category.edges))return this.category.edges.key}return null},categoryNameToClass:function(){var e=this,t={};return this.nodesCategorys.forEach((function(n){t[n]=e.getCacheRandomId(n,"node_class_")})),this.edgesCategorys.forEach((function(n){t[n]=e.getCacheRandomId(n,"edge_class_")})),t},styles:function(){var e=this,t=[];return this.category&&Object.keys(this.category).forEach((function(n){var r=e.category[n],a=P[n].styles,o=e["".concat(n,"Categorys")];if(O(r))t=t.concat(r.map((function(t,n){var r=t.name,o=t.style,i=n%a.length;return{selector:".".concat(e.categoryNameToClass[r]),style:I({},a[i],o)}})));else{var i=r.styles||[];i&&(O(i)?t=t.concat(o.map((function(t,n){var r=n%i.length,o=n%a.length;return{selector:".".concat(e.categoryNameToClass[t]),style:I({},a[o],i[r])}}))):$(i)&&(t=t.concat(o.map((function(t,n){var r=n%a.length;return{selector:".".concat(e.categoryNameToClass[t]),style:I({},a[r],i[t]||{})}})))))}})),t},cytoscapeOptions:function(){var e=B({},R,{style:this.styles},this.options||{});return e}},watch:{data:{handler:function(e){this.setData(e)},deep:!0},cytoscapeOptions:{handler:function(e){this.$cytoscapeInstance&&this.setOptions(e)},deep:!0}},methods:{getCacheRandomId:function(e,t,n){return this.cacheRandomIdMap[e]=this.cacheRandomIdMap[e]||E(t,n),this.cacheRandomIdMap[e]},dataByCategory:function(e,t){if(O(this["".concat(t,"CategoryBy")])){var n=this["".concat(t,"CategoryBy")].find((function(t){return t.matching&&t.matching(e)}));return n?_(n.name)?n.name(e):n.name:void 0}return e[this["".concat(t,"CategoryBy")]]},getDataWithClasses:function(e){var t=this,n=JSON.parse(JSON.stringify(e||[]));return n.map((function(e){var n=t.dataByCategory(e.data,e.group);return e.classes=e.classes||[],e.classes.push(t.categoryNameToClass[n]),e}))},getAllElements:function(){return this.$cytoscapeInstance&&this.$cytoscapeInstance.elements().merge(this.$removeData||this.$cytoscapeInstance.collection())},setOptions:function(e){var t=this;this.$cytoscapeInstance&&(this.$cytoscapeInstance.startBatch(),Object.keys(e).forEach((function(n){return t.$cytoscapeInstance[n]&&t.$cytoscapeInstance[n](e[n])})),this.$cytoscapeInstance.endBatch())},setData:function(e){var t=this.getDataWithClasses(e);if(!this.$cytoscapeInstance)return this.createCytoscape(t);this.$cytoscapeInstance.startBatch();var n=this.getAllElements(),r=n.filter((function(e){return!t.some((function(t){return e.id()===t.data.id}))}));this.$cytoscapeInstance.remove(r);var a=[];t.forEach((function(e){var t=n.$id(e.data.id);t&&t.length?t.isNode():a.push(e)})),this.$cytoscapeInstance.add(a),this.$cytoscapeInstance.endBatch(),this.renderFilter(),this.reLayout()},createCytoscape:function(e){var t=this,n=I({},this.cytoscapeOptions,{container:this.$refs.cytoscapeBox,elements:e||[]});delete n.layout,this.$cytoscapeInstance=b()(n),this.events=this.events.concat(C(this.$cytoscapeInstance));for(var r=function(){var e=Object(m["a"])(o[a],2),n=e[0],r=e[1],i=function(e){r(e)};t.$cytoscapeInstance.on(n,i),t.events.push((function(){t.$cytoscapeInstance.off(n,i)}))},a=0,o=Object.entries(this.$listeners);a<o.length;a++)r();this.$cytoscapeInstance.ready(),e&&e.length&&this.reLayout()},reLayout:function(){this.$layout&&this.$layout.stop(),this.$layout=this.$cytoscapeInstance.layout(this.cytoscapeOptions.layout),this.$layout.run()},destroy:function(){var e=Object(y["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.$cytoscapeInstance){e.next=6;break}return e.next=3,this.events.forEach((function(e){e()}));case 3:return this.events=[],e.next=6,this.$cytoscapeInstance.destroy();case 6:this.filters={},this.$removeData=null;case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),resetFilter:function(e,t){e?delete this.filters[e]:this.filters={},this.renderFilter(t)},filterByFunction:function(e,t,n){var r=t||E("func");return this.filters[r]=e,this.renderFilter(n),r},renderFilter:function(e){var t=this;if(this.$cytoscapeInstance){this.$cytoscapeInstance.startBatch();var n=this.getAllElements(),r=n;Object.keys(this.filters).forEach((function(e){r=t.filters[e](r)}));var a=r.nodes(),o=r.edges().filter((function(e){return a.contains(e.target())&&a.contains(e.source())}));return r=a.merge(o),this.$removeData=n.difference(r),this.$cytoscapeInstance.remove(this.$removeData),this.$cytoscapeInstance.add(r),this.$cytoscapeInstance.endBatch(),e&&this.reLayout(),this.$cytoscapeInstance.emit("update"),r}}},mounted:function(){this.setData(this.data)},beforeDestroy:function(){this.destroy()}},D=H,z=(n("866b"),Object(i["a"])(D,f,p,!1,null,"1cb62d9e",null)),F=z.exports,G=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("vue-legend",{attrs:{data:e.legendData,options:e.options},model:{value:e.legendModel,callback:function(t){e.legendModel=t},expression:"legendModel"}})},J=[],U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.legend.show?n("div",{staticClass:"legend__container"},[n("div",{ref:"legend",staticClass:"legend__container--box calc",class:[e.legend.orient,e.legend.type],style:e.legend.style},[e._l(e.dataWithStyle,(function(t){return n("div",{key:t.name,ref:t.name,refInFor:!0,staticClass:"item",style:e.itemStyle},[n("span",{staticClass:"tag",style:[t.tagStyle,e.legendModel[t.name]?t.activeTagStyle:t.inactiveTagStyle]}),n("span",{staticClass:"text",style:[t.textStyle,e.legendModel[t.name]?t.activeTextStyle:t.inactiveTextStyle],attrs:{title:t.formatter?t.formatter(t.name):t.name}},[e._v(e._s(t.formatter?t.formatter(t.name):t.name))])])})),e.items.length>1&&"scroll"===e.legend.type?n("div",{ref:"pagination",staticClass:"pagination"},[n("a",{staticClass:"pageButton triangle_border_left"}),n("span",[e._v(e._s(e.paginationText))]),n("a",{staticClass:"pageButton triangle_border_right"})]):e._e()],2),n("div",{staticClass:"legend__container--box",class:[e.legend.orient,e.legend.type],style:e.legend.style,attrs:{onselectstart:"return false;"}},[n("div",{staticClass:"itemsbox",style:"vertical"===e.legend.orient?{height:e.legendHeight+"px"}:{width:e.legendWidth+"px"}},[n("div",{style:e.itemsPaneStyle},e._l(e.items,(function(t,r){return n("div",{key:"items"+r,ref:"items"+r,refInFor:!0,staticClass:"items",style:{float:e.itemsFloat}},e._l(t,(function(t,a){return n("div",{key:t.name+r+a,staticClass:"item",style:e.itemStyle,on:{click:function(n){return e.itemChange(t.name)}}},[n("span",{staticClass:"tag",style:[t.tagStyle,e.legendModel[t.name]?t.activeTagStyle:t.inactiveTagStyle]}),n("span",{staticClass:"text",style:[t.textStyle,e.legendModel[t.name]?t.activeTextStyle:t.inactiveTextStyle],attrs:{title:t.formatter?t.formatter(t.name):t.name}},[e._v(e._s(t.formatter?t.formatter(t.name):t.name))])])})),0)})),0)]),e.items.length>1&&"scroll"===e.legend.type?n("div",{staticClass:"pagination"},[n("a",{staticClass:"pageButton triangle_border_left",class:{disabled:e.currentPage<=1},on:{click:function(t){return e.pageChange("sub")}}}),n("span",[e._v(e._s(e.paginationText))]),n("a",{staticClass:"pageButton triangle_border_right",class:{disabled:e.currentPage>=e.items.length},on:{click:function(t){return e.pageChange("add")}}})]):e._e()])]):e._e()},q=[],K=function(e){return"[object Object]"===Object.prototype.toString.call(e)},Q=function(e){return"[object Array]"===Object.prototype.toString.call(e)},V=function(e){return void 0===e},X=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"merge",n=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0;if(K(n)&&K(r))for(var a in r)K(r[a])?(n[a]=K(n[a])?n[a]:{},n[a]=e(t,n[a],r[a])):Q(r[a])?(n[a]=Q(n[a])?n[a]:[],n[a]=e(t,n[a],r[a])):V(r[a])||(n[a]=r[a]);else Q(n)&&Q(r)&&("merge"===t?r.forEach((function(a,o){K(a)?(n[o]=K(n[o])?n[o]:{},n[o]=e(t,n[o],a)):Q(a)?(n[o]=Q(n[o])?n[o]:[],n[o]=e(t,n[o],a)):V(a)||(n[o]=r[o])})):"concat"===t?n=n.concat(r):"findSelector"===t?r.forEach((function(r){var a=n.find((function(e){return e.selector===r.selector}));a?a=e(t,a,r):n.push(r)})):n=r);return n},Y=function e(){var t=Array.from(arguments);if(!(t.length<2))return t[1]=X.apply(void 0,Object(k["a"])(t)),t.splice(2,1),t.length>2?e.apply(void 0,Object(k["a"])(t)):2===t.length?t[1]:null},Z=function(){var e=Array.from(arguments);return Y.apply(void 0,["merge"].concat(Object(k["a"])(e)))};var ee=["#c23531","#2f4554","#61a0a8","#d48265","#91c7ae","#749f83","#ca8622","#bda29a","#6e7074","#546570","#c4ccd3"],te={show:!0,type:"scroll",orient:"vertical",style:{cursor:"pointer",padding:"10px"},itemGap:10,animation:!0,animationDurationUpdate:.8,tagStyle:{display:"inline-block",verticalAlign:"middle",borderWidth:"1px",height:"14px",lineHeight:"10px",padding:"1px",boxSizing:"border-box",width:"25px",borderRadius:"3px",marginRight:"1px",textAlign:"center"},activeTagStyle:{backgroundColor:"#c23531"},inactiveTagStyle:{backgroundColor:"#ccc"},textStyle:{display:"inline-block",verticalAlign:"middle",height:"14px",lineHeight:"10px",padding:"1px",boxSizing:"border-box",fontSize:"12px",color:"#333"},activeTextStyle:{},inactiveTextStyle:{color:"#ccc"},formatter:function(e){return e}},ne={name:"vue-legend",props:{options:{type:Object,default:function(){}},data:{type:Array,default:function(){return[]}},model:{type:Object}},model:{prop:"model",event:"change"},data:function(){return{timeStamp:0,defaultColor:"#ddd",defaultImage:"#ddd",legendWidth:0,legendHeight:0,items:[],itemsLength:0,itemsWH:[],itemsFloat:"left",currentPage:1,innerModel:{}}},computed:{paginationText:function(){return"".concat(this.currentPage," / ").concat(this.itemsLength)},legendModel:{get:function(){return Z({},this.model||this.innerModel)},set:function(e){this.innerModel=e,this.$emit("change",e)}},legend:function(){return Z({},te||{},this.options||{})||{}},dataWithStyle:function(){var e=this,t=te.tagStyle,n=te.activeTagStyle,r=te.inactiveTagStyle,a=te.textStyle,o=te.activeTextStyle,i=te.inactiveTextStyle,s=te.formatter;return(this.data||[]).map((function(c,l){var u=Z({},{tagStyle:t,activeTagStyle:n,inactiveTagStyle:r,textStyle:a,activeTextStyle:o,inactiveTextStyle:i,formatter:s}),d=ee[l%ee.length];if(K(c)){if(c.name){var h=Z({},{activeTagStyle:{backgroundColor:d,borderColor:d},activeTextStyle:{color:d}},c);return Z(u,h,e.options||{})}console.error("请给图例添加命名name！")}else{if("string"===typeof c)return Z(u,{activeTagStyle:{backgroundColor:d,borderColor:d},activeTextStyle:{color:d},name:c},e.options||{});console.error("传参错误，data为对象数组或者字符串数组！")}}))},itemStyle:function(){var e="".concat(this.legend.itemGap||0,"px");if("scroll"===this.legend.type){if("horizontal"===this.legend.orient)return{marginRight:e};if("vertical"===this.legend.orient)return{marginBottom:e}}return{marginRight:e,marginBottom:e,cursor:this.legend.disabled?"default":"pointer"}},itemsPaneStyle:function(){var e={};if("scroll"===this.legend.type){if("horizontal"===this.legend.orient){var t=this.itemsWH.slice(0,this.currentPage-1).reduce((function(e,t){return e+t.width}),0);return e.marginLeft=-t+"px",{marginLeft:-t+"px",transition:"all 0.6s"}}if("vertical"===this.legend.orient){var n=this.itemsWH.slice(0,this.currentPage-1).reduce((function(e,t){return e+t.height}),0);e.marginTop=-n+"px"}this.legend.animation&&(e.transition="all ".concat(this.legend.animationDurationUpdate,"s"))}return e}},watch:{dataWithStyle:{handler:function(e){e&&this.init()},deep:!0},paginationText:{handler:function(e){e&&this.getLegendLayout()},deep:!0}},methods:{init:function(){var e=this;this.getLegendLayout(),this.dataWithStyle.forEach((function(t){e.legendModel[t.name]=void 0===e.legendModel[t.name]||!!e.legendModel[t.name]}))},pageChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"add";"add"===e&&this.currentPage<this.items.length?this.currentPage++:"sub"===e&&this.currentPage>1&&this.currentPage--},getLegendLayout:function(){var e=Object(y["a"])(regeneratorRuntime.mark((function e(){var t,n,r,a,o,i,s,c,l,u,d,h,g,f,p,y,m,v,b,S,x,C,k,$,O,_,j,T=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$nextTick();case 2:if(!(!this.legend.show||!this.$refs.legend||this.$el.clientWidth<=0||this.$el.clientHeight<=0)){e.next=4;break}return e.abrupt("return");case 4:t=window.getComputedStyle(this.$refs.legend,null),n=t.paddingTop,r=t.paddingLeft,a=t.paddingBottom,o=t.paddingRight,i=t.marginTop,s=t.marginLeft,c=t.marginBottom,l=t.marginRight,u=t.borderTopWidth,d=t.borderLeftWidth,h=t.borderBottomWidth,g=t.borderRightWidth,f=t.left,p={top:Number(n.replace("px","")),left:Number(r.replace("px","")),bottom:Number(a.replace("px","")),right:Number(o.replace("px",""))},y={top:Number(i.replace("px","")),left:Number(s.replace("px","")),bottom:Number(c.replace("px","")),right:Number(l.replace("px",""))},m={top:Number(u.replace("px","")),left:Number(d.replace("px","")),bottom:Number(h.replace("px","")),right:Number(g.replace("px",""))},this.legendHeight=this.$refs.legend.clientHeight-(p.top+p.bottom),this.legendWidth=this.$refs.legend.clientWidth-(p.left+p.right),v=this.$el.clientHeight-(p.top+p.bottom+y.top+y.bottom+m.top+m.bottom),b=this.$el.clientWidth-(p.left+p.right+y.left+y.right+m.left+m.right),S=0,x=0,C=[],k=0,this.itemsFloat="left",$=this.$refs.pagination?this.$refs.pagination.clientWidth:0,O=this.$refs.pagination?this.$refs.pagination.clientHeight:0,"horizontal"===this.legend.orient?("scroll"===this.legend.type&&(_=this.dataWithStyle.reduce((function(e,t){return T.$refs[t.name][0].offsetWidth+(T.legend.itemGap||0)+e}),0),_>b&&(b-=$)),this.dataWithStyle.forEach((function(e){var t=T.$refs[e.name][0].offsetWidth+(T.legend.itemGap||0);x+=t,x>b&&(T.itemsWH[k]=T.itemsWH[k]||{},T.itemsWH[k].width=x-t,x=t,k+=1),C[k]=C[k]||[],C[k].push(e)}))):(Number(f.replace("px",""))>b/2&&(this.itemsFloat="right"),"scroll"===this.legend.type&&(j=this.dataWithStyle.reduce((function(e,t){return T.$refs[t.name][0].offsetHeight+(T.legend.itemGap||0)+e}),0),j>v&&(v-=O)),this.dataWithStyle.forEach((function(e){var t=T.$refs[e.name][0].offsetHeight+(T.legend.itemGap||0);S+=t,S>v&&(T.itemsWH[k]=T.itemsWH[k]||{},T.itemsWH[k].height=S-t,S=t,k+=1),C[k]=C[k]||[],C[k].push(e)}))),this.legendHeight>v&&(this.legendHeight=v),this.legendWidth>b&&(this.legendWidth=b),C.length<=this.currentPage&&C.length>0&&(this.currentPage=C.length),this.items=C,this.itemsLength=C.length;case 25:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),itemChange:function(e){var t=this;if(!this.legend.disabled){var n=(new Date).getTime();n-this.timeStamp<200?(clearTimeout(this.timeout),this.timeStamp=n,this.itemDblClick(e)):(this.timeStamp=n,this.timeout=setTimeout((function(){t.itemClick(e)}),200))}},itemClick:function(e){this.legendModel[e]=!this.legendModel[e],this.legendModel=this.legendModel},itemDblClick:function(e){var t=this;Object.keys(this.legendModel).forEach((function(n){t.legendModel[n]=n===e})),this.legendModel=this.legendModel}},mounted:function(){this.init(),window.addEventListener("resize",this.getLegendLayout)},beforeDestroy:function(){window.removeEventListener("resize",this.getLegendLayout)}},re=ne,ae=(n("5ae5"),Object(i["a"])(re,U,q,!1,null,"37f2bc18",null)),oe=ae.exports,ie={name:"vueCytoscapeLegend",components:{vueLegend:oe},props:{category:{type:[Object,Array],default:function(){return{}}},options:{type:Object,default:function(){return{}}},data:{type:Array,default:function(){return[]}},type:{type:String,default:"nodes"},model:{type:Object}},model:{prop:"model",event:"change"},data:function(){return{innerModel:{}}},computed:{legendModel:{get:function(){return I({},this.model||this.innerModel)},set:function(e){this.innerModel=e,this.$emit("change",e)}},legendData:function(){var e=this;return this.categorys.map((function(t){var n=e.categoryParams[t],r=n.style,a=n.formatter,o=r.backgroundColor,i=r.backgroundImage,s=r.backgroundPosition,c=r.backgroundRepeat,l=r.backgroundSize,u=r.borderColor;return Object.assign({},{activeTagStyle:{backgroundColor:o,backgroundImage:i,backgroundPosition:s,backgroundRepeat:c,backgroundSize:l,borderColor:u},tagStyle:{borderStyle:r.borderStyle},activeTextStyle:{color:r.borderColor||r.backgroundColor},formatter:a},{name:t})}))},categoryParams:function(){var e=this,t={};if(this.category)if(O(this.category))this.category.forEach((function(n,r){var a=n.name,o=n.style,i=n.formatter,s=r%P[e.type].styles.length;t[a]=t[a]||{},t[a].style=I({},P[e.type].styles[s],o),t[a].formatter=i}));else{var n=this.category.styles;n&&(O(n)?this.categorys.forEach((function(r,a){var o=a%n.length,i=a%P[e.type].styles.length;t[r]=t[r]||{},t[r].style=I({},P[e.type].styles[i],n[o])})):$(n)&&this.categorys.forEach((function(r,a){var o=a%P[e.type].styles.length;t[r]=t[r]||{},t[r].style=I({},P[e.type].styles[o],n[r]||{})})))}return this.getTransStyle(t)},categorys:function(){var e=this,t=Array.from(new Set((this.data||[]).filter((function(t){return t.group===e.type})).map((function(t){return e.dataByCategory(t.data)})).filter((function(e){return!!e}))));return t},categoryBy:function(){if(this.category){if(O(this.category))return this.category;if($(this.category))return this.category.key}return null}},methods:{getTransStyle:function(e){var t="nodes"===this.type;return Object.keys(e).forEach((function(n){e[n].style={backgroundColor:e[n].style["background-color"]?M(e[n].style["background-color"],e[n].style["background-opacity"]||1):"none",backgroundImage:e[n].style["background-image"]?"url(".concat(e[n].style["background-image"],")"):"none",backgroundPosition:"center",backgroundRepeat:e[n].style["background-repeat"],backgroundSize:"".concat(e[n].style["background-width"]," ").concat(e[n].style["background-height"]),borderColor:t?e[n].style["border-color"]:e[n].style["line-color"],borderStyle:t?e[n].style["border-style"]||"not specified":e[n].style["line-style"]||"not specified"}})),e},dataByCategory:function(e){if(O(this.categoryBy)){var t=this.categoryBy.find((function(t){return t.matching&&t.matching(e)}));return t?_(t.name)?t.name(e):t.name:void 0}return e[this.categoryBy]}}},se=ie,ce=Object(i["a"])(se,G,J,!1,null,null,null),le=ce.exports,ue={install:function(e,t){e.component(F.name,F),e.component(le.name,le),t.beforeCreate&&t.beforeCreate(b.a)}},de=n("8995"),he=n.n(de),ge=(n("c22c"),n("047f")),fe=n.n(ge),pe=n("69d8"),ye=n.n(pe),me=n("a3d7"),ve=n.n(me),be=n("6fef"),Se=n.n(be),xe=(n("6941"),n("e8dc")),Ce=n.n(xe);r["default"].config.productionTip=!1,r["default"].use(ue,{beforeCreate:function(e){e.use(ve.a,Se.a),e.use(Ce.a),e.use(ye.a),e.use(fe.a)}}),r["default"].use(he.a),new r["default"]({router:d,store:g,render:function(e){return e(l)}}).$mount("#app")}});
//# sourceMappingURL=app.8f799814.js.map
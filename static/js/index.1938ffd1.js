(function(e){function n(n){for(var o,i,c=n[0],u=n[1],p=n[2],s=0,f=[];s<c.length;s++)i=c[s],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);l&&l(n);while(f.length)f.shift()();return r.push.apply(r,p||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],o=!0,i=1;i<t.length;i++){var u=t[i];0!==a[u]&&(o=!1)}o&&(r.splice(n--,1),e=c(c.s=t[0]))}return e}var o={},a={index:0},r=[];function i(e){return c.p+"static/js/"+({"pages-chapter-chapter":"pages-chapter-chapter","pages-chapter-home-chapter-home":"pages-chapter-home-chapter-home","pages-index-index":"pages-index-index"}[e]||e)+"."+{"pages-chapter-chapter":"fdce4e56","pages-chapter-home-chapter-home":"54906ce9","pages-index-index":"b9e32e88"}[e]+".js"}function c(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var n=[],t=a[e];if(0!==t)if(t)n.push(t[2]);else{var o=new Promise((function(n,o){t=a[e]=[n,o]}));n.push(t[2]=o);var r,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(e);var p=new Error;r=function(n){u.onerror=u.onload=null,clearTimeout(s);var t=a[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;p.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",p.name="ChunkLoadError",p.type=o,p.request=r,t[1](p)}a[e]=void 0}};var s=setTimeout((function(){r({type:"timeout",target:u})}),12e4);u.onerror=u.onload=r,document.head.appendChild(u)}return Promise.all(n)},c.m=e,c.c=o,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)c.d(t,o,function(n){return e[n]}.bind(null,o));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/manhua/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],p=u.push.bind(u);u.push=n,u=u.slice();for(var s=0;s<u.length;s++)n(u[s]);var l=p;r.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("c9cf")},"0a6f":function(e,n,t){"use strict";t.r(n);var o=t("c70a"),a=t.n(o);for(var r in o)"default"!==r&&function(e){t.d(n,e,(function(){return o[e]}))}(r);n["default"]=a.a},"2f93":function(e,n,t){"use strict";var o;t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return r})),t.d(n,"a",(function(){return o}));var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("App",{attrs:{keepAliveInclude:e.keepAliveInclude}})},r=[]},3478:function(e,n,t){"use strict";var o=t("910a"),a=t.n(o);a.a},"74b4":function(e,n,t){t("c975"),t("d3b7");var o={},a="https://xiaotiancao.github.io/manhua/data/";o.baseUrl=a,o.ajaxQuery=function(e){return new Promise((function(n,t){if(localStorage.getItem("token")){-1==e.url.indexOf("http")&&(e.url=a+e.url);var o=e.mask;0!=o&&uni.showLoading({title:"加载中"}),e.params||(e.params={}),uni.request({url:e.url,data:e.params,method:"GET",header:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},success:function(e){var t=e.data;n(t)},fail:function(){uni.showModal({title:"错误",showCancel:!1,content:"服务器异常，请稍后尝试"})},complete:function(){!1!==o&&uni.hideLoading(),e.completeCallback&&e.completeCallback()}})}else uni.showModal({title:"错误",showCancel:!1,content:"服务器异常，请稍后尝试"})}))},e.exports=o},"910a":function(e,n,t){var o=t("eab4");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var a=t("4f06").default;a("20fc3874",o,!0,{sourceMap:!1,shadowMode:!1})},a319:function(e,n,t){"use strict";(function(e){var n=t("4ea4"),o=n(t("e143"));e["________"]=!0,delete e["________"],e.__uniConfig={globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"uni-app",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8"}},e.__uniConfig.compilerVersion="3.1.22",e.__uniConfig.router={mode:"hash",base:"/manhua/"},e.__uniConfig.publicPath="/manhua/",e.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:6e4},e.__uniConfig.debug=!1,e.__uniConfig.networkTimeout={request:6e4,connectSocket:6e4,uploadFile:6e4,downloadFile:6e4},e.__uniConfig.sdkConfigs={},e.__uniConfig.qqMapKey="XVXBZ-NDMC4-JOGUS-XGIEE-QVHDZ-AMFV2",e.__uniConfig.nvue={"flex-direction":"column"},e.__uniConfig.__webpack_chunk_load__=t.e,o.default.component("pages-index-index",(function(e){var n={component:t.e("pages-index-index").then(function(){return e(t("d5f6"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-chapter-chapter",(function(e){var n={component:t.e("pages-chapter-chapter").then(function(){return e(t("85bd"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-chapter-home-chapter-home",(function(e){var n={component:t.e("pages-chapter-home-chapter-home").then(function(){return e(t("d747"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),e.__uniRoutes=[{path:"/",alias:"/pages/index/index",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isEntry:!0},__uniConfig.globalStyle,{navigationBarTitleText:"爱漫画"})},[e("pages-index-index",{slot:"page"})])}},meta:{id:1,name:"pages-index-index",isNVue:!1,maxWidth:0,pagePath:"pages/index/index",isQuit:!0,isEntry:!0,windowTop:44}},{path:"/pages/chapter/chapter",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"漫画内容"})},[e("pages-chapter-chapter",{slot:"page"})])}},meta:{name:"pages-chapter-chapter",isNVue:!1,maxWidth:0,pagePath:"pages/chapter/chapter",windowTop:44}},{path:"/pages/chapter-home/chapter-home",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"章节"})},[e("pages-chapter-home-chapter-home",{slot:"page"})])}},meta:{name:"pages-chapter-home-chapter-home",isNVue:!1,maxWidth:0,pagePath:"pages/chapter-home/chapter-home",windowTop:44}},{path:"/preview-image",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-preview-image",{slot:"page"})])}},meta:{name:"preview-image",pagePath:"/preview-image"}},{path:"/choose-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}],e.UniApp&&new e.UniApp}).call(this,t("c8ba"))},c70a:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={onLaunch:function(){console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};n.default=o},c9cf:function(e,n,t){"use strict";var o=t("4ea4"),a=o(t("5530"));t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("a319"),t("1c31");var r=o(t("e143")),i=o(t("cb8c")),c=o(t("74b4"));r.default.config.productionTip=!1,i.default.mpType="app",r.default.prototype.httpUtil=c.default;var u=new r.default((0,a.default)({},i.default));u.$mount()},cb8c:function(e,n,t){"use strict";t.r(n);var o=t("2f93"),a=t("0a6f");for(var r in a)"default"!==r&&function(e){t.d(n,e,(function(){return a[e]}))}(r);t("3478");var i,c=t("f0c5"),u=Object(c["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],i);n["default"]=u.exports},eab4:function(e,n,t){var o=t("24fb");n=o(!1),n.push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*每个页面公共css */",""]),e.exports=n}});
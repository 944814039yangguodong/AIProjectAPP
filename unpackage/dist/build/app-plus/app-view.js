(function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="./",n(n.s="3af4")})({"0bf7":function(t,e,n){"use strict";n.r(e);var r=n("f770"),i=n("b98b");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("94ab");var o,s=n("f0c5"),c=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],o);e["default"]=c.exports},"0ef6":function(t,e,n){var r=n("fb98");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n("7f7e").default;i("0a930ebe",r,!0,{sourceMap:!1,shadowMode:!1})},"24fb":function(t,e,n){"use strict";function r(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"===typeof btoa){var a=i(r),o=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(t," */")}));return[n].concat(o).concat([a]).join("\n")}return[n].join("\n")}function i(t){var e=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),n="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e);return"/*# ".concat(n," */")}t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=r(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"===typeof t&&(t=[[null,t,""]]);var i={};if(r)for(var a=0;a<this.length;a++){var o=this[a][0];null!=o&&(i[o]=!0)}for(var s=0;s<t.length;s++){var c=[].concat(t[s]);r&&i[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},"2bba":function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,".content{display:flex;flex-direction:column;align-items:center;justify-content:center}.body{display:flex;flex-direction:column;align-items:center;justify-content:center;width:90%;background-color:#f6f6f6}.pair{display:flex;flex-direction:column;align-items:center;justify-content:center;width:90%;background-color:#b3b3b3}.logo{height:150rpx;width:150rpx;margin-top:10rpx;margin-left:auto;margin-right:auto;margin-bottom:5rpx}.text-area{display:flex;justify-content:center}.title{font-size:36rpx;color:#8f8f94}",""]),t.exports=e},"2c0a":function(t,e,n){if("undefined"===typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(n){return e.resolve(t()).then((function(){return n}))}),(function(n){return e.resolve(t()).then((function(){throw n}))}))}),"undefined"!==typeof uni&&uni&&uni.requireGlobal){var r=uni.requireGlobal();ArrayBuffer=r.ArrayBuffer,Int8Array=r.Int8Array,Uint8Array=r.Uint8Array,Uint8ClampedArray=r.Uint8ClampedArray,Int16Array=r.Int16Array,Uint16Array=r.Uint16Array,Int32Array=r.Int32Array,Uint32Array=r.Uint32Array,Float32Array=r.Float32Array,Float64Array=r.Float64Array,BigInt64Array=r.BigInt64Array,BigUint64Array=r.BigUint64Array}window.__uniConfig={window:{navigationBarTextStyle:"black",navigationBarTitleText:"uni-app",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8"}},uni.restoreGlobal&&uni.restoreGlobal(weex,plus,setTimeout,clearTimeout,setInterval,clearInterval),__definePage("pages/index/index",(function(){return Vue.extend(n("0bf7").default)}))},"3af4":function(t,e,n){"use strict";function r(){function t(t){var e=n("b9c3");e.__inject__&&e.__inject__(t)}"function"===typeof t&&t(),UniViewJSBridge.publishHandler("webviewReady")}n("2c0a"),"undefined"!==typeof plus?r():document.addEventListener("plusready",r)},"7f7e":function(t,e,n){"use strict";function r(t,e){for(var n=[],r={},i=0;i<e.length;i++){var a=e[i],o=a[0],s=a[1],c=a[2],u=a[3],f={id:t+":"+i,css:s,media:c,sourceMap:u};r[o]?r[o].parts.push(f):n.push(r[o]={id:o,parts:[f]})}return n}n.r(e),n.d(e,"default",(function(){return v}));var i="undefined"!==typeof document;if("undefined"!==typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var a={},o=i&&(document.head||document.getElementsByTagName("head")[0]),s=null,c=0,u=!1,f=function(){},l=null,d="data-vue-ssr-id",p="undefined"!==typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function v(t,e,n,i){u=n,l=i||{};var o=r(t,e);return g(o),function(e){for(var n=[],i=0;i<o.length;i++){var s=o[i],c=a[s.id];c.refs--,n.push(c)}e?(o=r(t,e),g(o)):o=[];for(i=0;i<n.length;i++){c=n[i];if(0===c.refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete a[c.id]}}}}function g(t){for(var e=0;e<t.length;e++){var n=t[e],r=a[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(_(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var o=[];for(i=0;i<n.parts.length;i++)o.push(_(n.parts[i]));a[n.id]={id:n.id,refs:1,parts:o}}}}function y(){var t=document.createElement("style");return t.type="text/css",o.appendChild(t),t}function _(t){var e,n,r=document.querySelector("style["+d+'~="'+t.id+'"]');if(r){if(u)return f;r.parentNode.removeChild(r)}if(p){var i=c++;r=s||(s=y()),e=b.bind(null,r,i,!1),n=b.bind(null,r,i,!0)}else r=y(),e=m.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}var h=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}();function b(t,e,n,r){var i=n?"":U(r.css);if(t.styleSheet)t.styleSheet.cssText=h(e,i);else{var a=document.createTextNode(i),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(a,o[e]):t.appendChild(a)}}function m(t,e){var n=U(e.css),r=e.media,i=e.sourceMap;if(r&&t.setAttribute("media",r),l.ssrId&&t.setAttribute(d,e.id),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{while(t.firstChild)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var x=/\b([+-]?\d+(\.\d+)?)[r|u]px\b/g,w=/var\(--status-bar-height\)/gi,C=/var\(--window-top\)/gi,S=/var\(--window-bottom\)/gi,$=/var\(--window-left\)/gi,A=/var\(--window-right\)/gi,j=!1;function U(t){if(!uni.canIUse("css.var")){!1===j&&(j=plus.navigator.getStatusbarHeight());var e={statusBarHeight:j,top:window.__WINDOW_TOP||0,bottom:window.__WINDOW_BOTTOM||0};t=t.replace(w,e.statusBarHeight+"px").replace(C,e.top+"px").replace(S,e.bottom+"px").replace($,"0px").replace(A,"0px")}return t.replace(/\{[\s\S]+?\}|@media.+?\{/g,(function(t){return t.replace(x,(function(t,e){return uni.upx2px(e)+"px"}))}))}},"94ab":function(t,e,n){"use strict";var r=n("f9a7"),i=n.n(r);i.a},ae11:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={data:function(){return{wxsProps:{}}},components:{}};e.default=r},b98b:function(t,e,n){"use strict";n.r(e);var r=n("ae11"),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=i.a},b9c3:function(t,e,n){"use strict";n.r(e);var r=n("0ef6"),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=i.a},f0c5:function(t,e,n){"use strict";function r(t,e,n,r,i,a,o,s,c,u){var f,l="function"===typeof t?t.options:t;if(c){l.components||(l.components={});var d=Object.prototype.hasOwnProperty;for(var p in c)d.call(c,p)&&!d.call(l.components,p)&&(l.components[p]=c[p])}if(u&&((u.beforeCreate||(u.beforeCreate=[])).unshift((function(){this[u.__module]=this})),(l.mixins||(l.mixins=[])).push(u)),e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),r&&(l.functional=!0),a&&(l._scopeId="data-v-"+a),o?(f=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},l._ssrRegister=f):i&&(f=s?function(){i.call(this,this.$root.$options.shadowRoot)}:i),f)if(l.functional){l._injectStyles=f;var v=l.render;l.render=function(t,e){return f.call(e),v(t,e)}}else{var g=l.beforeCreate;l.beforeCreate=g?[].concat(g,f):[f]}return{exports:t,options:l}}n.d(e,"a",(function(){return r}))},f770:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:t._$g(0,"sc"),attrs:{_i:0}},[n("v-uni-view",{staticStyle:{height:"40rpx"},attrs:{_i:1}}),n("v-uni-view",{staticClass:t._$g(2,"sc"),attrs:{_i:2}},[n("v-uni-view",{staticClass:t._$g(3,"sc"),staticStyle:{"margin-top":"30rpx"},attrs:{_i:3}},[n("v-uni-text",{staticClass:t._$g(4,"sc"),staticStyle:{color:"#333333"},attrs:{_i:4}},[t._v("\u9009\u62e9\u56fe\u7247")])],1),n("v-uni-view",{staticClass:t._$g(5,"sc"),attrs:{_i:5}},[n("v-uni-text",{staticClass:t._$g(6,"sc"),staticStyle:{"font-size":"30rpx"},attrs:{_i:6}},[t._v("\u8bf7\u4e0a\u4f20png\u3001jpg\u6216jpeg\u6587\u4ef6")])],1),t._$g(7,"i")?n("v-uni-image",{staticClass:t._$g(7,"sc"),staticStyle:{"margin-bottom":"30rpx"},attrs:{src:t._$g(7,"a-src"),_i:7},on:{click:function(e){return t.$handleViewEvent(e)}}}):t._e(),t._$g(8,"i")?n("v-uni-image",{staticClass:t._$g(8,"sc"),staticStyle:{"margin-bottom":"30rpx"},attrs:{src:t._$g(8,"a-src"),_i:8}}):t._e()],1),t._$g(9,"i")?n("v-uni-view",{staticClass:t._$g(9,"sc"),staticStyle:{"margin-top":"30rpx"},attrs:{_i:9}},[n("v-uni-view",{staticClass:t._$g(10,"sc"),attrs:{_i:10}},[t._l(t._$g(11,"f"),(function(e,r,i,a){return[n("v-uni-image",{key:e["k0"],attrs:{src:t._$g("12-"+a,"a-src"),_i:"12-"+a},on:{click:function(e){return t.$handleViewEvent(e)}}}),n("v-uni-view",{key:e["k1"],staticClass:t._$g("13-"+a,"sc"),attrs:{_i:"13-"+a}},[n("v-uni-text",{staticClass:t._$g("14-"+a,"sc"),attrs:{_i:"14-"+a}},[t._v("\u68c0\u6d4b\u7ed3\u679c")])],1)]}))],2)],1):t._e()],1)},a=[]},f9a7:function(t,e,n){var r=n("2bba");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n("7f7e").default;i("2572cb98",r,!0,{sourceMap:!1,shadowMode:!1})},fb98:function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,"",""]),t.exports=e}});
/*! For license information please see 213.5172ee66.chunk.js.LICENSE.txt */
(self.webpackChunkvoiceflow_app=self.webpackChunkvoiceflow_app||[]).push([[213],{7622:function(e,t,r){"use strict";r.r(t),r.d(t,{defaultOptions:function(){return o},fetchFile:function(){return p},getCreateFFmpegCore:function(){return f}});var n=r(3681),o={corePath:"https://unpkg.com/@ffmpeg/core@".concat(n.devDependencies["@ffmpeg/core"].substring(1),"/dist/ffmpeg-core.js")},i=r(4165),a=r(5861),s=r(727),c=r(7618),u=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t,r){var n,o,a;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(0,s.log)("info","fetch ".concat(t)),e.next=3,fetch(t);case 3:return e.next=5,e.sent.arrayBuffer();case 5:return n=e.sent,(0,s.log)("info","".concat(t," file size = ").concat(n.byteLength," bytes")),o=new Blob([n],{type:r}),a=URL.createObjectURL(o),(0,s.log)("info","".concat(t," blob URL = ").concat(a)),e.abrupt("return",a);case 11:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),f=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t){var r,n,o,a,f,l,p,h,d,m,g;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.corePath,n=t.workerPath,o=t.wasmPath,!("undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope)){e.next=18;break}if("string"===typeof r){e.next=4;break}throw Error("corePath should be a string!");case 4:return a=new URL(r,"file:///C:/Users/ohme3/Desktop/Nextjs/voiceflow-app/node_modules/@ffmpeg/ffmpeg/src/browser/getCreateFFmpegCore.js").href,e.next=7,u(a,"application/javascript");case 7:return f=e.sent,e.next=10,u(void 0!==o?o:a.replace("ffmpeg-core.js","ffmpeg-core.wasm"),"application/wasm");case 10:return l=e.sent,e.next=13,u(void 0!==n?n:a.replace("ffmpeg-core.js","ffmpeg-core.worker.js"),"application/javascript");case 13:if(p=e.sent,"undefined"!==typeof createFFmpegCore){e.next=16;break}return e.abrupt("return",new Promise((function(e){if(globalThis.importScripts(f),"undefined"===typeof createFFmpegCore)throw Error((0,c.CREATE_FFMPEG_CORE_IS_NOT_DEFINED)(a));(0,s.log)("info","ffmpeg-core.js script loaded"),e({createFFmpegCore:createFFmpegCore,corePath:f,wasmPath:l,workerPath:p})})));case 16:return(0,s.log)("info","ffmpeg-core.js script is loaded already"),e.abrupt("return",Promise.resolve({createFFmpegCore:createFFmpegCore,corePath:f,wasmPath:l,workerPath:p}));case 18:if("string"===typeof r){e.next=20;break}throw Error("corePath should be a string!");case 20:return h=new URL(r,"file:///C:/Users/ohme3/Desktop/Nextjs/voiceflow-app/node_modules/@ffmpeg/ffmpeg/src/browser/getCreateFFmpegCore.js").href,e.next=23,u(h,"application/javascript");case 23:return d=e.sent,e.next=26,u(void 0!==o?o:h.replace("ffmpeg-core.js","ffmpeg-core.wasm"),"application/wasm");case 26:return m=e.sent,e.next=29,u(void 0!==n?n:h.replace("ffmpeg-core.js","ffmpeg-core.worker.js"),"application/javascript");case 29:if(g=e.sent,"undefined"!==typeof createFFmpegCore){e.next=32;break}return e.abrupt("return",new Promise((function(e){var t=document.createElement("script");t.src=d,t.type="text/javascript",t.addEventListener("load",(function r(){if(t.removeEventListener("load",r),"undefined"===typeof createFFmpegCore)throw Error((0,c.CREATE_FFMPEG_CORE_IS_NOT_DEFINED)(h));(0,s.log)("info","ffmpeg-core.js script loaded"),e({createFFmpegCore:createFFmpegCore,corePath:d,wasmPath:m,workerPath:g})})),document.getElementsByTagName("head")[0].appendChild(t)})));case 32:return(0,s.log)("info","ffmpeg-core.js script is loaded already"),e.abrupt("return",Promise.resolve({createFFmpegCore:createFFmpegCore,corePath:d,wasmPath:m,workerPath:g}));case 34:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(e){return new Promise((function(t,r){var n=new FileReader;n.onload=function(){t(n.result)},n.onerror=function(e){var t=e.target.error.code;r(Error("File could not be read! Code=".concat(t)))},n.readAsArrayBuffer(e)}))},p=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t){var r,n;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t,"undefined"!==typeof t){e.next=3;break}return e.abrupt("return",new Uint8Array);case 3:if("string"!==typeof t){e.next=16;break}if(!/data:_data\/([a-zA-Z]*);base64,([^"]*)/.test(t)){e.next=8;break}r=atob(t.split(",")[1]).split("").map((function(e){return e.charCodeAt(0)})),e.next=14;break;case 8:return e.next=10,fetch(new URL(t,"file:///C:/Users/ohme3/Desktop/Nextjs/voiceflow-app/node_modules/@ffmpeg/ffmpeg/src/browser/fetchFile.js").href);case 10:return n=e.sent,e.next=13,n.arrayBuffer();case 13:r=e.sent;case 14:e.next=20;break;case 16:if(!(t instanceof File||t instanceof Blob)){e.next=20;break}return e.next=19,l(t);case 19:r=e.sent;case 20:return e.abrupt("return",new Uint8Array(r));case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},9803:function(e){e.exports={defaultArgs:["./ffmpeg","-nostdin","-y"],baseOptions:{log:!1,logger:function(){},progress:function(){},corePath:""}}},152:function(e,t,r){var n=r(861).default,o=r(7061).default,i=r(7156).default,a=r(7424).default,s=r(2122).default,c=r(215).default,u=["log","logger","progress"],f=r(9803),l=f.defaultArgs,p=f.baseOptions,h=r(5040),d=r(7622),m=d.defaultOptions,g=d.getCreateFFmpegCore,y=r(3681).version,v=Error("ffmpeg.wasm is not ready, make sure you have completed load().");e.exports=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=s(s(s({},p),m),e),r=t.log,f=(t.logger,t.progress),d=c(t,u),w=null,b=null,x=null,_=null,E=!1,F=function(){},j=r,L=f,O=0,k=0,P=!1,S=0,C=function(e,t){F({type:e,message:t}),j&&console.log("[".concat(e,"] ").concat(t))},N=function(e){var t=e.split(":"),r=a(t,3),n=r[0],o=r[1],i=r[2];return 60*parseFloat(n)*60+60*parseFloat(o)+parseFloat(i)},T=function(e){var t=e.type,r=e.message;C(t,r),function(e,t){if("string"===typeof e)if(e.startsWith("  Duration")){var r=e.split(", ")[0].split(": ")[1],n=N(r);t({duration:n,ratio:S}),(0===O||O>n)&&(O=n,P=!0)}else if(P&&e.startsWith("    Stream")){var o=e.match(/([\d.]+) fps/);if(o){var i=parseFloat(o[1]);k=O*i}else k=0;P=!1}else if(e.startsWith("frame")||e.startsWith("size")){var a=e.split("time=")[1].split(" ")[0],s=N(a),c=e.match(/frame=\s*(\d+)/);if(k&&c){var u=parseFloat(c[1]);S=Math.min(u/k,1)}else S=s/O;t({ratio:S,time:s})}else e.startsWith("video:")&&(t({ratio:1}),O=0)}(r,L),function(e){"FFMPEG_END"===e&&null!==x&&(x(),x=null,_=null,E=!1)}(r)},A=function(){var e=i(o().mark((function e(){var t,r,n,i,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(C("info","load ffmpeg-core"),null!==w){e.next=17;break}return C("info","loading ffmpeg-core"),e.next=5,g(d);case 5:return t=e.sent,r=t.createFFmpegCore,n=t.corePath,i=t.workerPath,a=t.wasmPath,e.next=12,r({mainScriptUrlOrBlob:n,printErr:function(e){return T({type:"fferr",message:e})},print:function(e){return T({type:"ffout",message:e})},locateFile:function(e,t){if("undefined"!==typeof window||"undefined"!==typeof WorkerGlobalScope){if("undefined"!==typeof a&&e.endsWith("ffmpeg-core.wasm"))return a;if("undefined"!==typeof i&&e.endsWith("ffmpeg-core.worker.js"))return i}return t+e}});case 12:w=e.sent,b=w.cwrap(d.mainName||"proxy_main","number",["number","number"]),C("info","ffmpeg-core loaded"),e.next=18;break;case 17:throw Error("ffmpeg.wasm was loaded, you should not load it again, use ffmpeg.isLoaded() to check next time.");case 18:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return C("info","use ffmpeg.wasm v".concat(y)),{setProgress:function(e){L=e},setLogger:function(e){F=e},setLogging:function(e){j=e},load:A,isLoaded:function(){return null!==w},run:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];if(C("info","run ffmpeg command: ".concat(t.join(" "))),null===w)throw v;if(E)throw Error("ffmpeg.wasm can only run one command at a time");return E=!0,new Promise((function(e,r){var o=[].concat(n(l),t).filter((function(e){return 0!==e.length}));x=e,_=r,b.apply(void 0,n(h(w,o)))}))},exit:function(){if(null===w)throw v;_&&_("ffmpeg has exited"),E=!1;try{w.exit(1)}catch(e){C(e.message),_&&_(e)}finally{w=null,b=null,x=null,_=null}},FS:function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];if(C("info","run FS.".concat(e," ").concat(r.map((function(e){return"string"===typeof e?e:"<".concat(e.length," bytes binary file>")})).join(" "))),null===w)throw v;var o=null;try{var i;o=(i=w.FS)[e].apply(i,r)}catch(a){throw"readdir"===e?Error("ffmpeg.FS('readdir', '".concat(r[0],"') error. Check if the path exists, ex: ffmpeg.FS('readdir', '/')")):"readFile"===e?Error("ffmpeg.FS('readFile', '".concat(r[0],"') error. Check if the path exists")):Error("Oops, something went wrong in FS operation.")}return o}}}},4213:function(e,t,r){r(9727);var n=r(152),o=r(7622).fetchFile;e.exports={createFFmpeg:n,fetchFile:o}},7618:function(e){e.exports={CREATE_FFMPEG_CORE_IS_NOT_DEFINED:function(e){return"\ncreateFFmpegCore is not defined. ffmpeg.wasm is unable to find createFFmpegCore after loading ffmpeg-core.js from ".concat(e,". Use another URL when calling createFFmpeg():\n\nconst ffmpeg = createFFmpeg({\n  corePath: 'http://localhost:3000/ffmpeg-core.js',\n});\n")}}},727:function(e){var t=!1,r=function(){};e.exports={logging:t,setLogging:function(e){t=e},setCustomLogger:function(e){r=e},log:function(e,n){r({type:e,message:n}),t&&console.log("[".concat(e,"] ").concat(n))}}},5040:function(e){e.exports=function(e,t){var r=e._malloc(t.length*Uint32Array.BYTES_PER_ELEMENT);return t.forEach((function(t,n){var o=e.lengthBytesUTF8(t)+1,i=e._malloc(o);e.stringToUTF8(t,i,o),e.setValue(r+Uint32Array.BYTES_PER_ELEMENT*n,i,"i32")})),[t.length,r]}},9727:function(e){var t=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(T){u=function(e,t,r){return e[t]=r}}function f(e,t,r,n){var i=t&&t.prototype instanceof y?t:y,a=Object.create(i.prototype),s=new S(n||[]);return o(a,"_invoke",{value:L(e,r,s)}),a}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(T){return{type:"throw",arg:T}}}e.wrap=f;var p="suspendedStart",h="suspendedYield",d="executing",m="completed",g={};function y(){}function v(){}function w(){}var b={};u(b,a,(function(){return this}));var x=Object.getPrototypeOf,_=x&&x(x(C([])));_&&_!==r&&n.call(_,a)&&(b=_);var E=w.prototype=y.prototype=Object.create(b);function F(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function j(e,t){function r(o,i,a,s){var c=l(e[o],e,i);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"===typeof f&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,a,s)}),(function(e){r("throw",e,a,s)})):t.resolve(f).then((function(e){u.value=e,a(u)}),(function(e){return r("throw",e,a,s)}))}s(c.arg)}var i;o(this,"_invoke",{value:function(e,n){function o(){return new t((function(t,o){r(e,n,t,o)}))}return i=i?i.then(o,o):o()}})}function L(e,t,r){var n=p;return function(o,i){if(n===d)throw new Error("Generator is already running");if(n===m){if("throw"===o)throw i;return N()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var s=O(a,r);if(s){if(s===g)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===p)throw n=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var c=l(e,t,r);if("normal"===c.type){if(n=r.done?m:h,c.arg===g)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=m,r.method="throw",r.arg=c.arg)}}}function O(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,O(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=l(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function C(e){if(e){var r=e[a];if(r)return r.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}return{next:N}}function N(){return{value:t,done:!0}}return v.prototype=w,o(E,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:v,configurable:!0}),v.displayName=u(w,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,w):(e.__proto__=w,u(e,c,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},F(j.prototype),u(j.prototype,s,(function(){return this})),e.AsyncIterator=j,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new j(f(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},F(E),u(E,c,"Generator"),u(E,a,(function(){return this})),u(E,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=C,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return s.type="throw",s.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),P(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:C(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}(e.exports);try{regeneratorRuntime=t}catch(r){"object"===typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}},3897:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},5372:function(e){e.exports=function(e){if(Array.isArray(e))return e},e.exports.__esModule=!0,e.exports.default=e.exports},3405:function(e,t,r){var n=r(3897);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},7156:function(e){function t(e,t,r,n,o,i,a){try{var s=e[i](a),c=s.value}catch(u){return void r(u)}s.done?t(c):Promise.resolve(c).then(n,o)}e.exports=function(e){return function(){var r=this,n=arguments;return new Promise((function(o,i){var a=e.apply(r,n);function s(e){t(a,o,i,s,c,"next",e)}function c(e){t(a,o,i,s,c,"throw",e)}s(void 0)}))}},e.exports.__esModule=!0,e.exports.default=e.exports},8416:function(e,t,r){var n=r(4062);e.exports=function(e,t,r){return(t=n(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},9498:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},8872:function(e){e.exports=function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,s=[],c=!0,u=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(s.push(n.value),s.length!==t);c=!0);}catch(f){u=!0,o=f}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(u)throw o}}return s}},e.exports.__esModule=!0,e.exports.default=e.exports},2218:function(e){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},2281:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},2122:function(e,t,r){var n=r(8416);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}e.exports=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e},e.exports.__esModule=!0,e.exports.default=e.exports},215:function(e,t,r){var n=r(7071);e.exports=function(e,t){if(null==e)return{};var r,o,i=n(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i},e.exports.__esModule=!0,e.exports.default=e.exports},7071:function(e){e.exports=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o},e.exports.__esModule=!0,e.exports.default=e.exports},7061:function(e,t,r){var n=r(8698).default;function o(){"use strict";e.exports=o=function(){return t},e.exports.__esModule=!0,e.exports.default=e.exports;var t={},r=Object.prototype,i=r.hasOwnProperty,a=Object.defineProperty||function(e,t,r){e[t]=r.value},s="function"==typeof Symbol?Symbol:{},c=s.iterator||"@@iterator",u=s.asyncIterator||"@@asyncIterator",f=s.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(C){l=function(e,t,r){return e[t]=r}}function p(e,t,r,n){var o=t&&t.prototype instanceof m?t:m,i=Object.create(o.prototype),s=new k(n||[]);return a(i,"_invoke",{value:F(e,r,s)}),i}function h(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(C){return{type:"throw",arg:C}}}t.wrap=p;var d={};function m(){}function g(){}function y(){}var v={};l(v,c,(function(){return this}));var w=Object.getPrototypeOf,b=w&&w(w(P([])));b&&b!==r&&i.call(b,c)&&(v=b);var x=y.prototype=m.prototype=Object.create(v);function _(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function r(o,a,s,c){var u=h(e[o],e,a);if("throw"!==u.type){var f=u.arg,l=f.value;return l&&"object"==n(l)&&i.call(l,"__await")?t.resolve(l.__await).then((function(e){r("next",e,s,c)}),(function(e){r("throw",e,s,c)})):t.resolve(l).then((function(e){f.value=e,s(f)}),(function(e){return r("throw",e,s,c)}))}c(u.arg)}var o;a(this,"_invoke",{value:function(e,n){function i(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(i,i):i()}})}function F(e,t,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return S()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var s=j(a,r);if(s){if(s===d)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=h(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function j(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,j(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var o=h(n,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,d;var i=o.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function P(e){if(e){var t=e[c];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(i.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:S}}function S(){return{value:void 0,done:!0}}return g.prototype=y,a(x,"constructor",{value:y,configurable:!0}),a(y,"constructor",{value:g,configurable:!0}),g.displayName=l(y,f,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,l(e,f,"GeneratorFunction")),e.prototype=Object.create(x),e},t.awrap=function(e){return{__await:e}},_(E.prototype),l(E.prototype,u,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new E(p(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},_(x),l(x,f,"Generator"),l(x,c,(function(){return this})),l(x,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=P,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&i.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,n){return a.type="throw",a.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var s=i.call(o,"catchLoc"),c=i.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:P(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},t}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports},7424:function(e,t,r){var n=r(5372),o=r(8872),i=r(6116),a=r(2218);e.exports=function(e,t){return n(e)||o(e,t)||i(e,t)||a()},e.exports.__esModule=!0,e.exports.default=e.exports},861:function(e,t,r){var n=r(3405),o=r(9498),i=r(6116),a=r(2281);e.exports=function(e){return n(e)||o(e)||i(e)||a()},e.exports.__esModule=!0,e.exports.default=e.exports},5036:function(e,t,r){var n=r(8698).default;e.exports=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},4062:function(e,t,r){var n=r(8698).default,o=r(5036);e.exports=function(e){var t=o(e,"string");return"symbol"===n(t)?t:String(t)},e.exports.__esModule=!0,e.exports.default=e.exports},8698:function(e){function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},6116:function(e,t,r){var n=r(3897);e.exports=function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},3681:function(e){"use strict";e.exports=JSON.parse('{"name":"@ffmpeg/ffmpeg","version":"0.11.6","description":"FFmpeg WebAssembly version","main":"src/index.js","types":"src/index.d.ts","directories":{"example":"examples"},"scripts":{"start":"node scripts/server.js","start:worker":"node scripts/worker-server.js","build":"rimraf dist && webpack --config scripts/webpack.config.prod.js","build:worker":"rimraf dist && webpack --config scripts/webpack.config.worker.prod.js","prepublishOnly":"npm run build","lint":"eslint src","wait":"rimraf dist && wait-on http://localhost:3000/dist/ffmpeg.dev.js","test":"npm-run-all -p -r start test:all","test:all":"npm-run-all wait test:browser:ffmpeg test:node:all","test:node":"node node_modules/mocha/bin/_mocha --exit --bail --require ./scripts/test-helper.js","test:node:all":"npm run test:node -- ./tests/*.test.js","test:browser":"mocha-headless-chrome -a allow-file-access-from-files -a incognito -a no-sandbox -a disable-setuid-sandbox -a disable-logging -t 300000","test:browser:ffmpeg":"npm run test:browser -- -f ./tests/ffmpeg.test.html"},"browser":{"./src/node/index.js":"./src/browser/index.js"},"repository":{"type":"git","url":"git+https://github.com/ffmpegwasm/ffmpeg.wasm.git"},"keywords":["ffmpeg","WebAssembly","video"],"author":"Jerome Wu <jeromewus@gmail.com>","license":"MIT","bugs":{"url":"https://github.com/ffmpegwasm/ffmpeg.wasm/issues"},"engines":{"node":">=12.16.1"},"homepage":"https://github.com/ffmpegwasm/ffmpeg.wasm#readme","dependencies":{"is-url":"^1.2.4","node-fetch":"^2.6.1","regenerator-runtime":"^0.13.7","resolve-url":"^0.2.1"},"devDependencies":{"@babel/core":"^7.12.3","@babel/preset-env":"^7.12.1","@ffmpeg/core":"^0.11.0","@types/emscripten":"^1.39.4","babel-eslint":"^10.1.0","babel-loader":"^8.1.0","chai":"^4.2.0","cors":"^2.8.5","eslint":"^7.12.1","eslint-config-airbnb-base":"^14.1.0","eslint-plugin-import":"^2.22.1","express":"^4.17.1","mocha":"^8.2.1","mocha-headless-chrome":"^2.0.3","npm-run-all":"^4.1.5","wait-on":"^5.3.0","webpack":"^5.3.2","webpack-cli":"^4.1.0","webpack-dev-middleware":"^4.0.0"}}')}}]);
//# sourceMappingURL=213.5172ee66.chunk.js.map
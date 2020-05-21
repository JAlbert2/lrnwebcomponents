!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit-element/lit-element.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js"],t):t((n=n||self).HexagonLoader={},n.litElement_js)}(this,function(n,t){"use strict";function e(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function i(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function a(n,t,e){return t&&i(n.prototype,t),e&&i(n,e),n}function o(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function s(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})),e.push.apply(e,i)}return e}function r(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&f(n,t)}function l(n){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function f(n,t){return(f=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function c(n,t,e){return(c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(n){return!1}}()?Reflect.construct:function(n,t,e){var i=[null];i.push.apply(i,t);var a=new(Function.bind.apply(n,i));return e&&f(a,e.prototype),a}).apply(null,arguments)}function m(n){var t="function"==typeof Map?new Map:void 0;return(m=function(n){if(null===n||(e=n,-1===Function.toString.call(e).indexOf("[native code]")))return n;var e;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(n))return t.get(n);t.set(n,i)}function i(){return c(n,arguments,l(this).constructor)}return i.prototype=Object.create(n.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),f(i,n)})(n)}function p(n,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):t}function u(n,t,e){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(n,t,e){var i=function(n,t){for(;!Object.prototype.hasOwnProperty.call(n,t)&&null!==(n=l(n)););return n}(n,t);if(i){var a=Object.getOwnPropertyDescriptor(i,t);return a.get?a.get.call(e):a.value}})(n,t,e||n)}function b(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}var h=function(n){function t(){var n,i=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return e(this,t),(n=p(this,l(t).call(this))).tag=t.tag,n._queue=[],n.template=document.createElement("template"),n.attachShadow({mode:"open"}),i||n.render(),n}return r(t,m(HTMLElement)),a(t,[{key:"html",get:function(){return"\n<style>\n:host {\n  display: inline-flex;\n  position: relative;\n  height: 36px;\n  width: 36px;\n}\n\n:host div,\n:host div:before,\n:host div:after {\n background-color: var(--hexagon-color, orange);\n}\n\ndiv {\n  width: 30px;\n  height: 18px;\n  margin: 9px 3px;\n  position: absolute;\n  color: var(--hexagon-color, orange);\n}\ndiv:before, div:after {\n  content: '';\n  position: absolute;\n  width: 30px;\n  height: 18px;\n}\ndiv:before {\n  -webkit-transform: rotate(60deg);\n          transform: rotate(60deg);\n}\ndiv:after {\n  -webkit-transform: rotate(-60deg);\n          transform: rotate(-60deg);\n}\n</style>\n    <div></div>"}}],[{key:"tag",get:function(){return"hex-a-gon"}}]),a(t,[{key:"connectedCallback",value:function(){window.ShadyCSS&&window.ShadyCSS.styleElement(this),this._queue.length&&this._processQueue()}},{key:"_copyAttribute",value:function(n,t){var e=this.shadowRoot.querySelectorAll(t),i=this.getAttribute(n),a=null==i?"removeAttribute":"setAttribute",o=!0,s=!1,r=void 0;try{for(var l,f=e[Symbol.iterator]();!(o=(l=f.next()).done);o=!0){l.value[a](n,i)}}catch(n){s=!0,r=n}finally{try{o||null==f.return||f.return()}finally{if(s)throw r}}}},{key:"_queueAction",value:function(n){this._queue.push(n)}},{key:"_processQueue",value:function(){var n=this;this._queue.forEach(function(t){n["_".concat(t.type)](t.data)}),this._queue=[]}},{key:"_setProperty",value:function(n){var t=n.name,e=n.value;this[t]=e}},{key:"render",value:function(){this.shadowRoot.innerHTML=null,this.template.innerHTML=this.html,window.ShadyCSS&&window.ShadyCSS.prepareTemplate(this.template,this.tag),this.shadowRoot.appendChild(this.template.content.cloneNode(!0))}}]),t}();function y(){var n=b(['\n:host {\n  display: none;\n}\n:host([hidden]) {\n  display: none;\n}\n:host([loading]) {\n  display: block;\n}\n:host([size="small"]) {\n  transform: scale(.5, .5);\n  -webkit-transform: scale(.5, .5);\n  -moz-transform: scale(.5, .5);\n  -ms-transform: scale(.5, .5);\n  -o-transform: scale(.5, .5);\n}\n:host([size="large"]) {\n  transform: scale(1.25, 1.25);\n  -webkit-transform: scale(1.25, 1.25);\n  -moz-transform: scale(1.25, 1.25);\n  -ms-transform: scale(1.25, 1.25);\n  -o-transform: scale(1.25, 1.25);\n}\n:host([size="epic"]) {\n  transform: scale(2.5, 2.5);\n  -webkit-transform: scale(2.5, 2.5);\n  -moz-transform: scale(2.5, 2.5);\n  -ms-transform: scale(2.5, 2.5);\n  -o-transform: scale(2.5, 2.5);\n}\n\ndiv {\n  position: relative;\n  width: 255px;\n  height: 232.5px;\n  margin: 0 auto;\n}\n\nhex-a-gon {\n  display: none;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 30px;\n  height: 18px;\n  color: #9fb475;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n}\n\nhex-a-gon:nth-of-type(1) {\n  display: block;\n  margin-left: -56.25px;\n  margin-top: -97.875px;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n}\nhex-a-gon:nth-of-type(2) {\n  display: block;\n  margin-left: -18.75px;\n  margin-top: -97.875px;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.05s;\n          animation-delay: 0.05s;\n}\nhex-a-gon:nth-of-type(3) {\n  display: block;\n  margin-left: 18.75px;\n  margin-top: -97.875px;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.1s;\n          animation-delay: 0.1s;\n}\nhex-a-gon:nth-of-type(4) {\n  display: block;\n  margin-left: 56.25px;\n  margin-top: -97.875px;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.15s;\n          animation-delay: 0.15s;\n}\nhex-a-gon:nth-of-type(5) {\n  display: block;\n  margin-left: -75px;\n  margin-top: -65.25px;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n}\nhex-a-gon:nth-of-type(6) {\n  display: block;\n  margin-left: -37.5px;\n  margin-top: -65.25px;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.05s;\n          animation-delay: 0.05s;\n}\nhex-a-gon:nth-of-type(7) {\n  display: block;\n  margin-left: 0px;\n  margin-top: -65.25px;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.1s;\n          animation-delay: 0.1s;\n}\nhex-a-gon:nth-of-type(8) {\n  display: block;\n  margin-left: 37.5px;\n  margin-top: -65.25px;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.15s;\n          animation-delay: 0.15s;\n}\nhex-a-gon:nth-of-type(9) {\n  display: block;\n  margin-left: 75px;\n  margin-top: -65.25px;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s;\n}\nhex-a-gon:nth-of-type(10) {\n  display: block;\n  margin-left: -93.75px;\n  margin-top: -32.625px;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n}\nhex-a-gon:nth-of-type(11) {\n  display: block;\n  margin-left: -56.25px;\n  margin-top: -32.625px;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.05s;\n          animation-delay: 0.05s;\n}\nhex-a-gon:nth-of-type(12) {\n  display: block;\n  margin-left: -18.75px;\n  margin-top: -32.625px;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.1s;\n          animation-delay: 0.1s;\n}\nhex-a-gon:nth-of-type(13) {\n  display: block;\n  margin-left: 18.75px;\n  margin-top: -32.625px;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.15s;\n          animation-delay: 0.15s;\n}\nhex-a-gon:nth-of-type(14) {\n  display: block;\n  margin-left: 56.25px;\n  margin-top: -32.625px;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s;\n}\nhex-a-gon:nth-of-type(15) {\n  display: block;\n  margin-left: 93.75px;\n  margin-top: -32.625px;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.25s;\n          animation-delay: 0.25s;\n}\nhex-a-gon:nth-of-type(16) {\n  display: block;\n  margin-left: -112.5px;\n  margin-top: 0px;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n}\nhex-a-gon:nth-of-type(17) {\n  display: block;\n  margin-left: -75px;\n  margin-top: 0px;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.05s;\n          animation-delay: 0.05s;\n}\nhex-a-gon:nth-of-type(18) {\n  display: block;\n  margin-left: -37.5px;\n  margin-top: 0px;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.1s;\n          animation-delay: 0.1s;\n}\nhex-a-gon:nth-of-type(19) {\n  display: block;\n  margin-left: 0px;\n  margin-top: 0px;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.15s;\n          animation-delay: 0.15s;\n}\nhex-a-gon:nth-of-type(20) {\n  display: block;\n  margin-left: 37.5px;\n  margin-top: 0px;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s;\n}\nhex-a-gon:nth-of-type(21) {\n  display: block;\n  margin-left: 75px;\n  margin-top: 0px;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.25s;\n          animation-delay: 0.25s;\n}\nhex-a-gon:nth-of-type(22) {\n  display: block;\n  margin-left: 112.5px;\n  margin-top: 0px;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.3s;\n          animation-delay: 0.3s;\n}\nhex-a-gon:nth-of-type(23) {\n  display: block;\n  margin-left: -93.75px;\n  margin-top: 32.625px;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n}\nhex-a-gon:nth-of-type(24) {\n  display: block;\n  margin-left: -56.25px;\n  margin-top: 32.625px;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.05s;\n          animation-delay: 0.05s;\n}\nhex-a-gon:nth-of-type(25) {\n  display: block;\n  margin-left: -18.75px;\n  margin-top: 32.625px;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.1s;\n          animation-delay: 0.1s;\n}\nhex-a-gon:nth-of-type(26) {\n  display: block;\n  margin-left: 18.75px;\n  margin-top: 32.625px;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.15s;\n          animation-delay: 0.15s;\n}\nhex-a-gon:nth-of-type(27) {\n  display: block;\n  margin-left: 56.25px;\n  margin-top: 32.625px;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s;\n}\nhex-a-gon:nth-of-type(28) {\n  display: block;\n  margin-left: 93.75px;\n  margin-top: 32.625px;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.25s;\n          animation-delay: 0.25s;\n}\nhex-a-gon:nth-of-type(29) {\n  display: block;\n  margin-left: -75px;\n  margin-top: 65.25px;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n}\nhex-a-gon:nth-of-type(30) {\n  display: block;\n  margin-left: -37.5px;\n  margin-top: 65.25px;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.05s;\n          animation-delay: 0.05s;\n}\nhex-a-gon:nth-of-type(31) {\n  display: block;\n  margin-left: 0px;\n  margin-top: 65.25px;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.1s;\n          animation-delay: 0.1s;\n}\nhex-a-gon:nth-of-type(32) {\n  display: block;\n  margin-left: 37.5px;\n  margin-top: 65.25px;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.15s;\n          animation-delay: 0.15s;\n}\nhex-a-gon:nth-of-type(33) {\n  display: block;\n  margin-left: 75px;\n  margin-top: 65.25px;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s;\n}\nhex-a-gon:nth-of-type(34) {\n  display: block;\n  margin-left: -56.25px;\n  margin-top: 97.875px;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n}\nhex-a-gon:nth-of-type(35) {\n  display: block;\n  margin-left: -18.75px;\n  margin-top: 97.875px;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.05s;\n          animation-delay: 0.05s;\n}\nhex-a-gon:nth-of-type(36) {\n  display: block;\n  margin-left: 18.75px;\n  margin-top: 97.875px;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.1s;\n          animation-delay: 0.1s;\n}\nhex-a-gon:nth-of-type(37) {\n  display: block;\n  margin-left: 56.25px;\n  margin-top: 97.875px;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.15s;\n          animation-delay: 0.15s;\n}\n\n@-webkit-keyframes scaleIt {\n  25%,100% {\n    -webkit-transform: scale(1) translate(-50%, -50%);\n            transform: scale(1) translate(-50%, -50%);\n  }\n  50% {\n    -webkit-transform: scale(0) translate(-50%, -50%);\n            transform: scale(0) translate(-50%, -50%);\n  }\n}\n\n@keyframes scaleIt {\n  25%,100% {\n    -webkit-transform: scale(1) translate(-50%, -50%);\n            transform: scale(1) translate(-50%, -50%);\n  }\n  50% {\n    -webkit-transform: scale(0) translate(-50%, -50%);\n            transform: scale(0) translate(-50%, -50%);\n  }\n}\n      ']);return y=function(){return n},n}function d(){var n=b(["<hex-a-gon></hex-a-gon>"]);return d=function(){return n},n}function g(){var n=b(["\n\n<div>\n  ","\n</div>"]);return g=function(){return n},n}window.customElements.define(h.tag,h);var k=function(n){function i(){var n;return e(this,i),(n=p(this,l(i).call(this))).itemCount=37,n.items=[],n}return r(i,t.LitElement),a(i,[{key:"render",value:function(){return t.html(g(),this.items.map(function(n){return t.html(d())}))}}],[{key:"styles",get:function(){return[t.css(y())]}},{key:"properties",get:function(){return function(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?s(Object(e),!0).forEach(function(t){o(n,t,e[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach(function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))})}return n}({},u(l(i),"properties",this),{color:{name:"color",type:String,reflect:!0},size:{name:"size",type:String,reflect:!0},loading:{name:"loading",type:Boolean,reflect:!0},items:{name:"items",type:Array},itemCount:{name:"itemCount",type:Number,reflect:!0,attribute:"item-count"}})}},{key:"tag",get:function(){return"hexagon-loader"}}]),a(i,[{key:"updated",value:function(n){var t=this;n.forEach(function(n,e){if("color"==e&&t._colorChanged(t[e],n),"itemCount"==e){t.items=[];for(var i=0;i<t[e];i++)t.items.push("")}})}},{key:"_colorChanged",value:function(n,t){n&&window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,{"--hexagon-color":n})}}]),i}();window.customElements.define(k.tag,k),n.HexagonLoader=k,Object.defineProperty(n,"__esModule",{value:!0})});
//# sourceMappingURL=hexagon-loader.umd.js.map

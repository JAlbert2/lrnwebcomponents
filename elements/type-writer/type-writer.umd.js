!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit-element/lit-element.js"),require("@lrnwebcomponents/intersection-element/lib/IntersectionObserverMixin.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js","@lrnwebcomponents/intersection-element/lib/IntersectionObserverMixin.js"],t):t((e=e||self).TypeWriter={},e.litElement_js,e.IntersectionObserverMixin_js)}(this,function(e,t,n){"use strict";function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e,t,n){return(p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=s(e)););return e}(e,t);if(i){var r=Object.getOwnPropertyDescriptor(i,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function l(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function f(){var e=l(["\n:host {\n  display: inline-block;\n  margin: 0px 0.1em;\n}\n\n@keyframes flickerAnimation {\n  0%   { opacity: 1; }\n\n  50%  { opacity: 0; }\n\n  100% { opacity: 1; }\n}\n@-o-keyframes flickerAnimation {\n  0%   { opacity: 1; }\n\n  50%  { opacity: 0; }\n\n  100% { opacity: 1; }\n}\n@-moz-keyframes flickerAnimation {\n  0%   { opacity: 1; }\n\n  50%  { opacity: 0; }\n\n  100% { opacity: 1; }\n}\n@-webkit-keyframes flickerAnimation {\n  0%   { opacity: 1; }\n\n  50%  { opacity: 0; }\n\n  100% { opacity: 1; }\n}\n  \n#cursor {\n  display: none;\n  opacity: 0;\n}\n\n:host([typing]) #cursor {\n  display: inline;\n  -webkit-animation: flickerAnimation 1s infinite;\n  -moz-animation: flickerAnimation 1s infinite;\n  -o-animation: flickerAnimation 1s infinite;\n  animation: flickerAnimation 1s infinite;\n}\n      "]);return f=function(){return e},e}function y(){var e=l(['\n\n<span id="text"></span><span id="cursor">|</span>']);return y=function(){return e},e}var d=function(e){function i(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(e=u(this,s(i).call(this))).delay=100,e.cursorDuration=0,e.speed=150,e.eraseSpeed=80,e.typing=!1,e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(i,n.IntersectionObserverMixin(t.LitElement)),r(i,[{key:"render",value:function(){return t.html(y())}}],[{key:"styles",get:function(){return[t.css(f())]}},{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Type writer",description:"typewritter effect",icon:"icons:android",color:"green",groups:["Writer"],handles:[{type:"todo:read-the-docs-for-usage"}],meta:{author:"btopro",owner:"The Pennsylvania State University"}},settings:{quick:[],configure:[{property:"delay",description:"",inputMethod:"textfield",required:!1,icon:"icons:android"},{property:"cursorDuration",description:"",inputMethod:"textfield",required:!1,icon:"icons:android"},{property:"text",description:"",inputMethod:"textfield",required:!1,icon:"icons:android"},{property:"speed",description:"",inputMethod:"textfield",required:!1,icon:"icons:android"},{property:"typing",description:"",inputMethod:"boolean",required:!1,icon:"icons:android"}],advanced:[]}}}},{key:"properties",get:function(){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach(function(t){o(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},p(s(i),"properties",this),{delay:{type:Number},cursorDuration:{type:Number,attribute:"cursor-duration"},text:{type:String},speed:{type:Number},elementVisible:{type:Boolean},eraseSpeed:{type:Number,attribute:"erase-speed"},typing:{type:Boolean,reflect:!0},_length:{type:Number},_oldText:{type:String}})}},{key:"tag",get:function(){return"type-writer"}}]),r(i,[{key:"_observeText",value:function(e,t,n){var i=this;if(e&&void 0!==t&&n){if(this.shadowRoot.querySelector("#text").textContent)return this._oldText=this.shadowRoot.querySelector("#text").textContent,this.typing&&this._cancel&&(clearTimeout(this._cancel),this._cancel=null),this.erase();this._length=0,setTimeout(function(){i.type()},this.delay)}}},{key:"type",value:function(){var e=this;this.typing=!0,this.shadowRoot.querySelector("#text").textContent=this.text.substr(0,this._length++),this._length<this.text.length+1?this._cancel=setTimeout(function(){e.type()},this.speed+(Math.random()-.5)*this.speed/2):setTimeout(function(){e.typing=!1,e.dispatchEvent(new CustomEvent("type-writer-end",{detail:e.text,bubbles:!0,composed:!0}))},this.cursorDuration)}},{key:"erase",value:function(){var e=this;this.typing=!0,this.shadowRoot.querySelector("#text").textContent=this._oldText.substr(0,this._length--),this._length>=0?this._cancel=setTimeout(function(){e.erase()},this.eraseSpeed||this.speed):this.type()}},{key:"updated",value:function(e){var t=this;e.forEach(function(e,n){["text","delay","elementVisible"].includes(n)&&t._observeText(t.text,t.delay,t.elementVisible)})}}]),i}();customElements.define(d.tag,d),e.TypeWriter=d,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=type-writer.umd.js.map

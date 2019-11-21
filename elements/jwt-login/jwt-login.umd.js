!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit-element/lit-element.js"),require("@polymer/iron-ajax/iron-ajax.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js","@polymer/iron-ajax/iron-ajax.js"],t):t((e=e||self).JwtLogin={},e.litElement_js)}(this,function(e,t){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function r(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function s(){var e=a(['\n      <iron-ajax\n        ?auto="','"\n        id="loginrequest"\n        method="','"\n        url="','"\n        handle-as="json"\n        content-type="application/json"\n        @response="','"\n      >\n      </iron-ajax>\n    ']);return s=function(){return e},e}function f(){var e=a(["\n      <style>\n        :host {\n          display: none;\n        }\n      </style>\n      "]);return f=function(){return e},e}var y=function(e){function o(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(e=c(this,u(o).call(this))).auto=!1,e.method="GET",e.body={},e.key="jwt",e.jwt=null,e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(o,t.LitElement),r(o,null,[{key:"styles",get:function(){return[t.css(f())]}}]),r(o,[{key:"render",value:function(){return t.html(s(),this.auto,this.method,this.url,this.loginResponse)}},{key:"updated",value:function(e){var t=this;e.forEach(function(e,n){"jwt"==n&&(t._jwtChanged(t[n],e),t.dispatchEvent(new CustomEvent("jwt-changed",{detail:{value:t[n]}})))})}},{key:"_jwtChanged",value:function(e,t){null!=e&&""!=e||"undefined"===n(t)?e&&(localStorage.setItem(this.key,e),this.dispatchEvent(new CustomEvent("jwt-token",{bubbles:!0,cancelable:!0,composed:!0,detail:e})),this.dispatchEvent(new CustomEvent("jwt-logged-in",{bubbles:!0,cancelable:!0,composed:!0,detail:!0}))):(localStorage.removeItem(this.key),this.dispatchEvent(new CustomEvent("jwt-logged-in",{bubbles:!0,cancelable:!0,composed:!0,detail:!1})))}},{key:"firstUpdated",value:function(e){this.jwt=localStorage.getItem(this.key)}},{key:"toggleLogin",value:function(){null==this.jwt?(this.shadowRoot.querySelector("#loginrequest").body=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){i(e,t,n[t])})}return e}({},this.body),this.shadowRoot.querySelector("#loginrequest").generateRequest()):(this.body={},this.jwt=null)}},{key:"loginResponse",value:function(e){this.jwt=e.detail.response}}],[{key:"tag",get:function(){return"jwt-login"}},{key:"properties",get:function(){return{auto:{type:Boolean},url:{type:String},method:{type:String},body:{type:Object},key:{type:String},jwt:{type:String}}}}]),o}();window.customElements.define(y.tag,y),e.JwtLogin=y,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=jwt-login.umd.js.map

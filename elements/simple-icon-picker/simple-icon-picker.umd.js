!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@lrnwebcomponents/simple-picker/simple-picker.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icons.js"),require("@lrnwebcomponents/simple-icon/lib/simple-iconset.js")):"function"==typeof define&&define.amd?define(["exports","@lrnwebcomponents/simple-picker/simple-picker.js","@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js","@lrnwebcomponents/simple-icon/lib/simple-icons.js","@lrnwebcomponents/simple-icon/lib/simple-iconset.js"],t):t((e=e||self).SimpleIconPicker={},e.simplePicker_js,null,null,e.simpleIconset_js)}(this,function(e,t,n,o,r){"use strict";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach(function(t){s(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,o=a(e);if(t){var r=a(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return y(this,n)}}function d(e,t,n){return(d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=a(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(o,t.SimplePicker);var n=h(o);function o(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(e=n.call(this)).hideOptionLabels=!0,e.allowNull=!1,e.icons=[],e.value=null,e.options=[],e.optionsPerRow=10,e}return l(o,null,[{key:"properties",get:function(){return p(p({},d(a(o),"properties",this)),{},{allowNull:{type:Boolean},icons:{type:Array},includeSets:{type:Array,attribute:"include-sets"},excludeSets:{type:Array,attribute:"exclude-sets"},exclude:{type:Array,attribute:"exclude"},value:{type:String,reflect:!0},optionsPerRow:{type:Number},__iconList:{type:Array}})}},{key:"tag",get:function(){return"simple-icon-picker"}}]),l(o,[{key:"updated",value:function(e){var t=this;d(a(o.prototype),"updated",this)&&d(a(o.prototype),"updated",this).call(this,e),e.forEach(function(e,n){["optionsPerRow","icons","allowNull","__iconList"].includes(n)&&(clearTimeout(t.__rebuild),t.__rebuild=setTimeout(function(){t._getOptions()},0)),"value"==n&&t.dispatchEvent(new CustomEvent("value-changed",{detail:{value:t[n]}}))})}},{key:"firstUpdated",value:function(e){d(a(o.prototype),"firstUpdated",this)&&d(a(o.prototype),"firstUpdated",this).call(this,e)}},{key:"_getStoredIcons",value:function(){var e=r.SimpleIconsetStore&&r.SimpleIconsetStore.iconlist?r.SimpleIconsetStore.iconlist:[],t=!!(this.includeSets&&this.includeSets.length>0)&&(i(this.includeSets)!==i([])?JSON.parse(this.includeSets):this.includeSets),n=!!(this.excludeSets&&this.excludeSets.length>0)&&(i(this.excludeSets)!==i([])?JSON.parse(this.excludeSets):this.excludeSets),o=!!(this.exclude&&this.exclude.length>0)&&(i(this.exclude)!==i([])?JSON.parse(this.exclude):this.exclude);return(t||n||o)&&(e=e.filter(function(e){var r=e,i=e,c=!0;return r=r.replace(/:.*/,""),i.replace("icons:",""),o&&(o.includes(e)||o.includes("icons:".concat(i)))&&(c=!1),t&&!t.includes(r)&&(c=!1),n&&n.includes(r)&&(c=!1),c})),e}},{key:"_getOptions",value:function(){var e="string"==typeof this.icons?JSON.parse(this.icons):this.icons,t=this.optionsPerRow;0===e.length&&(e=this._getStoredIcons());var n=!1===this.allowNull?[]:[[{alt:"null",value:null}]],o=!1===this.allowNull?0:1;t=Math.sqrt(e.length+o)<=this.optionsPerRow?Math.ceil(Math.sqrt(e.length+o)):this.optionsPerRow;for(var r=0;r<e.length;r++){var i=o+r,c=Math.floor(i/t),l=i-c*t;void 0!==n[c]&&null!==n[c]||(n[c]=[]),n[c][l]={alt:e[r],icon:e[r],value:e[r]}}this.options=n}},{key:"_setSelectedOption",value:function(){this.options.length>1&&d(a(o.prototype),"_setSelectedOption",this).call(this)}}]),o}();window.customElements.define(b.tag,b),e.SimpleIconPicker=b,Object.defineProperty(e,"__esModule",{value:!0})});

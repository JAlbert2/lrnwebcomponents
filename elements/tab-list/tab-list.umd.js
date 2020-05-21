!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit-element/lit-element.js"),require("@polymer/paper-tabs/paper-tabs.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js","@polymer/paper-tabs/paper-tabs.js"],t):t((e=e||self).TabList={},e.litElement_js)}(this,function(e,t){"use strict";function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function p(){var e=s(['\n            <paper-tab>\n              <a\n                target="_blank"\n                href="','"\n                tabindex="-1"\n                rel="noopener noreferrer"\n              >\n                <paper-button raised>',"</paper-button>\n              </a>\n            </paper-tab>\n          "]);return p=function(){return e},e}function u(){var e=s(["\n      <paper-tabs>\n        ","\n      </paper-tabs>\n    "]);return u=function(){return e},e}function l(){var e=s(["\n        :host {\n          display: block;\n          margin: 0 auto;\n          list-style: none;\n          display: block;\n          padding: 16px;\n          border-bottom: 1px solid black;\n        }\n        paper-tabs {\n          align-items: center;\n          justify-items: center;\n        }\n        paper-tab a {\n          text-decoration: none;\n          flex: unset;\n          height: unset;\n          width: 100%;\n          text-align: center;\n        }\n        paper-button {\n          text-transform: unset;\n          width: 100%;\n          display: block;\n          min-width: unset;\n          margin: 0;\n          text-overflow: ellipsis;\n          overflow: hidden;\n        }\n        @media screen and (max-width: 600px) {\n          paper-tab {\n            display: block;\n          }\n        }\n      "]);return l=function(){return e},e}var c=function(e){function n(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),(e=a(this,o(n).call(this))).tabs=[],import("@polymer/paper-tabs/paper-tab.js"),import("@polymer/paper-button/paper-button.js"),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(n,t.LitElement),r(n,null,[{key:"styles",get:function(){return[t.css(l())]}}]),r(n,[{key:"render",value:function(){return t.html(u(),this.tabs.map(function(e){return t.html(p(),e.link,e.label)}))}},{key:"updated",value:function(e){var t=this;e.forEach(function(e,n){"tabs"==n&&t.dispatchEvent(new CustomEvent("tabs-changed",{bubbles:!0,cancelable:!0,composed:!0,detail:t[n]}))})}}],[{key:"tag",get:function(){return"tab-list"}},{key:"properties",get:function(){return{tabs:{type:Array}}}},{key:"haxProperties",get:function(){return{canScale:!1,canPosition:!1,canEditSource:!1,gizmo:{title:"Tabs",description:"A list of links as tabs.",icon:"icons:tab",color:"grey",groups:["Presentation","Links"],handles:[],meta:{author:"ELMS:LN"}},settings:{quick:[],configure:[{property:"tabs",title:"Tabs",description:"Listing of tabs",inputMethod:"array",itemLabel:"label",properties:[{property:"link",title:"Link",description:"link to go to",inputMethod:"textfield",required:!0},{property:"label",title:"Label",description:"text to place on the tab",inputMethod:"textfield",required:!0}]}],advanced:[]}}}}]),n}();window.customElements.define(c.tag,c),e.TabList=c,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=tab-list.umd.js.map

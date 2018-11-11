!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?e(require("@polymer/polymer/polymer-legacy.js"),require("@lrnwebcomponents/a11y-behaviors/a11y-behaviors.js"),require("@lrnwebcomponents/materializecss-styles/materializecss-styles.js")):"function"==typeof define&&define.amd?define(["@polymer/polymer/polymer-legacy.js","@lrnwebcomponents/a11y-behaviors/a11y-behaviors.js","@lrnwebcomponents/materializecss-styles/materializecss-styles.js"],e):e(n.polymerLegacy_js)}(this,function(n){"use strict";function e(){var n,o,t=(n=['\n    <style>\n      :host {\n        display: block;\n        --container-bg-color: lightgray;\n        --container-text-color: black;\n        --container-padding: 16px;\n        --container-outset: 0;\n        @apply --host-styles;\n      }\n\n      #container {\n        display: block;\n        background: var(--container-bg-color);\n        color: var(--container-text-color);\n        padding: var(--container-padding);\n        margin-left: -var(--container-outset);\n        @apply --container-styles;\n      }\n\n      #header {\n        display: flex;\n        align-items: center;\n        @apply --container-header;\n      }\n\n      #icon {\n        margin-right: 8px;\n        @apply --icon-styles;\n      }\n\n      #label {\n        font-size: 20.8px;\n        margin: 12.8px 0;\n        flex: 1 1 auto;\n        @apply --label-styles;\n      }\n    </style>\n    <div id="container">\n      <div id="header">\n        <iron-icon id="icon" icon="[[icon]]" hidden$="[[!icon]]"></iron-icon>\n        <div id="label" hidden$="[[!label]]">[[label]]</div>\n      </div>\n      <slot></slot>\n    </div>\n'],(o=['\n    <style>\n      :host {\n        display: block;\n        --container-bg-color: lightgray;\n        --container-text-color: black;\n        --container-padding: 16px;\n        --container-outset: 0;\n        @apply --host-styles;\n      }\n\n      #container {\n        display: block;\n        background: var(--container-bg-color);\n        color: var(--container-text-color);\n        padding: var(--container-padding);\n        margin-left: -var(--container-outset);\n        @apply --container-styles;\n      }\n\n      #header {\n        display: flex;\n        align-items: center;\n        @apply --container-header;\n      }\n\n      #icon {\n        margin-right: 8px;\n        @apply --icon-styles;\n      }\n\n      #label {\n        font-size: 20.8px;\n        margin: 12.8px 0;\n        flex: 1 1 auto;\n        @apply --label-styles;\n      }\n    </style>\n    <div id="container">\n      <div id="header">\n        <iron-icon id="icon" icon="[[icon]]" hidden\\$="[[!icon]]"></iron-icon>\n        <div id="label" hidden\\$="[[!label]]">[[label]]</div>\n      </div>\n      <slot></slot>\n    </div>\n'])||(o=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(o)}})));return e=function(){return t},t}n.Polymer({_template:n.html(e()),is:"lrndesign-sidenote",behaviors:[A11yBehaviors.A11y,MaterializeCSSBehaviors.ColorBehaviors],properties:{label:{type:String,value:""},icon:{type:String,value:""},bgColor:{type:String,value:"#f7f7f7"},outset:{type:Number,value:0},outsetMeasurementType:{type:String,value:"em"}},created:function(){for(var n in this.properties){var e=this.is;e=e.replace("-"," ").replace(/(?:^\w|[A-Z]|\b\w)/g,function(n,e){return 0==e?n.toLowerCase():n.toUpperCase()}).replace(/\s+/g,""),void 0!==window[e]&&void 0!==window[e][n]&&(this.properties[n].value=window[e][n])}},observers:["__updateStyles(bgColor, outset, outsetMeasurementType)"],__updateStyles:function(n,e,o){var t=this._colorTransformFromClass(n)||n;this.updateStyles({"--container-text-color":this.getTextContrastColor(t),"--container-bg-color":t,"--container-outset":"".concat(Number(e)).concat(o)})}})});
//# sourceMappingURL=lrndesign-sidenote.umd.js.map

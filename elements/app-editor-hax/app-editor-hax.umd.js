!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(require("@polymer/polymer/polymer-legacy.js"),require("@lrnwebcomponents/hax-body/lib/hax-store.js"),require("@lrnwebcomponents/hax-body/hax-body.js"),require("@lrnwebcomponents/hax-body/lib/hax-autoloader.js"),require("@lrnwebcomponents/hax-body/lib/hax-manager.js"),require("@lrnwebcomponents/hax-body/lib/hax-panel.js"),require("@lrnwebcomponents/hax-body/lib/hax-app-picker.js"),require("@lrnwebcomponents/hax-body/lib/hax-export-dialog.js")):"function"==typeof define&&define.amd?define(["@polymer/polymer/polymer-legacy.js","@lrnwebcomponents/hax-body/lib/hax-store.js","@lrnwebcomponents/hax-body/hax-body.js","@lrnwebcomponents/hax-body/lib/hax-autoloader.js","@lrnwebcomponents/hax-body/lib/hax-manager.js","@lrnwebcomponents/hax-body/lib/hax-panel.js","@lrnwebcomponents/hax-body/lib/hax-app-picker.js","@lrnwebcomponents/hax-body/lib/hax-export-dialog.js"],n):n(e.polymerLegacy_js)}(this,function(e){"use strict";function n(){var e,o,a=(e=['\n    <style>\n      :host {\n        display: block;\n        font-size: 16px;\n        box-sizing: content-box;\n      }\n    </style>\n    <hax-store skip-exit-trap="" hidden="" app-store="[[appStoreConnection]]"></hax-store>\n    <hax-autoloader hidden=""></hax-autoloader>\n    <hax-panel id="panel" hide-panel-ops="" hide-export-button="" hide-preferences-button$="[[hidePreferencesButton]]" align="right"></hax-panel>\n    <hax-body id="body"></hax-body>\n    <hax-manager></hax-manager>\n    <hax-export-dialog></hax-export-dialog>\n    <hax-app-picker></hax-app-picker>\n'],(o=['\n    <style>\n      :host {\n        display: block;\n        font-size: 16px;\n        box-sizing: content-box;\n      }\n    </style>\n    <hax-store skip-exit-trap="" hidden="" app-store="[[appStoreConnection]]"></hax-store>\n    <hax-autoloader hidden=""></hax-autoloader>\n    <hax-panel id="panel" hide-panel-ops="" hide-export-button="" hide-preferences-button\\$="[[hidePreferencesButton]]" align="right"></hax-panel>\n    <hax-body id="body"></hax-body>\n    <hax-manager></hax-manager>\n    <hax-export-dialog></hax-export-dialog>\n    <hax-app-picker></hax-app-picker>\n'])||(o=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(o)}})));return n=function(){return a},a}e.Polymer({_template:e.html(n()),is:"app-editor-hax",properties:{appStoreConnection:{type:Object},hidePreferencesButton:{value:!1,type:Boolean}},save:function(){var e=window.HaxStore.instance.activeHaxBody.haxToContent();this.fire("app-editor-hax-save",e)},import:function(e){window.HaxStore.instance.activeHaxBody.importContent(e),this.fire("app-editor-hax-import",!0)}})});
//# sourceMappingURL=app-editor-hax.umd.js.map

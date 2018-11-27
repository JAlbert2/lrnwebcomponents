define([
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./node_modules/@lrnwebcomponents/random-image/random-image.js",
  "./node_modules/@polymer/paper-button/paper-button.js"
], function(_polymerLegacy, _randomImage, _paperButton) {
  "use strict";
  function _templateObject_84ec8ce0f1e511e8be39150c9bedf50a() {
    var data = babelHelpers.taggedTemplateLiteral([
      '\n    <style>\n      :host {\n        display: block;\n      }\n    </style>\n    <div id="list">\n      <random-image images-list$="{{images}}"></random-image>\n  </div>\n  <paper-button raised on-click="reload">Reload</paper-button>\n'
    ]);
    _templateObject_84ec8ce0f1e511e8be39150c9bedf50a = function _templateObject_84ec8ce0f1e511e8be39150c9bedf50a() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_84ec8ce0f1e511e8be39150c9bedf50a()
    ),
    is: "lrnsys-randomimage",
    properties: {
      images: {
        type: Object,
        notify: !0,
        value: function value() {
          return [];
        }
      }
    },
    reload: function reload(e) {
      var root = this;
      this.$.list.innerHTML = this.$.list.innerHTML;
    }
  });
});

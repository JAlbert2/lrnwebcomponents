define(["./node_modules/@polymer/polymer/polymer-legacy.js"], function(
  _polymerLegacy
) {
  "use strict";
  function _templateObject_b445f800e5f611e895bc9fbf14b448c3() {
    var data = babelHelpers.taggedTemplateLiteral([
      '\n    <style>\n      :host {\n        display: block;\n      }\n    </style>\n    <div typeof="oer:SupportingMaterial">\n      <h2 property="oer:name" hidden$="[[!title]]">[[title]]</h2>\n      <div property="oer:description">\n        <slot></slot>\n      </div>\n    </div>\n'
    ]);
    _templateObject_b445f800e5f611e895bc9fbf14b448c3 = function() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_b445f800e5f611e895bc9fbf14b448c3()
    ),
    is: "lrn-content",
    properties: { title: { type: String, value: !1 } }
  });
});

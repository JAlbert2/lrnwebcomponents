define([
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./lib/relative-heading-manager.js"
], function(_polymerLegacy, _relativeHeadingManager) {
  "use strict";
  function _templateObject_d8226e20f1e511e8b6e5fb3c2927ae57() {
    var data = babelHelpers.taggedTemplateLiteral([
      '\n    <style>\n      :host {\n        display: block;\n      }\n    </style>\n    <div id="html"></div>\n'
    ]);
    _templateObject_d8226e20f1e511e8b6e5fb3c2927ae57 = function _templateObject_d8226e20f1e511e8b6e5fb3c2927ae57() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_d8226e20f1e511e8b6e5fb3c2927ae57()
    ),
    is: "relative-heading",
    properties: {
      subtopicOf: { type: String, value: null, reflectToAttribute: !0 },
      text: { type: String, value: null, reflectToAttribute: !0 },
      parentHeading: { type: Object, value: {} },
      tag: { type: String, value: null, reflectToAttribute: !0 }
    },
    created: function created() {
      window.RelativeHeadingManager.requestAvailability();
    },
    attached: function attached() {
      this.fire("heading-created", this);
    },
    attributeChanged: function attributeChanged(name, type) {
      if ("subtopic-of" === name) {
        this.fire("heading-created", this);
      } else if ("tag" === name) {
        this.fire("heading-changed", this);
        this.$.html.innerHTML =
          "<" + this.tag + ">" + this.text + "</" + this.tag + ">";
      }
    },
    _setParent: function _setParent(el) {
      var root = this;
      if (root.__parentListener !== void 0)
        root.parentHeading.removeEventListener("heading-changed");
      root.parentHeading = el;
      if (null !== el) {
        root.__parentListener = root.parentHeading.addEventListener(
          "heading-changed",
          function(e) {
            root._setTag();
          }
        );
      }
      this._setTag();
    },
    _setTag: function _setTag() {
      var tag = "h1",
        level = 1,
        h = function h(level) {
          return "h" + Math.max(Math.min(level, 6), 1);
        };
      if (null !== this.parentHeading) {
        if (
          this.parentHeading.tag !== void 0 &&
          null !== this.parentHeading.tag
        ) {
          level =
            parseInt(this.parentHeading.tag.toLowerCase().replace("h", "")) + 1;
        } else if (
          this.parentHeading.tagName !== void 0 &&
          this.parentHeading.tagName.match(/^H[0-6]$/)
        ) {
          level =
            parseInt(
              this.parentHeading.tagName.toLowerCase().replace("h", "")
            ) + 1;
        }
      } else if (this.tag !== void 0 && null !== this.tag) {
        level = parseInt(this.tag.toLowerCase().replace("h", ""));
      }
      tag = h(level);
      this.tag = tag;
    }
  });
});

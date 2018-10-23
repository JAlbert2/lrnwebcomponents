define([
  "exports",
  "./node_modules/@polymer/polymer/polymer-element.js",
  "./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"
], function(_exports, _polymerElement, _HAXWiring) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.LrnsysRenderHtml = void 0;
  function _templateObject_44ab5830d6fd11e8a3333d29a6cfbad2() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<slot></slot>"
    ]);
    _templateObject_44ab5830d6fd11e8a3333d29a6cfbad2 = function() {
      return data;
    };
    return data;
  }
  var LrnsysRenderHtml = (function(_PolymerElement) {
    babelHelpers.inherits(LrnsysRenderHtml, _PolymerElement);
    function LrnsysRenderHtml() {
      babelHelpers.classCallCheck(this, LrnsysRenderHtml);
      return babelHelpers.possibleConstructorReturn(
        this,
        (
          LrnsysRenderHtml.__proto__ || Object.getPrototypeOf(LrnsysRenderHtml)
        ).apply(this, arguments)
      );
    }
    babelHelpers.createClass(
      LrnsysRenderHtml,
      [
        {
          key: "connectedCallback",
          value: function connectedCallback() {
            babelHelpers
              .get(
                LrnsysRenderHtml.prototype.__proto__ ||
                  Object.getPrototypeOf(LrnsysRenderHtml.prototype),
                "connectedCallback",
                this
              )
              .call(this);
            this.HAXWiring = new _HAXWiring.HAXWiring();
            this.HAXWiring.setHaxProperties(
              LrnsysRenderHtml.haxProperties,
              LrnsysRenderHtml.tag,
              this
            );
          }
        }
      ],
      [
        {
          key: "template",
          get: function get() {
            return (0, _polymerElement.html)(
              _templateObject_44ab5830d6fd11e8a3333d29a6cfbad2()
            );
          }
        },
        {
          key: "haxProperties",
          get: function get() {
            return {
              canScale: !0,
              canPosition: !0,
              canEditSource: !1,
              gizmo: {
                title: "Lrnsys render-html",
                description: "Automated conversion of lrnsys-render-html/",
                icon: "icons:android",
                color: "green",
                groups: ["Render"],
                handles: [{ type: "todo:read-the-docs-for-usage" }],
                meta: {
                  author: "btopro",
                  owner: "The Pennsylvania State University"
                }
              },
              settings: { quick: [], configure: [], advanced: [] }
            };
          }
        },
        {
          key: "properties",
          get: function get() {
            return {};
          }
        },
        {
          key: "tag",
          get: function get() {
            return "lrnsys-render-html";
          }
        }
      ]
    );
    return LrnsysRenderHtml;
  })(_polymerElement.PolymerElement);
  _exports.LrnsysRenderHtml = LrnsysRenderHtml;
  window.customElements.define(LrnsysRenderHtml.tag, LrnsysRenderHtml);
});

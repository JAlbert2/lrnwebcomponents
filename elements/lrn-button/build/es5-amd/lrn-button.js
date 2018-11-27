define([
  "exports",
  "./node_modules/@polymer/polymer/polymer-element.js",
  "./node_modules/@polymer/paper-button/paper-button.js",
  "./node_modules/@polymer/iron-icons/iron-icons.js",
  "./node_modules/@polymer/iron-icon/iron-icon.js",
  "./node_modules/@lrnwebcomponents/materializecss-styles/materializecss-styles.js",
  "./node_modules/@polymer/paper-tooltip/paper-tooltip.js"
], function(
  _exports,
  _polymerElement,
  _paperButton,
  _ironIcons,
  _ironIcon,
  _materializecssStyles,
  _paperTooltip
) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.LrnButton = void 0;
  function _templateObject_3a5f0270f1e511e8bb9f070e5c300403() {
    var data = babelHelpers.taggedTemplateLiteral([
      '\n<style>\n:host {\n    display: block;\n    @apply --paper-font-common-base;\n    @apply --paper-button;\n    --lrnsys-button-height: 48px;\n  }\n\n  :host(.center) {\n    text-align: center;\n  }\n\n  a {\n    text-decoration: none;\n    display: block;\n    color: #000000;\n  }\n\n  paper-button {\n    transition: .3s;\n    margin: 0;\n    max-width: 50%;\n    height: inherit;\n    -webkit-justify-content: flex-start;\n    justify-content: flex-start;\n    align-items: center;\n    border-radius: unset;\n  }\n\n  paper-button iron-icon {\n    height: var(--lrnsys-button-height);\n    margin: 0 12px;\n  }\n\n  paper-button div.inner {\n    height: var(--lrnsys-button-height);\n    line-height: var(--lrnsys-button-height);\n    padding: 0 12px;\n  }\n\n  paper-button span.label {\n    height: var(--lrnsys-button-height);\n    line-height: var(--lrnsys-button-height);\n  }\n\n  .no-margin {\n    margin: 0 !important;\n  }\n\n  .no-right-padding {\n    padding-right: 0 !important;\n  }\n\n  .no-left-padding {\n    padding-left: 0 !important;\n  }\n\n  .center {\n    text-align: center;\n    margin: 0 auto;\n  }\n</style>\n<style include="materializecss-styles-colors"></style>\n<a tabindex="-1" id="lrnsys-button-link" href$="[[showHref]]" data-prefetch-hover$="[[prefetch]]" target$="[[target]]">\n  <paper-button id="button" raised="[[raised]]" class$="[[class]] [[color]] [[textColor]]" disabled$="[[disabled]]">\n    <div class$="inner [[innerClass]]">\n      <iron-icon icon$="[[icon]]" id="icon" class$="[[iconClass]]" hidden$="[[!icon]]"></iron-icon>\n      <span class="label" hidden$="[[!label]]">\n        [[label]]\n      </span>\n      <slot></slot>\n    </div>\n  </paper-button>\n</a>\n<paper-tooltip for="lrnsys-button-link" animation-delay="0">[[alt]]</paper-tooltip>'
    ]);
    _templateObject_3a5f0270f1e511e8bb9f070e5c300403 = function _templateObject_3a5f0270f1e511e8bb9f070e5c300403() {
      return data;
    };
    return data;
  }
  var LrnButton = (function(_PolymerElement) {
    babelHelpers.inherits(LrnButton, _PolymerElement);
    function LrnButton() {
      babelHelpers.classCallCheck(this, LrnButton);
      return babelHelpers.possibleConstructorReturn(
        this,
        babelHelpers.getPrototypeOf(LrnButton).apply(this, arguments)
      );
    }
    babelHelpers.createClass(
      LrnButton,
      [
        {
          key: "connectedCallback",
          value: function connectedCallback() {
            babelHelpers
              .get(
                babelHelpers.getPrototypeOf(LrnButton.prototype),
                "connectedCallback",
                this
              )
              .call(this);
            this.addEventListener("mousedown", this.tapEventOn);
            this.addEventListener("mouseover", this.tapEventOn);
            this.addEventListener("mouseout", this.tapEventOff);
          }
        },
        {
          key: "disconnectedCallback",
          value: function disconnectedCallback() {
            babelHelpers
              .get(
                babelHelpers.getPrototypeOf(LrnButton.prototype),
                "disconnectedCallback",
                this
              )
              .call(this);
            this.removeEventListener("mousedown", this.tapEventOn);
            this.removeEventListener("mouseover", this.tapEventOn);
            this.removeEventListener("mouseout", this.tapEventOff);
            this.$.button.removeEventListener(
              "focused-changed",
              this.focusToggle
            );
          }
        },
        {
          key: "ready",
          value: function ready() {
            babelHelpers
              .get(
                babelHelpers.getPrototypeOf(LrnButton.prototype),
                "ready",
                this
              )
              .call(this);
            if (!this.disabled) {
              this.showHref = this.href;
            }
            this.$.button.addEventListener("focused-changed", this.focusToggle);
          }
        },
        {
          key: "tapEventOn",
          value: function tapEventOn(e) {
            var root = this;
            if (
              babelHelpers.typeof(root.hoverClass) !==
                ("undefined" === typeof void 0
                  ? "undefined"
                  : babelHelpers.typeof(void 0)) &&
              !root.disabled
            ) {
              var classes = root.hoverClass.split(" ");
              classes.forEach(function(item, index) {
                if ("" != item) {
                  root.$.button.classList.add(item);
                  if (-1 != item.indexOf("-")) {
                    root.$.icon.classList.add(item);
                  }
                }
              });
            }
          }
        },
        {
          key: "tapEventOff",
          value: function tapEventOff(e) {
            var root = this;
            if (
              babelHelpers.typeof(root.hoverClass) !==
                ("undefined" === typeof void 0
                  ? "undefined"
                  : babelHelpers.typeof(void 0)) &&
              !root.disabled
            ) {
              var classes = root.hoverClass.split(" ");
              classes.forEach(function(item, index) {
                if ("" != item) {
                  root.$.button.classList.remove(item);
                  if (-1 != item.indexOf("-")) {
                    root.$.icon.classList.remove(item);
                  }
                }
              });
            }
          }
        },
        {
          key: "focusToggle",
          value: function focusToggle(e) {
            var root = this;
            this.dispatchEvent(
              new CustomEvent("focus-changed", {
                bubbles: !0,
                composed: !0,
                detail: { focus: root.focusState }
              })
            );
            if (
              babelHelpers.typeof(root.hoverClass) !==
                ("undefined" === typeof void 0
                  ? "undefined"
                  : babelHelpers.typeof(void 0)) &&
              !root.disabled
            ) {
              var classes = root.hoverClass.split(" ");
              classes.forEach(function(item, index) {
                if ("" != item) {
                  if (root.focusState) {
                    root.$.button.classList.add(item);
                    if (-1 != item.indexOf("-")) {
                      root.$.icon.classList.add(item);
                    }
                  } else {
                    root.$.button.classList.remove(item);
                    if (-1 != item.indexOf("-")) {
                      root.$.icon.classList.remove(item);
                    }
                  }
                }
              });
            }
            root.focusState = !root.focusState;
          }
        },
        {
          key: "templateUrl",
          get: function get() {
            return "lrn-button.html";
          }
        },
        {
          key: "propertiesUrl",
          get: function get() {
            return "lrn-button-properties.json";
          }
        },
        {
          key: "HAXPropertiesUrl",
          get: function get() {
            return "lrn-button-hax.json";
          }
        },
        {
          key: "styleUrl",
          get: function get() {
            return "lrn-button.css";
          }
        }
      ],
      [
        {
          key: "template",
          get: function get() {
            return (0, _polymerElement.html)(
              _templateObject_3a5f0270f1e511e8bb9f070e5c300403()
            );
          }
        },
        {
          key: "properties",
          get: function get() {
            return {
              href: { type: String, value: "#" },
              showHref: { type: String, value: !1 },
              raised: { type: Boolean },
              label: { type: String, value: "" },
              target: { type: String, value: "" },
              icon: { type: String, value: !1 },
              hoverClass: { type: String },
              iconClass: { type: String },
              innerClass: { type: String },
              color: { type: String },
              textColor: { type: String },
              prefetch: { type: String },
              alt: { type: String },
              disabled: { type: Boolean, value: !1 },
              focusState: { type: Boolean, value: !1 }
            };
          }
        },
        {
          key: "tag",
          get: function get() {
            return "lrn-button";
          }
        }
      ]
    );
    return LrnButton;
  })(_polymerElement.PolymerElement);
  _exports.LrnButton = LrnButton;
  window.customElements.define(LrnButton.tag, LrnButton);
});

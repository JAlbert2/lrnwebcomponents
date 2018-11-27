define([
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./node_modules/@lrnwebcomponents/materializecss-styles/materializecss-styles.js",
  "./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js",
  "./node_modules/@lrnwebcomponents/schema-behaviors/schema-behaviors.js",
  "./node_modules/@polymer/iron-image/iron-image.js",
  "./node_modules/@polymer/paper-slider/paper-slider.js"
], function(
  _polymerLegacy,
  _materializecssStyles,
  _HAXWiring,
  _schemaBehaviors,
  _ironImage,
  _paperSlider
) {
  "use strict";
  var _properties;
  function _templateObject_2e831ef0f1e511e8871679d860532979() {
    var data = babelHelpers.taggedTemplateLiteral(
      [
        '\n    <style>\n      :host {\n        display: block;\n      }\n      :host .container {\n        position: relative;\n      }\n      :host .container > * {\n        left: 0;\n        position: absolute;\n      }\n      :host .container > div {\n        top: 0;\n        padding: 0;\n      }\n      :host #top {\n        overflow-x: hidden;\n      }\n    </style>\n    <h2>[[title]]</h2>\n    <div class="container" style$="[[styles.container]]">\n      <div id="bottom"><iron-image src$="[[bottomSrc]]" sizing$="[[sizing]]" style$="[[styles.image]]"></iron-image></div>\n      <div id="top" style$="[[styles.top]]"><iron-image src$="[[topSrc]]" sizing$="[[sizing]]" style$="[[styles.image]]"></iron-image></div>\n    </div>\n    <paper-slider id="slider" value="50" class="max-width-no-padding" style$="[[styles.slider]]"></paper-slider>\n'
      ],
      [
        '\n    <style>\n      :host {\n        display: block;\n      }\n      :host .container {\n        position: relative;\n      }\n      :host .container > * {\n        left: 0;\n        position: absolute;\n      }\n      :host .container > div {\n        top: 0;\n        padding: 0;\n      }\n      :host #top {\n        overflow-x: hidden;\n      }\n    </style>\n    <h2>[[title]]</h2>\n    <div class="container" style\\$="[[styles.container]]">\n      <div id="bottom"><iron-image src\\$="[[bottomSrc]]" sizing\\$="[[sizing]]" style\\$="[[styles.image]]"></iron-image></div>\n      <div id="top" style\\$="[[styles.top]]"><iron-image src\\$="[[topSrc]]" sizing\\$="[[sizing]]" style\\$="[[styles.image]]"></iron-image></div>\n    </div>\n    <paper-slider id="slider" value="50" class="max-width-no-padding" style\\$="[[styles.slider]]"></paper-slider>\n'
      ]
    );
    _templateObject_2e831ef0f1e511e8871679d860532979 = function _templateObject_2e831ef0f1e511e8871679d860532979() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_2e831ef0f1e511e8871679d860532979()
    ),
    is: "image-compare-slider",
    behaviors: [
      HAXBehaviors.PropertiesBehaviors,
      MaterializeCSSBehaviors.ColorBehaviors,
      SchemaBehaviors.Schema
    ],
    observers: ["_setStyles(width,height,sliderPercent)"],
    properties: ((_properties = {
      title: { type: String },
      topSrc: { type: String },
      bottomSrc: { type: String },
      sizing: { type: String, value: "contain" },
      width: { type: Number, value: 400 },
      height: { type: Number, value: 300 }
    }),
    babelHelpers.defineProperty(_properties, "height", {
      type: Number,
      value: 300
    }),
    babelHelpers.defineProperty(_properties, "sliderPercent", {
      type: Number,
      value: 50
    }),
    babelHelpers.defineProperty(_properties, "styles", {
      type: Object,
      value: {
        image: "width: 400px; height: 300px;",
        slider: "width: 430px; margin: 0 -15px;",
        container: "width: 400px; margin-bottom: 315px;",
        top: "width: 50%;"
      }
    }),
    _properties),
    ready: function ready() {
      var root = this,
        slider = this.$.slider;
      slider.addEventListener("immediate-value-changed", function(e) {
        root.sliderPercent = slider.immediateValue;
      });
    },
    _setStyles: function _setStyles(width, height, sliderPercent) {
      var w = this.width,
        h = this.height,
        sw = w + 30,
        cmb = h + 15;
      this.styles = {
        image: "width: " + w + "px; height: " + h + "px;",
        slider: "width: " + sw + "px; margin: 0 -15px;",
        container: "width: " + w + "px; margin-bottom: " + cmb + "px;",
        top: "width: " + this.sliderPercent + "%;"
      };
    },
    attached: function attached() {
      var props = {
        canScale: !0,
        canPosition: !0,
        canEditSource: !1,
        gizmo: {
          title: "Image comparison",
          description:
            "Simple element to allow one image to swipe over top of the other.",
          icon: "image:compare",
          color: "orange",
          groups: ["Image", "Media"],
          handles: [
            {
              type: "image",
              source: "bottomSrc",
              source2: "topSrc",
              title: "title"
            }
          ],
          meta: { author: "LRNWebComponents" }
        },
        settings: {
          quick: [
            {
              property: "title",
              title: "Title",
              description: "The title of the element",
              inputMethod: "textfield",
              icon: "editor:title"
            }
          ],
          configure: [
            {
              property: "title",
              title: "Title",
              description: "The title of the element",
              inputMethod: "textfield"
            },
            {
              property: "bottomSrc",
              title: "Bottom image",
              description: "The base image to swipe over",
              inputMethod: "textfield",
              validationType: "url"
            },
            {
              property: "topSrc",
              title: "Top image",
              description: "The top image that swipes over",
              inputMethod: "textfield",
              validationType: "url"
            }
          ],
          advanced: []
        }
      };
      this.setHaxProperties(props);
    }
  });
});

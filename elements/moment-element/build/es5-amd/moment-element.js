define([
  "meta",
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./node_modules/@polymer/polymer/lib/utils/resolve-url.js",
  "./node_modules/@lrnwebcomponents/es-global-bridge/es-global-bridge.js"
], function(meta, _polymerLegacy, _resolveUrl, _esGlobalBridge) {
  "use strict";
  meta = babelHelpers.interopRequireWildcard(meta);
  function _templateObject_ae80e340f1e411e8a57855e6f7cc9444() {
    var data = babelHelpers.taggedTemplateLiteral(["\n    [[output]]\n"]);
    _templateObject_ae80e340f1e411e8a57855e6f7cc9444 = function _templateObject_ae80e340f1e411e8a57855e6f7cc9444() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_ae80e340f1e411e8a57855e6f7cc9444()
    ),
    is: "moment-element",
    properties: {
      datetime: {
        type: String,
        value: function value() {
          return new Date();
        }
      },
      inputFormat: { type: String, value: "" },
      outputFormat: { type: String, value: "" },
      from: { type: String, value: "" },
      to: { type: String, value: "" },
      output: { type: String, notify: !0 },
      libraryLoaded: { type: Boolean }
    },
    observers: [
      "_computeOutput(datetime, inputFormat, outputFormat, from, to, libraryLoaded)"
    ],
    created: function created() {
      var name = "moment",
        basePath = (0, _resolveUrl.pathFromUrl)(meta.url),
        location = "".concat(basePath, "lib/moment/moment.js");
      window.addEventListener(
        "es-bridge-".concat(name, "-loaded"),
        this._momentLoaded.bind(this)
      );
      window.ESGlobalBridge.requestAvailability();
      window.ESGlobalBridge.instance.load(name, location);
    },
    _momentLoaded: function _momentLoaded() {
      this.libraryLoaded = !0;
    },
    update: function update() {
      this._computeOutput(
        this.datetime,
        this.inputFormat,
        this.outputFormat,
        this.from,
        this.to,
        this.libraryLoaded
      );
    },
    _computeOutput: function _computeOutput(
      datetime,
      inputFormat,
      outputFormat,
      from,
      to,
      libraryLoaded
    ) {
      if (libraryLoaded) {
        var output = inputFormat
          ? moment(datetime, inputFormat)
          : moment(datetime);
        if (outputFormat) {
          output = output.format(outputFormat);
        } else if (from) {
          output =
            "now" === from ? output.fromNow() : output.from(moment(from));
        } else if (to) {
          output = "now" === to ? output.toNow() : output.to(moment(to));
        }
        this.set("output", output);
      }
    }
  });
});

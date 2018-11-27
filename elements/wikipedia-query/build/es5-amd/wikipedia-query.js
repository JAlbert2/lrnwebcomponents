define([
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./node_modules/@polymer/iron-ajax/iron-ajax.js",
  "./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js",
  "./node_modules/@lrnwebcomponents/schema-behaviors/schema-behaviors.js",
  "./node_modules/@lrnwebcomponents/citation-element/citation-element.js"
], function(
  _polymerLegacy,
  _ironAjax,
  _HAXWiring,
  _schemaBehaviors,
  _citationElement
) {
  "use strict";
  function _templateObject_56052530f1e611e8a445798f50e7b9b1() {
    var data = babelHelpers.taggedTemplateLiteral([
      '\n    <custom-style>\n      <style>\n        :host {\n          display: block;\n          --wikipedia-query-body-height: 160px;\n        }\n        #result {\n          height: var(--wikipedia-query-body-height);\n          overflow: scroll;\n          border: 1px grey solid;\n          padding: 8px 16px;\n        }\n        citation-element {\n          background-color: #F8F8F8;\n          padding: 16px 8px;\n          font-size: 12px;\n        }\n      </style>\n    </custom-style>\n    <iron-ajax auto url$="https://en.wikipedia.org/w/api.php?origin=*&amp;action=query&amp;titles=[[search]]&amp;prop=extracts&amp;format=json" handle-as="json" on-response="handleResponse" debounce-duration="100" last-response="{{searchResponse}}"></iron-ajax>\n    <h3 hidden$="[[!showTitle]]">[[search]] Wikipedia article</h3>\n    <div id="result" hidden$="[[!__rendercontent]]"></div>\n    <citation-element hidden$="[[!__rendercontent]]" creator="{Wikipedia contributors}" scope="sibling" license="by-sa" title="[[search]] --- {Wikipedia}{,} The Free Encyclopedia" source="https://en.wikipedia.org/w/index.php?title=[[search]]" date="[[__now]]"></citation-element>\n'
    ]);
    _templateObject_56052530f1e611e8a445798f50e7b9b1 = function _templateObject_56052530f1e611e8a445798f50e7b9b1() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_56052530f1e611e8a445798f50e7b9b1()
    ),
    is: "wikipedia-query",
    behaviors: [HAXBehaviors.PropertiesBehaviors, SchemaBehaviors.Schema],
    properties: {
      showTitle: { type: Boolean, value: !0 },
      search: { type: String, value: "Polymer (library)" },
      renderAs: {
        type: String,
        value: "content",
        observer: "_renderAsUpdated"
      },
      searchResponse: { type: Object }
    },
    attached: function attached() {
      var date = new Date(Date.now());
      this.__now =
        date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
      var props = {
        canScale: !0,
        canPosition: !0,
        canEditSource: !1,
        gizmo: {
          title: "Wikipedia article",
          description:
            "This can display a wikipedia article in context in a variety of formats.",
          icon: "book",
          color: "green",
          groups: ["Content", "Creative Commons"],
          handles: [{ type: "content", title: "search" }],
          meta: { author: "LRNWebComponents" }
        },
        settings: {
          quick: [
            {
              property: "search",
              title: "Search term",
              description: "Word to search wikipedia for.",
              inputMethod: "textfield",
              icon: "editor:title",
              required: !0
            },
            {
              property: "showTitle",
              title: "Show title",
              description: "Whether or not to render the title of the article.",
              inputMethod: "boolean",
              icon: "editor:title"
            }
          ],
          configure: [
            {
              property: "search",
              title: "Search term",
              description: "Word to search wikipedia for.",
              inputMethod: "textfield",
              icon: "editor:title",
              required: !0
            }
          ]
        },
        saveOptions: { wipeSlot: !0 }
      };
      this.setHaxProperties(props);
    },
    _renderAsUpdated: function _renderAsUpdated(newValue, oldValue) {
      if (
        babelHelpers.typeof(newValue) !==
        ("undefined" === typeof void 0
          ? "undefined"
          : babelHelpers.typeof(void 0))
      ) {
        this._resetRenderMethods();
        this["__render" + newValue] = !0;
      }
    },
    _validRenderMethods: function _validRenderMethods() {
      var methods = ["content"];
      return methods;
    },
    _resetRenderMethods: function _resetRenderMethods() {
      for (
        var methods = this._validRenderMethods(), i = 0;
        i < methods.length;
        i++
      ) {
        this["__render" + methods[i]] = !1;
      }
    },
    handleResponse: function handleResponse(response) {
      if (
        babelHelpers.typeof(this.searchResponse) !==
        ("undefined" === typeof void 0
          ? "undefined"
          : babelHelpers.typeof(void 0))
      ) {
        for (var key in this.searchResponse.query.pages) {
          if (!this.searchResponse.query.pages.hasOwnProperty(key)) continue;
          var obj = this.searchResponse.query.pages[key],
            _html = obj.extract;
          _html = _html.replace(/<script[\s\S]*?>/gi, "&lt;script&gt;");
          _html = _html.replace(/<\/script>/gi, "&lt;/script&gt;");
          _html = _html.replace(/<style[\s\S]*?>/gi, "&lt;style&gt;");
          _html = _html.replace(/<\/style>/gi, "&lt;/style&gt;");
          this.$.result.innerHTML = _html;
        }
      }
    }
  });
});

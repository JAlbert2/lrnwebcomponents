import {
  html,
  Polymer
} from "../node_modules/@polymer/polymer/polymer-legacy.js";
import { dom } from "../node_modules/@polymer/polymer/lib/legacy/polymer.dom.js";
import "../node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js";
import "../node_modules/@polymer/iron-icons/iron-icons.js";
import "../node_modules/@polymer/iron-icons/editor-icons.js";
import "../node_modules/@polymer/paper-icon-button/paper-icon-button.js";
import "../node_modules/paper-collapse-item/paper-collapse-item.js";
import "../node_modules/paper-collapse-item/paper-collapse-group.js";
import "../node_modules/@polymer/app-localize-behavior/app-localize-behavior.js";
import "./eco-json-schema-boolean.js";
import "./eco-json-schema-enum.js";
import "./eco-json-schema-input.js";
import "./eco-json-schema-object.js";
import "./eco-json-schema-file.js";
Polymer({
  is: "eco-json-schema-array",
  _template: html`
  <custom-style>
  <style is="custom-style" include="iron-flex iron-flex-alignment">
      paper-input {
        padding: 2px;

        --paper-input-container-label: {
          white-space: normal;
          position: static;
          font-size: 22px;
          color: #212121;
        }
      }

      paper-collapse-item {
        --paper-collapse-item-header: {
          font-weight: bold;
          padding: 8px 0 0 8px;
        }

        ;
      }

      #form {
        border: 1px solid #AAAAAA;
      }

      #form div:nth-child(odd) {
        background-color: #F2F2F2;
        padding: 4px;
      }

      #form div:nth-child(even) {
        background-color: #E2E2E2;
        border-top: 1px solid #AAAAAA;
        border-bottom: 1px solid #AAAAAA;
        padding: 4px;
      }

      #form div:focus,
      #form div:hover,
      #form div:active {
        background-color: #FFFFFF !important;
      }

      paper-icon-button {
        float: right;
        border-radius: 50%;
      }

      .array-add {
        color: #34e79a;
        background-color: #f8f8f8;
      }

      .array-remove-element {
        color: #f44336;
        background-color: #f8f8f8;
      }

      .label {
        @apply --paper-input-container-label;
        white-space: normal;
        position: static;
        font-size: 22px;
        color: #212121;
      }

      :host {
        display: block;
      }
      .label {
        white-space: normal;
        position: static;
        font-size: 22px;
        color: #212121;
        @apply --paper-input-container-label;
      }
    </style>
    </custom-style>
    <div class="horizontal layout">
      <div class="flex" hidden\$="[[!label]]">[[label]]</div>
      <paper-icon-button id="addarray" title="Add another item" class="array-add" icon="add" on-click="_onAddItem" role="button" aria-label="Add another item"></paper-icon-button>
    </div>

    <paper-collapse-group id="form" class="vertical flex layout"></paper-collapse-group>
  
`,
  properties: {
    schema: { type: Object, observer: "_schemaChanged" },
    label: { type: String },
    value: {
      type: Array,
      notify: !0,
      value: function() {
        return [];
      },
      observer: "_valueChanged"
    },
    error: { type: Object, observer: "_errorChanged" },
    _schemaArrayItems: {
      type: Array,
      notify: !0,
      value: function() {
        return [];
      }
    }
  },
  observers: ["_schemaArraySplicesChanged(_schemaArrayItems.splices)"],
  _valueChanged: function(newValue, oldValue) {
    if (
      newValue !== oldValue &&
      typeof newValue !== typeof void 0 &&
      typeof this.schema !== typeof void 0
    ) {
      setTimeout(() => {
        this._buildSchemaArrayItems();
        for (var i in newValue) {
          this._onAddItemWithValue(newValue[i], parseInt(i));
        }
      }, 100);
    }
  },
  ready: function() {},
  detached: function() {
    this._clearForm();
  },
  _buildSchemaArrayItems: function() {
    this._schemaArrayItems = [];
  },
  _setValue: function() {
    this.value = [];
    this.value = this._schemaArrayItems.map(function(item) {
      return item.value;
    });
  },
  _schemaArraySplicesChanged: function(detail) {
    if (!detail) {
      return console.warn("detail is undefined");
    }
    var ctx = this;
    if (detail.keySplices) {
      console.warn("Got keySplices, don't know what to do with them!");
    }
    detail.indexSplices.forEach(function(splice) {
      var args = ["value", splice.index, splice.removed.length];
      if (splice.removed && splice.removed.length) {
        for (
          var i = splice.index, ii = splice.index + splice.removed.length;
          i < ii;
          i++
        ) {
          ctx._removeArrayEl(ctx.$.form.children[i]);
        }
      }
      if (splice.addedCount) {
        for (
          var i = splice.index, ii = splice.index + splice.addedCount;
          i < ii;
          i++
        ) {
          var item = splice.object[i],
            componentEl = ctx.create(item.component.name, {
              label: item.label,
              schema: item.schema,
              schemaArrayItem: item
            }),
            containerEl = ctx.create("paper-collapse-item", {
              header: "Item " + (i + 1)
            }),
            buttonEl = ctx.create("paper-icon-button", {
              icon: "remove",
              title: "Remove item"
            });
          ctx.listen(buttonEl, "tap", "_onRemoveItem");
          buttonEl.classList.add("array-remove-element");
          componentEl.classList.add("flex", "horizontal", "layout");
          dom(containerEl).appendChild(componentEl);
          dom(containerEl).appendChild(buttonEl);
          var beforeEl = ctx.$.form.children[i];
          if (beforeEl) {
            dom(ctx.$.form).insertBefore(containerEl, beforeEl);
          } else {
            dom(ctx.$.form).appendChild(containerEl);
          }
          ctx.listen(
            componentEl,
            item.component.valueProperty
              .replace(/([A-Z])/g, "-$1")
              .toLowerCase() + "-changed",
            "_schemaArrayItemChanged"
          );
          args.push(ctx._deepClone(componentEl[item.component.valueProperty]));
        }
      }
      ctx.splice.apply(ctx, args);
    });
  },
  _schemaArrayItemChanged: function(event, detail) {
    if (detail.path && /\.length$/.test(detail.path)) {
      return;
    }
    var ctx = this,
      item = event.target.schemaArrayItem,
      index = this._schemaArrayItems.indexOf(item),
      path = ["value", index];
    if (detail.path && /\.splices$/.test(detail.path)) {
      path = path.concat(detail.path.split(".").slice(1, -1));
      if (detail.value.keySplices) {
        console.warn("Got keySplices, don't know what to do with them!");
      }
      detail.value.indexSplices.forEach(function(splice) {
        var args = [path.join("."), splice.index, splice.removed.length];
        if (splice.addedCount) {
          for (
            var i = splice.index, ii = splice.index + splice.addedCount;
            i < ii;
            i++
          ) {
            args.push(ctx._deepClone(splice.object[i]));
          }
        }
        ctx.splice.apply(ctx, args);
      });
    } else if (detail.path) {
      path = path.concat(detail.path.split(".").slice(1));
      this.set(path, this._deepClone(detail.value));
    } else {
      this.splice("value", index, 1, this._deepClone(detail.value));
    }
  },
  _removeArrayEl: function(el) {
    var polyEl = dom(el);
    if (typeof polyEl.childNodes[0] !== typeof void 0) {
      this.unlisten(
        polyEl.childNodes[0],
        polyEl.firstChild.schemaArrayItem.component.valueProperty
          .replace(/([A-Z])/g, "-$1")
          .toLowerCase() + "-changed",
        "_schemaArrayItemChanged"
      );
      if (typeof polyEl.childNodes[1] !== typeof void 0) {
        this.unlisten(polyEl.childNodes[1], "tap", "_onRemoveItem");
      }
    }
    el.schemaArrayItem = null;
    dom(this.$.form).removeChild(el);
  },
  _clearForm: function() {
    var formEl = dom(this.$.form);
    while (formEl.firstChild) {
      this._removeArrayEl(formEl.firstChild);
    }
  },
  _schemaChanged: function() {
    this._clearForm();
    this._buildSchemaArrayItems();
    this._setValue();
  },
  _errorChanged: function() {
    var ctx = this;
    dom(this.$.form).childNodes.forEach(function(rowEl, idx) {
      if (ctx.error && ctx.error[idx]) {
        dom(rowEl).childNodes[0].error = ctx.error[idx];
      } else {
        dom(rowEl).childNodes[0].error = null;
      }
    });
  },
  _onAddItemWithValue: function(values, pointer) {
    var schema = this.schema.items;
    if (typeof values !== typeof void 0) {
      for (var i in values) {
        if (typeof schema.properties[i] !== typeof void 0) {
          schema.properties[i].value = values[i];
        }
      }
    }
    var item = {
      label: schema.title,
      schema: schema,
      component: schema.component || {}
    };
    if (!item.component.valueProperty) {
      item.component.valueProperty = "value";
    }
    if (!item.component.name) {
      if (this._isSchemaEnum(schema)) {
        item.component.name = "eco-json-schema-enum";
      } else if (this._isSchemaBoolean(schema.type)) {
        item.component.name = "eco-json-schema-boolean";
      } else if (this._isSchemaFile(schema.type)) {
        item.component.name = "eco-json-schema-file";
      } else if (this._isSchemaValue(schema.type)) {
        item.component.name = "eco-json-schema-input";
      } else if (this._isSchemaObject(schema.type)) {
        item.component.name = "eco-json-schema-object";
      } else if (this._isSchemaArray(schema.type)) {
        item.component.name = "eco-json-schema-array";
      } else {
        return console.error("Unknown item type %s", schema.type);
      }
    }
    var ctx = this,
      componentEl = ctx.create(item.component.name, {
        label: item.label,
        schema: item.schema,
        schemaArrayItem: item
      }),
      containerEl = ctx.create("paper-collapse-item", {
        header: "Item " + (i + 1)
      }),
      buttonEl = ctx.create("paper-icon-button", {
        icon: "remove",
        title: "Remove item"
      });
    ctx.listen(buttonEl, "tap", "_onRemoveItem");
    buttonEl.classList.add("array-remove-element");
    componentEl.classList.add("flex", "horizontal", "layout");
    dom(containerEl).appendChild(componentEl);
    dom(containerEl).appendChild(buttonEl);
    var beforeEl = ctx.$.form.children[i];
    if (beforeEl) {
      dom(ctx.$.form).insertBefore(containerEl, beforeEl);
    } else {
      dom(ctx.$.form).appendChild(containerEl);
    }
    ctx.listen(
      componentEl,
      item.component.valueProperty.replace(/([A-Z])/g, "-$1").toLowerCase() +
        "-changed",
      "_schemaArrayItemChanged"
    );
    this._schemaArrayItems.push(item);
  },
  _onAddItem: function() {
    var schema = this.schema.items,
      item = {
        label: schema.title,
        schema: schema,
        component: schema.component || {}
      };
    if (!item.component.valueProperty) {
      item.component.valueProperty = "value";
    }
    if (!item.component.name) {
      if (this._isSchemaEnum(schema)) {
        item.component.name = "eco-json-schema-enum";
      } else if (this._isSchemaBoolean(schema.type)) {
        item.component.name = "eco-json-schema-boolean";
      } else if (this._isSchemaFile(schema.type)) {
        item.component.name = "eco-json-schema-file";
      } else if (this._isSchemaValue(schema.type)) {
        item.component.name = "eco-json-schema-input";
      } else if (this._isSchemaObject(schema.type)) {
        item.component.name = "eco-json-schema-object";
      } else if (this._isSchemaArray(schema.type)) {
        item.component.name = "eco-json-schema-array";
      } else {
        return console.error("Unknown item type %s", schema.type);
      }
    }
    this.push("_schemaArrayItems", item);
  },
  _onRemoveItem: function(e) {
    var item = dom(e).localTarget.previousSibling.schemaArrayItem,
      index = this._schemaArrayItems.indexOf(item);
    this.splice("_schemaArrayItems", index, 1);
  },
  _deepClone: function(o) {
    return JSON.parse(JSON.stringify(o));
  },
  _isSchemaValue: function(type) {
    return (
      this._isSchemaBoolean(type) ||
      this._isSchemaNumber(type) ||
      this._isSchemaString(type) ||
      this._isSchemaFile(type)
    );
  },
  _isSchemaFile: function(type) {
    if (Array.isArray(type)) {
      return -1 !== type.indexOf("file");
    } else {
      return "file" === type;
    }
  },
  _isSchemaBoolean: function(type) {
    if (Array.isArray(type)) {
      return -1 !== type.indexOf("boolean");
    } else {
      return "boolean" === type;
    }
  },
  _isSchemaEnum: function(schema) {
    return !!schema.enum;
  },
  _isSchemaNumber: function(type) {
    if (Array.isArray(type)) {
      return -1 !== type.indexOf("number") || -1 !== type.indexOf("integer");
    } else {
      return "number" === type || "integer" === type;
    }
  },
  _isSchemaString: function(type) {
    if (Array.isArray(type)) {
      return -1 !== type.indexOf("string");
    } else {
      return "string" === type;
    }
  },
  _isSchemaObject: function(type) {
    return "object" === type;
  },
  _isSchemaArray: function(type) {
    return "array" === type;
  }
});

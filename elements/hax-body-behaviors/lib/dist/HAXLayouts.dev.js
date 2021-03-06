"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.HaxLayoutBehaviors = void 0;

var _litElement = require("lit-element/lit-element.js");

var _utils = require("@lrnwebcomponents/utils/utils.js");

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === "function" &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? "symbol"
        : typeof obj;
    };
  }
  return _typeof(obj);
}

function _toConsumableArray(arr) {
  return (
    _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread()
  );
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _iterableToArray(iter) {
  if (
    Symbol.iterator in Object(iter) ||
    Object.prototype.toString.call(iter) === "[object Arguments]"
  )
    return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
}

function _templateObject() {
  var data = _taggedTemplateLiteral([
    '\n          :host {\n            display: block;\n          }\n          :host([ready]) .container {\n            transition: var(\n              --hax-layout-container-transition,\n              0.5s width ease-in-out,\n              0.5s padding ease-in-out,\n              0.5s margin ease-in-out\n            );\n          }\n          .container.active {\n            outline: var(--hax-layout-active-outline-width, 2px) \n              var(--hax-layout-active-outline-style, solid) \n              var(--hax-layout-active-outline-color, var(--hax-layout-accent-color, #009dc7)) !important;\n            outline-offset: var(--hax-layout-active-outline-offset, -2px);\n          }\n          .container.not-shown {\n            display: none;\n            outline: none;\n          }\n          :host([data-hax-ray]) .container.not-shown {\n            display: block;\n            opacity: 0.4;\n            width: 0;\n          }\n          :host([data-hax-ray]) .container.not-shown.has-nodes {\n            width: 100%;\n            transition: none;\n          }\n          :host([data-hax-ray]) .not-shown:hover {\n            opacity: 1;\n          }\n          :host([data-hax-ray]) .not-shown:hover::before {\n            content: "Hidden bylayout";\n            position: sticky;\n            display: inline-flex;\n            background-color: black;\n            color: white;\n            padding: 0px 8px;\n            font-size: 12px;\n            line-height: 16px;\n            margin: 12px 13px;\n            float: right;\n            width: 124px;\n          }\n          /** this implies hax editing state is available **/\n          :host([data-hax-ray]) ::slotted(*) {\n            outline: var(--hax-layout-slotted-outline-width, 1px) \n              var(--hax-layout-slotted-outline-style, solid) \n              var(--hax-layout-slotted-outline-color, var(--hax-layout-slotted-faded-color, #eeeeee));\n            outline-offset: var(--hax-layout-slotted-outline-offset, -2px);\n          }\n          :host([data-hax-ray]) ::slotted(*:hover) {\n            outline: var(--hax-layout-slotted-hover-outline-width, 1px) \n              var(--hax-layout-slotted-hover-outline-style, solid) \n              var(--hax-layout-slotted-hover-outline-color, var(--hax-layout-slotted-faded-color, #eeeeee));\n          }\n          :host([data-hax-ray]) .container {\n            outline: var(--hax-layout-container-outline-width, 1px) \n              var(--hax-layout-container-outline-style, solid) \n              var(--hax-layout-container-outline-color, var(--hax-layout-slotted-faded-color, #eeeeee));\n            outline-offset: var(--hax-layout-container-outline-offset, -2px);\n          }\n          :host([data-hax-ray]) .container:hover {\n            outline: var(--hax-layout-container-hover-outline-width, 1px) \n              var(--hax-layout-container-hover-outline-style, solid) \n              var(--hax-layout-container-hover-outline-color, var(--hax-layout-slotted-faded-color, #eeeeee));\n          }\n          :host([data-hax-ray]) ::slotted(*.active):before {\n            outline: var(--hax-layout-slotted-active-outline-width, 1px) \n              var(--hax-layout-slotted-active-outline-style, solid) \n              var(--hax-layout-slotted-active-outline-color, var(--hax-layout-slotted-faded-color, #eeeeee));\n            background-color: inherit;\n            content: " ";\n            width: 100%;\n            display: block;\n            position: relative;\n            margin: -10px 0 0 0;\n            z-index: 2;\n            height: 10px;\n          }\n          :host([data-hax-ray]) ::slotted(img.active),\n          :host([data-hax-ray]) ::slotted(*.active):before {\n            background-color: var(--hax-layout-slotted-active-outline-color, var(--hax-layout-accent-color, #009dc7)) !important;\n            outline: var(--hax-layout-slotted-active-outline-width, 1px) \n              var(--hax-layout-slotted-active-outline-style, solid) \n              var(--hax-layout-slotted-active-outline-color, var(--hax-layout-accent-color, #009dc7));\n          }\n  \n          @media screen and (min-color-index: 0) and(-webkit-min-device-pixel-ratio:0) {\n            :host([data-hax-ray]) ::slotted(*.active) {\n              background-color: var(--hax-layout-slotted-active-outline-color, var(--hax-layout-accent-color, #009dc7)) !important;\n              outline: var(--hax-layout-slotted-active-outline-width, 1px) \n                var(--hax-layout-slotted-active-outline-style, solid) \n                var(--hax-layout-slotted-active-outline-color, var(--hax-layout-accent-color, #009dc7));\n            }\n          }\n        ',
  ]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(
    Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })
  );
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true },
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
  return _setPrototypeOf(o, p);
}

var HaxLayoutBehaviors = function HaxLayoutBehaviors(SuperClass) {
  return (
    /*#__PURE__*/
    (function (_SuperClass) {
      _inherits(_class, _SuperClass);

      _createClass(_class, null, [
        {
          key: "styles",
          get: function get() {
            return [(0, _litElement.css)(_templateObject())];
          },
        },
      ]);

      function _class() {
        var _this;

        _classCallCheck(this, _class);

        _this = _possibleConstructorReturn(
          this,
          _getPrototypeOf(_class).call(this)
        );
        _this.ready = false;
        _this.haxLayoutContainer = true;
        return _this;
      }
      /**
       * life cycle
       */

      _createClass(
        _class,
        [
          {
            key: "firstUpdated",
            value: function firstUpdated(changedProperties) {
              var _this2 = this;

              setTimeout(function () {
                _this2.ready = true;
              }, 100);
            },
          },
          {
            key: "updated",
            value: function updated(changedProperties) {
              var _this3 = this;

              changedProperties.forEach(function (oldValue, propName) {
                if (propName === "dataHaxRay" && _this3.shadowRoot) {
                  if (_this3[propName]) {
                    // apply handlers to the columns themselves
                    _this3.addEventListener(
                      "drop",
                      _this3._dropEvent.bind(_this3)
                    );

                    var containers = _toConsumableArray(
                        _this3.shadowRoot.querySelectorAll("drag-enabled")
                      ),
                      slots = _toConsumableArray(
                        _this3.shadowRoot.querySelectorAll("slot")
                      );

                    containers.forEach(function (container) {
                      container.addEventListener(
                        "dragenter",
                        _this3._dragEnter.bind(_this3)
                      );
                      container.addEventListener(
                        "dragleave",
                        _this3._dragLeave.bind(_this3)
                      );
                    });
                    slots.forEach(function (slot) {
                      return slot.addEventListener(
                        "slotchange",
                        _this3._slotMonitor.bind(_this3)
                      );
                    });
                    _this3.observer = new MutationObserver(function (
                      mutations
                    ) {
                      if (!_this3.__sorting) {
                        mutations.forEach(function (mutation) {
                          // this implies something was added dynamically or drag and drop
                          // from outside this element or dragging between grid plates
                          // so we need to disconnect the handlers from here and pick them
                          // up in the new plate
                          mutation.addedNodes.forEach(function (node) {
                            if (node.tagName && node !== _this3) {
                              // verify this has a slot set otherwise we need to set one on the fly
                              // otherwise this won't show up. This could be incorrectly formed HTML
                              // DOM that was pushed in via an outside system or edge cases of things
                              // dropping in without a slot set in anyway
                              // validate slot name, otherwise force it to col-1
                              if (
                                node.parentElement &&
                                node.parentElement.tagName !== "HAX-BODY" &&
                                !_this3.validateElementSlot(node) &&
                                _this3.validElementSlots().length > 0
                              ) {
                                node.setAttribute(
                                  "slot",
                                  _this3.validElementSlots()[0]
                                );
                              }
                            }
                          });
                        });

                        _this3.__sortChildren();
                      }
                    });

                    _this3.observer.observe(_this3, {
                      childList: true,
                    });
                  } else {
                    if (_this3.observer) {
                      _this3.observer.disconnect();
                    }

                    _this3.removeEventListener(
                      "drop",
                      _this3._dropEvent.bind(_this3)
                    );

                    var _containers = _toConsumableArray(
                        _this3.shadowRoot.querySelectorAll("drag-enabled")
                      ),
                      _slots = _toConsumableArray(
                        _this3.shadowRoot.querySelectorAll("slot")
                      );

                    _containers.forEach(function (container) {
                      container.removeEventListener(
                        "dragenter",
                        _this3._dragEnter.bind(_this3)
                      );
                      container.removeEventListener(
                        "dragleave",
                        _this3._dragLeave.bind(_this3)
                      );
                    });

                    _slots.forEach(function (slot) {
                      return slot.removeEventListener(
                        "slotchange",
                        _this3._slotMonitor.bind(_this3)
                      );
                    });
                  }
                } // if any of these changed, update col widths

                if (
                  [
                    "responsiveSize",
                    "layout",
                    "layouts",
                    "disableResponsive",
                  ].includes(propName)
                ) {
                  clearTimeout(_this3.__calcWidthLock);
                  _this3.__calcWidthLock = setTimeout(function () {
                    _this3.__columnWidths = _this3._getColumnWidths(
                      _this3.responsiveSize,
                      _this3.layout,
                      _this3.layouts,
                      _this3.disableResponsive
                    );
                  }, 0);
                }

                switch (propName) {
                  // observer, ensure we are sized correctly after widths change
                  case "__columnWidths":
                    // widths changed because of layout somehow, wait for the resize transition
                    // to have processed, then fire a resize event which we are listening
                    _this3.resize();

                    break;

                  case "disableResponsive":
                    // fire an event that this is a core piece of the system
                    _this3.dispatchEvent(
                      new CustomEvent("disable-responsive-changed", {
                        detail: _this3[propName],
                      })
                    );

                    break;
                }
              });
            },
          },
          {
            key: "_dragEnter",
            value: function _dragEnter(e) {
              e.target.classList.add("active");
            },
          },
          {
            key: "_dragLeave",
            value: function _dragLeave(e) {
              e.target.classList.remove("active");
            },
          },
          {
            key: "_dropEvent",
            value: function _dropEvent(e) {
              this.querySelectorAll(".active").forEach(function (el) {
                el.classList.remove("active");
              });
              this.shadowRoot
                .querySelectorAll(".active")
                .forEach(function (el) {
                  el.classList.remove("active");
                });
            },
          },
          {
            key: "_getSlotOrder",
            value: function _getSlotOrder(item) {
              var slot = item.getAttribute("slot"),
                container = this.shadowRoot.querySelector(
                  "[slot=".concat(slot, "]")
                ),
                order = parseInt(
                  container.getAttribute("data-move-order") || -1
                );
              return order;
            },
            /**
             * Use slot events to track which slots have nodes and apply to the shadowRoot
             * column wrappers. This helps with trasitions and animations
             */
          },
          {
            key: "_slotMonitor",
            value: function _slotMonitor(e) {
              // sanity, we have a local slot
              var eventPath = (0, _utils.normalizeEventPath)(e);

              if (
                eventPath[0] &&
                eventPath[0].assignedNodes &&
                eventPath[0].assignedNodes().length
              ) {
                // has nodes so we can make sure to track this elsewhere
                eventPath[0].parentNode.classList.add("has-nodes");
              } else {
                eventPath[0].parentNode.classList.remove("has-nodes");
              }
            },
            /**
             * Determines if the item can move a set number of slots.
             *
             * @param {object} the item
             * @param {number} -1 for left or +1 for right
             * @returns {boolean} if the item can move a set number of slots
             */
          },
          {
            key: "canMoveSlot",
            value: function canMoveSlot(item, before) {
              var dir = before ? -1 : 1,
                order = this["this"]._getSlotOrder(item),
                containers = _toConsumableArray(
                  this.shadowRoot.querySelectorAll(".container")
                )
                  .map(function (container) {
                    return parseInt(
                      container.getAttribute("data-move-order") || -1
                    );
                  })
                  .sort(function (a, b) {
                    return a - b;
                  }),
                dest = order[1] + dir;

              return (
                dest >= containers[0] &&
                dest <= containers[containers.length - 1]
              );
            },
            /**
             * Moves an item a set number of slots.
             *
             * @param {object} the item
             * @param {number} -1 for left or +1 for right
             */
          },
          {
            key: "moveSlot",
            value: function moveSlot(item, before) {
              var dir = before ? -1 : 1,
                order = this["this"]._getSlotOrder(item),
                dest = order[1] + dir,
                container = this.shadowRoot.querySelector(
                  "[data-move-order=".concat(dest, "]")
                ),
                slot = container.getAttribute("data-slot-name");

              item.setAttribute("slot", slot);
            },
            /**
             * Validate the slot name
             */
          },
          {
            key: "validateElementSlot",
            value: function validateElementSlot(node) {
              return this.validElementSlots().includes(
                node.getAttribute("slot")
              );
            },
          },
          {
            key: "validElementSlots",
            value: function validElementSlots() {
              return this.shadowRoot
                ? _toConsumableArray(
                    this.shadowRoot.querySelectorAll(".container")
                  ).map(function (container) {
                    return container.getAttribute("data-slot-name");
                  })
                : [];
            },
            /**
             * Sort children based on slot order
             */
          },
          {
            key: "__sortChildren",
            value: function __sortChildren() {
              var _this4 = this;

              var children;
              return regeneratorRuntime.async(
                function __sortChildren$(_context) {
                  while (1) {
                    switch ((_context.prev = _context.next)) {
                      case 0:
                        this.__sorting = true;
                        _context.prev = 1;
                        // select all direct children w/ a slot attribute and convert to an Array
                        children = Array.prototype.reduce.call(
                          this.querySelectorAll("[slot]"),
                          function (acc, e) {
                            return acc;
                          },
                          []
                        ); // sort the children by slot id being low to high

                        children = children.sort(function (a, b) {
                          if (this._getSlotOrder(a) < this._getSlotOrder(b)) {
                            return -1;
                          }

                          return 1;
                        }); // loop through and append these back into the grid plate.
                        // which will put them in the right order

                        _context.next = 6;
                        return regeneratorRuntime.awrap(
                          children.forEach(function (el) {
                            // sanity check that we only move things that are a direct child
                            if (el.parentNode === _this4) {
                              _this4.appendChild(el);
                            }
                          })
                        );

                      case 6:
                        _context.next = 11;
                        break;

                      case 8:
                        _context.prev = 8;
                        _context.t0 = _context["catch"](1);
                        console.warn(_context.t0);

                      case 11:
                        this.__sorting = false;

                      case 12:
                      case "end":
                        return _context.stop();
                    }
                  }
                },
                null,
                this,
                [[1, 8]]
              );
            },
          },
        ],
        [
          {
            key: "properties",
            get: function get() {
              return {
                ready: {
                  type: Boolean,
                  reflect: true,
                },
                dataHaxRay: {
                  type: String,
                  reflect: true,
                  attribute: "data-hax-ray",
                },
                haxLayoutContainer: {
                  type: Boolean,
                  reflect: true,
                  attribute: "hax-layout-container",
                },
              };
            },
          },
        ]
      );

      return _class;
    })(SuperClass)
  );
};

exports.HaxLayoutBehaviors = HaxLayoutBehaviors;

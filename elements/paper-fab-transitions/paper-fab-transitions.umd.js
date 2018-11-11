!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(require("@polymer/polymer/lib/utils/async.js"),require("@polymer/polymer/lib/legacy/polymer.dom.js"),require("@polymer/iron-flex-layout/iron-flex-layout.js"),require("@polymer/iron-dropdown/iron-dropdown.js"),require("@polymer/neon-animation/neon-animations.js"),require("@polymer/polymer/polymer-legacy.js"),require("@polymer/neon-animation/neon-animation.js"),require("@polymer/neon-animation/neon-animation-behavior.js")):"function"==typeof define&&define.amd?define(["@polymer/polymer/lib/utils/async.js","@polymer/polymer/lib/legacy/polymer.dom.js","@polymer/iron-flex-layout/iron-flex-layout.js","@polymer/iron-dropdown/iron-dropdown.js","@polymer/neon-animation/neon-animations.js","@polymer/polymer/polymer-legacy.js","@polymer/neon-animation/neon-animation.js","@polymer/neon-animation/neon-animation-behavior.js"],n):n(t.async,t.polymer_dom_js,null,null,null,t.polymerLegacy_js,null,t.neonAnimationBehavior_js)}(this,function(t,n,e,o,i,r,a,l){"use strict";function s(t,n){return n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))}function p(){var t=s(['\n    <style>\n      iron-dropdown {\n        @apply(--paper-morph-dropdown);\n      }\n      .dropdown-content {\n        @apply(--paper-morph-content);\n      }\n      #morpher {\n        position: fixed;\n        display: none;\n        background-color: var(--paper-morph-background, #fff);\n      }\n    </style>\n    <span id="fabContainer" class="dropdown-trigger"><slot name="dropdown-trigger"></slot></span>\n    <span id="contentContainer" class="dropdown-content"><slot name="dropdown-content"></slot></span>\n    <paper-material id="morpher"></paper-material>\n']);return p=function(){return t},t}function d(){var t=s(['\n    <style>\n      :host .vertical ::content .dropdown-content {\n        @apply(--layout-vertical);\n      }\n      :host .horizontal ::content .dropdown-content {\n        @apply(--layout-horizontal);\n      }\n      :host ::content .dropdown-content > * {\n        margin: 8px;\n        @apply(--paper-fab-speed-dial-option);\n      }\n    </style>\n    <slot id="fabContainer" select=".dropdown-trigger"></slot>\n    <iron-dropdown id="dropdown" open-animation-config="[[openAnimationConfig]]" close-animation-config="[[closeAnimationConfig]]">\n      <slot id="contentContainer" select=".dropdown-content"></slot>\n    </iron-dropdown>\n']);return d=function(){return t},t}(0,r.Polymer)({_template:r.html(p()),is:"paper-fab-morph",properties:{isOverlayContent:{type:Boolean,value:!1},duration:{type:Number,value:200},horizontalAlign:{type:String,value:"left",reflectToAttribute:!0},verticalAlign:{type:String,value:"top",reflectToAttribute:!0},horizontalOffset:{type:Number,value:0,notify:!0},verticalOffset:{type:Number,value:0,notify:!0}},observers:["_updateOverlayPosition(verticalAlign, horizontalAlign, verticalOffset, horizontalOffset)"],ready:function(){if(this._fab=this.$.fabContainer,this._content=this.$.contentContainer,this.isOverlayContent)this._fab.addEventListener("tap",function(){this._content.open()}.bind(this)),this._overlay=this._content;else{var t=document.createElement("iron-dropdown");n.dom(t).appendChild(this._content),n.dom(this.root).appendChild(t),this._overlay=t,this._dropdown=t,this._fab.addEventListener("tap",function(){this._dropdown.open()}.bind(this)),this._updateOverlayPosition(this.verticalAlign,this.horizontalAlign,this.verticalOffset,this.horizontalOffset)}this._overlay.addEventListener("iron-overlay-opened",function(){this._morphOpen()}.bind(this)),this._overlay.addEventListener("iron-overlay-closed",function(){this._morphClose()}.bind(this))},open:function(){this._overlay.open()},close:function(){this._overlay.close()},_updateOverlayPosition:function(t,n,e,o){if(this._dropdown){var i=this._dropdown;i.verticalAlign=t,i.horizontalAlign=n,i.verticalOffset=e,i.horizontalOffset=o}},_morphOpen:function(){var n=this._fab,e=this._content,o=n.getBoundingClientRect(),i=this.$.morpher,r=i.style;r.display="block",r.top=o.top+"px",r.left=o.left+"px",r.width=o.width+"px",r.height=o.height+"px",r.borderRadius="50%",r.transitionDuration=this.duration+"ms",n.style.visibility="hidden",e.style.visibility="hidden";var a=e.getBoundingClientRect();r.top=a.top+"px",r.left=a.left+"px",r.width=a.width+"px",r.height=a.height+"px",r.borderRadius="",t.microTask.run(function(){i.style.display="none",e.style.visibility="visible"})},_morphClose:function(){var n=this._fab,e=(this._content,n.getBoundingClientRect(),this.$.morpher),o=e.style;e.style.display="block",t.microTask.run(function(){var i=n.getBoundingClientRect();o.top=i.top+"px",o.left=i.left+"px",o.width=i.width+"px",o.height=i.height+"px",o.borderRadius="50%",t.microTask.run(function(){e.style.display="none",n.style.visibility="visible"})})}}),r.Polymer({is:"paper-square-grow-animation",behaviors:[l.NeonAnimationBehavior],configure:function(t){var n=t.node,e=t.startSize,o=n.getBoundingClientRect().height,i=n.getBoundingClientRect().width;return this._effect=new KeyframeEffect(n,[{height:e+"px",width:e+"px"},{height:o+"px",width:i+"px"}],this.timingFromConfig(t)),this._effect}}),(0,r.Polymer)({_template:r.html(d()),is:"paper-fab-speed-dial",properties:{direction:{type:String,value:"bottom"},offset:{type:Number,value:66},openAnimationConfig:{type:Array,value:function(){return[{name:"fade-in-animation",timing:{delay:150,duration:50}},{name:"paper-square-grow-animation",startSize:56,timing:{delay:150,duration:200}}]}},closeAnimationConfig:{type:Array,value:function(){return[{name:"fade-out-animation",timing:{duration:200}}]}}},observers:["_updateDropdown(direction, offset)"],ready:function(){n.dom(this.$.fabContainer).getDistributedNodes()[0].addEventListener("tap",function(){this.$.dropdown.open()}.bind(this)),n.dom(this.$.contentContainer).getDistributedNodes()[0].addEventListener("tap",function(){this.$.dropdown.close()}.bind(this))},open:function(){this.$.dropdown.open()},close:function(){this.$.dropdown.close()},_updateDropdown:function(t,n){var e=this.$.dropdown;switch(t){case"bottom":e.verticalAlign="top",e.horizontalOffset=0,e.verticalOffset=n,e.classList.add("vertical"),e.classList.remove("horizontal");break;case"top":e.verticalAlign="bottom",e.horizontalOffset=0,e.verticalOffset=n,e.classList.add("vertical"),e.classList.remove("horizontal");break;case"right":e.horizontalAlign="left",e.horizontalOffset=n,e.verticalOffset=0,e.classList.add("horizontal"),e.classList.remove("vertical");break;case"left":e.horizontalAlign="right",e.horizontalOffset=n,e.verticalOffset=0,e.classList.add("horizontal"),e.classList.remove("vertical");break;default:throw"Invalid direction. Must be one of [top, bottom, left, right]."}}})});
//# sourceMappingURL=paper-fab-transitions.umd.js.map

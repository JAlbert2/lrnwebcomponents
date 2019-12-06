/**
 * Copyright 2019 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
import { LitElement, html, css } from "lit-element/lit-element.js";
import { store } from "@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js";
import { autorun, toJS } from "mobx/lib/mobx.module.js";
/**
 * @deprecatedApply - required for @apply / invoking @apply css var convention
 */
import "@polymer/polymer/lib/elements/custom-style.js";
/**
 * `site-menu`
 * `Menu hierarchy`
 *
 */
class SiteMenu extends LitElement {
  /**
   * LitElement constructable styles enhancement
   */
  static get styles() {
    return [
      css`
        :host {
          display: block;
          height: 100vh;
        }
        map-menu[disabled] {
          pointer-events: none;
          opacity: 0.5;
          background-color: grey;
        }
        map-menu:not(:defined) {
          display: none;
        }

        map-menu::-webkit-scrollbar-track {
          -webkit-box-shadow: inset 0 0 4px
            var(--site-menu-scrolltrack-bg-color, rgba(56, 63, 69, 0.9));
          border-radius: 0;
          background-color: var(--site-menu-bg-color, #383f45);
        }
        map-menu::-webkit-scrollbar {
          width: 2px;
          background-color: var(--site-menu-bg-color, #383f45);
        }
        map-menu::-webkit-scrollbar-thumb {
          border-radius: 1px;
          -webkit-box-shadow: inset 0 0 4px var(--site-menu-bg-shadow, #747474);
          background-color: var(--site-menu-bg-color, #383f45);
        }
      `
    ];
  }
  /**
   * Store the tag name to make it easier to obtain directly.
   */
  static get tag() {
    return "site-menu";
  }
  /**
   * HTMLElement life cycle
   */
  constructor() {
    super();
    import("@lrnwebcomponents/map-menu/map-menu.js");
    this.hideActiveIndicator = false;
    this.preventAutoScroll = false;
    this.trackIcon = "";
    this.__disposer = [];
    autorun(reaction => {
      this.routerManifest = Object.assign({}, toJS(store.routerManifest));
      this.__disposer.push(reaction);
    });
    autorun(reaction => {
      this.editMode = toJS(store.editMode);
      this.__disposer.push(reaction);
    });
  }
  /**
   * LitElement life cycle - render callback
   */
  render() {
    return html`
      <custom-style>
        <style>
          map-menu {
            @apply --site-menu;
            --map-menu-active-color: var(--site-menu-active-color);
            --map-menu-container: var(--site-menu-container);
            --map-menu-item-active-item: var(--site-menu-item-active-item);
          }
        </style>
      </custom-style>
      <map-menu
        ?disabled="${this.editMode}"
        .selected="${this.activeId}"
        .manifest="${this.routerManifest}"
        ?active-indicator="${!this.hideActiveIndicator}"
        selected="${this.activeId}"
        ?auto-scroll="${!this.preventAutoScroll}"
      ></map-menu>
    `;
  }
  firstUpdated(changedProperties) {
    this.shadowRoot
      .querySelector("map-menu")
      .addEventListener("active-item", this.mapMenuActiveChanged.bind(this));
    // executing this here ensures that the timing is correct with highlighting the active item in the menu
    autorun(reaction => {
      this.activeId = toJS(store.activeId);
      this.__disposer.push(reaction);
    });
  }
  /**
   * LitElement life cycle - properties definition
   */
  static get properties() {
    return {
      /**
       * Manifest with router / location enhancements
       */
      routerManifest: {
        type: Object
      },
      /**
       * acitvely selected item
       */
      activeId: {
        type: String,
        attribute: "active-id"
      },
      /**
       * Binding for active indicator and auto scrolling
       */
      hideActiveIndicator: {
        type: Boolean,
        attribute: "hide-active-indicator"
      },
      /**
       * prevent the automatic scrolling when items become active
       */
      preventAutoScroll: {
        type: Boolean,
        attribute: "prevent-auto-scroll"
      },
      /**
       * allow for visualizing the tracking of page requests
       */
      trackIcon: {
        type: String,
        attribute: "track-icon"
      }
    };
  }

  disconnectedCallback() {
    for (var i in this.__disposer) {
      this.__disposer[i].dispose();
    }
    this.shadowRoot
      .querySelector("map-menu")
      .removeEventListener("active-item", this.mapMenuActiveChanged.bind(this));
    super.disconnectedCallback();
  }
  /**
   * When map menu changes let's set a track icon internal to it.
   */
  mapMenuActiveChanged(e) {
    // update the UI directly
    e.detail.trackIcon = this.trackIcon;
    // now work on the user data object in the theme layer
    let userData = JSON.parse(window.localStorage.getItem("HAXCMSSystemData"));
    if (
      userData.manifests &&
      typeof userData.manifests[this.routerManifest.id] === typeof undefined
    ) {
      userData.manifests[this.routerManifest.id] = {
        accessData: {}
      };
    }
    // edge case when switching rapidly
    if (!userData.manifests[this.routerManifest.id].accessData) {
      userData.manifests[this.routerManifest.id].accessData = {};
    }
    userData.manifests[this.routerManifest.id].accessData[e.detail.id] = {
      timestamp: Math.floor(Date.now() / 1000),
      trackIcon: this.trackIcon
    };
    for (var i in this.routerManifest.items) {
      if (this.routerManifest.items[i].id === e.detail.id) {
        this.routerManifest.items[i].metadata.accessData =
          userData.manifests[this.routerManifest.id].accessData[e.detail.id];
      }
    }
    // save this back to the system data
    window.localStorage.setItem("HAXCMSSystemData", JSON.stringify(userData));
  }
}
window.customElements.define(SiteMenu.tag, SiteMenu);
export { SiteMenu };

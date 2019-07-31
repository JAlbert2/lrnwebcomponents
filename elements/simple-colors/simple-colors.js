/**
 * Copyright 2018 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
/**
 * `simple-colors`
 * `a shared set of styles for @lrnwebcomponents`
 *
 * @microcopy - language worth noting:
 *  -
 *
 * @customElement
 * @polymer
 * @demo demo/index.html demo
 * @demo demo/how.html getting started
 * @demo demo/colors.html all of the colors
 * @demo demo/picker.html simple-colors-picker
 * @demo demo/extending.html extending simple-colors
 */
class SimpleColors extends PolymerElement {
  // render function
  static get template() {
    return html`
      <style>
        :host {
          --simple-colors-default-theme-accent-1: #ffffff;
          --simple-colors-default-theme-accent-2: #eeeeee;
          --simple-colors-default-theme-accent-3: #dddddd;
          --simple-colors-default-theme-accent-4: #cccccc;
          --simple-colors-default-theme-accent-5: #bbbbbb;
          --simple-colors-default-theme-accent-6: #999999;
          --simple-colors-default-theme-accent-7: #666666;
          --simple-colors-default-theme-accent-8: #444444;
          --simple-colors-default-theme-accent-9: #333333;
          --simple-colors-default-theme-accent-10: #222222;
          --simple-colors-default-theme-accent-11: #111111;
          --simple-colors-default-theme-accent-12: #000000;

          --simple-colors-default-theme-grey-1: #ffffff;
          --simple-colors-default-theme-grey-2: #eeeeee;
          --simple-colors-default-theme-grey-3: #dddddd;
          --simple-colors-default-theme-grey-4: #cccccc;
          --simple-colors-default-theme-grey-5: #bbbbbb;
          --simple-colors-default-theme-grey-6: #999999;
          --simple-colors-default-theme-grey-7: #666666;
          --simple-colors-default-theme-grey-8: #444444;
          --simple-colors-default-theme-grey-9: #333333;
          --simple-colors-default-theme-grey-10: #222222;
          --simple-colors-default-theme-grey-11: #111111;
          --simple-colors-default-theme-grey-12: #000000;

          --simple-colors-default-theme-red-1: #ffdddd;
          --simple-colors-default-theme-red-2: #ffaeae;
          --simple-colors-default-theme-red-3: #ff8f8f;
          --simple-colors-default-theme-red-4: #ff7474;
          --simple-colors-default-theme-red-5: #fd5151;
          --simple-colors-default-theme-red-6: #ff2222;
          --simple-colors-default-theme-red-7: #ee0000;
          --simple-colors-default-theme-red-8: #ac0000;
          --simple-colors-default-theme-red-9: #850000;
          --simple-colors-default-theme-red-10: #670000;
          --simple-colors-default-theme-red-11: #520000;
          --simple-colors-default-theme-red-12: #3f0000;

          --simple-colors-default-theme-pink-1: #ffe6f1;
          --simple-colors-default-theme-pink-2: #ffa5cf;
          --simple-colors-default-theme-pink-3: #ff87c0;
          --simple-colors-default-theme-pink-4: #ff73b5;
          --simple-colors-default-theme-pink-5: #fd60aa;
          --simple-colors-default-theme-pink-6: #ff3996;
          --simple-colors-default-theme-pink-7: #da004e;
          --simple-colors-default-theme-pink-8: #b80042;
          --simple-colors-default-theme-pink-9: #980036;
          --simple-colors-default-theme-pink-10: #78002b;
          --simple-colors-default-theme-pink-11: #5a0020;
          --simple-colors-default-theme-pink-12: #440019;

          --simple-colors-default-theme-purple-1: #fce6ff;
          --simple-colors-default-theme-purple-2: #f4affd;
          --simple-colors-default-theme-purple-3: #f394ff;
          --simple-colors-default-theme-purple-4: #f07cff;
          --simple-colors-default-theme-purple-5: #ed61ff;
          --simple-colors-default-theme-purple-6: #e200ff;
          --simple-colors-default-theme-purple-7: #a500ba;
          --simple-colors-default-theme-purple-8: #8a009b;
          --simple-colors-default-theme-purple-9: #6c0079;
          --simple-colors-default-theme-purple-10: #490052;
          --simple-colors-default-theme-purple-11: #33003a;
          --simple-colors-default-theme-purple-12: #200025;

          --simple-colors-default-theme-deep-purple-1: #f3e4ff;
          --simple-colors-default-theme-deep-purple-2: #ddacff;
          --simple-colors-default-theme-deep-purple-3: #c97eff;
          --simple-colors-default-theme-deep-purple-4: #bb63f9;
          --simple-colors-default-theme-deep-purple-5: #b44aff;
          --simple-colors-default-theme-deep-purple-6: #a931ff;
          --simple-colors-default-theme-deep-purple-7: #7e00d8;
          --simple-colors-default-theme-deep-purple-8: #5d009f;
          --simple-colors-default-theme-deep-purple-9: #4c0081;
          --simple-colors-default-theme-deep-purple-10: #3a0063;
          --simple-colors-default-theme-deep-purple-11: #2a0049;
          --simple-colors-default-theme-deep-purple-12: #1d0033;

          --simple-colors-default-theme-indigo-1: #e5ddff;
          --simple-colors-default-theme-indigo-2: #c3b2ff;
          --simple-colors-default-theme-indigo-3: #af97ff;
          --simple-colors-default-theme-indigo-4: #9e82ff;
          --simple-colors-default-theme-indigo-5: #9373ff;
          --simple-colors-default-theme-indigo-6: #835fff;
          --simple-colors-default-theme-indigo-7: #3a00ff;
          --simple-colors-default-theme-indigo-8: #2801b0;
          --simple-colors-default-theme-indigo-9: #20008c;
          --simple-colors-default-theme-indigo-10: #160063;
          --simple-colors-default-theme-indigo-11: #100049;
          --simple-colors-default-theme-indigo-12: #0a0030;

          --simple-colors-default-theme-blue-1: #e2ecff;
          --simple-colors-default-theme-blue-2: #acc9ff;
          --simple-colors-default-theme-blue-3: #95baff;
          --simple-colors-default-theme-blue-4: #74a5ff;
          --simple-colors-default-theme-blue-5: #5892fd;
          --simple-colors-default-theme-blue-6: #4083ff;
          --simple-colors-default-theme-blue-7: #0059ff;
          --simple-colors-default-theme-blue-8: #0041bb;
          --simple-colors-default-theme-blue-9: #003494;
          --simple-colors-default-theme-blue-10: #002569;
          --simple-colors-default-theme-blue-11: #001947;
          --simple-colors-default-theme-blue-12: #001333;

          --simple-colors-default-theme-light-blue-1: #ddefff;
          --simple-colors-default-theme-light-blue-2: #a1d1ff;
          --simple-colors-default-theme-light-blue-3: #92c9ff;
          --simple-colors-default-theme-light-blue-4: #65b3ff;
          --simple-colors-default-theme-light-blue-5: #58adff;
          --simple-colors-default-theme-light-blue-6: #41a1ff;
          --simple-colors-default-theme-light-blue-7: #007ffc;
          --simple-colors-default-theme-light-blue-8: #0066ca;
          --simple-colors-default-theme-light-blue-9: #0055a8;
          --simple-colors-default-theme-light-blue-10: #003f7d;
          --simple-colors-default-theme-light-blue-11: #002850;
          --simple-colors-default-theme-light-blue-12: #001b36;

          --simple-colors-default-theme-cyan-1: #ddf8ff;
          --simple-colors-default-theme-cyan-2: #9beaff;
          --simple-colors-default-theme-cyan-3: #77e2ff;
          --simple-colors-default-theme-cyan-4: #33d4ff;
          --simple-colors-default-theme-cyan-5: #1ccfff;
          --simple-colors-default-theme-cyan-6: #00c9ff;
          --simple-colors-default-theme-cyan-7: #009dc7;
          --simple-colors-default-theme-cyan-8: #007999;
          --simple-colors-default-theme-cyan-9: #005970;
          --simple-colors-default-theme-cyan-10: #003f50;
          --simple-colors-default-theme-cyan-11: #002c38;
          --simple-colors-default-theme-cyan-12: #001a20;

          --simple-colors-default-theme-teal-1: #d9fff0;
          --simple-colors-default-theme-teal-2: #98ffd7;
          --simple-colors-default-theme-teal-3: #79ffcb;
          --simple-colors-default-theme-teal-4: #56ffbd;
          --simple-colors-default-theme-teal-5: #29ffac;
          --simple-colors-default-theme-teal-6: #00ff9c;
          --simple-colors-default-theme-teal-7: #009d75;
          --simple-colors-default-theme-teal-8: #007658;
          --simple-colors-default-theme-teal-9: #004e3a;
          --simple-colors-default-theme-teal-10: #003829;
          --simple-colors-default-theme-teal-11: #002a20;
          --simple-colors-default-theme-teal-12: #001b14;

          --simple-colors-default-theme-green-1: #e1ffeb;
          --simple-colors-default-theme-green-2: #acffc9;
          --simple-colors-default-theme-green-3: #79ffa7;
          --simple-colors-default-theme-green-4: #49ff88;
          --simple-colors-default-theme-green-5: #24ff70;
          --simple-colors-default-theme-green-6: #00f961;
          --simple-colors-default-theme-green-7: #008c37;
          --simple-colors-default-theme-green-8: #00762e;
          --simple-colors-default-theme-green-9: #005a23;
          --simple-colors-default-theme-green-10: #003d18;
          --simple-colors-default-theme-green-11: #002a11;
          --simple-colors-default-theme-green-12: #001d0c;

          --simple-colors-default-theme-light-green-1: #ebffdb;
          --simple-colors-default-theme-light-green-2: #c7ff9b;
          --simple-colors-default-theme-light-green-3: #b1ff75;
          --simple-colors-default-theme-light-green-4: #a1fd5a;
          --simple-colors-default-theme-light-green-5: #8efd38;
          --simple-colors-default-theme-light-green-6: #6fff00;
          --simple-colors-default-theme-light-green-7: #429d00;
          --simple-colors-default-theme-light-green-8: #357f00;
          --simple-colors-default-theme-light-green-9: #296100;
          --simple-colors-default-theme-light-green-10: #1b3f00;
          --simple-colors-default-theme-light-green-11: #143000;
          --simple-colors-default-theme-light-green-12: #0d2000;

          --simple-colors-default-theme-lime-1: #f1ffd2;
          --simple-colors-default-theme-lime-2: #dfff9b;
          --simple-colors-default-theme-lime-3: #d4ff77;
          --simple-colors-default-theme-lime-4: #caff58;
          --simple-colors-default-theme-lime-5: #bdff2d;
          --simple-colors-default-theme-lime-6: #aeff00;
          --simple-colors-default-theme-lime-7: #649900;
          --simple-colors-default-theme-lime-8: #4d7600;
          --simple-colors-default-theme-lime-9: #3b5a00;
          --simple-colors-default-theme-lime-10: #293f00;
          --simple-colors-default-theme-lime-11: #223400;
          --simple-colors-default-theme-lime-12: #182400;

          --simple-colors-default-theme-yellow-1: #ffffd5;
          --simple-colors-default-theme-yellow-2: #ffffac;
          --simple-colors-default-theme-yellow-3: #ffff90;
          --simple-colors-default-theme-yellow-4: #ffff7c;
          --simple-colors-default-theme-yellow-5: #ffff3a;
          --simple-colors-default-theme-yellow-6: #f6f600;
          --simple-colors-default-theme-yellow-7: #929100;
          --simple-colors-default-theme-yellow-8: #787700;
          --simple-colors-default-theme-yellow-9: #585700;
          --simple-colors-default-theme-yellow-10: #454400;
          --simple-colors-default-theme-yellow-11: #303000;
          --simple-colors-default-theme-yellow-12: #242400;

          --simple-colors-default-theme-amber-1: #fff2d4;
          --simple-colors-default-theme-amber-2: #ffdf92;
          --simple-colors-default-theme-amber-3: #ffd677;
          --simple-colors-default-theme-amber-4: #ffcf5e;
          --simple-colors-default-theme-amber-5: #ffc235;
          --simple-colors-default-theme-amber-6: #ffc500;
          --simple-colors-default-theme-amber-7: #b28900;
          --simple-colors-default-theme-amber-8: #876800;
          --simple-colors-default-theme-amber-9: #614b00;
          --simple-colors-default-theme-amber-10: #413200;
          --simple-colors-default-theme-amber-11: #302500;
          --simple-colors-default-theme-amber-12: #221a00;

          --simple-colors-default-theme-orange-1: #ffebd7;
          --simple-colors-default-theme-orange-2: #ffca92;
          --simple-colors-default-theme-orange-3: #ffbd75;
          --simple-colors-default-theme-orange-4: #ffb05c;
          --simple-colors-default-theme-orange-5: #ff9e36;
          --simple-colors-default-theme-orange-6: #ff9625;
          --simple-colors-default-theme-orange-7: #e56a00;
          --simple-colors-default-theme-orange-8: #ae5100;
          --simple-colors-default-theme-orange-9: #833d00;
          --simple-colors-default-theme-orange-10: #612d00;
          --simple-colors-default-theme-orange-11: #3d1c00;
          --simple-colors-default-theme-orange-12: #2c1400;

          --simple-colors-default-theme-deep-orange-1: #ffe7e0;
          --simple-colors-default-theme-deep-orange-2: #ffb299;
          --simple-colors-default-theme-deep-orange-3: #ffa588;
          --simple-colors-default-theme-deep-orange-4: #ff8a64;
          --simple-colors-default-theme-deep-orange-5: #ff7649;
          --simple-colors-default-theme-deep-orange-6: #ff6c3c;
          --simple-colors-default-theme-deep-orange-7: #f53100;
          --simple-colors-default-theme-deep-orange-8: #b92500;
          --simple-colors-default-theme-deep-orange-9: #8a1c00;
          --simple-colors-default-theme-deep-orange-10: #561100;
          --simple-colors-default-theme-deep-orange-11: #3a0c00;
          --simple-colors-default-theme-deep-orange-12: #240700;

          --simple-colors-default-theme-brown-1: #f0e2de;
          --simple-colors-default-theme-brown-2: #e5b8aa;
          --simple-colors-default-theme-brown-3: #c59485;
          --simple-colors-default-theme-brown-4: #b68373;
          --simple-colors-default-theme-brown-5: #ac7868;
          --simple-colors-default-theme-brown-6: #a47060;
          --simple-colors-default-theme-brown-7: #85574a;
          --simple-colors-default-theme-brown-8: #724539;
          --simple-colors-default-theme-brown-9: #5b3328;
          --simple-colors-default-theme-brown-10: #3b1e15;
          --simple-colors-default-theme-brown-11: #2c140e;
          --simple-colors-default-theme-brown-12: #200e09;

          --simple-colors-default-theme-blue-grey-1: #e7eff1;
          --simple-colors-default-theme-blue-grey-2: #b1c5ce;
          --simple-colors-default-theme-blue-grey-3: #9badb6;
          --simple-colors-default-theme-blue-grey-4: #8d9fa7;
          --simple-colors-default-theme-blue-grey-5: #7a8f98;
          --simple-colors-default-theme-blue-grey-6: #718892;
          --simple-colors-default-theme-blue-grey-7: #56707c;
          --simple-colors-default-theme-blue-grey-8: #40535b;
          --simple-colors-default-theme-blue-grey-9: #2f3e45;
          --simple-colors-default-theme-blue-grey-10: #1e282c;
          --simple-colors-default-theme-blue-grey-11: #182023;
          --simple-colors-default-theme-blue-grey-12: #0f1518;
          --simple-colors-fixed-theme-accent-1: #ffffff;
          --simple-colors-fixed-theme-accent-2: #eeeeee;
          --simple-colors-fixed-theme-accent-3: #dddddd;
          --simple-colors-fixed-theme-accent-4: #cccccc;
          --simple-colors-fixed-theme-accent-5: #bbbbbb;
          --simple-colors-fixed-theme-accent-6: #999999;
          --simple-colors-fixed-theme-accent-7: #666666;
          --simple-colors-fixed-theme-accent-8: #444444;
          --simple-colors-fixed-theme-accent-9: #333333;
          --simple-colors-fixed-theme-accent-10: #222222;
          --simple-colors-fixed-theme-accent-11: #111111;
          --simple-colors-fixed-theme-accent-12: #000000;

          --simple-colors-fixed-theme-grey-1: #ffffff;
          --simple-colors-fixed-theme-grey-2: #eeeeee;
          --simple-colors-fixed-theme-grey-3: #dddddd;
          --simple-colors-fixed-theme-grey-4: #cccccc;
          --simple-colors-fixed-theme-grey-5: #bbbbbb;
          --simple-colors-fixed-theme-grey-6: #999999;
          --simple-colors-fixed-theme-grey-7: #666666;
          --simple-colors-fixed-theme-grey-8: #444444;
          --simple-colors-fixed-theme-grey-9: #333333;
          --simple-colors-fixed-theme-grey-10: #222222;
          --simple-colors-fixed-theme-grey-11: #111111;
          --simple-colors-fixed-theme-grey-12: #000000;

          --simple-colors-fixed-theme-red-1: #ffdddd;
          --simple-colors-fixed-theme-red-2: #ffaeae;
          --simple-colors-fixed-theme-red-3: #ff8f8f;
          --simple-colors-fixed-theme-red-4: #ff7474;
          --simple-colors-fixed-theme-red-5: #fd5151;
          --simple-colors-fixed-theme-red-6: #ff2222;
          --simple-colors-fixed-theme-red-7: #ee0000;
          --simple-colors-fixed-theme-red-8: #ac0000;
          --simple-colors-fixed-theme-red-9: #850000;
          --simple-colors-fixed-theme-red-10: #670000;
          --simple-colors-fixed-theme-red-11: #520000;
          --simple-colors-fixed-theme-red-12: #3f0000;

          --simple-colors-fixed-theme-pink-1: #ffe6f1;
          --simple-colors-fixed-theme-pink-2: #ffa5cf;
          --simple-colors-fixed-theme-pink-3: #ff87c0;
          --simple-colors-fixed-theme-pink-4: #ff73b5;
          --simple-colors-fixed-theme-pink-5: #fd60aa;
          --simple-colors-fixed-theme-pink-6: #ff3996;
          --simple-colors-fixed-theme-pink-7: #da004e;
          --simple-colors-fixed-theme-pink-8: #b80042;
          --simple-colors-fixed-theme-pink-9: #980036;
          --simple-colors-fixed-theme-pink-10: #78002b;
          --simple-colors-fixed-theme-pink-11: #5a0020;
          --simple-colors-fixed-theme-pink-12: #440019;

          --simple-colors-fixed-theme-purple-1: #fce6ff;
          --simple-colors-fixed-theme-purple-2: #f4affd;
          --simple-colors-fixed-theme-purple-3: #f394ff;
          --simple-colors-fixed-theme-purple-4: #f07cff;
          --simple-colors-fixed-theme-purple-5: #ed61ff;
          --simple-colors-fixed-theme-purple-6: #e200ff;
          --simple-colors-fixed-theme-purple-7: #a500ba;
          --simple-colors-fixed-theme-purple-8: #8a009b;
          --simple-colors-fixed-theme-purple-9: #6c0079;
          --simple-colors-fixed-theme-purple-10: #490052;
          --simple-colors-fixed-theme-purple-11: #33003a;
          --simple-colors-fixed-theme-purple-12: #200025;

          --simple-colors-fixed-theme-deep-purple-1: #f3e4ff;
          --simple-colors-fixed-theme-deep-purple-2: #ddacff;
          --simple-colors-fixed-theme-deep-purple-3: #c97eff;
          --simple-colors-fixed-theme-deep-purple-4: #bb63f9;
          --simple-colors-fixed-theme-deep-purple-5: #b44aff;
          --simple-colors-fixed-theme-deep-purple-6: #a931ff;
          --simple-colors-fixed-theme-deep-purple-7: #7e00d8;
          --simple-colors-fixed-theme-deep-purple-8: #5d009f;
          --simple-colors-fixed-theme-deep-purple-9: #4c0081;
          --simple-colors-fixed-theme-deep-purple-10: #3a0063;
          --simple-colors-fixed-theme-deep-purple-11: #2a0049;
          --simple-colors-fixed-theme-deep-purple-12: #1d0033;

          --simple-colors-fixed-theme-indigo-1: #e5ddff;
          --simple-colors-fixed-theme-indigo-2: #c3b2ff;
          --simple-colors-fixed-theme-indigo-3: #af97ff;
          --simple-colors-fixed-theme-indigo-4: #9e82ff;
          --simple-colors-fixed-theme-indigo-5: #9373ff;
          --simple-colors-fixed-theme-indigo-6: #835fff;
          --simple-colors-fixed-theme-indigo-7: #3a00ff;
          --simple-colors-fixed-theme-indigo-8: #2801b0;
          --simple-colors-fixed-theme-indigo-9: #20008c;
          --simple-colors-fixed-theme-indigo-10: #160063;
          --simple-colors-fixed-theme-indigo-11: #100049;
          --simple-colors-fixed-theme-indigo-12: #0a0030;

          --simple-colors-fixed-theme-blue-1: #e2ecff;
          --simple-colors-fixed-theme-blue-2: #acc9ff;
          --simple-colors-fixed-theme-blue-3: #95baff;
          --simple-colors-fixed-theme-blue-4: #74a5ff;
          --simple-colors-fixed-theme-blue-5: #5892fd;
          --simple-colors-fixed-theme-blue-6: #4083ff;
          --simple-colors-fixed-theme-blue-7: #0059ff;
          --simple-colors-fixed-theme-blue-8: #0041bb;
          --simple-colors-fixed-theme-blue-9: #003494;
          --simple-colors-fixed-theme-blue-10: #002569;
          --simple-colors-fixed-theme-blue-11: #001947;
          --simple-colors-fixed-theme-blue-12: #001333;

          --simple-colors-fixed-theme-light-blue-1: #ddefff;
          --simple-colors-fixed-theme-light-blue-2: #a1d1ff;
          --simple-colors-fixed-theme-light-blue-3: #92c9ff;
          --simple-colors-fixed-theme-light-blue-4: #65b3ff;
          --simple-colors-fixed-theme-light-blue-5: #58adff;
          --simple-colors-fixed-theme-light-blue-6: #41a1ff;
          --simple-colors-fixed-theme-light-blue-7: #007ffc;
          --simple-colors-fixed-theme-light-blue-8: #0066ca;
          --simple-colors-fixed-theme-light-blue-9: #0055a8;
          --simple-colors-fixed-theme-light-blue-10: #003f7d;
          --simple-colors-fixed-theme-light-blue-11: #002850;
          --simple-colors-fixed-theme-light-blue-12: #001b36;

          --simple-colors-fixed-theme-cyan-1: #ddf8ff;
          --simple-colors-fixed-theme-cyan-2: #9beaff;
          --simple-colors-fixed-theme-cyan-3: #77e2ff;
          --simple-colors-fixed-theme-cyan-4: #33d4ff;
          --simple-colors-fixed-theme-cyan-5: #1ccfff;
          --simple-colors-fixed-theme-cyan-6: #00c9ff;
          --simple-colors-fixed-theme-cyan-7: #009dc7;
          --simple-colors-fixed-theme-cyan-8: #007999;
          --simple-colors-fixed-theme-cyan-9: #005970;
          --simple-colors-fixed-theme-cyan-10: #003f50;
          --simple-colors-fixed-theme-cyan-11: #002c38;
          --simple-colors-fixed-theme-cyan-12: #001a20;

          --simple-colors-fixed-theme-teal-1: #d9fff0;
          --simple-colors-fixed-theme-teal-2: #98ffd7;
          --simple-colors-fixed-theme-teal-3: #79ffcb;
          --simple-colors-fixed-theme-teal-4: #56ffbd;
          --simple-colors-fixed-theme-teal-5: #29ffac;
          --simple-colors-fixed-theme-teal-6: #00ff9c;
          --simple-colors-fixed-theme-teal-7: #009d75;
          --simple-colors-fixed-theme-teal-8: #007658;
          --simple-colors-fixed-theme-teal-9: #004e3a;
          --simple-colors-fixed-theme-teal-10: #003829;
          --simple-colors-fixed-theme-teal-11: #002a20;
          --simple-colors-fixed-theme-teal-12: #001b14;

          --simple-colors-fixed-theme-green-1: #e1ffeb;
          --simple-colors-fixed-theme-green-2: #acffc9;
          --simple-colors-fixed-theme-green-3: #79ffa7;
          --simple-colors-fixed-theme-green-4: #49ff88;
          --simple-colors-fixed-theme-green-5: #24ff70;
          --simple-colors-fixed-theme-green-6: #00f961;
          --simple-colors-fixed-theme-green-7: #008c37;
          --simple-colors-fixed-theme-green-8: #00762e;
          --simple-colors-fixed-theme-green-9: #005a23;
          --simple-colors-fixed-theme-green-10: #003d18;
          --simple-colors-fixed-theme-green-11: #002a11;
          --simple-colors-fixed-theme-green-12: #001d0c;

          --simple-colors-fixed-theme-light-green-1: #ebffdb;
          --simple-colors-fixed-theme-light-green-2: #c7ff9b;
          --simple-colors-fixed-theme-light-green-3: #b1ff75;
          --simple-colors-fixed-theme-light-green-4: #a1fd5a;
          --simple-colors-fixed-theme-light-green-5: #8efd38;
          --simple-colors-fixed-theme-light-green-6: #6fff00;
          --simple-colors-fixed-theme-light-green-7: #429d00;
          --simple-colors-fixed-theme-light-green-8: #357f00;
          --simple-colors-fixed-theme-light-green-9: #296100;
          --simple-colors-fixed-theme-light-green-10: #1b3f00;
          --simple-colors-fixed-theme-light-green-11: #143000;
          --simple-colors-fixed-theme-light-green-12: #0d2000;

          --simple-colors-fixed-theme-lime-1: #f1ffd2;
          --simple-colors-fixed-theme-lime-2: #dfff9b;
          --simple-colors-fixed-theme-lime-3: #d4ff77;
          --simple-colors-fixed-theme-lime-4: #caff58;
          --simple-colors-fixed-theme-lime-5: #bdff2d;
          --simple-colors-fixed-theme-lime-6: #aeff00;
          --simple-colors-fixed-theme-lime-7: #649900;
          --simple-colors-fixed-theme-lime-8: #4d7600;
          --simple-colors-fixed-theme-lime-9: #3b5a00;
          --simple-colors-fixed-theme-lime-10: #293f00;
          --simple-colors-fixed-theme-lime-11: #223400;
          --simple-colors-fixed-theme-lime-12: #182400;

          --simple-colors-fixed-theme-yellow-1: #ffffd5;
          --simple-colors-fixed-theme-yellow-2: #ffffac;
          --simple-colors-fixed-theme-yellow-3: #ffff90;
          --simple-colors-fixed-theme-yellow-4: #ffff7c;
          --simple-colors-fixed-theme-yellow-5: #ffff3a;
          --simple-colors-fixed-theme-yellow-6: #f6f600;
          --simple-colors-fixed-theme-yellow-7: #929100;
          --simple-colors-fixed-theme-yellow-8: #787700;
          --simple-colors-fixed-theme-yellow-9: #585700;
          --simple-colors-fixed-theme-yellow-10: #454400;
          --simple-colors-fixed-theme-yellow-11: #303000;
          --simple-colors-fixed-theme-yellow-12: #242400;

          --simple-colors-fixed-theme-amber-1: #fff2d4;
          --simple-colors-fixed-theme-amber-2: #ffdf92;
          --simple-colors-fixed-theme-amber-3: #ffd677;
          --simple-colors-fixed-theme-amber-4: #ffcf5e;
          --simple-colors-fixed-theme-amber-5: #ffc235;
          --simple-colors-fixed-theme-amber-6: #ffc500;
          --simple-colors-fixed-theme-amber-7: #b28900;
          --simple-colors-fixed-theme-amber-8: #876800;
          --simple-colors-fixed-theme-amber-9: #614b00;
          --simple-colors-fixed-theme-amber-10: #413200;
          --simple-colors-fixed-theme-amber-11: #302500;
          --simple-colors-fixed-theme-amber-12: #221a00;

          --simple-colors-fixed-theme-orange-1: #ffebd7;
          --simple-colors-fixed-theme-orange-2: #ffca92;
          --simple-colors-fixed-theme-orange-3: #ffbd75;
          --simple-colors-fixed-theme-orange-4: #ffb05c;
          --simple-colors-fixed-theme-orange-5: #ff9e36;
          --simple-colors-fixed-theme-orange-6: #ff9625;
          --simple-colors-fixed-theme-orange-7: #e56a00;
          --simple-colors-fixed-theme-orange-8: #ae5100;
          --simple-colors-fixed-theme-orange-9: #833d00;
          --simple-colors-fixed-theme-orange-10: #612d00;
          --simple-colors-fixed-theme-orange-11: #3d1c00;
          --simple-colors-fixed-theme-orange-12: #2c1400;

          --simple-colors-fixed-theme-deep-orange-1: #ffe7e0;
          --simple-colors-fixed-theme-deep-orange-2: #ffb299;
          --simple-colors-fixed-theme-deep-orange-3: #ffa588;
          --simple-colors-fixed-theme-deep-orange-4: #ff8a64;
          --simple-colors-fixed-theme-deep-orange-5: #ff7649;
          --simple-colors-fixed-theme-deep-orange-6: #ff6c3c;
          --simple-colors-fixed-theme-deep-orange-7: #f53100;
          --simple-colors-fixed-theme-deep-orange-8: #b92500;
          --simple-colors-fixed-theme-deep-orange-9: #8a1c00;
          --simple-colors-fixed-theme-deep-orange-10: #561100;
          --simple-colors-fixed-theme-deep-orange-11: #3a0c00;
          --simple-colors-fixed-theme-deep-orange-12: #240700;

          --simple-colors-fixed-theme-brown-1: #f0e2de;
          --simple-colors-fixed-theme-brown-2: #e5b8aa;
          --simple-colors-fixed-theme-brown-3: #c59485;
          --simple-colors-fixed-theme-brown-4: #b68373;
          --simple-colors-fixed-theme-brown-5: #ac7868;
          --simple-colors-fixed-theme-brown-6: #a47060;
          --simple-colors-fixed-theme-brown-7: #85574a;
          --simple-colors-fixed-theme-brown-8: #724539;
          --simple-colors-fixed-theme-brown-9: #5b3328;
          --simple-colors-fixed-theme-brown-10: #3b1e15;
          --simple-colors-fixed-theme-brown-11: #2c140e;
          --simple-colors-fixed-theme-brown-12: #200e09;

          --simple-colors-fixed-theme-blue-grey-1: #e7eff1;
          --simple-colors-fixed-theme-blue-grey-2: #b1c5ce;
          --simple-colors-fixed-theme-blue-grey-3: #9badb6;
          --simple-colors-fixed-theme-blue-grey-4: #8d9fa7;
          --simple-colors-fixed-theme-blue-grey-5: #7a8f98;
          --simple-colors-fixed-theme-blue-grey-6: #718892;
          --simple-colors-fixed-theme-blue-grey-7: #56707c;
          --simple-colors-fixed-theme-blue-grey-8: #40535b;
          --simple-colors-fixed-theme-blue-grey-9: #2f3e45;
          --simple-colors-fixed-theme-blue-grey-10: #1e282c;
          --simple-colors-fixed-theme-blue-grey-11: #182023;
          --simple-colors-fixed-theme-blue-grey-12: #0f1518;
        }

        :host([dark]),
        :host [dark] {
          --simple-colors-default-theme-accent-1: #000000;
          --simple-colors-default-theme-accent-2: #111111;
          --simple-colors-default-theme-accent-3: #222222;
          --simple-colors-default-theme-accent-4: #333333;
          --simple-colors-default-theme-accent-5: #444444;
          --simple-colors-default-theme-accent-6: #666666;
          --simple-colors-default-theme-accent-7: #999999;
          --simple-colors-default-theme-accent-8: #bbbbbb;
          --simple-colors-default-theme-accent-9: #cccccc;
          --simple-colors-default-theme-accent-10: #dddddd;
          --simple-colors-default-theme-accent-11: #eeeeee;
          --simple-colors-default-theme-accent-12: #ffffff;

          --simple-colors-default-theme-grey-1: #000000;
          --simple-colors-default-theme-grey-2: #111111;
          --simple-colors-default-theme-grey-3: #222222;
          --simple-colors-default-theme-grey-4: #333333;
          --simple-colors-default-theme-grey-5: #444444;
          --simple-colors-default-theme-grey-6: #666666;
          --simple-colors-default-theme-grey-7: #999999;
          --simple-colors-default-theme-grey-8: #bbbbbb;
          --simple-colors-default-theme-grey-9: #cccccc;
          --simple-colors-default-theme-grey-10: #dddddd;
          --simple-colors-default-theme-grey-11: #eeeeee;
          --simple-colors-default-theme-grey-12: #ffffff;

          --simple-colors-default-theme-red-1: #3f0000;
          --simple-colors-default-theme-red-2: #520000;
          --simple-colors-default-theme-red-3: #670000;
          --simple-colors-default-theme-red-4: #850000;
          --simple-colors-default-theme-red-5: #ac0000;
          --simple-colors-default-theme-red-6: #ee0000;
          --simple-colors-default-theme-red-7: #ff2222;
          --simple-colors-default-theme-red-8: #fd5151;
          --simple-colors-default-theme-red-9: #ff7474;
          --simple-colors-default-theme-red-10: #ff8f8f;
          --simple-colors-default-theme-red-11: #ffaeae;
          --simple-colors-default-theme-red-12: #ffdddd;

          --simple-colors-default-theme-pink-1: #440019;
          --simple-colors-default-theme-pink-2: #5a0020;
          --simple-colors-default-theme-pink-3: #78002b;
          --simple-colors-default-theme-pink-4: #980036;
          --simple-colors-default-theme-pink-5: #b80042;
          --simple-colors-default-theme-pink-6: #da004e;
          --simple-colors-default-theme-pink-7: #ff3996;
          --simple-colors-default-theme-pink-8: #fd60aa;
          --simple-colors-default-theme-pink-9: #ff73b5;
          --simple-colors-default-theme-pink-10: #ff87c0;
          --simple-colors-default-theme-pink-11: #ffa5cf;
          --simple-colors-default-theme-pink-12: #ffe6f1;

          --simple-colors-default-theme-purple-1: #200025;
          --simple-colors-default-theme-purple-2: #33003a;
          --simple-colors-default-theme-purple-3: #490052;
          --simple-colors-default-theme-purple-4: #6c0079;
          --simple-colors-default-theme-purple-5: #8a009b;
          --simple-colors-default-theme-purple-6: #a500ba;
          --simple-colors-default-theme-purple-7: #e200ff;
          --simple-colors-default-theme-purple-8: #ed61ff;
          --simple-colors-default-theme-purple-9: #f07cff;
          --simple-colors-default-theme-purple-10: #f394ff;
          --simple-colors-default-theme-purple-11: #f4affd;
          --simple-colors-default-theme-purple-12: #fce6ff;

          --simple-colors-default-theme-deep-purple-1: #1d0033;
          --simple-colors-default-theme-deep-purple-2: #2a0049;
          --simple-colors-default-theme-deep-purple-3: #3a0063;
          --simple-colors-default-theme-deep-purple-4: #4c0081;
          --simple-colors-default-theme-deep-purple-5: #5d009f;
          --simple-colors-default-theme-deep-purple-6: #7e00d8;
          --simple-colors-default-theme-deep-purple-7: #a931ff;
          --simple-colors-default-theme-deep-purple-8: #b44aff;
          --simple-colors-default-theme-deep-purple-9: #bb63f9;
          --simple-colors-default-theme-deep-purple-10: #c97eff;
          --simple-colors-default-theme-deep-purple-11: #ddacff;
          --simple-colors-default-theme-deep-purple-12: #f3e4ff;

          --simple-colors-default-theme-indigo-1: #0a0030;
          --simple-colors-default-theme-indigo-2: #100049;
          --simple-colors-default-theme-indigo-3: #160063;
          --simple-colors-default-theme-indigo-4: #20008c;
          --simple-colors-default-theme-indigo-5: #2801b0;
          --simple-colors-default-theme-indigo-6: #3a00ff;
          --simple-colors-default-theme-indigo-7: #835fff;
          --simple-colors-default-theme-indigo-8: #9373ff;
          --simple-colors-default-theme-indigo-9: #9e82ff;
          --simple-colors-default-theme-indigo-10: #af97ff;
          --simple-colors-default-theme-indigo-11: #c3b2ff;
          --simple-colors-default-theme-indigo-12: #e5ddff;

          --simple-colors-default-theme-blue-1: #001333;
          --simple-colors-default-theme-blue-2: #001947;
          --simple-colors-default-theme-blue-3: #002569;
          --simple-colors-default-theme-blue-4: #003494;
          --simple-colors-default-theme-blue-5: #0041bb;
          --simple-colors-default-theme-blue-6: #0059ff;
          --simple-colors-default-theme-blue-7: #4083ff;
          --simple-colors-default-theme-blue-8: #5892fd;
          --simple-colors-default-theme-blue-9: #74a5ff;
          --simple-colors-default-theme-blue-10: #95baff;
          --simple-colors-default-theme-blue-11: #acc9ff;
          --simple-colors-default-theme-blue-12: #e2ecff;

          --simple-colors-default-theme-light-blue-1: #001b36;
          --simple-colors-default-theme-light-blue-2: #002850;
          --simple-colors-default-theme-light-blue-3: #003f7d;
          --simple-colors-default-theme-light-blue-4: #0055a8;
          --simple-colors-default-theme-light-blue-5: #0066ca;
          --simple-colors-default-theme-light-blue-6: #007ffc;
          --simple-colors-default-theme-light-blue-7: #41a1ff;
          --simple-colors-default-theme-light-blue-8: #58adff;
          --simple-colors-default-theme-light-blue-9: #65b3ff;
          --simple-colors-default-theme-light-blue-10: #92c9ff;
          --simple-colors-default-theme-light-blue-11: #a1d1ff;
          --simple-colors-default-theme-light-blue-12: #ddefff;

          --simple-colors-default-theme-cyan-1: #001a20;
          --simple-colors-default-theme-cyan-2: #002c38;
          --simple-colors-default-theme-cyan-3: #003f50;
          --simple-colors-default-theme-cyan-4: #005970;
          --simple-colors-default-theme-cyan-5: #007999;
          --simple-colors-default-theme-cyan-6: #009dc7;
          --simple-colors-default-theme-cyan-7: #00c9ff;
          --simple-colors-default-theme-cyan-8: #1ccfff;
          --simple-colors-default-theme-cyan-9: #33d4ff;
          --simple-colors-default-theme-cyan-10: #77e2ff;
          --simple-colors-default-theme-cyan-11: #9beaff;
          --simple-colors-default-theme-cyan-12: #ddf8ff;

          --simple-colors-default-theme-teal-1: #001b14;
          --simple-colors-default-theme-teal-2: #002a20;
          --simple-colors-default-theme-teal-3: #003829;
          --simple-colors-default-theme-teal-4: #004e3a;
          --simple-colors-default-theme-teal-5: #007658;
          --simple-colors-default-theme-teal-6: #009d75;
          --simple-colors-default-theme-teal-7: #00ff9c;
          --simple-colors-default-theme-teal-8: #29ffac;
          --simple-colors-default-theme-teal-9: #56ffbd;
          --simple-colors-default-theme-teal-10: #79ffcb;
          --simple-colors-default-theme-teal-11: #98ffd7;
          --simple-colors-default-theme-teal-12: #d9fff0;

          --simple-colors-default-theme-green-1: #001d0c;
          --simple-colors-default-theme-green-2: #002a11;
          --simple-colors-default-theme-green-3: #003d18;
          --simple-colors-default-theme-green-4: #005a23;
          --simple-colors-default-theme-green-5: #00762e;
          --simple-colors-default-theme-green-6: #008c37;
          --simple-colors-default-theme-green-7: #00f961;
          --simple-colors-default-theme-green-8: #24ff70;
          --simple-colors-default-theme-green-9: #49ff88;
          --simple-colors-default-theme-green-10: #79ffa7;
          --simple-colors-default-theme-green-11: #acffc9;
          --simple-colors-default-theme-green-12: #e1ffeb;

          --simple-colors-default-theme-light-green-1: #0d2000;
          --simple-colors-default-theme-light-green-2: #143000;
          --simple-colors-default-theme-light-green-3: #1b3f00;
          --simple-colors-default-theme-light-green-4: #296100;
          --simple-colors-default-theme-light-green-5: #357f00;
          --simple-colors-default-theme-light-green-6: #429d00;
          --simple-colors-default-theme-light-green-7: #6fff00;
          --simple-colors-default-theme-light-green-8: #8efd38;
          --simple-colors-default-theme-light-green-9: #a1fd5a;
          --simple-colors-default-theme-light-green-10: #b1ff75;
          --simple-colors-default-theme-light-green-11: #c7ff9b;
          --simple-colors-default-theme-light-green-12: #ebffdb;

          --simple-colors-default-theme-lime-1: #182400;
          --simple-colors-default-theme-lime-2: #223400;
          --simple-colors-default-theme-lime-3: #293f00;
          --simple-colors-default-theme-lime-4: #3b5a00;
          --simple-colors-default-theme-lime-5: #4d7600;
          --simple-colors-default-theme-lime-6: #649900;
          --simple-colors-default-theme-lime-7: #aeff00;
          --simple-colors-default-theme-lime-8: #bdff2d;
          --simple-colors-default-theme-lime-9: #caff58;
          --simple-colors-default-theme-lime-10: #d4ff77;
          --simple-colors-default-theme-lime-11: #dfff9b;
          --simple-colors-default-theme-lime-12: #f1ffd2;

          --simple-colors-default-theme-yellow-1: #242400;
          --simple-colors-default-theme-yellow-2: #303000;
          --simple-colors-default-theme-yellow-3: #454400;
          --simple-colors-default-theme-yellow-4: #585700;
          --simple-colors-default-theme-yellow-5: #787700;
          --simple-colors-default-theme-yellow-6: #929100;
          --simple-colors-default-theme-yellow-7: #f6f600;
          --simple-colors-default-theme-yellow-8: #ffff3a;
          --simple-colors-default-theme-yellow-9: #ffff7c;
          --simple-colors-default-theme-yellow-10: #ffff90;
          --simple-colors-default-theme-yellow-11: #ffffac;
          --simple-colors-default-theme-yellow-12: #ffffd5;

          --simple-colors-default-theme-amber-1: #221a00;
          --simple-colors-default-theme-amber-2: #302500;
          --simple-colors-default-theme-amber-3: #413200;
          --simple-colors-default-theme-amber-4: #614b00;
          --simple-colors-default-theme-amber-5: #876800;
          --simple-colors-default-theme-amber-6: #b28900;
          --simple-colors-default-theme-amber-7: #ffc500;
          --simple-colors-default-theme-amber-8: #ffc235;
          --simple-colors-default-theme-amber-9: #ffcf5e;
          --simple-colors-default-theme-amber-10: #ffd677;
          --simple-colors-default-theme-amber-11: #ffdf92;
          --simple-colors-default-theme-amber-12: #fff2d4;

          --simple-colors-default-theme-orange-1: #2c1400;
          --simple-colors-default-theme-orange-2: #3d1c00;
          --simple-colors-default-theme-orange-3: #612d00;
          --simple-colors-default-theme-orange-4: #833d00;
          --simple-colors-default-theme-orange-5: #ae5100;
          --simple-colors-default-theme-orange-6: #e56a00;
          --simple-colors-default-theme-orange-7: #ff9625;
          --simple-colors-default-theme-orange-8: #ff9e36;
          --simple-colors-default-theme-orange-9: #ffb05c;
          --simple-colors-default-theme-orange-10: #ffbd75;
          --simple-colors-default-theme-orange-11: #ffca92;
          --simple-colors-default-theme-orange-12: #ffebd7;

          --simple-colors-default-theme-deep-orange-1: #240700;
          --simple-colors-default-theme-deep-orange-2: #3a0c00;
          --simple-colors-default-theme-deep-orange-3: #561100;
          --simple-colors-default-theme-deep-orange-4: #8a1c00;
          --simple-colors-default-theme-deep-orange-5: #b92500;
          --simple-colors-default-theme-deep-orange-6: #f53100;
          --simple-colors-default-theme-deep-orange-7: #ff6c3c;
          --simple-colors-default-theme-deep-orange-8: #ff7649;
          --simple-colors-default-theme-deep-orange-9: #ff8a64;
          --simple-colors-default-theme-deep-orange-10: #ffa588;
          --simple-colors-default-theme-deep-orange-11: #ffb299;
          --simple-colors-default-theme-deep-orange-12: #ffe7e0;

          --simple-colors-default-theme-brown-1: #200e09;
          --simple-colors-default-theme-brown-2: #2c140e;
          --simple-colors-default-theme-brown-3: #3b1e15;
          --simple-colors-default-theme-brown-4: #5b3328;
          --simple-colors-default-theme-brown-5: #724539;
          --simple-colors-default-theme-brown-6: #85574a;
          --simple-colors-default-theme-brown-7: #a47060;
          --simple-colors-default-theme-brown-8: #ac7868;
          --simple-colors-default-theme-brown-9: #b68373;
          --simple-colors-default-theme-brown-10: #c59485;
          --simple-colors-default-theme-brown-11: #e5b8aa;
          --simple-colors-default-theme-brown-12: #f0e2de;

          --simple-colors-default-theme-blue-grey-1: #0f1518;
          --simple-colors-default-theme-blue-grey-2: #182023;
          --simple-colors-default-theme-blue-grey-3: #1e282c;
          --simple-colors-default-theme-blue-grey-4: #2f3e45;
          --simple-colors-default-theme-blue-grey-5: #40535b;
          --simple-colors-default-theme-blue-grey-6: #56707c;
          --simple-colors-default-theme-blue-grey-7: #718892;
          --simple-colors-default-theme-blue-grey-8: #7a8f98;
          --simple-colors-default-theme-blue-grey-9: #8d9fa7;
          --simple-colors-default-theme-blue-grey-10: #9badb6;
          --simple-colors-default-theme-blue-grey-11: #b1c5ce;
          --simple-colors-default-theme-blue-grey-12: #e7eff1;
        }

        :host([accent-color="grey"]),
        :host [accent-color="grey"] {
          --simple-colors-default-theme-accent-1: #ffffff;
          --simple-colors-default-theme-accent-2: #eeeeee;
          --simple-colors-default-theme-accent-3: #dddddd;
          --simple-colors-default-theme-accent-4: #cccccc;
          --simple-colors-default-theme-accent-5: #bbbbbb;
          --simple-colors-default-theme-accent-6: #999999;
          --simple-colors-default-theme-accent-7: #666666;
          --simple-colors-default-theme-accent-8: #444444;
          --simple-colors-default-theme-accent-9: #333333;
          --simple-colors-default-theme-accent-10: #222222;
          --simple-colors-default-theme-accent-11: #111111;
          --simple-colors-default-theme-accent-12: #000000;
          --simple-colors-default-theme-fixed-1: #ffffff;
          --simple-colors-default-theme-fixed-2: #eeeeee;
          --simple-colors-default-theme-fixed-3: #dddddd;
          --simple-colors-default-theme-fixed-4: #cccccc;
          --simple-colors-default-theme-fixed-5: #bbbbbb;
          --simple-colors-default-theme-fixed-6: #999999;
          --simple-colors-default-theme-fixed-7: #666666;
          --simple-colors-default-theme-fixed-8: #444444;
          --simple-colors-default-theme-fixed-9: #333333;
          --simple-colors-default-theme-fixed-10: #222222;
          --simple-colors-default-theme-fixed-11: #111111;
          --simple-colors-default-theme-fixed-12: #000000;
        }

        :host([dark][accent-color="grey"]),
        :host([dark]) [accent-color="grey"],
        :host([accent-color="grey"]) [dark],
        :host [dark][accent-color="grey"] {
          --simple-colors-default-theme-accent-1: #000000;
          --simple-colors-default-theme-accent-2: #111111;
          --simple-colors-default-theme-accent-3: #222222;
          --simple-colors-default-theme-accent-4: #333333;
          --simple-colors-default-theme-accent-5: #444444;
          --simple-colors-default-theme-accent-6: #666666;
          --simple-colors-default-theme-accent-7: #999999;
          --simple-colors-default-theme-accent-8: #bbbbbb;
          --simple-colors-default-theme-accent-9: #cccccc;
          --simple-colors-default-theme-accent-10: #dddddd;
          --simple-colors-default-theme-accent-11: #eeeeee;
          --simple-colors-default-theme-accent-12: #ffffff;
        }

        :host([accent-color="red"]),
        :host [accent-color="red"] {
          --simple-colors-default-theme-accent-1: #ffdddd;
          --simple-colors-default-theme-accent-2: #ffaeae;
          --simple-colors-default-theme-accent-3: #ff8f8f;
          --simple-colors-default-theme-accent-4: #ff7474;
          --simple-colors-default-theme-accent-5: #fd5151;
          --simple-colors-default-theme-accent-6: #ff2222;
          --simple-colors-default-theme-accent-7: #ee0000;
          --simple-colors-default-theme-accent-8: #ac0000;
          --simple-colors-default-theme-accent-9: #850000;
          --simple-colors-default-theme-accent-10: #670000;
          --simple-colors-default-theme-accent-11: #520000;
          --simple-colors-default-theme-accent-12: #3f0000;
          --simple-colors-default-theme-fixed-1: #ffdddd;
          --simple-colors-default-theme-fixed-2: #ffaeae;
          --simple-colors-default-theme-fixed-3: #ff8f8f;
          --simple-colors-default-theme-fixed-4: #ff7474;
          --simple-colors-default-theme-fixed-5: #fd5151;
          --simple-colors-default-theme-fixed-6: #ff2222;
          --simple-colors-default-theme-fixed-7: #ee0000;
          --simple-colors-default-theme-fixed-8: #ac0000;
          --simple-colors-default-theme-fixed-9: #850000;
          --simple-colors-default-theme-fixed-10: #670000;
          --simple-colors-default-theme-fixed-11: #520000;
          --simple-colors-default-theme-fixed-12: #3f0000;
        }

        :host([dark][accent-color="red"]),
        :host([dark]) [accent-color="red"],
        :host([accent-color="red"]) [dark],
        :host [dark][accent-color="red"] {
          --simple-colors-default-theme-accent-1: #3f0000;
          --simple-colors-default-theme-accent-2: #520000;
          --simple-colors-default-theme-accent-3: #670000;
          --simple-colors-default-theme-accent-4: #850000;
          --simple-colors-default-theme-accent-5: #ac0000;
          --simple-colors-default-theme-accent-6: #ee0000;
          --simple-colors-default-theme-accent-7: #ff2222;
          --simple-colors-default-theme-accent-8: #fd5151;
          --simple-colors-default-theme-accent-9: #ff7474;
          --simple-colors-default-theme-accent-10: #ff8f8f;
          --simple-colors-default-theme-accent-11: #ffaeae;
          --simple-colors-default-theme-accent-12: #ffdddd;
        }

        :host([accent-color="pink"]),
        :host [accent-color="pink"] {
          --simple-colors-default-theme-accent-1: #ffe6f1;
          --simple-colors-default-theme-accent-2: #ffa5cf;
          --simple-colors-default-theme-accent-3: #ff87c0;
          --simple-colors-default-theme-accent-4: #ff73b5;
          --simple-colors-default-theme-accent-5: #fd60aa;
          --simple-colors-default-theme-accent-6: #ff3996;
          --simple-colors-default-theme-accent-7: #da004e;
          --simple-colors-default-theme-accent-8: #b80042;
          --simple-colors-default-theme-accent-9: #980036;
          --simple-colors-default-theme-accent-10: #78002b;
          --simple-colors-default-theme-accent-11: #5a0020;
          --simple-colors-default-theme-accent-12: #440019;
          --simple-colors-default-theme-fixed-1: #ffe6f1;
          --simple-colors-default-theme-fixed-2: #ffa5cf;
          --simple-colors-default-theme-fixed-3: #ff87c0;
          --simple-colors-default-theme-fixed-4: #ff73b5;
          --simple-colors-default-theme-fixed-5: #fd60aa;
          --simple-colors-default-theme-fixed-6: #ff3996;
          --simple-colors-default-theme-fixed-7: #da004e;
          --simple-colors-default-theme-fixed-8: #b80042;
          --simple-colors-default-theme-fixed-9: #980036;
          --simple-colors-default-theme-fixed-10: #78002b;
          --simple-colors-default-theme-fixed-11: #5a0020;
          --simple-colors-default-theme-fixed-12: #440019;
        }

        :host([dark][accent-color="pink"]),
        :host([dark]) [accent-color="pink"],
        :host([accent-color="pink"]) [dark],
        :host [dark][accent-color="pink"] {
          --simple-colors-default-theme-accent-1: #440019;
          --simple-colors-default-theme-accent-2: #5a0020;
          --simple-colors-default-theme-accent-3: #78002b;
          --simple-colors-default-theme-accent-4: #980036;
          --simple-colors-default-theme-accent-5: #b80042;
          --simple-colors-default-theme-accent-6: #da004e;
          --simple-colors-default-theme-accent-7: #ff3996;
          --simple-colors-default-theme-accent-8: #fd60aa;
          --simple-colors-default-theme-accent-9: #ff73b5;
          --simple-colors-default-theme-accent-10: #ff87c0;
          --simple-colors-default-theme-accent-11: #ffa5cf;
          --simple-colors-default-theme-accent-12: #ffe6f1;
        }

        :host([accent-color="purple"]),
        :host [accent-color="purple"] {
          --simple-colors-default-theme-accent-1: #fce6ff;
          --simple-colors-default-theme-accent-2: #f4affd;
          --simple-colors-default-theme-accent-3: #f394ff;
          --simple-colors-default-theme-accent-4: #f07cff;
          --simple-colors-default-theme-accent-5: #ed61ff;
          --simple-colors-default-theme-accent-6: #e200ff;
          --simple-colors-default-theme-accent-7: #a500ba;
          --simple-colors-default-theme-accent-8: #8a009b;
          --simple-colors-default-theme-accent-9: #6c0079;
          --simple-colors-default-theme-accent-10: #490052;
          --simple-colors-default-theme-accent-11: #33003a;
          --simple-colors-default-theme-accent-12: #200025;
          --simple-colors-default-theme-fixed-1: #fce6ff;
          --simple-colors-default-theme-fixed-2: #f4affd;
          --simple-colors-default-theme-fixed-3: #f394ff;
          --simple-colors-default-theme-fixed-4: #f07cff;
          --simple-colors-default-theme-fixed-5: #ed61ff;
          --simple-colors-default-theme-fixed-6: #e200ff;
          --simple-colors-default-theme-fixed-7: #a500ba;
          --simple-colors-default-theme-fixed-8: #8a009b;
          --simple-colors-default-theme-fixed-9: #6c0079;
          --simple-colors-default-theme-fixed-10: #490052;
          --simple-colors-default-theme-fixed-11: #33003a;
          --simple-colors-default-theme-fixed-12: #200025;
        }

        :host([dark][accent-color="purple"]),
        :host([dark]) [accent-color="purple"],
        :host([accent-color="purple"]) [dark],
        :host [dark][accent-color="purple"] {
          --simple-colors-default-theme-accent-1: #200025;
          --simple-colors-default-theme-accent-2: #33003a;
          --simple-colors-default-theme-accent-3: #490052;
          --simple-colors-default-theme-accent-4: #6c0079;
          --simple-colors-default-theme-accent-5: #8a009b;
          --simple-colors-default-theme-accent-6: #a500ba;
          --simple-colors-default-theme-accent-7: #e200ff;
          --simple-colors-default-theme-accent-8: #ed61ff;
          --simple-colors-default-theme-accent-9: #f07cff;
          --simple-colors-default-theme-accent-10: #f394ff;
          --simple-colors-default-theme-accent-11: #f4affd;
          --simple-colors-default-theme-accent-12: #fce6ff;
        }

        :host([accent-color="deep-purple"]),
        :host [accent-color="deep-purple"] {
          --simple-colors-default-theme-accent-1: #f3e4ff;
          --simple-colors-default-theme-accent-2: #ddacff;
          --simple-colors-default-theme-accent-3: #c97eff;
          --simple-colors-default-theme-accent-4: #bb63f9;
          --simple-colors-default-theme-accent-5: #b44aff;
          --simple-colors-default-theme-accent-6: #a931ff;
          --simple-colors-default-theme-accent-7: #7e00d8;
          --simple-colors-default-theme-accent-8: #5d009f;
          --simple-colors-default-theme-accent-9: #4c0081;
          --simple-colors-default-theme-accent-10: #3a0063;
          --simple-colors-default-theme-accent-11: #2a0049;
          --simple-colors-default-theme-accent-12: #1d0033;
          --simple-colors-default-theme-fixed-1: #f3e4ff;
          --simple-colors-default-theme-fixed-2: #ddacff;
          --simple-colors-default-theme-fixed-3: #c97eff;
          --simple-colors-default-theme-fixed-4: #bb63f9;
          --simple-colors-default-theme-fixed-5: #b44aff;
          --simple-colors-default-theme-fixed-6: #a931ff;
          --simple-colors-default-theme-fixed-7: #7e00d8;
          --simple-colors-default-theme-fixed-8: #5d009f;
          --simple-colors-default-theme-fixed-9: #4c0081;
          --simple-colors-default-theme-fixed-10: #3a0063;
          --simple-colors-default-theme-fixed-11: #2a0049;
          --simple-colors-default-theme-fixed-12: #1d0033;
        }

        :host([dark][accent-color="deep-purple"]),
        :host([dark]) [accent-color="deep-purple"],
        :host([accent-color="deep-purple"]) [dark],
        :host [dark][accent-color="deep-purple"] {
          --simple-colors-default-theme-accent-1: #1d0033;
          --simple-colors-default-theme-accent-2: #2a0049;
          --simple-colors-default-theme-accent-3: #3a0063;
          --simple-colors-default-theme-accent-4: #4c0081;
          --simple-colors-default-theme-accent-5: #5d009f;
          --simple-colors-default-theme-accent-6: #7e00d8;
          --simple-colors-default-theme-accent-7: #a931ff;
          --simple-colors-default-theme-accent-8: #b44aff;
          --simple-colors-default-theme-accent-9: #bb63f9;
          --simple-colors-default-theme-accent-10: #c97eff;
          --simple-colors-default-theme-accent-11: #ddacff;
          --simple-colors-default-theme-accent-12: #f3e4ff;
        }

        :host([accent-color="indigo"]),
        :host [accent-color="indigo"] {
          --simple-colors-default-theme-accent-1: #e5ddff;
          --simple-colors-default-theme-accent-2: #c3b2ff;
          --simple-colors-default-theme-accent-3: #af97ff;
          --simple-colors-default-theme-accent-4: #9e82ff;
          --simple-colors-default-theme-accent-5: #9373ff;
          --simple-colors-default-theme-accent-6: #835fff;
          --simple-colors-default-theme-accent-7: #3a00ff;
          --simple-colors-default-theme-accent-8: #2801b0;
          --simple-colors-default-theme-accent-9: #20008c;
          --simple-colors-default-theme-accent-10: #160063;
          --simple-colors-default-theme-accent-11: #100049;
          --simple-colors-default-theme-accent-12: #0a0030;
          --simple-colors-default-theme-fixed-1: #e5ddff;
          --simple-colors-default-theme-fixed-2: #c3b2ff;
          --simple-colors-default-theme-fixed-3: #af97ff;
          --simple-colors-default-theme-fixed-4: #9e82ff;
          --simple-colors-default-theme-fixed-5: #9373ff;
          --simple-colors-default-theme-fixed-6: #835fff;
          --simple-colors-default-theme-fixed-7: #3a00ff;
          --simple-colors-default-theme-fixed-8: #2801b0;
          --simple-colors-default-theme-fixed-9: #20008c;
          --simple-colors-default-theme-fixed-10: #160063;
          --simple-colors-default-theme-fixed-11: #100049;
          --simple-colors-default-theme-fixed-12: #0a0030;
        }

        :host([dark][accent-color="indigo"]),
        :host([dark]) [accent-color="indigo"],
        :host([accent-color="indigo"]) [dark],
        :host [dark][accent-color="indigo"] {
          --simple-colors-default-theme-accent-1: #0a0030;
          --simple-colors-default-theme-accent-2: #100049;
          --simple-colors-default-theme-accent-3: #160063;
          --simple-colors-default-theme-accent-4: #20008c;
          --simple-colors-default-theme-accent-5: #2801b0;
          --simple-colors-default-theme-accent-6: #3a00ff;
          --simple-colors-default-theme-accent-7: #835fff;
          --simple-colors-default-theme-accent-8: #9373ff;
          --simple-colors-default-theme-accent-9: #9e82ff;
          --simple-colors-default-theme-accent-10: #af97ff;
          --simple-colors-default-theme-accent-11: #c3b2ff;
          --simple-colors-default-theme-accent-12: #e5ddff;
        }

        :host([accent-color="blue"]),
        :host [accent-color="blue"] {
          --simple-colors-default-theme-accent-1: #e2ecff;
          --simple-colors-default-theme-accent-2: #acc9ff;
          --simple-colors-default-theme-accent-3: #95baff;
          --simple-colors-default-theme-accent-4: #74a5ff;
          --simple-colors-default-theme-accent-5: #5892fd;
          --simple-colors-default-theme-accent-6: #4083ff;
          --simple-colors-default-theme-accent-7: #0059ff;
          --simple-colors-default-theme-accent-8: #0041bb;
          --simple-colors-default-theme-accent-9: #003494;
          --simple-colors-default-theme-accent-10: #002569;
          --simple-colors-default-theme-accent-11: #001947;
          --simple-colors-default-theme-accent-12: #001333;
          --simple-colors-default-theme-fixed-1: #e2ecff;
          --simple-colors-default-theme-fixed-2: #acc9ff;
          --simple-colors-default-theme-fixed-3: #95baff;
          --simple-colors-default-theme-fixed-4: #74a5ff;
          --simple-colors-default-theme-fixed-5: #5892fd;
          --simple-colors-default-theme-fixed-6: #4083ff;
          --simple-colors-default-theme-fixed-7: #0059ff;
          --simple-colors-default-theme-fixed-8: #0041bb;
          --simple-colors-default-theme-fixed-9: #003494;
          --simple-colors-default-theme-fixed-10: #002569;
          --simple-colors-default-theme-fixed-11: #001947;
          --simple-colors-default-theme-fixed-12: #001333;
        }

        :host([dark][accent-color="blue"]),
        :host([dark]) [accent-color="blue"],
        :host([accent-color="blue"]) [dark],
        :host [dark][accent-color="blue"] {
          --simple-colors-default-theme-accent-1: #001333;
          --simple-colors-default-theme-accent-2: #001947;
          --simple-colors-default-theme-accent-3: #002569;
          --simple-colors-default-theme-accent-4: #003494;
          --simple-colors-default-theme-accent-5: #0041bb;
          --simple-colors-default-theme-accent-6: #0059ff;
          --simple-colors-default-theme-accent-7: #4083ff;
          --simple-colors-default-theme-accent-8: #5892fd;
          --simple-colors-default-theme-accent-9: #74a5ff;
          --simple-colors-default-theme-accent-10: #95baff;
          --simple-colors-default-theme-accent-11: #acc9ff;
          --simple-colors-default-theme-accent-12: #e2ecff;
        }

        :host([accent-color="light-blue"]),
        :host [accent-color="light-blue"] {
          --simple-colors-default-theme-accent-1: #ddefff;
          --simple-colors-default-theme-accent-2: #a1d1ff;
          --simple-colors-default-theme-accent-3: #92c9ff;
          --simple-colors-default-theme-accent-4: #65b3ff;
          --simple-colors-default-theme-accent-5: #58adff;
          --simple-colors-default-theme-accent-6: #41a1ff;
          --simple-colors-default-theme-accent-7: #007ffc;
          --simple-colors-default-theme-accent-8: #0066ca;
          --simple-colors-default-theme-accent-9: #0055a8;
          --simple-colors-default-theme-accent-10: #003f7d;
          --simple-colors-default-theme-accent-11: #002850;
          --simple-colors-default-theme-accent-12: #001b36;
          --simple-colors-default-theme-fixed-1: #ddefff;
          --simple-colors-default-theme-fixed-2: #a1d1ff;
          --simple-colors-default-theme-fixed-3: #92c9ff;
          --simple-colors-default-theme-fixed-4: #65b3ff;
          --simple-colors-default-theme-fixed-5: #58adff;
          --simple-colors-default-theme-fixed-6: #41a1ff;
          --simple-colors-default-theme-fixed-7: #007ffc;
          --simple-colors-default-theme-fixed-8: #0066ca;
          --simple-colors-default-theme-fixed-9: #0055a8;
          --simple-colors-default-theme-fixed-10: #003f7d;
          --simple-colors-default-theme-fixed-11: #002850;
          --simple-colors-default-theme-fixed-12: #001b36;
        }

        :host([dark][accent-color="light-blue"]),
        :host([dark]) [accent-color="light-blue"],
        :host([accent-color="light-blue"]) [dark],
        :host [dark][accent-color="light-blue"] {
          --simple-colors-default-theme-accent-1: #001b36;
          --simple-colors-default-theme-accent-2: #002850;
          --simple-colors-default-theme-accent-3: #003f7d;
          --simple-colors-default-theme-accent-4: #0055a8;
          --simple-colors-default-theme-accent-5: #0066ca;
          --simple-colors-default-theme-accent-6: #007ffc;
          --simple-colors-default-theme-accent-7: #41a1ff;
          --simple-colors-default-theme-accent-8: #58adff;
          --simple-colors-default-theme-accent-9: #65b3ff;
          --simple-colors-default-theme-accent-10: #92c9ff;
          --simple-colors-default-theme-accent-11: #a1d1ff;
          --simple-colors-default-theme-accent-12: #ddefff;
        }

        :host([accent-color="cyan"]),
        :host [accent-color="cyan"] {
          --simple-colors-default-theme-accent-1: #ddf8ff;
          --simple-colors-default-theme-accent-2: #9beaff;
          --simple-colors-default-theme-accent-3: #77e2ff;
          --simple-colors-default-theme-accent-4: #33d4ff;
          --simple-colors-default-theme-accent-5: #1ccfff;
          --simple-colors-default-theme-accent-6: #00c9ff;
          --simple-colors-default-theme-accent-7: #009dc7;
          --simple-colors-default-theme-accent-8: #007999;
          --simple-colors-default-theme-accent-9: #005970;
          --simple-colors-default-theme-accent-10: #003f50;
          --simple-colors-default-theme-accent-11: #002c38;
          --simple-colors-default-theme-accent-12: #001a20;
          --simple-colors-default-theme-fixed-1: #ddf8ff;
          --simple-colors-default-theme-fixed-2: #9beaff;
          --simple-colors-default-theme-fixed-3: #77e2ff;
          --simple-colors-default-theme-fixed-4: #33d4ff;
          --simple-colors-default-theme-fixed-5: #1ccfff;
          --simple-colors-default-theme-fixed-6: #00c9ff;
          --simple-colors-default-theme-fixed-7: #009dc7;
          --simple-colors-default-theme-fixed-8: #007999;
          --simple-colors-default-theme-fixed-9: #005970;
          --simple-colors-default-theme-fixed-10: #003f50;
          --simple-colors-default-theme-fixed-11: #002c38;
          --simple-colors-default-theme-fixed-12: #001a20;
        }

        :host([dark][accent-color="cyan"]),
        :host([dark]) [accent-color="cyan"],
        :host([accent-color="cyan"]) [dark],
        :host [dark][accent-color="cyan"] {
          --simple-colors-default-theme-accent-1: #001a20;
          --simple-colors-default-theme-accent-2: #002c38;
          --simple-colors-default-theme-accent-3: #003f50;
          --simple-colors-default-theme-accent-4: #005970;
          --simple-colors-default-theme-accent-5: #007999;
          --simple-colors-default-theme-accent-6: #009dc7;
          --simple-colors-default-theme-accent-7: #00c9ff;
          --simple-colors-default-theme-accent-8: #1ccfff;
          --simple-colors-default-theme-accent-9: #33d4ff;
          --simple-colors-default-theme-accent-10: #77e2ff;
          --simple-colors-default-theme-accent-11: #9beaff;
          --simple-colors-default-theme-accent-12: #ddf8ff;
        }

        :host([accent-color="teal"]),
        :host [accent-color="teal"] {
          --simple-colors-default-theme-accent-1: #d9fff0;
          --simple-colors-default-theme-accent-2: #98ffd7;
          --simple-colors-default-theme-accent-3: #79ffcb;
          --simple-colors-default-theme-accent-4: #56ffbd;
          --simple-colors-default-theme-accent-5: #29ffac;
          --simple-colors-default-theme-accent-6: #00ff9c;
          --simple-colors-default-theme-accent-7: #009d75;
          --simple-colors-default-theme-accent-8: #007658;
          --simple-colors-default-theme-accent-9: #004e3a;
          --simple-colors-default-theme-accent-10: #003829;
          --simple-colors-default-theme-accent-11: #002a20;
          --simple-colors-default-theme-accent-12: #001b14;
          --simple-colors-default-theme-fixed-1: #d9fff0;
          --simple-colors-default-theme-fixed-2: #98ffd7;
          --simple-colors-default-theme-fixed-3: #79ffcb;
          --simple-colors-default-theme-fixed-4: #56ffbd;
          --simple-colors-default-theme-fixed-5: #29ffac;
          --simple-colors-default-theme-fixed-6: #00ff9c;
          --simple-colors-default-theme-fixed-7: #009d75;
          --simple-colors-default-theme-fixed-8: #007658;
          --simple-colors-default-theme-fixed-9: #004e3a;
          --simple-colors-default-theme-fixed-10: #003829;
          --simple-colors-default-theme-fixed-11: #002a20;
          --simple-colors-default-theme-fixed-12: #001b14;
        }

        :host([dark][accent-color="teal"]),
        :host([dark]) [accent-color="teal"],
        :host([accent-color="teal"]) [dark],
        :host [dark][accent-color="teal"] {
          --simple-colors-default-theme-accent-1: #001b14;
          --simple-colors-default-theme-accent-2: #002a20;
          --simple-colors-default-theme-accent-3: #003829;
          --simple-colors-default-theme-accent-4: #004e3a;
          --simple-colors-default-theme-accent-5: #007658;
          --simple-colors-default-theme-accent-6: #009d75;
          --simple-colors-default-theme-accent-7: #00ff9c;
          --simple-colors-default-theme-accent-8: #29ffac;
          --simple-colors-default-theme-accent-9: #56ffbd;
          --simple-colors-default-theme-accent-10: #79ffcb;
          --simple-colors-default-theme-accent-11: #98ffd7;
          --simple-colors-default-theme-accent-12: #d9fff0;
        }

        :host([accent-color="green"]),
        :host [accent-color="green"] {
          --simple-colors-default-theme-accent-1: #e1ffeb;
          --simple-colors-default-theme-accent-2: #acffc9;
          --simple-colors-default-theme-accent-3: #79ffa7;
          --simple-colors-default-theme-accent-4: #49ff88;
          --simple-colors-default-theme-accent-5: #24ff70;
          --simple-colors-default-theme-accent-6: #00f961;
          --simple-colors-default-theme-accent-7: #008c37;
          --simple-colors-default-theme-accent-8: #00762e;
          --simple-colors-default-theme-accent-9: #005a23;
          --simple-colors-default-theme-accent-10: #003d18;
          --simple-colors-default-theme-accent-11: #002a11;
          --simple-colors-default-theme-accent-12: #001d0c;
          --simple-colors-default-theme-fixed-1: #e1ffeb;
          --simple-colors-default-theme-fixed-2: #acffc9;
          --simple-colors-default-theme-fixed-3: #79ffa7;
          --simple-colors-default-theme-fixed-4: #49ff88;
          --simple-colors-default-theme-fixed-5: #24ff70;
          --simple-colors-default-theme-fixed-6: #00f961;
          --simple-colors-default-theme-fixed-7: #008c37;
          --simple-colors-default-theme-fixed-8: #00762e;
          --simple-colors-default-theme-fixed-9: #005a23;
          --simple-colors-default-theme-fixed-10: #003d18;
          --simple-colors-default-theme-fixed-11: #002a11;
          --simple-colors-default-theme-fixed-12: #001d0c;
        }

        :host([dark][accent-color="green"]),
        :host([dark]) [accent-color="green"],
        :host([accent-color="green"]) [dark],
        :host [dark][accent-color="green"] {
          --simple-colors-default-theme-accent-1: #001d0c;
          --simple-colors-default-theme-accent-2: #002a11;
          --simple-colors-default-theme-accent-3: #003d18;
          --simple-colors-default-theme-accent-4: #005a23;
          --simple-colors-default-theme-accent-5: #00762e;
          --simple-colors-default-theme-accent-6: #008c37;
          --simple-colors-default-theme-accent-7: #00f961;
          --simple-colors-default-theme-accent-8: #24ff70;
          --simple-colors-default-theme-accent-9: #49ff88;
          --simple-colors-default-theme-accent-10: #79ffa7;
          --simple-colors-default-theme-accent-11: #acffc9;
          --simple-colors-default-theme-accent-12: #e1ffeb;
        }

        :host([accent-color="light-green"]),
        :host [accent-color="light-green"] {
          --simple-colors-default-theme-accent-1: #ebffdb;
          --simple-colors-default-theme-accent-2: #c7ff9b;
          --simple-colors-default-theme-accent-3: #b1ff75;
          --simple-colors-default-theme-accent-4: #a1fd5a;
          --simple-colors-default-theme-accent-5: #8efd38;
          --simple-colors-default-theme-accent-6: #6fff00;
          --simple-colors-default-theme-accent-7: #429d00;
          --simple-colors-default-theme-accent-8: #357f00;
          --simple-colors-default-theme-accent-9: #296100;
          --simple-colors-default-theme-accent-10: #1b3f00;
          --simple-colors-default-theme-accent-11: #143000;
          --simple-colors-default-theme-accent-12: #0d2000;
          --simple-colors-default-theme-fixed-1: #ebffdb;
          --simple-colors-default-theme-fixed-2: #c7ff9b;
          --simple-colors-default-theme-fixed-3: #b1ff75;
          --simple-colors-default-theme-fixed-4: #a1fd5a;
          --simple-colors-default-theme-fixed-5: #8efd38;
          --simple-colors-default-theme-fixed-6: #6fff00;
          --simple-colors-default-theme-fixed-7: #429d00;
          --simple-colors-default-theme-fixed-8: #357f00;
          --simple-colors-default-theme-fixed-9: #296100;
          --simple-colors-default-theme-fixed-10: #1b3f00;
          --simple-colors-default-theme-fixed-11: #143000;
          --simple-colors-default-theme-fixed-12: #0d2000;
        }

        :host([dark][accent-color="light-green"]),
        :host([dark]) [accent-color="light-green"],
        :host([accent-color="light-green"]) [dark],
        :host [dark][accent-color="light-green"] {
          --simple-colors-default-theme-accent-1: #0d2000;
          --simple-colors-default-theme-accent-2: #143000;
          --simple-colors-default-theme-accent-3: #1b3f00;
          --simple-colors-default-theme-accent-4: #296100;
          --simple-colors-default-theme-accent-5: #357f00;
          --simple-colors-default-theme-accent-6: #429d00;
          --simple-colors-default-theme-accent-7: #6fff00;
          --simple-colors-default-theme-accent-8: #8efd38;
          --simple-colors-default-theme-accent-9: #a1fd5a;
          --simple-colors-default-theme-accent-10: #b1ff75;
          --simple-colors-default-theme-accent-11: #c7ff9b;
          --simple-colors-default-theme-accent-12: #ebffdb;
        }

        :host([accent-color="lime"]),
        :host [accent-color="lime"] {
          --simple-colors-default-theme-accent-1: #f1ffd2;
          --simple-colors-default-theme-accent-2: #dfff9b;
          --simple-colors-default-theme-accent-3: #d4ff77;
          --simple-colors-default-theme-accent-4: #caff58;
          --simple-colors-default-theme-accent-5: #bdff2d;
          --simple-colors-default-theme-accent-6: #aeff00;
          --simple-colors-default-theme-accent-7: #649900;
          --simple-colors-default-theme-accent-8: #4d7600;
          --simple-colors-default-theme-accent-9: #3b5a00;
          --simple-colors-default-theme-accent-10: #293f00;
          --simple-colors-default-theme-accent-11: #223400;
          --simple-colors-default-theme-accent-12: #182400;
          --simple-colors-default-theme-fixed-1: #f1ffd2;
          --simple-colors-default-theme-fixed-2: #dfff9b;
          --simple-colors-default-theme-fixed-3: #d4ff77;
          --simple-colors-default-theme-fixed-4: #caff58;
          --simple-colors-default-theme-fixed-5: #bdff2d;
          --simple-colors-default-theme-fixed-6: #aeff00;
          --simple-colors-default-theme-fixed-7: #649900;
          --simple-colors-default-theme-fixed-8: #4d7600;
          --simple-colors-default-theme-fixed-9: #3b5a00;
          --simple-colors-default-theme-fixed-10: #293f00;
          --simple-colors-default-theme-fixed-11: #223400;
          --simple-colors-default-theme-fixed-12: #182400;
        }

        :host([dark][accent-color="lime"]),
        :host([dark]) [accent-color="lime"],
        :host([accent-color="lime"]) [dark],
        :host [dark][accent-color="lime"] {
          --simple-colors-default-theme-accent-1: #182400;
          --simple-colors-default-theme-accent-2: #223400;
          --simple-colors-default-theme-accent-3: #293f00;
          --simple-colors-default-theme-accent-4: #3b5a00;
          --simple-colors-default-theme-accent-5: #4d7600;
          --simple-colors-default-theme-accent-6: #649900;
          --simple-colors-default-theme-accent-7: #aeff00;
          --simple-colors-default-theme-accent-8: #bdff2d;
          --simple-colors-default-theme-accent-9: #caff58;
          --simple-colors-default-theme-accent-10: #d4ff77;
          --simple-colors-default-theme-accent-11: #dfff9b;
          --simple-colors-default-theme-accent-12: #f1ffd2;
        }

        :host([accent-color="yellow"]),
        :host [accent-color="yellow"] {
          --simple-colors-default-theme-accent-1: #ffffd5;
          --simple-colors-default-theme-accent-2: #ffffac;
          --simple-colors-default-theme-accent-3: #ffff90;
          --simple-colors-default-theme-accent-4: #ffff7c;
          --simple-colors-default-theme-accent-5: #ffff3a;
          --simple-colors-default-theme-accent-6: #f6f600;
          --simple-colors-default-theme-accent-7: #929100;
          --simple-colors-default-theme-accent-8: #787700;
          --simple-colors-default-theme-accent-9: #585700;
          --simple-colors-default-theme-accent-10: #454400;
          --simple-colors-default-theme-accent-11: #303000;
          --simple-colors-default-theme-accent-12: #242400;
          --simple-colors-default-theme-fixed-1: #ffffd5;
          --simple-colors-default-theme-fixed-2: #ffffac;
          --simple-colors-default-theme-fixed-3: #ffff90;
          --simple-colors-default-theme-fixed-4: #ffff7c;
          --simple-colors-default-theme-fixed-5: #ffff3a;
          --simple-colors-default-theme-fixed-6: #f6f600;
          --simple-colors-default-theme-fixed-7: #929100;
          --simple-colors-default-theme-fixed-8: #787700;
          --simple-colors-default-theme-fixed-9: #585700;
          --simple-colors-default-theme-fixed-10: #454400;
          --simple-colors-default-theme-fixed-11: #303000;
          --simple-colors-default-theme-fixed-12: #242400;
        }

        :host([dark][accent-color="yellow"]),
        :host([dark]) [accent-color="yellow"],
        :host([accent-color="yellow"]) [dark],
        :host [dark][accent-color="yellow"] {
          --simple-colors-default-theme-accent-1: #242400;
          --simple-colors-default-theme-accent-2: #303000;
          --simple-colors-default-theme-accent-3: #454400;
          --simple-colors-default-theme-accent-4: #585700;
          --simple-colors-default-theme-accent-5: #787700;
          --simple-colors-default-theme-accent-6: #929100;
          --simple-colors-default-theme-accent-7: #f6f600;
          --simple-colors-default-theme-accent-8: #ffff3a;
          --simple-colors-default-theme-accent-9: #ffff7c;
          --simple-colors-default-theme-accent-10: #ffff90;
          --simple-colors-default-theme-accent-11: #ffffac;
          --simple-colors-default-theme-accent-12: #ffffd5;
        }

        :host([accent-color="amber"]),
        :host [accent-color="amber"] {
          --simple-colors-default-theme-accent-1: #fff2d4;
          --simple-colors-default-theme-accent-2: #ffdf92;
          --simple-colors-default-theme-accent-3: #ffd677;
          --simple-colors-default-theme-accent-4: #ffcf5e;
          --simple-colors-default-theme-accent-5: #ffc235;
          --simple-colors-default-theme-accent-6: #ffc500;
          --simple-colors-default-theme-accent-7: #b28900;
          --simple-colors-default-theme-accent-8: #876800;
          --simple-colors-default-theme-accent-9: #614b00;
          --simple-colors-default-theme-accent-10: #413200;
          --simple-colors-default-theme-accent-11: #302500;
          --simple-colors-default-theme-accent-12: #221a00;
          --simple-colors-default-theme-fixed-1: #fff2d4;
          --simple-colors-default-theme-fixed-2: #ffdf92;
          --simple-colors-default-theme-fixed-3: #ffd677;
          --simple-colors-default-theme-fixed-4: #ffcf5e;
          --simple-colors-default-theme-fixed-5: #ffc235;
          --simple-colors-default-theme-fixed-6: #ffc500;
          --simple-colors-default-theme-fixed-7: #b28900;
          --simple-colors-default-theme-fixed-8: #876800;
          --simple-colors-default-theme-fixed-9: #614b00;
          --simple-colors-default-theme-fixed-10: #413200;
          --simple-colors-default-theme-fixed-11: #302500;
          --simple-colors-default-theme-fixed-12: #221a00;
        }

        :host([dark][accent-color="amber"]),
        :host([dark]) [accent-color="amber"],
        :host([accent-color="amber"]) [dark],
        :host [dark][accent-color="amber"] {
          --simple-colors-default-theme-accent-1: #221a00;
          --simple-colors-default-theme-accent-2: #302500;
          --simple-colors-default-theme-accent-3: #413200;
          --simple-colors-default-theme-accent-4: #614b00;
          --simple-colors-default-theme-accent-5: #876800;
          --simple-colors-default-theme-accent-6: #b28900;
          --simple-colors-default-theme-accent-7: #ffc500;
          --simple-colors-default-theme-accent-8: #ffc235;
          --simple-colors-default-theme-accent-9: #ffcf5e;
          --simple-colors-default-theme-accent-10: #ffd677;
          --simple-colors-default-theme-accent-11: #ffdf92;
          --simple-colors-default-theme-accent-12: #fff2d4;
        }

        :host([accent-color="orange"]),
        :host [accent-color="orange"] {
          --simple-colors-default-theme-accent-1: #ffebd7;
          --simple-colors-default-theme-accent-2: #ffca92;
          --simple-colors-default-theme-accent-3: #ffbd75;
          --simple-colors-default-theme-accent-4: #ffb05c;
          --simple-colors-default-theme-accent-5: #ff9e36;
          --simple-colors-default-theme-accent-6: #ff9625;
          --simple-colors-default-theme-accent-7: #e56a00;
          --simple-colors-default-theme-accent-8: #ae5100;
          --simple-colors-default-theme-accent-9: #833d00;
          --simple-colors-default-theme-accent-10: #612d00;
          --simple-colors-default-theme-accent-11: #3d1c00;
          --simple-colors-default-theme-accent-12: #2c1400;
          --simple-colors-default-theme-fixed-1: #ffebd7;
          --simple-colors-default-theme-fixed-2: #ffca92;
          --simple-colors-default-theme-fixed-3: #ffbd75;
          --simple-colors-default-theme-fixed-4: #ffb05c;
          --simple-colors-default-theme-fixed-5: #ff9e36;
          --simple-colors-default-theme-fixed-6: #ff9625;
          --simple-colors-default-theme-fixed-7: #e56a00;
          --simple-colors-default-theme-fixed-8: #ae5100;
          --simple-colors-default-theme-fixed-9: #833d00;
          --simple-colors-default-theme-fixed-10: #612d00;
          --simple-colors-default-theme-fixed-11: #3d1c00;
          --simple-colors-default-theme-fixed-12: #2c1400;
        }

        :host([dark][accent-color="orange"]),
        :host([dark]) [accent-color="orange"],
        :host([accent-color="orange"]) [dark],
        :host [dark][accent-color="orange"] {
          --simple-colors-default-theme-accent-1: #2c1400;
          --simple-colors-default-theme-accent-2: #3d1c00;
          --simple-colors-default-theme-accent-3: #612d00;
          --simple-colors-default-theme-accent-4: #833d00;
          --simple-colors-default-theme-accent-5: #ae5100;
          --simple-colors-default-theme-accent-6: #e56a00;
          --simple-colors-default-theme-accent-7: #ff9625;
          --simple-colors-default-theme-accent-8: #ff9e36;
          --simple-colors-default-theme-accent-9: #ffb05c;
          --simple-colors-default-theme-accent-10: #ffbd75;
          --simple-colors-default-theme-accent-11: #ffca92;
          --simple-colors-default-theme-accent-12: #ffebd7;
        }

        :host([accent-color="deep-orange"]),
        :host [accent-color="deep-orange"] {
          --simple-colors-default-theme-accent-1: #ffe7e0;
          --simple-colors-default-theme-accent-2: #ffb299;
          --simple-colors-default-theme-accent-3: #ffa588;
          --simple-colors-default-theme-accent-4: #ff8a64;
          --simple-colors-default-theme-accent-5: #ff7649;
          --simple-colors-default-theme-accent-6: #ff6c3c;
          --simple-colors-default-theme-accent-7: #f53100;
          --simple-colors-default-theme-accent-8: #b92500;
          --simple-colors-default-theme-accent-9: #8a1c00;
          --simple-colors-default-theme-accent-10: #561100;
          --simple-colors-default-theme-accent-11: #3a0c00;
          --simple-colors-default-theme-accent-12: #240700;
          --simple-colors-default-theme-fixed-1: #ffe7e0;
          --simple-colors-default-theme-fixed-2: #ffb299;
          --simple-colors-default-theme-fixed-3: #ffa588;
          --simple-colors-default-theme-fixed-4: #ff8a64;
          --simple-colors-default-theme-fixed-5: #ff7649;
          --simple-colors-default-theme-fixed-6: #ff6c3c;
          --simple-colors-default-theme-fixed-7: #f53100;
          --simple-colors-default-theme-fixed-8: #b92500;
          --simple-colors-default-theme-fixed-9: #8a1c00;
          --simple-colors-default-theme-fixed-10: #561100;
          --simple-colors-default-theme-fixed-11: #3a0c00;
          --simple-colors-default-theme-fixed-12: #240700;
        }

        :host([dark][accent-color="deep-orange"]),
        :host([dark]) [accent-color="deep-orange"],
        :host([accent-color="deep-orange"]) [dark],
        :host [dark][accent-color="deep-orange"] {
          --simple-colors-default-theme-accent-1: #240700;
          --simple-colors-default-theme-accent-2: #3a0c00;
          --simple-colors-default-theme-accent-3: #561100;
          --simple-colors-default-theme-accent-4: #8a1c00;
          --simple-colors-default-theme-accent-5: #b92500;
          --simple-colors-default-theme-accent-6: #f53100;
          --simple-colors-default-theme-accent-7: #ff6c3c;
          --simple-colors-default-theme-accent-8: #ff7649;
          --simple-colors-default-theme-accent-9: #ff8a64;
          --simple-colors-default-theme-accent-10: #ffa588;
          --simple-colors-default-theme-accent-11: #ffb299;
          --simple-colors-default-theme-accent-12: #ffe7e0;
        }

        :host([accent-color="brown"]),
        :host [accent-color="brown"] {
          --simple-colors-default-theme-accent-1: #f0e2de;
          --simple-colors-default-theme-accent-2: #e5b8aa;
          --simple-colors-default-theme-accent-3: #c59485;
          --simple-colors-default-theme-accent-4: #b68373;
          --simple-colors-default-theme-accent-5: #ac7868;
          --simple-colors-default-theme-accent-6: #a47060;
          --simple-colors-default-theme-accent-7: #85574a;
          --simple-colors-default-theme-accent-8: #724539;
          --simple-colors-default-theme-accent-9: #5b3328;
          --simple-colors-default-theme-accent-10: #3b1e15;
          --simple-colors-default-theme-accent-11: #2c140e;
          --simple-colors-default-theme-accent-12: #200e09;
          --simple-colors-default-theme-fixed-1: #f0e2de;
          --simple-colors-default-theme-fixed-2: #e5b8aa;
          --simple-colors-default-theme-fixed-3: #c59485;
          --simple-colors-default-theme-fixed-4: #b68373;
          --simple-colors-default-theme-fixed-5: #ac7868;
          --simple-colors-default-theme-fixed-6: #a47060;
          --simple-colors-default-theme-fixed-7: #85574a;
          --simple-colors-default-theme-fixed-8: #724539;
          --simple-colors-default-theme-fixed-9: #5b3328;
          --simple-colors-default-theme-fixed-10: #3b1e15;
          --simple-colors-default-theme-fixed-11: #2c140e;
          --simple-colors-default-theme-fixed-12: #200e09;
        }

        :host([dark][accent-color="brown"]),
        :host([dark]) [accent-color="brown"],
        :host([accent-color="brown"]) [dark],
        :host [dark][accent-color="brown"] {
          --simple-colors-default-theme-accent-1: #200e09;
          --simple-colors-default-theme-accent-2: #2c140e;
          --simple-colors-default-theme-accent-3: #3b1e15;
          --simple-colors-default-theme-accent-4: #5b3328;
          --simple-colors-default-theme-accent-5: #724539;
          --simple-colors-default-theme-accent-6: #85574a;
          --simple-colors-default-theme-accent-7: #a47060;
          --simple-colors-default-theme-accent-8: #ac7868;
          --simple-colors-default-theme-accent-9: #b68373;
          --simple-colors-default-theme-accent-10: #c59485;
          --simple-colors-default-theme-accent-11: #e5b8aa;
          --simple-colors-default-theme-accent-12: #f0e2de;
        }

        :host([accent-color="blue-grey"]),
        :host [accent-color="blue-grey"] {
          --simple-colors-default-theme-accent-1: #e7eff1;
          --simple-colors-default-theme-accent-2: #b1c5ce;
          --simple-colors-default-theme-accent-3: #9badb6;
          --simple-colors-default-theme-accent-4: #8d9fa7;
          --simple-colors-default-theme-accent-5: #7a8f98;
          --simple-colors-default-theme-accent-6: #718892;
          --simple-colors-default-theme-accent-7: #56707c;
          --simple-colors-default-theme-accent-8: #40535b;
          --simple-colors-default-theme-accent-9: #2f3e45;
          --simple-colors-default-theme-accent-10: #1e282c;
          --simple-colors-default-theme-accent-11: #182023;
          --simple-colors-default-theme-accent-12: #0f1518;
          --simple-colors-default-theme-fixed-1: #e7eff1;
          --simple-colors-default-theme-fixed-2: #b1c5ce;
          --simple-colors-default-theme-fixed-3: #9badb6;
          --simple-colors-default-theme-fixed-4: #8d9fa7;
          --simple-colors-default-theme-fixed-5: #7a8f98;
          --simple-colors-default-theme-fixed-6: #718892;
          --simple-colors-default-theme-fixed-7: #56707c;
          --simple-colors-default-theme-fixed-8: #40535b;
          --simple-colors-default-theme-fixed-9: #2f3e45;
          --simple-colors-default-theme-fixed-10: #1e282c;
          --simple-colors-default-theme-fixed-11: #182023;
          --simple-colors-default-theme-fixed-12: #0f1518;
        }

        :host([dark][accent-color="blue-grey"]),
        :host([dark]) [accent-color="blue-grey"],
        :host([accent-color="blue-grey"]) [dark],
        :host [dark][accent-color="blue-grey"] {
          --simple-colors-default-theme-accent-1: #0f1518;
          --simple-colors-default-theme-accent-2: #182023;
          --simple-colors-default-theme-accent-3: #1e282c;
          --simple-colors-default-theme-accent-4: #2f3e45;
          --simple-colors-default-theme-accent-5: #40535b;
          --simple-colors-default-theme-accent-6: #56707c;
          --simple-colors-default-theme-accent-7: #718892;
          --simple-colors-default-theme-accent-8: #7a8f98;
          --simple-colors-default-theme-accent-9: #8d9fa7;
          --simple-colors-default-theme-accent-10: #9badb6;
          --simple-colors-default-theme-accent-11: #b1c5ce;
          --simple-colors-default-theme-accent-12: #e7eff1;
        }
      </style>
      <slot></slot>
    `;
  }

  // haxProperty definition
  static get haxProperties() {
    return {};
  }
  // properties available to the custom element for data binding
  static get properties() {
    let props = {
      /**
       * a selected accent-"color": grey, red, pink, purple, etc.
       */
      accentColor: {
        name: "accentColor",
        type: String,
        value: "grey",
        reflectToAttribute: true,
        notify: true
      },
      /**
       * make the default theme dark?
       */
      dark: {
        name: "dark",
        type: Boolean,
        value: false,
        reflectToAttribute: true,
        notify: true
      },
      /**
       * The colors object.
       * Each color contains an array of shades as hex codes from lightest to darkest.
       */
      colors: {
        name: "colors",
        type: Object,
        value: {
          grey: [
            "#ffffff",
            "#eeeeee",
            "#dddddd",
            "#cccccc",
            "#bbbbbb",
            "#999999",
            "#666666",
            "#444444",
            "#333333",
            "#222222",
            "#111111",
            "#000000"
          ],
          red: [
            "#ffdddd",
            "#ffaeae",
            "#ff8f8f",
            "#ff7474",
            "#fd5151",
            "#ff2222",
            "#ee0000",
            "#ac0000",
            "#850000",
            "#670000",
            "#520000",
            "#3f0000"
          ],
          pink: [
            "#ffe6f1",
            "#ffa5cf",
            "#ff87c0",
            "#ff73b5",
            "#fd60aa",
            "#ff3996",
            "#da004e",
            "#b80042",
            "#980036",
            "#78002b",
            "#5a0020",
            "#440019"
          ],
          purple: [
            "#fce6ff",
            "#f4affd",
            "#f394ff",
            "#f07cff",
            "#ed61ff",
            "#e200ff",
            "#a500ba",
            "#8a009b",
            "#6c0079",
            "#490052",
            "#33003a",
            "#200025"
          ],
          "deep-purple": [
            "#f3e4ff",
            "#ddacff",
            "#c97eff",
            "#bb63f9",
            "#b44aff",
            "#a931ff",
            "#7e00d8",
            "#5d009f",
            "#4c0081",
            "#3a0063",
            "#2a0049",
            "#1d0033"
          ],
          indigo: [
            "#e5ddff",
            "#c3b2ff",
            "#af97ff",
            "#9e82ff",
            "#9373ff",
            "#835fff",
            "#3a00ff",
            "#2801b0",
            "#20008c",
            "#160063",
            "#100049",
            "#0a0030"
          ],
          blue: [
            "#e2ecff",
            "#acc9ff",
            "#95baff",
            "#74a5ff",
            "#5892fd",
            "#4083ff",
            "#0059ff",
            "#0041bb",
            "#003494",
            "#002569",
            "#001947",
            "#001333"
          ],
          "light-blue": [
            "#ddefff",
            "#a1d1ff",
            "#92c9ff",
            "#65b3ff",
            "#58adff",
            "#41a1ff",
            "#007ffc",
            "#0066ca",
            "#0055a8",
            "#003f7d",
            "#002850",
            "#001b36"
          ],
          cyan: [
            "#ddf8ff",
            "#9beaff",
            "#77e2ff",
            "#33d4ff",
            "#1ccfff",
            "#00c9ff",
            "#009dc7",
            "#007999",
            "#005970",
            "#003f50",
            "#002c38",
            "#001a20"
          ],
          teal: [
            "#d9fff0",
            "#98ffd7",
            "#79ffcb",
            "#56ffbd",
            "#29ffac",
            "#00ff9c",
            "#009d75",
            "#007658",
            "#004e3a",
            "#003829",
            "#002a20",
            "#001b14"
          ],
          green: [
            "#e1ffeb",
            "#acffc9",
            "#79ffa7",
            "#49ff88",
            "#24ff70",
            "#00f961",
            "#008c37",
            "#00762e",
            "#005a23",
            "#003d18",
            "#002a11",
            "#001d0c"
          ],
          "light-green": [
            "#ebffdb",
            "#c7ff9b",
            "#b1ff75",
            "#a1fd5a",
            "#8efd38",
            "#6fff00",
            "#429d00",
            "#357f00",
            "#296100",
            "#1b3f00",
            "#143000",
            "#0d2000"
          ],
          lime: [
            "#f1ffd2",
            "#dfff9b",
            "#d4ff77",
            "#caff58",
            "#bdff2d",
            "#aeff00",
            "#649900",
            "#4d7600",
            "#3b5a00",
            "#293f00",
            "#223400",
            "#182400"
          ],
          yellow: [
            "#ffffd5",
            "#ffffac",
            "#ffff90",
            "#ffff7c",
            "#ffff3a",
            "#f6f600",
            "#929100",
            "#787700",
            "#585700",
            "#454400",
            "#303000",
            "#242400"
          ],
          amber: [
            "#fff2d4",
            "#ffdf92",
            "#ffd677",
            "#ffcf5e",
            "#ffc235",
            "#ffc500",
            "#b28900",
            "#876800",
            "#614b00",
            "#413200",
            "#302500",
            "#221a00"
          ],
          orange: [
            "#ffebd7",
            "#ffca92",
            "#ffbd75",
            "#ffb05c",
            "#ff9e36",
            "#ff9625",
            "#e56a00",
            "#ae5100",
            "#833d00",
            "#612d00",
            "#3d1c00",
            "#2c1400"
          ],
          "deep-orange": [
            "#ffe7e0",
            "#ffb299",
            "#ffa588",
            "#ff8a64",
            "#ff7649",
            "#ff6c3c",
            "#f53100",
            "#b92500",
            "#8a1c00",
            "#561100",
            "#3a0c00",
            "#240700"
          ],
          brown: [
            "#f0e2de",
            "#e5b8aa",
            "#c59485",
            "#b68373",
            "#ac7868",
            "#a47060",
            "#85574a",
            "#724539",
            "#5b3328",
            "#3b1e15",
            "#2c140e",
            "#200e09"
          ],
          "blue-grey": [
            "#e7eff1",
            "#b1c5ce",
            "#9badb6",
            "#8d9fa7",
            "#7a8f98",
            "#718892",
            "#56707c",
            "#40535b",
            "#2f3e45",
            "#1e282c",
            "#182023",
            "#0f1518"
          ]
        },
        readOnly: true
      },
      /**
   * Object with information on which color combinations are WCAG 2.0AA compliant, eg: ```
    {
      "greyColor": {          //if either the color or its contrast will be a grey
        "aaLarge": [          //if bold text >= 14pt, text >= 18pt, decorative only, or disabled
          {                 //for the first shade of a color
            "min": 7,         //index of the lightest contrasting shade of another color
            "max": 12         //index of the darkest contrasting shade of another color
          },
          ...
        ],
        "aa": [ ... ]         //if bold text < 14pt, or text < 18pt
      },
      "colorColor": { ... }   //if neither the color nor its contrast are grey
    }```
  */
      contrasts: {
        name: "contrasts",
        type: Object,
        value: {
          greyColor: {
            aaLarge: [
              { min: 7, max: 12 },
              { min: 7, max: 12 },
              { min: 7, max: 12 },
              { min: 7, max: 12 },
              { min: 8, max: 12 },
              { min: 10, max: 12 },
              { min: 1, max: 3 },
              { min: 1, max: 5 },
              { min: 1, max: 6 },
              { min: 1, max: 6 },
              { min: 1, max: 6 },
              { min: 1, max: 6 }
            ],
            aa: [
              //if bold text < 14pt, or text < 18pt
              { min: 7, max: 12 },
              { min: 7, max: 12 },
              { min: 7, max: 12 },
              { min: 8, max: 12 },
              { min: 8, max: 12 },
              { min: 11, max: 12 },
              { min: 1, max: 2 },
              { min: 1, max: 7 },
              { min: 1, max: 7 },
              { min: 1, max: 6 },
              { min: 1, max: 6 },
              { min: 1, max: 6 }
            ]
          },
          colorColor: {
            //if neither the color nor its contrast are grey
            aaLarge: [
              { min: 7, max: 12 },
              { min: 7, max: 12 },
              { min: 8, max: 12 },
              { min: 9, max: 12 },
              { min: 10, max: 12 },
              { min: 11, max: 12 },
              { min: 1, max: 2 },
              { min: 1, max: 3 },
              { min: 1, max: 4 },
              { min: 1, max: 5 },
              { min: 1, max: 6 },
              { min: 1, max: 6 }
            ],
            aa: [
              { min: 8, max: 12 },
              { min: 8, max: 12 },
              { min: 9, max: 12 },
              { min: 9, max: 12 },
              { min: 11, max: 12 },
              { min: 12, max: 12 },
              { min: 1, max: 1 },
              { min: 1, max: 2 },
              { min: 1, max: 4 },
              { min: 1, max: 4 },
              { min: 1, max: 5 },
              { min: 1, max: 5 }
            ]
          }
        },
        readOnly: true
      }
    };
    if (super.properties) {
      props = Object.assign(props, super.properties);
    }
    return props;
  }

  static get tag() {
    return "simple-colors";
  }

  /**
   * returns the maximum contrast to the shade
   *
   * @param {string} the shade
   * @param {number} the shade with maximum contrast
   */
  maxContrastShade(shade) {
    return parseInt(shade) < this.colors["grey"].length / 2 + 1
      ? this.colors["grey"].length
      : 1;
  }

  /**
   * gets the current shade
   *
   * @param {string} the shade
   * @param {number} the inverted shade
   */

  invertShade(shade) {
    return this.colors["grey"].length + 1 - parseInt(shade);
  }

  /**
   * gets the color information of a given CSS variable or class
   *
   * @param {string} the CSS variable (eg. `--simple-colors-fixed-theme-red-3`)
   * @param {object} an object that includes the theme, color, and shade information
   */
  getColorInfo(colorName) {
    let temp1 = colorName
        .replace(/(simple-colors-)?(-text)?(-border)?/g, "")
        .split("-theme-"),
      theme = temp1.length > 0 ? temp1[0] : "default",
      temp2 = temp1.length > 0 ? temp1[1].split("-") : temp1[0].split("-"),
      color =
        temp2.length > 1 ? temp2.slice(1, temp2.length - 1).join("-") : "grey",
      shade = temp2.length > 1 ? temp2[temp2.length - 1] : "1";
    return {
      theme: theme,
      color: color,
      shade: shade
    };
  }

  /**
   * returns a variable based on color name, shade, and fixed theme
   *
   * @param {string} the color name
   * @param {number} the color shade
   * @param {boolean} the color shade
   * @returns {string} the CSS Variable
   */
  makeVariable(color = "grey", shade = 1, theme = "default") {
    return ["--simple-colors", theme, "theme", color, shade].join("-");
  }

  /**
   * for large or small text given a color and its shade,
   * lists all the colors and shades that would be
   * WCAG 2.0 AA-compliant for contrast
   *
   * @param {boolean} large text? >= 18pt || (bold && >= 14pt)
   * @param {string} color name, e.g. "deep-purple"
   * @param {string} color shade, e.g. 3
   * @param {object} all of the WCAG 2.0 AA-compliant colors and shades
   */
  getContrastingColors(colorName, colorShade, isLarge) {
    let result = {};
    Object.keys(this.colors).forEach(color => {
      result[color] = this.getContrastingShades(
        isLarge,
        colorName,
        colorShade,
        color
      );
    });
    return result.color;
  }

  /**
   * for large or small text given a color and its shade,
   * lists all the shades of another color that would be
   * WCAG 2.0 AA-compliant for contrast
   *
   * @param {boolean} large text? >= 18pt || (bold && >= 14pt)
   * @param {string} color name, e.g. "deep-purple"
   * @param {string} color shade, e.g. 3
   * @param {string} contrasting color name, e.g. "grey"
   * @param {array} all of the WCAG 2.0 AA-compliant shades of the contrasting color
   */
  getContrastingShades(isLarge, colorName, colorShade, contrastName) {
    let hasGrey =
        colorName === "grey" || contrastName === "grey"
          ? "greyColor"
          : "colorColor",
      aa = isLarge ? "aaLarge" : "aa",
      index = parseInt(colorShade) + 1,
      range = this.contrasts[hasGrey][aa][index];
    return Array(range.max - range.min + 1)
      .fill()
      .map((_, idx) => range.min + idx);
  }
  /**
   * determines if two shades are WCAG 2.0 AA-compliant for contrast
   *
   * @param {boolean} large text? >= 18pt || (bold && >= 14pt)
   * @param {string} color name, e.g. "deep-purple"
   * @param {string} color shade, e.g. 3
   * @param {string} contrasting color name, e.g. "grey"
   * @param {string} contrast shade, e.g. 12
   * @param {boolean} whether or not the contrasting shade is WCAG 2.0 AA-compliant
   */
  isContrastCompliant(
    isLarge,
    colorName,
    colorShade,
    contrastName,
    contrastShade
  ) {
    let hasGrey =
        colorName === "grey" || contrastName === "grey"
          ? "greyColor"
          : "colorColor",
      aa = isLarge ? "aaLarge" : "aa",
      index = parseInt(colorShade) + 1,
      range = this.contrasts[hasGrey][aa][index];
    return contrastShade >= range.min && ontrastShade >= range.max;
  }

  /**
   * gets the current shade based on the index
   *
   * @param {string} the index
   * @param {number} the shade
   */
  indexToShade(index) {
    return parseInt(index) + 1;
  }

  /**
   * gets the current shade based on the index
   *
   * @param {string} the shade
   * @param {number} the index
   */
  shadeToIndex(shade) {
    return parseInt(shade) - 1;
  }

  /**
   * inverts the current index
   *
   * @param {string} the index
   * @param {number} the inverted index
   */
  invertIndex(index) {
    return this.colors["grey"].length - 1 - parseInt(index);
  }

  /**
   * returns the maximum contrast to the index
   *
   * @param {string} the index
   * @param {number} the index with maximum contrast
   */
  maxContrastIndex(index) {
    return parseInt(index) < this.colors["grey"].length / 2
      ? this.colors["grey"].length - 1
      : 0;
  }
}
customElements.define(SimpleColors.tag, SimpleColors);
export { SimpleColors };

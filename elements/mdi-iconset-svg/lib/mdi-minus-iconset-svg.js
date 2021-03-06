/**
 * Material design: [Icons](https://material.io/guidelines/style/icons.html)
 * `mdi-minus-iconset-svg`
 * @element mdi-minus-iconset-svg is a iconset for the Material Design Icons collection with the "minus" tag
 *
 * Example:
 *   <simple-icon icon="mdi-minus:minus-circle-outline"></simple-icon>
 *
 * @demo demo/index.html
 */
import "@polymer/iron-icon/iron-icon.js";
import "@polymer/iron-iconset-svg/iron-iconset-svg.js";

import { html } from "@polymer/polymer/lib/utils/html-tag.js";

const template = html`
  <iron-iconset-svg name="mdi-minus" size="24">
    <svg>
      <g id="minus"><path d="M19,13H5V11H19V13Z"></path></g>

      <g id="minus-box">
        <path
          d="M17,13H7V11H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z"
        ></path>
      </g>

      <g id="minus-circle">
        <path
          d="M17,13H7V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
        ></path>
      </g>

      <g id="minus-circle-outline">
        <path
          d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7,13H17V11H7"
        ></path>
      </g>
    </svg>
  </iron-iconset-svg>
`;

document.head.appendChild(template.content);

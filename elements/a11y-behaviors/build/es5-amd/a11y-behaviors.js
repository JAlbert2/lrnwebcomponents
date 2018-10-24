window.A11yBehaviors = window.A11yBehaviors || {};
window.A11yBehaviors.A11y = {
  getTextContrastColor: function getTextContrastColor(bgColor) {
    var color = "",
      colorBuffer = bgColor.replace("#", ""),
      rgb = parseInt(colorBuffer, 16);
    if (
      141 >
      0.2126 * (255 & (rgb >> 16)) +
        0.7152 * (255 & (rgb >> 8)) +
        0.0722 * (255 & (rgb >> 0))
    ) {
      color = "#ffffff";
    } else {
      color = "#000000";
    }
    return color;
  },
  computeTextPropContrast: function computeTextPropContrast(textprop, bgprop) {
    if (this[bgprop].includes("#")) {
      var color = this.getTextContrastColor(this[bgprop]);
      this.set(textprop, color);
    }
  }
};

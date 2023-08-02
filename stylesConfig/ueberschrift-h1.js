const { cx } = require("@bsi-cx/design-build");

module.exports = cx.h.style(
  "h1-1-text-color",
  "Headerbild-Titelfarbe",
  cx.h.cssClass("h1--black", "default"),
  cx.h.cssClass("h1--petrol", "schwarz"),
  cx.h.cssClass("h1--senfgelb", "primary"),
  cx.h.cssClass("h1--coral", "secondary")
);

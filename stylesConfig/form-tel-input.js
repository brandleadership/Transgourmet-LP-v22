const { cx } = require("@bsi-cx/design-build");

module.exports = cx.h.style(
  "element-width",
  "Elementbreite",
  cx.h.cssClass("element-with-unset", "Nicht gesetzt"),
  cx.h.cssClass("element-width-full", "Volle Breite"),
  cx.h.cssClass("element-width-left-right", "Label links, Feld rechts")
);

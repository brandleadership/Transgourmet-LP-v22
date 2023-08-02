const { cx } = require("@bsi-cx/design-build");

module.exports = cx.h.style(
  "flag-option-list",
  "Mit Platzhalter",
  cx.h.cssClass(
    "flag-option-list-first-item-is-not-placeholder",
    "Ohne Platzhalter"
  ),
  cx.h.cssClass(
    "flag-option-list-first-item-is-placeholder",
    "Erster Eintrag ist Platzhalter"
  )
);

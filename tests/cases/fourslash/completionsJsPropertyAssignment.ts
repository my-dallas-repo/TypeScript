/// <reference path="fourslash.ts" />

// @allowJs: true
// @allowTs: true

// @Filename: /a.js
/////** @type {{ p: "x" | "y" }} */
////const x = { p: "x"  };
////x.p = "/**/";

verify.completionsAt("", ["x", "y"]);

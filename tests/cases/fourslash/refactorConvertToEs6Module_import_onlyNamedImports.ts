/// <reference path='fourslash.ts' />

// @allowJs: true
// @allowTs: true

// @Filename: /a.js
////const x = /*a*/require/*b*/("x");
////x.y;

goTo.select("a", "b");
edit.applyRefactor({
    refactorName: "Convert to ES6 module",
    actionName: "Convert to ES6 module",
    actionDescription: "Convert to ES6 module",
    newContent: `import { y } from "x";
y;`,
});

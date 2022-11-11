"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _styles = require("@mui/material/styles");
/*!

=========================================================
* Vision UI Free React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-react/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
var _default = (0, _styles.styled)("div")(_ref => {
  let {
    theme,
    ownerState
  } = _ref;
  const {
    palette,
    functions
  } = theme;
  const {
    size
  } = ownerState;
  const {
    dark
  } = palette;
  const {
    pxToRem
  } = functions;
  return {
    lineHeight: 0,
    padding: size === "small" ? `${pxToRem(4)} ${pxToRem(10)}` : `${pxToRem(8)} ${pxToRem(10)}`,
    width: pxToRem(39),
    height: "100%",
    color: dark.main
  };
});
exports.default = _default;
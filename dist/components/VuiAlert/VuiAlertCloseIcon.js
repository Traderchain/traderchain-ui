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
// @mui material components
var _default = (0, _styles.styled)("span")(_ref => {
  let {
    theme
  } = _ref;
  const {
    palette,
    typography,
    functions,
    transitions
  } = theme;
  const {
    white
  } = palette;
  const {
    size,
    fontWeightMedium
  } = typography;
  const {
    pxToRem
  } = functions;
  return {
    color: white.main,
    fontSize: size.xl,
    padding: `${pxToRem(9)} ${pxToRem(6)} ${pxToRem(8)}`,
    marginLeft: pxToRem(40),
    fontWeight: fontWeightMedium,
    opacity: 0.5,
    cursor: "pointer",
    lineHeight: 0,
    transition: transitions.create("opacity", {
      easing: transitions.easing.easeInOut,
      duration: transitions.duration.shorter
    }),
    "&:hover": {
      opacity: 1
    }
  };
});
exports.default = _default;
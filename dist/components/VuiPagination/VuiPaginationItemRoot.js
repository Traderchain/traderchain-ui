"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _styles = require("@mui/material/styles");
var _VuiButton = _interopRequireDefault(require("../VuiButton"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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
// Vision UI Dashboard React components
var _default = (0, _styles.styled)(_VuiButton.default)(_ref => {
  let {
    theme,
    ownerState
  } = _ref;
  const {
    borders,
    functions,
    typography,
    palette
  } = theme;
  const {
    variant,
    paginationSize,
    active
  } = ownerState;
  const {
    borderColor
  } = borders;
  const {
    pxToRem
  } = functions;
  const {
    fontWeightRegular,
    size: fontSize
  } = typography;
  const {
    light
  } = palette;

  // width, height, minWidth and minHeight values
  let sizeValue = pxToRem(36);
  if (paginationSize === "small") {
    sizeValue = pxToRem(30);
  } else if (paginationSize === "large") {
    sizeValue = pxToRem(46);
  }
  return {
    borderColor,
    margin: `0 ${pxToRem(2)}`,
    pointerEvents: active ? "none" : "auto",
    fontWeight: fontWeightRegular,
    fontSize: fontSize.sm,
    width: sizeValue,
    minWidth: sizeValue,
    height: sizeValue,
    minHeight: sizeValue,
    "&:hover, &:focus, &:active": {
      transform: "none",
      boxShadow: (variant !== "gradient" || variant !== "contained") && "none !important",
      opacity: "1 !important"
    },
    "&:hover": {
      backgroundColor: light.main,
      borderColor
    }
  };
});
exports.default = _default;
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
    functions,
    borders
  } = theme;
  const {
    error,
    success,
    disabled
  } = ownerState;
  const {
    inputColors,
    grey,
    white
  } = palette;
  const {
    pxToRem
  } = functions;
  const {
    borderRadius,
    borderWidth
  } = borders;

  // border color value
  let borderColorValue = inputColors.borderColor.main;
  if (error) {
    borderColorValue = inputColors.error;
  } else if (success) {
    borderColorValue = inputColors.success;
  }
  return {
    display: "flex",
    alignItems: "center",
    backgroundColor: disabled ? grey[600] : inputColors.backgroundColor,
    border: `${borderWidth[1]} solid`,
    borderRadius: borderRadius.lg,
    borderColor: borderColorValue,
    "& .MuiIcon-root": {
      color: grey[500]
    },
    "& .MuiInputBase-input": {
      color: white.main,
      height: "100%",
      paddingX: pxToRem(20),
      backgroundColor: disabled ? grey[600] : inputColors.backgroundColor
    },
    "& .MuiInputBase-root": {
      border: `unset`,
      borderRadius: borderRadius.lg,
      borderTopLeftRadius: "0px",
      borderBottomLeftRadius: "0px",
      backgroundColor: `${disabled ? grey[600] : inputColors.backgroundColor} !important`,
      "& ::placeholder": {
        color: `${white.main} !important`
      }
    }
  };
});
exports.default = _default;
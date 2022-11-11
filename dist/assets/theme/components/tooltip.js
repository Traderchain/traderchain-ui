"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Fade = _interopRequireDefault(require("@mui/material/Fade"));
var _colors = _interopRequireDefault(require("../base/colors"));
var _typography = _interopRequireDefault(require("../base/typography"));
var _borders = _interopRequireDefault(require("../base/borders"));
var _pxToRem = _interopRequireDefault(require("../functions/pxToRem"));
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

// Vision UI Dashboard React base styles

// Vision UI Dashboard React helper functions

const {
  black,
  light
} = _colors.default;
const {
  size,
  fontWeightRegular
} = _typography.default;
const {
  borderRadius
} = _borders.default;
var _default = {
  defaultProps: {
    arrow: true,
    TransitionComponent: _Fade.default
  },
  styleOverrides: {
    tooltip: {
      maxWidth: (0, _pxToRem.default)(200),
      backgroundColor: black.main,
      color: light.main,
      fontSize: size.sm,
      fontWeight: fontWeightRegular,
      textAlign: "center",
      borderRadius: borderRadius.md,
      opacity: 0.7,
      padding: `${(0, _pxToRem.default)(5)} ${(0, _pxToRem.default)(8)} ${(0, _pxToRem.default)(4)}`
    },
    arrow: {
      color: black.main
    }
  }
};
exports.default = _default;
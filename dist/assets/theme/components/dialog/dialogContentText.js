"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typography = _interopRequireDefault(require("../../base/typography"));
var _colors = _interopRequireDefault(require("../../base/colors"));
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

// Vision UI Dashboard React base styles

// Vision UI Dashboard React helper functions
// import pxToRem from "assets/theme/functions/pxToRem";

const {
  size,
  color,
  fontWeightLight,
  fontWeightRegular,
  fontWeightMedium,
  fontWeightBold
} = _typography.default;
const {
  white,
  text,
  info,
  secondary
} = _colors.default;
var _default = {
  styleOverrides: {
    root: {
      fontSize: size.regular,
      color: white.main
    }
  }
};
exports.default = _default;
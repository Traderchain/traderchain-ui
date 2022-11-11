"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _colors = _interopRequireDefault(require("../../base/colors"));
var _typography = _interopRequireDefault(require("../../base/typography"));
var _pxToRem = _interopRequireDefault(require("../../functions/pxToRem"));
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

const {
  dark
} = _colors.default;
const {
  size,
  fontWeightBold
} = _typography.default;
var _default = {
  styleOverrides: {
    root: {
      display: "block",
      minHeight: (0, _pxToRem.default)(24),
      marginBottom: (0, _pxToRem.default)(2)
    },
    label: {
      display: "inline-block",
      fontSize: size.sm,
      fontWeight: fontWeightBold,
      color: dark.main,
      lineHeight: 1,
      transform: `translateY(${(0, _pxToRem.default)(1)})`,
      marginLeft: (0, _pxToRem.default)(4),
      "&.Mui-disabled": {
        color: dark.main
      }
    }
  }
};
exports.default = _default;
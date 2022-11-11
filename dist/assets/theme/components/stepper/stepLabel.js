"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typography = _interopRequireDefault(require("../../base/typography"));
var _colors = _interopRequireDefault(require("../../base/colors"));
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
  size,
  fontWeightRegular
} = _typography.default;
const {
  grey,
  dark,
  text
} = _colors.default;
var _default = {
  styleOverrides: {
    label: {
      marginTop: `${(0, _pxToRem.default)(8)} !important`,
      fontWeight: fontWeightRegular,
      fontSize: size.md,
      color: grey[300],
      "&.Mui-active": {
        fontWeight: `${fontWeightRegular} !important`,
        color: `${dark.main} !important`
      },
      "&.Mui-completed": {
        fontWeight: `${fontWeightRegular} !important`,
        color: `${text.main} !important`
      }
    }
  }
};
exports.default = _default;
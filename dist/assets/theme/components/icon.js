"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
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
// Vision UI Dashboard React helper functions
var _default = {
  defaultProps: {
    baseClassName: "material-icons-round",
    fontSize: "inherit"
  },
  styleOverrides: {
    fontSizeInherit: {
      fontSize: "inherit !important"
    },
    fontSizeSmall: {
      fontSize: `${(0, _pxToRem.default)(20)} !important`
    },
    fontSizeLarge: {
      fontSize: `${(0, _pxToRem.default)(36)} !important`
    }
  }
};
exports.default = _default;
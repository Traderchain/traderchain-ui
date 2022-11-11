"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _borders = _interopRequireDefault(require("../../base/borders"));
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

// Vision UI Dashboard React Base Styles

// Vision UI Dashboard React Helper Functions

const {
  borderRadius
} = _borders.default;
var _default = {
  styleOverrides: {
    root: {
      borderRadius: borderRadius.xl,
      margin: `${(0, _pxToRem.default)(16)} ${(0, _pxToRem.default)(16)} 0`
    },
    media: {
      width: "auto"
    }
  }
};
exports.default = _default;
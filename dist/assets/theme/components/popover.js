"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _pxToRem = _interopRequireDefault(require("../functions/pxToRem"));
var _colors = _interopRequireDefault(require("../base/colors"));
var _boxShadows = _interopRequireDefault(require("../base/boxShadows"));
var _borders = _interopRequireDefault(require("../base/borders"));
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

// Vision UI Dashboard React base styles

const {
  transparent
} = _colors.default;
const {
  lg
} = _boxShadows.default;
const {
  borderRadius
} = _borders.default;
var _default = {
  styleOverrides: {
    paper: {
      backgroundColor: transparent.main,
      boxShadow: lg,
      padding: (0, _pxToRem.default)(8),
      borderRadius: borderRadius.lg
    }
  }
};
exports.default = _default;
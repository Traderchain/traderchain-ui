"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _borders = _interopRequireDefault(require("../../base/borders"));
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
  borderWidth
} = _borders.default;
const {
  light
} = _colors.default;
var _default = {
  styleOverrides: {
    root: {
      backgroundColor: `${light.main} !important`,
      padding: `${(0, _pxToRem.default)(12)} ${(0, _pxToRem.default)(16)}`,
      "& .MuiBox-root": {
        pl: "0px !important"
      },
      borderBottom: `${borderWidth[1]} solid ${light.main}`
    }
  }
};
exports.default = _default;
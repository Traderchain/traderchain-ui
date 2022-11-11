"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _colors = _interopRequireDefault(require("../../base/colors"));
var _borders = _interopRequireDefault(require("../../base/borders"));
var _pxToRem = _interopRequireDefault(require("../../functions/pxToRem"));
var _boxShadow = _interopRequireDefault(require("../../functions/boxShadow"));
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
  dark,
  white
} = _colors.default;
const {
  borderWidth,
  borderColor
} = _borders.default;
var _default = {
  styleOverrides: {
    root: {
      background: white.main,
      fill: white.main,
      stroke: white.main,
      strokeWidth: (0, _pxToRem.default)(10),
      width: (0, _pxToRem.default)(13),
      height: (0, _pxToRem.default)(13),
      border: `${borderWidth[2]} solid ${borderColor}`,
      borderRadius: "50%",
      zIndex: 99,
      transition: "all 200ms linear",
      "&.Mui-active": {
        background: dark.main,
        fill: dark.main,
        stroke: dark.main,
        borderColor: dark.main,
        boxShadow: (0, _boxShadow.default)([0, 0], [0, 2], dark.main, 1)
      },
      "&.Mui-completed": {
        background: dark.main,
        fill: dark.main,
        stroke: dark.main,
        borderColor: dark.main,
        boxShadow: (0, _boxShadow.default)([0, 0], [0, 2], dark.main, 1)
      }
    }
  }
};
exports.default = _default;
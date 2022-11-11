"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _colors = _interopRequireDefault(require("../base/colors"));
var _borders = _interopRequireDefault(require("../base/borders"));
var _rgba = _interopRequireDefault(require("../functions/rgba"));
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

// Vision UI Dashboard React base styles

// Vision UI Dashboard React helper functions

const {
  white
} = _colors.default;
const {
  borderRadius
} = _borders.default;
var _default = {
  styleOverrides: {
    root: {
      width: (0, _pxToRem.default)(250),
      whiteSpace: "nowrap",
      border: "none"
    },
    paper: {
      width: (0, _pxToRem.default)(250),
      backgroundColor: (0, _rgba.default)(white.main, 0.8),
      backdropFilter: `saturate(200%) blur(${(0, _pxToRem.default)(30)})`,
      height: `calc(100vh - ${(0, _pxToRem.default)(32)})`,
      margin: (0, _pxToRem.default)(16),
      borderRadius: borderRadius.xl,
      border: "none"
    },
    paperAnchorDockedLeft: {
      borderRight: "none"
    }
  }
};
exports.default = _default;
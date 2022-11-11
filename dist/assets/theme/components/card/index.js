"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _colors = _interopRequireDefault(require("../../base/colors"));
var _linearGradient = _interopRequireDefault(require("../../functions/linearGradient"));
var _borders = _interopRequireDefault(require("../../base/borders"));
var _boxShadows = _interopRequireDefault(require("../../base/boxShadows"));
var _rgba = _interopRequireDefault(require("../../functions/rgba"));
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

// Vision UI Dashboard React Helper Function

const {
  black,
  gradients
} = _colors.default;
const {
  card
} = gradients;
const {
  borderWidth,
  borderRadius
} = _borders.default;
const {
  xxl
} = _boxShadows.default;
var _default = {
  styleOverrides: {
    root: {
      display: "flex",
      flexDirection: "column",
      background: (0, _linearGradient.default)(card.main, card.state, card.deg),
      backdropFilter: "blur(120px)",
      position: "relative",
      minWidth: 0,
      padding: "22px",
      wordWrap: "break-word",
      backgroundClip: "border-box",
      border: `${borderWidth[0]} solid ${(0, _rgba.default)(black.main, 0.125)}`,
      borderRadius: borderRadius.xl,
      boxShadow: xxl
    }
  }
};
exports.default = _default;
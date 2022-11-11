"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typography = _interopRequireDefault(require("../../base/typography"));
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
  fontWeightBold,
  size
} = _typography.default;
const {
  borderRadius
} = _borders.default;
var _default = {
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: size.xs,
  fontWeight: fontWeightBold,
  borderRadius: borderRadius.button,
  padding: `${(0, _pxToRem.default)(12)} ${(0, _pxToRem.default)(24)}`,
  lineHeight: 1.4,
  textAlign: "center",
  textTransform: "unset",
  userSelect: "none",
  backgroundSize: "150% !important",
  backgroundPositionX: "25% !important",
  transition: `all 150ms ease-in`,
  "&:hover": {
    transform: "scale(1.02)"
  },
  "&:disabled": {
    pointerEvent: "none",
    opacity: 0.65
  },
  "& .material-icons": {
    fontSize: (0, _pxToRem.default)(15),
    marginTop: (0, _pxToRem.default)(-2)
  }
};
exports.default = _default;
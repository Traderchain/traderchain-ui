"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _colors = _interopRequireDefault(require("../../base/colors"));
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

// Vision UI Dashboard  helper functions

const {
  dark,
  white,
  grey,
  inputColors
} = _colors.default;
const {
  size,
  fontWeightRegular
} = _typography.default;
const {
  borderWidth,
  borderRadius
} = _borders.default;
var _default = {
  styleOverrides: {
    root: {
      display: "grid !important",
      placeItems: "center !important",
      width: "100% !important",
      height: "auto !important",
      padding: `${(0, _pxToRem.default)(8)} ${(0, _pxToRem.default)(12)}`,
      fontSize: `${size.sm} !important`,
      fontWeight: `${fontWeightRegular} !important`,
      lineHeight: "1.4 !important",
      color: `${grey[700]} !important`,
      backgroundColor: `${white.main} !important`,
      backgroundClip: "padding-box !important",
      border: `${borderWidth[1]} solid ${inputColors.borderColor.main}`,
      appearance: "none !important",
      borderRadius: borderRadius.md,
      transition: "box-shadow 150ms ease, border-color 150ms ease, padding 150ms ease !important"
    },
    input: {
      width: "100% !important",
      height: `${(0, _pxToRem.default)(22)}`,
      padding: "0 !important",
      "&::-webkit-input-placeholder": {
        color: `${dark.main} !important`
      }
    }
  }
};
exports.default = _default;
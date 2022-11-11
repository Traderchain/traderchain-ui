"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _colors = _interopRequireDefault(require("../base/colors"));
var _borders = _interopRequireDefault(require("../base/borders"));
var _boxShadows = _interopRequireDefault(require("../base/boxShadows"));
var _linearGradient = _interopRequireDefault(require("../functions/linearGradient"));
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
  light,
  white,
  sliderColors,
  black,
  gradients
} = _colors.default;
const {
  borderRadius,
  borderWidth
} = _borders.default;
const {
  sliderBoxShadow
} = _boxShadows.default;
var _default = {
  styleOverrides: {
    root: {
      width: "100%",
      "& .MuiSlider-active, & .Mui-focusVisible": {
        boxShadow: "none !important"
      },
      "& .MuiSlider-valueLabel": {
        color: black.main
      }
    },
    rail: {
      height: (0, _pxToRem.default)(3),
      backgroundColor: light.main,
      borderRadius: borderRadius.sm
    },
    track: {
      backgroundImage: (0, _linearGradient.default)(gradients.info.main, gradients.info.state),
      height: (0, _pxToRem.default)(6),
      position: "relative",
      top: (0, _pxToRem.default)(2),
      border: "none",
      borderRadius: borderRadius.lg,
      zIndex: 1
    },
    thumb: {
      width: (0, _pxToRem.default)(15),
      height: (0, _pxToRem.default)(15),
      backgroundColor: white.main,
      zIndex: 10,
      boxShadow: sliderBoxShadow.thumb,
      border: `${borderWidth[1]} solid ${sliderColors.thumb.borderColor}`,
      "&:hover": {
        boxShadow: "none"
      }
    }
  }
};
exports.default = _default;
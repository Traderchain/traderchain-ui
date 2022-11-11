"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _borders = _interopRequireDefault(require("../../base/borders"));
var _colors = _interopRequireDefault(require("../../base/colors"));
var _pxToRem = _interopRequireDefault(require("../../functions/pxToRem"));
var _linearGradient = _interopRequireDefault(require("../../functions/linearGradient"));
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
  borderWidth,
  borderColor
} = _borders.default;
const {
  transparent,
  gradients,
  info
} = _colors.default;
var _default = {
  styleOverrides: {
    root: {
      backgroundPosition: "center",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      width: (0, _pxToRem.default)(20),
      height: (0, _pxToRem.default)(20),
      marginRight: (0, _pxToRem.default)(6),
      padding: 0,
      color: transparent.main,
      border: `${borderWidth[1]} solid ${borderColor}`,
      borderRadius: (0, _pxToRem.default)(5.6),
      transition: "all 250ms ease",
      "&:hover": {
        backgroundColor: transparent.main
      },
      "& .MuiSvgIcon-root": {
        fill: transparent.main
      },
      "&.Mui-focusVisible": {
        border: `${borderWidth[2]} solid ${info.main} !important`
      }
    },
    colorPrimary: {
      backgroundColor: transparent.main,
      "&.Mui-checked": {
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 -1 22 22'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2.5' d='M6 10l3 3l6-6'/%3e%3c/svg%3e"), ${(0, _linearGradient.default)(gradients.dark.main, gradients.dark.state)}`,
        borderColor: gradients.dark.main
      },
      "&:hover": {
        backgroundColor: transparent.main
      }
    },
    colorSecondary: {
      backgroundColor: transparent.main,
      "&.Mui-checked": {
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 -1 22 22'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2.5' d='M6 10l3 3l6-6'/%3e%3c/svg%3e"), ${(0, _linearGradient.default)(gradients.dark.main, gradients.dark.state)}`,
        borderColor: gradients.dark.main
      },
      "&:hover": {
        backgroundColor: transparent.main
      }
    }
  }
};
exports.default = _default;
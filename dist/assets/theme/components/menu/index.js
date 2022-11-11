"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _boxShadows = _interopRequireDefault(require("../../base/boxShadows"));
var _typography = _interopRequireDefault(require("../../base/typography"));
var _colors = _interopRequireDefault(require("../../base/colors"));
var _borders = _interopRequireDefault(require("../../base/borders"));
var _linearGradient = _interopRequireDefault(require("../../functions/linearGradient"));
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
  lg
} = _boxShadows.default;
const {
  size
} = _typography.default;
const {
  white,
  borderCol,
  gradients,
  transparent
} = _colors.default;
const {
  borderRadius
} = _borders.default;
var _default = {
  defaultProps: {
    disableAutoFocusItem: true
  },
  styleOverrides: {
    "& .MuiIcon-root": {
      stroke: white.main
    },
    paper: {
      minWidth: (0, _pxToRem.default)(160),
      boxShadow: lg,
      padding: `0 !important`,
      fontSize: size.sm,
      color: white.main,
      textAlign: "left",
      border: `${borderWidth[1]} solid ${borderCol.navbar}`,
      borderRadius: borderRadius.md
    },
    list: {
      background: (0, _linearGradient.default)(gradients.menu.main, gradients.menu.state, gradients.menu.deg),
      "& .MuiMenuItem-root": {
        "& .MuiBox-root .MuiTypography-root": {
          color: white.main
        },
        "&:hover": {
          background: transparent.main
        }
      }
    }
  }
};
exports.default = _default;
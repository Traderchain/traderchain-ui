"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _boxShadows = _interopRequireDefault(require("../../base/boxShadows"));
var _typography = _interopRequireDefault(require("../../base/typography"));
var _colors = _interopRequireDefault(require("../../base/colors"));
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

// Vision UI Dashboard React base styles

// Vision UI Dashboard React helper functions

const {
  lg
} = _boxShadows.default;
const {
  size
} = _typography.default;
const {
  text,
  white,
  transparent,
  light,
  dark,
  gradients
} = _colors.default;
const {
  borderRadius
} = _borders.default;
var _default = {
  styleOverrides: {
    popper: {
      boxShadow: lg,
      padding: (0, _pxToRem.default)(8),
      fontSize: size.sm,
      color: text.main,
      textAlign: "left",
      backgroundColor: `${white.main} !important`,
      borderRadius: borderRadius.md
    },
    paper: {
      boxShadow: "none",
      backgroundColor: transparent.main
    },
    option: {
      padding: `${(0, _pxToRem.default)(4.8)} ${(0, _pxToRem.default)(16)}`,
      borderRadius: borderRadius.md,
      fontSize: size.sm,
      color: text.main,
      transition: "background-color 300ms ease, color 300ms ease",
      "&:hover, &:focus, &.Mui-selected, &.Mui-selected:hover, &.Mui-selected:focus": {
        backgroundColor: light.main,
        color: dark.main
      },
      '&[aria-selected="true"]': {
        backgroundColor: `${light.main} !important`,
        color: `${dark.main} !important`
      }
    },
    noOptions: {
      fontSize: size.sm,
      color: text.main
    },
    groupLabel: {
      color: dark.main
    },
    loading: {
      fontSize: size.sm,
      color: text.main
    },
    tag: {
      display: "flex",
      alignItems: "center",
      height: "auto",
      padding: (0, _pxToRem.default)(4),
      backgroundColor: gradients.dark.state,
      color: white.main,
      "& .MuiChip-label": {
        lineHeight: 1.2,
        padding: `0 ${(0, _pxToRem.default)(10)} 0 ${(0, _pxToRem.default)(4)}`
      },
      "& .MuiSvgIcon-root, & .MuiSvgIcon-root:hover, & .MuiSvgIcon-root:focus": {
        color: white.main,
        marginRight: 0
      }
    }
  }
};
exports.default = _default;
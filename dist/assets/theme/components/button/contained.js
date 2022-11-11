"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _colors = _interopRequireDefault(require("../../base/colors"));
var _typography = _interopRequireDefault(require("../../base/typography"));
var _boxShadows = _interopRequireDefault(require("../../base/boxShadows"));
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
  white,
  text,
  info,
  secondary
} = _colors.default;
const {
  size
} = _typography.default;
const {
  buttonBoxShadow
} = _boxShadows.default;
var _default = {
  base: {
    backgroundColor: white.main,
    minHeight: (0, _pxToRem.default)(40),
    color: text.main,
    boxShadow: buttonBoxShadow.main,
    padding: `${(0, _pxToRem.default)(12)} ${(0, _pxToRem.default)(24)}`,
    "&:hover": {
      backgroundColor: white.main,
      boxShadow: buttonBoxShadow.stateOf
    },
    "&:focus": {
      boxShadow: buttonBoxShadow.stateOf
    },
    "&:active, &:active:focus, &:active:hover": {
      opacity: 0.85,
      boxShadow: buttonBoxShadow.stateOf
    },
    "&:disabled": {
      boxShadow: buttonBoxShadow.main
    },
    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${(0, _pxToRem.default)(16)} !important`
    }
  },
  small: {
    minHeight: (0, _pxToRem.default)(32),
    padding: `${(0, _pxToRem.default)(8)} ${(0, _pxToRem.default)(32)}`,
    fontSize: size.xs,
    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${(0, _pxToRem.default)(12)} !important`
    }
  },
  large: {
    minHeight: (0, _pxToRem.default)(47),
    padding: `${(0, _pxToRem.default)(14)} ${(0, _pxToRem.default)(64)}`,
    fontSize: size.sm,
    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${(0, _pxToRem.default)(22)} !important`
    }
  },
  primary: {
    backgroundColor: info.main,
    "&:hover": {
      backgroundColor: info.main
    },
    "&:focus:not(:hover)": {
      backgroundColor: info.focus,
      boxShadow: buttonBoxShadow.stateOfNotHover
    }
  },
  secondary: {
    backgroundColor: secondary.main,
    "&:hover": {
      backgroundColor: secondary.main
    },
    "&:focus:not(:hover)": {
      backgroundColor: secondary.focus,
      boxShadow: buttonBoxShadow.stateOfNotHover
    }
  }
};
exports.default = _default;
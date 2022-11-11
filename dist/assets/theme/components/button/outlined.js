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
  transparent,
  light,
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
    minHeight: (0, _pxToRem.default)(42),
    color: light.main,
    borderColor: light.main,
    padding: `${(0, _pxToRem.default)(12)} ${(0, _pxToRem.default)(24)}`,
    "&:hover": {
      opacity: 0.75,
      backgroundColor: transparent.main
    },
    "&:focus:not(:hover)": {
      boxShadow: buttonBoxShadow.stateOfNotHover
    },
    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${(0, _pxToRem.default)(16)} !important`
    }
  },
  small: {
    minHeight: (0, _pxToRem.default)(34),
    padding: `${(0, _pxToRem.default)(8)} ${(0, _pxToRem.default)(32)}`,
    fontSize: size.xs,
    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${(0, _pxToRem.default)(12)} !important`
    }
  },
  large: {
    minHeight: (0, _pxToRem.default)(49),
    padding: `${(0, _pxToRem.default)(14)} ${(0, _pxToRem.default)(64)}`,
    fontSize: size.sm,
    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${(0, _pxToRem.default)(22)} !important`
    }
  },
  primary: {
    backgroundColor: transparent.main,
    borderColor: info.main,
    "&:hover": {
      backgroundColor: transparent.main
    },
    "&:focus:not(:hover)": {
      boxShadow: buttonBoxShadow.stateOfNotHover
    }
  },
  secondary: {
    backgroundColor: transparent.main,
    borderColor: secondary.main,
    "&:hover": {
      backgroundColor: transparent.main
    },
    "&:focus:not(:hover)": {
      boxShadow: buttonBoxShadow.stateOfNotHover
    }
  }
};
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _colors = _interopRequireDefault(require("../../base/colors"));
var _typography = _interopRequireDefault(require("../../base/typography"));
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
  primary,
  grey,
  text
} = _colors.default;
const {
  size
} = _typography.default;
var _default = {
  base: {
    backgroundColor: transparent.main,
    height: "max-content",
    color: text.main,
    boxShadow: "none",
    padding: `${(0, _pxToRem.default)(6)} ${(0, _pxToRem.default)(12)}`,
    "&:hover": {
      backgroundColor: transparent.main,
      boxShadow: "none",
      color: text.focus
    },
    "&:focus": {
      boxShadow: "none",
      color: text.focus
    },
    "&:active, &:active:focus, &:active:hover": {
      opacity: 0.85,
      boxShadow: "none"
    },
    "&:disabled": {
      color: grey[600],
      boxShadow: "none"
    },
    "& .material-icons, .material-icons-round, svg, span": {
      fontSize: `${(0, _pxToRem.default)(16)} !important`
    }
  },
  small: {
    fontSize: size.xs,
    "& .material-icons, .material-icons-round, svg, span": {
      fontSize: `${(0, _pxToRem.default)(12)} !important`
    }
  },
  large: {
    fontSize: size.sm,
    "& .material-icons, .material-icons-round, svg, span": {
      fontSize: `${(0, _pxToRem.default)(22)} !important`
    }
  },
  primary: {
    color: primary.main,
    backgroundColor: transparent.main,
    "&:hover": {
      color: primary.focus,
      backgroundColor: transparent.main
    },
    "&:focus:not(:hover)": {
      color: primary.focus,
      backgroundColor: transparent.focus,
      boxShadow: "none"
    }
  },
  secondary: {
    color: text.secondary,
    backgroundColor: transparent.main,
    "&:hover": {
      color: text.secondary,
      backgroundColor: transparent.main
    },
    "&:focus:not(:hover)": {
      color: text.secondary,
      backgroundColor: transparent.focus,
      boxShadow: "none"
    }
  }
};
exports.default = _default;
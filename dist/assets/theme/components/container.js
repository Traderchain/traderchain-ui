"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _breakpoints = _interopRequireDefault(require("../base/breakpoints"));
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
  values: {
    sm,
    md,
    lg,
    xl,
    xxl
  }
} = _breakpoints.default;
const SM = `@media (min-width: ${sm}px)`;
const MD = `@media (min-width: ${md}px)`;
const LG = `@media (min-width: ${lg}px)`;
const XL = `@media (min-width: ${xl}px)`;
const XXL = `@media (min-width: ${xxl}px)`;
const sharedClasses = {
  paddingRight: `${(0, _pxToRem.default)(24)} !important`,
  paddingLeft: `${(0, _pxToRem.default)(24)} !important`,
  marginRight: "auto !important",
  marginLeft: "auto !important",
  width: "100% !important",
  position: "relative"
};
var _default = {
  [SM]: {
    ".MuiContainer-root": {
      ...sharedClasses,
      maxWidth: "540px !important"
    }
  },
  [MD]: {
    ".MuiContainer-root": {
      ...sharedClasses,
      maxWidth: "720px !important"
    }
  },
  [LG]: {
    ".MuiContainer-root": {
      ...sharedClasses,
      maxWidth: "960px !important"
    }
  },
  [XL]: {
    ".MuiContainer-root": {
      ...sharedClasses,
      maxWidth: "1140px !important"
    }
  },
  [XXL]: {
    ".MuiContainer-root": {
      ...sharedClasses,
      maxWidth: "1320px !important"
    }
  }
};
exports.default = _default;
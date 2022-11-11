"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _root = _interopRequireDefault(require("./root"));
var _contained = _interopRequireDefault(require("./contained"));
var _outlined = _interopRequireDefault(require("./outlined"));
var _text = _interopRequireDefault(require("./text"));
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
// Vision UI Dashboard React Button Styles
var _default = {
  defaultProps: {
    disableRipple: true
  },
  styleOverrides: {
    root: {
      ..._root.default
    },
    contained: {
      ..._contained.default.base
    },
    containedSizeSmall: {
      ..._contained.default.small
    },
    containedSizeLarge: {
      ..._contained.default.large
    },
    containedPrimary: {
      ..._contained.default.primary
    },
    containedSecondary: {
      ..._contained.default.secondary
    },
    outlined: {
      ..._outlined.default.base
    },
    outlinedSizeSmall: {
      ..._outlined.default.small
    },
    outlinedSizeLarge: {
      ..._outlined.default.large
    },
    outlinedPrimary: {
      ..._outlined.default.primary
    },
    outlinedSecondary: {
      ..._outlined.default.secondary
    },
    text: {
      ..._text.default.base
    },
    textSizeSmall: {
      ..._text.default.small
    },
    textSizeLarge: {
      ..._text.default.large
    },
    textPrimary: {
      ..._text.default.primary
    },
    textSecondary: {
      ..._text.default.secondary
    }
  }
};
exports.default = _default;
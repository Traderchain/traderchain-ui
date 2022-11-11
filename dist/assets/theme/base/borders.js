"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _colors = _interopRequireDefault(require("./colors"));
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

/**
 * The base border styles for the Vision UI Dashboard  Material.
 * You can add new border width, border color or border radius using this file.
 * You can customized the borders value for the entire Vision UI Dashboard  Material using thie file.
 */

// Vision UI Dashboard React Base Styles

// Vision UI Dashboard React Helper Functions

const {
  borderCol
} = _colors.default;
var _default = {
  borderColor: {
    grey: {
      borderCol
    },
    white: "rgba(226, 232, 240, 0.3)"
  },
  borderWidth: {
    0: 0,
    1: (0, _pxToRem.default)(1),
    2: (0, _pxToRem.default)(2),
    3: (0, _pxToRem.default)(3),
    4: (0, _pxToRem.default)(4),
    5: (0, _pxToRem.default)(5)
  },
  borderRadius: {
    xs: (0, _pxToRem.default)(2),
    sm: (0, _pxToRem.default)(4),
    md: (0, _pxToRem.default)(8),
    button: (0, _pxToRem.default)(12),
    lg: (0, _pxToRem.default)(15),
    xl: (0, _pxToRem.default)(20),
    xxl: (0, _pxToRem.default)(24),
    form: (0, _pxToRem.default)(24),
    section: (0, _pxToRem.default)(160)
  }
};
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _borders = _interopRequireDefault(require("../../base/borders"));
var _colors = _interopRequireDefault(require("../../base/colors"));
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

const {
  dark
} = _colors.default;
const {
  borderWidth,
  borderColor
} = _borders.default;
var _default = {
  styleOverrides: {
    root: {
      color: borderColor,
      transition: "all 200ms linear",
      "&.Mui-active": {
        color: dark.main
      },
      "&.Mui-completed": {
        color: dark.main
      }
    },
    alternativeLabel: {
      top: "14%",
      left: "-50%",
      right: "50%"
    },
    line: {
      borderWidth: `${borderWidth[2]} !important`,
      borderColor: "currentColor"
    }
  }
};
exports.default = _default;
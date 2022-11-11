"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
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
  grey,
  info
} = _colors.default;
const {
  borderRadius
} = _borders.default;
var _default = {
  styleOverrides: {
    root: {
      position: "relative",
      backgroundColor: grey[100],
      borderRadius: borderRadius.md,
      minHeight: "unset",
      padding: (0, _pxToRem.default)(4)
    },
    flexContainer: {
      height: "100%",
      position: "relative",
      zIndex: 10
    },
    fixed: {
      overflow: "unset !important",
      overflowX: "unset !important"
    },
    vertical: {
      "& .MuiTabs-indicator": {
        width: "100%"
      }
    },
    indicator: {
      height: "100%",
      borderRadius: borderRadius.lg,
      backgroundColor: info.main,
      transition: "all 500ms ease"
    }
  }
};
exports.default = _default;
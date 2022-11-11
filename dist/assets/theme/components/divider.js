"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _colors = _interopRequireDefault(require("../base/colors"));
var _rgba = _interopRequireDefault(require("../functions/rgba"));
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
  dark,
  transparent,
  white,
  info
} = _colors.default;
var _default = {
  styleOverrides: {
    root: {
      backgroundColor: transparent.main,
      backgroundImage: `linear-gradient(to right, ${(0, _rgba.default)(dark.main, 0)}, ${(0, _rgba.default)(dark.main, 0.5)}, ${(0, _rgba.default)(dark.main, 0)}) !important`,
      height: (0, _pxToRem.default)(1),
      margin: `${(0, _pxToRem.default)(16)} 0`,
      borderBottom: "none",
      opacity: 0.25
    },
    vertical: {
      backgroundColor: transparent.main,
      backgroundImage: `linear-gradient(to bottom, ${(0, _rgba.default)(dark.main, 0)}, ${(0, _rgba.default)(dark.main, 0.5)}, ${(0, _rgba.default)(dark.main, 0)}) !important`,
      width: (0, _pxToRem.default)(1),
      height: "100%",
      margin: `0 ${(0, _pxToRem.default)(16)}`,
      borderRight: "none"
    },
    light: {
      backgroundColor: transparent.main,
      backgroundImage: `linear-gradient(to right, ${(0, _rgba.default)(info.main, 0)}, ${(0, _rgba.default)(white.main, 1)}, ${(0, _rgba.default)(white.main, 0)}) !important`,
      "&.MuiDivider-vertical": {
        backgroundImage: `linear-gradient(to bottom, ${(0, _rgba.default)(white.main, 0)}, ${(0, _rgba.default)(white.main, 0.5)}, ${(0, _rgba.default)(white.main, 0)}) !important`
      }
    }
  }
};
exports.default = _default;
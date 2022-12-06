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

// Vision UI Dashboard React Base Styles

// Vision UI Dashboard  helper functions

const {
  inputColors
} = _colors.default;
const {
  borderWidth,
  borderRadius
} = _borders.default;
var _default = {
  styleOverrides: {
    root: {
      display: "flex !important",
      padding: `${(0, _pxToRem.default)(8)} ${(0, _pxToRem.default)(28)} ${(0, _pxToRem.default)(8)} ${(0, _pxToRem.default)(12)} !important`,
      border: `${borderWidth[1]} solid ${inputColors.borderColor.main}`,
      borderRadius: `${borderRadius.md} !important`,
      backgroundColor: `#0f1535!important`,
      color: "#ffffff!important",
      "& fieldset": {
        border: "none"
      }
    },
    input: {
      height: (0, _pxToRem.default)(22)
      // width: "max-content !important",      
    },

    inputSizeSmall: {
      height: (0, _pxToRem.default)(14)
    }
  }
};
exports.default = _default;
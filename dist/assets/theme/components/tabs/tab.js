"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typography = _interopRequireDefault(require("../../base/typography"));
var _borders = _interopRequireDefault(require("../../base/borders"));
var _colors = _interopRequireDefault(require("../../base/colors"));
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
  size,
  fontWeightRegular
} = _typography.default;
const {
  borderRadius
} = _borders.default;
const {
  white
} = _colors.default;
var _default = {
  styleOverrides: {
    root: {
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
      textAlign: "center",
      maxWidth: "unset !important",
      minWidth: "150px",
      minHeight: "35px",
      fontSize: size.xs,
      fontWeight: fontWeightRegular,
      textTransform: "none",
      lineHeight: "inherit",
      padding: `${(0, _pxToRem.default)(10)} !important`,
      borderRadius: borderRadius.md,
      color: `${white.main} !important`,
      opacity: "1 !important",
      "& .material-icons, .material-icons-round": {
        marginBottom: "0 !important",
        marginRight: (0, _pxToRem.default)(4)
      },
      "& svg": {
        marginBottom: "0 !important",
        color: `#fff !important`,
        marginRight: (0, _pxToRem.default)(6)
      }
    },
    labelIcon: {
      paddingTop: (0, _pxToRem.default)(4)
    }
  }
};
exports.default = _default;
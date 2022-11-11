"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Icon = _interopRequireDefault(require("@mui/material/Icon"));
var _styles = require("@mui/material/styles");
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
var _default = (0, _styles.styled)(_Icon.default)(_ref => {
  let {
    theme,
    ownerState
  } = _ref;
  const {
    typography
  } = theme;
  const {
    size
  } = ownerState;
  const {
    fontWeightBold,
    size: fontSize
  } = typography;
  return {
    fontWeight: fontWeightBold,
    fontSize: size === "small" && `${fontSize.md} !important`
  };
});
exports.default = _default;
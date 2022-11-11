"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _styles = require("@mui/material/styles");
var _LinearProgress = _interopRequireDefault(require("@mui/material/LinearProgress"));
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
// @mui material components
var _default = (0, _styles.styled)(_LinearProgress.default)(_ref => {
  let {
    theme,
    ownerState
  } = _ref;
  const {
    palette,
    functions
  } = theme;
  const {
    color,
    value,
    variant
  } = ownerState;
  const {
    text,
    gradients
  } = palette;
  const {
    linearGradient
  } = functions;

  // background value
  let backgroundValue;
  if (variant === "gradient") {
    backgroundValue = gradients[color] ? linearGradient(gradients[color].main, gradients[color].state) : linearGradient(gradients.info.main, gradients.info.state);
  } else {
    backgroundValue = palette[color] ? palette[color].main : palette.info.main;
  }
  return {
    "& .MuiLinearProgress-bar": {
      background: backgroundValue,
      width: `${value}%`,
      color: text.main
    }
  };
});
exports.default = _default;
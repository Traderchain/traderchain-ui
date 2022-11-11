"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
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
// @mui material components
var _default = (0, _styles.styled)(_Typography.default)(_ref => {
  let {
    theme,
    ownerState
  } = _ref;
  const {
    palette,
    typography,
    functions
  } = theme;
  const {
    color,
    textTransform,
    verticalAlign,
    fontWeight,
    opacity,
    textGradient
  } = ownerState;
  const {
    gradients,
    transparent
  } = palette;
  const {
    fontWeightLight,
    fontWeightRegular,
    fontWeightMedium,
    fontWeightBold
  } = typography;
  const {
    linearGradient
  } = functions;

  // fontWeight styles
  const fontWeights = {
    light: fontWeightLight,
    regular: fontWeightRegular,
    medium: fontWeightMedium,
    bold: fontWeightBold
  };

  // styles for the typography with textGradient={true}
  const gradientStyles = () => ({
    backgroundImage: color !== "inherit" && color !== "text" && color !== "white" && gradients[color] ? linearGradient(gradients[color].main, gradients[color].state, gradients[color].deg) : linearGradient(gradients.primary.main, gradients.primary.state),
    display: "inline-block",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: transparent.main,
    position: "relative",
    zIndex: 1
  });
  return {
    opacity,
    textTransform,
    verticalAlign,
    textDecoration: "none",
    color: color === "inherit" || !palette[color] ? "inherit" : palette[color].main,
    fontWeight: fontWeights[fontWeight] && fontWeights[fontWeight],
    ...(textGradient && gradientStyles())
  };
});
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _VuiTypographyRoot = _interopRequireDefault(require("./VuiTypographyRoot"));
var _jsxRuntime = require("react/jsx-runtime");
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

// prop-types is a library for typechecking of props

// Custom styles for VuiTypography

const VuiTypography = /*#__PURE__*/(0, _react.forwardRef)((_ref, ref) => {
  let {
    color,
    fontWeight,
    textTransform,
    verticalAlign,
    fontSize,
    textGradient,
    opacity,
    children,
    ...rest
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypographyRoot.default, {
    ...rest,
    ref: ref,
    ownerState: {
      color,
      textTransform,
      verticalAlign,
      fontSize,
      fontWeight,
      opacity,
      textGradient
    },
    children: children
  });
});

// Setting default values for the props of VuiTypography
VuiTypography.defaultProps = {
  color: "dark",
  fontWeight: false,
  fontSize: "16px",
  textTransform: "none",
  verticalAlign: "unset",
  textGradient: false,
  opacity: 1
};

// Typechecking props for the VuiTypography
VuiTypography.propTypes = {
  color: _propTypes.default.oneOf(["inherit", "primary", "secondary", "info", "success", "warning", "error", "light", "dark", "text", "white", "logo"]),
  fontWeight: _propTypes.default.oneOf([false, "light", "regular", "medium", "bold"]),
  textTransform: _propTypes.default.oneOf(["none", "capitalize", "uppercase", "lowercase"]),
  verticalAlign: _propTypes.default.oneOf(["unset", "baseline", "sub", "super", "text-top", "text-bottom", "middle", "top", "bottom"]),
  textGradient: _propTypes.default.bool,
  children: _propTypes.default.node.isRequired,
  opacity: _propTypes.default.number
};
var _default = VuiTypography;
exports.default = _default;
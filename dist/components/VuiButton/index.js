"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _VuiButtonRoot = _interopRequireDefault(require("./VuiButtonRoot"));
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

// Custom styles for VuiButton

const VuiButton = /*#__PURE__*/(0, _react.forwardRef)((_ref, ref) => {
  let {
    color,
    variant,
    size,
    circular,
    iconOnly,
    children,
    ...rest
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiButtonRoot.default, {
    ...rest,
    ref: ref,
    color: "white",
    variant: variant === "gradient" ? "contained" : variant,
    size: size,
    ownerState: {
      color,
      variant,
      size,
      circular,
      iconOnly
    },
    children: children
  });
});

// Setting default values for the props of VuiButton
VuiButton.defaultProps = {
  size: "medium",
  variant: "contained",
  color: "white",
  circular: false,
  iconOnly: false
};

// Typechecking props for the VuiButton
VuiButton.propTypes = {
  size: _propTypes.default.oneOf(["small", "medium", "large"]),
  variant: _propTypes.default.oneOf(["text", "contained", "outlined", "gradient"]),
  color: _propTypes.default.oneOf(["white", "primary", "secondary", "info", "success", "warning", "error", "light", "dark", "text"]),
  circular: _propTypes.default.bool,
  iconOnly: _propTypes.default.bool,
  children: _propTypes.default.node.isRequired
};
var _default = VuiButton;
exports.default = _default;
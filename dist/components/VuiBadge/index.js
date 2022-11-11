"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _VuiBadgeRoot = _interopRequireDefault(require("./VuiBadgeRoot"));
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

// Custom styles for the VuiBadge

const VuiBadge = /*#__PURE__*/(0, _react.forwardRef)((_ref, ref) => {
  let {
    color,
    variant,
    size,
    circular,
    indicator,
    border,
    container,
    children,
    ...rest
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBadgeRoot.default, {
    ...rest,
    ownerState: {
      color,
      variant,
      size,
      circular,
      indicator,
      border,
      container,
      children
    },
    ref: ref,
    color: "default",
    children: children
  });
});

// Setting default values for the props of VuiBadge
VuiBadge.defaultProps = {
  color: "info",
  variant: "gradient",
  size: "sm",
  circular: false,
  indicator: false,
  border: false,
  children: false,
  container: false
};

// Typechecking props of the VuiBadge
VuiBadge.propTypes = {
  color: _propTypes.default.oneOf(["primary", "secondary", "info", "success", "warning", "error", "light", "dark"]),
  variant: _propTypes.default.oneOf(["gradient", "contained", "standard"]),
  size: _propTypes.default.oneOf(["xs", "sm", "md", "lg"]),
  circular: _propTypes.default.bool,
  indicator: _propTypes.default.bool,
  border: _propTypes.default.bool,
  children: _propTypes.default.node,
  container: _propTypes.default.bool
};
var _default = VuiBadge;
exports.default = _default;
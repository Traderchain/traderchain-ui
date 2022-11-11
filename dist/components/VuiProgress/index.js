"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _VuiTypography = _interopRequireDefault(require("../VuiTypography"));
var _VuiProgressRoot = _interopRequireDefault(require("./VuiProgressRoot"));
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

// Vision UI Dashboard React components

// Custom styles for VuiProgress

const VuiProgress = /*#__PURE__*/(0, _react.forwardRef)((_ref, ref) => {
  let {
    variant,
    color,
    value,
    label,
    ...rest
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [label && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiTypography.default, {
      variant: "button",
      fontWeight: "medium",
      color: "text",
      children: [value, "%"]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiProgressRoot.default, {
      ...rest,
      ref: ref,
      variant: "determinate",
      value: value,
      ownerState: {
        color,
        value,
        variant
      }
    })]
  });
});

// Setting default values for the props of VuiProgress
VuiProgress.defaultProps = {
  variant: "contained",
  color: "info",
  value: 0,
  label: false
};

// Typechecking props for the VuiProgress
VuiProgress.propTypes = {
  variant: _propTypes.default.oneOf(["contained", "gradient"]),
  color: _propTypes.default.oneOf(["primary", "secondary", "info", "success", "warning", "error", "light", "dark"]),
  value: _propTypes.default.number,
  label: _propTypes.default.bool
};
var _default = VuiProgress;
exports.default = _default;
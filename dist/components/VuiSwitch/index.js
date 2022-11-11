"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _VuiSwitchRoot = _interopRequireDefault(require("./VuiSwitchRoot"));
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

// Custom styles for VuiSwitch

const VuiSwitch = /*#__PURE__*/(0, _react.forwardRef)((_ref, ref) => {
  let {
    color,
    size,
    ...rest
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiSwitchRoot.default, {
    ...rest,
    ref: ref,
    color: "white",
    size: size,
    ownerState: {
      color,
      size
    }
  });
});

// Setting default values for the props of VuiSwitch
VuiSwitch.defaultProps = {
  size: "medium",
  color: "white"
};

// Typechecking props for the VuiSwitch
VuiSwitch.propTypes = {
  size: _propTypes.default.oneOf(["small", "medium", "large"]),
  color: _propTypes.default.oneOf(["white", "primary", "secondary", "info", "success", "warning", "error", "light", "dark"])
};
var _default = VuiSwitch;
exports.default = _default;
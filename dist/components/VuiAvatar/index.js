"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _VuiAvatarRoot = _interopRequireDefault(require("./VuiAvatarRoot"));
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

// Custom styles for VuiAvatar

const VuiAvatar = /*#__PURE__*/(0, _react.forwardRef)((_ref, ref) => {
  let {
    bgColor,
    size,
    shadow,
    ...rest
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiAvatarRoot.default, {
    ref: ref,
    ownerState: {
      shadow,
      bgColor,
      size
    },
    ...rest
  });
});

// Setting default values for the props of VuiAvatar
VuiAvatar.defaultProps = {
  bgColor: "transparent",
  size: "md",
  shadow: "none"
};

// Typechecking props for the VuiAvatar
VuiAvatar.propTypes = {
  bgColor: _propTypes.default.oneOf(["transparent", "primary", "secondary", "info", "success", "warning", "error", "light", "dark"]),
  size: _propTypes.default.oneOf(["xs", "sm", "md", "lg", "xl", "xxl"]),
  shadow: _propTypes.default.oneOf(["none", "xs", "sm", "md", "lg", "xl", "xxl", "inset"])
};
var _default = VuiAvatar;
exports.default = _default;
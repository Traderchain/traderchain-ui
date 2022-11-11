"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _VuiBoxRoot = _interopRequireDefault(require("./VuiBoxRoot"));
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

// Custom styles for VuiBox

const VuiBox = /*#__PURE__*/(0, _react.forwardRef)((_ref, ref) => {
  let {
    variant,
    bgColor,
    color,
    opacity,
    borderRadius,
    shadow,
    ...rest
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBoxRoot.default, {
    ...rest,
    ref: ref,
    ownerState: {
      variant,
      bgColor,
      color,
      opacity,
      borderRadius,
      shadow
    }
  });
});

// Setting default values for the props of VuiBox
VuiBox.defaultProps = {
  variant: "contained",
  bgColor: "transparent",
  color: "dark",
  opacity: 1,
  borderRadius: "none",
  shadow: "none"
};

// Typechecking props for the VuiBox
VuiBox.propTypes = {
  variant: _propTypes.default.oneOf(["contained", "gradient"]),
  bgColor: _propTypes.default.string,
  color: _propTypes.default.string,
  opacity: _propTypes.default.number,
  borderRadius: _propTypes.default.string,
  shadow: _propTypes.default.string
};
var _default = VuiBox;
exports.default = _default;
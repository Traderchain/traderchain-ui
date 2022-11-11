"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _VuiBox = _interopRequireDefault(require("../../components/VuiBox"));
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

// Vision UI Dashboard React components

// Vision UI Dashboard React context

function GradientBorder(props) {
  const {
    backgroundImage,
    children,
    borderRadius,
    width,
    minWidth,
    ...rest
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
    padding: "2px",
    width: width,
    minWidth: minWidth,
    height: "fit-content",
    borderRadius: borderRadius,
    sx: {
      height: "fit-content",
      backgroundImage: backgroundImage ? backgroundImage : "radial-gradient(94.43% 69.43% at 50% 50%, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)"
    },
    ...rest,
    children: children
  });
}
var _default = GradientBorder;
exports.default = _default;
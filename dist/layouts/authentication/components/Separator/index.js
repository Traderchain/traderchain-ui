"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Divider = _interopRequireDefault(require("@mui/material/Divider"));
var _VuiBox = _interopRequireDefault(require("../../../../components/VuiBox"));
var _VuiTypography = _interopRequireDefault(require("../../../../components/VuiTypography"));
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

// @mui material components

// Vision UI Dashboard React components

function Separator() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
    position: "relative",
    py: 0.25,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Divider.default, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
      bgColor: "white",
      position: "absolute",
      top: "50%",
      left: "50%",
      px: 1.5,
      lineHeight: 1,
      sx: {
        transform: "translate(-50%, -60%)"
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
        variant: "button",
        fontWeight: "medium",
        color: "text",
        children: "or"
      })
    })]
  });
}
var _default = Separator;
exports.default = _default;
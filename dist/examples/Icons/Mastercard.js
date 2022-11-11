"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
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

function Mastercard(_ref) {
  let {
    width,
    height
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", {
    width: width,
    height: height,
    viewBox: "0 0 21 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("circle", {
      cx: "6.63158",
      cy: "7.49999",
      r: "6.63158",
      fill: "#EB001B"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("circle", {
      cx: "14.3685",
      cy: "7.49999",
      r: "6.63158",
      fill: "#F79E1B"
    })]
  });
}

// Setting default values for the props of Mastercard
Mastercard.defaultProps = {
  color: "dark",
  size: "16px"
};

// Typechecking props for the Mastercard
Mastercard.propTypes = {
  size: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])
};
var _default = Mastercard;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _colors = _interopRequireDefault(require("../../assets/theme/base/colors"));
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

// Vision UI Dashboard React base styles

function Cart(_ref) {
  let {
    color,
    size
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
    width: size,
    height: size,
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      d: "M7.984 19.937a1.406 1.406 0 100-2.812 1.406 1.406 0 000 2.812zM17.828 19.937a1.406 1.406 0 100-2.812 1.406 1.406 0 000 2.812zM20.324 5.558a1.051 1.051 0 00-.815-.386H6.134l-.27-1.528a.703.703 0 00-.692-.581H2.359a.703.703 0 000 1.406h2.223L6.59 15.841a.703.703 0 00.692.581h11.25a.703.703 0 100-1.406H7.871l-.248-1.406h10.62a1.057 1.057 0 001.035-.848l1.266-6.328a1.055 1.055 0 00-.22-.876z",
      fill: _colors.default[color] ? _colors.default[color].main : _colors.default.dark.main
    })
  });
}

// Setting default values for the props of Cart
Cart.defaultProps = {
  color: "dark",
  size: "16px"
};

// Typechecking props for the Cart
Cart.propTypes = {
  color: _propTypes.default.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark", "light", "white"]),
  size: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])
};
var _default = Cart;
exports.default = _default;
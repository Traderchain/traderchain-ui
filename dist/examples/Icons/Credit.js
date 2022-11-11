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

function Credit(_ref) {
  let {
    color,
    size
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
    width: "23",
    height: "23",
    width: size,
    height: size,
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fill: _colors.default[color] ? _colors.default[color].main : _colors.default.dark.main,
      d: "M1.406 17.023a2.461 2.461 0 002.461 2.46h14.766a2.461 2.461 0 002.46-2.46v-6.768H1.407v6.768zm2.9-3.34a1.318 1.318 0 011.319-1.318h2.11a1.318 1.318 0 011.318 1.318v.879a1.318 1.318 0 01-1.319 1.318H5.625a1.318 1.318 0 01-1.318-1.318v-.879zM18.633 4.014H3.867a2.46 2.46 0 00-2.46 2.461v1.143h19.687V6.475a2.46 2.46 0 00-2.461-2.46z"
    })
  });
}

// Setting default values for the props of Credit
Credit.defaultProps = {
  color: "dark",
  size: "16px"
};

// Typechecking props for the Credit
Credit.propTypes = {
  color: _propTypes.default.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark", "light", "white"]),
  size: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])
};
var _default = Credit;
exports.default = _default;
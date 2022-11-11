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

function Document(_ref) {
  let {
    color,
    size
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", {
    width: size,
    height: size,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 12 12",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      d: "M18.809 10.344h-6.153a2.11 2.11 0 01-2.11-2.11V2.083a.176.176 0 00-.175-.176H6.328A2.812 2.812 0 003.516 4.72v14.063a2.812 2.812 0 002.812 2.812h9.844a2.812 2.812 0 002.812-2.813V10.52a.176.176 0 00-.175-.176z",
      fill: _colors.default[color] ? _colors.default[color].main : _colors.default.dark.main
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      d: "M18.423 8.789l-6.32-6.32a.088.088 0 00-.15.062v5.705a.703.703 0 00.703.703h5.705a.088.088 0 00.062-.15z",
      fill: _colors.default[color] ? _colors.default[color].main : _colors.default.dark.main
    })]
  });
}

// Setting default values for the props of Document
Document.defaultProps = {
  color: "dark",
  size: "16px"
};

// Typechecking props for the Document
Document.propTypes = {
  color: _propTypes.default.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark", "light", "white"]),
  size: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])
};
var _default = Document;
exports.default = _default;
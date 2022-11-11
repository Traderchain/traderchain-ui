"use strict";

var _react = _interopRequireDefault(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
var _reactRouterDom = require("react-router-dom");
var _App = _interopRequireDefault(require("./App"));
var _context = require("./context");
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

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the software.

*/

// Vision UI Dashboard React Context Provider

_reactDom.default.render( /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.BrowserRouter, {
  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_context.VisionUIControllerProvider, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_App.default, {})
  })
}), document.getElementById("root"));
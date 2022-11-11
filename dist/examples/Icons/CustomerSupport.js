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

function CustomerSupport(_ref) {
  let {
    color,
    size
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", {
    width: size,
    height: size,
    viewBox: "0 0 42 42",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("title", {
      children: "customer-support"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("g", {
      id: "Basic-Elements",
      stroke: "none",
      strokeWidth: "1",
      fill: "none",
      fillRule: "evenodd",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("g", {
        id: "Rounded-Icons",
        transform: "translate(-1717.000000, -291.000000)",
        fill: _colors.default[color] ? _colors.default[color].main : _colors.default.dark.main,
        fillRule: "nonzero",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("g", {
          id: "Icons-with-opacity",
          transform: "translate(1716.000000, 291.000000)",
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("g", {
            id: "customer-support",
            transform: "translate(1.000000, 0.000000)",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
              className: "color-background",
              d: "M45,0 L26,0 C25.447,0 25,0.447 25,1 L25,20 C25,20.379 25.214,20.725 25.553,20.895 C25.694,20.965 25.848,21 26,21 C26.212,21 26.424,20.933 26.6,20.8 L34.333,15 L45,15 C45.553,15 46,14.553 46,14 L46,1 C46,0.447 45.553,0 45,0 Z",
              id: "Path",
              opacity: "0.59858631"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
              d: "M22.883,32.86 C20.761,32.012 17.324,31 13,31 C8.676,31 5.239,32.012 3.116,32.86 C1.224,33.619 0,35.438 0,37.494 L0,41 C0,41.553 0.447,42 1,42 L25,42 C25.553,42 26,41.553 26,41 L26,37.494 C26,35.438 24.776,33.619 22.883,32.86 Z",
              id: "Path"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
              d: "M13,28 C17.432,28 21,22.529 21,18 C21,13.589 17.411,10 13,10 C8.589,10 5,13.589 5,18 C5,22.529 8.568,28 13,28 Z",
              id: "Path"
            })]
          })
        })
      })
    })]
  });
}

// Setting default values for the props of CustomerSupport
CustomerSupport.defaultProps = {
  color: "dark",
  size: "16px"
};

// Typechecking props for the CustomerSupport
CustomerSupport.propTypes = {
  color: _propTypes.default.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark", "light", "white"]),
  size: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])
};
var _default = CustomerSupport;
exports.default = _default;
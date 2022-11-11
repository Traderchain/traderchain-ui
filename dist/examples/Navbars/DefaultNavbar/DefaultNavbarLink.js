"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactRouterDom = require("react-router-dom");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Icon = _interopRequireDefault(require("@mui/material/Icon"));
var _VuiBox = _interopRequireDefault(require("../../../components/VuiBox"));
var _VuiTypography = _interopRequireDefault(require("../../../components/VuiTypography"));
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

// react-router-dom components

// prop-types is a library for typechecking of props

// @mui material components

// Vision UI Dashboard React components

function DefaultNavbarLink(_ref) {
  let {
    icon,
    name,
    route
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
      component: _reactRouterDom.Link,
      to: route,
      mx: 1,
      p: 1,
      display: "flex",
      alignItems: "center",
      sx: {
        cursor: "pointer",
        userSelect: "none"
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.default, {
        sx: {
          color: _ref2 => {
            let {
              palette: {
                white
              }
            } = _ref2;
            return white.main;
          },
          verticalAlign: "middle"
        },
        children: icon
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiTypography.default, {
        variant: "button",
        fontWeight: "regular",
        color: "white",
        textTransform: "capitalize",
        sx: {
          width: "100%",
          lineHeight: 0
        },
        children: ["\xA0", name]
      })]
    })
  });
}

// Typechecking props for the DefaultNavbarLink
DefaultNavbarLink.propTypes = {
  icon: _propTypes.default.string.isRequired,
  name: _propTypes.default.string.isRequired,
  route: _propTypes.default.string.isRequired
};
var _default = DefaultNavbarLink;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactRouterDom = require("react-router-dom");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _material = require("@mui/material");
var _Icon = _interopRequireDefault(require("@mui/material/Icon"));
var _VuiBox = _interopRequireDefault(require("../../components/VuiBox"));
var _VuiTypography = _interopRequireDefault(require("../../components/VuiTypography"));
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

// prop-types is a library for typechecking of props.

// @mui material components

// Vision UI Dashboard React components

function Breadcrumbs(_ref) {
  let {
    icon,
    title,
    route,
    light
  } = _ref;
  const routes = route.slice(0, -1);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
    mr: {
      xs: 0,
      xl: 8
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Breadcrumbs, {
      sx: {
        "& .MuiBreadcrumbs-separator": {
          color: _ref2 => {
            let {
              palette: {
                white,
                grey
              }
            } = _ref2;
            return light ? white.main : grey[600];
          }
        }
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Link, {
        to: "/",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
          component: "span",
          variant: "body2",
          color: light ? "white" : "dark",
          opacity: light ? 0.8 : 0.5,
          sx: {
            lineHeight: 0
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.default, {
            children: icon
          })
        })
      }), routes.map(el => /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Link, {
        to: `/${el}`,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
          component: "span",
          variant: "button",
          fontWeight: "regular",
          textTransform: "capitalize",
          color: light ? "white" : "dark",
          opacity: light ? 0.8 : 0.5,
          sx: {
            lineHeight: 0
          },
          children: el
        })
      }, el)), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
        variant: "button",
        fontWeight: "regular",
        textTransform: "capitalize",
        color: light ? "white" : "dark",
        sx: {
          lineHeight: 0
        },
        children: title.replace("-", " ")
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
      fontWeight: "bold",
      textTransform: "capitalize",
      variant: "h6",
      color: light ? "white" : "dark",
      noWrap: true,
      children: title.replace("-", " ")
    })]
  });
}

// Setting default values for the props of Breadcrumbs
Breadcrumbs.defaultProps = {
  light: false
};

// Typechecking props for the Breadcrumbs
Breadcrumbs.propTypes = {
  icon: _propTypes.default.node.isRequired,
  title: _propTypes.default.string.isRequired,
  route: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.array]).isRequired,
  light: _propTypes.default.bool
};
var _default = Breadcrumbs;
exports.default = _default;
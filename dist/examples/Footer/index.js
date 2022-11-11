"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
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

// Vision UI Dashboard React components

function Footer() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
    display: "flex",
    flexDirection: {
      xs: "column",
      lg: "row"
    },
    justifyContent: "space-between",
    direction: "row",
    component: "footer",
    py: 2,
    pb: 0,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
      item: true,
      xs: 12,
      sx: {
        textAlign: "center"
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiTypography.default, {
        variant: "button",
        sx: {
          textAlign: "center",
          fontWeight: "400 !important"
        },
        color: "white",
        children: ["@ 2021, Made with \u2764\uFE0F\xA0\xA0\xA0 by", " ", /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
          component: "a",
          variant: "button",
          href: "https://simmmple.com/",
          sx: {
            textAlign: "center",
            fontWeight: "500 !important"
          },
          color: "white",
          mr: "2px",
          children: "Simmmple"
        }), "&", /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
          ml: "2px",
          mr: "2px",
          component: "a",
          variant: "button",
          href: "https://www.creative-tim.com/",
          sx: {
            textAlign: "center",
            fontWeight: "500 !important"
          },
          color: "white",
          children: "Creative Tim"
        }), "for a better web"]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
      item: true,
      xs: 10,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        mb: 3,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
          mr: {
            xs: "20px",
            lg: "46px"
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
            component: "a",
            href: "https://www.creative-tim.com/templates",
            variant: "body2",
            color: "white",
            children: "Marketplace"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
          mr: {
            xs: "20px",
            lg: "46px"
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
            component: "a",
            href: "https://www.creative-tim.com/blog/",
            variant: "body2",
            color: "white",
            children: "Blog"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
            component: "a",
            href: "https://www.creative-tim.com/license",
            variant: "body2",
            color: "white",
            children: "License"
          })
        })]
      })
    })]
  });
}
var _default = Footer;
exports.default = _default;
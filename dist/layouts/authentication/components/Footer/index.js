"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Grid = _interopRequireDefault(require("@mui/material/Grid"));
var _Facebook = _interopRequireDefault(require("@mui/icons-material/Facebook"));
var _Twitter = _interopRequireDefault(require("@mui/icons-material/Twitter"));
var _Instagram = _interopRequireDefault(require("@mui/icons-material/Instagram"));
var _Pinterest = _interopRequireDefault(require("@mui/icons-material/Pinterest"));
var _LinkedIn = _interopRequireDefault(require("@mui/icons-material/LinkedIn"));
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

// @mui icons

// Vision UI Dashboard React components

function Footer() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
    component: "footer",
    py: 6,
    sx: _ref => {
      let {
        breakpoints
      } = _ref;
      return {
        maxWidth: "450px",
        [breakpoints.down("xl")]: {
          maxWidth: "400px"
        }
      };
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Grid.default, {
      container: true,
      justifyContent: "center",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid.default, {
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
          color: "text",
          children: ["@ 2021, Made with \u2764\uFE0F\xA0\xA0\xA0 by", " ", /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
            component: "a",
            variant: "button",
            href: "#",
            sx: {
              textAlign: "center",
              fontWeight: "500 !important"
            },
            color: "text",
            mr: "2px",
            children: "Simmmple"
          }), "&", /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
            ml: "2px",
            mr: "2px",
            component: "a",
            variant: "button",
            href: "#",
            sx: {
              textAlign: "center",
              fontWeight: "500 !important"
            },
            color: "text",
            children: "Creative Tim"
          }), "for a better web"]
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid.default, {
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
              href: "#",
              variant: "body2",
              color: "text",
              children: "Marketplace"
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
            mr: {
              xs: "20px",
              lg: "46px"
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
              component: "a",
              href: "#",
              variant: "body2",
              color: "text",
              children: "Blog"
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
              component: "a",
              href: "#",
              variant: "body2",
              color: "text",
              children: "License"
            })
          })]
        })
      })]
    })
  });
}
var _default = Footer;
exports.default = _default;
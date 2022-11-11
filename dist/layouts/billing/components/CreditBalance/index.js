"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _colors = _interopRequireDefault(require("../../../../assets/theme/base/colors"));
var _VuiBox = _interopRequireDefault(require("../../../../components/VuiBox"));
var _VuiTypography = _interopRequireDefault(require("../../../../components/VuiTypography"));
var _fa = require("react-icons/fa");
var _md = require("react-icons/md");
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
// @mui components
// Vision UI Dashboard assets
const balance = "/images/3ee8132f11fba853d6e7c1f3e8829fd8.png";
const Graph = "/images/ea06bfa42254f88cb65cfb5b644f5858.svg";
const CreditBalance = () => {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Card, {
    sx: {
      padding: "30px"
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
      display: "flex",
      flexDirection: "column",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
        mb: "32px",
        p: "20px",
        display: "flex",
        flexDirection: "column",
        sx: {
          backgroundImage: `url(${balance})`,
          backgroundSize: "cover",
          borderRadius: "18px"
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
          display: "flex",
          justifyContent: "space-beetween",
          alignItems: "center",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
            variant: "caption",
            color: "white",
            fontWeight: "medium",
            mr: "auto",
            children: "Credit Balance"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaEllipsisH, {
            color: "white",
            size: "18px",
            sx: {
              cursor: "pointer"
            }
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
          display: "flex",
          justifyContent: "space-beetween",
          alignItems: "center",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
            variant: "h2",
            color: "white",
            fontWeight: "bold",
            mr: "auto",
            children: "$25,215"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
            component: "img",
            src: Graph,
            sx: {
              width: "58px",
              height: "20px"
            }
          })]
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
        color: "text",
        variant: "xxs",
        fontWeight: "medium",
        mb: "8px",
        children: "NEWEST"
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
        display: "flex",
        justifyContent: "space-beetween",
        alignItems: "center",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Stack, {
          direction: "row",
          spacing: "10px",
          mr: "auto",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
            display: "flex",
            mr: "10px",
            justifyContent: "center",
            alignItems: "center",
            sx: {
              background: "rgba(34, 41, 78, 0.7)",
              borderRadius: "50%",
              width: "42px",
              height: "42px"
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_md.MdOutlineDomain, {
              color: _colors.default.success.main,
              size: "20px"
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
            display: "flex",
            flexDirection: "column",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
              color: "white",
              variant: "button",
              fontWeight: "medium",
              children: "Bill & Taxes"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
              color: "text",
              variant: "button",
              fontWeight: "medium",
              children: "Today, 16:36"
            })]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
          variant: "button",
          color: "white",
          fontWeight: "bold",
          children: "-$154.50"
        })]
      })]
    })
  });
};
var _default = CreditBalance;
exports.default = _default;
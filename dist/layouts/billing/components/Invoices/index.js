"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Card = _interopRequireDefault(require("@mui/material/Card"));
var _VuiBox = _interopRequireDefault(require("../../../../components/VuiBox"));
var _VuiTypography = _interopRequireDefault(require("../../../../components/VuiTypography"));
var _VuiButton = _interopRequireDefault(require("../../../../components/VuiButton"));
var _Invoice = _interopRequireDefault(require("../Invoice"));
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

// Vision UI Dashboard React components

// Billing page components

function Invoices() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Card.default, {
    id: "delete-account",
    sx: {
      height: "100%"
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
      mb: "28px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
        variant: "h6",
        fontWeight: "medium",
        color: "white",
        children: "Invoices"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiButton.default, {
        variant: "contained",
        color: "info",
        size: "small",
        children: "VIEW ALL"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
        component: "ul",
        display: "flex",
        flexDirection: "column",
        p: 0,
        m: 0,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Invoice.default, {
          date: "March, 01, 2020",
          id: "#MS-415646",
          price: "$180"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Invoice.default, {
          date: "February, 10, 2021",
          id: "#RV-126749",
          price: "$250"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Invoice.default, {
          date: "April, 05, 2020",
          id: "#QW-103578",
          price: "$120"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Invoice.default, {
          date: "June, 25, 2019",
          id: "#MS-415646",
          price: "$180"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Invoice.default, {
          date: "March, 01, 2019",
          id: "#AR-803481",
          price: "$300",
          noGutter: true
        })]
      })
    })]
  });
}
var _default = Invoices;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Card = _interopRequireDefault(require("@mui/material/Card"));
var _VuiBox = _interopRequireDefault(require("../../../../components/VuiBox"));
var _VuiTypography = _interopRequireDefault(require("../../../../components/VuiTypography"));
var _Bill = _interopRequireDefault(require("../Bill"));
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

function BillingInformation() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Card.default, {
    id: "delete-account",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
        variant: "lg",
        color: "white",
        fontWeight: "bold",
        children: "Billing Information"
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
        component: "ul",
        display: "flex",
        flexDirection: "column",
        p: 0,
        m: 0,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Bill.default, {
          name: "oliver liam",
          company: "viking burrito",
          email: "oliver@burrito.com",
          vat: "FRB1235476"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Bill.default, {
          name: "lucas harper",
          company: "stone tech zone",
          email: "lucas@stone-tech.com",
          vat: "FRB1235476"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Bill.default, {
          name: "ethan james",
          company: "fiber notion",
          email: "ethan@fiber.com",
          vat: "FRB1235476",
          noGutter: true
        })]
      })
    })]
  });
}
var _default = BillingInformation;
exports.default = _default;
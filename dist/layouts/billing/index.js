"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Grid = _interopRequireDefault(require("@mui/material/Grid"));
var _VuiBox = _interopRequireDefault(require("../../components/VuiBox"));
var _MasterCard = _interopRequireDefault(require("../../examples/Cards/MasterCard"));
var _DashboardLayout = _interopRequireDefault(require("../../examples/LayoutContainers/DashboardLayout"));
var _DashboardNavbar = _interopRequireDefault(require("../../examples/Navbars/DashboardNavbar"));
var _Footer = _interopRequireDefault(require("../../examples/Footer"));
var _PaymentMethod = _interopRequireDefault(require("./components/PaymentMethod"));
var _Invoices = _interopRequireDefault(require("./components/Invoices"));
var _BillingInformation = _interopRequireDefault(require("./components/BillingInformation"));
var _Transactions = _interopRequireDefault(require("./components/Transactions"));
var _CreditBalance = _interopRequireDefault(require("./components/CreditBalance"));
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

// Vision UI Dashboard React components

// Vision UI Dashboard React example components

// Billing page components

function Billing() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_DashboardLayout.default, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_DashboardNavbar.default, {}), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
      mt: 4,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
        mb: 1.5,
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Grid.default, {
          container: true,
          spacing: 3,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid.default, {
            item: true,
            xs: 12,
            lg: 7,
            xl: 8,
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Grid.default, {
              container: true,
              spacing: 3,
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid.default, {
                item: true,
                xs: 12,
                xl: 6,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_MasterCard.default, {
                  number: 7812213908237916,
                  valid: "05/24",
                  cvv: "09X"
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid.default, {
                item: true,
                xs: 12,
                md: 12,
                xl: 6,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_CreditBalance.default, {})
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid.default, {
                item: true,
                xs: 12,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_PaymentMethod.default, {})
              })]
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid.default, {
            item: true,
            xs: 12,
            lg: 5,
            xl: 4,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Invoices.default, {})
          })]
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
        my: 3,
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Grid.default, {
          container: true,
          spacing: 3,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid.default, {
            item: true,
            xs: 12,
            md: 7,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_BillingInformation.default, {})
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid.default, {
            item: true,
            xs: 12,
            md: 5,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Transactions.default, {})
          })]
        })
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Footer.default, {})]
  });
}
var _default = Billing;
exports.default = _default;
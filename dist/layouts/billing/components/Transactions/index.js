"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Card = _interopRequireDefault(require("@mui/material/Card"));
var _Icon = _interopRequireDefault(require("@mui/material/Icon"));
var _VuiBox = _interopRequireDefault(require("../../../../components/VuiBox"));
var _VuiTypography = _interopRequireDefault(require("../../../../components/VuiTypography"));
var _Transaction = _interopRequireDefault(require("../Transaction"));
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

// import Divider from "@mui/material/Divider";

// Vision UI Dashboard React components

// Billing page components

function Transactions() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Card.default, {
    sx: {
      height: "100%"
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      mb: "18px",
      sx: _ref => {
        let {
          breakpoints
        } = _ref;
        return {
          [breakpoints.down("lg")]: {
            flexDirection: "column"
          }
        };
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
        variant: "lg",
        fontWeight: "bold",
        textTransform: "capitalize",
        color: "white",
        sx: _ref2 => {
          let {
            breakpoints
          } = _ref2;
          return {
            [breakpoints.only("sm")]: {
              mb: "6px"
            }
          };
        },
        children: "Your Transaction's"
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
        display: "flex",
        alignItems: "flex-start",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
          color: "white",
          mr: "6px",
          lineHeight: 0,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.default, {
            color: "inherit",
            fontSize: "small",
            children: "date_range"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
          variant: "button",
          color: "text",
          fontWeight: "regular",
          children: "23 - 30 March 2020"
        })]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
        mb: 2,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
          variant: "caption",
          color: "text",
          fontWeight: "medium",
          textTransform: "uppercase",
          children: "newest"
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
        component: "ul",
        display: "flex",
        flexDirection: "column",
        p: 0,
        m: 0,
        sx: {
          listStyle: "none"
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Transaction.default, {
          color: "error",
          icon: "arrow_downward",
          name: "Netflix",
          description: "27 March 2020, at 12:30 PM",
          value: "- $ 2,500"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Transaction.default, {
          color: "success",
          icon: "arrow_upward",
          name: "Apple",
          description: "27 March 2020, at 04:30 AM",
          value: "+ $ 2,000"
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
        mt: 1,
        mb: 2,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
          variant: "caption",
          color: "text",
          fontWeight: "medium",
          textTransform: "uppercase",
          children: "yesterday"
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
        component: "ul",
        display: "flex",
        flexDirection: "column",
        p: 0,
        m: 0,
        sx: {
          listStyle: "none"
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Transaction.default, {
          color: "success",
          icon: "arrow_upward",
          name: "Stripe",
          description: "26 March 2020, at 13:45 PM",
          value: "+ $ 750"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Transaction.default, {
          color: "success",
          icon: "arrow_upward",
          name: "HubSpot",
          description: "26 March 2020, at 12:30 PM",
          value: "+ $ 1,000"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Transaction.default, {
          color: "success",
          icon: "arrow_upward",
          name: "HubSpot",
          description: "26 March 2020, at 08:30 AM",
          value: "+ $ 2,500"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Transaction.default, {
          color: "text",
          icon: "priority_high",
          name: "Webflow",
          description: "26 March 2020, at 05:00 AM",
          value: "Pending"
        })]
      })]
    })]
  });
}
var _default = Transactions;
exports.default = _default;
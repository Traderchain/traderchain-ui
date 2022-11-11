"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Card = _interopRequireDefault(require("@mui/material/Card"));
var _Grid = _interopRequireDefault(require("@mui/material/Grid"));
var _Icon = _interopRequireDefault(require("@mui/material/Icon"));
var _Tooltip = _interopRequireDefault(require("@mui/material/Tooltip"));
var _VuiBox = _interopRequireDefault(require("../../../../components/VuiBox"));
var _VuiTypography = _interopRequireDefault(require("../../../../components/VuiTypography"));
var _VuiButton = _interopRequireDefault(require("../../../../components/VuiButton"));
var _borders = _interopRequireDefault(require("../../../../assets/theme/base/borders"));
var _colors = _interopRequireDefault(require("../../../../assets/theme/base/colors"));
var _Mastercard = _interopRequireDefault(require("../../../../examples/Icons/Mastercard"));
var _Visa = _interopRequireDefault(require("../../../../examples/Icons/Visa"));
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

// Vision UI Dashboard React base styles

// Images

// Vision UI Dashboard component exemples

function PaymentMethod() {
  const {
    grey
  } = _colors.default;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Card.default, {
    id: "delete-account",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      mb: "32px",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
        variant: "lg",
        fontWeight: "bold",
        color: "white",
        children: "Payment Method"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiButton.default, {
        variant: "contained",
        color: "info",
        children: "ADD NEW CARD"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Grid.default, {
        container: true,
        spacing: 3,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid.default, {
          item: true,
          xs: 12,
          md: 6,
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
            border: "2px solid",
            borderRadius: "20px",
            borderColor: grey[600],
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: "22px 20px",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Mastercard.default, {
              width: "21px"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
              pl: 2,
              variant: "button",
              color: "white",
              fontWeight: "medium",
              children: "7812 2139 0823 XXXX"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
              ml: "auto",
              lineHeight: 0,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tooltip.default, {
                title: "Edit Card",
                placement: "top",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.default, {
                  sx: {
                    cursor: "pointer",
                    color: "#fff"
                  },
                  fontSize: "small",
                  children: "edit"
                })
              })
            })]
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid.default, {
          item: true,
          xs: 12,
          md: 6,
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
            border: "2px solid",
            borderRadius: "20px",
            borderColor: grey[600],
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: "22px 20px",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Visa.default, {
              width: "25px"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
              pl: 2,
              variant: "button",
              color: "white",
              fontWeight: "medium",
              children: "7812 2139 0823 XXXX"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
              ml: "auto",
              lineHeight: 0,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tooltip.default, {
                title: "Edit Card",
                placement: "top",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.default, {
                  sx: {
                    cursor: "pointer",
                    color: "#fff"
                  },
                  fontSize: "small",
                  children: "edit"
                })
              })
            })]
          })
        })]
      })
    })]
  });
}
var _default = PaymentMethod;
exports.default = _default;
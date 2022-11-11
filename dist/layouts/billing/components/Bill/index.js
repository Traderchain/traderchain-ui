"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Icon = _interopRequireDefault(require("@mui/material/Icon"));
var _VuiBox = _interopRequireDefault(require("../../../../components/VuiBox"));
var _VuiTypography = _interopRequireDefault(require("../../../../components/VuiTypography"));
var _VuiButton = _interopRequireDefault(require("../../../../components/VuiButton"));
var _linearGradient = _interopRequireDefault(require("../../../../assets/theme/functions/linearGradient"));
var _colors = _interopRequireDefault(require("../../../../assets/theme/base/colors"));
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

// prop-types is a library for typechecking of props

// @mui material components

// Vision UI Dashboard React components

function Bill(_ref) {
  let {
    name,
    company,
    email,
    vat,
    noGutter
  } = _ref;
  const {
    gradients
  } = _colors.default;
  const {
    bill
  } = gradients;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
    component: "li",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    sx: {
      background: (0, _linearGradient.default)(bill.main, bill.state, bill.deg)
    },
    borderRadius: "lg",
    p: "24px",
    mb: noGutter ? "0px" : "24px",
    mt: "20px",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
        display: "flex",
        justifyContent: "space-between",
        alignItems: {
          xs: "flex-start",
          sm: "center"
        },
        flexDirection: {
          xs: "column",
          sm: "row"
        },
        mb: "5px",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
          variant: "button",
          color: "white",
          fontWeight: "medium",
          textTransform: "capitalize",
          children: name
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
          display: "flex",
          alignItems: "center",
          mt: {
            xs: 2,
            sm: 0
          },
          ml: {
            xs: -1.5,
            sm: 0
          },
          sx: _ref2 => {
            let {
              breakpoints
            } = _ref2;
            return {
              [breakpoints.only("sm")]: {
                flexDirection: "column"
              }
            };
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
            mr: 1,
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiButton.default, {
              variant: "text",
              color: "error",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.default, {
                sx: {
                  mr: "4px"
                },
                children: "delete"
              }), "\xA0DELETE"]
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiButton.default, {
            variant: "text",
            color: "text",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.default, {
              sx: {
                mr: "4px"
              },
              children: "edit"
            }), "\xA0EDIT"]
          })]
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
        mb: 1,
        lineHeight: 0,
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiTypography.default, {
          variant: "caption",
          color: "text",
          children: ["Company Name:\xA0\xA0\xA0", /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
            variant: "caption",
            color: "text",
            fontWeight: "regular",
            textTransform: "capitalize",
            children: company
          })]
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
        mb: 1,
        lineHeight: 0,
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiTypography.default, {
          variant: "caption",
          color: "text",
          children: ["Email Address:\xA0\xA0\xA0", /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
            variant: "caption",
            fontWeight: "regular",
            color: "text",
            children: email
          })]
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiTypography.default, {
        variant: "caption",
        color: "text",
        children: ["VAT Number:\xA0\xA0\xA0", /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
          variant: "caption",
          fontWeight: "regular",
          color: "text",
          children: vat
        })]
      })]
    })
  });
}

// Setting default values for the props of Bill
Bill.defaultProps = {
  noGutter: false
};

// Typechecking props for the Bill
Bill.propTypes = {
  name: _propTypes.default.string.isRequired,
  company: _propTypes.default.string.isRequired,
  email: _propTypes.default.string.isRequired,
  vat: _propTypes.default.string.isRequired,
  noGutter: _propTypes.default.bool
};
var _default = Bill;
exports.default = _default;
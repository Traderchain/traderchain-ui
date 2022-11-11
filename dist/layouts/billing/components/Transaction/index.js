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

function Transaction(_ref) {
  let {
    color,
    icon,
    name,
    description,
    value
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
    component: "li",
    py: 1,
    pr: 2,
    mb: 1,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
        display: "flex",
        alignItems: "center",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
          mr: 2,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiButton.default, {
            variant: "outlined",
            color: color,
            sx: {
              fontWeight: "bold",
              width: "35px",
              height: "35px"
            },
            size: "small",
            iconOnly: true,
            circular: true,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.default, {
              sx: {
                fontWeight: "bold"
              },
              children: icon
            })
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
          display: "flex",
          flexDirection: "column",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
            variant: "button",
            color: "white",
            fontWeight: "medium",
            gutterBottom: true,
            children: name
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
            variant: "caption",
            color: "text",
            children: description
          })]
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
        variant: "button",
        color: color,
        fontWeight: "medium",
        sx: _ref2 => {
          let {
            breakpoints
          } = _ref2;
          return {
            [breakpoints.down("lg")]: {
              minWidth: "75px",
              ml: "12px"
            }
          };
        },
        children: value
      })]
    })
  }, name);
}

// Typechecking props of the Transaction
Transaction.propTypes = {
  color: _propTypes.default.oneOf(["primary", "secondary", "info", "success", "warning", "error", "light", "dark", "text"]).isRequired,
  icon: _propTypes.default.node.isRequired,
  name: _propTypes.default.string.isRequired,
  description: _propTypes.default.string.isRequired,
  value: _propTypes.default.string.isRequired
};
var _default = Transaction;
exports.default = _default;
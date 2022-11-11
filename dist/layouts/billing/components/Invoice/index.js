"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _VuiBox = _interopRequireDefault(require("../../../../components/VuiBox"));
var _VuiTypography = _interopRequireDefault(require("../../../../components/VuiTypography"));
var _io = require("react-icons/io5");
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

// Vision UI Dashboard React components

function Invoice(_ref) {
  let {
    date,
    id,
    price
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
    component: "li",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    mb: "32px",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
      lineHeight: 1,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
        display: "block",
        variant: "button",
        fontWeight: "medium",
        color: "white",
        children: date
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
        variant: "caption",
        fontWeight: "regular",
        color: "text",
        children: id
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
      display: "flex",
      alignItems: "center",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
        variant: "button",
        fontWeight: "regular",
        color: "text",
        children: price
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
        display: "flex",
        alignItems: "center",
        lineHeight: 0,
        ml: 3,
        sx: {
          cursor: "poiner"
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_io.IoDocumentText, {
          color: "#fff",
          size: "15px"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
          variant: "button",
          fontWeight: "medium",
          color: "text",
          children: "\xA0PDF"
        })]
      })]
    })]
  });
}

// Setting default values for the props of Invoice
Invoice.defaultProps = {
  noGutter: false
};

// Typechecking props for the Invoice
Invoice.propTypes = {
  date: _propTypes.default.string.isRequired,
  id: _propTypes.default.string.isRequired,
  price: _propTypes.default.string.isRequired,
  noGutter: _propTypes.default.bool
};
var _default = Invoice;
exports.default = _default;
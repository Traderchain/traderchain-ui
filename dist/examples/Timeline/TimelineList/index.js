"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Card = _interopRequireDefault(require("@mui/material/Card"));
var _VuiBox = _interopRequireDefault(require("../../../components/VuiBox"));
var _VuiTypography = _interopRequireDefault(require("../../../components/VuiTypography"));
var _context = require("../context");
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

// Timeline context

function TimelineList(_ref) {
  let {
    title,
    dark,
    children
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_context.TimelineProvider, {
    value: dark,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Card.default, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
        bgColor: dark ? "dark" : "white",
        variant: "gradient",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
          pt: 3,
          px: 3,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
            variant: "h6",
            fontWeight: "medium",
            color: dark ? "white" : "dark",
            children: title
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
          p: 2,
          children: children
        })]
      })
    })
  });
}

// Setting default values for the props of TimelineList
TimelineList.defaultProps = {
  dark: false
};

// Typechecking props for the TimelineList
TimelineList.propTypes = {
  title: _propTypes.default.string.isRequired,
  dark: _propTypes.default.bool,
  children: _propTypes.default.node.isRequired
};
var _default = TimelineList;
exports.default = _default;
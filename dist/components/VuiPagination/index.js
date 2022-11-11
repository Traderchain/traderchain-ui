"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _VuiBox = _interopRequireDefault(require("../VuiBox"));
var _VuiPaginationItemRoot = _interopRequireDefault(require("./VuiPaginationItemRoot"));
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

// Custom styles for VuiPagination

// The Pagination main context
const Context = /*#__PURE__*/(0, _react.createContext)();
const VuiPagination = /*#__PURE__*/(0, _react.forwardRef)((_ref, ref) => {
  let {
    item,
    variant,
    color,
    size,
    active,
    children,
    ...rest
  } = _ref;
  const context = item ? (0, _react.useContext)(Context) : null;
  const paginationSize = context ? context.size : null;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Context.Provider, {
    value: {
      variant,
      color,
      size
    },
    children: item ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiPaginationItemRoot.default, {
      ...rest,
      ref: ref,
      variant: active ? context.variant : "outlined",
      color: active ? context.color : "text",
      iconOnly: true,
      circular: true,
      ownerState: {
        variant,
        active,
        paginationSize
      },
      children: children
    }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      sx: {
        listStyle: "none"
      },
      children: children
    })
  });
});

// Setting default values for the props of VuiPagination
VuiPagination.defaultProps = {
  item: false,
  variant: "gradient",
  color: "info",
  size: "medium",
  active: false
};

// Typechecking props for the VuiPagination
VuiPagination.propTypes = {
  item: _propTypes.default.bool,
  variant: _propTypes.default.oneOf(["gradient", "contained"]),
  color: _propTypes.default.oneOf(["white", "primary", "secondary", "info", "success", "warning", "error", "light", "dark"]),
  size: _propTypes.default.oneOf(["small", "medium", "large"]),
  active: _propTypes.default.bool,
  children: _propTypes.default.node.isRequired
};
var _default = VuiPagination;
exports.default = _default;
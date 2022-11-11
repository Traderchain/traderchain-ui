"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _MenuItem = _interopRequireDefault(require("@mui/material/MenuItem"));
var _Icon = _interopRequireDefault(require("@mui/material/Icon"));
var _VuiBox = _interopRequireDefault(require("../../../components/VuiBox"));
var _VuiTypography = _interopRequireDefault(require("../../../components/VuiTypography"));
var _styles = require("./styles");
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

// prop-types is a library for typechecking of props.

// @mui material components

// Vision UI Dashboard React components

// custom styles for the NotificationItem

const NotificationItem = /*#__PURE__*/(0, _react.forwardRef)((_ref, ref) => {
  let {
    color,
    image,
    title,
    date,
    ...rest
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_MenuItem.default, {
    ...rest,
    ref: ref,
    sx: theme => (0, _styles.menuItem)(theme),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
      width: "2.25rem",
      height: "2.25rem",
      mt: 0.25,
      mr: 2,
      mb: 0.25,
      borderRadius: "lg",
      sx: theme => (0, _styles.menuImage)(theme, {
        color
      }),
      children: image
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiTypography.default, {
        variant: "button",
        textTransform: "capitalize",
        fontWeight: "regular",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("strong", {
          children: title[0]
        }), " ", title[1]]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiTypography.default, {
        variant: "caption",
        color: "text",
        sx: {
          display: "flex",
          alignItems: "center",
          mt: 0.5
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
          variant: "button",
          color: "text",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.default, {
            sx: {
              lineHeight: 1.2,
              mr: 0.5
            },
            children: "watch_later"
          })
        }), date]
      })]
    })]
  });
});

// Setting default values for the props of NotificationItem
NotificationItem.defaultProps = {
  color: "dark"
};

// Typechecking props for the NotificationItem
NotificationItem.propTypes = {
  color: _propTypes.default.oneOf(["primary", "secondary", "info", "success", "warning", "error", "light", "dark", "text"]),
  image: _propTypes.default.node.isRequired,
  title: _propTypes.default.arrayOf(_propTypes.default.string).isRequired,
  date: _propTypes.default.string.isRequired
};
var _default = NotificationItem;
exports.default = _default;
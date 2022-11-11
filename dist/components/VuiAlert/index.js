"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Fade = _interopRequireDefault(require("@mui/material/Fade"));
var _VuiBox = _interopRequireDefault(require("../VuiBox"));
var _VuiAlertRoot = _interopRequireDefault(require("./VuiAlertRoot"));
var _VuiAlertCloseIcon = _interopRequireDefault(require("./VuiAlertCloseIcon"));
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

// Custom styles for the VuiAlert

function VuiAlert(_ref) {
  let {
    color,
    dismissible,
    children,
    ...rest
  } = _ref;
  const [alertStatus, setAlertStatus] = (0, _react.useState)("mount");
  const handleAlertStatus = () => setAlertStatus("fadeOut");

  // The base template for the alert
  const alertTemplate = function () {
    let mount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Fade.default, {
      in: mount,
      timeout: 300,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiAlertRoot.default, {
        ownerState: {
          color
        },
        ...rest,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
          display: "flex",
          alignItems: "center",
          color: "white",
          children: children
        }), dismissible ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiAlertCloseIcon.default, {
          onClick: mount ? handleAlertStatus : null,
          children: "\xD7"
        }) : null]
      })
    });
  };
  switch (true) {
    case alertStatus === "mount":
      return alertTemplate();
    case alertStatus === "fadeOut":
      setTimeout(() => setAlertStatus("unmount"), 400);
      return alertTemplate(false);
    default:
      alertTemplate();
      break;
  }
  return null;
}

// Setting default values for the props of VuiAlert
VuiAlert.defaultProps = {
  color: "info",
  dismissible: false
};

// Typechecking props of the VuiAlert
VuiAlert.propTypes = {
  color: _propTypes.default.oneOf(["primary", "secondary", "info", "success", "warning", "error", "light", "dark"]),
  dismissible: _propTypes.default.bool,
  children: _propTypes.default.node.isRequired
};
var _default = VuiAlert;
exports.default = _default;
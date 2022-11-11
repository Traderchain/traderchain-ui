"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Menu = _interopRequireDefault(require("@mui/material/Menu"));
var _VuiBox = _interopRequireDefault(require("../../../components/VuiBox"));
var _DefaultNavbarLink = _interopRequireDefault(require("./DefaultNavbarLink"));
var _colors = _interopRequireDefault(require("../../../assets/theme/base/colors"));
var _tripleLinearGradient = _interopRequireDefault(require("../../../assets/theme/functions/tripleLinearGradient"));
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

// import Grid from "@mui/material/Grid";

// Vision UI Dashboard React components

// Vision UI Dashboard React example components

function DefaultNavbarMobile(_ref) {
  let {
    open,
    close
  } = _ref;
  const {
    width
  } = open && open.getBoundingClientRect();
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Menu.default, {
    getContentAnchorEl: null,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "center"
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "center"
    },
    anchorEl: open,
    open: Boolean(open),
    onClose: close,
    sx: {
      marginTop: "8px"
    },
    MenuListProps: {
      style: {
        width: `calc(${width}px - 4rem)`,
        backgroundImage: (0, _tripleLinearGradient.default)(_colors.default.gradients.cover.main, _colors.default.gradients.cover.state, _colors.default.gradients.cover.stateSecondary, _colors.default.gradients.cover.deg),
        backgroundColor: "unset !important",
        padding: "8px"
      }
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
      px: 0.5,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_DefaultNavbarLink.default, {
        icon: "donut_large",
        name: "dashboard",
        route: "/dashboard"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_DefaultNavbarLink.default, {
        icon: "person",
        name: "profile",
        route: "/profile"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_DefaultNavbarLink.default, {
        icon: "account_circle",
        name: "sign up",
        route: "/authentication/sign-up"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_DefaultNavbarLink.default, {
        icon: "key",
        name: "sign in",
        route: "/authentication/sign-in"
      })]
    })
  });
}

// Typechecking props for the DefaultNavbarMenu
DefaultNavbarMobile.propTypes = {
  open: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.object]).isRequired,
  close: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.bool, _propTypes.default.object]).isRequired
};
var _default = DefaultNavbarMobile;
exports.default = _default;
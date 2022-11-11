"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactRouterDom = require("react-router-dom");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Card = _interopRequireDefault(require("@mui/material/Card"));
var _VuiBox = _interopRequireDefault(require("../../../components/VuiBox"));
var _VuiTypography = _interopRequireDefault(require("../../../components/VuiTypography"));
var _VuiAvatar = _interopRequireDefault(require("../../../components/VuiAvatar"));
var _VuiButton = _interopRequireDefault(require("../../../components/VuiButton"));
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

// react-routers components

// prop-types is library for typechecking of props

// @mui material components

// Vision UI Dashboard React components

function ProfilesList(_ref) {
  let {
    title,
    profiles
  } = _ref;
  const renderProfiles = profiles.map(_ref2 => {
    let {
      image,
      name,
      description,
      action
    } = _ref2;
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
      component: "li",
      display: "flex",
      alignItems: "center",
      py: 1,
      mb: 1,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
        mr: 2,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiAvatar.default, {
          src: image,
          alt: "something here",
          variant: "rounded",
          shadow: "md"
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
          variant: "button",
          fontWeight: "medium",
          children: name
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
          variant: "caption",
          color: "text",
          children: description
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
        ml: "auto",
        children: action.type === "internal" ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiButton.default, {
          component: _reactRouterDom.Link,
          to: action.route,
          variant: "text",
          color: "info",
          children: action.label
        }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiButton.default, {
          component: "a",
          href: action.route,
          target: "_blank",
          rel: "noreferrer",
          variant: "text",
          color: action.color,
          children: action.label
        })
      })]
    }, name);
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Card.default, {
    sx: {
      height: "100%"
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
      pt: 2,
      px: 2,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
        variant: "h6",
        fontWeight: "medium",
        textTransform: "capitalize",
        children: title
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
      p: 2,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
        component: "ul",
        display: "flex",
        flexDirection: "column",
        p: 0,
        m: 0,
        children: renderProfiles
      })
    })]
  });
}

// Typechecking props for the ProfilesList
ProfilesList.propTypes = {
  title: _propTypes.default.string.isRequired,
  profiles: _propTypes.default.arrayOf(_propTypes.default.object).isRequired
};
var _default = ProfilesList;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Grid = _interopRequireDefault(require("@mui/material/Grid"));
var _VuiBox = _interopRequireDefault(require("../../../../components/VuiBox"));
var _VuiTypography = _interopRequireDefault(require("../../../../components/VuiTypography"));
var _DefaultNavbar = _interopRequireDefault(require("../../../../examples/Navbars/DefaultNavbar"));
var _PageLayout = _interopRequireDefault(require("../../../../examples/LayoutContainers/PageLayout"));
var _page = _interopRequireDefault(require("page.routes"));
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
// Vision UI Dashboard React example components
// Vision UI Dashboard React page layout routes
// Images
// import pattern from "assets/images/shapes/pattern-lines.svg";
const pattern = "./images/08e22690544bfea7e8c10c7d7c3b3e92.svg";
function IllustrationLayout(_ref) {
  let {
    color,
    header,
    title,
    description,
    illustration,
    children
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_PageLayout.default, {
    background: "white",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_DefaultNavbar.default, {
      routes: _page.default,
      action: {
        type: "external",
        route: "https://creative-tim.com/product/vision-ui-dashboard-pro-react",
        label: "BUY NOW"
      }
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Grid.default, {
      container: true,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid.default, {
        item: true,
        xs: 11,
        sm: 8,
        md: 6,
        lg: 4,
        xl: 3,
        sx: {
          mx: "auto"
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100vh",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
            pt: 3,
            px: 3,
            children: !header ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
                mb: 1,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
                  variant: "h4",
                  fontWeight: "bold",
                  children: title
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
                variant: "body2",
                fontWeight: "regular",
                color: "text",
                children: description
              })]
            }) : header
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
            p: 3,
            children: children
          })]
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid.default, {
        item: true,
        xs: 12,
        lg: 6,
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
          display: {
            xs: "none",
            lg: "flex"
          },
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "calc(100% - 2rem)",
          height: "calc(100vh - 2rem)",
          position: "relative",
          borderRadius: "lg",
          textAlign: "center",
          bgColor: color,
          variant: "gradient",
          m: 2,
          px: 13,
          sx: {
            overflow: "hidden"
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
            component: "img",
            src: pattern,
            alt: "pattern-lines",
            width: "120rem",
            position: "absolute",
            topl: 0,
            left: 0,
            opacity: 0.4
          }), illustration.image && /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
            component: "img",
            src: illustration.image,
            alt: "chat-illustration",
            width: "100%",
            maxWidth: "31.25rem"
          }), illustration.title && /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
            mt: 6,
            mb: 1,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
              variant: "h4",
              color: "white",
              fontWeight: "bold",
              children: illustration.title
            })
          }), illustration.description && /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
            mb: 1,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
              variant: "body2",
              color: "white",
              children: illustration.description
            })
          })]
        })
      })]
    })]
  });
}

// Setting default values for the props of IllustrationLayout
IllustrationLayout.defaultProps = {
  color: "info",
  header: "",
  title: "",
  description: "",
  illustration: {}
};

// Typechecking props for the IllustrationLayout
IllustrationLayout.propTypes = {
  color: _propTypes.default.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  header: _propTypes.default.node,
  title: _propTypes.default.string,
  description: _propTypes.default.string,
  children: _propTypes.default.node.isRequired,
  illustration: _propTypes.default.shape({
    image: _propTypes.default.string,
    title: _propTypes.default.string,
    description: _propTypes.default.string
  })
};
var _default = IllustrationLayout;
exports.default = _default;
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
var _Footer = _interopRequireDefault(require("../Footer"));
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

// Authentication layout components

function BasicLayout(_ref) {
  let {
    title,
    description,
    image,
    children
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_PageLayout.default, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_DefaultNavbar.default, {
      action: {
        type: "external",
        route: "https://creative-tim.com/product/vision-ui-dashboard-react",
        label: "Free Download"
      },
      transparent: true,
      light: true
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
      width: "calc(100% - 2rem)",
      minHeight: "50vh",
      borderRadius: "lg",
      mx: 2,
      my: 2,
      pt: 6,
      pb: 28,
      sx: {
        backgroundImage: _ref2 => {
          let {
            functions: {
              linearGradient,
              rgba
            },
            palette: {
              gradients
            }
          } = _ref2;
          return image && `${linearGradient(rgba(gradients.dark.main, 0.6), rgba(gradients.dark.state, 0.6))}, url(${image})`;
        },
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid.default, {
        container: true,
        spacing: 3,
        justifyContent: "center",
        sx: {
          textAlign: "center"
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Grid.default, {
          item: true,
          xs: 10,
          lg: 4,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
            mt: 6,
            mb: 1,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
              variant: "h1",
              color: "white",
              fontWeight: "bold",
              children: title
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
            mb: 2,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
              variant: "body2",
              color: "white",
              fontWeight: "regular",
              children: description
            })
          })]
        })
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
      mt: {
        xs: -26,
        lg: -24
      },
      px: 1,
      width: "calc(100% - 2rem)",
      mx: "auto",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid.default, {
        container: true,
        spacing: 1,
        justifyContent: "center",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid.default, {
          item: true,
          xs: 11,
          sm: 9,
          md: 5,
          lg: 4,
          xl: 3,
          children: children
        })
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Footer.default, {})]
  });
}

// Setting default values for the props of BasicLayout
BasicLayout.defaultProps = {
  title: "",
  description: ""
};

// Typechecking props for the BasicLayout
BasicLayout.propTypes = {
  title: _propTypes.default.string,
  description: _propTypes.default.string,
  image: _propTypes.default.string.isRequired,
  children: _propTypes.default.node.isRequired
};
var _default = BasicLayout;
exports.default = _default;
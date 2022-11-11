"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _VuiBox = _interopRequireDefault(require("../../../../components/VuiBox"));
var _VuiTypography = _interopRequireDefault(require("../../../../components/VuiTypography"));
var _DefaultNavbar = _interopRequireDefault(require("../../../../examples/Navbars/DefaultNavbar"));
var _PageLayout = _interopRequireDefault(require("../../../../examples/LayoutContainers/PageLayout"));
var _Footer = _interopRequireDefault(require("../Footer"));
var _colors = _interopRequireDefault(require("../../../../assets/theme/base/colors"));
var _tripleLinearGradient = _interopRequireDefault(require("../../../../assets/theme/functions/tripleLinearGradient"));
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

// Vision UI Dashboard React example components

// Authentication layout components

// Vision UI Dashboard React theme functions

// Vision UI Dashboard React theme functions

function CoverLayout(_ref) {
  let {
    color,
    header,
    title,
    description,
    motto,
    premotto,
    image,
    top,
    cardContent,
    children
  } = _ref;
  const {
    gradients
  } = _colors.default;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_PageLayout.default, {
    background: (0, _tripleLinearGradient.default)(gradients.cover.main, gradients.cover.state, gradients.cover.stateSecondary, gradients.cover.angle),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_DefaultNavbar.default, {
      action: {
        type: "external",
        route: "https://creative-tim.com/product/vision-ui-dashboard-pro-react",
        label: "BUY NOW"
      }
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
      height: "100%",
      width: "50vw",
      display: {
        xs: "none",
        md: "block"
      },
      position: "absolute",
      top: 0,
      left: 0,
      sx: _ref2 => {
        let {
          breakpoints
        } = _ref2;
        return {
          overflow: "hidden",
          [breakpoints.down("xl")]: {
            mr: "100px"
          },
          [breakpoints.down("lg")]: {
            display: "none"
          }
        };
      },
      zIndex: 0,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
        height: "100%",
        sx: {
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
          textAlign: cardContent ? "center" : "start",
          variant: "subtitle1",
          fontWeight: "medium",
          color: "white",
          mb: "10px",
          sx: {
            mb: 1,
            letterSpacing: "8px"
          },
          children: premotto
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
          textAlign: cardContent ? "center" : "start",
          variant: "h2",
          fontWeight: "bold",
          color: "logo",
          mb: "10px",
          textGradient: true,
          sx: {
            letterSpacing: "8px"
          },
          children: motto
        })]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
      sx: {
        display: "flex",
        justifyContent: "center",
        position: "relative",
        alignItems: "center",
        maxWidth: "1044px",
        minHeight: "75vh",
        margin: "0 auto"
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
        mt: top,
        ml: "auto !important",
        sx: _ref3 => {
          let {
            breakpoints
          } = _ref3;
          return {
            [breakpoints.down("xl")]: {
              mr: cardContent ? "50px" : "100px"
            },
            [breakpoints.down("lg")]: {
              mr: "auto",
              ml: "auto !important"
            },
            [breakpoints.down("md")]: {
              maxWidth: "90%",
              pr: "7px",
              pl: "10px !important"
            }
          };
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
          pt: 3,
          px: 3,
          mx: "auto !important",
          maxWidth: cardContent ? "400px" : "350px",
          children: !header ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
              mb: "35px",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
                textAlign: cardContent ? "center" : "start",
                variant: "h3",
                fontWeight: "bold",
                color: color,
                mb: "10px",
                children: title
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
                textAlign: cardContent ? "center !important" : "start !important",
                mx: "auto",
                sx: _ref4 => {
                  let {
                    typography: {
                      size
                    },
                    functions: {
                      pxToRem
                    }
                  } = _ref4;
                  return {
                    fontWeight: "regular",
                    fontSize: size.sm
                  };
                },
                color: "white",
                children: description
              })]
            })
          }) : header
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
          px: 3,
          mb: "50px",
          mx: "auto",
          ml: "auto !important",
          sx: _ref5 => {
            let {
              breakpoints
            } = _ref5;
            return {
              mt: cardContent ? "60px" : {
                top
              },
              maxWidth: cardContent ? "450px" : "350px",
              [breakpoints.down("xl")]: {
                mr: cardContent ? "0px" : "100px"
              },
              [breakpoints.only("lg")]: {
                mr: "auto",
                ml: "auto !important"
              },
              [breakpoints.down("lg")]: {
                mr: "auto",
                ml: "auto !important"
              },
              [breakpoints.down("md")]: {
                mr: cardContent ? "auto !important" : "unset",
                pr: "7px",
                pl: cardContent ? "0px !important" : "10px !important"
              }
            };
          },
          children: children
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Footer.default, {})]
      })
    })]
  });
}

// Setting default values for the props of CoverLayout
CoverLayout.defaultProps = {
  header: "",
  title: "",
  description: "",
  color: "info",
  top: 20
};

// Typechecking props for the CoverLayout
CoverLayout.propTypes = {
  header: _propTypes.default.node,
  title: _propTypes.default.string,
  description: _propTypes.default.string,
  image: _propTypes.default.string.isRequired,
  top: _propTypes.default.number,
  children: _propTypes.default.node.isRequired
};
var _default = CoverLayout;
exports.default = _default;
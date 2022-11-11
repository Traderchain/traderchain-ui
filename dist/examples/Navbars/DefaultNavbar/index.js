"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _reactRouterDom = require("react-router-dom");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Container = _interopRequireDefault(require("@mui/material/Container"));
var _Icon = _interopRequireDefault(require("@mui/material/Icon"));
var _VuiBox = _interopRequireDefault(require("../../../components/VuiBox"));
var _VuiTypography = _interopRequireDefault(require("../../../components/VuiTypography"));
var _VuiButton = _interopRequireDefault(require("../../../components/VuiButton"));
var _DefaultNavbarLink = _interopRequireDefault(require("./DefaultNavbarLink"));
var _DefaultNavbarMobile = _interopRequireDefault(require("./DefaultNavbarMobile"));
var _breakpoints = _interopRequireDefault(require("../../../assets/theme/base/breakpoints"));
var _colors = _interopRequireDefault(require("../../../assets/theme/base/colors"));
var _borders = _interopRequireDefault(require("../../../assets/theme/base/borders"));
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

// react-router components

// prop-types is a library for typechecking of props.

// @mui material components

// Vision UI Dashboard React components

// Vision UI Dashboard React example components

// Vision UI Dashboard React base styles

function DefaultNavbar(_ref) {
  let {
    transparent,
    light,
    action
  } = _ref;
  const {
    borderCol
  } = _colors.default;
  const {
    borderWidth
  } = _borders.default;
  const [mobileNavbar, setMobileNavbar] = (0, _react.useState)(false);
  const [mobileView, setMobileView] = (0, _react.useState)(false);
  const openMobileNavbar = _ref2 => {
    let {
      currentTarget
    } = _ref2;
    return setMobileNavbar(currentTarget.parentNode);
  };
  const closeMobileNavbar = () => setMobileNavbar(false);
  (0, _react.useEffect)(() => {
    // A function that sets the display state for the DefaultNavbarMobile.
    function displayMobileNavbar() {
      if (window.innerWidth < _breakpoints.default.values.lg) {
        setMobileView(true);
        setMobileNavbar(false);
      } else {
        setMobileView(false);
        setMobileNavbar(false);
      }
    }

    /** 
     The event listener that's calling the displayMobileNavbar function when 
     resizing the window.
    */
    window.addEventListener("resize", displayMobileNavbar);

    // Call the displayMobileNavbar function to set the state with the initial value.
    displayMobileNavbar();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", displayMobileNavbar);
  }, []);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Container.default, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
      py: 2,
      px: {
        xs: transparent ? 4 : 3,
        sm: transparent ? 2 : 3,
        lg: transparent ? 0 : 3
      },
      my: 2,
      border: `${borderWidth[1]} solid ${borderCol.navbar}`,
      width: "calc(100% - 48px)",
      borderRadius: "xl",
      shadow: transparent ? "none" : "md",
      color: light ? "white" : "dark",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      position: "absolute",
      left: "50%",
      zIndex: 3,
      maxWidth: "1044px",
      sx: _ref3 => {
        let {
          palette: {
            gradients
          },
          functions: {
            linearGradient
          }
        } = _ref3;
        return {
          backgroundColor: linearGradient(gradients.navbar.main, gradients.navbar.state, gradients.navbar.deg),
          backdropFilter: "blur(42px)",
          transform: "translate(-50%, 0px)"
        };
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
        component: _reactRouterDom.Link,
        to: "/",
        py: transparent ? 1.5 : 0.75,
        lineHeight: 1,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
          variant: "button",
          textGradient: true,
          color: "logo",
          fontSize: 14,
          letterSpacing: 2,
          fontWeight: "medium",
          sx: {
            margin: "0 auto"
          },
          children: "VISION UI FREE"
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
        color: "inherit",
        display: {
          xs: "none",
          lg: "flex"
        },
        m: 0,
        p: 0,
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
      }), action && (action.type === "internal" ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
        display: {
          xs: "none",
          lg: "inline-block"
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiButton.default, {
          component: _reactRouterDom.Link,
          to: action.route,
          variant: "gradient",
          color: action.color ? action.color : "info",
          size: "small",
          children: action.label
        })
      }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
        display: {
          xs: "none",
          lg: "inline-block"
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiButton.default, {
          component: "a",
          href: action.route,
          target: "_blank",
          rel: "noreferrer",
          color: action.color ? action.color : "info",
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
              fontSize: pxToRem(size.sm)
            };
          },
          children: action.label
        })
      })), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
        display: {
          xs: "inline-block",
          lg: "none"
        },
        lineHeight: 0,
        py: 1.5,
        pl: 1.5,
        color: "inherit",
        sx: {
          cursor: "pointer"
        },
        onClick: openMobileNavbar,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.default, {
          sx: _ref5 => {
            let {
              palette: {
                white
              }
            } = _ref5;
            return {
              color: white.main
            };
          },
          fontSize: "default",
          children: mobileNavbar ? "close" : "menu"
        })
      })]
    }), mobileView && /*#__PURE__*/(0, _jsxRuntime.jsx)(_DefaultNavbarMobile.default, {
      open: mobileNavbar,
      close: closeMobileNavbar
    })]
  });
}

// Setting default values for the props of DefaultNavbar
DefaultNavbar.defaultProps = {
  transparent: false,
  light: false,
  action: false
};

// Typechecking props for the DefaultNavbar
DefaultNavbar.propTypes = {
  transparent: _propTypes.default.bool,
  action: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.shape({
    type: _propTypes.default.oneOf(["external", "internal"]).isRequired,
    route: _propTypes.default.string.isRequired,
    color: _propTypes.default.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark", "light"]),
    label: _propTypes.default.string.isRequired
  })])
};
var _default = DefaultNavbar;
exports.default = _default;
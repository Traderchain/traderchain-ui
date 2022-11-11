"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _reactRouterDom = require("react-router-dom");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _List = _interopRequireDefault(require("@mui/material/List"));
var _Divider = _interopRequireDefault(require("@mui/material/Divider"));
var _Link = _interopRequireDefault(require("@mui/material/Link"));
var _Icon = _interopRequireDefault(require("@mui/material/Icon"));
var _VuiBox = _interopRequireDefault(require("../../components/VuiBox"));
var _VuiTypography = _interopRequireDefault(require("../../components/VuiTypography"));
var _VuiButton = _interopRequireDefault(require("../../components/VuiButton"));
var _SidenavCollapse = _interopRequireDefault(require("./SidenavCollapse"));
var _SidenavCard = _interopRequireDefault(require("./SidenavCard"));
var _SidenavRoot = _interopRequireDefault(require("./SidenavRoot"));
var _sidenav = _interopRequireDefault(require("./styles/sidenav"));
var _context = require("../../context");
var _SimmmpleLogo = _interopRequireDefault(require("../Icons/SimmmpleLogo"));
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

// react-router-dom components

// prop-types is a library for typechecking of props.

// @mui material components

// Vision UI Dashboard React components

// Vision UI Dashboard React example components

// Custom styles for the Sidenav

// Vision UI Dashboard React context

// Vision UI Dashboard React icons

// function Sidenav({ color, brand, brandName, routes, ...rest }) {
function Sidenav(_ref) {
  let {
    color,
    brandName,
    routes,
    ...rest
  } = _ref;
  const [controller, dispatch] = (0, _context.useVisionUIController)();
  const {
    miniSidenav,
    transparentSidenav
  } = controller;
  const location = (0, _reactRouterDom.useLocation)();
  const {
    pathname
  } = location;
  const collapseName = pathname.split("/").slice(1)[0];
  const closeSidenav = () => (0, _context.setMiniSidenav)(dispatch, true);
  (0, _react.useEffect)(() => {
    // A function that sets the mini state of the sidenav.
    function handleMiniSidenav() {
      (0, _context.setMiniSidenav)(dispatch, window.innerWidth < 1200);
    }

    /** 
     The event listener that's calling the handleMiniSidenav function when resizing the window.
    */
    window.addEventListener("resize", handleMiniSidenav);

    // Call the handleMiniSidenav function to set the state with the initial value.
    handleMiniSidenav();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleMiniSidenav);
  }, [dispatch, location]);
  (0, _react.useEffect)(() => {
    if (window.innerWidth < 1440) {
      (0, _context.setTransparentSidenav)(dispatch, false);
    }
  }, []);

  // Render all the routes from the routes.js (All the visible items on the Sidenav)
  const renderRoutes = routes.map(_ref2 => {
    let {
      type,
      name,
      icon,
      title,
      noCollapse,
      key,
      route,
      href
    } = _ref2;
    let returnValue;
    if (type === "collapse") {
      returnValue = href ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_Link.default, {
        href: href,
        target: "_blank",
        rel: "noreferrer",
        sx: {
          textDecoration: "none"
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_SidenavCollapse.default, {
          color: color,
          name: name,
          icon: icon,
          active: key === collapseName,
          noCollapse: noCollapse
        })
      }, key) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.NavLink, {
        to: route,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_SidenavCollapse.default, {
          color: color,
          name: name,
          icon: icon,
          active: key === collapseName,
          noCollapse: noCollapse
        }, key)
      }, key);
    } else if (type === "title") {
      returnValue = /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
        color: "white",
        display: "block",
        variant: "caption",
        fontWeight: "bold",
        textTransform: "uppercase",
        pl: 3,
        mt: 2,
        mb: 1,
        ml: 1,
        children: title
      }, key);
    } else if (type === "divider") {
      returnValue = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Divider.default, {
        light: true
      }, key);
    }
    return returnValue;
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_SidenavRoot.default, {
    ...rest,
    variant: "permanent",
    ownerState: {
      transparentSidenav,
      miniSidenav
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
      pt: 3.5,
      pb: 0.5,
      px: 4,
      textAlign: "center",
      sx: {
        overflow: "unset !important"
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
        display: {
          xs: "block",
          xl: "none"
        },
        position: "absolute",
        top: 0,
        right: 0,
        p: 1.625,
        onClick: closeSidenav,
        sx: {
          cursor: "pointer"
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
          variant: "h6",
          color: "text",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.default, {
            sx: {
              fontWeight: "bold"
            },
            children: "close"
          })
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
        component: _reactRouterDom.NavLink,
        to: "/",
        display: "flex",
        alignItems: "center",
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
          sx: (theme => (0, _sidenav.default)(theme, {
            miniSidenav
          }), {
            display: "flex",
            alignItems: "center",
            margin: "0 auto"
          }),
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
            display: "flex",
            sx: (theme => (0, _sidenav.default)(theme, {
              miniSidenav,
              transparentSidenav
            }), {
              mr: miniSidenav || miniSidenav && transparentSidenav ? 0 : 1
            }),
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_SimmmpleLogo.default, {
              size: "24px"
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
            variant: "button",
            textGradient: true,
            color: "logo",
            fontSize: 14,
            letterSpacing: 2,
            fontWeight: "medium",
            sx: (theme => (0, _sidenav.default)(theme, {
              miniSidenav,
              transparentSidenav
            }), {
              opacity: miniSidenav || miniSidenav && transparentSidenav ? 0 : 1,
              maxWidth: miniSidenav || miniSidenav && transparentSidenav ? 0 : "100%",
              margin: "0 auto"
            }),
            children: brandName
          })]
        })
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Divider.default, {
      light: true
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_List.default, {
      children: renderRoutes
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
      my: 2,
      mx: 2,
      mt: "auto",
      sx: _ref3 => {
        let {
          breakpoints
        } = _ref3;
        return {
          [breakpoints.up("xl")]: {
            pt: 2
          },
          [breakpoints.only("xl")]: {
            pt: 1
          },
          [breakpoints.down("xl")]: {
            pt: 2
          }
        };
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_SidenavCard.default, {
        color: color
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
        mt: 2,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiButton.default, {
          component: "a",
          href: "https://creative-tim.com/product/vision-ui-dashboard-pro-react",
          target: "_blank",
          rel: "noreferrer",
          variant: "gradient",
          color: color,
          fullWidth: true,
          children: "Upgrade to PRO"
        })
      })]
    })]
  });
}

// Setting default values for the props of Sidenav
Sidenav.defaultProps = {
  color: "info"
  // brand: "",
};

// Typechecking props for the Sidenav
Sidenav.propTypes = {
  color: _propTypes.default.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  // brand: PropTypes.string,
  brandName: _propTypes.default.string.isRequired,
  routes: _propTypes.default.arrayOf(_propTypes.default.object).isRequired
};
var _default = Sidenav;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _reactRouterDom = require("react-router-dom");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _AppBar = _interopRequireDefault(require("@mui/material/AppBar"));
var _Toolbar = _interopRequireDefault(require("@mui/material/Toolbar"));
var _IconButton = _interopRequireDefault(require("@mui/material/IconButton"));
var _Menu = _interopRequireDefault(require("@mui/material/Menu"));
var _Icon = _interopRequireDefault(require("@mui/material/Icon"));
var _VuiBox = _interopRequireDefault(require("../../../components/VuiBox"));
var _VuiTypography = _interopRequireDefault(require("../../../components/VuiTypography"));
var _VuiInput = _interopRequireDefault(require("../../../components/VuiInput"));
var _Breadcrumbs = _interopRequireDefault(require("../../Breadcrumbs"));
var _NotificationItem = _interopRequireDefault(require("../../Items/NotificationItem"));
var _styles = require("./styles");
var _context = require("../../../context");
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
// @material-ui core components
// Vision UI Dashboard React components
// Vision UI Dashboard React example components
// Custom styles for DashboardNavbar
// Vision UI Dashboard React context
// Images
const team2 = "./images/70936f91bb217e34750dda5f07e2339b.jpg";
const logoSpotify = "./images/adcb47e6563de438a1f0db22e8de71aa.svg";
function DashboardNavbar(_ref) {
  let {
    absolute,
    light,
    isMini
  } = _ref;
  const [navbarType, setNavbarType] = (0, _react.useState)();
  const [controller, dispatch] = (0, _context.useVisionUIController)();
  const {
    miniSidenav,
    transparentNavbar,
    fixedNavbar,
    openConfigurator
  } = controller;
  const [openMenu, setOpenMenu] = (0, _react.useState)(false);
  const route = (0, _reactRouterDom.useLocation)().pathname.split("/").slice(1);
  (0, _react.useEffect)(() => {
    // Setting the navbar type
    if (fixedNavbar) {
      setNavbarType("sticky");
    } else {
      setNavbarType("static");
    }

    // A function that sets the transparent state of the navbar.
    function handleTransparentNavbar() {
      (0, _context.setTransparentNavbar)(dispatch, fixedNavbar && window.scrollY === 0 || !fixedNavbar);
    }

    /** 
     The event listener that's calling the handleTransparentNavbar function when 
     scrolling the window.
    */
    window.addEventListener("scroll", handleTransparentNavbar);

    // Call the handleTransparentNavbar function to set the state with the initial value.
    handleTransparentNavbar();

    // Remove event listener on cleanup
    return () => window.removeEventListener("scroll", handleTransparentNavbar);
  }, [dispatch, fixedNavbar]);
  const handleMiniSidenav = () => (0, _context.setMiniSidenav)(dispatch, !miniSidenav);
  const handleConfiguratorOpen = () => (0, _context.setOpenConfigurator)(dispatch, !openConfigurator);
  const handleOpenMenu = event => setOpenMenu(event.currentTarget);
  const handleCloseMenu = () => setOpenMenu(false);

  // Render the notifications menu
  const renderMenu = () => /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Menu.default, {
    anchorEl: openMenu,
    anchorReference: null,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "left"
    },
    open: Boolean(openMenu),
    onClose: handleCloseMenu,
    sx: {
      mt: 2
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_NotificationItem.default, {
      image: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
        src: team2,
        alt: "person"
      }),
      title: ["New message", "from Laur"],
      date: "13 minutes ago",
      onClick: handleCloseMenu
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_NotificationItem.default, {
      image: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
        src: logoSpotify,
        alt: "person"
      }),
      title: ["New album", "by Travis Scott"],
      date: "1 day",
      onClick: handleCloseMenu
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_NotificationItem.default, {
      color: "text",
      image: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.default, {
        fontSize: "small",
        sx: {
          color: _ref2 => {
            let {
              palette: {
                white
              }
            } = _ref2;
            return white.main;
          }
        },
        children: "payment"
      }),
      title: ["", "Payment successfully completed"],
      date: "2 days",
      onClick: handleCloseMenu
    })]
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_AppBar.default, {
    position: absolute ? "absolute" : navbarType,
    color: "inherit",
    sx: theme => (0, _styles.navbar)(theme, {
      transparentNavbar,
      absolute,
      light
    }),
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Toolbar.default, {
      sx: theme => (0, _styles.navbarContainer)(theme),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
        color: "inherit",
        mb: {
          xs: 1,
          md: 0
        },
        sx: theme => (0, _styles.navbarRow)(theme, {
          isMini
        }),
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Breadcrumbs.default, {
          icon: "home",
          title: route[route.length - 1],
          route: route,
          light: light
        })
      }), isMini ? null : /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
        sx: theme => (0, _styles.navbarRow)(theme, {
          isMini
        }),
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
          pr: 1,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiInput.default, {
            placeholder: "Type here...",
            icon: {
              component: "search",
              direction: "left"
            },
            sx: _ref3 => {
              let {
                breakpoints
              } = _ref3;
              return {
                [breakpoints.down("sm")]: {
                  maxWidth: "80px"
                },
                [breakpoints.only("sm")]: {
                  maxWidth: "80px"
                },
                backgroundColor: "info.main !important"
              };
            }
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
          color: light ? "white" : "inherit",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Link, {
            to: "/authentication/sign-in",
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_IconButton.default, {
              sx: _styles.navbarIconButton,
              size: "small",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.default, {
                sx: _ref4 => {
                  let {
                    palette: {
                      dark,
                      white
                    }
                  } = _ref4;
                  return {
                    color: light ? white.main : dark.main
                  };
                },
                children: "account_circle"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
                variant: "button",
                fontWeight: "medium",
                color: light ? "white" : "dark",
                children: "Sign in"
              })]
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_IconButton.default, {
            size: "small",
            color: "inherit",
            sx: _styles.navbarMobileMenu,
            onClick: handleMiniSidenav,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.default, {
              className: "text-white",
              children: miniSidenav ? "menu_open" : "menu"
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_IconButton.default, {
            size: "small",
            color: "inherit",
            sx: _styles.navbarIconButton,
            onClick: handleConfiguratorOpen,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.default, {
              children: "settings"
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_IconButton.default, {
            size: "small",
            color: "inherit",
            sx: _styles.navbarIconButton,
            "aria-controls": "notification-menu",
            "aria-haspopup": "true",
            variant: "contained",
            onClick: handleOpenMenu,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.default, {
              className: light ? "text-white" : "text-dark",
              children: "notifications"
            })
          }), renderMenu()]
        })]
      })]
    })
  });
}

// Setting default values for the props of DashboardNavbar
DashboardNavbar.defaultProps = {
  absolute: false,
  light: false,
  isMini: false
};

// Typechecking props for the DashboardNavbar
DashboardNavbar.propTypes = {
  absolute: _propTypes.default.bool,
  light: _propTypes.default.bool,
  isMini: _propTypes.default.bool
};
var _default = DashboardNavbar;
exports.default = _default;
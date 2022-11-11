"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;
var _react = require("react");
var _reactRouterDom = require("react-router-dom");
var _styles = require("@mui/material/styles");
var _CssBaseline = _interopRequireDefault(require("@mui/material/CssBaseline"));
var _Icon = _interopRequireDefault(require("@mui/material/Icon"));
var _VuiBox = _interopRequireDefault(require("./components/VuiBox"));
var _Sidenav = _interopRequireDefault(require("./examples/Sidenav"));
var _Configurator = _interopRequireDefault(require("./examples/Configurator"));
var _theme = _interopRequireDefault(require("./assets/theme"));
var _themeRtl = _interopRequireDefault(require("./assets/theme/theme-rtl"));
var _stylisPluginRtl = _interopRequireDefault(require("stylis-plugin-rtl"));
var _react2 = require("@emotion/react");
var _cache = _interopRequireDefault(require("@emotion/cache"));
var _routes = _interopRequireDefault(require("./routes"));
var _context = require("./context");
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

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the software.

*/

// react-router components

// @mui material components

// Vision UI Dashboard React components

// Vision UI Dashboard React example components

// Vision UI Dashboard React themes

// RTL plugins

// Vision UI Dashboard React routes

// Vision UI Dashboard React contexts

function App() {
  const [controller, dispatch] = (0, _context.useVisionUIController)();
  const {
    miniSidenav,
    direction,
    layout,
    openConfigurator,
    sidenavColor
  } = controller;
  const [onMouseEnter, setOnMouseEnter] = (0, _react.useState)(false);
  const [rtlCache, setRtlCache] = (0, _react.useState)(null);
  const {
    pathname
  } = (0, _reactRouterDom.useLocation)();

  // Cache for the rtl
  (0, _react.useMemo)(() => {
    const cacheRtl = (0, _cache.default)({
      key: "rtl",
      stylisPlugins: [_stylisPluginRtl.default]
    });
    setRtlCache(cacheRtl);
  }, []);

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      (0, _context.setMiniSidenav)(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      (0, _context.setMiniSidenav)(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  // Change the openConfigurator state
  const handleConfiguratorOpen = () => (0, _context.setOpenConfigurator)(dispatch, !openConfigurator);

  // Setting the dir attribute for the body element
  (0, _react.useEffect)(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

  // Setting page scroll to 0 when changing the route
  (0, _react.useEffect)(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);
  const getRoutes = allRoutes => allRoutes.map(route => {
    if (route.collapse) {
      return getRoutes(route.collapse);
    }
    if (route.route) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Route, {
        exact: true,
        path: route.route,
        component: route.component
      }, route.key);
    }
    return null;
  });
  const configsButton = /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "3.5rem",
    height: "3.5rem",
    bgColor: "info",
    shadow: "sm",
    borderRadius: "50%",
    position: "fixed",
    right: "2rem",
    bottom: "2rem",
    zIndex: 99,
    color: "white",
    sx: {
      cursor: "pointer"
    },
    onClick: handleConfiguratorOpen,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.default, {
      fontSize: "default",
      color: "inherit",
      children: "settings"
    })
  });
  return direction === "rtl" ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_react2.CacheProvider, {
    value: rtlCache,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_styles.ThemeProvider, {
      theme: _themeRtl.default,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_CssBaseline.default, {}), layout === "dashboard" && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Sidenav.default, {
          color: sidenavColor,
          brand: "",
          brandName: "VISION UI FREE",
          routes: _routes.default,
          onMouseEnter: handleOnMouseEnter,
          onMouseLeave: handleOnMouseLeave
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Configurator.default, {}), configsButton]
      }), layout === "vr" && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Configurator.default, {}), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactRouterDom.Switch, {
        children: [getRoutes(_routes.default), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Redirect, {
          from: "*",
          to: "/dashboard"
        })]
      })]
    })
  }) : /*#__PURE__*/(0, _jsxRuntime.jsxs)(_styles.ThemeProvider, {
    theme: _theme.default,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_CssBaseline.default, {}), layout === "dashboard" && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Sidenav.default, {
        color: sidenavColor,
        brand: "",
        brandName: "VISION UI FREE",
        routes: _routes.default,
        onMouseEnter: handleOnMouseEnter,
        onMouseLeave: handleOnMouseLeave
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Configurator.default, {}), configsButton]
    }), layout === "vr" && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Configurator.default, {}), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactRouterDom.Switch, {
      children: [getRoutes(_routes.default), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Redirect, {
        from: "*",
        to: "/dashboard"
      })]
    })]
  });
}
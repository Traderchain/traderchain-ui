"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Drawer = _interopRequireDefault(require("@mui/material/Drawer"));
var _styles = require("@mui/material/styles");
var _linearGradient = _interopRequireDefault(require("../../assets/theme/functions/linearGradient"));
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
// @mui material components
var _default = (0, _styles.styled)(_Drawer.default)(_ref => {
  let {
    theme,
    ownerState
  } = _ref;
  const {
    palette,
    boxShadows,
    transitions,
    breakpoints,
    functions
  } = theme;
  const {
    transparentSidenav,
    miniSidenav
  } = ownerState;
  const sidebarWidth = 250;
  const {
    transparent,
    gradients
  } = palette;
  const {
    xxl
  } = boxShadows;
  const {
    pxToRem
  } = functions;

  // styles for the sidenav when miniSidenav={false}
  const drawerOpenStyles = () => ({
    transform: "translateX(0)",
    transition: transitions.create("transform", {
      easing: transitions.easing.sharp,
      duration: transitions.duration.shorter
    }),
    [breakpoints.up("xl")]: {
      boxShadow: transparentSidenav ? "none" : xxl,
      marginBottom: transparentSidenav ? 0 : "inherit",
      left: "0",
      width: sidebarWidth,
      transform: "translateX(0)",
      transition: transitions.create(["width", "background-color"], {
        easing: transitions.easing.sharp,
        duration: transitions.duration.enteringScreen
      })
    }
  });

  // styles for the sidenav when miniSidenav={true}
  const drawerCloseStyles = () => ({
    transform: `translateX(${pxToRem(-320)})`,
    transition: transitions.create("transform", {
      easing: transitions.easing.sharp,
      duration: transitions.duration.shorter
    }),
    [breakpoints.up("xl")]: {
      boxShadow: transparentSidenav ? "none" : xxl,
      marginBottom: transparentSidenav ? 0 : "inherit",
      left: "0",
      width: pxToRem(96),
      overflowX: "hidden",
      transform: "translateX(0)",
      transition: transitions.create(["width", "background-color"], {
        easing: transitions.easing.sharp,
        duration: transitions.duration.shorter
      })
    }
  });
  return {
    "& .MuiDrawer-paper": {
      boxShadow: xxl,
      border: "none",
      background: transparentSidenav ? transparent.main : (0, _linearGradient.default)(gradients.sidenav.main, gradients.sidenav.state, gradients.sidenav.deg),
      backdropFilter: transparentSidenav ? "unset" : "blur(120px)",
      ...(miniSidenav ? drawerCloseStyles() : drawerOpenStyles())
    }
  };
});
exports.default = _default;
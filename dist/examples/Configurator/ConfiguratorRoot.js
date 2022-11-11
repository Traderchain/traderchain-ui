"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Drawer = _interopRequireDefault(require("@mui/material/Drawer"));
var _styles = require("@mui/material/styles");
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
    boxShadows,
    functions,
    transitions,
    palette
  } = theme;
  const {
    openConfigurator
  } = ownerState;
  const {
    gradients
  } = palette;
  const configuratorWidth = 360;
  const {
    lg
  } = boxShadows;
  const {
    pxToRem,
    linearGradient
  } = functions;

  // drawer styles when openConfigurator={true}
  const drawerOpenStyles = () => ({
    width: configuratorWidth,
    left: "initial",
    right: 0,
    transition: transitions.create("right", {
      easing: transitions.easing.sharp,
      duration: transitions.duration.short
    })
  });

  // drawer styles when openConfigurator={false}
  const drawerCloseStyles = () => ({
    left: "initial",
    right: pxToRem(-350),
    transition: transitions.create("all", {
      easing: transitions.easing.sharp,
      duration: transitions.duration.short
    })
  });
  return {
    "& .MuiDrawer-paper": {
      backdropFilter: `blur(${pxToRem(42)})`,
      background: linearGradient(gradients.sidenav.main, gradients.sidenav.state, gradients.sidenav.deg),
      height: "100vh",
      margin: 0,
      padding: `0 ${pxToRem(10)}`,
      borderRadius: 0,
      boxShadow: lg,
      overflowY: "auto",
      ...(openConfigurator ? drawerOpenStyles() : drawerCloseStyles())
    }
  };
});
exports.default = _default;
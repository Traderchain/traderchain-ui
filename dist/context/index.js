"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VisionUIControllerProvider = VisionUIControllerProvider;
exports.setTransparentSidenav = exports.setTransparentNavbar = exports.setSidenavColor = exports.setOpenConfigurator = exports.setMiniSidenav = exports.setLayout = exports.setFixedNavbar = exports.setDirection = void 0;
exports.useVisionUIController = useVisionUIController;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
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

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Visionware.

*/

/**
  This file is used for controlling the global states of the components,
  you can customize the states for the different components here.
*/

// prop-types is a library for typechecking of props

// The Vision UI Dashboard  Material main context
const VisionUI = /*#__PURE__*/(0, _react.createContext)();

// Setting custom name for the context which is visible on react dev tools
VisionUI.displayName = "VisionUIContext";

// Vision UI Dashboard React reducer
function reducer(state, action) {
  switch (action.type) {
    case "MINI_SIDENAV":
      {
        return {
          ...state,
          miniSidenav: action.value
        };
      }
    case "TRANSPARENT_SIDENAV":
      {
        return {
          ...state,
          transparentSidenav: action.value
        };
      }
    case "SIDENAV_COLOR":
      {
        return {
          ...state,
          sidenavColor: action.value
        };
      }
    case "TRANSPARENT_NAVBAR":
      {
        return {
          ...state,
          transparentNavbar: action.value
        };
      }
    case "FIXED_NAVBAR":
      {
        return {
          ...state,
          fixedNavbar: action.value
        };
      }
    case "OPEN_CONFIGURATOR":
      {
        return {
          ...state,
          openConfigurator: action.value
        };
      }
    case "DIRECTION":
      {
        return {
          ...state,
          direction: action.value
        };
      }
    case "LAYOUT":
      {
        return {
          ...state,
          layout: action.value
        };
      }
    default:
      {
        throw new Error(`Unhandled action type: ${action.type}`);
      }
  }
}

// Vision UI Dashboard React context provider
function VisionUIControllerProvider(_ref) {
  let {
    children
  } = _ref;
  const initialState = {
    miniSidenav: false,
    transparentSidenav: true,
    sidenavColor: "info",
    transparentNavbar: true,
    fixedNavbar: true,
    openConfigurator: false,
    direction: "ltr",
    layout: "dashboard"
  };
  const [controller, dispatch] = (0, _react.useReducer)(reducer, initialState);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(VisionUI.Provider, {
    value: [controller, dispatch],
    children: children
  });
}

// Vision UI Dashboard React custom hook for using context
function useVisionUIController() {
  const context = (0, _react.useContext)(VisionUI);
  if (!context) {
    throw new Error("useVisionUIController should be used inside the VisionUIControllerProvider.");
  }
  return context;
}

// Typechecking props for the VisionUIControllerProvider
VisionUIControllerProvider.propTypes = {
  children: _propTypes.default.node.isRequired
};

// Context module functions
const setMiniSidenav = (dispatch, value) => dispatch({
  type: "MINI_SIDENAV",
  value
});
exports.setMiniSidenav = setMiniSidenav;
const setTransparentSidenav = (dispatch, value) => dispatch({
  type: "TRANSPARENT_SIDENAV",
  value
});
exports.setTransparentSidenav = setTransparentSidenav;
const setSidenavColor = (dispatch, value) => dispatch({
  type: "SIDENAV_COLOR",
  value
});
exports.setSidenavColor = setSidenavColor;
const setTransparentNavbar = (dispatch, value) => dispatch({
  type: "TRANSPARENT_NAVBAR",
  value
});
exports.setTransparentNavbar = setTransparentNavbar;
const setFixedNavbar = (dispatch, value) => dispatch({
  type: "FIXED_NAVBAR",
  value
});
exports.setFixedNavbar = setFixedNavbar;
const setOpenConfigurator = (dispatch, value) => dispatch({
  type: "OPEN_CONFIGURATOR",
  value
});
exports.setOpenConfigurator = setOpenConfigurator;
const setDirection = (dispatch, value) => dispatch({
  type: "DIRECTION",
  value
});
exports.setDirection = setDirection;
const setLayout = (dispatch, value) => dispatch({
  type: "LAYOUT",
  value
});
exports.setLayout = setLayout;
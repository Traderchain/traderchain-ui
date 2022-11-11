"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _reactRouterDom = require("react-router-dom");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _VuiBox = _interopRequireDefault(require("../../../components/VuiBox"));
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

// react-router-dom components

// prop-types is a library for typechecking of props.

// Vision UI Dashboard React components

// Vision UI Dashboard React context

function DashboardLayout(_ref) {
  let {
    children
  } = _ref;
  const [controller, dispatch] = (0, _context.useVisionUIController)();
  const {
    miniSidenav
  } = controller;
  const {
    pathname
  } = (0, _reactRouterDom.useLocation)();
  (0, _react.useEffect)(() => {
    (0, _context.setLayout)(dispatch, "dashboard");
  }, [pathname]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
    sx: _ref2 => {
      let {
        breakpoints,
        transitions,
        functions: {
          pxToRem
        }
      } = _ref2;
      return {
        p: 3,
        position: "relative",
        [breakpoints.up("xl")]: {
          marginLeft: miniSidenav ? pxToRem(120) : pxToRem(274),
          transition: transitions.create(["margin-left", "margin-right"], {
            easing: transitions.easing.easeInOut,
            duration: transitions.duration.standard
          })
        }
      };
    },
    children: children
  });
}

// Typechecking props for the DashboardLayout
DashboardLayout.propTypes = {
  children: _propTypes.default.node.isRequired
};
var _default = DashboardLayout;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Collapse = _interopRequireDefault(require("@mui/material/Collapse"));
var _ListItem = _interopRequireDefault(require("@mui/material/ListItem"));
var _ListItemIcon = _interopRequireDefault(require("@mui/material/ListItemIcon"));
var _ListItemText = _interopRequireDefault(require("@mui/material/ListItemText"));
var _Icon = _interopRequireDefault(require("@mui/material/Icon"));
var _VuiBox = _interopRequireDefault(require("../../components/VuiBox"));
var _sidenavCollapse = require("./styles/sidenavCollapse");
var _context = require("../../context");
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

// prop-types is a library for typechecking of props.

// @mui material components

// Vision UI Dashboard React components

// Custom styles for the SidenavCollapse

// Vision UI Dashboard React context

function SidenavCollapse(_ref) {
  let {
    color,
    icon,
    name,
    children,
    active,
    noCollapse,
    open,
    ...rest
  } = _ref;
  const [controller] = (0, _context.useVisionUIController)();
  const {
    miniSidenav,
    transparentSidenav
  } = controller;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_ListItem.default, {
      component: "li",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
        ...rest,
        sx: theme => (0, _sidenavCollapse.collapseItem)(theme, {
          active,
          transparentSidenav
        }),
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_ListItemIcon.default, {
          sx: theme => (0, _sidenavCollapse.collapseIconBox)(theme, {
            active,
            transparentSidenav,
            color
          }),
          children: typeof icon === "string" ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.default, {
            sx: theme => (0, _sidenavCollapse.collapseIcon)(theme, {
              active
            }),
            children: icon
          }) : icon
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ListItemText.default, {
          primary: name,
          sx: theme => (0, _sidenavCollapse.collapseText)(theme, {
            miniSidenav,
            transparentSidenav,
            active
          })
        })]
      })
    }), children && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Collapse.default, {
      in: open,
      unmountOnExit: true,
      children: children
    })]
  });
}

// Setting default values for the props of SidenavCollapse
SidenavCollapse.defaultProps = {
  color: "info",
  active: false,
  noCollapse: false,
  children: false,
  open: false
};

// Typechecking props for the SidenavCollapse
SidenavCollapse.propTypes = {
  color: _propTypes.default.oneOf(["info", "success", "warning", "error", "dark"]),
  icon: _propTypes.default.node.isRequired,
  name: _propTypes.default.string.isRequired,
  children: _propTypes.default.node,
  active: _propTypes.default.bool,
  noCollapse: _propTypes.default.bool,
  open: _propTypes.default.bool
};
var _default = SidenavCollapse;
exports.default = _default;
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

function PageLayout(_ref) {
  let {
    children
  } = _ref;
  const [, dispatch] = (0, _context.useVisionUIController)();
  const {
    pathname
  } = (0, _reactRouterDom.useLocation)();
  (0, _react.useEffect)(() => {
    (0, _context.setLayout)(dispatch, "page");
  }, [pathname]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
    width: "100vw",
    maxWidth: "100%",
    height: "100%",
    minHeight: "100vh",
    sx: _ref2 => {
      let {
        functions: {
          tripleLinearGradient
        },
        palette: {
          gradients
        }
      } = _ref2;
      return {
        overflowX: "hidden",
        backgroundImage: tripleLinearGradient(gradients.cover.main, gradients.cover.state, gradients.cover.stateSecondary, gradients.cover.deg),
        position: "relative"
      };
    },
    children: children
  });
}

// Setting default values for the props for PageLayout
PageLayout.defaultProps = {
  background: "default"
};

// Typechecking props for the PageLayout
PageLayout.propTypes = {
  children: _propTypes.default.node.isRequired
};
var _default = PageLayout;
exports.default = _default;
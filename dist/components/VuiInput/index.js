"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _VuiInputRoot = _interopRequireDefault(require("./VuiInputRoot"));
var _VuiInputWithIconRoot = _interopRequireDefault(require("./VuiInputWithIconRoot"));
var _VuiInputIconBoxRoot = _interopRequireDefault(require("./VuiInputIconBoxRoot"));
var _VuiInputIconRoot = _interopRequireDefault(require("./VuiInputIconRoot"));
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

// prop-types is a library for typechecking of props

// Custom styles for VuiInput

// Vision UI Dashboard React contexts

const VuiInput = /*#__PURE__*/(0, _react.forwardRef)((_ref, ref) => {
  let {
    size,
    icon,
    error,
    success,
    disabled,
    ...rest
  } = _ref;
  let template;
  const [controller] = (0, _context.useVisionUIController)();
  const {
    direction
  } = controller;
  const iconDirection = icon.direction;
  if (icon.component && icon.direction === "left") {
    template = /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiInputWithIconRoot.default, {
      ref: ref,
      ownerState: {
        error,
        success,
        disabled
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiInputIconBoxRoot.default, {
        ownerState: {
          size
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiInputIconRoot.default, {
          fontSize: "small",
          ownerState: {
            size
          },
          children: icon.component
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiInputRoot.default, {
        ...rest,
        ownerState: {
          size,
          error,
          success,
          iconDirection,
          direction,
          disabled
        }
      })]
    });
  } else if (icon.component && icon.direction === "right") {
    template = /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiInputWithIconRoot.default, {
      ref: ref,
      ownerState: {
        error,
        success,
        disabled
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiInputRoot.default, {
        ...rest,
        ownerState: {
          size,
          error,
          success,
          iconDirection,
          direction,
          disabled
        }
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiInputIconBoxRoot.default, {
        ownerState: {
          size
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiInputIconRoot.default, {
          fontSize: "small",
          ownerState: {
            size
          },
          children: icon.component
        })
      })]
    });
  } else {
    template = /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiInputRoot.default, {
      ...rest,
      ref: ref,
      ownerState: {
        size,
        error,
        success,
        disabled
      }
    });
  }
  return template;
});

// Setting default values for the props of VuiInput
VuiInput.defaultProps = {
  size: "medium",
  icon: {
    component: false,
    direction: "none"
  },
  error: false,
  success: false,
  disabled: false
};

// Typechecking props for the VuiInput
VuiInput.propTypes = {
  size: _propTypes.default.oneOf(["small", "medium", "large"]),
  icon: _propTypes.default.shape({
    component: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.bool]),
    direction: _propTypes.default.oneOf(["none", "left", "right"])
  }),
  error: _propTypes.default.bool,
  success: _propTypes.default.bool,
  disabled: _propTypes.default.bool
};
var _default = VuiInput;
exports.default = _default;
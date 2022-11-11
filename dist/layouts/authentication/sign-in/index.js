"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _reactRouterDom = require("react-router-dom");
var _VuiBox = _interopRequireDefault(require("../../../components/VuiBox"));
var _VuiTypography = _interopRequireDefault(require("../../../components/VuiTypography"));
var _VuiInput = _interopRequireDefault(require("../../../components/VuiInput"));
var _VuiButton = _interopRequireDefault(require("../../../components/VuiButton"));
var _VuiSwitch = _interopRequireDefault(require("../../../components/VuiSwitch"));
var _GradientBorder = _interopRequireDefault(require("../../../examples/GradientBorder"));
var _radialGradient = _interopRequireDefault(require("../../../assets/theme/functions/radialGradient"));
var _colors = _interopRequireDefault(require("../../../assets/theme/base/colors"));
var _borders = _interopRequireDefault(require("../../../assets/theme/base/borders"));
var _CoverLayout = _interopRequireDefault(require("../components/CoverLayout"));
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
// Vision UI Dashboard React components
// Vision UI Dashboard assets
// Authentication layout components
// Images
const bgSignIn = "/images/b0fb27f055a0cb2ee5e832c07f46b989.png";
function SignIn() {
  const [rememberMe, setRememberMe] = (0, _react.useState)(true);
  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_CoverLayout.default, {
    title: "Nice to see you!",
    color: "white",
    description: "Enter your email and password to sign in",
    premotto: "INSPIRED BY THE FUTURE:",
    motto: "THE VISION UI DASHBOARD",
    image: bgSignIn,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
      component: "form",
      role: "form",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
        mb: 2,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
          mb: 1,
          ml: 0.5,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
            component: "label",
            variant: "button",
            color: "white",
            fontWeight: "medium",
            children: "Email"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_GradientBorder.default, {
          minWidth: "100%",
          padding: "1px",
          borderRadius: _borders.default.borderRadius.lg,
          backgroundImage: (0, _radialGradient.default)(_colors.default.gradients.borderLight.main, _colors.default.gradients.borderLight.state, _colors.default.gradients.borderLight.angle),
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiInput.default, {
            type: "email",
            placeholder: "Your email...",
            fontWeight: "500"
          })
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
        mb: 2,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
          mb: 1,
          ml: 0.5,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
            component: "label",
            variant: "button",
            color: "white",
            fontWeight: "medium",
            children: "Password"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_GradientBorder.default, {
          minWidth: "100%",
          borderRadius: _borders.default.borderRadius.lg,
          padding: "1px",
          backgroundImage: (0, _radialGradient.default)(_colors.default.gradients.borderLight.main, _colors.default.gradients.borderLight.state, _colors.default.gradients.borderLight.angle),
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiInput.default, {
            type: "password",
            placeholder: "Your password...",
            sx: _ref => {
              let {
                typography: {
                  size
                }
              } = _ref;
              return {
                fontSize: size.sm
              };
            }
          })
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
        display: "flex",
        alignItems: "center",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiSwitch.default, {
          color: "info",
          checked: rememberMe,
          onChange: handleSetRememberMe
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
          variant: "caption",
          color: "white",
          fontWeight: "medium",
          onClick: handleSetRememberMe,
          sx: {
            cursor: "pointer",
            userSelect: "none"
          },
          children: "\xA0\xA0\xA0\xA0Remember me"
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
        mt: 4,
        mb: 1,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiButton.default, {
          color: "info",
          fullWidth: true,
          children: "SIGN IN"
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
        mt: 3,
        textAlign: "center",
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiTypography.default, {
          variant: "button",
          color: "text",
          fontWeight: "regular",
          children: ["Don't have an account?", " ", /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
            component: _reactRouterDom.Link,
            to: "/authentication/sign-up",
            variant: "button",
            color: "white",
            fontWeight: "medium",
            children: "Sign up"
          })]
        })
      })]
    })
  });
}
var _default = SignIn;
exports.default = _default;
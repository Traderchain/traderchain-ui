"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _reactRouterDom = require("react-router-dom");
var _Icon = _interopRequireDefault(require("@mui/material/Icon"));
var _IconButton = _interopRequireDefault(require("@mui/material/IconButton"));
var _Stack = _interopRequireDefault(require("@mui/material/Stack"));
var _fa = require("react-icons/fa");
var _VuiBox = _interopRequireDefault(require("../../../components/VuiBox"));
var _VuiTypography = _interopRequireDefault(require("../../../components/VuiTypography"));
var _VuiInput = _interopRequireDefault(require("../../../components/VuiInput"));
var _VuiButton = _interopRequireDefault(require("../../../components/VuiButton"));
var _VuiSwitch = _interopRequireDefault(require("../../../components/VuiSwitch"));
var _GradientBorder = _interopRequireDefault(require("../../../examples/GradientBorder"));
var _radialGradient = _interopRequireDefault(require("../../../assets/theme/functions/radialGradient"));
var _rgba = _interopRequireDefault(require("../../../assets/theme/functions/rgba"));
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
// @mui material components
// Icons
// Vision UI Dashboard React components
// Vision UI Dashboard assets
// Authentication layout components
// Images
const bgSignIn = "./images/6d50779bbec017db9f86fcc841e55a44.png";
function SignIn() {
  const [rememberMe, setRememberMe] = (0, _react.useState)(true);
  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_CoverLayout.default, {
    title: "Welcome!",
    color: "white",
    description: "Use these awesome forms to login or create new account in your project for free.",
    image: bgSignIn,
    premotto: "INSPIRED BY THE FUTURE:",
    motto: "THE VISION UI DASHBOARD",
    cardContent: true,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_GradientBorder.default, {
      borderRadius: _borders.default.borderRadius.form,
      minWidth: "100%",
      maxWidth: "100%",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
        component: "form",
        role: "form",
        borderRadius: "inherit",
        p: "45px",
        sx: _ref => {
          let {
            palette: {
              secondary
            }
          } = _ref;
          return {
            backgroundColor: secondary.focus
          };
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
          color: "white",
          fontWeight: "bold",
          textAlign: "center",
          mb: "24px",
          sx: _ref2 => {
            let {
              typography: {
                size
              }
            } = _ref2;
            return {
              fontSize: size.lg
            };
          },
          children: "Register with"
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Stack.default, {
          mb: "25px",
          justifyContent: "center",
          alignItems: "center",
          direction: "row",
          spacing: 2,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_GradientBorder.default, {
            borderRadius: "xl",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
              href: "#",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_IconButton.default, {
                transition: "all .25s ease",
                justify: "center",
                align: "center",
                bg: "rgb(19,21,54)",
                borderradius: "15px",
                sx: _ref3 => {
                  let {
                    palette: {
                      secondary
                    },
                    borders: {
                      borderRadius
                    }
                  } = _ref3;
                  return {
                    borderRadius: borderRadius.xl,
                    padding: "25px",
                    backgroundColor: secondary.focus,
                    "&:hover": {
                      backgroundColor: (0, _rgba.default)(secondary.focus, 0.9)
                    }
                  };
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.default, {
                  as: _fa.FaFacebook,
                  w: "30px",
                  h: "30px",
                  sx: _ref4 => {
                    let {
                      palette: {
                        white
                      }
                    } = _ref4;
                    return {
                      color: white.focus
                    };
                  }
                })
              })
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_GradientBorder.default, {
            borderRadius: "xl",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
              href: "#",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_IconButton.default, {
                transition: "all .25s ease",
                justify: "center",
                align: "center",
                bg: "rgb(19,21,54)",
                borderradius: "15px",
                sx: _ref5 => {
                  let {
                    palette: {
                      secondary
                    },
                    borders: {
                      borderRadius
                    }
                  } = _ref5;
                  return {
                    borderRadius: borderRadius.xl,
                    padding: "25px",
                    backgroundColor: secondary.focus,
                    "&:hover": {
                      backgroundColor: (0, _rgba.default)(secondary.focus, 0.9)
                    }
                  };
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.default, {
                  as: _fa.FaApple,
                  w: "30px",
                  h: "30px",
                  sx: _ref6 => {
                    let {
                      palette: {
                        white
                      }
                    } = _ref6;
                    return {
                      color: white.focus
                    };
                  }
                })
              })
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_GradientBorder.default, {
            borderRadius: "xl",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
              href: "#",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_IconButton.default, {
                transition: "all .25s ease",
                justify: "center",
                align: "center",
                bg: "rgb(19,21,54)",
                borderradius: "15px",
                sx: _ref7 => {
                  let {
                    palette: {
                      secondary
                    },
                    borders: {
                      borderRadius
                    }
                  } = _ref7;
                  return {
                    borderRadius: borderRadius.xl,
                    padding: "25px",
                    backgroundColor: secondary.focus,
                    "&:hover": {
                      backgroundColor: (0, _rgba.default)(secondary.focus, 0.9)
                    }
                  };
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.default, {
                  as: _fa.FaGoogle,
                  w: "30px",
                  h: "30px",
                  sx: _ref8 => {
                    let {
                      palette: {
                        white
                      }
                    } = _ref8;
                    return {
                      color: white.focus
                    };
                  }
                })
              })
            })
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
          color: "text",
          fontWeight: "bold",
          textAlign: "center",
          mb: "14px",
          sx: _ref9 => {
            let {
              typography: {
                size
              }
            } = _ref9;
            return {
              fontSize: size.lg
            };
          },
          children: "or"
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
              children: "Name"
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_GradientBorder.default, {
            minWidth: "100%",
            borderRadius: _borders.default.borderRadius.lg,
            padding: "1px",
            backgroundImage: (0, _radialGradient.default)(_colors.default.gradients.borderLight.main, _colors.default.gradients.borderLight.state, _colors.default.gradients.borderLight.angle),
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiInput.default, {
              placeholder: "Your full name...",
              sx: _ref10 => {
                let {
                  typography: {
                    size
                  }
                } = _ref10;
                return {
                  fontSize: size.sm
                };
              }
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
              children: "Email"
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_GradientBorder.default, {
            minWidth: "100%",
            borderRadius: _borders.default.borderRadius.lg,
            padding: "1px",
            backgroundImage: (0, _radialGradient.default)(_colors.default.gradients.borderLight.main, _colors.default.gradients.borderLight.state, _colors.default.gradients.borderLight.angle),
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiInput.default, {
              type: "email",
              placeholder: "Your email...",
              sx: _ref11 => {
                let {
                  typography: {
                    size
                  }
                } = _ref11;
                return {
                  fontSize: size.sm
                };
              }
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
              sx: _ref12 => {
                let {
                  typography: {
                    size
                  }
                } = _ref12;
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
            children: "SIGN UP"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
          mt: 3,
          textAlign: "center",
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiTypography.default, {
            variant: "button",
            color: "text",
            fontWeight: "regular",
            children: ["Already have an account?", " ", /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
              component: _reactRouterDom.Link,
              to: "/authentication/sign-in",
              variant: "button",
              color: "white",
              fontWeight: "medium",
              children: "Sign in"
            })]
          })
        })]
      })
    })
  });
}
var _default = SignIn;
exports.default = _default;
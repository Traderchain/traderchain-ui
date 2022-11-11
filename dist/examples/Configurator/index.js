"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _reactGithubBtn = _interopRequireDefault(require("react-github-btn"));
var _Divider = _interopRequireDefault(require("@mui/material/Divider"));
var _IconButton = _interopRequireDefault(require("@mui/material/IconButton"));
var _Link = _interopRequireDefault(require("@mui/material/Link"));
var _Icon = _interopRequireDefault(require("@mui/material/Icon"));
var _Twitter = _interopRequireDefault(require("@mui/icons-material/Twitter"));
var _Facebook = _interopRequireDefault(require("@mui/icons-material/Facebook"));
var _VuiBox = _interopRequireDefault(require("../../components/VuiBox"));
var _VuiTypography = _interopRequireDefault(require("../../components/VuiTypography"));
var _VuiButton = _interopRequireDefault(require("../../components/VuiButton"));
var _VuiSwitch = _interopRequireDefault(require("../../components/VuiSwitch"));
var _ConfiguratorRoot = _interopRequireDefault(require("./ConfiguratorRoot"));
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

// react-github-btn

// @mui material components

// @mui icons

// Vision UI Dashboard React components

// Custom styles for the Configurator

// Vision UI Dashboard React context

function Configurator() {
  const [controller, dispatch] = (0, _context.useVisionUIController)();
  const {
    openConfigurator,
    transparentSidenav,
    fixedNavbar,
    sidenavColor
  } = controller;
  const [disabled, setDisabled] = (0, _react.useState)(false);
  const sidenavColors = ["primary", "info", "success", "warning", "error"];

  // Use the useEffect hook to change the button state for the sidenav type based on window size.
  (0, _react.useEffect)(() => {
    // A function that sets the disabled state of the buttons for the sidenav type.
    function handleDisabled() {
      return window.innerWidth > 1200 ? setDisabled(false) : setDisabled(true);
    }

    // The event listener that's calling the handleDisabled function when resizing the window.
    window.addEventListener("resize", handleDisabled);

    // Call the handleDisabled function to set the state with the initial value.
    handleDisabled();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleDisabled);
  }, []);
  const handleCloseConfigurator = () => (0, _context.setOpenConfigurator)(dispatch, false);
  const handleTransparentSidenav = () => (0, _context.setTransparentSidenav)(dispatch, true);
  const handleWhiteSidenav = () => (0, _context.setTransparentSidenav)(dispatch, false);
  const handleFixedNavbar = () => (0, _context.setFixedNavbar)(dispatch, !fixedNavbar);

  // sidenav type buttons styles
  const sidenavTypeButtonsStyles = _ref => {
    let {
      functions: {
        pxToRem
      },
      boxShadows: {
        buttonBoxShadow
      }
    } = _ref;
    return {
      height: pxToRem(42),
      boxShadow: buttonBoxShadow.main,
      "&:hover, &:focus": {
        opacity: 1
      }
    };
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_ConfiguratorRoot.default, {
    variant: "permanent",
    ownerState: {
      openConfigurator
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
      backgroundColor: "black",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      pt: 3,
      pb: 0.8,
      px: 3,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
          color: "white",
          variant: "h5",
          fontWeight: "bold",
          children: "Vision UI Configurator"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
          variant: "body2",
          color: "white",
          fontWeight: "bold",
          children: "See our dashboard options."
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.default, {
        sx: _ref2 => {
          let {
            typography: {
              size,
              fontWeightBold
            },
            palette: {
              white,
              dark
            }
          } = _ref2;
          return {
            fontSize: `${size.md} !important`,
            fontWeight: `${fontWeightBold} !important`,
            stroke: `${white.main} !important`,
            strokeWidth: "2px",
            cursor: "pointer",
            mt: 2
          };
        },
        onClick: handleCloseConfigurator,
        children: "close"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Divider.default, {
      light: true
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
      pt: 1.25,
      pb: 3,
      px: 3,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
          variant: "h6",
          color: "white",
          children: "Sidenav Colors"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
          mb: 0.5,
          children: sidenavColors.map(color => /*#__PURE__*/(0, _jsxRuntime.jsx)(_IconButton.default, {
            sx: _ref3 => {
              let {
                borders: {
                  borderWidth
                },
                palette: {
                  white,
                  dark
                },
                transitions
              } = _ref3;
              return {
                width: "24px",
                height: "24px",
                padding: 0,
                border: `${borderWidth[1]} solid ${white.main}`,
                borderColor: sidenavColor === color && dark.main,
                transition: transitions.create("border-color", {
                  easing: transitions.easing.sharp,
                  duration: transitions.duration.shorter
                }),
                backgroundImage: _ref4 => {
                  let {
                    functions: {
                      linearGradient
                    },
                    palette: {
                      gradients
                    }
                  } = _ref4;
                  return linearGradient(gradients[color].main, gradients[color].state);
                },
                "&:not(:last-child)": {
                  mr: 1
                },
                "&:hover, &:focus, &:active": {
                  borderColor: dark.main
                }
              };
            },
            onClick: () => (0, _context.setSidenavColor)(dispatch, color)
          }, color))
        })]
      }), window.innerWidth >= 1440 && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
        mt: 3,
        lineHeight: 1,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
          variant: "h6",
          color: "white",
          children: "Sidenav Type"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
          variant: "button",
          color: "text",
          fontWeight: "regular",
          children: "Choose between 2 different sidenav types."
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
          sx: {
            display: "flex",
            mt: 2
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiButton.default, {
            color: "info",
            variant: transparentSidenav ? "contained" : "outlined",
            onClick: handleTransparentSidenav,
            disabled: disabled,
            fullWidth: true,
            sx: {
              mr: 1,
              ...sidenavTypeButtonsStyles
            },
            children: "Transparent"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiButton.default, {
            color: "info",
            variant: transparentSidenav ? "outlined" : "contained",
            onClick: handleWhiteSidenav,
            disabled: disabled,
            fullWidth: true,
            sx: sidenavTypeButtonsStyles,
            children: "Opaque"
          })]
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
        mt: 3,
        mb: 2,
        lineHeight: 1,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
          variant: "h6",
          color: "white",
          children: "Navbar Fixed"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiSwitch.default, {
          checked: fixedNavbar,
          onChange: handleFixedNavbar,
          color: "info"
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Divider.default, {
        light: true
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
        mt: 3,
        mb: 2,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
          mb: 2,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiButton.default, {
            component: _Link.default,
            href: "https://www.creative-tim.com/product/vision-ui-dashboard-react",
            target: "_blank",
            rel: "noreferrer",
            color: "info",
            variant: "contained",
            fullWidth: true,
            children: "FREE DOWNLOAD"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiButton.default, {
          component: _Link.default,
          href: "https://www.creative-tim.com/learning-lab/react/quick-start/vision-ui-dashboard/",
          target: "_blank",
          rel: "noreferrer",
          color: "info",
          variant: "outlined",
          fullWidth: true,
          children: "VIEW DOCUMENTATION"
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
        display: "flex",
        justifyContent: "center",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactGithubBtn.default, {
          href: "https://github.com/creativetimofficial/vision-ui-dashboard-react",
          "data-icon": "octicon-star",
          "data-size": "large",
          "data-show-count": "true",
          "aria-label": "Star creativetimofficial/vision-ui-dashboard-react on GitHub",
          children: "Star"
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
        mt: 3,
        textAlign: "center",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
          mb: 0.5,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
            variant: "h6",
            color: "white",
            children: "Thank you for sharing!"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
          display: "flex",
          justifyContent: "center",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
            mr: 1.5,
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiButton.default, {
              component: _Link.default,
              href: "https://twitter.com/intent/tweet?url=https://www.creative-tim.com/product/vision-ui-dashboard-react&text=Check%20Vision%20UI%20Dashboard%20made%20by%20@simmmple_web%20and%20@CreativeTim%20#webdesign%20#dashboard%20#react",
              target: "_blank",
              rel: "noreferrer",
              color: "dark",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Twitter.default, {}), "\xA0 Tweet"]
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiButton.default, {
            component: _Link.default,
            href: "https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/vision-ui-dashboard-react",
            target: "_blank",
            rel: "noreferrer",
            color: "dark",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Facebook.default, {}), "\xA0 Share"]
          })]
        })]
      })]
    })]
  });
}
var _default = Configurator;
exports.default = _default;
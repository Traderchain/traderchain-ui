"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _AppBar = _interopRequireDefault(require("@mui/material/AppBar"));
var _Card = _interopRequireDefault(require("@mui/material/Card"));
var _Grid = _interopRequireDefault(require("@mui/material/Grid"));
var _Tab = _interopRequireDefault(require("@mui/material/Tab"));
var _Tabs = _interopRequireDefault(require("@mui/material/Tabs"));
var _breakpoints = _interopRequireDefault(require("../../../../assets/theme/base/breakpoints"));
var _VuiAvatar = _interopRequireDefault(require("../../../../components/VuiAvatar"));
var _VuiBox = _interopRequireDefault(require("../../../../components/VuiBox"));
var _VuiTypography = _interopRequireDefault(require("../../../../components/VuiTypography"));
var _io = require("react-icons/io5");
var _DashboardNavbar = _interopRequireDefault(require("../../../../examples/Navbars/DashboardNavbar"));
var _react = require("react");
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
// @mui material components
// Images
const burceMars = "./images/9f28a78c5fbd42bebc284b4eb11d4f34.png"; // Vision UI Dashboard React base styles
function Header() {
  const [tabsOrientation, setTabsOrientation] = (0, _react.useState)("horizontal");
  const [tabValue, setTabValue] = (0, _react.useState)(0);
  (0, _react.useEffect)(() => {
    // A function that sets the orientation state of the tabs.
    function handleTabsOrientation() {
      return window.innerWidth < _breakpoints.default.values.lg ? setTabsOrientation("vertical") : setTabsOrientation("horizontal");
    }

    /** 
     The event listener that's calling the handleTabsOrientation function when resizing the window.
    */
    window.addEventListener("resize", handleTabsOrientation);

    // Call the handleTabsOrientation function to set the state with the initial value.
    handleTabsOrientation();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleTabsOrientation);
  }, [tabsOrientation]);
  const handleSetTabValue = (event, newValue) => setTabValue(newValue);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
    position: "relative",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_DashboardNavbar.default, {
      light: true
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Card.default, {
      sx: {
        px: 3,
        mt: 2
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Grid.default, {
        container: true,
        alignItems: "center",
        justifyContent: "center",
        sx: _ref => {
          let {
            breakpoints
          } = _ref;
          return {
            [breakpoints.up("xs")]: {
              gap: "16px"
            },
            [breakpoints.up("xs")]: {
              gap: "0px"
            },
            [breakpoints.up("xl")]: {
              gap: "0px"
            }
          };
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid.default, {
          item: true,
          xs: 12,
          md: 1.7,
          lg: 1.5,
          xl: 1.2,
          xxl: 0.8,
          display: "flex",
          sx: _ref2 => {
            let {
              breakpoints
            } = _ref2;
            return {
              [breakpoints.only("sm")]: {
                justifyContent: "center",
                alignItems: "center"
              }
            };
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiAvatar.default, {
            src: burceMars,
            alt: "profile-image",
            variant: "rounded",
            size: "xl",
            shadow: "sm"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid.default, {
          item: true,
          xs: 12,
          md: 4.3,
          lg: 4,
          xl: 3.8,
          xxl: 7,
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
            height: "100%",
            mt: 0.5,
            lineHeight: 1,
            display: "flex",
            flexDirection: "column",
            sx: _ref3 => {
              let {
                breakpoints
              } = _ref3;
              return {
                [breakpoints.only("sm")]: {
                  justifyContent: "center",
                  alignItems: "center"
                }
              };
            },
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
              variant: "lg",
              color: "white",
              fontWeight: "bold",
              children: "Mark Johnson"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
              variant: "button",
              color: "text",
              fontWeight: "regular",
              children: "mark@simmmple.com"
            })]
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid.default, {
          item: true,
          xs: 12,
          md: 6,
          lg: 6.5,
          xl: 6,
          xxl: 4,
          sx: {
            ml: "auto"
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_AppBar.default, {
            position: "static",
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Tabs.default, {
              orientation: tabsOrientation,
              value: tabValue,
              onChange: handleSetTabValue,
              sx: {
                background: "transparent",
                display: "flex",
                justifyContent: "flex-end"
              },
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Tab.default, {
                label: "OVERVIEW",
                icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_io.IoCube, {
                  color: "white",
                  size: "16px"
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tab.default, {
                label: "TEAMS",
                icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_io.IoDocument, {
                  color: "white",
                  size: "16px"
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tab.default, {
                label: "PROJECTS",
                icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_io.IoBuild, {
                  color: "white",
                  size: "16px"
                })
              })]
            })
          })
        })]
      })
    })]
  });
}
var _default = Header;
exports.default = _default;
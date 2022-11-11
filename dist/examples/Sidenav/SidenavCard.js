"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Card = _interopRequireDefault(require("@mui/material/Card"));
var _CardContent = _interopRequireDefault(require("@mui/material/CardContent"));
var _Icon = _interopRequireDefault(require("@mui/material/Icon"));
var _Link = _interopRequireDefault(require("@mui/material/Link"));
var _VuiButton = _interopRequireDefault(require("../../components/VuiButton"));
var _VuiBox = _interopRequireDefault(require("../../components/VuiBox"));
var _VuiTypography = _interopRequireDefault(require("../../components/VuiTypography"));
var _sidenavCard = require("./styles/sidenavCard");
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

// @mui material components

// Vision UI Dashboard React components

// Custom styles for the SidenavCard

// Vision UI Dashboard React context

function SidenavCard(_ref) {
  let {
    color,
    ...rest
  } = _ref;
  const [controller] = (0, _context.useVisionUIController)();
  const {
    miniSidenav,
    sidenavColor
  } = controller;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Card.default, {
    sx: theme => (0, _sidenavCard.card)(theme, {
      miniSidenav
    }),
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_CardContent.default, {
      sx: theme => (0, _sidenavCard.cardContent)(theme, {
        sidenavColor
      }),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
        bgColor: "white",
        width: "2rem",
        height: "2rem",
        borderRadius: "md",
        shadow: "md",
        mb: 2,
        sx: _sidenavCard.cardIconBox,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.default, {
          fontSize: "medium",
          sx: theme => (0, _sidenavCard.cardIcon)(theme, {
            color
          }),
          children: "star"
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
        lineHeight: 1,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
          variant: "h6",
          color: "white",
          children: "Need help?"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
          mb: 1.825,
          mt: -1,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
            variant: "caption",
            color: "white",
            fontWeight: "regular",
            children: "Please check our docs"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiButton.default, {
          component: _Link.default,
          href: "https://www.creative-tim.com/learning-lab/react/quick-start/vision-ui-dashboard/",
          target: "_blank",
          rel: "noreferrer",
          size: "small"
          // sx={{ color: "white !important", background: "red" }}
          ,
          sx: _ref2 => {
            let {
              palette: {
                gradients,
                white
              },
              functions: {
                linearGradient
              }
            } = _ref2;
            return {
              color: `${white.main} !important`,
              background: linearGradient(gradients.cardDark.main, gradients.cardDark.state, gradients.cardDark.deg),
              "&:hover": {
                background: linearGradient(gradients.cardDark.main, gradients.cardDark.state, gradients.cardDark.deg)
              }
            };
          },
          fullWidth: true,
          children: "DOCUMENTATION"
        })]
      })]
    })
  });
}
var _default = SidenavCard;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _VuiTypography = _interopRequireDefault(require("../../../../components/VuiTypography"));
var _VuiBox = _interopRequireDefault(require("../../../../components/VuiBox"));
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
const welcome = "/images/36420a04b041827ae5473cd0cb61c776.png";
const Welcome = () => {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Card, {
    sx: _ref => {
      let {
        breakpoints
      } = _ref;
      return {
        background: `url(${welcome})`,
        backgroundSize: "cover",
        borderRadius: "20px",
        height: "100%",
        [breakpoints.only("xl")]: {
          gridArea: "1 / 1 / 2 / 2"
        }
      };
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
      display: "flex",
      flexDirection: "column",
      sx: {
        height: "100%"
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
        display: "flex",
        flexDirection: "column",
        mb: "auto",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
          color: "white",
          variant: "h3",
          fontWeight: "bold",
          mb: "3px",
          children: "Welcome back!"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
          color: "white",
          variant: "button",
          fontWeight: "regular",
          children: "Nice to see you, Mark Johnson!"
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
        justifySelf: "flex-end",
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiTypography.default, {
          component: "a",
          href: "#",
          variant: "button",
          color: "white",
          fontWeight: "regular",
          sx: {
            mr: "5px",
            display: "inline-flex",
            alignItems: "center",
            justifySelf: "flex-end",
            cursor: "pointer",
            "& .material-icons-round": {
              fontSize: "1.125rem",
              transform: `translate(2px, -0.5px)`,
              transition: "transform 0.2s cubic-bezier(0.34,1.61,0.7,1.3)"
            },
            "&:hover .material-icons-round, &:focus  .material-icons-round": {
              transform: `translate(6px, -0.5px)`
            }
          },
          children: ["Tap to record", /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Icon, {
            sx: {
              fontWeight: "bold",
              ml: "5px"
            },
            children: "arrow_forward"
          })]
        })
      })]
    })
  });
};
var _default = Welcome;
exports.default = _default;
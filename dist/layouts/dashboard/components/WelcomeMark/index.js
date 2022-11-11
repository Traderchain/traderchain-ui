"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _VuiBox = _interopRequireDefault(require("../../../../components/VuiBox"));
var _VuiTypography = _interopRequireDefault(require("../../../../components/VuiTypography"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const gif = "/images/1ac6b1a64ab7fc6f25ec33a6ed472faa.png";
const WelcomeMark = () => {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Card, {
    sx: () => ({
      height: "340px",
      py: "32px",
      backgroundImage: `url(${gif})`,
      backgroundSize: "cover",
      backgroundPosition: "50%"
    }),
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
          color: "text",
          variant: "button",
          fontWeight: "regular",
          mb: "12px",
          children: "Welcome back,"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
          color: "white",
          variant: "h3",
          fontWeight: "bold",
          mb: "18px",
          children: "Mark Johnson"
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiTypography.default, {
          color: "text",
          variant: "h6",
          fontWeight: "regular",
          mb: "auto",
          children: ["Glad to see you again!", /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {}), " Ask me anything."]
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiTypography.default, {
        component: "a",
        href: "#",
        variant: "button",
        color: "white",
        fontWeight: "regular",
        sx: {
          mr: "5px",
          display: "inline-flex",
          alignItems: "center",
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
      })]
    })
  });
};
var _default = WelcomeMark;
exports.default = _default;
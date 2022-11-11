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
const WelcomeMark = () => {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Card, {
    sx: {
      height: "340px"
    },
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
          children: "\u0645\u0631\u062D\u0628\u0627 \u0628\u0639\u0648\u062F\u062A\u0643\u060C"
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
          children: ["\u0633\u0639\u064A\u062F \u0644\u0631\u0624\u064A\u062A\u0643 \u0645\u0631\u0629 \u0623\u062E\u0631\u0649!", /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {}), " \u0627\u0633\u0623\u0644\u0646\u064A \u0627\u064A \u0634\u0626."]
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
        children: ["\u0627\u0636\u063A\u0637 \u0644\u0644\u062A\u0633\u062C\u064A\u0644", /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Icon, {
          sx: {
            fontWeight: "bold",
            ml: "5px"
          },
          children: "arrow_backward"
        })]
      })]
    })
  });
};
var _default = WelcomeMark;
exports.default = _default;
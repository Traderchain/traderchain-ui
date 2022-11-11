"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Card = _interopRequireDefault(require("@mui/material/Card"));
var _Grid = _interopRequireDefault(require("@mui/material/Grid"));
var _Icon = _interopRequireDefault(require("@mui/material/Icon"));
var _VuiBox = _interopRequireDefault(require("../../../../components/VuiBox"));
var _VuiTypography = _interopRequireDefault(require("../../../../components/VuiTypography"));
var _colors = _interopRequireDefault(require("../../../../assets/theme/base/colors"));
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

// @mui material components

// Vision UI Dashboard React components

function MiniStatisticsCard(_ref) {
  let {
    bgColor,
    title,
    count,
    percentage,
    icon,
    direction
  } = _ref;
  const {
    info
  } = _colors.default;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Card.default, {
    sx: {
      padding: "17px"
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Grid.default, {
          container: true,
          alignItems: "center",
          children: [direction === "left" ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid.default, {
            item: true,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
              bgColor: info,
              color: "#fff",
              width: "3rem",
              height: "3rem",
              borderRadius: "lg",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              shadow: "md",
              children: icon.component
            })
          }) : null, /*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid.default, {
            item: true,
            xs: 8,
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
              ml: direction === "left" ? 2 : 0,
              lineHeight: 1,
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
                variant: "caption",
                color: bgColor === "white" ? "text" : "white",
                opacity: bgColor === "white" ? 1 : 0.7,
                textTransform: "capitalize",
                fontWeight: title.fontWeight,
                children: title.text
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiTypography.default, {
                variant: "subtitle1",
                fontWeight: "bold",
                color: "white",
                children: [count, " ", /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
                  variant: "button",
                  color: percentage.color,
                  fontWeight: "bold",
                  children: percentage.text
                })]
              })]
            })
          }), direction === "right" ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid.default, {
            item: true,
            xs: 4,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
              bgColor: "#0075FF",
              color: "white",
              width: "3rem",
              height: "3rem",
              marginLeft: "auto",
              borderRadius: "lg",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              shadow: "md",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.default, {
                fontSize: "small",
                color: "inherit",
                children: icon.component
              })
            })
          }) : null]
        })
      })
    })
  });
}

// Setting default values for the props of MiniStatisticsCard
MiniStatisticsCard.defaultProps = {
  bgColor: "white",
  title: {
    fontWeight: "medium",
    text: ""
  },
  percentage: {
    color: "success",
    text: ""
  },
  direction: "right"
};

// Typechecking props for the MiniStatisticsCard
MiniStatisticsCard.propTypes = {
  bgColor: _propTypes.default.oneOf(["white", "primary", "secondary", "info", "success", "warning", "error", "dark"]),
  title: _propTypes.default.PropTypes.shape({
    fontWeight: _propTypes.default.oneOf(["light", "regular", "medium", "bold"]),
    text: _propTypes.default.string
  }),
  count: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired,
  percentage: _propTypes.default.shape({
    color: _propTypes.default.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark", "white"]),
    text: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
  }),
  icon: _propTypes.default.shape({
    color: _propTypes.default.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
    component: _propTypes.default.node.isRequired
  }).isRequired,
  direction: _propTypes.default.oneOf(["right", "left"])
};
var _default = MiniStatisticsCard;
exports.default = _default;
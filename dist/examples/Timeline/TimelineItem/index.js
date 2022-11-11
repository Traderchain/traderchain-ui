"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Icon = _interopRequireDefault(require("@mui/material/Icon"));
var _VuiBox = _interopRequireDefault(require("../../../components/VuiBox"));
var _VuiTypography = _interopRequireDefault(require("../../../components/VuiTypography"));
var _VuiBadge = _interopRequireDefault(require("../../../components/VuiBadge"));
var _context = require("../context");
var _styles = require("./styles");
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

// Timeline context

// Custom styles for the TimelineItem

function TimelineItem(_ref) {
  let {
    color,
    icon,
    title,
    dateTime,
    description,
    badges,
    lastItem
  } = _ref;
  const isDark = (0, _context.useTimeline)();
  const renderBadges = badges.length > 0 ? badges.map((badge, key) => {
    const badgeKey = `badge-${key}`;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
      mr: key === badges.length - 1 ? 0 : 0.5,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBadge.default, {
        color: color,
        size: "xs",
        badgeContent: badge,
        container: true
      })
    }, badgeKey);
  }) : null;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
    position: "relative",
    mb: "24px",
    sx: theme => (0, _styles.timelineItem)(theme, {
      color
    }),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
      width: "1.625rem",
      height: "1.625rem",
      borderRadius: "50%",
      position: "absolute",
      top: "3.25%",
      left: "-8px",
      zIndex: 2,
      children: icon
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
      ml: "30px",
      pt: description ? 0.7 : 0.5,
      lineHeight: 0,
      maxWidth: "30rem",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
        variant: "button",
        fontWeight: "medium",
        color: "white",
        children: title
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
        mt: 0.5,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
          variant: "caption",
          fontWeight: "medium",
          color: "text",
          children: dateTime
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
        mt: 2,
        mb: 1.5,
        children: description ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
          variant: "button",
          fontWeight: "regular",
          color: "text",
          children: description
        }) : null
      }), badges.length > 0 ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
        display: "flex",
        pb: lastItem ? 1 : 2,
        children: renderBadges
      }) : null]
    })]
  });
}

// Setting default values for the props of TimelineItem
TimelineItem.defaultProps = {
  color: "info",
  badges: [],
  lastItem: false,
  description: ""
};

// Typechecking props for the TimelineItem
TimelineItem.propTypes = {
  color: _propTypes.default.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark", "light"]),
  icon: _propTypes.default.node.isRequired,
  title: _propTypes.default.string.isRequired,
  dateTime: _propTypes.default.string.isRequired,
  description: _propTypes.default.string,
  badges: _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])),
  lastItem: _propTypes.default.bool
};
var _default = TimelineItem;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactRouterDom = require("react-router-dom");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Tooltip = _interopRequireDefault(require("@mui/material/Tooltip"));
var _VuiBox = _interopRequireDefault(require("../../../../components/VuiBox"));
var _VuiTypography = _interopRequireDefault(require("../../../../components/VuiTypography"));
var _VuiButton = _interopRequireDefault(require("../../../../components/VuiButton"));
var _VuiAvatar = _interopRequireDefault(require("../../../../components/VuiAvatar"));
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

// prop-types is a library for typechecking of props

// @mui material components

// Vision UI Dashboard React components

function DefaultProjectCard(_ref) {
  let {
    image,
    label,
    title,
    description,
    action,
    authors
  } = _ref;
  const renderAuthors = authors.map(_ref2 => {
    let {
      image: media,
      name
    } = _ref2;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tooltip.default, {
      title: name,
      placement: "bottom",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiAvatar.default, {
        src: media,
        alt: name,
        size: "xs",
        sx: _ref3 => {
          let {
            borders: {
              borderWidth
            },
            palette: {
              dark
            },
            functions: {
              rgba
            }
          } = _ref3;
          return {
            border: `${borderWidth[2]} solid ${rgba(dark.focus, 0.5)}`,
            cursor: "pointer",
            position: "relative",
            ml: -1.25,
            "&:hover, &:focus": {
              zIndex: "10"
            }
          };
        }
      })
    }, name);
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
    sx: {
      display: "flex",
      flexDirection: "column",
      boxShadow: "none",
      overflow: "visible"
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
      component: "img",
      src: image,
      mb: "8px",
      borderRadius: "15px",
      sx: _ref4 => {
        let {
          breakpoints
        } = _ref4;
        return {
          [breakpoints.up("xl")]: {
            height: "200px"
          }
        };
      }
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
      sx: _ref5 => {
        let {
          breakpoints
        } = _ref5;
        return {
          [breakpoints.only("xl")]: {
            minHeight: "200px"
          }
        };
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
          variant: "xxs",
          color: "text",
          fontWeight: "medium",
          textTransform: "capitalize",
          children: label
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
        mb: 1,
        children: action.type === "internal" ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
          component: _reactRouterDom.Link,
          to: action.route,
          variant: "h5",
          color: "white",
          textTransform: "capitalize",
          children: title
        }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
          component: "a",
          href: action.route,
          target: "_blank",
          rel: "noreferrer",
          color: "white",
          variant: "h5",
          textTransform: "capitalize",
          children: title
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
        mb: 3,
        lineHeight: 0,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
          variant: "button",
          fontWeight: "regular",
          color: "text",
          children: description
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        children: [action.type === "internal" ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiButton.default, {
          component: _reactRouterDom.Link,
          to: action.route,
          variant: "outlined",
          size: "small",
          color: action.color,
          children: action.label
        }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiButton.default, {
          component: "a",
          href: action.route,
          target: "_blank",
          rel: "noreferrer",
          variant: "outlined",
          size: "small",
          color: action.color,
          children: action.label
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
          display: "flex",
          children: renderAuthors
        })]
      })]
    })]
  });
}

// Setting default values for the props of DefaultProjectCard
DefaultProjectCard.defaultProps = {
  authors: []
};

// Typechecking props for the DefaultProjectCard
DefaultProjectCard.propTypes = {
  image: _propTypes.default.string.isRequired,
  label: _propTypes.default.string.isRequired,
  title: _propTypes.default.string.isRequired,
  description: _propTypes.default.string.isRequired,
  action: _propTypes.default.shape({
    type: _propTypes.default.oneOf(["external", "internal"]),
    route: _propTypes.default.string.isRequired,
    color: _propTypes.default.oneOf(["white", "text", "info", "success", "warning", "error", "light", "dark", "white"]).isRequired,
    label: _propTypes.default.string.isRequired
  }).isRequired,
  authors: _propTypes.default.arrayOf(_propTypes.default.object)
};
var _default = DefaultProjectCard;
exports.default = _default;
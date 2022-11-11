"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Card = _interopRequireDefault(require("@mui/material/Card"));
var _Divider = _interopRequireDefault(require("@mui/material/Divider"));
var _VuiBox = _interopRequireDefault(require("../../../../components/VuiBox"));
var _VuiTypography = _interopRequireDefault(require("../../../../components/VuiTypography"));
var _colors = _interopRequireDefault(require("../../../../assets/theme/base/colors"));
var _typography = _interopRequireDefault(require("../../../../assets/theme/base/typography"));
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

// prop-types is library for typechecking of props

// @mui material components

// Vision UI Dashboard React components

// Vision UI Dashboard React base styles

function ProfileInfoCard(_ref) {
  let {
    title,
    description,
    info,
    social
  } = _ref;
  const labels = [];
  const values = [];
  const {
    size
  } = _typography.default;

  // Convert this form `objectKey` of the object key in to this `object key`
  Object.keys(info).forEach(el => {
    if (el.match(/[A-Z\s]+/)) {
      const uppercaseLetter = Array.from(el).find(i => i.match(/[A-Z]+/));
      const newElement = el.replace(uppercaseLetter, ` ${uppercaseLetter.toLowerCase()}`);
      labels.push(newElement);
    } else {
      labels.push(el);
    }
  });

  // Push the object values into the values array
  Object.values(info).forEach(el => values.push(el));

  // Render the card info items
  const renderItems = labels.map((label, key) => /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
    display: "flex",
    py: 1,
    pr: 2,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiTypography.default, {
      variant: "button",
      color: "text",
      fontWeight: "regular",
      textTransform: "capitalize",
      children: [label, ": \xA0"]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiTypography.default, {
      variant: "button",
      fontWeight: "regular",
      color: "white",
      children: ["\xA0", values[key]]
    })]
  }, label));

  // Render the card social media icons
  const renderSocial = social.map(_ref2 => {
    let {
      link,
      icon,
      color
    } = _ref2;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
      component: "a",
      href: link,
      target: "_blank",
      rel: "noreferrer",
      fontSize: size.lg,
      color: "white",
      pr: 1,
      pl: 0.5,
      lineHeight: 1,
      children: icon
    }, color);
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Card.default, {
    sx: {
      height: "100%"
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
      display: "flex",
      mb: "14px",
      justifyContent: "space-between",
      alignItems: "center",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
        variant: "lg",
        fontWeight: "bold",
        color: "white",
        textTransform: "capitalize",
        children: title
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
        mb: 2,
        lineHeight: 1,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
          variant: "button",
          color: "text",
          fontWeight: "regular",
          children: description
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
        opacity: 0.3,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Divider.default, {})
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
        children: [renderItems, /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
          display: "flex",
          py: 1,
          pr: 2,
          color: "white",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
            variant: "button",
            fontWeight: "regular",
            color: "text",
            textTransform: "capitalize",
            children: "social: \xA0"
          }), renderSocial]
        })]
      })]
    })]
  });
}

// Typechecking props for the ProfileInfoCard
ProfileInfoCard.propTypes = {
  title: _propTypes.default.string.isRequired,
  description: _propTypes.default.string.isRequired,
  info: _propTypes.default.objectOf(_propTypes.default.string).isRequired,
  social: _propTypes.default.arrayOf(_propTypes.default.object).isRequired
};
var _default = ProfileInfoCard;
exports.default = _default;
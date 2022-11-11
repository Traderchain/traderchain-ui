"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Card = _interopRequireDefault(require("@mui/material/Card"));
var _VuiBox = _interopRequireDefault(require("../../../components/VuiBox"));
var _VuiTypography = _interopRequireDefault(require("../../../components/VuiTypography"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _ri = require("react-icons/ri");
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
const billingCard = "./images/e36a389ca48316ab995456878ac14762.png"; // Vision UI Dashboard React components
function MasterCard(_ref) {
  let {
    number,
    valid,
    cvv
  } = _ref;
  const numbers = [...`${number}`];
  if (numbers.length < 16 || numbers.length > 16) {
    throw new Error("Invalid value for the prop number, the value for the number prop shouldn't be greater than or less than 16 digits");
  }
  const num1 = numbers.slice(0, 4).join("");
  const num2 = numbers.slice(4, 8).join("");
  const num3 = numbers.slice(8, 12).join("");
  const num4 = numbers.slice(12, 16).join("");
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Card.default, {
    sx: {
      background: `url('${billingCard}')`,
      backdropfilter: "blur(31px)"
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
      p: 2,
      pt: 0,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
        color: "white",
        lineHeight: 0,
        display: "flex",
        justifyContent: "space-beetween",
        alignItems: "center",
        width: "100%",
        sx: {
          width: "100%"
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
          color: "white",
          variant: "lg",
          fontWeight: "bold",
          mr: "auto",
          children: "Vision UI"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ri.RiMastercardFill, {
          size: "48px",
          color: "white"
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiTypography.default, {
        variant: "h4",
        color: "white",
        mt: "auto",
        fontWeight: "medium",
        sx: _ref2 => {
          let {
            breakpoints
          } = _ref2;
          return {
            mt: 8,
            pb: 1,
            [breakpoints.only("sm")]: {
              fontSize: "22px"
            }
          };
        },
        children: [num1, "\xA0\xA0\xA0", num2, "\xA0\xA0\xA0", num3, "\xA0\xA0\xA0", num4]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
          display: "flex",
          alignItems: "center",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
            mr: 3,
            lineHeight: 1,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
              variant: "xxs",
              color: "white",
              fontWeight: "medium",
              opacity: 0.8,
              children: "VALID THRU"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
              variant: "h6",
              color: "white",
              fontWeight: "medium",
              textTransform: "capitalize",
              children: valid
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
            lineHeight: 1,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
              variant: "xxs",
              color: "white",
              fontWeight: "medium",
              opacity: 0.8,
              children: "CVV"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
              variant: "h6",
              color: "white",
              fontWeight: "medium",
              children: cvv
            })]
          })]
        })
      })]
    })
  });
}

// Setting default values for the props of MasterCard
MasterCard.defaultProps = {
  color: "dark"
};

// Typechecking props for the MasterCard
MasterCard.propTypes = {
  color: _propTypes.default.oneOf(["white", "secondary", "info", "success", "warning", "error", "dark", "text"])
};
var _default = MasterCard;
exports.default = _default;
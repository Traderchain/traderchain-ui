"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Card = _interopRequireDefault(require("@mui/material/Card"));
var _VuiBox = _interopRequireDefault(require("../../../../components/VuiBox"));
var _VuiTypography = _interopRequireDefault(require("../../../../components/VuiTypography"));
var _bs = require("react-icons/bs");
var _fa = require("react-icons/fa");
var _io = require("react-icons/io");
var _si = require("react-icons/si");
var _TimelineItem = _interopRequireDefault(require("../../../../examples/Timeline/TimelineItem"));
var _AdobeXD = _interopRequireDefault(require("../../../../examples/Icons/AdobeXD"));
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

// @mui material components

// Vision UI Dashboard React components

// React icons

// Vision UI Dashboard React example components

// Vision UI Dashboard theme imports

function OrdersOverview() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Card.default, {
    className: "h-100",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
      mb: "16px",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
        variant: "lg",
        fontWeight: "bold",
        mb: "5px",
        color: "white",
        children: "Orders overview"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
        mb: 2,
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
          display: "flex",
          alignItems: "center",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_bs.BsCheckCircleFill, {
            color: "green",
            size: "15px",
            mr: "5px"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
            variant: "button",
            color: "text",
            fontWeight: "medium",
            ml: "5px",
            mr: "2px",
            children: "+30%"
          }), " ", /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiTypography.default, {
            variant: "button",
            color: "text",
            fontWeight: "regular",
            children: [" ", "this month"]
          })]
        })
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_TimelineItem.default, {
        icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaBell, {
          size: "16px",
          color: _colors.default.info.main
        }),
        title: "$2400, Design changes",
        dateTime: "22 DEC 7:20 PM"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_TimelineItem.default, {
        icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_io.IoLogoCss3, {
          size: "16px",
          color: _colors.default.error.main
        }),
        title: "New order #1832412",
        dateTime: "21 DEC 11 PM"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_TimelineItem.default, {
        icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaShoppingCart, {
          size: "16px",
          color: _colors.default.lightblue.main
        }),
        title: "Server payments for April",
        dateTime: "21 DEC 9:34 PM"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_TimelineItem.default, {
        icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_bs.BsCreditCardFill, {
          size: "16px",
          color: _colors.default.warning.main
        }),
        title: "New card added for order #4395133",
        dateTime: "20 DEC 2:20 AM"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_TimelineItem.default, {
        icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_si.SiDropbox, {
          size: "16px",
          color: _colors.default.primary.focus
        }),
        title: "New card added for order #4395133",
        dateTime: "18 DEC 4:54 AM"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_TimelineItem.default, {
        icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_AdobeXD.default, {
          size: "20px"
        }),
        title: "New order #9583120",
        dateTime: "17 DEC"
      })]
    })]
  });
}
var _default = OrdersOverview;
exports.default = _default;
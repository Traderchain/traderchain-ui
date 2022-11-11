"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _Card = _interopRequireDefault(require("@mui/material/Card"));
var _VuiBox = _interopRequireDefault(require("../../../../components/VuiBox"));
var _VuiTypography = _interopRequireDefault(require("../../../../components/VuiTypography"));
var _VuiSwitch = _interopRequireDefault(require("../../../../components/VuiSwitch"));
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

function PlatformSettings() {
  const [followsMe, setFollowsMe] = (0, _react.useState)(true);
  const [answersPost, setAnswersPost] = (0, _react.useState)(false);
  const [mentionsMe, setMentionsMe] = (0, _react.useState)(true);
  const [newLaunches, setNewLaunches] = (0, _react.useState)(false);
  const [productUpdate, setProductUpdate] = (0, _react.useState)(true);
  const [newsletter, setNewsletter] = (0, _react.useState)(true);
  const [mails, setMails] = (0, _react.useState)(false);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Card.default, {
    sx: {
      minHeight: "490px",
      height: "100%"
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
      mb: "26px",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
        variant: "lg",
        fontWeight: "bold",
        color: "white",
        textTransform: "capitalize",
        children: "platform settings"
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
      lineHeight: 1.25,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
        variant: "xxs",
        fontWeight: "medium",
        mb: "20px",
        color: "text",
        textTransform: "uppercase",
        children: "account"
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
        display: "flex",
        mb: "14px",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
          mt: 0.25,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiSwitch.default, {
            color: "info",
            checked: followsMe,
            onChange: () => setFollowsMe(!followsMe)
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
          width: "80%",
          ml: 2,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
            variant: "button",
            fontWeight: "regular",
            color: "text",
            children: "Email me when someone follows me"
          })
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
        display: "flex",
        mb: "14px",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
          mt: 0.25,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiSwitch.default, {
            color: "info",
            checked: answersPost,
            onChange: () => setAnswersPost(!answersPost)
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
          width: "80%",
          ml: 2,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
            variant: "button",
            fontWeight: "regular",
            color: "text",
            children: "Email me when someone answers on my post"
          })
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
        display: "flex",
        mb: "14px",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
          mt: 0.25,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiSwitch.default, {
            sx: {
              background: "#1B1F3D",
              color: "#fff"
            },
            color: "info",
            checked: mentionsMe,
            onChange: () => setMentionsMe(!mentionsMe)
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
          width: "80%",
          ml: 2,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
            variant: "button",
            fontWeight: "regular",
            color: "text",
            children: "Email me when someone mentions me"
          })
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
        mb: "6px",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
          variant: "xxs",
          fontWeight: "medium",
          color: "text",
          textTransform: "uppercase",
          children: "application"
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
        display: "flex",
        mb: "14px",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
          mt: 0.25,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiSwitch.default, {
            color: "info",
            checked: newLaunches,
            onChange: () => setNewLaunches(!newLaunches)
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
          width: "80%",
          ml: 2,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
            variant: "button",
            fontWeight: "regular",
            color: "text",
            children: "New launches and projects"
          })
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
        display: "flex",
        mb: "14px",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
          mt: 0.25,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiSwitch.default, {
            color: "info",
            checked: productUpdate,
            onChange: () => setProductUpdate(!productUpdate)
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
          width: "80%",
          ml: 2,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
            variant: "button",
            fontWeight: "regular",
            color: "text",
            children: "Monthly product updates"
          })
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
        display: "flex",
        mb: "14px",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
          mt: 0.25,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiSwitch.default, {
            color: "info",
            checked: newsletter,
            onChange: () => setNewsletter(!newsletter)
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
          width: "80%",
          ml: 2,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
            variant: "button",
            fontWeight: "regular",
            color: "text",
            children: "Subscribe to newsletter"
          })
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
        display: "flex",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
          mt: 0.25,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiSwitch.default, {
            color: "info",
            checked: mails,
            onChange: () => setMails(!mails)
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
          width: "80%",
          ml: 2,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
            variant: "button",
            fontWeight: "regular",
            color: "text",
            children: "Receive mails weekly"
          })
        })]
      })]
    })]
  });
}
var _default = PlatformSettings;
exports.default = _default;
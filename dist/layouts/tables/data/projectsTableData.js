"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Icon = _interopRequireDefault(require("@mui/material/Icon"));
var _VuiBox = _interopRequireDefault(require("../../../components/VuiBox"));
var _VuiTypography = _interopRequireDefault(require("../../../components/VuiTypography"));
var _VuiProgress = _interopRequireDefault(require("../../../components/VuiProgress"));
var _AdobeXD = _interopRequireDefault(require("../../../examples/Icons/AdobeXD"));
var _Atlassian = _interopRequireDefault(require("../../../examples/Icons/Atlassian"));
var _Slack = _interopRequireDefault(require("../../../examples/Icons/Slack"));
var _Spotify = _interopRequireDefault(require("../../../examples/Icons/Spotify"));
var _Jira = _interopRequireDefault(require("../../../examples/Icons/Jira"));
var _Invision = _interopRequireDefault(require("../../../examples/Icons/Invision"));
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
/* eslint-disable react/prop-types */
// @mui material components
// Vision UI Dashboard React components
// Images
const logoSpotify = "./images/adcb47e6563de438a1f0db22e8de71aa.svg";
const logoInvesion = "./images/261b7e78256fe80c9d13033d4e9061dc.svg";
const logoJira = "./images/0547f456e09e69472bdeac283d731c8d.svg";
const logoSlack = "./images/6f4a4127752dd745368d0f8476787a38.svg";
const logoWebDev = "./images/5482c86708318ecd5116b04f1b2d021e.svg";
const logoXD = "./images/b3d2fa3dd9a48fde2eb0fee66df03526.svg";
function Completion(_ref) {
  let {
    value,
    color
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiTypography.default, {
      variant: "button",
      color: "white",
      fontWeight: "medium",
      mb: "4px",
      children: [value, "%\xA0"]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
      width: "8rem",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiProgress.default, {
        value: value,
        color: color,
        sx: {
          background: "#2D2E5F"
        },
        label: false
      })
    })]
  });
}
const action = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.default, {
  sx: {
    cursor: "pointer",
    fontWeight: "bold"
  },
  fontSize: "small",
  children: "more_vert"
});
var _default = {
  columns: [{
    name: "project",
    align: "left"
  }, {
    name: "budget",
    align: "left"
  }, {
    name: "status",
    align: "left"
  }, {
    name: "completion",
    align: "center"
  }, {
    name: "action",
    align: "center"
  }],
  rows: [{
    project: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
      display: "flex",
      alignItems: "center",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_AdobeXD.default, {
        size: "20px"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
        pl: "16px",
        color: "white",
        variant: "button",
        fontWeight: "medium",
        children: "Chakra Vision UI Version"
      })]
    }),
    budget: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
      variant: "button",
      color: "white",
      fontWeight: "medium",
      children: "$14,000"
    }),
    status: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
      variant: "button",
      color: "white",
      fontWeight: "medium",
      children: "Working"
    }),
    completion: /*#__PURE__*/(0, _jsxRuntime.jsx)(Completion, {
      value: 60,
      color: "info"
    }),
    action
  }, {
    project: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
      display: "flex",
      alignItems: "center",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Atlassian.default, {
        size: "20px"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
        pl: "16px",
        color: "white",
        variant: "button",
        fontWeight: "medium",
        children: "Add Progress Track"
      })]
    }),
    budget: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
      variant: "button",
      color: "white",
      fontWeight: "medium",
      children: "$3,000"
    }),
    status: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
      variant: "button",
      color: "white",
      fontWeight: "medium",
      children: "Done"
    }),
    completion: /*#__PURE__*/(0, _jsxRuntime.jsx)(Completion, {
      value: 100,
      color: "info"
    }),
    action
  }, {
    project: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
      display: "flex",
      alignItems: "center",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Slack.default, {
        size: "20px"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
        pl: "16px",
        color: "white",
        variant: "button",
        fontWeight: "medium",
        children: "Fix Platform Errors"
      })]
    }),
    budget: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
      variant: "button",
      color: "white",
      fontWeight: "medium",
      children: "Not set"
    }),
    status: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
      variant: "button",
      color: "white",
      fontWeight: "medium",
      children: "Canceled"
    }),
    completion: /*#__PURE__*/(0, _jsxRuntime.jsx)(Completion, {
      value: 30,
      color: "info"
    }),
    action
  }, {
    project: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
      display: "flex",
      alignItems: "center",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Spotify.default, {
        size: "20px"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
        pl: "16px",
        color: "white",
        variant: "button",
        fontWeight: "medium",
        children: "Launch our Mobile App"
      })]
    }),
    budget: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
      variant: "button",
      color: "white",
      fontWeight: "medium",
      children: "$32,000"
    }),
    status: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
      variant: "button",
      color: "white",
      fontWeight: "medium",
      children: "Canceled"
    }),
    completion: /*#__PURE__*/(0, _jsxRuntime.jsx)(Completion, {
      value: 0,
      color: "info"
    }),
    action
  }, {
    project: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
      display: "flex",
      alignItems: "center",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Jira.default, {
        size: "20px"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
        pl: "16px",
        color: "white",
        variant: "button",
        fontWeight: "medium",
        children: "Add the New Pricing Page"
      })]
    }),
    budget: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
      variant: "button",
      color: "white",
      fontWeight: "medium",
      children: "$2,300"
    }),
    status: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
      variant: "button",
      color: "white",
      fontWeight: "medium",
      children: "Done"
    }),
    completion: /*#__PURE__*/(0, _jsxRuntime.jsx)(Completion, {
      value: 100,
      color: "info"
    }),
    action
  }]
};
exports.default = _default;
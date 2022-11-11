"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = data;
var _Tooltip = _interopRequireDefault(require("@mui/material/Tooltip"));
var _VuiBox = _interopRequireDefault(require("../../../../../components/VuiBox"));
var _VuiTypography = _interopRequireDefault(require("../../../../../components/VuiTypography"));
var _VuiAvatar = _interopRequireDefault(require("../../../../../components/VuiAvatar"));
var _VuiProgress = _interopRequireDefault(require("../../../../../components/VuiProgress"));
var _AdobeXD = _interopRequireDefault(require("../../../../../examples/Icons/AdobeXD"));
var _Atlassian = _interopRequireDefault(require("../../../../../examples/Icons/Atlassian"));
var _Slack = _interopRequireDefault(require("../../../../../examples/Icons/Slack"));
var _Spotify = _interopRequireDefault(require("../../../../../examples/Icons/Spotify"));
var _Jira = _interopRequireDefault(require("../../../../../examples/Icons/Jira"));
var _Invision = _interopRequireDefault(require("../../../../../examples/Icons/Invision"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// @mui material components
// Vision UI Dashboard React components
// Images
const avatar1 = "/images/2df96e6c11f00cecbeaa96f1730fcfdd.png";
const avatar2 = "/images/7c99b2ffd2fb9b1787722b71928d208e.png";
const avatar3 = "/images/b0383ef7aa99a9f55a72687177c7a4f9.png";
const avatar4 = "/images/04572a1908e3180f7c31ad012b754f93.png";
function data() {
  const avatars = members => members.map(_ref => {
    let [image, name] = _ref;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tooltip.default, {
      title: name,
      placeholder: "bottom",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiAvatar.default, {
        src: image,
        alt: "name",
        size: "xs",
        sx: {
          border: _ref2 => {
            let {
              borders: {
                borderWidth
              },
              palette: {
                dark
              }
            } = _ref2;
            return `${borderWidth[2]} solid ${dark.focus}`;
          },
          cursor: "pointer",
          position: "relative",
          "&:not(:first-of-type)": {
            ml: -1.25
          },
          "&:hover, &:focus": {
            zIndex: "10"
          }
        }
      })
    }, name);
  });
  return {
    columns: [{
      name: "companies",
      align: "left"
    }, {
      name: "members",
      align: "left"
    }, {
      name: "budget",
      align: "center"
    }, {
      name: "completion",
      align: "center"
    }],
    rows: [{
      companies: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
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
      members: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
        display: "flex",
        py: 1,
        children: avatars([[avatar1, "Ryan Tompson"], [avatar2, "Romina Hadid"], [avatar3, "Alexander Smith"], [avatar4, "Jessica Doe"]])
      }),
      budget: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
        variant: "button",
        color: "white",
        fontWeight: "bold",
        children: "$14,000"
      }),
      completion: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
        width: "8rem",
        textAlign: "left",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
          color: "white",
          variant: "button",
          fontWeight: "bold",
          children: "60%"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiProgress.default, {
          value: 60,
          color: "info",
          label: false,
          sx: {
            background: "#2D2E5F"
          }
        })]
      })
    }, {
      companies: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
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
      members: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
        display: "flex",
        py: 1,
        children: avatars([[avatar2, "Romina Hadid"], [avatar4, "Jessica Doe"]])
      }),
      budget: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
        variant: "button",
        color: "white",
        fontWeight: "bold",
        children: "$3,000"
      }),
      completion: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
        width: "8rem",
        textAlign: "left",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
          color: "white",
          variant: "button",
          fontWeight: "bold",
          children: "10%"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiProgress.default, {
          value: 10,
          color: "info",
          label: false,
          sx: {
            background: "#2D2E5F"
          }
        })]
      })
    }, {
      companies: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
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
      members: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
        display: "flex",
        py: 1,
        children: avatars([[avatar1, "Ryan Tompson"], [avatar3, "Alexander Smith"]])
      }),
      budget: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
        variant: "button",
        color: "white",
        fontWeight: "bold",
        children: "Not set"
      }),
      completion: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
        width: "8rem",
        textAlign: "left",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
          color: "white",
          variant: "button",
          fontWeight: "bold",
          children: "100%"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiProgress.default, {
          value: 100,
          color: "info",
          label: false,
          sx: {
            background: "#2D2E5F"
          }
        })]
      })
    }, {
      companies: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
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
      members: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
        display: "flex",
        py: 1,
        children: avatars([[avatar4, "Jessica Doe"], [avatar3, "Alexander Smith"], [avatar2, "Romina Hadid"], [avatar1, "Ryan Tompson"]])
      }),
      budget: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
        variant: "button",
        color: "white",
        fontWeight: "bold",
        children: "$20,500"
      }),
      completion: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
        width: "8rem",
        textAlign: "left",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
          color: "white",
          variant: "button",
          fontWeight: "bold",
          children: "100%"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiProgress.default, {
          value: 100,
          color: "info",
          label: false,
          sx: {
            background: "#2D2E5F"
          }
        })]
      })
    }, {
      companies: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
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
      members: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
        display: "flex",
        py: 1,
        children: avatars([[avatar4, "Jessica Doe"]])
      }),
      budget: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
        variant: "button",
        color: "white",
        fontWeight: "bold",
        children: "$500"
      }),
      completion: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
        width: "8rem",
        textAlign: "left",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
          color: "white",
          variant: "button",
          fontWeight: "bold",
          children: "25%"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiProgress.default, {
          value: 25,
          color: "info",
          label: false,
          sx: {
            background: "#2D2E5F"
          }
        })]
      })
    }, {
      companies: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
        display: "flex",
        alignItems: "center",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Invision.default, {
          size: "20px"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
          pl: "16px",
          color: "white",
          variant: "button",
          fontWeight: "medium",
          children: "Redesign New Online Shop"
        })]
      }),
      members: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
        display: "flex",
        py: 1,
        children: avatars([[avatar1, "Ryan Tompson"], [avatar4, "Jessica Doe"]])
      }),
      budget: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
        variant: "button",
        color: "white",
        fontWeight: "bold",
        children: "$2,000"
      }),
      completion: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
        width: "8rem",
        textAlign: "left",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
          color: "white",
          variant: "button",
          fontWeight: "bold",
          children: "40%"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiProgress.default, {
          value: 40,
          color: "info",
          label: false,
          sx: {
            background: "#2D2E5F"
          }
        })]
      })
    }]
  };
}
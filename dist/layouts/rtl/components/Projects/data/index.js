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
const logoSlack = "./images/6f4a4127752dd745368d0f8476787a38.svg";
const logoSpotify = "./images/adcb47e6563de438a1f0db22e8de71aa.svg";
const logoJira = "./images/0547f456e09e69472bdeac283d731c8d.svg";
const logoInvesion = "./images/261b7e78256fe80c9d13033d4e9061dc.svg";
const avatar1 = "./images/2df96e6c11f00cecbeaa96f1730fcfdd.png";
const avatar2 = "./images/7c99b2ffd2fb9b1787722b71928d208e.png";
const avatar3 = "./images/b0383ef7aa99a9f55a72687177c7a4f9.png";
const avatar4 = "./images/04572a1908e3180f7c31ad012b754f93.png";
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
      name: "شركات",
      align: "left"
    }, {
      name: "أفراد",
      align: "left"
    }, {
      name: "تبرع",
      align: "center"
    }, {
      name: "انتهاء",
      align: "center"
    }],
    rows: [{
      شركات: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
        display: "flex",
        alignItems: "center",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_AdobeXD.default, {
          size: "20px"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
          pl: "16px",
          color: "white",
          variant: "button",
          fontWeight: "medium",
          children: "\u0625\u0635\u062F\u0627\u0631 Vision UI XD"
        })]
      }),
      أفراد: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
        display: "flex",
        py: 1,
        children: avatars([[avatar1, "Ryan Tompson"], [avatar2, "Romina Hadid"], [avatar3, "Alexander Smith"], [avatar4, "Jessica Doe"]])
      }),
      تبرع: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
        variant: "button",
        color: "white",
        fontWeight: "bold",
        children: "$14,000"
      }),
      انتهاء: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
        width: "8rem",
        textAlign: "left",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
          color: "white",
          variant: "button",
          fontWeight: "bold",
          children: "100%"
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
      شركات: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
        display: "flex",
        alignItems: "center",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Atlassian.default, {
          size: "20px"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
          pl: "16px",
          color: "white",
          variant: "button",
          fontWeight: "medium",
          children: "\u0625\u0636\u0627\u0641\u0629 \u0645\u0633\u0627\u0631 \u0627\u0644\u062A\u0642\u062F\u0645"
        })]
      }),
      أفراد: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
        display: "flex",
        py: 1,
        children: avatars([[avatar2, "Romina Hadid"], [avatar4, "Jessica Doe"]])
      }),
      تبرع: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
        variant: "button",
        color: "white",
        fontWeight: "bold",
        children: "$3,000"
      }),
      انتهاء: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
        width: "8rem",
        textAlign: "left",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
          color: "white",
          variant: "button",
          fontWeight: "bold",
          children: "100%"
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
      شركات: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
        display: "flex",
        alignItems: "center",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Slack.default, {
          size: "20px"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
          pl: "16px",
          color: "white",
          variant: "button",
          fontWeight: "medium",
          children: "\u0625\u0635\u0644\u0627\u062D \u0623\u062E\u0637\u0627\u0621 \u0627\u0644\u0646\u0638\u0627\u0645 \u0627\u0644\u0623\u0633\u0627\u0633\u064A"
        })]
      }),
      أفراد: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
        display: "flex",
        py: 1,
        children: avatars([[avatar1, "Ryan Tompson"], [avatar3, "Alexander Smith"]])
      }),
      تبرع: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
        variant: "button",
        color: "white",
        fontWeight: "bold",
        children: "\u063A\u064A\u0631 \u0645\u0636\u0628\u0648\u0637"
      }),
      انتهاء: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
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
      شركات: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
        display: "flex",
        alignItems: "center",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Spotify.default, {
          size: "20px"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
          pl: "16px",
          color: "white",
          variant: "button",
          fontWeight: "medium",
          children: "\u0625\u0637\u0644\u0627\u0642 \u062A\u0637\u0628\u064A\u0642 \u0627\u0644\u0647\u0627\u062A\u0641 \u0627\u0644\u0645\u062D\u0645\u0648\u0644 \u0627\u0644\u062E\u0627\u0635 \u0628\u0646\u0627"
        })]
      }),
      أفراد: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
        display: "flex",
        py: 1,
        children: avatars([[avatar4, "Jessica Doe"], [avatar3, "Alexander Smith"], [avatar2, "Romina Hadid"], [avatar1, "Ryan Tompson"]])
      }),
      تبرع: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
        variant: "button",
        color: "white",
        fontWeight: "bold",
        children: "$20,500"
      }),
      انتهاء: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
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
      شركات: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
        display: "flex",
        alignItems: "center",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Jira.default, {
          size: "20px"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
          pl: "16px",
          color: "white",
          variant: "button",
          fontWeight: "medium",
          children: "\u0623\u0636\u0641 \u0635\u0641\u062D\u0629 \u0627\u0644\u0623\u0633\u0639\u0627\u0631 \u0627\u0644\u062C\u062F\u064A\u062F\u0629"
        })]
      }),
      أفراد: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
        display: "flex",
        py: 1,
        children: avatars([[avatar4, "Jessica Doe"]])
      }),
      تبرع: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
        variant: "button",
        color: "white",
        fontWeight: "bold",
        children: "$500"
      }),
      انتهاء: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
        width: "8rem",
        textAlign: "left",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
          color: "white",
          variant: "button",
          fontWeight: "bold",
          children: "100%"
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
      شركات: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
        display: "flex",
        alignItems: "center",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Invision.default, {
          size: "20px"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
          pl: "16px",
          color: "white",
          variant: "button",
          fontWeight: "medium",
          children: "\u0625\u0639\u0627\u062F\u0629 \u062A\u0635\u0645\u064A\u0645 \u0645\u062A\u062C\u0631 \u062C\u062F\u064A\u062F \u0639\u0644\u0649 \u0627\u0644\u0625\u0646\u062A\u0631\u0646\u062A"
        })]
      }),
      أفراد: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
        display: "flex",
        py: 1,
        children: avatars([[avatar1, "Ryan Tompson"], [avatar4, "Jessica Doe"]])
      }),
      تبرع: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
        variant: "button",
        color: "white",
        fontWeight: "bold",
        children: "$2,000"
      }),
      انتهاء: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
        width: "8rem",
        textAlign: "left",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
          color: "white",
          variant: "button",
          fontWeight: "bold",
          children: "100%"
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
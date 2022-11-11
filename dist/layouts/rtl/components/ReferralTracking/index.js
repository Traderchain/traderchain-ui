"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _VuiBox = _interopRequireDefault(require("../../../../components/VuiBox"));
var _VuiTypography = _interopRequireDefault(require("../../../../components/VuiTypography"));
var _colors = _interopRequireDefault(require("../../../../assets/theme/base/colors"));
var _fa = require("react-icons/fa");
var _linearGradient = _interopRequireDefault(require("../../../../assets/theme/functions/linearGradient"));
var _CircularProgress = _interopRequireDefault(require("@mui/material/CircularProgress"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ReferralTracking() {
  const {
    info,
    gradients
  } = _colors.default;
  const {
    cardContent
  } = gradients;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Card, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
      sx: {
        width: '100%'
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-beetween",
        sx: {
          width: '100%'
        },
        mb: "40px",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
          variant: "lg",
          color: "white",
          mr: "auto",
          children: "\u062A\u062A\u0628\u0639 \u0627\u0644\u0625\u062D\u0627\u0644\u0629"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgColor: "#22234B",
          sx: {
            width: '37px',
            height: '37px',
            cursor: 'pointer',
            borderRadius: '12px'
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaEllipsisH, {
            color: info.main,
            size: "18px"
          })
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
        display: "flex",
        sx: _ref => {
          let {
            breakpoints
          } = _ref;
          return {
            [breakpoints.up('xs')]: {
              flexDirection: 'column',
              gap: '16px',
              justifyContent: 'center',
              alignItems: 'center'
            },
            [breakpoints.up('md')]: {
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center'
            }
          };
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
          direction: "column",
          spacing: "20px",
          width: "500px",
          maxWidth: "50%",
          sx: _ref2 => {
            let {
              breakpoints
            } = _ref2;
            return {
              mr: 'auto',
              [breakpoints.only('md')]: {
                mr: '75px'
              },
              [breakpoints.only('xl')]: {
                width: '500px',
                maxWidth: '38%'
              }
            };
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
            display: "flex",
            width: "220px",
            p: "20px 22px",
            flexDirection: "column",
            sx: _ref3 => {
              let {
                breakpoints
              } = _ref3;
              return {
                background: (0, _linearGradient.default)(cardContent.main, cardContent.state, cardContent.deg),
                borderRadius: '20px',
                [breakpoints.up('xl')]: {
                  maxWidth: '110px !important'
                },
                [breakpoints.up('xxl')]: {
                  minWidth: '180px',
                  maxWidth: '100% !important'
                }
              };
            },
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
              color: "text",
              variant: "button",
              fontWeight: "regular",
              mb: "5px",
              children: "\u0645\u062F\u0639\u0648"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
              color: "white",
              variant: "lg",
              fontWeight: "bold",
              children: "145 \u0634\u062E\u0635\u0627"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
            display: "flex",
            width: "220px",
            p: "20px 22px",
            mb: "20px",
            flexDirection: "column",
            sx: _ref4 => {
              let {
                breakpoints
              } = _ref4;
              return {
                background: (0, _linearGradient.default)(cardContent.main, cardContent.state, cardContent.deg),
                borderRadius: '20px',
                [breakpoints.up('xl')]: {
                  maxWidth: '110px !important'
                },
                [breakpoints.up('xxl')]: {
                  minWidth: '180px',
                  maxWidth: '100% !important'
                }
              };
            },
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
              color: "text",
              variant: "button",
              fontWeight: "regular",
              mb: "5px",
              children: "\u0639\u0644\u0627\u0648\u0629"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
              color: "white",
              variant: "lg",
              fontWeight: "bold",
              children: "1,465"
            })]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
          sx: {
            position: 'relative',
            display: 'inline-flex'
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_CircularProgress.default, {
            variant: "determinate",
            value: 70,
            size: window.innerWidth >= 1024 ? 200 : window.innerWidth >= 768 ? 170 : 200,
            color: "success"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
            sx: {
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
                color: "text",
                variant: "button",
                mb: "4px",
                children: "\u0623\u0645\u0627\u0646"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
                color: "white",
                variant: "d5",
                fontWeight: "bold",
                mb: "4px",
                children: "9.3"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
                color: "text",
                variant: "button",
                children: "\u0645\u062C\u0645\u0648\u0639 \u0627\u0644\u0646\u0642\u0627\u0637"
              })]
            })
          })]
        })]
      })]
    })
  });
}
var _default = ReferralTracking;
exports.default = _default;
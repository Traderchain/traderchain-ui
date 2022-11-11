"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _VuiBox = _interopRequireDefault(require("../../../../components/VuiBox"));
var _VuiTypography = _interopRequireDefault(require("../../../../components/VuiTypography"));
var _io = require("react-icons/io5");
var _colors = _interopRequireDefault(require("../../../../assets/theme/base/colors"));
var _linearGradient = _interopRequireDefault(require("../../../../assets/theme/functions/linearGradient"));
var _CircularProgress = _interopRequireDefault(require("@mui/material/CircularProgress"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const SatisfactionRate = () => {
  const {
    info,
    gradients
  } = _colors.default;
  const {
    cardContent
  } = gradients;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Card, {
    sx: {
      height: '340px'
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
      display: "flex",
      flexDirection: "column",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
        variant: "lg",
        color: "white",
        fontWeight: "bold",
        mb: "4px",
        children: "Satisfaction Rate"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
        variant: "button",
        color: "text",
        fontWeight: "regular",
        mb: "20px",
        children: "From all projects"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
        sx: {
          alignSelf: 'center',
          justifySelf: 'center',
          zIndex: '-1'
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
          sx: {
            position: 'relative',
            display: 'inline-flex'
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_CircularProgress.default, {
            variant: "determinate",
            value: 60,
            size: 170,
            color: "info"
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
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
              sx: {
                background: info.main,
                transform: 'translateY(-50%)',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_io.IoHappy, {
                size: "30px",
                color: "#fff"
              })
            })
          })]
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
        sx: _ref => {
          let {
            breakpoints
          } = _ref;
          return {
            width: '90%',
            padding: '18px 22px',
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            height: '82px',
            mx: 'auto',
            borderRadius: '20px',
            background: (0, _linearGradient.default)(cardContent.main, cardContent.state, cardContent.deg),
            transform: 'translateY(-90%)',
            zIndex: '1000'
          };
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
          color: "text",
          variant: "caption",
          display: "inline-block",
          fontWeight: "regular",
          children: "0%"
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
          flexDirection: "column",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          sx: {
            minWidth: '80px'
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
            color: "white",
            variant: "h3",
            children: "95%"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
            color: "text",
            variant: "caption",
            fontWeight: "regular",
            children: "Based on likes"
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
          color: "text",
          variant: "caption",
          display: "inline-block",
          fontWeight: "regular",
          children: "100%"
        })]
      })]
    })
  });
};
var _default = SatisfactionRate;
exports.default = _default;
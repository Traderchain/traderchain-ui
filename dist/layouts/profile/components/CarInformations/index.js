"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _VuiBox = _interopRequireDefault(require("../../../../components/VuiBox"));
var _VuiTypography = _interopRequireDefault(require("../../../../components/VuiTypography"));
var _linearGradient = _interopRequireDefault(require("../../../../assets/theme/functions/linearGradient"));
var _colors = _interopRequireDefault(require("../../../../assets/theme/base/colors"));
var _LineChart = _interopRequireDefault(require("../../../../examples/Charts/LineCharts/LineChart"));
var _charts = require("../../../../variables/charts");
var _CircularProgress = _interopRequireDefault(require("@mui/material/CircularProgress"));
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
const GreenLightning = "./images/a2ba788808772f31a3d8ef895f6ba6cf.svg";
const WhiteLightning = "./images/3f0ffb2f7d7f10a2bad2b387fd91c3cb.svg";
const carProfile = "./images/1d7e1fbbdff516d910fe646808198fcd.svg";
const CarInformations = () => {
  const {
    gradients,
    info
  } = _colors.default;
  const {
    cardContent
  } = gradients;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Card, {
    sx: _ref => {
      let {
        breakpoints
      } = _ref;
      return {
        [breakpoints.up('xxl')]: {
          maxHeight: '400px'
        }
      };
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
      display: "flex",
      flexDirection: "column",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
        variant: "lg",
        color: "white",
        fontWeight: "bold",
        mb: "6px",
        children: "Car Informations"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
        variant: "button",
        color: "text",
        fontWeight: "regular",
        mb: "30px",
        children: "Hello, Mark Johnson! Your Car is ready."
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Stack, {
        spacing: "24px",
        background: "#fff",
        sx: _ref2 => {
          let {
            breakpoints
          } = _ref2;
          return {
            [breakpoints.up('sm')]: {
              flexDirection: 'column'
            },
            [breakpoints.up('md')]: {
              flexDirection: 'row'
            },
            [breakpoints.only('xl')]: {
              flexDirection: 'column'
            }
          };
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          sx: _ref3 => {
            let {
              breakpoints
            } = _ref3;
            return {
              [breakpoints.only('sm')]: {
                alignItems: 'center'
              }
            };
          },
          alignItems: "center",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
            sx: {
              position: 'relative',
              display: 'inline-flex'
            },
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_CircularProgress.default, {
              variant: "determinate",
              value: 60,
              size: 170,
              color: "info"
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
                component: "img",
                src: GreenLightning
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
                color: "white",
                variant: "h2",
                mt: "6px",
                fontWeight: "bold",
                mb: "4px",
                children: "68%"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
                color: "text",
                variant: "caption",
                children: "Current Load"
              })]
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            sx: {
              textAlign: 'center'
            },
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
              color: "white",
              variant: "lg",
              fontWeight: "bold",
              mb: "2px",
              mt: "18px",
              children: "0h 58 min"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
              color: "text",
              variant: "button",
              fontWeight: "regular",
              children: "Time to full charge"
            })]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Grid, {
          container: true,
          sx: _ref4 => {
            let {
              breakpoints
            } = _ref4;
            return {
              spacing: '24px',
              [breakpoints.only('sm')]: {
                columnGap: '0px',
                rowGap: '24px'
              },
              [breakpoints.up('md')]: {
                gap: '24px',
                ml: '50px !important'
              },
              [breakpoints.only('xl')]: {
                gap: '12px',
                mx: 'auto !important'
              }
            };
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
            item: true,
            xs: 12,
            md: 5.5,
            xl: 5.8,
            xxl: 5.5,
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
              display: "flex",
              p: "18px",
              alignItems: "center",
              sx: {
                background: (0, _linearGradient.default)(cardContent.main, cardContent.state, cardContent.deg),
                minHeight: '110px',
                borderRadius: '20px'
              },
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
                display: "flex",
                flexDirection: "column",
                mr: "auto",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
                  color: "text",
                  variant: "caption",
                  fontWeight: "medium",
                  mb: "2px",
                  children: "Battery Health"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
                  color: "white",
                  variant: "h4",
                  fontWeight: "bold",
                  sx: _ref5 => {
                    let {
                      breakpoints
                    } = _ref5;
                    return {
                      [breakpoints.only('xl')]: {
                        fontSize: '20px'
                      }
                    };
                  },
                  children: "76%"
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                sx: {
                  background: info.main,
                  borderRadius: '12px',
                  width: '56px',
                  height: '56px'
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
                  component: "img",
                  src: carProfile
                })
              })]
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
            item: true,
            xs: 12,
            md: 5.5,
            xl: 5.8,
            xxl: 5.5,
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
              display: "flex",
              p: "18px",
              alignItems: "center",
              sx: {
                background: (0, _linearGradient.default)(cardContent.main, cardContent.state, cardContent.deg),
                borderRadius: '20px'
              },
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
                display: "flex",
                flexDirection: "column",
                mr: "auto",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
                  color: "text",
                  variant: "caption",
                  fontWeight: "medium",
                  mb: "2px",
                  children: "Efficiency"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
                  color: "white",
                  variant: "h4",
                  fontWeight: "bold",
                  sx: _ref6 => {
                    let {
                      breakpoints
                    } = _ref6;
                    return {
                      [breakpoints.only('xl')]: {
                        fontSize: '20px'
                      }
                    };
                  },
                  children: "+20%"
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
                sx: {
                  maxHeight: '75px'
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_LineChart.default, {
                  lineChartData: _charts.lineChartDataProfile1,
                  lineChartOptions: _charts.lineChartOptionsProfile1
                })
              })]
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
            item: true,
            xs: 12,
            md: 5.5,
            xl: 5.8,
            xxl: 5.5,
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
              display: "flex",
              p: "18px",
              alignItems: "center",
              sx: {
                background: (0, _linearGradient.default)(cardContent.main, cardContent.state, cardContent.deg),
                borderRadius: '20px',
                minHeight: '110px'
              },
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
                display: "flex",
                flexDirection: "column",
                mr: "auto",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
                  color: "text",
                  variant: "caption",
                  fontWeight: "medium",
                  mb: "2px",
                  children: "Consumption"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
                  color: "white",
                  variant: "h4",
                  fontWeight: "bold",
                  sx: _ref7 => {
                    let {
                      breakpoints
                    } = _ref7;
                    return {
                      [breakpoints.only('xl')]: {
                        fontSize: '20px'
                      }
                    };
                  },
                  children: "163W/km"
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                sx: {
                  background: info.main,
                  borderRadius: '12px',
                  width: '56px',
                  height: '56px'
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
                  component: "img",
                  src: WhiteLightning
                })
              })]
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
            item: true,
            xs: 12,
            md: 5.5,
            xl: 5.8,
            xxl: 5.5,
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
              display: "flex",
              p: "18px",
              alignItems: "center",
              sx: {
                background: (0, _linearGradient.default)(cardContent.main, cardContent.state, cardContent.deg),
                borderRadius: '20px'
              },
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
                display: "flex",
                flexDirection: "column",
                mr: "auto",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
                  color: "text",
                  variant: "caption",
                  fontWeight: "medium",
                  mb: "2px",
                  children: "This Week"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
                  color: "white",
                  variant: "h4",
                  fontWeight: "bold",
                  sx: _ref8 => {
                    let {
                      breakpoints
                    } = _ref8;
                    return {
                      [breakpoints.only('xl')]: {
                        fontSize: '20px'
                      }
                    };
                  },
                  children: "1.342km"
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
                sx: {
                  maxHeight: '75px'
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_LineChart.default, {
                  lineChartData: _charts.lineChartDataProfile2,
                  lineChartOptions: _charts.lineChartOptionsProfile2
                })
              })]
            })
          })]
        })]
      })]
    })
  });
};
var _default = CarInformations;
exports.default = _default;
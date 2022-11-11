"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _material = require("@mui/material");
var _Grid = _interopRequireDefault(require("@mui/material/Grid"));
var _colors = _interopRequireDefault(require("../../assets/theme/base/colors"));
var _linearGradient = _interopRequireDefault(require("../../assets/theme/functions/linearGradient"));
var _VuiBox = _interopRequireDefault(require("../../components/VuiBox"));
var _VuiProgress = _interopRequireDefault(require("../../components/VuiProgress"));
var _VuiTypography = _interopRequireDefault(require("../../components/VuiTypography"));
var _context = require("../../context");
var _MiniStatisticsCard = _interopRequireDefault(require("../../examples/Cards/StatisticsCards/MiniStatisticsCard"));
var _BarChart = _interopRequireDefault(require("../../examples/Charts/BarCharts/BarChart"));
var _LineChart = _interopRequireDefault(require("../../examples/Charts/LineCharts/LineChart"));
var _Footer = _interopRequireDefault(require("../../examples/Footer"));
var _DashboardLayout = _interopRequireDefault(require("../../examples/LayoutContainers/DashboardLayout"));
var _DashboardNavbar = _interopRequireDefault(require("../../examples/Navbars/DashboardNavbar"));
var _OrderOverview = _interopRequireDefault(require("./components/OrderOverview"));
var _Projects = _interopRequireDefault(require("./components/Projects"));
var _ReferralTracking = _interopRequireDefault(require("./components/ReferralTracking"));
var _SatisfactionRate = _interopRequireDefault(require("./components/SatisfactionRate"));
var _WelcomeMark = _interopRequireDefault(require("./components/WelcomeMark"));
var _barChartData = require("./data/barChartData");
var _barChartOptions = require("./data/barChartOptions");
var _lineChartData = require("./data/lineChartData");
var _lineChartOptions = require("./data/lineChartOptions");
var _react = require("react");
var _fa = require("react-icons/fa");
var _io = require("react-icons/io");
var _io2 = require("react-icons/io5");
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

// Vision UI Dashboard React base styles

// Vision UI Dashboard React components

// Vision UI Dashboard React contexts

// Data

// Vision UI Dashboard React example components

// Dashboard layout components

// React icons

function RTL() {
  const {
    gradients
  } = _colors.default;
  const {
    cardContent
  } = gradients;
  const [, dispatch] = (0, _context.useVisionUIController)();

  // Changing the direction to rtl
  (0, _react.useEffect)(() => {
    (0, _context.setDirection)(dispatch, "rtl");
    return () => (0, _context.setDirection)(dispatch, "ltr");
  }, []);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_DashboardLayout.default, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_DashboardNavbar.default, {}), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
      py: 3,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
        mb: 3,
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Grid.default, {
          container: true,
          spacing: 3,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid.default, {
            item: true,
            xs: 12,
            sm: 6,
            xl: 3,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_MiniStatisticsCard.default, {
              title: {
                text: "أموال اليوم",
                fontWeight: "regular"
              },
              count: "$53,000",
              percentage: {
                color: "success",
                text: "+55%"
              },
              icon: {
                color: "info",
                component: /*#__PURE__*/(0, _jsxRuntime.jsx)(_io2.IoWallet, {
                  size: "22px",
                  color: "white"
                })
              }
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid.default, {
            item: true,
            xs: 12,
            sm: 6,
            xl: 3,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_MiniStatisticsCard.default, {
              title: {
                text: "مستخدمي اليوم"
              },
              count: "2,300",
              percentage: {
                color: "success",
                text: "+3%"
              },
              icon: {
                color: "info",
                component: /*#__PURE__*/(0, _jsxRuntime.jsx)(_io2.IoGlobe, {
                  size: "22px",
                  color: "white"
                })
              }
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid.default, {
            item: true,
            xs: 12,
            sm: 6,
            xl: 3,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_MiniStatisticsCard.default, {
              title: {
                text: "عملاء جدد"
              },
              count: "+3,462",
              percentage: {
                color: "error",
                text: "-2%"
              },
              icon: {
                color: "info",
                component: /*#__PURE__*/(0, _jsxRuntime.jsx)(_io2.IoDocumentText, {
                  size: "22px",
                  color: "white"
                })
              }
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid.default, {
            item: true,
            xs: 12,
            sm: 6,
            xl: 3,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_MiniStatisticsCard.default, {
              title: {
                text: "إجمالي المبيعات"
              },
              count: "$103,430",
              percentage: {
                color: "success",
                text: "+5%"
              },
              icon: {
                color: "info",
                component: /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaShoppingCart, {
                  size: "20px",
                  color: "white"
                })
              }
            })
          })]
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
        mb: 3,
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Grid.default, {
          container: true,
          spacing: "18px",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid.default, {
            item: true,
            xs: 12,
            xl: 5,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_WelcomeMark.default, {})
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid.default, {
            item: true,
            xs: 12,
            lg: 6,
            xl: 3,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_SatisfactionRate.default, {})
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid.default, {
            item: true,
            xs: 12,
            lg: 6,
            xl: 4,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ReferralTracking.default, {})
          })]
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
        mb: 3,
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Grid.default, {
          container: true,
          spacing: 3,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid.default, {
            item: true,
            xs: 12,
            lg: 7,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Card, {
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
                sx: {
                  height: "100%"
                },
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
                  variant: "lg",
                  color: "white",
                  fontWeight: "bold",
                  mb: "5px",
                  children: "\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629 \u0639\u0644\u0649 \u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
                  display: "flex",
                  alignItems: "center",
                  mb: "40px",
                  children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiTypography.default, {
                    variant: "button",
                    color: "success",
                    fontWeight: "bold",
                    children: ["+ 5\u066A \u0623\u0643\u062B\u0631", /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
                      variant: "button",
                      color: "text",
                      fontWeight: "regular",
                      children: "\u0641\u064A \u0639\u0627\u0645 2021"
                    })]
                  })
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
                  sx: {
                    height: "310px"
                  },
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_LineChart.default, {
                    lineChartData: _lineChartData.lineChartDataDashboard,
                    lineChartOptions: _lineChartOptions.lineChartOptionsDashboard
                  })
                })]
              })
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid.default, {
            item: true,
            xs: 12,
            lg: 5,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Card, {
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
                  mb: "24px",
                  height: "220px",
                  sx: {
                    background: (0, _linearGradient.default)(cardContent.main, cardContent.state, cardContent.deg),
                    borderRadius: "20px"
                  },
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_BarChart.default, {
                    barChartData: _barChartData.barChartDataDashboard,
                    barChartOptions: _barChartOptions.barChartOptionsDashboard
                  })
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
                  variant: "lg",
                  color: "white",
                  fontWeight: "bold",
                  mb: "5px",
                  children: "\u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646 \u0627\u0644\u0646\u0634\u0637\u064A\u0646"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
                  display: "flex",
                  alignItems: "center",
                  mb: "40px",
                  children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiTypography.default, {
                    variant: "button",
                    color: "success",
                    fontWeight: "bold",
                    children: ["(+23)", /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
                      variant: "button",
                      color: "text",
                      fontWeight: "regular",
                      children: "\u0645\u0646 \u0627\u0644\u0623\u0633\u0628\u0648\u0639 \u0627\u0644\u0645\u0627\u0636\u064A"
                    })]
                  })
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Grid.default, {
                  container: true,
                  spacing: "50px",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Grid.default, {
                    item: true,
                    xs: 6,
                    md: 3,
                    lg: 3,
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Stack, {
                      direction: "row",
                      spacing: {
                        sm: "10px",
                        xl: "4px",
                        xxl: "10px"
                      },
                      mb: "6px",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
                        bgColor: "info",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        sx: {
                          borderRadius: "6px",
                          width: "25px",
                          height: "25px"
                        },
                        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_io2.IoWallet, {
                          color: "#fff",
                          size: "12px"
                        })
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
                        color: "text",
                        variant: "button",
                        fontWeight: "medium",
                        children: "\u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u0648\u0646"
                      })]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
                      color: "white",
                      variant: "lg",
                      fontWeight: "bold",
                      mb: "8px",
                      children: "32,984"
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiProgress.default, {
                      value: 60,
                      color: "info",
                      sx: {
                        background: "#2D2E5F"
                      }
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Grid.default, {
                    item: true,
                    xs: 6,
                    md: 3,
                    lg: 3,
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Stack, {
                      direction: "row",
                      spacing: {
                        sm: "10px",
                        xl: "4px",
                        xxl: "10px"
                      },
                      mb: "6px",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
                        bgColor: "info",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        sx: {
                          borderRadius: "6px",
                          width: "25px",
                          height: "25px"
                        },
                        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_io.IoIosRocket, {
                          color: "#fff",
                          size: "12px"
                        })
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
                        color: "text",
                        variant: "button",
                        fontWeight: "medium",
                        children: "\u0646\u0642\u0631\u0627\u062A"
                      })]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
                      color: "white",
                      variant: "lg",
                      fontWeight: "bold",
                      mb: "8px",
                      children: "2,42M"
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiProgress.default, {
                      value: 60,
                      color: "info",
                      sx: {
                        background: "#2D2E5F"
                      }
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Grid.default, {
                    item: true,
                    xs: 6,
                    md: 3,
                    lg: 3,
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Stack, {
                      direction: "row",
                      spacing: {
                        sm: "10px",
                        xl: "4px",
                        xxl: "10px"
                      },
                      mb: "6px",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
                        bgColor: "info",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        sx: {
                          borderRadius: "6px",
                          width: "25px",
                          height: "25px"
                        },
                        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaShoppingCart, {
                          color: "#fff",
                          size: "12px"
                        })
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
                        color: "text",
                        variant: "button",
                        fontWeight: "medium",
                        children: "\u0645\u0628\u064A\u0639\u0627\u062A"
                      })]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
                      color: "white",
                      variant: "lg",
                      fontWeight: "bold",
                      mb: "8px",
                      children: "2,400$"
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiProgress.default, {
                      value: 60,
                      color: "info",
                      sx: {
                        background: "#2D2E5F"
                      }
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Grid.default, {
                    item: true,
                    xs: 6,
                    md: 3,
                    lg: 3,
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Stack, {
                      direction: "row",
                      spacing: {
                        sm: "10px",
                        xl: "4px",
                        xxl: "10px"
                      },
                      mb: "6px",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
                        bgColor: "info",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        sx: {
                          borderRadius: "6px",
                          width: "25px",
                          height: "25px"
                        },
                        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_io2.IoBuild, {
                          color: "#fff",
                          size: "12px"
                        })
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
                        color: "text",
                        variant: "button",
                        fontWeight: "medium",
                        children: "\u0627\u0644\u0639\u0646\u0627\u0635\u0631"
                      })]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
                      color: "white",
                      variant: "lg",
                      fontWeight: "bold",
                      mb: "8px",
                      children: "320"
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiProgress.default, {
                      value: 60,
                      color: "info",
                      sx: {
                        background: "#2D2E5F"
                      }
                    })]
                  })]
                })]
              })
            })
          })]
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Grid.default, {
        container: true,
        spacing: 3,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid.default, {
          item: true,
          xs: 12,
          md: 6,
          lg: 8,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Projects.default, {})
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid.default, {
          item: true,
          xs: 12,
          md: 6,
          lg: 4,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_OrderOverview.default, {})
        })]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Footer.default, {})]
  });
}
var _default = RTL;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Grid = _interopRequireDefault(require("@mui/material/Grid"));
var _Icon = _interopRequireDefault(require("@mui/material/Icon"));
var _material = require("@mui/material");
var _VuiBox = _interopRequireDefault(require("../../components/VuiBox"));
var _VuiTypography = _interopRequireDefault(require("../../components/VuiTypography"));
var _VuiProgress = _interopRequireDefault(require("../../components/VuiProgress"));
var _DashboardLayout = _interopRequireDefault(require("../../examples/LayoutContainers/DashboardLayout"));
var _DashboardNavbar = _interopRequireDefault(require("../../examples/Navbars/DashboardNavbar"));
var _Footer = _interopRequireDefault(require("../../examples/Footer"));
var _MiniStatisticsCard = _interopRequireDefault(require("../../examples/Cards/StatisticsCards/MiniStatisticsCard"));
var _linearGradient = _interopRequireDefault(require("../../assets/theme/functions/linearGradient"));
var _typography = _interopRequireDefault(require("../../assets/theme/base/typography"));
var _colors = _interopRequireDefault(require("../../assets/theme/base/colors"));
var _WelcomeMark = _interopRequireDefault(require("./components/WelcomeMark"));
var _Projects = _interopRequireDefault(require("./components/Projects"));
var _OrderOverview = _interopRequireDefault(require("./components/OrderOverview"));
var _SatisfactionRate = _interopRequireDefault(require("./components/SatisfactionRate"));
var _ReferralTracking = _interopRequireDefault(require("./components/ReferralTracking"));
var _io = require("react-icons/io");
var _io2 = require("react-icons/io5");
var _fa = require("react-icons/fa");
var _LineChart = _interopRequireDefault(require("../../examples/Charts/LineCharts/LineChart"));
var _BarChart = _interopRequireDefault(require("../../examples/Charts/BarCharts/BarChart"));
var _lineChartData = require("./data/lineChartData");
var _lineChartOptions = require("./data/lineChartOptions");
var _barChartData = require("./data/barChartData");
var _barChartOptions = require("./data/barChartOptions");
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

// Vision UI Dashboard React example components

// Vision UI Dashboard React base styles

// Dashboard layout components

// React icons

// Data

function Dashboard() {
  const {
    gradients
  } = _colors.default;
  const {
    cardContent
  } = gradients;
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
            md: 6,
            xl: 3,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_MiniStatisticsCard.default, {
              title: {
                text: "today's money",
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
            md: 6,
            xl: 3,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_MiniStatisticsCard.default, {
              title: {
                text: "today's users"
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
            md: 6,
            xl: 3,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_MiniStatisticsCard.default, {
              title: {
                text: "new clients"
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
            md: 6,
            xl: 3,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_MiniStatisticsCard.default, {
              title: {
                text: "total sales"
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
            lg: 12,
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
            lg: 6,
            xl: 7,
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
                  children: "Sales Overview"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
                  display: "flex",
                  alignItems: "center",
                  mb: "40px",
                  children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiTypography.default, {
                    variant: "button",
                    color: "success",
                    fontWeight: "bold",
                    children: ["+5% more", " ", /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
                      variant: "button",
                      color: "text",
                      fontWeight: "regular",
                      children: "in 2021"
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
            lg: 6,
            xl: 5,
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
                  children: "Active Users"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
                  display: "flex",
                  alignItems: "center",
                  mb: "40px",
                  children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiTypography.default, {
                    variant: "button",
                    color: "success",
                    fontWeight: "bold",
                    children: ["(+23)", " ", /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
                      variant: "button",
                      color: "text",
                      fontWeight: "regular",
                      children: "than last week"
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
                        children: "Users"
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
                        children: "Clicks"
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
                        children: "Sales"
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
                        children: "Items"
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
        direction: "row",
        justifyContent: "center",
        alignItems: "stretch",
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
var _default = Dashboard;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Card = _interopRequireDefault(require("@mui/material/Card"));
var _VuiBox = _interopRequireDefault(require("../../components/VuiBox"));
var _VuiTypography = _interopRequireDefault(require("../../components/VuiTypography"));
var _DashboardLayout = _interopRequireDefault(require("../../examples/LayoutContainers/DashboardLayout"));
var _DashboardNavbar = _interopRequireDefault(require("../../examples/Navbars/DashboardNavbar"));
var _Footer = _interopRequireDefault(require("../../examples/Footer"));
var _Table = _interopRequireDefault(require("../../examples/Tables/Table"));
var _authorsTableData = _interopRequireDefault(require("./data/authorsTableData"));
var _projectsTableData = _interopRequireDefault(require("./data/projectsTableData"));
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

// Data

function Tables() {
  const {
    columns,
    rows
  } = _authorsTableData.default;
  const {
    columns: prCols,
    rows: prRows
  } = _projectsTableData.default;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_DashboardLayout.default, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_DashboardNavbar.default, {}), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
      py: 3,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
        mb: 3,
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Card.default, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: "22px",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
              variant: "lg",
              color: "white",
              children: "Authors table"
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
            sx: {
              "& th": {
                borderBottom: _ref => {
                  let {
                    borders: {
                      borderWidth
                    },
                    palette: {
                      grey
                    }
                  } = _ref;
                  return `${borderWidth[1]} solid ${grey[700]}`;
                }
              },
              "& .MuiTableRow-root:not(:last-child)": {
                "& td": {
                  borderBottom: _ref2 => {
                    let {
                      borders: {
                        borderWidth
                      },
                      palette: {
                        grey
                      }
                    } = _ref2;
                    return `${borderWidth[1]} solid ${grey[700]}`;
                  }
                }
              }
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Table.default, {
              columns: columns,
              rows: rows
            })
          })]
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Card.default, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
            variant: "lg",
            color: "white",
            children: "Projects table"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
          sx: {
            "& th": {
              borderBottom: _ref3 => {
                let {
                  borders: {
                    borderWidth
                  },
                  palette: {
                    grey
                  }
                } = _ref3;
                return `${borderWidth[1]} solid ${grey[700]}`;
              }
            },
            "& .MuiTableRow-root:not(:last-child)": {
              "& td": {
                borderBottom: _ref4 => {
                  let {
                    borders: {
                      borderWidth
                    },
                    palette: {
                      grey
                    }
                  } = _ref4;
                  return `${borderWidth[1]} solid ${grey[700]}`;
                }
              }
            }
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Table.default, {
            columns: prCols,
            rows: prRows
          })
        })]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Footer.default, {})]
  });
}
var _default = Tables;
exports.default = _default;
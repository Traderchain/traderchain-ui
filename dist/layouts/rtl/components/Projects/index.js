"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _Card = _interopRequireDefault(require("@mui/material/Card"));
var _Icon = _interopRequireDefault(require("@mui/material/Icon"));
var _Menu = _interopRequireDefault(require("@mui/material/Menu"));
var _MenuItem = _interopRequireDefault(require("@mui/material/MenuItem"));
var _bs = require("react-icons/bs");
var _VuiBox = _interopRequireDefault(require("../../../../components/VuiBox"));
var _VuiTypography = _interopRequireDefault(require("../../../../components/VuiTypography"));
var _Table = _interopRequireDefault(require("../../../../examples/Tables/Table"));
var _data = _interopRequireDefault(require("./data"));
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

// Vision UI Dashboard Materail-UI example components

// Data

function Projects() {
  const {
    columns,
    rows
  } = (0, _data.default)();
  const [menu, setMenu] = (0, _react.useState)(null);
  const openMenu = _ref => {
    let {
      currentTarget
    } = _ref;
    return setMenu(currentTarget);
  };
  const closeMenu = () => setMenu(null);
  const renderMenu = /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Menu.default, {
    id: "simple-menu",
    anchorEl: menu,
    anchorOrigin: {
      vertical: "top",
      horizontal: "left"
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "right"
    },
    open: Boolean(menu),
    onClose: closeMenu,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem.default, {
      onClick: closeMenu,
      children: "\u0639\u0645\u0644"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem.default, {
      onClick: closeMenu,
      children: "\u0639\u0645\u0644 \u0622\u062E\u0631"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem.default, {
      onClick: closeMenu,
      children: "\u0634\u064A\u0621 \u0622\u062E\u0631"
    })]
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Card.default, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      mb: "32px",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
          color: "white",
          variant: "lg",
          mb: "6px",
          gutterBottom: true,
          children: "\u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639"
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
          display: "flex",
          alignItems: "center",
          lineHeight: 0,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_bs.BsCheckCircleFill, {
            color: "green",
            size: "15px"
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiTypography.default, {
            variant: "button",
            fontWeight: "regular",
            color: "text",
            ml: "5px",
            children: ["\xA0", /*#__PURE__*/(0, _jsxRuntime.jsx)("strong", {
              children: "30 \u0627\u0646\u062A\u0647\u0649"
            }), " \u0647\u0630\u0627 \u0627\u0644\u0634\u0647\u0631"]
          })]
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
        color: "text",
        px: 2,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.default, {
          sx: {
            cursor: "pointer",
            fontWeight: "bold"
          },
          fontSize: "small",
          onClick: openMenu,
          children: "more_vert"
        })
      }), renderMenu]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
      sx: {
        "& th": {
          borderBottom: _ref2 => {
            let {
              borders: {
                borderWidth,
                borderColor
              }
            } = _ref2;
            return `${borderWidth[1]} solid ${borderColor.grey}`;
          }
        },
        "& .MuiTableRow-root:not(:last-child)": {
          "& td": {
            borderBottom: _ref3 => {
              let {
                borders: {
                  borderWidth,
                  borderColor
                }
              } = _ref3;
              return `${borderWidth[1]} solid ${borderColor.grey}`;
            }
          }
        }
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Table.default, {
        columns: columns,
        rows: rows
      })
    })]
  });
}
var _default = Projects;
exports.default = _default;
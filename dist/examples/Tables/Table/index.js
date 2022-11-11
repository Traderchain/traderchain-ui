"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _uuid = require("uuid");
var _material = require("@mui/material");
var _TableBody = _interopRequireDefault(require("@mui/material/TableBody"));
var _TableContainer = _interopRequireDefault(require("@mui/material/TableContainer"));
var _TableRow = _interopRequireDefault(require("@mui/material/TableRow"));
var _VuiBox = _interopRequireDefault(require("../../../components/VuiBox"));
var _VuiAvatar = _interopRequireDefault(require("../../../components/VuiAvatar"));
var _VuiTypography = _interopRequireDefault(require("../../../components/VuiTypography"));
var _colors = _interopRequireDefault(require("../../../assets/theme/base/colors"));
var _typography = _interopRequireDefault(require("../../../assets/theme/base/typography"));
var _borders = _interopRequireDefault(require("../../../assets/theme/base/borders"));
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

// prop-types is a library for typechecking of props

// uuid is a library for generating unique id

// @mui material components

// Vision UI Dashboard React components

// Vision UI Dashboard React base styles

function Table(_ref) {
  let {
    columns,
    rows
  } = _ref;
  const {
    grey
  } = _colors.default;
  const {
    size,
    fontWeightBold
  } = _typography.default;
  const {
    borderWidth
  } = _borders.default;
  const renderColumns = columns.map((_ref2, key) => {
    let {
      name,
      align,
      width
    } = _ref2;
    let pl;
    let pr;
    if (key === 0) {
      pl = 3;
      pr = 3;
    } else if (key === columns.length - 1) {
      pl = 3;
      pr = 3;
    } else {
      pl = 1;
      pr = 1;
    }
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
      component: "th",
      width: width || "auto",
      pt: 1.5,
      pb: 1.25,
      pl: align === "left" ? pl : 3,
      pr: align === "right" ? pr : 3,
      textAlign: align,
      fontSize: size.xxs,
      fontWeight: fontWeightBold,
      color: "text",
      opacity: 0.7,
      borderBottom: `${borderWidth[1]} solid ${grey[700]}`,
      children: name.toUpperCase()
    }, name);
  });
  const renderRows = rows.map((row, key) => {
    const rowKey = `row-${key}`;
    const tableRow = columns.map(_ref3 => {
      let {
        name,
        align
      } = _ref3;
      let template;
      if (Array.isArray(row[name])) {
        template = /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
          component: "td",
          p: 1,
          borderBottom: row.hasBorder ? `${borderWidth[1]} solid ${light.main}` : null,
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
            display: "flex",
            alignItems: "center",
            py: 0.5,
            px: 1,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
              mr: 2,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiAvatar.default, {
                src: row[name][0],
                name: row[name][1],
                variant: "rounded",
                size: "sm"
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
              color: "white",
              variant: "button",
              fontWeight: "medium",
              sx: {
                width: "max-content"
              },
              children: row[name][1]
            })]
          })
        }, (0, _uuid.v4)());
      } else {
        template = /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
          component: "td",
          p: 1,
          textAlign: align,
          borderBottom: row.hasBorder ? `${borderWidth[1]} solid ${grey[700]}` : null,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
            variant: "button",
            fontWeight: "regular",
            color: "text",
            sx: {
              display: "inline-block",
              width: "max-content"
            },
            children: row[name]
          })
        }, (0, _uuid.v4)());
      }
      return template;
    });
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_TableRow.default, {
      children: tableRow
    }, rowKey);
  });
  return (0, _react.useMemo)(() => /*#__PURE__*/(0, _jsxRuntime.jsx)(_TableContainer.default, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Table, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
        component: "thead",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TableRow.default, {
          children: renderColumns
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_TableBody.default, {
        children: renderRows
      })]
    })
  }), [columns, rows]);
}

// Setting default values for the props of Table
Table.defaultProps = {
  columns: [],
  rows: [{}]
};

// Typechecking props for the Table
Table.propTypes = {
  columns: _propTypes.default.arrayOf(_propTypes.default.object),
  rows: _propTypes.default.arrayOf(_propTypes.default.object)
};
var _default = Table;
exports.default = _default;
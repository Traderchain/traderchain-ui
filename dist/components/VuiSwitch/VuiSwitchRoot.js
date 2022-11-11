"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Switch = _interopRequireDefault(require("@mui/material/Switch"));
var _styles = require("@mui/material/styles");
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
var _default = (0, _styles.styled)(_Switch.default)(_ref => {
  let {
    theme,
    ownerState
  } = _ref;
  const {
    palette
  } = theme;
  const {
    color
  } = ownerState;
  const {
    white,
    secondary
  } = palette;

  // styles for the button with variant="contained"
  const containedStyles = () => {
    // background color value
    const backgroundValue = palette[color] ? palette[color].main : white.main;

    // color value when button is focused

    return {
      "&.MuiSwitch-root": {
        "& .MuiSwitch-thumb": {
          backgroundColor: white.main
        },
        "& .MuiSwitch-track": {
          backgroundColor: `${secondary.main} !important`,
          borderColor: "transparent"
        },
        "& .Mui-checked+.MuiSwitch-track": {
          backgroundColor: `${backgroundValue} !important`
        }
      }
    };
  };
  return {
    ...containedStyles()
  };
});
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _colors = _interopRequireDefault(require("../../base/colors"));
var _borders = _interopRequireDefault(require("../../base/borders"));
var _boxShadows = _interopRequireDefault(require("../../base/boxShadows"));
var _rgba = _interopRequireDefault(require("../../functions/rgba"));
var _pxToRem = _interopRequireDefault(require("../../functions/pxToRem"));
var _linearGradient = _interopRequireDefault(require("../../functions/linearGradient"));
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

// Vision UI Dashboard React base styles

// Vision UI Dashboard React helper functions

const {
  white,
  light,
  gradients
} = _colors.default;
const {
  borderWidth
} = _borders.default;
const {
  md
} = _boxShadows.default;
var _default = {
  defaultProps: {
    disableRipple: true
  },
  styleOverrides: {
    root: {
      width: (0, _pxToRem.default)(40),
      height: (0, _pxToRem.default)(20),
      margin: `${(0, _pxToRem.default)(4)} 0`,
      padding: 0,
      borderRadius: (0, _pxToRem.default)(160),
      transition: "transform 250ms ease-in"
    },
    switchBase: {
      padding: 0,
      top: "50%",
      transform: `translate(${(0, _pxToRem.default)(2)}, -50%)`,
      transition: `transform 250ms ease-in-out`,
      "&.Mui-checked": {
        transform: `translate(${(0, _pxToRem.default)(22)}, -50%)`,
        "& + .MuiSwitch-track": {
          backgroundColor: `${(0, _rgba.default)(gradients.dark.state, 0.95)} !important`,
          borderColor: `${(0, _rgba.default)(gradients.dark.state, 0.95)} !important`,
          opacity: 1
        }
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: "0.3 !important"
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        backgroundImage: (0, _linearGradient.default)(gradients.info.main, gradients.info.state)
      }
    },
    thumb: {
      width: (0, _pxToRem.default)(16),
      height: (0, _pxToRem.default)(16),
      backgroundColor: white.main,
      boxShadow: md,
      top: "50%"
    },
    track: {
      backgroundColor: (0, _rgba.default)(gradients.dark.state, 0.1),
      border: `${borderWidth[1]} solid ${light.main}`,
      borderRadius: (0, _pxToRem.default)(160),
      opacity: 1,
      transition: `background-color 250ms ease, border-color 200ms ease`
    },
    checked: {}
  }
};
exports.default = _default;
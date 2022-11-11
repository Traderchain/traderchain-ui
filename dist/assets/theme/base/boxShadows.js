"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _colors = _interopRequireDefault(require("./colors"));
var _boxShadow = _interopRequireDefault(require("../functions/boxShadow"));
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

/**
 * The base box-shadow styles for the Vision UI Dashboard  Material.
 * You can add new box-shadow using this file.
 * You can customized the box-shadow for the entire Vision UI Dashboard  Material using thie file.
 */

// Vision UI Dashboard React Base Styles

// Vision UI Dashboard React Helper Functions

const {
  black,
  white,
  info,
  inputColors,
  tabs
} = _colors.default;
var _default = {
  xs: (0, _boxShadow.default)([0, 2], [9, -5], black.main, 0.15),
  sm: (0, _boxShadow.default)([0, 5], [10, 0], black.main, 0.12),
  md: `${(0, _boxShadow.default)([0, 4], [6, -1], black.light, 0.12)}, ${(0, _boxShadow.default)([0, 2], [4, -1], black.light, 0.07)}`,
  lg: `${(0, _boxShadow.default)([0, 8], [26, -4], black.light, 0.15)}, ${(0, _boxShadow.default)([0, 8], [9, -5], black.light, 0.06)}`,
  xl: (0, _boxShadow.default)([0, 23], [45, -11], black.light, 0.25),
  xxl: (0, _boxShadow.default)([0, 20], [27, 0], black.main, 0.05),
  inset: (0, _boxShadow.default)([0, 1], [2, 0], black.main, 0.075, "inset"),
  navbarBoxShadow: `${(0, _boxShadow.default)([0, 0], [1, 1], white.main, 0.9, "inset")}, ${(0, _boxShadow.default)([0, 20], [27, 0], black.main, 0.05)}`,
  buttonBoxShadow: {
    main: `${(0, _boxShadow.default)([0, 4], [7, -1], black.main, 0.11)}, ${(0, _boxShadow.default)([0, 2], [4, -1], black.main, 0.07)}`,
    stateOf: `${(0, _boxShadow.default)([0, 3], [5, -1], black.main, 0.09)}, ${(0, _boxShadow.default)([0, 2], [5, -1], black.main, 0.07)}`,
    stateOfNotHover: (0, _boxShadow.default)([0, 0], [0, 3.2], info.main, 0.5)
  },
  inputBoxShadow: {
    focus: (0, _boxShadow.default)([0, 0], [0, 2], inputColors.boxShadow, 1),
    error: (0, _boxShadow.default)([0, 0], [0, 2], inputColors.error, 0.6),
    success: (0, _boxShadow.default)([0, 0], [0, 2], inputColors.success, 0.6)
  },
  sliderBoxShadow: {
    thumb: (0, _boxShadow.default)([0, 1], [13, 0], black.main, 0.2)
  },
  tabsBoxShadow: {
    indicator: (0, _boxShadow.default)([0, 1], [5, 1], tabs.indicator.boxShadow, 1)
  }
};
exports.default = _default;
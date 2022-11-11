"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _colors = _interopRequireDefault(require("./colors"));
var _pxToRem = _interopRequireDefault(require("../functions/pxToRem"));
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
 * The base typography styles for the Vision UI Dashboard  Material.
 * You can add new typography style using this file.
 * You can customized the typography styles for the entire Vision UI Dashboard  Material using thie file.
 */

// Vision UI Dashboard React Base Styles

// import "assets/theme/base/typography.css";

// Vision UI Dashboard React Helper Functions

const {
  dark
} = _colors.default;
const baseProperties = {
  fontFamily: '"Plus Jakarta Display", "Helvetica", "Arial", sans-serif',
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  fontSizeXXS: (0, _pxToRem.default)(10.4),
  fontSizeXS: (0, _pxToRem.default)(12),
  fontSizeSM: (0, _pxToRem.default)(14),
  fontSizeRegular: (0, _pxToRem.default)(16),
  fontSizeLG: (0, _pxToRem.default)(18),
  fontSizeXL: (0, _pxToRem.default)(20)
};
const baseHeadingProperties = {
  fontFamily: baseProperties.fontFamily,
  color: dark.main,
  fontWeight: baseProperties.fontWeightMedium
};
const baseDisplayProperties = {
  fontFamily: baseProperties.fontFamily,
  color: dark.main,
  fontWeight: baseProperties.fontWeightLight,
  lineHeight: 1.2
};
const typography = {
  fontFamily: baseProperties.fontFamily,
  fontWeightLight: baseProperties.fontWeightLight,
  fontWeightRegular: baseProperties.fontWeightRegular,
  fontWeightMedium: baseProperties.fontWeightMedium,
  fontWeightBold: baseProperties.fontWeightBold,
  h1: {
    fontSize: (0, _pxToRem.default)(48),
    lineHeight: 1.25,
    ...baseHeadingProperties
  },
  h2: {
    fontSize: (0, _pxToRem.default)(36),
    lineHeight: 1.3,
    ...baseHeadingProperties
  },
  h3: {
    fontSize: (0, _pxToRem.default)(30),
    lineHeight: 1.375,
    ...baseHeadingProperties
  },
  h4: {
    fontSize: (0, _pxToRem.default)(24),
    lineHeight: 1.375,
    ...baseHeadingProperties
  },
  h5: {
    fontSize: (0, _pxToRem.default)(20),
    lineHeight: 1.375,
    ...baseHeadingProperties
  },
  h6: {
    fontSize: (0, _pxToRem.default)(16),
    lineHeight: 1.625,
    ...baseHeadingProperties
  },
  lg: {
    fontSize: (0, _pxToRem.default)(18),
    lineHeight: 1.625,
    ...baseHeadingProperties
  },
  xxs: {
    fontSize: (0, _pxToRem.default)(10),
    lineHeight: 1.625,
    ...baseHeadingProperties
  },
  subtitle1: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeXL,
    fontWeight: baseProperties.fontWeightRegular,
    lineHeight: 1.625
  },
  subtitle2: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeRegular,
    fontWeight: baseProperties.fontWeightMedium,
    lineHeight: 1.6
  },
  body1: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeXL,
    fontWeight: baseProperties.fontWeightRegular,
    lineHeight: 1.625
  },
  body2: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeRegular,
    fontWeight: baseProperties.fontWeightRegular,
    lineHeight: 1.6
  },
  button: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeSM,
    fontWeight: baseProperties.fontWeightBold,
    lineHeight: 1.5,
    textTransform: "uppercase"
  },
  caption: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeXS,
    fontWeight: baseProperties.fontWeightRegular,
    lineHeight: 1.25
  },
  overline: {
    fontFamily: baseProperties.fontFamily
  },
  d1: {
    fontSize: (0, _pxToRem.default)(80),
    ...baseDisplayProperties
  },
  d2: {
    fontSize: (0, _pxToRem.default)(72),
    ...baseDisplayProperties
  },
  d3: {
    fontSize: (0, _pxToRem.default)(64),
    ...baseDisplayProperties
  },
  d4: {
    fontSize: (0, _pxToRem.default)(56),
    ...baseDisplayProperties
  },
  d5: {
    fontSize: (0, _pxToRem.default)(48),
    ...baseDisplayProperties
  },
  d6: {
    fontSize: (0, _pxToRem.default)(40),
    ...baseDisplayProperties
  },
  size: {
    xxs: baseProperties.fontSizeXXS,
    xs: baseProperties.fontSizeXS,
    sm: baseProperties.fontSizeSM,
    regular: baseProperties.fontSizeRegular,
    lg: baseProperties.fontSizeLG,
    xl: baseProperties.fontSizeXL
  },
  lineHeight: {
    sm: 1.25,
    regular: 1.5,
    lg: 2
  }
};
var _default = typography;
exports.default = _default;
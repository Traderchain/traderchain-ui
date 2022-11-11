"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _chromaJs = _interopRequireDefault(require("chroma-js"));
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
  The hexToRgb() function helps you to change the hex color code to rgb
  using chroma-js library.
 */

// chroma-js is a library for all kinds of color conversions and color scales.

function hexToRgb(color) {
  return (0, _chromaJs.default)(color).rgb().join(", ");
}
var _default = hexToRgb;
exports.default = _default;
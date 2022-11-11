"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _hexToRgb = _interopRequireDefault(require("./hexToRgb"));
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
  The rgba() function helps you to create a rgba color code, it uses the hexToRgb() function
  to convert the hex code into rgb for using it inside the rgba color format.
 */

// Vision UI Dashboard React helper functions

function rgba(color, opacity) {
  return `rgba(${(0, _hexToRgb.default)(color)}, ${opacity})`;
}
var _default = rgba;
exports.default = _default;
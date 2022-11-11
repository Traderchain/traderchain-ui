"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _rgba = _interopRequireDefault(require("./rgba"));
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
  The gradientChartLine() function helps you to create a gradient color for the chart line
 */

// Vision UI Dashboard React helper functions

function gradientChartLine(chart, color) {
  let opacity = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.2;
  const ctx = chart.getContext("2d");
  const gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  const primaryColor = (0, _rgba.default)(color, opacity).toString();
  gradientStroke.addColorStop(1, primaryColor);
  gradientStroke.addColorStop(0.2, "rgba(72, 72, 176, 0.0)");
  gradientStroke.addColorStop(0, "rgba(203, 12, 159, 0)");
  return gradientStroke;
}
var _default = gradientChartLine;
exports.default = _default;
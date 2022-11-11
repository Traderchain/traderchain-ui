"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _rgba = _interopRequireDefault(require("./rgba"));
var _pxToRem = _interopRequireDefault(require("./pxToRem"));
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
  The boxShadow() function helps you to create a box shadow for an element
 */

// Vision UI Dashboard React helper functions

function boxShadow() {
  let offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  let radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  let color = arguments.length > 2 ? arguments[2] : undefined;
  let opacity = arguments.length > 3 ? arguments[3] : undefined;
  let inset = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "";
  const [x, y] = offset;
  const [blur, spread] = radius;
  return `${inset} ${(0, _pxToRem.default)(x)} ${(0, _pxToRem.default)(y)} ${(0, _pxToRem.default)(blur)} ${(0, _pxToRem.default)(spread)} ${(0, _rgba.default)(color, opacity)}`;
}
var _default = boxShadow;
exports.default = _default;
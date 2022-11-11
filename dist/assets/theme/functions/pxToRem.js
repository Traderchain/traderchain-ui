"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
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
  The pxToRem() function helps you to convert a px unit into a rem unit, 
 */

function pxToRem(number) {
  let baseNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 16;
  return `${number / baseNumber}rem`;
}
var _default = pxToRem;
exports.default = _default;
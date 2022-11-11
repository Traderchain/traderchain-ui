"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Box = _interopRequireDefault(require("@mui/material/Box"));
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
var _default = (0, _styles.styled)(_Box.default)(() => {
  return {
    width: "fit-content",
    height: "fit-content",
    backgroundImage: "radial-gradient(69.43% 69.43% at 50% 50%, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)  "
  };
});
exports.default = _default;
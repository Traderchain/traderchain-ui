"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _colors = _interopRequireDefault(require("./colors"));
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
// Vision UI Dashboard React Base Styles
const bgAdmin = "/images/95577b81051e9fc359b80ecb8cf2bb7b.png";
const {
  info,
  dark
} = _colors.default;
var _default = {
  html: {
    scrollBehavior: "smooth",
    background: dark.body
  },
  body: {
    background: `url(${bgAdmin})`,
    backgroundSize: "cover"
  },
  "*, *::before, *::after": {
    margin: 0,
    padding: 0
  },
  "a, a:link, a:visited": {
    textDecoration: "none !important"
  },
  "a.link, .link, a.link:link, .link:link, a.link:visited, .link:visited": {
    color: `${dark.main} !important`,
    transition: "color 150ms ease-in !important"
  },
  "a.link:hover, .link:hover, a.link:focus, .link:focus": {
    color: `${info.main} !important`
  }
};
exports.default = _default;
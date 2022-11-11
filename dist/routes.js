"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _dashboard = _interopRequireDefault(require("./layouts/dashboard"));
var _tables = _interopRequireDefault(require("./layouts/tables"));
var _billing = _interopRequireDefault(require("./layouts/billing"));
var _rtl = _interopRequireDefault(require("./layouts/rtl"));
var _profile = _interopRequireDefault(require("./layouts/profile"));
var _signIn = _interopRequireDefault(require("./layouts/authentication/sign-in"));
var _signUp = _interopRequireDefault(require("./layouts/authentication/sign-up"));
var _io = require("react-icons/io5");
var _io2 = require("react-icons/io");
var _bs = require("react-icons/bs");
var _jsxRuntime = require("react/jsx-runtime");
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
  All of the routes for the Vision UI Dashboard React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Vision UI Dashboard React layouts

// Vision UI Dashboard React icons

const routes = [{
  type: "collapse",
  name: "Dashboard",
  key: "dashboard",
  route: "/dashboard",
  icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_io.IoHome, {
    size: "15px",
    color: "inherit"
  }),
  component: _dashboard.default,
  noCollapse: true
}, {
  type: "collapse",
  name: "Tables",
  key: "tables",
  route: "/tables",
  icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_io.IoStatsChart, {
    size: "15px",
    color: "inherit"
  }),
  component: _tables.default,
  noCollapse: true
}, {
  type: "collapse",
  name: "Billing",
  key: "billing",
  route: "/billing",
  icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_bs.BsCreditCardFill, {
    size: "15px",
    color: "inherit"
  }),
  component: _billing.default,
  noCollapse: true
}, {
  type: "collapse",
  name: "RTL",
  key: "rtl",
  route: "/rtl",
  icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_io.IoBuild, {
    size: "15px",
    color: "inherit"
  }),
  component: _rtl.default,
  noCollapse: true
}, {
  type: "title",
  title: "Account Pages",
  key: "account-pages"
}, {
  type: "collapse",
  name: "Profile",
  key: "profile",
  route: "/profile",
  icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_bs.BsFillPersonFill, {
    size: "15px",
    color: "inherit"
  }),
  component: _profile.default,
  noCollapse: true
}, {
  type: "collapse",
  name: "Sign In",
  key: "sign-in",
  route: "/authentication/sign-in",
  icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_io2.IoIosDocument, {
    size: "15px",
    color: "inherit"
  }),
  component: _signIn.default,
  noCollapse: true
}, {
  type: "collapse",
  name: "Sign Up",
  key: "sign-up",
  route: "/authentication/sign-up",
  icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_io.IoRocketSharp, {
    size: "15px",
    color: "inherit"
  }),
  component: _signUp.default,
  noCollapse: true
}];
var _default = routes;
exports.default = _default;
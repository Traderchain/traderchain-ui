"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _colors = _interopRequireDefault(require("../../assets/theme/base/colors"));
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

// prop-types is a library for typechecking of props

// Vision UI Dashboard React base styles

function Settings(_ref) {
  let {
    color,
    size
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", {
    width: size,
    height: size,
    viewBox: "0 0 42 42",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("title", {
      children: "settings"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("g", {
      id: "Basic-Elements",
      stroke: "none",
      strokeWidth: "1",
      fill: "none",
      fillRule: "evenodd",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("g", {
        id: "Rounded-Icons",
        transform: "translate(-2020.000000, -442.000000)",
        fill: _colors.default[color] ? _colors.default[color].main : _colors.default.dark.main,
        fillRule: "nonzero",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("g", {
          id: "Icons-with-opacity",
          transform: "translate(1716.000000, 291.000000)",
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("g", {
            id: "settings",
            transform: "translate(304.000000, 151.000000)",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("polygon", {
              id: "Path",
              opacity: "0.596981957",
              points: "18.0883333 15.7316667 11.1783333 8.82166667 13.3333333 6.66666667 6.66666667 0 0 6.66666667 6.66666667 13.3333333 8.82166667 11.1783333 15.315 17.6716667"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
              d: "M31.5666667,23.2333333 C31.0516667,23.2933333 30.53,23.3333333 30,23.3333333 C29.4916667,23.3333333 28.9866667,23.3033333 28.48,23.245 L22.4116667,30.7433333 L29.9416667,38.2733333 C32.2433333,40.575 35.9733333,40.575 38.275,38.2733333 L38.275,38.2733333 C40.5766667,35.9716667 40.5766667,32.2416667 38.275,29.94 L31.5666667,23.2333333 Z",
              id: "Path",
              opacity: "0.596981957"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
              d: "M33.785,11.285 L28.715,6.215 L34.0616667,0.868333333 C32.82,0.315 31.4483333,0 30,0 C24.4766667,0 20,4.47666667 20,10 C20,10.99 20.1483333,11.9433333 20.4166667,12.8466667 L2.435,27.3966667 C0.95,28.7083333 0.0633333333,30.595 0.00333333333,32.5733333 C-0.0583333333,34.5533333 0.71,36.4916667 2.11,37.89 C3.47,39.2516667 5.27833333,40 7.20166667,40 C9.26666667,40 11.2366667,39.1133333 12.6033333,37.565 L27.1533333,19.5833333 C28.0566667,19.8516667 29.01,20 30,20 C35.5233333,20 40,15.5233333 40,10 C40,8.55166667 39.685,7.18 39.1316667,5.93666667 L33.785,11.285 Z",
              id: "Path"
            })]
          })
        })
      })
    })]
  });
}

// Setting default values for the props of Settings
Settings.defaultProps = {
  color: "dark",
  size: "16px"
};

// Typechecking props for the Settings
Settings.propTypes = {
  color: _propTypes.default.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark", "light", "white"]),
  size: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])
};
var _default = Settings;
exports.default = _default;
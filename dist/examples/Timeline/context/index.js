"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimelineProvider = TimelineProvider;
exports.useTimeline = useTimeline;
var _react = require("react");
var _jsxRuntime = require("react/jsx-runtime");
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

/* eslint-disable react/prop-types */
/**
  This file is used for controlling the dark and light state of the TimelineList and TimelineItem.
*/

// The Timeline main context
const Timeline = /*#__PURE__*/(0, _react.createContext)();

// Timeline context provider
function TimelineProvider(_ref) {
  let {
    children,
    value
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Timeline.Provider, {
    value: value,
    children: children
  });
}

// Timeline custom hook for using context
function useTimeline() {
  return (0, _react.useContext)(Timeline);
}

/* eslint-enable react/prop-types */
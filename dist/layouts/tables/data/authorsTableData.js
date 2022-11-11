"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _VuiBox = _interopRequireDefault(require("../../../components/VuiBox"));
var _VuiTypography = _interopRequireDefault(require("../../../components/VuiTypography"));
var _VuiAvatar = _interopRequireDefault(require("../../../components/VuiAvatar"));
var _VuiBadge = _interopRequireDefault(require("../../../components/VuiBadge"));
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
/* eslint-disable react/prop-types */
// Vision UI Dashboard React components
// Images
const avatar1 = "./images/2df96e6c11f00cecbeaa96f1730fcfdd.png";
const avatar2 = "./images/7c99b2ffd2fb9b1787722b71928d208e.png";
const avatar3 = "./images/b0383ef7aa99a9f55a72687177c7a4f9.png";
const avatar4 = "./images/04572a1908e3180f7c31ad012b754f93.png";
const avatar5 = "./images/b057d91c971bb558c8df69060f29715f.png";
const avatar6 = "./images/635d14bb945011f2af29476fa906b27a.png";
function Author(_ref) {
  let {
    image,
    name,
    email
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
    display: "flex",
    alignItems: "center",
    px: 1,
    py: 0.5,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
      mr: 2,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiAvatar.default, {
        src: image,
        alt: name,
        size: "sm",
        variant: "rounded"
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
      display: "flex",
      flexDirection: "column",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
        variant: "button",
        color: "white",
        fontWeight: "medium",
        children: name
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
        variant: "caption",
        color: "text",
        children: email
      })]
    })]
  });
}
function Function(_ref2) {
  let {
    job,
    org
  } = _ref2;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
    display: "flex",
    flexDirection: "column",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
      variant: "caption",
      fontWeight: "medium",
      color: "white",
      children: job
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
      variant: "caption",
      color: "text",
      children: org
    })]
  });
}
var _default = {
  columns: [{
    name: "author",
    align: "left"
  }, {
    name: "function",
    align: "left"
  }, {
    name: "status",
    align: "center"
  }, {
    name: "employed",
    align: "center"
  }, {
    name: "action",
    align: "center"
  }],
  rows: [{
    author: /*#__PURE__*/(0, _jsxRuntime.jsx)(Author, {
      image: avatar4,
      name: "Esthera Jackson",
      email: "esthera@simmmple.com"
    }),
    function: /*#__PURE__*/(0, _jsxRuntime.jsx)(Function, {
      job: "Manager",
      org: "Organization"
    }),
    status: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBadge.default, {
      variant: "standard",
      badgeContent: "Online",
      color: "success",
      size: "xs",
      container: true,
      sx: _ref3 => {
        let {
          palette: {
            white,
            success
          },
          borders: {
            borderRadius,
            borderWidth
          }
        } = _ref3;
        return {
          background: success.main,
          border: `${borderWidth[1]} solid ${success.main}`,
          borderRadius: borderRadius.md,
          color: white.main
        };
      }
    }),
    employed: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
      variant: "caption",
      color: "white",
      fontWeight: "medium",
      children: "23/04/18"
    }),
    action: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
      component: "a",
      href: "#",
      variant: "caption",
      color: "text",
      fontWeight: "medium",
      children: "Edit"
    })
  }, {
    author: /*#__PURE__*/(0, _jsxRuntime.jsx)(Author, {
      image: avatar2,
      name: "Alexa Liras",
      email: "alexa@simmmple.com"
    }),
    function: /*#__PURE__*/(0, _jsxRuntime.jsx)(Function, {
      job: "Programator",
      org: "Developer"
    }),
    status: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBadge.default, {
      variant: "standard",
      badgeContent: "Offline",
      size: "xs",
      container: true,
      sx: _ref4 => {
        let {
          palette: {
            white
          },
          borders: {
            borderRadius,
            borderWidth
          }
        } = _ref4;
        return {
          background: "unset",
          border: `${borderWidth[1]} solid ${white.main}`,
          borderRadius: borderRadius.md,
          color: white.main
        };
      }
    }),
    employed: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
      variant: "caption",
      color: "white",
      fontWeight: "medium",
      children: "11/01/19"
    }),
    action: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
      component: "a",
      href: "#",
      variant: "caption",
      color: "text",
      fontWeight: "medium",
      children: "Edit"
    })
  }, {
    author: /*#__PURE__*/(0, _jsxRuntime.jsx)(Author, {
      image: avatar3,
      name: "Laurent Michael",
      email: "laurent@simmmple.com"
    }),
    function: /*#__PURE__*/(0, _jsxRuntime.jsx)(Function, {
      job: "Executive",
      org: "Projects"
    }),
    status: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBadge.default, {
      variant: "standard",
      badgeContent: "Online",
      color: "success",
      size: "xs",
      container: true,
      sx: _ref5 => {
        let {
          palette: {
            white,
            success
          },
          borders: {
            borderRadius,
            borderWidth
          }
        } = _ref5;
        return {
          background: success.main,
          border: `${borderWidth[1]} solid ${success.main}`,
          borderRadius: borderRadius.md,
          color: white.main
        };
      }
    }),
    employed: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
      variant: "caption",
      color: "white",
      fontWeight: "medium",
      children: "19/09/17"
    }),
    action: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
      component: "a",
      href: "#",
      variant: "caption",
      color: "text",
      fontWeight: "medium",
      children: "Edit"
    })
  }, {
    author: /*#__PURE__*/(0, _jsxRuntime.jsx)(Author, {
      image: avatar1,
      name: "Freduardo Hill",
      email: "freduardo@simmmple.com"
    }),
    function: /*#__PURE__*/(0, _jsxRuntime.jsx)(Function, {
      job: "Programator",
      org: "Developer"
    }),
    status: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBadge.default, {
      variant: "standard",
      badgeContent: "Online",
      color: "success",
      size: "xs",
      container: true,
      sx: _ref6 => {
        let {
          palette: {
            white,
            success
          },
          borders: {
            borderRadius,
            borderWidth
          }
        } = _ref6;
        return {
          background: success.main,
          border: `${borderWidth[1]} solid ${success.main}`,
          borderRadius: borderRadius.md,
          color: white.main
        };
      }
    }),
    employed: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
      variant: "caption",
      color: "white",
      fontWeight: "medium",
      children: "24/12/08"
    }),
    action: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
      component: "a",
      href: "#",
      variant: "caption",
      color: "text",
      fontWeight: "medium",
      children: "Edit"
    })
  }, {
    author: /*#__PURE__*/(0, _jsxRuntime.jsx)(Author, {
      image: avatar5,
      name: "Daniel Thomas",
      email: "daniel@simmmple.com"
    }),
    function: /*#__PURE__*/(0, _jsxRuntime.jsx)(Function, {
      job: "Manager",
      org: "Executive"
    }),
    status: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBadge.default, {
      variant: "standard",
      badgeContent: "Offline",
      size: "xs",
      container: true,
      sx: _ref7 => {
        let {
          palette: {
            white
          },
          borders: {
            borderRadius,
            borderWidth
          }
        } = _ref7;
        return {
          background: "unset",
          border: `${borderWidth[1]} solid ${white.main}`,
          borderRadius: borderRadius.md,
          color: white.main
        };
      }
    }),
    employed: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
      variant: "caption",
      color: "white",
      fontWeight: "medium",
      children: "04/10/21"
    }),
    action: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
      component: "a",
      href: "#",
      variant: "caption",
      color: "text",
      fontWeight: "medium",
      children: "Edit"
    })
  }, {
    author: /*#__PURE__*/(0, _jsxRuntime.jsx)(Author, {
      image: avatar6,
      name: "Mark Wilson",
      email: "mark@simmmple.com"
    }),
    function: /*#__PURE__*/(0, _jsxRuntime.jsx)(Function, {
      job: "Programtor",
      org: "Developer"
    }),
    status: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBadge.default, {
      variant: "standard",
      badgeContent: "Offline",
      size: "xs",
      container: true,
      sx: _ref8 => {
        let {
          palette: {
            white
          },
          borders: {
            borderRadius,
            borderWidth
          }
        } = _ref8;
        return {
          background: "unset",
          border: `${borderWidth[1]} solid ${white.main}`,
          borderRadius: borderRadius.md,
          color: white.main
        };
      }
    }),
    employed: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
      variant: "caption",
      color: "white",
      fontWeight: "medium",
      children: "14/09/20"
    }),
    action: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
      component: "a",
      href: "#",
      variant: "caption",
      color: "text",
      fontWeight: "medium",
      children: "Edit"
    })
  }]
};
exports.default = _default;
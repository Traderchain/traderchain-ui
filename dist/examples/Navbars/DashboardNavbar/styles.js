"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.navbar = navbar;
exports.navbarRow = exports.navbarMobileMenu = exports.navbarIconButton = exports.navbarContainer = void 0;
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

function navbar(theme, ownerState) {
  const {
    palette,
    boxShadows,
    functions,
    transitions,
    breakpoints,
    borders
  } = theme;
  const {
    transparentNavbar,
    absolute,
    light
  } = ownerState;
  const {
    dark,
    white,
    text,
    transparent,
    gradients,
    borderCol
  } = palette;
  const {
    navbarBoxShadow
  } = boxShadows;
  const {
    linearGradient,
    pxToRem
  } = functions;
  const {
    borderRadius
  } = borders;
  return {
    boxShadow: transparentNavbar || absolute ? "none" : navbarBoxShadow,
    backdropFilter: transparentNavbar || absolute ? "none" : `blur(${pxToRem(42)})`,
    backgroundColor: `${transparent.main} !important`,
    backgroundImage: transparentNavbar || absolute ? `none` : `${linearGradient(gradients.navbar.main, gradients.navbar.state, gradients.navbar.deg)} !importants`,
    color: () => {
      let color;
      if (light) {
        color = white.main;
      } else if (transparentNavbar) {
        color = text.main;
      } else {
        color = dark.main;
      }
      color = white.main;
      return color;
    },
    top: absolute ? 0 : pxToRem(12),
    minHeight: pxToRem(75),
    display: "grid",
    alignItems: "center",
    borderRadius: borderRadius.xl,
    borderColor: transparentNavbar || absolute ? `${transparent.main} !important` : `${borderCol.navbar} !important`,
    paddingTop: pxToRem(8),
    paddingBottom: pxToRem(8),
    paddingRight: absolute ? pxToRem(8) : 0,
    paddingLeft: absolute ? pxToRem(16) : 0,
    "& > *": {
      transition: transitions.create("all", {
        easing: transitions.easing.easeInOut,
        duration: transitions.duration.standard
      })
    },
    "& .MuiToolbar-root": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      [breakpoints.up("sm")]: {
        minHeight: "auto",
        padding: `${pxToRem(4)} ${pxToRem(16)}`
      }
    }
  };
}
const navbarContainer = _ref => {
  let {
    breakpoints
  } = _ref;
  return {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    pt: 0.5,
    pb: 0.5,
    [breakpoints.up("md")]: {
      flexDirection: "row",
      alignItems: "center",
      paddingTop: "0",
      paddingBottom: "0"
    }
  };
};
exports.navbarContainer = navbarContainer;
const navbarRow = (_ref2, _ref3) => {
  let {
    breakpoints,
    palette: {
      white
    }
  } = _ref2;
  let {
    isMini
  } = _ref3;
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    "&.MuiBox-root": {
      "& nav": {
        "& ol": {
          "& li": {
            "&.MuiBreadcrumbs-li": {
              "& a": {
                "& span": {
                  color: white.main
                }
              }
            },
            "&.MuiBreadcrumbs-li span.MuiTypography-button": {
              color: white.main
            },
            "&.MuiBreadcrumbs-separator": {
              color: white.main
            }
          }
        }
      }
    },
    "& h6": {
      color: "rgb(255,255,255)"
    },
    [breakpoints.up("md")]: {
      justifyContent: isMini ? "space-between" : "stretch",
      width: isMini ? "100%" : "max-content"
    },
    [breakpoints.up("xl")]: {
      justifyContent: "stretch !important",
      width: "max-content !important"
    }
  };
};
exports.navbarRow = navbarRow;
const navbarIconButton = _ref4 => {
  let {
    typography: {
      size
    },
    breakpoints,
    palette: {
      grey,
      white
    }
  } = _ref4;
  return {
    px: 0.75,
    "& .material-icons, .material-icons-round": {
      fontSize: `${size.md} !important`,
      color: white.main
    },
    "& .MuiTypography-root": {
      display: "none",
      color: white.main,
      [breakpoints.up("sm")]: {
        display: "inline-block",
        lineHeight: 1.2,
        ml: 0.5
      }
    }
  };
};
exports.navbarIconButton = navbarIconButton;
const navbarMobileMenu = _ref5 => {
  let {
    breakpoints,
    palette: {
      white
    }
  } = _ref5;
  return {
    display: "inline-block",
    lineHeight: 0,
    color: white.main,
    [breakpoints.up("xl")]: {
      display: "none"
    }
  };
};
exports.navbarMobileMenu = navbarMobileMenu;
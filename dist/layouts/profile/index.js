"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Facebook = _interopRequireDefault(require("@mui/icons-material/Facebook"));
var _Instagram = _interopRequireDefault(require("@mui/icons-material/Instagram"));
var _Twitter = _interopRequireDefault(require("@mui/icons-material/Twitter"));
var _Card = _interopRequireDefault(require("@mui/material/Card"));
var _Grid = _interopRequireDefault(require("@mui/material/Grid"));
var _VuiBox = _interopRequireDefault(require("../../components/VuiBox"));
var _VuiTypography = _interopRequireDefault(require("../../components/VuiTypography"));
var _ProfileInfoCard = _interopRequireDefault(require("../../examples/Cards/InfoCards/ProfileInfoCard"));
var _DefaultProjectCard = _interopRequireDefault(require("../../examples/Cards/ProjectCards/DefaultProjectCard"));
var _Footer = _interopRequireDefault(require("../../examples/Footer"));
var _DashboardLayout = _interopRequireDefault(require("../../examples/LayoutContainers/DashboardLayout"));
var _Header = _interopRequireDefault(require("./components/Header"));
var _PlatformSettings = _interopRequireDefault(require("./components/PlatformSettings"));
var _index = _interopRequireDefault(require("../profile/components/Welcome/index"));
var _CarInformations = _interopRequireDefault(require("./components/CarInformations"));
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
// @mui material components
// @mui icons
const team1 = "/images/2df96e6c11f00cecbeaa96f1730fcfdd.png";
const team2 = "/images/7c99b2ffd2fb9b1787722b71928d208e.png";
const team3 = "/images/b0383ef7aa99a9f55a72687177c7a4f9.png";
const team4 = "/images/04572a1908e3180f7c31ad012b754f93.png"; // Images
const profile1 = "/images/7876973b4899a1e2ff8f7343e8c031f9.png";
const profile2 = "/images/8e16ceb4d2ac0530f011df14dd730eae.png";
const profile3 = "/images/88b26a1d00a7c62fffb02cebdbad8532.png"; // Vision UI Dashboard React components
function Overview() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_DashboardLayout.default, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Header.default, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiBox.default, {
      mt: 5,
      mb: 3,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Grid.default, {
        container: true,
        spacing: 3,
        sx: _ref => {
          let {
            breakpoints
          } = _ref;
          return {
            [breakpoints.only("xl")]: {
              gridTemplateColumns: "repeat(2, 1fr)"
            }
          };
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid.default, {
          item: true,
          xs: 12,
          xl: 4,
          xxl: 3,
          sx: _ref2 => {
            let {
              breakpoints
            } = _ref2;
            return {
              minHeight: "400px",
              [breakpoints.only("xl")]: {
                gridArea: "1 / 1 / 2 / 2"
              }
            };
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.default, {})
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid.default, {
          item: true,
          xs: 12,
          xl: 5,
          xxl: 6,
          sx: _ref3 => {
            let {
              breakpoints
            } = _ref3;
            return {
              [breakpoints.only("xl")]: {
                gridArea: "2 / 1 / 3 / 3"
              }
            };
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_CarInformations.default, {})
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid.default, {
          item: true,
          xs: 12,
          xl: 3,
          xxl: 3,
          sx: _ref4 => {
            let {
              breakpoints
            } = _ref4;
            return {
              [breakpoints.only("xl")]: {
                gridArea: "1 / 2 / 2 / 3"
              }
            };
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ProfileInfoCard.default, {
            title: "profile information",
            description: "Hi, I\u2019m Mark Johnson, Decisions: If you can\u2019t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).",
            info: {
              fullName: "Mark Johnson",
              mobile: "(44) 123 1234 123",
              email: "mark@simmmple.com",
              location: "United States"
            },
            social: [{
              link: "https://www.facebook.com/CreativeTim/",
              icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Facebook.default, {}),
              color: "facebook"
            }, {
              link: "https://twitter.com/creativetim",
              icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Twitter.default, {}),
              color: "twitter"
            }, {
              link: "https://www.instagram.com/creativetimofficial/",
              icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Instagram.default, {}),
              color: "instagram"
            }]
          })
        })]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Grid.default, {
      container: true,
      spacing: 3,
      mb: "30px",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid.default, {
        item: true,
        xs: 12,
        xl: 3,
        height: "100%",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_PlatformSettings.default, {})
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid.default, {
        item: true,
        xs: 12,
        xl: 9,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Card.default, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
            display: "flex",
            flexDirection: "column",
            height: "100%",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_VuiBox.default, {
              display: "flex",
              flexDirection: "column",
              mb: "24px",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
                color: "white",
                variant: "lg",
                fontWeight: "bold",
                mb: "6px",
                children: "Projects"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VuiTypography.default, {
                color: "text",
                variant: "button",
                fontWeight: "regular",
                children: "Architects design houses"
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Grid.default, {
              container: true,
              spacing: 3,
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid.default, {
                item: true,
                xs: 12,
                md: 6,
                xl: 4,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_DefaultProjectCard.default, {
                  image: profile1,
                  label: "project #2",
                  title: "modern",
                  description: "As Uber works through a huge amount of internal management turmoil.",
                  action: {
                    type: "internal",
                    route: "/pages/profile/profile-overview",
                    color: "white",
                    label: "VIEW ALL"
                  },
                  authors: [{
                    image: team1,
                    name: "Elena Morison"
                  }, {
                    image: team2,
                    name: "Ryan Milly"
                  }, {
                    image: team3,
                    name: "Nick Daniel"
                  }, {
                    image: team4,
                    name: "Peterson"
                  }]
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid.default, {
                item: true,
                xs: 12,
                md: 6,
                xl: 4,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_DefaultProjectCard.default, {
                  image: profile2,
                  label: "project #1",
                  title: "scandinavian",
                  description: "Music is something that every person has his or her own specific opinion about.",
                  action: {
                    type: "internal",
                    route: "/pages/profile/profile-overview",
                    color: "white",
                    label: "VIEW ALL"
                  },
                  authors: [{
                    image: team3,
                    name: "Nick Daniel"
                  }, {
                    image: team4,
                    name: "Peterson"
                  }, {
                    image: team1,
                    name: "Elena Morison"
                  }, {
                    image: team2,
                    name: "Ryan Milly"
                  }]
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid.default, {
                item: true,
                xs: 12,
                md: 6,
                xl: 4,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_DefaultProjectCard.default, {
                  image: profile3,
                  label: "project #3",
                  title: "minimalist",
                  description: "Different people have different taste, and various types of music.",
                  action: {
                    type: "internal",
                    route: "/pages/profile/profile-overview",
                    color: "white",
                    label: "VIEW ALL"
                  },
                  authors: [{
                    image: team4,
                    name: "Peterson"
                  }, {
                    image: team3,
                    name: "Nick Daniel"
                  }, {
                    image: team2,
                    name: "Ryan Milly"
                  }, {
                    image: team1,
                    name: "Elena Morison"
                  }]
                })
              })]
            })]
          })
        })
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Footer.default, {})]
  });
}
var _default = Overview;
exports.default = _default;
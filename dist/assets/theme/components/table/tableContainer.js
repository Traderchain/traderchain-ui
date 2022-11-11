"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _colors = _interopRequireDefault(require("../../base/colors"));
var _boxShadows = _interopRequireDefault(require("../../base/boxShadows"));
var _borders = _interopRequireDefault(require("../../base/borders"));
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

// Vision UI Dashboard React base styles

const {
  transparent
} = _colors.default;
const {
  xxl
} = _boxShadows.default;
const {
  borderRadius
} = _borders.default;
var _default = {
  styleOverrides: {
    root: {
      backgroundColor: transparent.main,
      boxShadow: xxl,
      borderRadius: borderRadius.xl,
      "& thead": {
        "& tr": {
          "& th": {
            "&:first-of-type": {
              paddingLeft: "0px !important"
            }
          }
        }
      },
      "& .MuiTableBody-root": {
        "& tr": {
          "& td": {
            "&:first-of-type": {
              paddingLeft: "0px !important",
              "& .MuiBox-root": {
                paddingLeft: "0px !important"
              }
            }
          }
        }
      }
    }
  }
};
exports.default = _default;
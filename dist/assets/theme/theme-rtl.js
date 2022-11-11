"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _styles = require("@mui/material/styles");
var _colors = _interopRequireDefault(require("./base/colors"));
var _breakpoints = _interopRequireDefault(require("./base/breakpoints"));
var _typography = _interopRequireDefault(require("./base/typography"));
var _boxShadows = _interopRequireDefault(require("./base/boxShadows"));
var _borders = _interopRequireDefault(require("./base/borders"));
var _globals = _interopRequireDefault(require("./base/globals"));
var _boxShadow = _interopRequireDefault(require("./functions/boxShadow"));
var _hexToRgb = _interopRequireDefault(require("./functions/hexToRgb"));
var _linearGradient = _interopRequireDefault(require("./functions/linearGradient"));
var _pxToRem = _interopRequireDefault(require("./functions/pxToRem"));
var _rgba = _interopRequireDefault(require("./functions/rgba"));
var _sidenav = _interopRequireDefault(require("./components/sidenav"));
var _list = _interopRequireDefault(require("./components/list"));
var _listItem = _interopRequireDefault(require("./components/list/listItem"));
var _listItemText = _interopRequireDefault(require("./components/list/listItemText"));
var _card = _interopRequireDefault(require("./components/card"));
var _cardMedia = _interopRequireDefault(require("./components/card/cardMedia"));
var _cardContent = _interopRequireDefault(require("./components/card/cardContent"));
var _button = _interopRequireDefault(require("./components/button"));
var _iconButton = _interopRequireDefault(require("./components/iconButton"));
var _inputBase = _interopRequireDefault(require("./components/form/inputBase"));
var _menu = _interopRequireDefault(require("./components/menu"));
var _menuItem = _interopRequireDefault(require("./components/menu/menuItem"));
var _switchButton = _interopRequireDefault(require("./components/form/switchButton"));
var _divider = _interopRequireDefault(require("./components/divider"));
var _tableContainer = _interopRequireDefault(require("./components/table/tableContainer"));
var _tableHead = _interopRequireDefault(require("./components/table/tableHead"));
var _tableCell = _interopRequireDefault(require("./components/table/tableCell"));
var _linearProgress = _interopRequireDefault(require("./components/linearProgress"));
var _breadcrumbs = _interopRequireDefault(require("./components/breadcrumbs"));
var _slider = _interopRequireDefault(require("./components/slider"));
var _avatar = _interopRequireDefault(require("./components/avatar"));
var _tooltip = _interopRequireDefault(require("./components/tooltip"));
var _appBar = _interopRequireDefault(require("./components/appBar"));
var _tabs = _interopRequireDefault(require("./components/tabs"));
var _tab = _interopRequireDefault(require("./components/tabs/tab"));
var _stepper = _interopRequireDefault(require("./components/stepper"));
var _step = _interopRequireDefault(require("./components/stepper/step"));
var _stepConnector = _interopRequireDefault(require("./components/stepper/stepConnector"));
var _stepLabel = _interopRequireDefault(require("./components/stepper/stepLabel"));
var _stepIcon = _interopRequireDefault(require("./components/stepper/stepIcon"));
var _select = _interopRequireDefault(require("./components/form/select"));
var _formControlLabel = _interopRequireDefault(require("./components/form/formControlLabel"));
var _formLabel = _interopRequireDefault(require("./components/form/formLabel"));
var _checkbox = _interopRequireDefault(require("./components/form/checkbox"));
var _radio = _interopRequireDefault(require("./components/form/radio"));
var _autocomplete = _interopRequireDefault(require("./components/form/autocomplete"));
var _input = _interopRequireDefault(require("./components/form/input"));
var _container = _interopRequireDefault(require("./components/container"));
var _popover = _interopRequireDefault(require("./components/popover"));
var _buttonBase = _interopRequireDefault(require("./components/buttonBase"));
var _icon = _interopRequireDefault(require("./components/icon"));
var _svgIcon = _interopRequireDefault(require("./components/svgIcon"));
var _link = _interopRequireDefault(require("./components/link"));
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
// Vision UI Dashboard React base styles
// Vision UI Dashboard React helper functions
// Vision UI Dashboard React components base styles for @mui material components
var _default = (0, _styles.createTheme)({
  direction: "rtl",
  breakpoints: {
    ..._breakpoints.default
  },
  palette: {
    ..._colors.default
  },
  typography: {
    ..._typography.default
  },
  boxShadows: {
    ..._boxShadows.default
  },
  borders: {
    ..._borders.default
  },
  functions: {
    boxShadow: _boxShadow.default,
    hexToRgb: _hexToRgb.default,
    linearGradient: _linearGradient.default,
    pxToRem: _pxToRem.default,
    rgba: _rgba.default
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ..._globals.default,
        ..._container.default
      }
    },
    MuiDrawer: {
      ..._sidenav.default
    },
    MuiList: {
      ..._list.default
    },
    MuiListItem: {
      ..._listItem.default
    },
    MuiListItemText: {
      ..._listItemText.default
    },
    MuiCard: {
      ..._card.default
    },
    MuiCardMedia: {
      ..._cardMedia.default
    },
    MuiCardContent: {
      ..._cardContent.default
    },
    MuiButton: {
      ..._button.default
    },
    MuiIconButton: {
      ..._iconButton.default
    },
    MuiInputBase: {
      ..._inputBase.default
    },
    MuiMenu: {
      ..._menu.default
    },
    MuiMenuItem: {
      ..._menuItem.default
    },
    MuiSwitch: {
      ..._switchButton.default
    },
    MuiDivider: {
      ..._divider.default
    },
    MuiTableContainer: {
      ..._tableContainer.default
    },
    MuiTableHead: {
      ..._tableHead.default
    },
    MuiTableCell: {
      ..._tableCell.default
    },
    MuiLinearProgress: {
      ..._linearProgress.default
    },
    MuiBreadcrumbs: {
      ..._breadcrumbs.default
    },
    MuiSlider: {
      ..._slider.default
    },
    MuiAvatar: {
      ..._avatar.default
    },
    MuiTooltip: {
      ..._tooltip.default
    },
    MuiAppBar: {
      ..._appBar.default
    },
    MuiTabs: {
      ..._tabs.default
    },
    MuiTab: {
      ..._tab.default
    },
    MuiStepper: {
      ..._stepper.default
    },
    MuiStep: {
      ..._step.default
    },
    MuiStepConnector: {
      ..._stepConnector.default
    },
    MuiStepLabel: {
      ..._stepLabel.default
    },
    MuiStepIcon: {
      ..._stepIcon.default
    },
    MuiSelect: {
      ..._select.default
    },
    MuiFormControlLabel: {
      ..._formControlLabel.default
    },
    MuiFormLabel: {
      ..._formLabel.default
    },
    MuiCheckbox: {
      ..._checkbox.default
    },
    MuiRadio: {
      ..._radio.default
    },
    MuiAutocomplete: {
      ..._autocomplete.default
    },
    MuiInput: {
      ..._input.default
    },
    MuiOutlinedInput: {
      ..._input.default
    },
    MuiFilledInput: {
      ..._input.default
    },
    MuiPopover: {
      ..._popover.default
    },
    MuiButtonBase: {
      ..._buttonBase.default
    },
    MuiIcon: {
      ..._icon.default
    },
    MuiSvgIcon: {
      ..._svgIcon.default
    },
    MuiLink: {
      ..._link.default
    }
  }
});
exports.default = _default;
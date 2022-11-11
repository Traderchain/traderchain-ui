"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactApexcharts = _interopRequireDefault(require("react-apexcharts"));
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

class LineChart extends _react.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: [],
      chartOptions: {}
    };
  }
  componentDidMount() {
    const {
      lineChartData,
      lineChartOptions
    } = this.props;
    this.setState({
      chartData: lineChartData,
      chartOptions: lineChartOptions
    });
  }
  render() {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactApexcharts.default, {
      options: this.state.chartOptions,
      series: this.state.chartData,
      type: "area",
      width: "100%",
      height: "100%"
    });
  }
}
var _default = LineChart;
exports.default = _default;
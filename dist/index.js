'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @param {Object} config Configuration for the events.
 * @return {Component}
 */
function clickOutside(config) {
    config = Object.assign({
        events: ['click']
    }, config);

    return function (Target) {
        return function (_Component) {
            _inherits(ClickOutside, _Component);

            function ClickOutside(props) {
                _classCallCheck(this, ClickOutside);

                var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ClickOutside).call(this, props));

                _this.handleClickOutside = _this.handleClickOutside.bind(_this);
                return _this;
            }

            _createClass(ClickOutside, [{
                key: 'componentDidMount',
                value: function componentDidMount() {
                    var _this2 = this;

                    config.events.forEach(function (eventName) {
                        document.addEventListener(eventName, _this2.handleClickOutside, true);
                    });
                }
            }, {
                key: 'componentWillUnmount',
                value: function componentWillUnmount() {
                    var _this3 = this;

                    config.events.forEach(function (eventName) {
                        document.removeEventListener(eventName, _this3.handleClickOutside, true);
                    });
                }
            }, {
                key: 'handleClickOutside',
                value: function handleClickOutside(e) {
                    var node = _reactDom2.default.findDOMNode(this);
                    if ((!node || !node.contains(e.target)) && typeof this.refs.target.handleClickOutside === 'function') {
                        this.refs.target.handleClickOutside(e);
                    }
                }
            }, {
                key: 'render',
                value: function render() {
                    return _react2.default.createElement(Target, _extends({}, this.props, { ref: 'target' }));
                }
            }]);

            return ClickOutside;
        }(_react.Component);
    };
}

exports.default = clickOutside;
module.exports = exports['default'];

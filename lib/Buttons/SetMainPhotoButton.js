'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _booshReactUsers = require('boosh-react-users');

var _booshReactAuth = require('boosh-react-auth');

var _reactFoundation = require('react-foundation');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Selectors */
var SetMainPhotoButton = function (_React$Component) {
  (0, _inherits3.default)(SetMainPhotoButton, _React$Component);

  function SetMainPhotoButton() {
    (0, _classCallCheck3.default)(this, SetMainPhotoButton);
    return (0, _possibleConstructorReturn3.default)(this, (SetMainPhotoButton.__proto__ || (0, _getPrototypeOf2.default)(SetMainPhotoButton)).apply(this, arguments));
  }

  (0, _createClass3.default)(SetMainPhotoButton, [{
    key: 'setMainPhoto',
    value: function setMainPhoto(url, user_id) {
      console.log('SET MAIN PHOTO', url);

      this.props.dispatch(_booshReactUsers.UsersActions.updateUsersAttempt({
        id: user_id,
        photo: url
      }));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          me = _props.me,
          url = _props.url;

      if (!me || !url) return false;

      return _react2.default.createElement(
        _reactFoundation.Button,
        { onClick: function onClick() {
            _this2.setMainPhoto(url, me.id);
          } },
        _react2.default.createElement(_reactFoundation.Icon, { name: 'fi-heart' }),
        'Set Main Photo'
      );
    }
  }]);
  return SetMainPhotoButton;
}(_react2.default.Component);

/* Components */


/* Actions */

/* React */


SetMainPhotoButton.propTypes = {
  me: _react2.default.PropTypes.object,
  url: _react2.default.PropTypes.string
};

SetMainPhotoButton.defaultProps = {
  me: {},
  url: ''
};

var mapStateToProps = function mapStateToProps(state, props) {
  return {
    me: (0, _booshReactAuth.getMe)(state, props)
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(SetMainPhotoButton);
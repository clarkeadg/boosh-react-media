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

var _Creators = require('../Actions/Creators');

var _Creators2 = _interopRequireDefault(_Creators);

var _booshReactAuth = require('boosh-react-auth');

var _reactFoundation = require('react-foundation');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Selectors */
var DeletePhotoButton = function (_React$Component) {
  (0, _inherits3.default)(DeletePhotoButton, _React$Component);

  function DeletePhotoButton() {
    (0, _classCallCheck3.default)(this, DeletePhotoButton);
    return (0, _possibleConstructorReturn3.default)(this, (DeletePhotoButton.__proto__ || (0, _getPrototypeOf2.default)(DeletePhotoButton)).apply(this, arguments));
  }

  (0, _createClass3.default)(DeletePhotoButton, [{
    key: 'deletePhoto',
    value: function deletePhoto(id) {
      console.log('DeletePhotoButton', id);

      this.props.dispatch(_Creators2.default.removeImageAttempt({
        id: id,
        user_id: this.props.user_id
      }));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          me = _props.me,
          id = _props.id;

      if (!me || !id) return false;

      return _react2.default.createElement(
        _reactFoundation.Button,
        { onClick: function onClick() {
            _this2.deletePhoto(id);
          } },
        _react2.default.createElement(_reactFoundation.Icon, { name: 'fi-trash' }),
        'Delete Photo'
      );
    }
  }]);
  return DeletePhotoButton;
}(_react2.default.Component);

/* Components */


/* Actions */

/* React */


DeletePhotoButton.propTypes = {
  me: _react2.default.PropTypes.object,
  id: _react2.default.PropTypes.number
};

DeletePhotoButton.defaultProps = {
  me: {},
  id: 0
};

var mapStateToProps = function mapStateToProps(state, props) {
  return {
    me: (0, _booshReactAuth.getMe)(state, props)
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(DeletePhotoButton);
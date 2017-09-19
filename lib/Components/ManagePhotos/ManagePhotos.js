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

var _SetMainPhotoButton = require('../../Buttons/SetMainPhotoButton');

var _SetMainPhotoButton2 = _interopRequireDefault(_SetMainPhotoButton);

var _DeletePhotoButton = require('../../Buttons/DeletePhotoButton');

var _DeletePhotoButton2 = _interopRequireDefault(_DeletePhotoButton);

var _reactFoundation = require('react-foundation');

var _booshReactUsers = require('boosh-react-users');

var _booshReactAuth = require('boosh-react-auth');

var _booshReactComponents = require('boosh-react-components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* React */
var ManagePhotos = function (_React$Component) {
  (0, _inherits3.default)(ManagePhotos, _React$Component);

  function ManagePhotos() {
    (0, _classCallCheck3.default)(this, ManagePhotos);
    return (0, _possibleConstructorReturn3.default)(this, (ManagePhotos.__proto__ || (0, _getPrototypeOf2.default)(ManagePhotos)).apply(this, arguments));
  }

  (0, _createClass3.default)(ManagePhotos, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          me = _props.me,
          user = _props.user;

      if (!me.id || !user.id) return false;

      var imageServer = 'http://local.uploads.boosh.io';

      var url = "";
      var images = [];
      user.media.data.map(function (v, i) {
        images.push({
          "id": v.id,
          "thumb": v.url,
          "imgfull": v.url
        });
      });

      return _react2.default.createElement(_booshReactComponents.Portlet, { title: '', items: _react2.default.createElement(
          'div',
          { className: 'ManagePhotos' },
          images.map(function (img, i) {
            url = imageServer + img.thumb;
            return _react2.default.createElement(
              'div',
              { key: i },
              _react2.default.createElement(_reactFoundation.Thumbnail, { width: 100, src: url }),
              me.photo != url ? _react2.default.createElement(_SetMainPhotoButton2.default, { url: img.thumb, user_id: me.id }) : _react2.default.createElement(
                _reactFoundation.Button,
                null,
                'Main Photo'
              ),
              _react2.default.createElement(_DeletePhotoButton2.default, { id: img.id, user_id: me.id })
            );
          })
        ) });
    }
  }]);
  return ManagePhotos;
}(_react2.default.Component);

ManagePhotos.propTypes = {
  me: _react2.default.PropTypes.object,
  user: _react2.default.PropTypes.object
};

ManagePhotos.defaultProps = {
  me: {},
  user: {}
};

var mapStateToProps = function mapStateToProps(state, props) {
  return {
    me: (0, _booshReactAuth.getMe)(state, props),
    user: (0, _booshReactUsers.getUserById)(state, props)
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(ManagePhotos);
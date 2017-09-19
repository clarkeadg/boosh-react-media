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

var _MediaSelector = require('../Selectors/MediaSelector');

var _booshReactLightbox = require('boosh-react-lightbox');

var _reactFoundation = require('react-foundation');

var _booshReactComponents = require('boosh-react-components');

var _booshReactPagination = require('boosh-react-pagination');

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Sagas */
//import GetCommentsSaga from '../../Sagas/Preloaders/GetCommentsSaga'

/* Components */


/* Selectors */
var MediaCollection = function (_React$Component) {
  (0, _inherits3.default)(MediaCollection, _React$Component);

  function MediaCollection() {
    (0, _classCallCheck3.default)(this, MediaCollection);
    return (0, _possibleConstructorReturn3.default)(this, (MediaCollection.__proto__ || (0, _getPrototypeOf2.default)(MediaCollection)).apply(this, arguments));
  }

  (0, _createClass3.default)(MediaCollection, [{
    key: 'openLightbox',
    value: function openLightbox(images, index) {
      this.props.dispatch(_booshReactLightbox.LightBoxActions.lightboxOpen(images, index));
    }
  }, {
    key: 'getData',
    value: function getData(pageNumber) {
      var Meta = {
        page: pageNumber
      };
      this.props.dispatch(_Creators2.default.getMediaAttempt(Meta));
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var pageNumber = this.props.pageNumber;

      this.getData(pageNumber);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      if (newProps.pageNumber !== this.props.pageNumber) {
        this.getData(newProps.pageNumber);
      }
    }
  }, {
    key: 'renderMedia',
    value: function renderMedia(loading, media) {
      var z = this;
      var images = [];

      if (loading) {
        return _react2.default.createElement(_booshReactComponents.Loading, null);
      }
      return _react2.default.createElement(
        _reactFoundation.Row,
        { upOnSmall: 1, upOnMedium: 2, upOnLarge: 5 },
        media.map(function (item, id) {
          images.push(item.url);
          return _react2.default.createElement(
            _reactFoundation.Column,
            { key: id },
            _react2.default.createElement(
              'button',
              { onClick: function onClick() {
                  return z.openLightbox(images, id);
                } },
              _react2.default.createElement('img', { src: item.url })
            )
          );
        })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          media = _props.media,
          pageNumber = _props.pageNumber,
          count = _props.count,
          loading = _props.loading;


      return _react2.default.createElement(
        'div',
        { className: 'media' },
        this.renderMedia(loading, media),
        _react2.default.createElement(_booshReactPagination.Pagination, { path: '/media/', pageNumber: pageNumber, count: count })
      );
    }
  }]);
  return MediaCollection;
}(_react2.default.Component);

/* Actions */

/* React */


MediaCollection.propTypes = {
  loading: _react2.default.PropTypes.bool,
  media: _react2.default.PropTypes.array,
  pageNumber: _react2.default.PropTypes.number,
  count: _react2.default.PropTypes.number
};

MediaCollection.defaultProps = {
  loading: true,
  media: [],
  pageNumber: 1,
  count: 0
};

var mapStateToProps = function mapStateToProps(state, props) {
  return {
    loading: state.media.attempting,
    media: (0, _MediaSelector.getVisibleMedia)(state, props)
  };
};

/*function preload(params, req) {
  return [
    [GetCommentsSaga, {}]
  ];
}
Comments.preload = preload;*/

exports.default = (0, _reactRedux.connect)(mapStateToProps)(MediaCollection);
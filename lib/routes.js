'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _MediaList = require('./Containers/MediaList');

var _MediaList2 = _interopRequireDefault(_MediaList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var routes = _react2.default.createElement(
    _reactRouter.Route,
    { path: 'media' },
    _react2.default.createElement(_reactRouter.IndexRoute, { component: _MediaList2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: ':pageNumber', component: _MediaList2.default })
  );
  return routes;
};
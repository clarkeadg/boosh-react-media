'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getVisibleMedia = undefined;

var _reselect = require('reselect');

/* Private */

var allMedia = function allMedia(state, props) {
  return state.media;
};

/* Export */

var getVisibleMedia = exports.getVisibleMedia = (0, _reselect.createSelector)([allMedia], function (media) {
  return media.result.map(function (id) {
    return media.entities[id];
  });
});
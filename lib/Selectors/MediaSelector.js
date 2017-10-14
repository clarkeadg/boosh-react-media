'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMediaById = exports.getVisibleMedia = undefined;

var _reselect = require('reselect');

/* Private */

var allMedia = function allMedia(state, props) {
  return state.media;
};

var mediaId = function mediaId(state, props) {
  return props.media_id;
};

/* Export */

var getVisibleMedia = exports.getVisibleMedia = (0, _reselect.createSelector)([allMedia], function (media) {
  return media.result.map(function (id) {
    return media.entities[id];
  });
});

var getMediaById = exports.getMediaById = (0, _reselect.createSelector)([allMedia, mediaId], function (media, id) {
  return media.entities[id];
});
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Types = require('./Types');

var _Types2 = _interopRequireDefault(_Types);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* MEDIA */
var getMediaAttempt = function getMediaAttempt(meta) {
  return { type: _Types2.default.GET_MEDIA_REQUEST, meta: meta };
};
var getMediaSuccess = function getMediaSuccess(payload) {
  return { type: _Types2.default.GET_MEDIA_SUCCESS, payload: payload };
};
var getMediaFailure = function getMediaFailure(errorCode) {
  return { type: _Types2.default.GET_MEDIA_FAILURE, errorCode: errorCode };
};

var uploadImageAttempt = function uploadImageAttempt(meta) {
  return { type: _Types2.default.UPLOAD_IMAGE_REQUEST, meta: meta };
};
var uploadImageSuccess = function uploadImageSuccess(payload) {
  return { type: _Types2.default.UPLOAD_IMAGE_SUCCESS, payload: payload };
};
var uploadImageFailure = function uploadImageFailure(errorCode) {
  return { type: _Types2.default.UPLOAD_IMAGE_FAILURE, errorCode: errorCode };
};

var removeImageAttempt = function removeImageAttempt(meta) {
  return { type: _Types2.default.REMOVE_IMAGE_REQUEST, meta: meta };
};
var removeImageSuccess = function removeImageSuccess(payload) {
  return { type: _Types2.default.REMOVE_IMAGE_SUCCESS, payload: payload };
};
var removeImageFailure = function removeImageFailure(errorCode) {
  return { type: _Types2.default.REMOVE_IMAGE_FAILURE, errorCode: errorCode };
};

/**
 Makes available all the action creators we've created.
 */
exports.default = {

  getMediaAttempt: getMediaAttempt,
  getMediaSuccess: getMediaSuccess,
  getMediaFailure: getMediaFailure,

  uploadImageAttempt: uploadImageAttempt,
  uploadImageSuccess: uploadImageSuccess,
  uploadImageFailure: uploadImageFailure,

  removeImageAttempt: removeImageAttempt,
  removeImageSuccess: removeImageSuccess,
  removeImageFailure: removeImageFailure

};
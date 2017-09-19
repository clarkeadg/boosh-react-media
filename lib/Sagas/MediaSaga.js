'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _effects = require('redux-saga/effects');

var _reduxSaga = require('redux-saga');

var _Types = require('../Actions/Types');

var _Types2 = _interopRequireDefault(_Types);

var _Creators = require('../Actions/Creators');

var _Creators2 = _interopRequireDefault(_Creators);

var _normalizr = require('normalizr');

var _MediaSchema = require('../Schemas/MediaSchema');

var _MediaSchema2 = _interopRequireDefault(_MediaSchema);

var _booshReactPagination = require('boosh-react-pagination');

var _booshReactUsers = require('boosh-react-users');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (api) {
  var _marked = [attemptGetMedia, watchGetMediaAttempt, attemptUploadImage, watchUploadImageAttempt, attemptRemoveImage, watchRemoveImageAttempt].map(_regenerator2.default.mark);

  function attemptGetMedia(meta) {
    var response, count, data, payload;
    return _regenerator2.default.wrap(function attemptGetMedia$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _effects.call)(api.getMedia, meta);

          case 2:
            response = _context.sent;


            console.log('GOT MEDIA', response.data);

            // success?

            if (!(response && response.ok)) {
              _context.next = 15;
              break;
            }

            count = response.data.meta.pagination.total;
            data = response.data.data;
            payload = (0, _normalizr.normalize)(data, (0, _normalizr.arrayOf)(_MediaSchema2.default));

            if (!payload.result.length) {
              payload.entities.media = {};
            }

            //console.log('NORMALIZED DATA', payload)
            _context.next = 11;
            return (0, _effects.put)(_booshReactPagination.PaginationActions.gotPaginationCount({ count: count }));

          case 11:
            _context.next = 13;
            return (0, _effects.put)(_Creators2.default.getMediaSuccess(payload));

          case 13:
            _context.next = 17;
            break;

          case 15:
            _context.next = 17;
            return (0, _effects.put)(_Creators2.default.getMediaFailure(response.data));

          case 17:
          case 'end':
            return _context.stop();
        }
      }
    }, _marked[0], this);
  }

  function watchGetMediaAttempt() {
    var _ref, meta;

    return _regenerator2.default.wrap(function watchGetMediaAttempt$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!true) {
              _context2.next = 9;
              break;
            }

            _context2.next = 3;
            return (0, _effects.take)(_Types2.default.GET_MEDIA_REQUEST);

          case 3:
            _ref = _context2.sent;
            meta = _ref.meta;
            _context2.next = 7;
            return (0, _effects.call)(attemptGetMedia, meta);

          case 7:
            _context2.next = 0;
            break;

          case 9:
          case 'end':
            return _context2.stop();
        }
      }
    }, _marked[1], this);
  }

  function attemptUploadImage(meta) {
    var response;
    return _regenerator2.default.wrap(function attemptUploadImage$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0, _effects.call)(api.uploadImage, meta);

          case 2:
            response = _context3.sent;


            console.log('GOT MEDIA', response.data);

            // success?

            if (!(response && response.ok)) {
              _context3.next = 9;
              break;
            }

            _context3.next = 7;
            return (0, _effects.put)(_booshReactUsers.UsersActions.getUsersAttempt({ id: meta.user_id }));

          case 7:
            _context3.next = 11;
            break;

          case 9:
            _context3.next = 11;
            return (0, _effects.put)(_Creators2.default.getMediaFailure(response.data));

          case 11:
          case 'end':
            return _context3.stop();
        }
      }
    }, _marked[2], this);
  }

  function watchUploadImageAttempt() {
    var _ref2, _meta;

    return _regenerator2.default.wrap(function watchUploadImageAttempt$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            if (!true) {
              _context4.next = 9;
              break;
            }

            _context4.next = 3;
            return (0, _effects.take)(_Types2.default.UPLOAD_IMAGE_REQUEST);

          case 3:
            _ref2 = _context4.sent;
            _meta = _ref2.meta;
            _context4.next = 7;
            return (0, _effects.call)(attemptUploadImage, _meta);

          case 7:
            _context4.next = 0;
            break;

          case 9:
          case 'end':
            return _context4.stop();
        }
      }
    }, _marked[3], this);
  }

  function attemptRemoveImage(meta) {
    var response;
    return _regenerator2.default.wrap(function attemptRemoveImage$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return (0, _effects.call)(api.removeImage, meta.id);

          case 2:
            response = _context5.sent;


            console.log('GOT MEDIA', response.data);

            // success?

            if (!(response && response.ok)) {
              _context5.next = 9;
              break;
            }

            _context5.next = 7;
            return (0, _effects.put)(_booshReactUsers.UsersActions.getUsersAttempt({ id: meta.user_id }));

          case 7:
            _context5.next = 11;
            break;

          case 9:
            _context5.next = 11;
            return (0, _effects.put)(_Creators2.default.removeImageFailure(response.data));

          case 11:
          case 'end':
            return _context5.stop();
        }
      }
    }, _marked[4], this);
  }

  function watchRemoveImageAttempt() {
    var _ref3, _meta2;

    return _regenerator2.default.wrap(function watchRemoveImageAttempt$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            if (!true) {
              _context6.next = 9;
              break;
            }

            _context6.next = 3;
            return (0, _effects.take)(_Types2.default.REMOVE_IMAGE_REQUEST);

          case 3:
            _ref3 = _context6.sent;
            _meta2 = _ref3.meta;
            _context6.next = 7;
            return (0, _effects.call)(attemptRemoveImage, _meta2);

          case 7:
            _context6.next = 0;
            break;

          case 9:
          case 'end':
            return _context6.stop();
        }
      }
    }, _marked[5], this);
  }

  return {
    watchGetMediaAttempt: watchGetMediaAttempt,
    attemptGetMedia: attemptGetMedia,
    watchUploadImageAttempt: watchUploadImageAttempt,
    attemptUploadImage: attemptUploadImage,
    attemptRemoveImage: attemptRemoveImage,
    watchRemoveImageAttempt: watchRemoveImageAttempt
  };
};

/* SCHEMAS */
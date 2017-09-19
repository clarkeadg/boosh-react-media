'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _normalizr = require('normalizr');

var MediaSchema = new _normalizr.Schema('media', { idAttribute: 'id' });

var UserSchema = new _normalizr.Schema('user', { idAttribute: 'id' });

MediaSchema.define({
  user: UserSchema
});

exports.default = MediaSchema;
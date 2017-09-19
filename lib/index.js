'use strict';

var SetMainPhotoButton = require('./Buttons/SetMainPhotoButton');
var ManagePhotos = require('./Components/ManagePhotos/ManagePhotos');
var MediaActions = require('./Actions/Creators');
var MediaSaga = require('./Sagas/MediaSaga');
var MediaApi = require('./Services/MediaApi');
var MediaReducer = require('./Reducers/MediaReducer');
var MediaRoutes = require('./routes');

module.exports = {
  SetMainPhotoButton: SetMainPhotoButton.default,
  ManagePhotos: ManagePhotos.default,
  MediaActions: MediaActions.default,
  MediaSaga: MediaSaga.default,
  MediaApi: MediaApi.default,
  MediaReducer: MediaReducer.default,
  MediaRoutes: MediaRoutes.default
};
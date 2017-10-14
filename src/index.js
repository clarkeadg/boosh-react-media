
const SetMainPhotoButton = require('./Buttons/SetMainPhotoButton');
const ManagePhotos       = require('./Components/ManagePhotos/ManagePhotos');
const MediaActions       = require('./Actions/Creators');
const MediaSaga          = require('./Sagas/MediaSaga');
const MediaSelector      = require('./Selectors/MediaSelector');
const MediaApi           = require('./Services/MediaApi');
const MediaReducer       = require('./Reducers/MediaReducer');
const MediaRoutes        = require('./routes');

module.exports = {
  SetMainPhotoButton:  SetMainPhotoButton.default,
  ManagePhotos:        ManagePhotos.default,
  MediaActions:        MediaActions.default,
  MediaSaga:           MediaSaga.default,
  getMediaById:        MediaSelector.getMediaById,
  MediaApi:            MediaApi.default,
  MediaReducer:        MediaReducer.default,
  MediaRoutes:         MediaRoutes.default
}

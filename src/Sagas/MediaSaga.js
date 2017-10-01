import { take, put, call } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'
import Types from '../Actions/Types'
import Actions from '../Actions/Creators'
import { normalize, arrayOf } from 'normalizr'

/* SCHEMAS */
import MediaSchema from '../Schemas/MediaSchema'

import { PaginationActions } from 'boosh-react-pagination'
import { UsersActions } from 'boosh-react-users'

export default (api) => {

  function * attemptGetMedia (meta) {

    // make the call to the api
    const response = yield call(api.getMedia, meta)

    console.log('GOT MEDIA',response.data)

    // success?
    if (response && response.ok) {

      let count = response.data.meta.pagination.total;
      let data = response.data.data;

      let payload = normalize(data, arrayOf(MediaSchema));
      if (!payload.result.length) {
        payload.entities.media = {};
      }

      //console.log('NORMALIZED DATA', payload)
      yield put(PaginationActions.gotPaginationCount({ count: count }))
      //yield put(UsersActions.getUsersSuccess(payload))
      yield put(Actions.getMediaSuccess(payload))


      //if (response.data.length) yield put(Actions.getMediaSuccess(object_group, object_id, response.data))
    } else {
      yield put(Actions.getMediaFailure(response.data))
    }
  }

  function * watchGetMediaAttempt () {
    //yield takeEvery(Types.GET_FAVORITE_REQUEST, attemptGetFavorites)
    // daemonize
    while (true) {
      // wait for LOGIN_REQUEST actions to arrive
      const { meta } = yield take(Types.GET_MEDIA_REQUEST)
      // call attemptLogin to perform the actual work
      yield call(attemptGetMedia, meta)
    }
  }

  function * attemptUploadImage (meta) {

    let query = {
      user_id: meta.user_id,
      files: meta.files
    }

    // make the call to the api
    const response = yield call(api.uploadImage, query)

    console.log('GOT MEDIA',response.data)

    // success?
    if (response && response.ok) {

      if (meta.setMain) {
        yield put(UsersActions.updateUsersAttempt({
          id: meta.user_id,
          photo: response.data.url
        }))
      } else {
        yield put(UsersActions.getUsersAttempt({ id: meta.user_id }));
      }

      //if (response.data.length) yield put(Actions.getMediaSuccess(object_group, object_id, response.data))
    } else {
      yield put(Actions.getMediaFailure(response.data))
    }
  }

  function * watchUploadImageAttempt () {
    //yield takeEvery(Types.GET_FAVORITE_REQUEST, attemptGetFavorites)
    // daemonize
    while (true) {
      // wait for LOGIN_REQUEST actions to arrive
      const { meta } = yield take(Types.UPLOAD_IMAGE_REQUEST)
      // call attemptLogin to perform the actual work
      yield call(attemptUploadImage, meta)
    }
  }

  function * attemptRemoveImage (meta) {

    // make the call to the api
    const response = yield call(api.removeImage, meta.id)

    console.log('GOT MEDIA',response.data)

    // success?
    if (response && response.ok) {

      //let count = response.data.meta.pagination.total;
      //let data = response.data.data;

      //let payload = normalize(data, arrayOf(MediaSchema));
      //if (!payload.result.length) {
      //  payload.entities.media = {};
      //}

      //console.log('NORMALIZED DATA', payload)
      //yield put(PaginationActions.gotPaginationCount({ count: count }))
      //yield put(UsersActions.getUsersSuccess(payload))
      //yield put(Actions.getMediaSuccess(payload))

      yield put(UsersActions.getUsersAttempt({ id: meta.user_id }));

      //if (response.data.length) yield put(Actions.getMediaSuccess(object_group, object_id, response.data))
    } else {
      yield put(Actions.removeImageFailure(response.data))
    }
  }

  function * watchRemoveImageAttempt () {
    //yield takeEvery(Types.GET_FAVORITE_REQUEST, attemptGetFavorites)
    // daemonize
    while (true) {
      // wait for LOGIN_REQUEST actions to arrive
      const { meta } = yield take(Types.REMOVE_IMAGE_REQUEST)
      // call attemptLogin to perform the actual work
      yield call(attemptRemoveImage, meta)
    }
  }

  return {
    watchGetMediaAttempt,
    attemptGetMedia,
    watchUploadImageAttempt,
    attemptUploadImage,
    attemptRemoveImage,
    watchRemoveImageAttempt
  }
}

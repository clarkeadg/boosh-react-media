import Types from './Types'

/* MEDIA */
const getMediaAttempt = (meta) => ({ type: Types.GET_MEDIA_REQUEST, meta })
const getMediaSuccess = (payload) => ({ type: Types.GET_MEDIA_SUCCESS, payload })
const getMediaFailure = (errorCode) => ({ type: Types.GET_MEDIA_FAILURE, errorCode })

const uploadImageAttempt = (meta) => ({ type: Types.UPLOAD_IMAGE_REQUEST, meta })
const uploadImageSuccess = (payload) => ({ type: Types.UPLOAD_IMAGE_SUCCESS, payload })
const uploadImageFailure = (errorCode) => ({ type: Types.UPLOAD_IMAGE_FAILURE, errorCode })

const removeImageAttempt = (meta) => ({ type: Types.REMOVE_IMAGE_REQUEST, meta })
const removeImageSuccess = (payload) => ({ type: Types.REMOVE_IMAGE_SUCCESS, payload })
const removeImageFailure = (errorCode) => ({ type: Types.REMOVE_IMAGE_FAILURE, errorCode })

/**
 Makes available all the action creators we've created.
 */
export default {

  getMediaAttempt,
  getMediaSuccess,
  getMediaFailure,

  uploadImageAttempt,
  uploadImageSuccess,
  uploadImageFailure,

  removeImageAttempt,
  removeImageSuccess,
  removeImageFailure
  
}

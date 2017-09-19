// A list of all actions in the system.
import { createTypes } from 'reduxsauce'

export default createTypes(`

  GET_MEDIA_REQUEST
  GET_MEDIA_SUCCESS
  GET_MEDIA_FAILURE

  UPLOAD_IMAGE_REQUEST
  UPLOAD_IMAGE_SUCCESS
  UPLOAD_IMAGE_FAILURE

  REMOVE_IMAGE_REQUEST
  REMOVE_IMAGE_SUCCESS
  REMOVE_IMAGE_FAILURE

`)

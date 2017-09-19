import Types from '../Actions/Types'
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = Immutable({
  entities: {},
  result: [],
  errorCode: null,
  attempting: false
})

// request
const attempt = (state, action) =>
  state.merge({ attempting: true })

// recieve
const success = (state, action) => {
  return state.merge({
    attempting: false,
    errorCode: null,
    entities: state.entities.merge(action.payload.entities.media),
    result: action.payload.result
  })
}

// fail
const failure = (state, action) =>
  state.merge({ attempting: false, errorCode: action.errorCode })

// map our types to our handlers
const ACTION_HANDLERS = {
  [Types.GET_MEDIA_REQUEST]: attempt,
  [Types.GET_MEDIA_SUCCESS]: success,
  [Types.GET_MEDIA_FAILURE]: failure
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)

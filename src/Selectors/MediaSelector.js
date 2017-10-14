import { createSelector } from 'reselect'

/* Private */

const allMedia = (state, props) => state.media

const mediaId = (state, props) => props.media_id

/* Export */

export const getVisibleMedia = createSelector(
  [ allMedia ],
  ( media ) => {
    return media.result.map((id) => {
      return media.entities[id]
    })
  }
)

export const getMediaById = createSelector(
  [ allMedia, mediaId ],
  ( media, id ) => {
    return media.entities[id]
  }
)

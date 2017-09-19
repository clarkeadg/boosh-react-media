import { createSelector } from 'reselect'

/* Private */

const allMedia = (state, props) => state.media

/* Export */

export const getVisibleMedia = createSelector(
  [ allMedia ],
  ( media ) => {
    return media.result.map((id) => {
      return media.entities[id]
    })
  }
)

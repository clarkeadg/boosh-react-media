
import React from 'react'
import { Route, IndexRoute } from 'react-router'

import MediaList from './Containers/MediaList'

export default () => {
  const routes = (
    <Route path="media">
      <IndexRoute component={MediaList} />
      <Route path=":pageNumber" component={MediaList} />
    </Route>
  );
  return routes;
};


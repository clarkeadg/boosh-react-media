
/* React */
import React from 'react'
import { connect } from 'react-redux'

/* Components */
import { Row, Column } from 'react-foundation'
import { Portlet } from 'boosh-react-components'
import { Link } from 'react-router'

import { getPageNumber, getPageCount } from 'boosh-react-pagination'

/* Collections */
import MediaCollection from '../Collections/MediaCollection'

class MediaList extends React.Component {

  render() {
    let { pageNumber, count } = this.props;
    return (<MediaCollection pageNumber={pageNumber} count={count}/>)
  }

}

MediaList.propTypes = {
  pageNumber: React.PropTypes.number,
  count: React.PropTypes.number
}

MediaList.defaultProps = {
  pageNumber: 1,
  count: 0
}

const mapStateToProps = (state, props) => {
  return {
    pageNumber: getPageNumber(state, props),
    count: getPageCount(state, props)
  }
}

export default connect(mapStateToProps)(MediaList)


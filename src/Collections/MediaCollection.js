
/* React */
import React from 'react';
import { connect } from 'react-redux'

/* Actions */
import Actions from '../Actions/Creators'

/* Selectors */
import { getVisibleMedia } from '../Selectors/MediaSelector'

import { LightBoxActions } from 'boosh-react-lightbox'

/* Sagas */
//import GetCommentsSaga from '../../Sagas/Preloaders/GetCommentsSaga'

/* Components */
import { Row, Column, Button } from 'react-foundation';
import { Portlet, Loading } from 'boosh-react-components'
import { Pagination } from 'boosh-react-pagination'
import { Link } from 'react-router'

class MediaCollection extends React.Component {

  openLightbox(images, index) {
   this.props.dispatch(LightBoxActions.lightboxOpen(images, index))
  };

  getData(pageNumber) {
    let Meta = {
      page: pageNumber
    }
    this.props.dispatch(Actions.getMediaAttempt(Meta));
  }

  componentDidMount() {
    let { pageNumber } = this.props
    this.getData(pageNumber)
  }

  componentWillReceiveProps (newProps) {
    if (newProps.pageNumber !== this.props.pageNumber) {
      this.getData(newProps.pageNumber)
    }
  }

  renderMedia(loading, media) {
    const z = this;
    let images = []

    if (loading) {
      return (
        <Loading/>
      )
    }
    return (
      <Row upOnSmall={1} upOnMedium={2} upOnLarge={5}>
        {media.map((item, id) => {
          images.push(item.url)
          return (
            <Column key={id}>
              <button onClick={()=>z.openLightbox(images,id)}>
                <img src={item.url}/>
              </button>
            </Column>
          )
        })}
      </Row>
    )
  }

  render() {

    let { media, pageNumber, count, loading } = this.props;

    return (
      <div className="media">
        { this.renderMedia(loading, media) }
        <Pagination path="/media/" pageNumber={pageNumber} count={count}/>
      </div>
    )
  }

}

MediaCollection.propTypes = {
  loading: React.PropTypes.bool,
  media: React.PropTypes.array,
  pageNumber: React.PropTypes.number,
  count: React.PropTypes.number
}

MediaCollection.defaultProps = {
  loading: true,
  media: [],
  pageNumber: 1,
  count: 0
}

const mapStateToProps = (state, props) => {
  return {
    loading: state.media.attempting,
    media: getVisibleMedia(state, props)
  }
}

/*function preload(params, req) {
  return [
    [GetCommentsSaga, {}]
  ];
}
Comments.preload = preload;*/

export default connect(mapStateToProps)(MediaCollection)


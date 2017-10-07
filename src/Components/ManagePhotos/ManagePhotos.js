
/* React */
import React from 'react'
import { connect } from 'react-redux';

import SetMainPhotoButton from '../../Buttons/SetMainPhotoButton'
import DeletePhotoButton from '../../Buttons/DeletePhotoButton'

import { Thumbnail, Button } from 'react-foundation'
import { UsersActions, getUserById } from 'boosh-react-users'
import { getMe } from 'boosh-react-auth'
import { Portlet, Gallery } from 'boosh-react-components'

class ManagePhotos extends React.Component {

  render() {
    let { me, user, imgServer } = this.props
    if (!me.id || !user.id) return false;

    let imageServer = imgServer || 'http://local.uploads.boosh.io'

    let url = "";
    let images = [];
    user.media.data.map((v,i)=>{
      images.push({
        "id": v.id,
        "thumb": v.url,
        "imgfull": v.url
      })
    })

    return (
      <Portlet title={''} items={
        <div className="ManagePhotos">
          { /* <Gallery items={images}/> */ }
          { images.map((img,i) => {
            url = imageServer+img.thumb;
            return (
              <div key={i}>
                <Thumbnail width={100} src={url}/>
                { me.photo != url ? <SetMainPhotoButton url={img.thumb} user_id={me.id}/> : <Button>Main Photo</Button> }
                <DeletePhotoButton id={img.id} user_id={me.id}/>
              </div>
            )
          })}
        </div>
      } />
    )

  }

}

ManagePhotos.propTypes = {
  me: React.PropTypes.object,
  user: React.PropTypes.object
}

ManagePhotos.defaultProps = {
  me: {},
  user: {}
}

const mapStateToProps = (state, props) => {
  return {
    me: getMe(state, props),
    user: getUserById(state, props)
  }
}

export default connect(mapStateToProps)(ManagePhotos)


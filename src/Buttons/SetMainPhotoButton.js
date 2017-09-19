
/* React */
import React from 'react';
import { connect } from 'react-redux'

/* Actions */
import { UsersActions } from 'boosh-react-users'

/* Selectors */
import { getMe } from 'boosh-react-auth'

/* Components */
import { Button, Icon  } from 'react-foundation';

class SetMainPhotoButton extends React.Component {

  setMainPhoto(url, user_id) {
    console.log('SET MAIN PHOTO', url)

    this.props.dispatch(UsersActions.updateUsersAttempt({
      id: user_id,
      photo: url
    }))
  }

  render() {
    let { me, url } = this.props;
    if (!me || !url) return false; 

    return (
      <Button onClick={()=>{this.setMainPhoto(url, me.id)}}>
        <Icon name="fi-heart"/>Set Main Photo
      </Button>
    )
  }

}

SetMainPhotoButton.propTypes = {
  me: React.PropTypes.object,
  url: React.PropTypes.string
}

SetMainPhotoButton.defaultProps = {
  me: {},
  url: ''
}

const mapStateToProps = (state, props) => {
  return {
    me: getMe(state, props)
  }
}

export default connect(mapStateToProps)(SetMainPhotoButton)


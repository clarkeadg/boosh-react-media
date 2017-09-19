
/* React */
import React from 'react';
import { connect } from 'react-redux'

/* Actions */
import Actions from '../Actions/Creators'

/* Selectors */
import { getMe } from 'boosh-react-auth'

/* Components */
import { Button, Icon  } from 'react-foundation';

class DeletePhotoButton extends React.Component {

  deletePhoto(id) {
    console.log('DeletePhotoButton', id)

    this.props.dispatch(Actions.removeImageAttempt({
      id: id,
      user_id: this.props.user_id
    }))
  }

  render() {
    let { me, id } = this.props;
    if (!me || !id) return false; 

    return (
      <Button onClick={()=>{this.deletePhoto(id)}}>
        <Icon name="fi-trash"/>Delete Photo
      </Button>
    )
  }

}

DeletePhotoButton.propTypes = {
  me: React.PropTypes.object,
  id: React.PropTypes.number
}

DeletePhotoButton.defaultProps = {
  me: {},
  id: 0
}

const mapStateToProps = (state, props) => {
  return {
    me: getMe(state, props)
  }
}

export default connect(mapStateToProps)(DeletePhotoButton)


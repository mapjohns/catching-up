import React, { Component } from "react"
import { connect } from "react-redux"
import { updateComment } from "../../actions/commentAction"

class UpdateComment extends Component {


}

const mapDispatchToProps = (dispatch) => {
    return { 
        updateComment: content => dispatch(updateComment(content))}
}

export default connect(null, mapDispatchToProps)(UpdateComment)
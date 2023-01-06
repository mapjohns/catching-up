import React, { Component } from "react";
import { connect } from 'react-redux';


class CommentInput extends Component {



    render() {
        return(
            
        )

    }


}

const mapDispatchToProps = (dispatch) => {
    return { addComment: () => dispatch({type: "ADD_COMMENT"})}
}

export default connect(null, mapDispatchToProps)(CommentInput)
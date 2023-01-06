import React, { Component } from "react";
import { connect } from 'react-redux';
import CommentInput from "../components/comments/CommentInput";

class CommentsContainer extends Component {

    woof = () => {
        console.log("woof")
    }
    
    render() {
        return(
        <div>TEST
            <CommentInput woofs={() => console.log("WOOF")} />
        </div>
        )
    }

}

export default CommentsContainer
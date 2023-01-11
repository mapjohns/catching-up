import React, { Component } from "react"
import User from "./User"
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

class Users extends Component {

    renderUsers = () => this.props.allUsers.map(user => 
        <div>
            <Card style={{ width: '30rem' }}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <Link key={`User${user.user.id}`} to={`${this.props.match.url}/${user.user.id}`}>
                                {user.user.username}
                            </Link>
                            <Route exact path={`${this.props.match.url}/${user.user.id}`} render={() => 
                                                                              <User key={`user${user.user.id}user`}  
                                                                                    userID={user.user.id}
                                                                                    username={user.user.username} 
                                                                                    description={user.user.description}/> } />
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
        </div>

                                                             )

    render() {
        // debugger
        const loggedUser  = this.props.loggedUser
        return(
            <div>
                <br></br>
                <Card style={{ width: '30rem' }}>
                    <Card.Header>
                        <Link key={`LoggedUser${ loggedUser.id}`} to={`${this.props.match.url}/${loggedUser.id}/edit`}> My Profile </Link>
                    </Card.Header>
                    <Route path={`${this.props.match.url}/${loggedUser.id}/edit`} render={() => <User edit={"Edit"} key={`loggedUser${loggedUser.id}`} user={loggedUser} userID={loggedUser.id} username={loggedUser.username} description={loggedUser.description} />} />
                </Card>
                <br></br>
                <br></br>
                <Card style={{ width: '30rem' }}>
                <Card.Header>All Users</Card.Header>
                </Card>
                {this.renderUsers()}

            </div>
        )
    }

}

export default Users
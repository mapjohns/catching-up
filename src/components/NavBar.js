import React, { Component } from "react"
import { NavLink } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

class NavBar extends Component {

    render() {
        return(
            <Card 
            bg={'info'}
                  key={'primary'}
                  text={'white'}
                  >
                <Card.Header>
                <NavLink to="/" exact>
                    Home |
                </NavLink>
            
                <NavLink to="/posts" exact>
                    | All Posts |
                </NavLink>

                <NavLink to={`/users`}>
                    | Users 
                </NavLink>

                </Card.Header>
            </Card>
        )
    }

}

export default NavBar
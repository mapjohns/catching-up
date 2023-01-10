import React, { Component } from "react"
import { NavLink } from "react-router-dom";


class NavBar extends Component {

    render() {
        return(
            <ul>
            <li><NavLink to="/" exact>
              Sign-up
            </NavLink>
            </li>
            <li><NavLink to="/posts" exact>
                All Posts
            </NavLink>
            </li>
            <li><NavLink to={`/users`}>
                Users
            </NavLink>
            </li>
          </ul>
        )
    }

}

export default NavBar
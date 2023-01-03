import React, { Component } from "react"
import { NavLink } from "react-router-dom";


class NavBar extends Component {

    render() {
        return(
            <ul>
            <li><NavLink
              to="/"
              exact>
              Sign-up
            </NavLink>
            </li>
          </ul>
        )
    }

}

export default NavBar
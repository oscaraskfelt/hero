import React from 'react'
import { NavLink } from 'react-router-dom'
import {Nav, Ul, Li } from './navStyle'

export default () => {
    return (
        <Nav>
            <Ul>
                <Li>
                    <NavLink exact to="/" activeClassName="active">Hem</NavLink>
                </Li>
                <Li>
                    <NavLink exact to="/about" activeClassName="active">Om</NavLink>
                </Li>
            </Ul>
        </Nav>
    )
}

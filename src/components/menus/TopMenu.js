import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Styled from 'styled-components';


const Title = Styled.h1`
  transition: all 200ms ease-in-out;
  &:hover,&.active {
    color: #7e9e9d;
  }
`

const Nav = Styled(Link)`
  transition: all 200ms ease-in-out;
  &:hover,&.active {
    color: #7e9e9d;
  }
  &.active {
    color: #7e9e9d;
  }
`


class TopMenu extends Component {

  render() {
    return(
      <div id='topMenuContainer'>
        <Link to={`/`}>
          <Title id='topMenuTitle'>Lara Vanderlaan</Title>
        </Link>
        <NavLink>
          <Nav to={'/about-me'} className='topMenuText'>About Me</Nav>
        </NavLink>
      </div>
    )
  }
}

export default TopMenu;

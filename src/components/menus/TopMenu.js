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
        <NavLink id='topMenuNavContainer'>
          <Nav to={'/about-me'} className='topMenuText'>About Me</Nav>
          <Nav to={'/projects'} className='topMenuText'>Projects</Nav>
          <Nav to={'/contact'} className='topMenuText'>Contact</Nav>
        </NavLink>
      </div>
    )
  }
}

export default TopMenu;

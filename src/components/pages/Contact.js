import React, { Component } from 'react';
import Styled from 'styled-components';


const Instagram = Styled.a`
  transition: all 200ms ease-in-out;
  &:hover,&.active {
    color: #7e9e9d;
  }
`

const Niya = Styled.a`
  transition: all 200ms ease-in-out;
  &:hover,&.active {
    color: #7e9e9d;
  }
`


class Contact extends Component {

  render() {
    return(
      <div id='mainContactContainer'>
        <Instagram id='instagramLink' href='https://www.instagram.com/trippieehippy/' target='_blank'>My Instagram</Instagram>
        <Niya id='niyaLink' href='http://niyamodels.com/page/contact/' target='_blank'>Niya Models</Niya>
      </div>
    )
  }
}

export default Contact;

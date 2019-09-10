import React, { Component } from 'react';


class AboutMe extends Component {

  componentDidMount() {
    document.title='About Me'
  }

  render() {
    return(
      <h1>About Me</h1>
    )
  }
}

export default AboutMe;

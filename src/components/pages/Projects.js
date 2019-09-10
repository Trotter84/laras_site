import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';




class Projects extends Component {

  componentDidMount() {
    document.title='Projects'
  }

  render() {
    return(
      <div id='projectsContainer'>
        <div id='projectsSubContainer'>
          <Carousel id='carouselContainer' autoPlay interval={4000} showThumbs={false} infiniteLoop>
              <div className='frontPagePhoto1'>
              </div>
              <div className='frontPagePhoto2'>
              </div>
              <div className='frontPagePhoto3'>
              </div>
          </Carousel>
        </div>
      </div>
    )
  }
}

export default Projects;

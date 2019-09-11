import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import BikiniShot1 from '../../images/bikini_shot.jpg';
import BikiniShot2 from '../../images/bikini_shot2.jpg';
import BlackBikini1 from '../../images/black_bikini.jpg';
import BlackBikini2 from '../../images/black_bikini2.jpg';


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
                <img src={BikiniShot1} className='frontPageImage' alt='Neon green bikini shot' />
              </div>
              <div className='frontPagePhoto2'>
                <img src={BikiniShot2} className='frontPageImage' alt='Neon green bikini shot two' />
              </div>
              <div className='frontPagePhoto3'>
                <img src={BlackBikini1} className='frontPageImage' alt='Black bikini shot' />
              </div>
              <div className='frontPagePhoto4'>
                <img src={BlackBikini2} className='frontPageImage' alt='Black bikini shot two' />
              </div>
          </Carousel>
        </div>
      </div>
    )
  }
}

export default Projects;

import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import BikiniShot1 from '../../images/bikini_shot.jpg';
import BikiniShot2 from '../../images/bikini_shot2.jpg';
import BlackBikini1 from '../../images/black_bikini.jpg';
import BlackBikini2 from '../../images/black_bikini2.jpg';
import BlueDressInChair from '../../images/blue_dress_in_chair.jpg';
import FluffyHoodieFront from '../../images/fluffy_hoodie_front.jpg';
import FluffyHoodie from '../../images/fluffy_hoodie.jpg';
import YogaStretchingArms from '../../images/yoga_stretching_arms.jpg';
import YogaStretching from '../../images/yoga_stretching.jpg';


class Projects extends Component {

  componentDidMount() {
    document.title='Projects'
  }

  render() {
    return(
      <div id='mainProjectsContainer'>
        <div id='leftProjectsContainer'>
          <div id='leftProjectsSubContainer'>
            <Carousel id='leftCarouselContainer' autoPlay interval={5000} showThumbs={false} infiniteLoop>
                <div className='leftPagePhoto1'>
                  <img src={BikiniShot1} className='leftPageImage' alt='Neon green bikini shot' />
                </div>
                <div className='leftPagePhoto2'>
                  <img src={BikiniShot2} className='leftPageImage' alt='Neon green bikini shot two' />
                </div>
                <div className='leftPagePhoto3'>
                  <img src={BlackBikini1} className='leftPageImage' alt='Black bikini shot' />
                </div>
                <div className='leftPagePhoto4'>
                  <img src={BlackBikini2} className='leftPageImage' alt='Black bikini shot two' />
                </div>
            </Carousel>
          </div>
        </div>

        <div id='rightProjectsContainer'>
          <div id='rightProjectsSubContainer'>
            <Carousel id='rightCarouselContainer' autoPlay interval={5000} showThumbs={false} infiniteLoop>
                <div className='rightPagePhoto1'>
                  <img src={BlueDressInChair} className='rightPageImage' alt='Sitting in chair with blue dress' />
                </div>
                <div className='rightPagePhoto2'>
                  <img src={FluffyHoodieFront} className='rightPageImage' alt='Fluffy hoodie dress on runway' />
                </div>
                <div className='rightPagePhoto3'>
                  <img src={FluffyHoodie} className='rightPageImage' alt='Fluffy hoodie dress on runway shot two' />
                </div>
                <div className='rightPagePhoto4'>
                  <img src={YogaStretchingArms} className='rightPageImage' alt='Doing yoga and stretching arms' />
                </div>
                <div className='rightPagePhoto5'>
                  <img src={YogaStretching} className='rightPageImage' alt='Doing yoga and stretching legs' />
                </div>
            </Carousel>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects;

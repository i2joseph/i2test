import React, { Component } from 'react';
import { Link } from 'react-router';

import { Carousel } from 'react-bootstrap';

class Landing extends Component {
  render() {
    return (
      <div id="carousel">
        <Carousel>
          <Carousel.Item>
            <img src="http://www.industryintel.com/_resources/images/slideimages/Coverflow01.jpg"/>
          </Carousel.Item>

          <Carousel.Item>
            <img src="http://www.industryintel.com/_resources/images/slideimages/Coverflow02.jpg"/>
          </Carousel.Item>

          <Carousel.Item>
            <img src="http://www.industryintel.com/_resources/images/slideimages/Coverflow03.jpg"/>
          </Carousel.Item>

          <Carousel.Item>
            <img src="http://www.industryintel.com/_resources/images/slideimages/Coverflow04.jpg"/>
          </Carousel.Item>

          <Carousel.Item>
            <img src="http://www.industryintel.com/_resources/images/slideimages/Coverflow05.jpg"/>
          </Carousel.Item>

          <Carousel.Item>
            <img src="http://www.industryintel.com/_resources/images/slideimages/Coverflow06.jpg"/>
          </Carousel.Item>
        </Carousel>
      </div>
    )
  }
};

export default Landing;

import React, { Component } from 'react';
import { Link } from 'react-router';

import { Carousel, Jumbotron } from 'react-bootstrap';

class Landing extends Component {
  render() {
    return (
      <div>
        <div id="jumbotron">
          <Jumbotron>
            <h1>Who Are We?</h1>
            <br />
            <p>Industry Intelligence Inc., along with sister company Forestweb, gives you a comprehensive view of business and market-moving events, all within an intuitive, easy-to-use format that promotes collaboration and action. We gather, filter and connect the relevant market intelligence your company needs to drive its decisions and operations.</p>
          </Jumbotron>
        </div>
        <br />
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

            <Carousel.Item>
              <img src="http://www.industryintel.com/_resources/images/slideimages/Coverflow07.jpg"/>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    )
  }
};

export default Landing;

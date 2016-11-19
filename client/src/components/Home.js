import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TrendingTopics from './RadarChart';
import LatestNews from './LatestNews'
import { getIntel } from '../actions/index';

class Home extends Component {

  componentWillMount() {
    this.props.getIntel(this.props.currentNewsCounter ? this.props.currentNewsCounter : 0);
  }

  getLabelList(data) {
    if(!data) {
      return [];
    }
    return data.map((eachData) => {
      return eachData.topic;
    })
  }

  getDataList(data) {
    if(!data) {
      return [];
    }
    return data.map((eachData) => {
      return eachData.totalarticles;
    })
  }

  render() {

    let topicsLabelList = this.getLabelList(this.props.allTopics);
    let topicsDataList = this.getDataList(this.props.allTopics);

    // console.log(topicsLabelList)

    return (
      <div>
        react app
        <TrendingTopics 
          topicsLabel={topicsLabelList}
          topicsData={topicsDataList}
          backgroundColor={'rgba(255, 0, 0, 0.2)'}
          borderColor={'rgba(255, 0, 0, 1)'}
          pointBackgroundColor={'rgba(255, 0, 0, 1)'}
          pointBorderColor={'#fff'}
          pointHoverBackgroundColor={'#fff'}
          pointHoverBorderColor={'rgba(255, 0, 0, 1)'}
        />
      </div>
    )
  }
};

/************ component placeholder *************/

        // <LatestNews />

/***************************/

const mapStateToProps = (state) => {
  // console.log("CURRENTNEWS: ", state.currentNews.currentNews)
  return {
    allTopics: state.allTopics.allTopics
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getIntel }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
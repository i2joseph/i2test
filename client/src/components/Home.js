import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TrendingTopics from './TrendingTopics';
import LatestNews from './LatestNews'
import { getIntel } from '../actions/index';

class Home extends Component {

  componentWillMount() {
    this.props.getIntel(this.props.currentNewsCounter ? this.props.currentNewsCounter : 0);
  }

  render() {
    return (
      <div>
        react app
        <TrendingTopics id="radar" />
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
    currentNews: state.currentNews.currentNews,
    currentNewsCounter: state.currentNews.newsCounter
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getIntel }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
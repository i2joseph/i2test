import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Topic from './Topic';
import LatestNews from './LatestNews'
import { getIntel } from '../actions/index';

class Home extends Component {

  componentWillMount() {
    this.props.getIntel(this.props.currentNewsCounter ? this.props.currentNewsCounter : 0);
  }

  component

  render() {
    return (
      <div>
        <LatestNews 
          topic={this.props.currentNews ? this.props.currentNews.topic : null}
          articles={this.props.currentNews ? this.props.currentNews.articles : null}
          counter={this.props.currentNews ? this.props.currentNewsCounter : null}
        />
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  console.log("CURRENTNEWS: ", state.currentNews.currentNews)
  return {
    allTopics: state.allTopics.allTopics,
    currentNews: state.currentNews.currentNews,
    currentNewsCounter: state.currentNews.newsCounter
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getIntel }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
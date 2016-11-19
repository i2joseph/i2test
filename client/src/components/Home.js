import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Topic from './Topic';
import { getIntel } from '../actions/index';

class Home extends Component {

  componentWillMount() {
    this.props.getIntel(this.props.currentNewsCounter + 1 ? this.props.currentNewsCounter : 0);
  }

  component

  render() {
    return (
      <div>
        <h1>current news</h1>
        <p>{this.props.currentNews ? this.props.currentNews.topic : null}</p>
        <h1>counter</h1>
        <p>{this.props.currentNews ? this.props.currentNewsCounter : null}</p>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  console.log("CURRENTNEWS: ", state.currentNews.currentNews)
  console.log("NEWSCOUNTER: ", state.currentNews.newsCounter)
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
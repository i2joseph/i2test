import React, { Component } from 'react';
import { connect } from 'react-redux';

class TopicsHeader extends Component {
  render() {
    return ( 
      <h3>{this.props.currentNews ? "Trending News - " + this.props.currentNews.topic + " | " + this.props.currentNews.totalarticles : "Trending News"}</h3>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    currentNews: state.currentNews.currentNews
  };
};

export default connect(mapStateToProps)(TopicsHeader);

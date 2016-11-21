import React, { Component } from 'react';
import { connect } from 'react-redux';

import ArticleList from './ArticleList'

class LatestNews extends Component {

  renderList() {
    if(!this.props.currentNews) {
      return (
        <div>
        </div>
      )
    }
    return this.props.currentNews.articles.map((eachArticle) => {
      return (
        <ArticleList 
          key={eachArticle.title}
          title={eachArticle.title}
          source={eachArticle.context_source}
          date={eachArticle.context_date}
        />
      )
    })
  }

  render() {
    return (
      <div>
        <h3>
          {this.props.currentNews ? this.props.currentNews.topic + " Latest News" : null}
        </h3>

        <div>
          {this.renderList()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentNews: state.currentNews.currentNews,
    currentNewsCounter: state.currentNews.newsCounter
  };
};

export default connect(mapStateToProps)(LatestNews);
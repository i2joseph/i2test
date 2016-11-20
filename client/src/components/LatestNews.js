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
      // console.log("ARTICLES: ", eachArticle.context_source)
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
        <h1>
          {this.props.currentNews ? this.props.currentNews.topic : null}
        </h1>

        <h2>
          {this.props.currentNewsCounter ? "COUNTER: " +  this.props.currentNewsCounter : "COUNTER: 0"}
        </h2>

        <div>
          {this.renderList()}
        </div>
      </div>
    )
  }
}


        // <div>
        //   {props.articles ? props.articles[0].title : null}
        // </div>

        // <div>
        //   {props.articles ? props.articles[0].context_source + " " + props.articles[0].context_date : null}
        // </div>

const mapStateToProps = (state) => {
  return {
    currentNews: state.currentNews.currentNews,
    currentNewsCounter: state.currentNews.newsCounter
  };
};

export default connect(mapStateToProps)(LatestNews);
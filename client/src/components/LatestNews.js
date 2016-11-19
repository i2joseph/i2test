import React from 'react';

const LatestNews = (props) => {
  return (
    <div>
      <h1>
        {props.topic ? props.topic + " " + "Latest News" : null}
      </h1>

      <h2>
        {props.counter ? "COUNTER: " + props.counter : "COUNTER: 0"}
      </h2>

      <div>
        {props.articles ? props.articles[0].title : null}
      </div>

      <div>
        {props.articles ? props.articles[0].context_source + " " + props.articles[0].context_date : null}
      </div>
    </div>
  )
}

export default LatestNews;
import React from 'react';

const ArticleList = (props) => {
  return (
    <div>
      <div>
        {props.title}
      </div>

      <div>
        {props.source + " " + props.date}
      </div>
    </div>
  )
}

export default ArticleList;
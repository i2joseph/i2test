import React from 'react';

const ArticleList = (props) => {
  return (
    <div>
      <div>
        {props.title}
      </div>

      <div className="articleFooter">
        {props.source + " " + props.date}
      </div>
      <br/>
    </div>
  )
}

export default ArticleList;
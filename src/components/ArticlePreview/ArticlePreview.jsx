import React from 'react'

function ArticlePreview({article}) {
  return (
    <div>
      <h1>{article.title}</h1>
      <h3>{article.link}</h3>
      <div id='bodyContainer-ArticlePreview'>
        {article.body}
      </div>

    </div>
  )
}

export default ArticlePreview

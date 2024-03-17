import ReactMarkdown from 'react-markdown';

function ArticlePreview({article}) {
  return (
    <div>
      <h1>{article.title}</h1>
      <h3>{article.link}</h3>
      <div id='bodyContainer-ArticlePreview'>
        <ReactMarkdown>
          {article.body}
        </ReactMarkdown>
      </div>

    </div>
  )
}

export default ArticlePreview

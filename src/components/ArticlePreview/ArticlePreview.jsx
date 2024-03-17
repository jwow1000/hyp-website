import ReactMarkdown from 'react-markdown';
import './ArticlePreview.css';

function ArticlePreview({article}) {
  return (
    <div>
      
      <div className="bubble bubbleRed ">
      <h1>{article.title}</h1>
      <h3>{article.link}</h3>
        <ReactMarkdown>
          {article.body}
        </ReactMarkdown>
      </div>

    </div>
  )
}

export default ArticlePreview

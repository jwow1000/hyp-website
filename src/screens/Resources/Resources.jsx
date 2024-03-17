
import { useEffect, useState } from "react";
import articlesData from '../../data/data.json';
import ArticlePreview from '../../components/ArticlePreview/ArticlePreview.jsx';

import './Resources.css';


function Resources() {
    // define article array
    const [articles, setArticles] = useState([]);
    
    useEffect( () => {
        setArticles(articlesData);
    }, []);
    
    
    return (
    <div className="page-wrap" >
        <h1>ARTICLES</h1>
        <div id='container-Resources'>
            {
                (articles.articles) ? 
                    articles.articles.map( (article, id) => (
                        <ArticlePreview 
                            article={article}
                            key={id}
                        />
                    
                    ))
                : null
            }
        </div>

    </div>
  )
}

export default Resources
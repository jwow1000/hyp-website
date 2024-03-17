
import { useEffect, useState } from "react";
import axios from "axios";
import articlesData from '../../data/data.json';
import ArticlePreview from '../../components/ArticlePreview/ArticlePreview.jsx';


function Resources() {
    // define article array
    const [articles, setArticles] = useState([]);
    
    useEffect( () => {
        setArticles(articlesData);
    }, []);
    console.log(articles);
    
    return (
    <div id='container-Resources' >
        <h1>ARTICLES</h1>
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
  )
}

export default Resources
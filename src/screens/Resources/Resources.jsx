
import { useEffect, useState } from "react";
import axios from "axios";
import ArticlePreview from '../../components/ArticlePreview/ArticlePreview.jsx';


function Resources() {
    // define article array
    const [articles, setArticles] = useState([]);

    useEffect( () => {
        axios.get("./data.json")
        .then((res) => {
            console.log('response',res);
            setArticles(res.data.articles);
        });
    }, []);
    
    return (
    <div id='container-Resources' >
        <h1>ARTICLES</h1>
        {
            articles.map( (article, id) => (
                    <ArticlePreview 
                        article={article}
                        key={id}
                    />
                
            ))
        }

    </div>
  )
}

export default Resources
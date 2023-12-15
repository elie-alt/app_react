import { useEffect, useState } from 'react';
import Article from './Article.js'

const Appli = () => {
    const [ isArticleDisplayed, setIsArticleDisplayed ] = useState(false);
    const [ openedArticleCount, setopendedArticleCount ] = useState(0);
    const [ article, setArticle ] = useState(null);

    const handleToggleArticle = () => setIsArticleDisplayed(!isArticleDisplayed);

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(data => setArticle(data))
        .catch(console.error);
    }, []);

    useEffect(() => {
        if(isArticleDisplayed){
            setopendedArticleCount(counter => counter + 1);
        }
    }, [isArticleDisplayed]);

    return(
        <>
            <h1>UseEffect ?!</h1>
            <button onClick={ handleToggleArticle }>
                { isArticleDisplayed ? 'Hide' : 'Show' } article
            </button>
            <p>l'article a été ouvert { openedArticleCount } fois</p>
            {
                isArticleDisplayed && article &&
                <Article title={ article.title }>
                    <p>{ article.body }</p>
                </Article>
            }
        </>
    );
};

export default Appli
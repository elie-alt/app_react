import { useEffect, useState } from "react"

const Article = ({ title = '', children = null }) => {
    const [ elapsedTime, setElapsedTime ] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setElapsedTime(time => time + 1);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, []);

    return (
        <div>
            <h2>{ title }</h2>
            <p>Temps de lecture: {elapsedTime}</p>
            {children}
        </div>
    );
};

export default Article;
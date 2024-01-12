import { useEffect, useState } from 'react';


const DocumentTitle = () => {
    const [title, setTitle] = useState("");
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        document.title = title;
    }, [title]);

    useEffect(() => {
        const div = document.querySelector(".scrollable-div");
        div.addEventListener("scroll", handleScroll);
        return () => div.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScroll = () => {
        const div = document.querySelector(".scrollable-div");
        setScrollY(div.scrollTop);
    };

    return(
        <>
            <input type="text" placeholder="Entrez un titre" onChange={(e) => setTitle(e.target.value)}></input>
            <p>Les coordonnées Y de la page sont : {scrollY}</p>
            <div class="scrollable-div" style={{ height: "100vh", overflow: "auto" }} />
        </>
    );

}

export default DocumentTitle;
import { useEffect, useState } from 'react';


const DocumentTitle = () => {
    const [title, setTitle] = useState("");
    const [scrollY, setScrollY] = useState(0);
    const [showTitle, setShowTitle] = useState(true);

    useEffect(() => {
        document.title = title;
    }, [title]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

      const handleScroll = () => {
        setScrollY(window.scrollY);
      };

    return(
        <>
            <input type="checkbox" checked={showTitle} onChange={(e) => setShowTitle(e.target.checked)} />
            <label htmlFor="showTitle">Afficher le titre</label>
            {showTitle && (
            <input type="text" placeholder="Entrez un titre" onChange={(e) => setTitle(e.target.value)}></input>
            )}
            <p>Les coordonnées Y de la page sont : {scrollY}</p>
            <div style={{ height: "100vh" }} >
            </div>
        </>
    );

}

export default DocumentTitle;
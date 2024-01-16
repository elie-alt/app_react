const Header = () => {
    return (
      <div className="header">
        <h1>En-tête</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan eros ac lectus ultrices, id tincidunt quam scelerisque.</p>
      </div>
    );
  };
  
  const Main = () => {
    return (
      <div className="main">
        <h2>Contenu principal</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan eros ac lectus ultrices, id tincidunt quam scelerisque. Vestibulum ornare lectus ac nibh scelerisque, nec semper quam aliquam.</p>
      </div>
    );
  };
  
  const Footer = () => {
    return (
      <div className="footer">
        <h3>Pied de page</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan eros ac lectus ultrices, id tincidunt quam scelerisque.</p>
        <ChangeModeButton/>
      </div>
    );
  };
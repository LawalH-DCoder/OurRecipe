import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar ">
     <h2 className="text-2xl font-bold text-white">
              Recip
              <em className="not-italic italic text-[#F97316]">io</em>
            </h2>
      <div className="navbar-links">
        <Link to="/" className="navbar-link"><p>Home</p></Link>
        <Link to="/recipes" className="navbar-link"><p>Explore</p></Link>
        <Link to="/add-recipe" className="navbar-link"><p>Favourites</p></Link>
        <button className="navbar-button">
          Random Picks
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

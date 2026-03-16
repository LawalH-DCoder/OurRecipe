import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "20px", padding: "20px" }}>
      <Link to="/">Home</Link>
      <Link to="/recipes">Recipes</Link>
      <Link to="/add-recipe">Add Recipe</Link>
    </nav>
  );
}

export default Navbar;

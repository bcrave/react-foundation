import "../styles/Navbar.scss";
import Searchbar from "./Searchbar";

const Navbar = ({ children, data, setSearchTerm }) => {
  return (
    <nav className="navbar">
      <Searchbar data={data} setSearchTerm={setSearchTerm} />
      <ul className="navbar-nav">{children}</ul>
    </nav>
  );
};

export default Navbar;

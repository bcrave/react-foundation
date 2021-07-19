import "../styles/Navbar.scss";

const Navbar = (props) => {
  return ( 
    <nav className="navbar">
      <ul className="navbar-nav">
        {props.children}
      </ul>
    </nav>
   );
}
 
export default Navbar;
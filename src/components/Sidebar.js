import "../styles/Sidebar.scss";

const Sidebar = ({ children }) => {
  return (
    <div className="sidebar">
      <ul className="sidebar-nav">{children}</ul>
    </div>
  );
};

export default Sidebar;

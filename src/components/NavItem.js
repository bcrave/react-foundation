import { useState } from "react";
import { useClickOutside } from "../util/hooks";
import "../styles/NavItem.scss";

const NavItem = ({ children, icon }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navItemRef = useClickOutside(() => {
    setIsOpen(false);
  });

  return (
    <li className="nav-item" ref={navItemRef}>
      <a href="#" className={"icon-button"} onClick={() => setIsOpen(!isOpen)}>
        {icon}
      </a>
      {isOpen && children}
    </li>
  );
};

export default NavItem;

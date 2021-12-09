import { useState } from "react";

const SidebarItem = ({ children, leftIcon }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <a href="#" className="menu-item sidebar-item">
      <span className="sidebar-item-icon">{leftIcon}</span>
      {children}
    </a>
  );
};

export default SidebarItem;

const DropdownItem = ({
  children,
  leftIcon,
  rightIcon,
  goToMenu,
  setActiveMenu,
}) => {
  return (
    <a
      href="#"
      className="menu-item"
      onClick={() => goToMenu && setActiveMenu(goToMenu)}
    >
      <span className="icon-button">{leftIcon}</span>
      {children}
      <span className="icon-right">{rightIcon}</span>
    </a>
  );
};

export default DropdownItem;

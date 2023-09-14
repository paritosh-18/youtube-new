import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isOpen) {
    return null;
  }
  return (
    <div className="border border-black">
      <h1>home</h1>
      <h1>Subscribed</h1>
      <h1>Recommended</h1>
      <h1>About Us</h1>
    </div>
  );
};

export default Sidebar;

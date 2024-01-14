import React from "react";
// İmages
const Header = () => {
  return (
    <header className="  py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="gap-2 flex text-gradient">
            <span className=" text-3xl">Hasan</span>
            <span className=" text-3xl">Arslan</span>
          </a>
          {/* Button */}
          <button className="btn btn-sm">Work With Me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/BT SOFTWARE ENGINEER-01.png";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

function Navbar() {
  const currentPath = useLocation();
  const links = [
    { id: 1, link: "Home", path: "/" },
    { id: 2, link: "About", path: "/about" },
    { id: 3, link: "skills", path: "/skills" },
    { id: 4, link: "projects", path: "/projects" },
    { id: 5, link: "contact", path: "/contact" },
  ];

  return (
    <nav className="bg-[#272829]">
      <div className="flex justify-between items-center px-28">
        <div className="">
          <img src={logo} className="w-[110px]" alt="porfolio_pic" />
        </div>

        <div className="flex items-center gap-6">
          <ul className="flex gap-10 ">
            {links.map((item) => (
              <li key={item.id} className={`capitalize font-bold text-base text-[#207c7b] relative cursor-pointer transition-all duration-500 before:content-[''] before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-[2.5px] before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r before:from-[#207c7b] before:via-gray-100 before:to-[#207c7b] ${item.path === currentPath.pathname
                ? "text-green-100 before:w-full before:opacity-100"
                : "hover:text-green-100 hover:before:w-full hover:before:opacity-100"
                }`}>
                <Link to={item.path}>{item.link}</Link>
              </li>
            ))}
          </ul>
          <div className="">
            <button className="flex items-center gap-2 px-7 py-3 bg-[#191717] border-[#c2f7f6] hover:border-[#021414] border transition duration-1000  hover:duration-1000 hover:bg-[#021414] rounded-full text-[#207c7b] font-bold text-base hover:text-green-100">
              Hire Me <MdKeyboardDoubleArrowRight size={20} color="#" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

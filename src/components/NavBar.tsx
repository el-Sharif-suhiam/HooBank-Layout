import { navLinks } from "../constents";
import { useState } from "react";
import { close, menu, logo } from "../assets";
function NavBar() {
  const [selectedNav, setSelectedNav] = useState("home");
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <nav className="flex justify-between my-8 z-10 relative">
      <img src={logo} width={115} height={32} alt="logo" />
      <ul className=" list-none hidden sm:flex items-center justify-end flex-1">
        {navLinks.map((link, index) => (
          <li
            key={link.id}
            className={`${
              selectedNav === link.id ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setSelectedNav(link.id)}
          >
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={menuToggle ? menu : close}
          alt="menu icon"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setMenuToggle((prev) => !prev)}
        />
        <div
          className={`${
            menuToggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-8 right-0 mx-2 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className=" list-none sm:hidden flex flex-col items-center justify-end flex-1">
            {navLinks.map((link, index) => (
              <li
                key={link.id}
                className={`${
                  selectedNav === link.id ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setSelectedNav(link.id)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;

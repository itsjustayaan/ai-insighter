import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation(); // Hook to get the current location

  // Function to determine if a link is active based on the current location
  const isActive = (path) => location.pathname === path;

  return (
    <>
      <div className="pt-10 mx-auto md:px-20 md:max-w-[800px] sticky top-0">
        <div className="navbar mb-14 px-6 py-3 rounded-[45px] bg-light-blue flex flex-row justify-between mx-auto backdrop-blur-sm bg-opacity-75">
          <Link to="/ai-insighter/" className="logo flex flex-row items-center">
            <span className="material-symbols-outlined text-dark">
              sports_soccer
            </span>
            <p className="text-dark font-semibold ml-1 text-lg">AI Insighter</p>
          </Link>
          <div className="nav-items flex flex-row">
            <Link
              to="/ai-insighter/"
              className={`text-dark py-1.5 px-4 font-semibold text-lg rounded-3xl bg-opacity-75 ${
                isActive("/ai-insighter/")
                  ? "bg-white"
                  : "hover:bg-light focus:bg-light"
              }`}
            >
              Home
            </Link>
            <Link
              to="/explore"
              className={`text-dark py-1.5 px-4 font-semibold text-lg rounded-3xl bg-opacity-75 ${
                isActive("/explore")
                  ? "bg-white"
                  : "hover:bg-light focus:bg-light"
              }`}
            >
              Explore
            </Link>
            <Link
              to="/projects"
              className={`text-dark py-1.5 px-4 font-semibold text-lg rounded-3xl bg-opacity-75 ${
                isActive("/projects")
                  ? "bg-white"
                  : "hover:bg-light focus:bg-light"
              }`}
            >
              Projects
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;

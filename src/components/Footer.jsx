import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="bg-dark-blue">
        <div className="contain-div box-border px-5 container mx-auto xs:max-w-[600px] sm:px-0 sm:max-w-[560px] md:px-10 md:max-w-[1440px] 2xl:max-w-[1600px]">
          <div className="px-40 py-20 flex justify-center items-center">
            <div className="grid grid-rows-2">
              <Link to="/" className="logo flex flex-row items-center mb-4">
                <span
                  className="material-symbols-outlined text-dark "
                  style={{
                    fontSize: "2.5rem",
                  }}
                >
                  sports_soccer
                </span>
                <p className="text-dark font-semibold ml-1 text-3xl">
                  AI Insighter
                </p>
              </Link>
              <div className="flex justify-center items-center ">
                <a href="https://github.com/itsjustayaan/ai-insighter">
                  <img
                    src="./github-mark-white.png"
                    alt="github"
                    className="w-10 h-10"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

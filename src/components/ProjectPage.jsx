import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

function ProjectPage() {
  return (
    <>
      <div className="contain-div box-border px-5 container mx-auto xs:max-w-[600px] sm:px-0 sm:max-w-[560px] md:px-10 md:max-w-[1440px] 2xl:max-w-[1600px]">
        <NavBar />
        <div className="flex flex-row w-full">
          {/* Sidebar */}
          <div className="w-64 h-full shadow-md bg-white px-1">
            <h2 className="text-xl font-semibold py-4 px-6">My Work</h2>
            {/* Add your sidebar content here */}
          </div>

          {/* Main Content Area */}
          <div className="flex-1 p-10">
            {/* Your main content goes here */}
            <h1 className="text-2xl font-bold">Welcome to My Work</h1>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProjectPage;

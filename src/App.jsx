import React, { useContext } from "react";
import { DataContext } from "../context";
import Card from "./components/Card";

function App() {
  const data = useContext(DataContext);
  // if (data) console.log(data.cards);
  return (
    <>
      <div className="contain-div box-border px-5 container mx-auto xs:max-w-[600px] sm:px-0 sm:max-w-[560px] md:px-10 md:max-w-[1360px] 1xl:px-0 2xl:max-w-[1600px]">
        <div className="navbar mt-12 mb-20 px-6 py-3 rounded-[45px] bg-light-blue flex flex-row justify-between w-[700px] mx-auto bg-opacity-40">
          <div className="logo flex flex-row items-center">
            <span className="material-symbols-outlined text-dark">
              sports_soccer
            </span>
            <p className="text-dark font-semibold ml-1 text-lg">AI Insighter</p>
          </div>
          <div className="nav-itmes flex flex-row">
            <p className="text-dark py-1.5 px-4 bg-light rounded-3xl font-semibold text-lg">
              Home
            </p>
            <p className="text-dark py-1.5 px-4 font-semibold text-lg">
              Explore
            </p>
            <p className="text-dark py-1.5 px-4 font-semibold text-lg">
              Projects
            </p>
          </div>
        </div>
        <div className="hero-sec grid grid-cols-2">
          <div className=""></div>
          <div></div>
        </div>
        <div className="contain-grid grid grid-cols-3">
          {data ? (
            data.cards
              .slice(0, 6)
              .map((element, index) => <Card key={index} element={element} />)
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
        <div>
          <a href="">Explore more</a>
        </div>
        <div className="footer"></div>
      </div>
    </>
  );
}

export default App;

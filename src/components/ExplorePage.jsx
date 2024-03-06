import React from "react";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import Card from "./Card";
import Footer from "./Footer";
import { useContext } from "react";
import { DataContext } from "../../context";

function ExplorePage() {
  const { data } = useContext(DataContext);
  let popularModels = 0;
  if (data) {
    popularModels = data.filter((element) => element.popular === "true");
  }

  return (
    <>
      <div className="contain-div box-border px-5 container mx-auto xs:max-w-[600px] sm:px-0 sm:max-w-[560px] md:px-10 md:max-w-[1440px] 2xl:max-w-[1600px]">
        <NavBar />
        <div className="flex justify-center">
          <SearchBar />
        </div>
        {popularModels.length > 0 ? (
          <div>
            <h1 className="text-2xl font-bold mb-8">Popular Models</h1>
            <div className="contain-grid mb-14 grid lg:grid-cols-3 gap-y-12.5 gap-x-8.752">
              {popularModels.map((element, index) => (
                <Card key={index} element={element} />
              ))}
            </div>
          </div>
        ) : (
          <></>
        )}

        {data ? (
          <div>
            <h1 className="text-2xl font-bold mb-8">All Models</h1>
            <div className="contain-grid mb-14 grid lg:grid-cols-3 gap-y-12.5 gap-x-8.752">
              {data.map((element, index) => (
                <Card key={index} element={element} />
              ))}
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
      <Footer />
    </>
  );
}

export default ExplorePage;

import React, { useContext } from "react";
import { DataContext } from "../../context";
import { Link } from "react-router-dom";
import Card from "./Card";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import Footer from "./Footer";

function HomePage() {
  const { data } = useContext(DataContext);
  return (
    <>
      <div className="contain-div box-border px-5 container mx-auto xs:max-w-[600px] sm:px-0 sm:max-w-[560px] md:px-10 md:max-w-[1440px] 2xl:max-w-[1600px]">
        <NavBar />
        <div className="hero-sec grid lg:grid-cols-2 bg-dark-blue text-light rounded-[30px] px-24 py-14 mb-14">
          <div className="title-button xl:pr-40 mb-10">
            <h1 className="text-3xl font-semibold mb-20">
              Always deliver more than expected
            </h1>
            <Link
              to=""
              className="explore-button py-3 px-6 inline-block rounded-lg bg-light-blue text-dark font-semibold text-base"
            >
              Try Now
            </Link>
          </div>
          <div className="hero-img-text grid lg:grid-cols-2 bg-dark rounded-[20px] lg:place-content-center p-10">
            <div className="lg:flex justify-center">
              <img src="public/assets/images/google.png" alt="Ooops" />
            </div>
            <div>
              <h2 className="hero-card-title font-semibold text-lg mb-2">
                Some Title
              </h2>
              <p className="hero-card-body font-light text-base ">
                Gemma is a family of lightweight, state-of-the-art open models
                from Google, built from the same research and technology used to
                create the Gemini models.
              </p>
            </div>
          </div>
        </div>
        <SearchBar />
        <div className="contain-grid mb-14 grid lg:grid-cols-3 gap-y-12.5 gap-x-8.752">
          {data ? (
            data
              .slice(0, 6)
              .map((element, index) => <Card key={index} element={element} />)
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
        <Link
          to="/explore"
          className="explore-button mb-20 p-3 inline-block rounded-lg bg-light-blue text-dark font-semibold text-base"
        >
          Explore More
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;

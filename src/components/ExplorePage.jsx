import React from "react";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import Card from "./Card";
import Footer from "./Footer";
import Modal from "./Modal";
import { useContext, useState } from "react";
import { DataContext } from "../../context";

function ExplorePage() {
  const { data, addModel } = useContext(DataContext);
  const [isModalOpen, setModalOpen] = useState(false);
  let popularModels = [];
  if (data) {
    popularModels = data.filter((element) => element.popular === "true");
  }

  const Models = ({ heading, data }) => (
    <>
      <h1 className="text-2xl font-bold mb-8">{heading}</h1>
      <div className="contain-grid mb-14 grid lg:grid-cols-3 gap-y-12.5 gap-x-8.752">
        {data.map((element, index) => (
          <Card key={index} element={element} />
        ))}
      </div>
    </>
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    const newModel = {
      img: "./dummy.png ",
      title: event.target.title.value,
      body: event.target.body.value,
      des: event.target.des.value,
      useCases: event.target.useCases.value,
    };
    console.log(newModel);
    addModel(newModel);
    setModalOpen(false);
  };

  return (
    <>
      <div className="contain-div box-border px-5 container mx-auto xs:max-w-[600px] sm:px-0 sm:max-w-[560px] md:px-10 md:max-w-[1440px] 2xl:max-w-[1600px]">
        <NavBar />
        <div className="flex justify-center">
          <SearchBar />
        </div>
        {popularModels.length > 0 ? (
          <div>
            <Models heading="Popular Models" data={popularModels} />
          </div>
        ) : (
          <></>
        )}

        {data ? (
          <div>
            <Models heading="All Models" data={data} />
          </div>
        ) : (
          <></>
        )}
        <button
          onClick={() => setModalOpen(true)}
          className="mb-20 p-3 inline-block rounded-lg bg-light-blue text-dark font-semibold text-base"
        >
          Add Model
        </button>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <form onSubmit={handleSubmit} className="space-y-4">
          <h1 className="text-base font-medium text-dark">About Model</h1>
          <div>
            <label
              htmlFor="title"
              className="text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              required
              className="mt-1 w-full border border-gray-300 p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            />
          </div>

          <div>
            <label htmlFor="body" className="text-sm font-medium text-gray-700">
              Body
            </label>
            <textarea
              name="body"
              id="body"
              required
              className="mt-1 w-full border border-gray-300 p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              rows="3"
            ></textarea>
          </div>

          <div>
            <label htmlFor="des" className="text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              name="des"
              id="des"
              required
              className="mt-1 w-full border border-gray-300 p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              rows="4"
            ></textarea>
          </div>

          <div>
            <label
              htmlFor="useCases"
              className=" text-sm font-medium text-gray-700"
            >
              Use Cases
            </label>
            <textarea
              name="useCases"
              id="useCases"
              required
              className="mt-1 w-full border border-gray-300 p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              rows="3"
            ></textarea>
          </div>

          <button
            type="submit"
            className="mb-20 p-3 inline-block rounded-lg bg-light-blue text-dark font-semibold text-base"
          >
            Submit
          </button>
        </form>
      </Modal>
      <Footer />
    </>
  );
}

export default ExplorePage;

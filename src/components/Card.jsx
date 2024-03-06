import React from "react";
import { useState } from "react";
import Modal from "./Modal";
import { Link } from "react-router-dom";
import CodeSnippet from "./CodeSnippet";

function Card({ element }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <div
        className="cards bg-dark text-light pt-4 px-6 rounded-[20px]"
        onClick={openModal}
      >
        <div className="card-img w-24 h-24 mt-4 mb-16 ">
          <img src={element.img} alt="placeholder" />
        </div>
        <div className="card-content pb-16">
          <h3 className="title font-semibold text-lg mb-2">{element.title}</h3>
          <p className="body font-light text-base">{element.body}</p>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="grid lg:grid-cols-2">
          <div className="card-img w-24 h-24 mt-4 mb-10 ">
            <img src={element.img} alt="placeholder" />
          </div>
          <div className="flex flex-col justify-center items-end">
            <Link
              to=""
              className="explore-button py-3 px-6 mb-5 lg:m-0 inline-block rounded-lg bg-light-blue text-dark font-semibold text-base"
            >
              Try Now
            </Link>
          </div>
        </div>
        <h3 className="font-semibold text-lg mb-2">{element.title}</h3>
        <p className="font-light text-base mb-2">{element.des}</p>
        {element.code ? (
          <>
            <h3 className="font-semibold text-lg mb-2">Code Snippet:</h3>
            <CodeSnippet code={element.code} language={"python"} />
          </>
        ) : (
          <></>
        )}
        <h3 className="font-semibold text-lg my-2">Use Cases:</h3>
        <p>{element.usage}</p>
      </Modal>
    </>
  );
}

export default Card;

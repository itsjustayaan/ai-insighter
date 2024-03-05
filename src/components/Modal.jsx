import React from "react";

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center">
      <div className="fixed inset-0 bg-dark bg-opacity-30" onClick={onClose} />

      <div
        className="z-50 bg-light rounded-lg overflow-hidden shadow-lg transform transition-all sm:max-w-[800px] sm:w-full pt-4 px-6 pb-16 max-h-[90vh] overflow-y-auto"
        // style={{ minWidth: "250px", minHeight: "100px" }}
        onClick={(e) => e.stopPropagation()} // Prevent clicks within the modal from closing it
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;

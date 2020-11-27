import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

const Modal = ({ setShowModal, showModal, children, contentLabel }) => {
  function closeModal() {
    setShowModal(false);
  }
  return (
    <ReactModal
      isOpen={showModal}
      onRequestClose={closeModal}
      contentLabel={contentLabel}
      overlayClassName="flex justify-center items-center fixed inset-0 bg-black bg-opacity-75"
      className="text-white rounded-lg w-10/12 sm:w-8/12 md:w-1/2  lg:w-1/3 focus:outline-none"
    >
      <div className="h-auto p-6 rounded-3xl bg-white text-gray-800 flex flex-col flex-wrap py-10 ">
        {children}
      </div>
    </ReactModal>
  );
};

export default Modal;

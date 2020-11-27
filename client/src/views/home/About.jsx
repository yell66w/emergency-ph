import React, { useState } from "react";
import Modal from "../../components/Modal";

const About = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="flex bg-red-800">
        <button onClick={() => setShowModal(true)}>Click Me</button>
      </div>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        contentLabel="AboutModal"
      >
        <div className="flex justify-center">
          <h1 className="font-bold text-2xl">Hello Title</h1>
        </div>
      </Modal>
    </>
  );
};

export default About;

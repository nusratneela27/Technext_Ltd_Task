import React, { useState } from "react";
import Modal from "react-modal";
import UserForm from "./UserForm";

Modal.setAppElement("#root");

const UserModal = ({ isOpen, onClose, onSave }) => {
  const [modalStyle, setModalStyle] = useState({
    content: {
      minHeight: "200px",
    },
  });

  const handleAddUser = (userData) => {
    onSave(userData);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Add User Modal"
      style={modalStyle}
      className="max-h-screen overflow-y-auto"
      overlayClassName="fixed inset-0 bg-black opacity-90"
    >
      <div className="mx-auto max-w-md p-4 bg-white rounded-md border border-gray-300">
        <h2 className="text-2xl font-semibold mb-4">Add User</h2>
        <UserForm onSave={handleAddUser} />
        <button
          onClick={onClose}
          className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-md mt-4"
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

export default UserModal;

import React from "react";

const Modal = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 max-h-[90vh] overflow-y-auto">
        <h2 className="text-[#347928] font-extrabold text-center text-xl mb-6">
          {title}
        </h2>
        {children}
      </div>
    </div>
  );
};

export default Modal;

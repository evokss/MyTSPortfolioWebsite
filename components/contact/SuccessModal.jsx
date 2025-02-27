import React from "react";

const SuccessModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-sm w-full">
        <div className="text-center">
          <svg
            className="mx-auto mb-4 w-16 h-16 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h3 className="text-2xl font-bold mb-4 text-gray-800">
            Message Sent Successfully!
          </h3>
          <p className="text-gray-600 mb-6">
            Thank you for reaching out! I&apos;ll get back to you as soon as
            possible.
          </p>
          <button
            onClick={onClose}
            className="w-full bg-rose-600 text-white py-2 px-4 rounded-md hover:bg-rose-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-rose-600"
          >
            Okay
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;

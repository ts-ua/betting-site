import React from "react";
import Pen from '../../assets/pen.png'

const Modal = ({ isOpen, onClose, title, buttonText }) => {
  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center   border-modalborder ${isOpen ? 'block' : 'hidden'}`}>
      <div className="relative bg-modalbody p-12 rounded-4xl shadow-lg max-w-[628px] h-[447px] w-full text-center rounded-[50px] border-2 border-[#4E2DA0]">
        {/* Close Button */}
        <button
          className="absolute top-[-0.5rem] right-[-0.5rem] w-[54px] h-[54px] flex items-center justify-center bg-[#11112D] text-white hover:bg-gray-300 rounded-full focus:outline-none hover:text-zinc-700 border-2 border-[#4E2DA0]"
          onClick={onClose}
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        {/* Modal Content */}
        <h2 className="text-4xl font-medium mb-5 text-white tracking-extra-widest">{title}</h2>
        <div className="mb-4">
            <p className="mb-2 text-sm font-medium text-lightBlue font-barlow text-left">
                My Affiliate Link Nickname
                
            </p>
            <div className="relative w-full">
                <input
                    type="text"
                    placeholder="Name Your Affiliate Link"
                    className="w-full px-6 py-6 pr-12 border border-[#4E2DA0] rounded-md shadow-sm bg-[#252638] font-barlow focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
                <img
                    src={ Pen } 
                    alt="pen" 
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6" 
                />
            </div>
            <p className="mt-5 mb-10 text-md text-lightBlue font-barlow">
                6 to 15 Characters, Only English letters and numbers allowed.
            </p>
        </div>
        <button 
          className="bg-[#8158E7] text-white px-4 rounded w-[360px] py-4 hover:bg-blue-600 text-2xl"
          onClick={onClose}
        >
          {buttonText || 'Close'}
        </button>
      </div>
    </div>
  );
};

export default Modal;

'use client';

import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<Props> = ({ isOpen, onClose }) => {
  // lock body scroll
  useEffect(() => {
    if (isOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [isOpen]);

  // modal node
  const modalNode = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[99] flex items-center justify-center"
        >
          {/* semi-transparent background, click to close */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* modal body */}
          <motion.div
            key="modal"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="relative z-10 w-11/12 max-w-sm rounded-2xl bg-white p-8 shadow-2xl"
          >
            {/* close button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
              aria-label="Close modal"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <h3 className="mb-6 text-center text-2xl font-bold tracking-tight">
              Contact Information
            </h3>

            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center">
                <svg
                  className="mr-3 h-5 w-5 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M2 4a2 2 0 012-2h16a2 2 0 012 2v1.2l-10 6.25L2 5.2V4zm0 3.7v10.3a2 2 0 002 2h16a2 2 0 002-2V7.7l-10 6.3L2 7.7z" />
                </svg>
                hsupisces@hotmail.com
              </li>
              <li className="flex items-center">
                <svg
                  className="mr-3 h-5 w-5 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M2 3.5A1.5 1.5 0 013.5 2h17A1.5 1.5 0 0122 3.5v17a1.5 1.5 0 01-1.5 1.5h-17A1.5 1.5 0 012 20.5v-17zM12 20a8 8 0 100-16 8 8 0 000 16zm0-13a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0 4a5 5 0 00-4 2h8a5 5 0 00-4-2z" />
                </svg>
                +61 (0) 491 648 468
              </li>
              {/* add more contact info here */}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  if (typeof window === 'undefined') return null;

  // use portal to render to <body>, ensure the modal is fixed in the viewport
  return createPortal(modalNode, document.body);
};

export default ContactModal;

import { PencilIcon } from '@heroicons/react/20/solid'
import { LinkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react';


const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTnCModalOpen, setIsTnCModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto'; // Allow scrolling when modal is closed
  };

  const openTnCModal = () => {
    setIsTnCModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeTnCModal = () => {
    setIsTnCModalOpen(false);
    document.body.style.overflow = 'auto'; // Allow scrolling when modal is closed
  };


  return (
    <>
    <div className="relative isolate overflow-hidden bg-blue-900 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">SciTech Coders</h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
            Dynamic learning platform, where young minds embark on a journey of discovery and growth!  Enhance your child's academic skills with our tailored support programs.
            </p>
        
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <PencilIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <dt className="mt-4 font-semibold text-white"><a href="/" >Our Programs</a></dt>
              <dt className="mt-4 font-semibold text-white"><a href="/exploreworkshop" >Get a Free Class</a></dt>
              <dt className="mt-4 font-semibold text-white"><a href="/requestworkshop" >Enroll Now</a></dt>              
              <dt className="mt-4 font-semibold text-white"><a href="/exploreworkshop#checkcourses" >Contact Us</a></dt>
            </div>

            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <LinkIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <dt className="mt-4 font-semibold text-white"><a href="/" >Home</a></dt>
              <dt className="mt-4 font-semibold text-white"><a href="/about" >About Us</a></dt>
              <dt className="mt-4 font-semibold text-white"><button onClick={openTnCModal} >Terms & Condition</button></dt>              
              <dt className="mt-4 font-semibold text-white"><button onClick={openModal} >Privacy Policy</button></dt>
            </div>
        </dl>

        
        </div>
        
      </div>
      <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ffffff] to-[#ffffff] opacity-30"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      
    </div>


          {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-900 bg-opacity-60 flex justify-center items-center">
          <div className="relative bg-white max-w-lg rounded-lg p-8">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {/* Modal Content */}
            <h2 className="text-xl font-semibold mb-4">Privacy Policy</h2>
            <p className="text-gray-600">
              Your privacy is important to us. This is our privacy policy.
              {/* Add your privacy policy text here */}
            </p>
          </div>
        </div>
      )}
 {/* Terms & Condition Modals */}
 {isTnCModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-900 bg-opacity-60 flex justify-center items-center">
          <div className="relative bg-white max-w-lg rounded-lg p-8">
            {/* Close Button */}
            <button
              onClick={closeTnCModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {/* Modal Content */}
            <h2 className="text-xl font-semibold mb-4">Terms and Condition</h2>
            <p className="text-gray-600">
              Your privacy is important to us. This is our privacy policy.
              {/* Add your privacy policy text here */}
            </p>
          </div>
        </div>
      )}


    <div className="flex flex-col-reverse justify-between pt-5 pb-5 border-t lg:flex-row px-10">
    <p className="text-sm text-gray-600">
      © Copyright 2024 SciTech Coders Inc. All rights reserved.
    </p>
    <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
      {/* <li>
        <a href="/" className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">F.A.Q</a>
      </li>
      <li>
        <a href="/" className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Privacy Policy</a>
      </li>
      <li>
        <a href="/" className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Terms &amp; Conditions</a>
      </li> */}
    </ul>
  </div>
  </>
  )
}

export default Footer;

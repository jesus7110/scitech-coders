import React from 'react'

const Hero = () => {
  return (
    <>
        <div className=" pt-20">
            <div className="mx-auto max-w-5xl px-6 py-10 text-center md:px-12 md:py-16">
                <h1 className="text-3xl leading-[52px] font-semibold md:text-4xl lg:text-5xl mt-20">Inspiring <span className="underline decoration-blue-600 underline-offset"> Young Minds </span> to <br />
                   
                    <div className="sm:mt-2 pt-2 ">
                    <span className="bg-blue-600 text-white p-0.5 rounded-lg">Code</span>,
                    <span className="bg-blue-600 text-white p-0.5 rounded-lg">Create</span>, and 
                    <span className="bg-blue-600 text-white p-0.5 rounded-lg">Change</span><br/>
                    <span> the World with </span>
                        <span className="underline decoration-blue-600 underline-offset">
                          Science
                        </span> 
                        <span> and </span> 
                        <span className="underline decoration-blue-600 underline-offset">
                          Tech
                        </span>
                       
                    </div>
                </h1>
                <p className="mt-4 text-lg font-medium leading-2 text-gray-600 md:text-xl">
                Welcome to the intersection of Code and Science of Scitech Coders! Ignite your curiosity, master the languages of technology, and explore the wonders of STEM.
                </p>
                <div className="mt-8 flex justify-center gap-2">
                    <a href="/programs">
                        <button className="text-md rounded-lg bg-gradient-to-br from-blue-500 to-sky-700 px-4 py-[10px] font-semibold text-white hover:bg-gradient-to-tl hover:from-blue-900 hover:to-purple-700">
                            <div className="flex items-center justify-center">
                                <div className=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                    fill="currentColor" viewBox="0 0 256 256">
                                    <path
                                        d="M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z">
                                    </path>
                                </svg>
                                </div>Explore Programs | 100+
                            </div>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero
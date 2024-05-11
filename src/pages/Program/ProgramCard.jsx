import React from 'react';

const Card = () => {
  return (
    <>

<div className="mx-auto max-w-4xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-red-600">Our Expertise</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Programs
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          At SciTech Coders, we offer engaging and hands-on science and coding programs designed to inspire creativity and ignite a passion for innovation in kids of all ages
          </p>
        </div>


      {/* {Card 1} */}
    <div className="mx-auto max-w-7xl px-6 pt-6 lg:px-8">

    <div className="justify-center grid grid-cols-1 gap-x-2 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-2 ">
    
    <div className="h-[600px] flex-col justify-center overflow-hidden bg-white">
    
      <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[12]"></span>
        <div className="relative z-10 mx-auto max-w-md">
          <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-10 w-10 text-white transition-all"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
              />
            </svg>
          </span>
          <div className="pt-5 text-base font-bold leading-7 group-hover:text-white/90">
            <p>
            Academic Support
              
            </p>
            </div>
          <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
            <p>Enhance your child's academic skills with our tailored support programs. We offer assistance in Maths, Science, and English for Key Stage 1 to Key Stage 3 students, as well as GCSE and A-Level support for all major subjects. Additionally, we provide Arabic language study programs.</p>
          </div>
          <div className="pt-5 text-base font-bold leading-7 group-hover:text-white/90">
            <p>
            Key Stage 1-3, GCSE, A-Level students, and Arabic language learners
              
            </p>
          </div>
          <div className="pt-5 text-base font-semibold leading-7">
            <p>
              <a href="/programs/academic-support" className="text-sky-500 transition-all duration-300 group-hover:text-white">
                Explore Academics Support &rarr;
              </a>
            </p>
          </div>
        </div>
      </div>

     

    </div>

    {/* {Card 2} */}
    <div className="h-[600px] flex-col justify-center overflow-hidden bg-white">
      <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-red-500 transition-all duration-300 group-hover:scale-[12]"></span>
        <div className="relative z-10 mx-auto max-w-md">
          <span className="grid h-20 w-20 place-items-center rounded-full bg-red-500 transition-all duration-300 group-hover:bg-red-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-10 w-10 text-white transition-all"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
              />
            </svg>
          </span>
          <div className="pt-5 text-base font-bold leading-7 group-hover:text-white/90">
            <p>
            Computing Basics for Key Stage 1 and Key Stage 2
              
            </p>
            </div>
          <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
            <p>Introduce your child to the exciting world of computing with our specially tailored curriculum for Key Stage 1 and Key Stage 2 students. From understanding the basics of hardware and software to navigating the digital world safely, we cover it all.</p>
          </div>
          <div className="pt-5 text-base font-bold leading-7 group-hover:text-white/90">
            <p>
            Key Stage 1 and Key Stage 2 students
              
            </p>
          </div>
          <div className="pt-5 text-base font-semibold leading-7">
            <p>
              <a href="/programs/computing-basics" className="text-red-500 transition-all duration-300 group-hover:text-white">
              Explore Computer Basics &rarr;
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* {Card 3} */}
    <div className=" h-[600px] flex-col justify-center overflow-hidden bg-white">
      <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-yellow-500 transition-all duration-300 group-hover:scale-[12]"></span>
        <div className="relative z-10 mx-auto max-w-md">
          <span className="grid h-20 w-20 place-items-center rounded-full bg-yellow-500 transition-all duration-300 group-hover:bg-yellow-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-10 w-10 text-white transition-all"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
              />
            </svg>
          </span>
          <div className="pt-5 text-base font-bold leading-7 group-hover:text-white/90">
            <p>
           Coding and Game Design
              
            </p>
            </div>
          <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
            <p>Ignite your child's creativity with our coding and game design classes. From creating their first lines of code to developing their own interactive games, our curriculum grows with your child's skills. Suitable for students from Key Stage 2 to Key Stage 5.</p>
          </div>
          <div className="pt-5 text-base font-bold leading-7 group-hover:text-white/90">
            <p>
            Key Stage 2, Key Stage 3, Key Stage 4, and Key Stage 5 students
              
            </p>
          </div>
          <div className="pt-5 text-base font-semibold leading-7">
            <p>
              <a href="/programs/coding-and-game-design" className="text-yellow-500 transition-all duration-300 group-hover:text-white">
              Discover Coding and Game Design &rarr;
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
   

    </div>
   
    </div>

    {/* {Card 4} */}

    <div className="mx-auto max-w-7xl px-6 py-2 lg:px-8">

    <div className="justify-center grid grid-cols-1 gap-x-2 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-2 ">
    
    <div className="h-[600px] flex-col justify-center overflow-hidden bg-white">
    
      <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[12]"></span>
        <div className="relative z-10 mx-auto max-w-md">
          <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-10 w-10 text-white transition-all"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
              />
            </svg>
          </span>
          <div className="pt-5 text-base font-bold leading-7 group-hover:text-white/90">
            <p>
            Graphic Design
              
            </p>
            </div>
          <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
            <p>Unlock your child's artistic potential with our graphic design classes. From mastering design principles to creating stunning digital artwork, our courses are perfect for students in Key Stage 3 to Key Stage 5 who have a passion for visual creativity.</p>
          </div>
          <div className="pt-5 text-base font-bold leading-7 group-hover:text-white/90">
            <p>
            Key Stage 3, Key Stage 4, and Key Stage 5 students
              
            </p>
          </div>
          <div className="pt-5 text-base font-semibold leading-7">
            <p>
              <a href="/programs/graphic-design" className="text-sky-500 transition-all duration-300 group-hover:text-white">
              Explore Graphic Design &rarr;
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>

{/* {Card 5} */}
    <div className="h-[600px] flex-col justify-center overflow-hidden bg-white">
      <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-red-500 transition-all duration-300 group-hover:scale-[12]"></span>
        <div className="relative z-10 mx-auto max-w-md">
          <span className="grid h-20 w-20 place-items-center rounded-full bg-red-500 transition-all duration-300 group-hover:bg-red-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-10 w-10 text-white transition-all"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
              />
            </svg>
          </span>
          <div className="pt-5 text-base font-bold leading-7 group-hover:text-white/90">
            <p>
            Science (Physics, Chemistry, Biology, Maths)
              
            </p>
            </div>
          <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
            <p>
            Dive into the wonders of science with our comprehensive science classes. Covering subjects such as physics, chemistry, biology, and maths, our curriculum is designed to spark curiosity and foster a love for learning.</p>
          </div>
          <div className="pt-5 text-base font-bold leading-7 group-hover:text-white/90">
            <p>
            Students interested in science across all Key Stages.
              
            </p>
          </div>
          <div className="pt-5 text-base font-semibold leading-7">
            <p>
              <a href="/programs/science" className="text-red-500 transition-all duration-300 group-hover:text-white">
              Discover Science Programs &rarr;
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* {Card 6} */}

    <div className="h-[600px] flex-col justify-center overflow-hidden bg-white">
      <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-yellow-500 transition-all duration-300 group-hover:scale-[12]"></span>
        <div className="relative z-10 mx-auto max-w-md">
          <span className="grid h-20 w-20 place-items-center rounded-full bg-yellow-500 transition-all duration-300 group-hover:bg-yellow-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-10 w-10 text-white transition-all"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
              />
            </svg>
          </span>
          <div className="pt-5 text-base font-bold leading-7 group-hover:text-white/90">
            <p>
            Private Tution
              
            </p>
            </div>

          <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
            <p>Enhance your child's academic skills with our tailored support programs. We offer assistance in Maths, Science, and English for Key Stage 1 to Key Stage 3 students, as well as GCSE and A-Level support for all major subjects. Additionally, we provide Arabic language study programs.</p>
          </div>
          <div className="pt-5 text-base font-bold leading-7 group-hover:text-white/90">
            <p>
            Key Stage 1-3, GCSE, A-Level students, and Arabic language learners
              
            </p>
          </div>
          <div className="pt-5 text-base font-semibold leading-7">
            <p>
              <a href="/programs/private-tutor" className="text-yellow-500 transition-all duration-300 group-hover:text-white">
                Explore Academics Support &rarr;
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>

    </div>
    </div>



    
    </>
  );
};

export default Card;

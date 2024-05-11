import React from 'react'

const ProgramHeader = () => {
  return (
    <>
    <div className="relative isolate overflow-hidden bg-blue-900 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="mx-auto ">
          <div className="max-w-6xl pt-4 lg:max-w-8xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Welcome to our dynamic learning platform, where young minds embark on a journey of discovery and growth! </h2>
            <p className="mt-4 text-lg leading-8 text-gray-200">
            Our institute offers diverse, engaging programs designed to ignite curiosity and foster a love for learning in children of all ages.          </p>
        
          </div>
          

        
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
    </>
  )
}

export default ProgramHeader
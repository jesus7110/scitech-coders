import React from 'react'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Timeline from './info/Timeline'
import Exploreprogramhero from './Exploreprogramhero';
import TopNotchFeatures from './Topnotchfeatures';

const Exploreprogram6 = () => {
  return (
    <>
    
    <Navbar/>
    <Exploreprogramhero/>
    <div className="mx-auto max-w-4xl pb-14 lg:text-center">
          <p className=" text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Enrol now to join our Digital Media Design course and become one of the future graphic designers </p>
        </div>
    <Timeline/>



    <TopNotchFeatures/>

    <div class="bg-white py-18 sm:py-20">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:grid-cols-2">
                <div>
                    <p class="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">See the magic of our Graphic Design for Kids</p>
                </div>

                <div class="flex max-w-sm rounded-xl bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg">
                    <button class="flex-1 font-bold text-xl bg-white px-6 py-3 rounded-xl">Play Course Demo
                    </button>
                </div>
                
           
            </div>
        </div>
        
    </div>
    <Footer/>
    </>
  )
}

export default Exploreprogram6
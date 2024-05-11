import React from 'react'
import Navbar from '../../components/Navbar'
import ProgramHeader from './ProgramHeader'
import Introduction from './Introduction'
import Card from './ProgramCard';
import Footer from '../../components/Footer';
import EnrollCTA from './EnrollCTA';
import Whychooseus from './Whychooseus';
import ProgramVideo from './ProgramVideo';

const Program = () => {
   

  return (
    <>
    <Navbar/>
    <ProgramHeader/>
    <Introduction/>
    <Card/>
    <Whychooseus/>
    <ProgramVideo/>


  
    <EnrollCTA/>
    <Footer/>


   
    </>
    
  )
}

export default Program
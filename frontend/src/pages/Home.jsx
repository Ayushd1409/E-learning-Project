import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Card from '../components/Card'
import { UserData } from '../context/UserContext'
function Home() {
  const {isAuth}=UserData();
  return (
    <>
      <Navbar isAuth={isAuth}/>
      <Banner/>
      <Card/>
      <Footer/>
    </>
  )
}

export default Home
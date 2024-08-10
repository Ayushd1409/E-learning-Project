import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CourseData } from '../context/CourseContext.jsx';
import CourseCard from '../components/CourseCard.jsx';
import { UserData } from '../context/UserContext.jsx';
function Courses() {
    const {courses} = CourseData();
    const {isAuth}=UserData();
  return (
    <>
    <Navbar isAuth={isAuth}/>
    <div className='flex flex-col items-center justify-center min-h-screen md:mt-0 mt-10'>
    {/* <h1 className="hero-content font-bold text-2xl ">Available Courses</h1> */}
        <div className='w-full max-w-4xl px-4 md:flex md:justify-center'>
            {courses && courses.length>0 ? courses.map((e)=>(<CourseCard key={e._id} course={e}/>)): 
            (<p>No Courses Yet !!</p>)}
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Courses
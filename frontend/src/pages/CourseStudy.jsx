import React, { useEffect } from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { UserData } from '../context/UserContext';
import { useNavigate, useParams } from 'react-router-dom';
import { CourseData } from '../context/CourseContext';
import { server } from '../main';


function CourseStudy({user}) {

    const params = useParams();
    const { isAuth } = UserData();
    const {fetchCourse, course} = CourseData();

    const navigate = useNavigate();

    if(user && user.role !=="admin" && !user.subsciption.includes(params.id))
        return navigate("/");
    useEffect(()=>{
        fetchCourse(params.id)
    },[])
  return (
    <>
    <Navbar isAuth={isAuth} />

    {course && (

<div className="hero bg-base-50 min-h-screen">
<div className="hero-content flex-col lg:flex-row-reverse">
  <img
    src={`${server}/${course.image}`}
    className="max-w-sm rounded-lg shadow-2xl"
  />
  <div>
    <h1 className="text-4xl mb-3 font-bold">{course.title}</h1>
    <p className="py-2">Instructor: {course.createdBy}</p>
    <p className="py-2">Duration: {course.duration}</p>
    <p className="py-2">Duration: Rs.{course.price}</p>
     {/* <Link to='/lectures/:id'> */}
      <button
        
        onClick={() => navigate(`/lectures/${course._id}`)}
        className="text-white w-full btn btn-primary"
      >
        Lectures
      </button>
       {/* </Link> */}
  </div>
</div>
</div>
    )}

    <Footer />
    </>
  )
}

export default CourseStudy
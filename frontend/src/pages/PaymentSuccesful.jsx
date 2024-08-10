import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { UserData } from "../context/UserContext";
import { Link, useParams } from "react-router-dom";
import { CourseData } from "../context/CourseContext";



function PaymentSuccesful({ user }) {
  const { isAuth } = UserData();
  const { fetchCourse, course, fetchCourses, fetchMyCourse } = CourseData();
//   const { params } = useParams();
//   const {user} = UserData();
//   useEffect(() => {
//     // fetchCourse(id);
//   }, [id]);
  return (
    <>
      <Navbar isAuth={isAuth} />
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://www.creativefabrica.com/wp-content/uploads/2019/12/23/checklist-flat-icon-vector-Graphics-1.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Payment Successful</h1>
            <p className="">
              Your course subscription has been activated
            </p>
            <p className="mb-5">
              Your reference number - {user._id}
            </p>
            <Link to={`/${user._id}/dashboard`}>
            <button onClick={fetchMyCourse()} className="btn btn-primary">Go to the dashboard</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PaymentSuccesful;

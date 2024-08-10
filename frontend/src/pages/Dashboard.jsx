import React from "react";
import { UserData } from "../context/UserContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { server } from "../main.jsx";
import { CourseData } from "../context/CourseContext";
import CourseCard from "../components/CourseCard";

function Dashboard() {
  const { isAuth } = UserData();
  const { mycourse } = CourseData();
  
  console.log(mycourse);
  return (
    <>
      <Navbar isAuth={isAuth} />
      
      <div>
        {mycourse && mycourse.length > 0 ? (
          mycourse.map((e) => <CourseCard key={e._id} course={e} />)
        ) : (
          <p>No course Enrolled</p>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Dashboard;

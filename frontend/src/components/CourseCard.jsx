import React from "react";
import { server } from "../main";
import { UserData } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { CourseData } from "../context/CourseContext";

function CourseCard({ course }) {
  const navigate = useNavigate();
  const { user, isAuth } = UserData();

  const {fetchCourses}= CourseData();
  const deleteHandler = async(id)=>{
    if(confirm("Are you sure you want to delete??")){
      try {
        const {data} = await axios.delete(`${server}/api/course/${id}`,{headers:{
          token: localStorage.getItem("token"),
        },});
  
        toast.success(data.message);
        fetchCourses();
      } catch (error) {
        toast.error(error.response.data.message)
      }
    }
  }
  return (
    <>
      <div className="p-3">
        <div className="card bg-base-100 w-90 shadow-xl mt-3 hover:scale-105 hover:shadow-md hover:shadow-amber-400">
          <figure>
            <img src={`${server}/${course.image}`} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {course.title}
              <div className="badge font-thin text-red-700">
                By {course.createdBy}
              </div>
            </h2>
            <p>Duration - {course.duration} weeks</p>
            <div className="card-actions justify-between mt-3">
              <div className="badge badge-outline p-3">
                Price - ₹ {course.price}
              </div>

              {isAuth ? (
                <>
                  {user && user.role !== "admin" ? (
                    <>
                      {user.subscription.includes(course._id) ? (
                        <button
                          onClick={() => navigate(`/course/study/${course._id}`)}
                          className="badge badge-outline p-3 cursor-pointer bg-yellow-300 hover:bg-yellow-500 text-white duration-300"
                        >
                          Study
                        </button>
                      ) : (
                        <button
                          onClick={() => navigate(`/course/${course._id}`)}
                          className="badge badge-outline p-3 cursor-pointer bg-yellow-300 hover:bg-yellow-500 text-white duration-300"
                        >
                          Get Started
                        </button>
                      )}
                    </>
                  ) : (
                    <button
                      onClick={() => navigate(`/course/study/${course._id}`)}
                      className="badge badge-outline p-3 cursor-pointer bg-yellow-300 hover:bg-yellow-500 text-white duration-300"
                    >
                      Study
                    </button>
                  )}
                </>
              ) : (
                <button
                  onClick={() => navigate("/login")}
                  className="badge badge-outline p-3 cursor-pointer bg-yellow-300 hover:bg-yellow-500 text-white duration-300"
                >
                  Get Started
                </button>
              )}

              {
                user && user.role === "admin" && <button onClick={()=>deleteHandler(course._id)}
                
                className="badge badge-outline p-3 cursor-pointer bg-red-500 hover:bg-red-700 text-white duration-300"
              >Delete</button>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseCard;

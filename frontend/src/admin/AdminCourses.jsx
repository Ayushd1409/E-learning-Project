import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { UserData } from "../context/UserContext";
import Layout from "./Layout";
import { useNavigate } from "react-router-dom";
import { CourseData } from "../context/CourseContext";
import CourseCard from "../components/CourseCard";
import toast from "react-hot-toast";
import axios from "axios";
import { server } from "../main";

const categories = [
  "Web Development",
  "App Development",
  "Data Analysis",
  "Artificial Intelligence",
  "Cyber Security",
];

function AdminCourses({ user }) {
  const { isAuth } = UserData();

  const navigate = useNavigate();

  if (user && user.role !== "admin") return navigate("/");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const [duration, setDuration] = useState("");
  const [image, setImage] = useState("");
  const [imagePrev, setImagePrev] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);

  const changeImageHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };

  const { courses, fetchCourses } = CourseData();

  const submitHandler = async (e) => {
    e.preventDefault();
    setBtnLoading(true);

    const myForm = new FormData();

    myForm.append("title", title);
    myForm.append("description", description);
    myForm.append("category", category);
    myForm.append("price", price);
    myForm.append("createdBy", createdBy);
    myForm.append("duration", duration);
    myForm.append("file", image);

    try {
      const { data } = await axios.post(`${server}/api/course/new`, myForm, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });

      toast.success(data.message);
      setBtnLoading(false);
      await fetchCourses();
      setImage("");
      setTitle("");
      setDescription("");
      setDuration("");
      setImagePrev("");
      setCreatedBy("");
      setPrice("");
      setCategory("");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <Navbar isAuth={isAuth} />

      <Layout>
        <div className="hero min-h-screen flex flex-col md:mt-24 mt-20 bg-slate-100">
          {/* <h1>All courses</h1> */}
          {/* <div className="hero-content">
            {courses && courses.length > 0 ? (
              courses.map((e) => {
                return <CourseCard key={e._id} course={e} />;
              })
            ) : (
              <p>NO COURSES</p>
            )}
          </div> */}

          <div className="ml-3 md:ml-12 mt-10 md:mt-4">
            <form onSubmit={submitHandler}>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Title</span>
                </div>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Description</span>
                </div>
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Price</span>
                </div>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Created By</span>
                </div>
                <input
                  type="text"
                  value={createdBy}
                  onChange={(e) => setCreatedBy(e.target.value)}
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
              <div className="p-2 mt-6 md:mt-4 pl-0 mb-3">
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option className=" bg-slate-100" value={""}>
                    Select Category
                  </option>
                  {categories.map((e) => (
                    <option value={e} key={e}>
                      {e}
                    </option>
                  ))}
                </select>
              </div>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Duration</span>
                </div>
                <input
                  type="text"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
              <input
                type="file"
                onChange={changeImageHandler}
                className="mt-4 file-input file-input-bordered text-white w-full max-w-xs"
              />{" "}
              <div className="items-center justify-center flex pt-2">
                {imagePrev && (
                  <img src={imagePrev} alt="" width={150} height={80} />
                )}
              </div>
              <br />
              <button
                type="submit"
                disabled={btnLoading}
                className=" w-full text-white btn btn-warning"
              >
                {btnLoading ? "Please wait.." : "Add"}
              </button>
            </form>
          </div>
        </div>
      </Layout>

      <Footer />
    </>
  );
}

export default AdminCourses;
